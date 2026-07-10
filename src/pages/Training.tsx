import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check, Target, Zap, Dumbbell, Crown, Users, Gauge, Activity, HeartPulse, Brain, Sparkles, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

const programs = [
  {
    icon: Target,
    title: "Shooting Classes",
    tag: "Mechanics & Form",
    body: "Improve your shooting form, consistency, and game-speed release. Classes cover mechanics, catch-and-shoot, off-dribble, and contested shots. Our coaches break down every aspect of your shot and rebuild it to be automatic under pressure.",
    features: ["Form Mechanics", "Catch & Shoot", "Off-Dribble", "Contested Shots", "Game Speed Reps"],
    link: "/shooting-classes-booking",
    accentColor: "rgba(141,187,28,0.85)",
    borderColor: "rgba(141,187,28,0.25)",
    hoverGradient: "linear-gradient(to top, rgba(141,187,28,0.75) 0%, rgba(141,187,28,0.25) 40%, transparent 70%)",
  },
  {
    icon: Zap,
    title: "Skills Training",
    tag: "Guard & Forward",
    body: "Complete guard and forward development. Ball handling, finishing, passing, and decision-making under pressure. We develop players who can impact the game in every situation   on and off the ball.",
    features: ["Ball Handling", "Finishing", "Passing", "Footwork", "Basketball IQ"],
    link: "/skills-training-booking",
    accentColor: "rgba(200,100,0,0.85)",
    borderColor: "rgba(255,160,0,0.25)",
    hoverGradient: "linear-gradient(to top, rgba(180,70,0,0.8) 0%, rgba(180,70,0,0.25) 45%, transparent 70%)",
  },
  {
    icon: Dumbbell,
    title: "Performance Training",
    tag: "Strength & Speed",
    body: "Sport-specific strength and conditioning. Vertical jump, lateral quickness, core strength, and overall explosiveness. We build elite athletes who dominate physically from tip-off to final buzzer.",
    features: ["Vertical Jump", "Lateral Speed", "Core Strength", "Explosiveness", "Injury Prevention"],
    link: "/performance-training-booking",
    accentColor: "rgba(0,140,80,0.85)",
    borderColor: "rgba(0,180,120,0.25)",
    hoverGradient: "linear-gradient(to top, rgba(0,120,70,0.75) 0%, rgba(0,120,70,0.2) 45%, transparent 70%)",
  },
  {
    icon: Crown,
    title: "Private 1-on-1 Training",
    tag: "Elite Development",
    body: "Fully personalized one-on-one sessions built around your individual weaknesses, strengths, and goals. Maximum attention from our elite coaches  every rep, every drill, every minute is yours.",
    features: ["Personalized Program", "Full Coach Focus", "Flexible Scheduling", "Rapid Skill Growth", "Custom Drills"],
    link: "/private-one-on-one-training",
    accentColor: "rgba(120,60,200,0.85)",
    borderColor: "rgba(150,80,230,0.25)",
    hoverGradient: "linear-gradient(to top, rgba(100,40,180,0.75) 0%, rgba(100,40,180,0.2) 45%, transparent 70%)",
  },
  {
    icon: Users,
    title: "Semi-Private Training",
    tag: "Small Group",
    body: "Train alongside 2–4 athletes in a focused small-group environment. Get personalized coaching at a fraction of the cost  push each other, compete, and grow together under expert guidance.",
    features: ["2–4 Athletes Per Session", "Coach-Led Drills", "Competitive Environment", "Affordable Pricing", "Team Chemistry"],
    link: "/semi-private-training",
    accentColor: "rgba(0,120,200,0.85)",
    borderColor: "rgba(0,160,240,0.25)",
    hoverGradient: "linear-gradient(to top, rgba(0,100,180,0.75) 0%, rgba(0,100,180,0.2) 45%, transparent 70%)",
  },
];

