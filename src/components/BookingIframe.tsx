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

  // GHL calendars (both individual /widget/booking/ and group /widget/group/) send height
  // via postMessage. Group calendars use nested iframes internally, so filtering by
  // event.source would block valid height messages — we guard by value range instead.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
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

      // Accept only plausible calendar heights; ignore noise from unrelated iframes
      if (h && h > 100 && h < 6000) setHeight(h);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Apply iframe-resizer to every calendar (works when GHL page includes contentWindow script)
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
          heightCalculationMethod: "lowestElement",
          onResized({ height: h }: { height: number }) {
            if (h > 100) setHeight(h);
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
          transition: "height 0.35s ease",
          verticalAlign: "bottom",
          ...style,
        }}
      />
    </div>
  );
};

export default BookingIframe;
