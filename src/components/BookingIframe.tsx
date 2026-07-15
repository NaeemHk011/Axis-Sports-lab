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

const BookingIframe = ({ src, id, title, initialHeight = 480, style }: BookingIframeProps) => {
  const [height, setHeight] = useState(initialHeight);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<IFrameResizerInstance>(null);

  useEffect(() => {
    if (!loaded || !iframeRef.current) return;
    const el = iframeRef.current;

    // GHL embeds iframeResizer.contentWindow.min.js — this parent script
    // sends the handshake that triggers GHL to start reporting its height.
    import("iframe-resizer/js/iframeResizer").then((mod) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const iFrameResize = (mod.default ?? mod) as any;
      if (typeof iFrameResize !== "function" || !el.isConnected) return;

      iFrameResize(
        {
          log: false,
          checkOrigin: false,
          onResized({ height: h }: { height: number }) {
            if (h > 0) setHeight(h);
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
    <div className="relative">
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
          ...style,
        }}
      />
    </div>
  );
};

export default BookingIframe;
