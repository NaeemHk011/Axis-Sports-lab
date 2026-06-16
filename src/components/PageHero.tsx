import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bg?: string;
  bgPosition?: string;
}

const PageHero = ({ eyebrow, title, subtitle, children, bg, bgPosition = "center" }: Props) => (
  <section
    className="relative overflow-hidden pb-10 pt-14 sm:pt-20 lg:pt-28"
    aria-label={title}
    style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}
  >
    {/* Optional photo overlay on top of banner */}
    {bg && (
      <div className="absolute inset-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: bgPosition }} />
    )}
    <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="container-x relative z-10 text-center">
      {eyebrow && (
        <Reveal>
          <p className="eyebrow justify-center"><span className="h-px w-8 bg-primary-glow" /> {eyebrow}</p>
        </Reveal>
      )}
      <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl uppercase font-black mt-4 text-balance text-white leading-none" style={bg ? { color: "#ffffff" } : undefined}>
        <SplitText text={title} />
      </h1>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl uppercase font-black text-white leading-tight" style={bg ? { color: "#ffffff" } : undefined}>{subtitle}</p>
        </Reveal>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>
);

export default PageHero;
