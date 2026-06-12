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
    style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: bgPosition } : undefined}
  >
    {bg && <div className="absolute inset-0 bg-black/65" />}
    {!bg && <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(77_74%_42%/0.18),_transparent_60%)]" />}
    <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <div className="container-x relative z-10 text-center">
      {eyebrow && (
        <Reveal>
          <p className="eyebrow justify-center"><span className="h-px w-8 bg-primary-glow" /> {eyebrow}</p>
        </Reveal>
      )}
      <h1 className="h-display mt-4 text-balance text-white" style={bg ? { color: "#ffffff" } : undefined}>
        <SplitText text={title} />
      </h1>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/70" style={bg ? { color: "rgba(255,255,255,0.70)" } : undefined}>{subtitle}</p>
        </Reveal>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>
);

export default PageHero;
