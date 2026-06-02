import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const CountUp = ({ to, suffix = "", prefix = "", duration = 2, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </motion.span>
  );
};

export default CountUp;
