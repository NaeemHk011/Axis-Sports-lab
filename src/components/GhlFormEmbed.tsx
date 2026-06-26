import { useState, useEffect } from "react";

interface GhlFormEmbedProps {
  src: string;
  formId: string;
  formName: string;
  height?: number;
  style?: React.CSSProperties;
}

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

const GhlFormEmbed = ({ src, formId, formName, height = 900, style }: GhlFormEmbedProps) => {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative">
      {(!mounted || !loaded) && <Loader height={height} />}
      {mounted && (
        <iframe
          src={src}
          style={{
            width: "100%",
            height: `${height}px`,
            border: "none",
            background: "transparent",
            display: loaded ? "block" : "none",
            marginBottom: "-6px",
            ...style,
          }}
          id={`inline-${formId}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height={height}
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title={formName}
          allowTransparency
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

export default GhlFormEmbed;
