import { useState, useEffect } from "react";

interface BookingIframeProps {
  src: string;
  id: string;
  title: string;
  initialHeight?: number;
  style?: React.CSSProperties;
}

const BookingIframe = ({ src, id, title, initialHeight = 480, style }: BookingIframeProps) => {
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      try {
        const d = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (d && typeof d.height === "number" && d.height > 100) {
          setHeight(d.height);
        }
      } catch {
        // ignore non-JSON or unrelated messages
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      src={src}
      id={id}
      title={title}
      scrolling="yes"
      style={{
        width: "100%",
        border: "none",
        display: "block",
        height: `${height}px`,
        transition: "height 0.35s ease",
        ...style,
      }}
    />
  );
};

export default BookingIframe;