const benefits = [
  { n: "01", icon: Gauge,      title: "Agility & Speed",    body: "Get faster, quicker, more explosive through Axis Sports Lab drills built for elite athletes." },
  { n: "02", icon: Dumbbell,   title: "Strength",           body: "Strength training designed to push athletes and build a more injury-resistant body." },
  { n: "03", icon: Activity,   title: "Coordination",       body: "Coordination improves through mastering new movements. Heavy focus on core and balance." },
  { n: "04", icon: HeartPulse, title: "Conditioning",       body: "The best-conditioned athletes are the best athletes. Be in better shape than your competition." },
  { n: "05", icon: Brain,      title: "Basketball IQ",      body: "High IQ makes better players. We develop your game physically and mentally." },
  { n: "06", icon: Sparkles,   title: "Confidence",         body: "Practice breeds confidence. Plenty of reps, shots, and real game simulations." },
  { n: "07", icon: Target,     title: "Skill Mastery",      body: "10,000 hours to master a skill. We apply that method to your shot, dribbling, conditioning." },
  { n: "08", icon: Trophy,     title: "Goal Achievement",   body: "Our goal is to help every athlete become the best player they can be. Achieve ALL of them." },
];

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Training = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO   training.jpg full-bleed
         ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] w-full overflow-hidden flex items-center" aria-label="Training Hero">

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/pictures/banner-design.png"
            alt="Training"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Bottom fade to page bg */}
          {isDark && (
            <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
              style={{ background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)" }} />
          )}
        </div>

        {/* Red glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "500px", height: "500px",
              right: "8%", top: "50%",
              background: "radial-gradient(circle, rgba(141,187,28,0.20) 0%, transparent 65%)",
              transform: "translateY(-50%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 hero-dot-grid opacity-25 pointer-events-none" />

        {/* Particles */}
        <Particles count={16} />

        {/* Content */}
        <div className="relative z-10 container-x w-full py-16 sm:py-20 lg:py-28 text-center">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto">

            {/* Eyebrow */}
            <motion.div variants={item} className="mb-3">
              <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{
                  background: "rgba(10,10,10,0.65)",
                  border: "1px solid rgba(141,187,28,0.4)",
                  color: "#8dbb1c",
                  backdropFilter: "blur(12px)",
                }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8dbb1c] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8dbb1c]" />
                </span>
                Programs · Now Enrolling
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="page-h1 font-display uppercase"
              style={{ lineHeight: 0.90, letterSpacing: "-0.01em" }}>
              <span style={{ color: "#ffffff" }}>TRAIN </span>
              <span className="text-gradient-red">LIKE</span>
            </motion.div>
            <motion.div variants={item} className="page-h1 font-display uppercase"
              style={{ lineHeight: 0.90, letterSpacing: "-0.01em", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.85)" }}>
              A PRO.
            </motion.div>

            {/* Divider */}
            <motion.div variants={item} className="my-3 sm:my-5 flex justify-center">
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="origin-center h-[3px] w-16 rounded-full"
                style={{ background: "var(--gradient-red)", boxShadow: "0 0 18px rgba(141,187,28,0.75)" }}
              />
            </motion.div>

            <motion.p variants={item}
              className="text-sm sm:text-base leading-relaxed max-w-[420px] mx-auto"
              style={{ color: "rgba(255,255,255,0.62)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Choose your path to greatness. Every program is designed to elevate your game to the next level.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/skills-training-booking" className="btn-pill btn-pill-primary" style={{ fontSize: "0.9rem" }}>
                Book A Single Class
                <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link to="/membership" className="btn-pill btn-pill-ghost" style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Buy Monthly Membership
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROGRAMS   Cards
         ═══════════════════════════════════════════════════════ */}
      <section className="section" aria-label="Programs">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-4"><span className="h-px w-8 bg-primary-glow" /> Our Programs</p>
            <h2 className="h-section" style={{ color: hText }}>
              Every program built<br />
              <span className="text-gradient-red">for champions</span>
            </h2>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid gap-5 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <div className="card-bezel-outer h-full group cursor-pointer" style={{ borderColor: p.borderColor }}>
                  <div className="card-bezel-inner h-full p-5 sm:p-7 flex flex-col relative overflow-hidden">

                    {/* Ghost number */}
                    <span className="absolute top-4 right-5 font-display text-8xl leading-none select-none pointer-events-none"
                      style={{ color: hText, opacity: isDark ? 0.05 : 0.04 }}>0{i + 1}</span>

                    {/* Icon */}
                    <div className="relative mb-6 w-fit">
                      <div className="relative z-10 h-14 w-14 rounded-2xl grid place-items-center"
                        style={{ background: p.accentColor, boxShadow: `0 8px 24px -6px ${p.accentColor}` }}>
                        <p.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl animate-ping opacity-15"
                        style={{ background: p.accentColor, animationDuration: `${2.2 + i * 0.5}s` }} />
                    </div>

                    {/* Tag */}
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] mb-4 w-fit"
                      style={{ background: p.accentColor, color: "#fff" }}>
                      {p.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-3xl uppercase" style={{ color: hText }}>{p.title}</h3>

                    {/* Body */}
                    <p className="mt-4 text-sm leading-relaxed flex-1" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {p.body}
                    </p>

                    {/* Divider */}
                    <div className="my-5 h-px" style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)" }} />

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm"
                          style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          <div className="h-5 w-5 shrink-0 rounded-full grid place-items-center"
                            style={{ background: p.accentColor, opacity: 0.9 }}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to={p.link}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                      style={{ color: "#8dbb1c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Reserve Your Spot <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY TRAIN WITH US   8 reasons
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative" aria-label="Why train with us">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(77_74%_42%/0.13),_transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Why Train With Us</p>
            <h2 className="h-section" style={{ color: hText }}>
              8 reasons our athletes<br /><span className="text-gradient-red">become elite</span>
            </h2>
          </Reveal>

          <div className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.n} delay={(i % 4) * 0.09}>
                <TiltCard style={{ perspective: "900px" }} className="h-full">
                  <div className="benefits-card card-elite h-full relative overflow-hidden p-6"
                    style={{ borderTop: i % 2 === 0 ? "2px solid rgba(141,187,28,0.4)" : "1px solid hsl(var(--border))" }}>
                    <div className="flex items-start justify-between mb-5">
                      <div className="h-11 w-11 rounded-xl grid place-items-center transition-all duration-500 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, hsl(77 74% 32%), hsl(77 74% 42%))", boxShadow: "0 4px 14px -4px rgba(141,187,28,0.5)" }}>
                        <b.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-display text-4xl animate-count-flicker" style={{ color: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)" }}>{b.n}</span>
                    </div>
                    <h3 className="font-display text-xl uppercase" style={{ color: hText }}>{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{b.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" aria-label="CTA">
        <div className="absolute inset-0 -z-10" style={{
          background: isDark
            ? "linear-gradient(135deg, #080808 0%, #0d1a00 30%, #1a2e00 55%, #0d1a00 80%, #080808 100%)"
            : "linear-gradient(135deg, #f7fff0 0%, #e8ffd8 40%, #d8ffbe 55%, #e8ffd8 80%, #f7fff0 100%)"
        }} />
        <div className="absolute inset-0 -z-10 bg-grid-sm opacity-25" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(141,187,28,0.18), transparent 70%)", animation: "glow-beat 5s ease-in-out infinite" }} />
        </div>

        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow justify-center mb-6"><span className="h-px w-8 bg-primary-glow" /> Get Started</p>
            <h2 className="h-section text-balance mx-auto" style={{ color: isDark ? "#ffffff" : "#111111", maxWidth: "700px" }}>
              Ready to become <span className="text-gradient-red">elite?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed"
              style={{ color: isDark ? "rgba(255,255,255,0.62)" : "rgba(0,0,0,0.62)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Book your FREE Evaluation Workout and let our coaches build your personalized roadmap.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/skills-training-booking" className="btn-pill btn-pill-primary">
                Book A Single Class
                <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link to="/membership" className="btn-pill btn-pill-ghost" style={{ color: "#ffffff" }}>
                Buy Monthly Membership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Training;
