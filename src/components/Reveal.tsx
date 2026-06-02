import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

const Reveal = ({ children, delay = 0, y = 30, className, as = "div" }: Props) => {
  const reduce = useReducedMotion();
  const M = motion[as];
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </M>
  );
};

export default Reveal;
