import { useMemo } from "react";

/** Floating stadium-light particles + sweeping spotlight rays. Pure CSS/SVG, no canvas. */
const Particles = ({ count = 40 }: { count?: number }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 6,
        dur: 6 + Math.random() * 8,
        op: 0.3 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sweeping spotlights */}
      <div
        className="absolute -top-1/4 left-0 h-[150%] w-[40%] origin-top-left animate-spotlight-sweep"
        style={{
          background:
            "linear-gradient(100deg, transparent 40%, hsl(77 74% 42% / 0.10) 50%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -top-1/4 left-0 h-[150%] w-[40%] origin-top-left animate-spotlight-sweep"
        style={{
          background:
            "linear-gradient(100deg, transparent 40%, hsl(0 0% 100% / 0.05) 50%, transparent 60%)",
          filter: "blur(20px)",
          animationDelay: "4s",
        }}
      />

      {/* Particles */}
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.op,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            animation: `float-particle ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
