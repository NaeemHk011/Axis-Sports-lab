import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom red-glow cursor (desktop only). Hides on touch devices via CSS media query.
 */
const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role='button'], input, textarea, select"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary-glow"
      />
      <motion.div
        aria-hidden
        style={{ translateX: sx, translateY: sy }}
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary"
        // glow
        // box-shadow inline for perf
      >
        <span className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 24px hsl(77 74% 42% / 0.6)" }} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
