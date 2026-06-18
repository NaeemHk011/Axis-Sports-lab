import { Check, Phone, Star, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import BookingIframe from "@/components/BookingIframe";

const expect = [
  "30-minute session with our coaching staff",
  "Full athletic assessment",
  "Personalized feedback session",
  "Custom program recommendation",
  "Zero pressure    100% value",
];

const stats = [
  { icon: Star,   value: "100%", label: "Free    No Cost" },
  { icon: Zap,    value: "30",   label: "Minute Session" },
  { icon: Target, value: "1-on", label: "1 Coaching" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const EvaluationWorkout = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[58vh] md:min-h-[62vh] w-full overflow-hidden flex items-center" aria-label="Free Evaluation Workout">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/pictures/banner-design.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          {isDark && (
            <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
              style={{ background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)" }} />
          )}
        </div>

        {/* Red glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div className="absolute rounded-full"
            style={{ width: "500px", height: "500px", right: "5%", top: "50%", transform: "translateY(-50%)",
              background: "radial-gradient(circle, rgba(141,187,28,0.22) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="absolute rounded-full"
            style={{ width: "300px", height: "300px", right: "22%", top: "-5%",
              background: "radial-gradient(circle, rgba(141,187,28,0.14) 0%, transparent 65%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 hero-dot-grid opacity-25 pointer-events-none" />

        {/* Particles */}
        <Particles count={14} />

        {/* Content */}
        <div className="relative z-10 container-x w-full py-16 sm:py-20 lg:py-28 text-center">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto">

            {/* Eyebrow badge */}
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ background: "rgba(10,10,10,0.65)", border: "1px solid rgba(141,187,28,0.4)", color: "#d4ff70", backdropFilter: "blur(12px)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8dbb1c] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8dbb1c]" />
                </span>
                100% Free · No Commitment
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="font-display uppercase leading-[0.88] tracking-tight" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              <span style={{ color: "#ffffff" }}>BOOK YOUR </span>
              <span className="text-gradient-red">FREE</span>
            </motion.div>
            <motion.div variants={item} className="font-display uppercase leading-[0.88] tracking-tight" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.85)" }}>
              EVALUATION.
            </motion.div>

            {/* Divider */}
            <motion.div variants={item} className="my-4 sm:my-5">
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="origin-center h-[3px] w-16 rounded-full mx-auto"
                style={{ background: "var(--gradient-red)", boxShadow: "0 0 18px rgba(141,187,28,0.75)" }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={item} className="text-sm sm:text-base leading-relaxed max-w-[440px] mx-auto"
              style={{ color: "rgba(255,255,255,0.62)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Let our coaches assess your current level and build your personalized development plan    at zero cost.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-4 justify-center">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 rounded-xl px-4 py-2.5"
                  style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)", border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.12)"}` }}>
                  <s.icon className="h-4 w-4 text-primary-glow shrink-0" />
                  <div>
                    <p className="font-display text-lg leading-none" style={{ color: "#ffffff" }}>{s.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] mt-0.5" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>What to Expect</h2>
            <ul className="mt-6 space-y-3">
              {expect.map((e) => (
                <li key={e} className="flex items-start gap-3 rounded-xl bg-[hsl(var(--surface))] p-4 text-sm"
                  style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.10)"}`, color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.75)" }}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /> {e}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card-elite">
              <p className="eyebrow">Book a Time</p>
              <h3 className="mt-3 font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Free Training Assessment
              </h3>
              <p className="mt-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                Select an available slot below to book your free evaluation workout.
              </p>

              <div className="mt-6 w-full rounded-xl overflow-hidden" style={{ background: isDark ? "#0a0a0a" : "#f5f5f5" }}>
                <BookingIframe
                  src="https://link.webtechs.dev/widget/group/oitWtIUJqP835Vu2bO97"
                  id="oitWtIUJqP835Vu2bO97_1780503810592"
                  title="Free Training Assessment"
                />
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                <Phone className="h-4 w-4 text-primary-glow" /> Have questions? Call us at{" "}
                <a className="font-semibold" style={{ color: isDark ? "#ffffff" : "#111111" }} href="tel:+13465508150">(346) 550-8150</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default EvaluationWorkout;
