import { useState, useEffect, useRef } from "react";

interface BookingIframeProps {
  src: string;
  id: string;
  title: string;
  initialHeight?: number;
  style?: React.CSSProperties;
}

type IFrameResizerInstance = HTMLIFrameElement & {
  iFrameResizer?: { close(): void };
};

const Loader = ({ height }: { height: number }) => (
  <div
    className="flex flex-col items-center justify-center gap-5 bg-background"
    style={{ height: `${height}px` }}
  >
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full" style={{ border: "2px solid rgba(141,187,28,0.15)" }} />
      <div className="absolute inset-0 rounded-full animate-spin" style={{ border: "2px solid transparent", borderTopColor: "#8dbb1c" }} />
    </div>
    <div className="w-64 space-y-3">
      {[100, 100, 75, 100, 55].map((w, i) => (
        <div key={i} className="h-9 rounded-lg animate-pulse"
          style={{ background: "rgba(141,187,28,0.07)", width: `${w}%` }} />
      ))}
    </div>
    <p className="text-[11px] uppercase tracking-[0.2em]"
      style={{ color: "rgba(141,187,28,0.45)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      Loading...
    </p>
  </div>
);

const BookingIframe = ({ src, id, title, initialHeight = 800, style }: BookingIframeProps) => {
  const [height, setHeight] = useState(initialHeight);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<IFrameResizerInstance>(null);

  // Primary: GHL native postMessage height protocol.
  // Filtered to GHL's root domain + core GHL domains to block unrelated iframes
  // (analytics, GTM) that also send { height } messages and would override GHL's value.
  // 200ms debounce prevents rapid-fire messages from causing layout thrash.
  useEffect(() => {
    let rootDomain = "";
    try {
      const parts = new URL(src).hostname.split(".");
      rootDomain = parts.slice(-2).join(".");
    } catch { /* noop */ }

    const GHL_DOMAINS = ["gohighlevel.com", "leadconnectorhq.com", "msgsndr.com"];

    const isAllowed = (origin: string): boolean => {
      try {
        const h = new URL(origin).hostname;
        if (rootDomain && (h === rootDomain || h.endsWith("." + rootDomain))) return true;
        return GHL_DOMAINS.some(d => h === d || h.endsWith("." + d));
      } catch { return false; }
    };

    let debounceTimer: ReturnType<typeof setTimeout>;

    const handleMessage = (event: MessageEvent) => {
      if (!isAllowed(event.origin)) return;

      const data = event.data;
      let h: number | undefined;

      if (typeof data === "string") {
        try {
          const parsed = JSON.parse(data);
          h = parsed?.height ?? parsed?.frameHeight ?? parsed?.value ?? parsed?.payload?.height;
        } catch {
          if (data.startsWith("setHeight:")) h = Number(data.split(":")[1]);
        }
      } else if (data && typeof data === "object") {
        h = data.height ?? data.frameHeight ?? data.value ?? data.payload?.height;
      }

      if (h && h > 100 && h < 6000) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => setHeight(h!), 200);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(debounceTimer);
    };
  }, [src]);

  // Secondary: iframeResizer - measures actual content height inside the iframe
  // and shrinks the container when there is white space below the calendar or form.
  // Works when GHL page includes iframeResizer.contentWindow.js (some GHL setups do).
  // Safe no-op if the content script is absent.
  useEffect(() => {
    if (!loaded || !iframeRef.current) return;
    const el = iframeRef.current;

    import("iframe-resizer/js/iframeResizer").then((mod) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const iFrameResize = (mod.default ?? mod) as any;
      if (typeof iFrameResize !== "function" || !el.isConnected) return;

      iFrameResize(
        {
          log: false,
          checkOrigin: false,
          onResized({ height: h }: { height: number }) {
            if (h > 100 && h < 6000) setHeight(h);
          },
        },
        el
      );
    });

    return () => {
      el.iFrameResizer?.close();
    };
  }, [loaded]);

  return (
    <div className="relative" style={{ fontSize: 0, lineHeight: 0 }}>
      {!loaded && <Loader height={height} />}
      <iframe
        ref={iframeRef}
        src={src}
        id={id}
        title={title}
        scrolling="no"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          border: "none",
          display: loaded ? "block" : "none",
          height: `${height}px`,
          verticalAlign: "bottom",
          ...style,
        }}
      />
    </div>
  );
};

export default BookingIframe;
