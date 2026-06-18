import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Target,
  Zap,
  Dumbbell,
  Shield,
  Gauge,
  Brain,
  Sparkles,
  Trophy,
  HeartPulse,
  Activity,
  Instagram,
  Star,
  CheckCircle2,
  ClipboardList,
  Calendar,
  RotateCw,
  ChevronRight,
} from "lucide-react";
import Particles from "@/components/Particles";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import img01 from "../assets/01.jpg";
import img02 from "../assets/02.jpg";
import img03 from "../assets/03.png";
import img04 from "../assets/04.png";
import img05 from "../assets/05.png";
import img06 from "../assets/06.png";

/* ─── DATA ───────────────────────────────────────────────── */
const services = [
  {
    icon: Target,
    title: "Shooting Classes",
    tag: "Mechanics & Form",
    body: "Master your shot with progressive drills designed by elite coaches. Mechanics, catch-and-shoot, off-dribble, and contested shots at game speed.",
    href: "/training",
    stat: "98%",
    statLabel: "shot form retention",
  },
  {
    icon: Zap,
    title: "Skills Training",
    tag: "Guard & Forward",
    body: "Complete guard and forward development. Dribbling, footwork, finishing, passing, and decision-making under pressure.",
    href: "/training",
    stat: "3×",
    statLabel: "faster development",
  },
  {
    icon: Dumbbell,
    title: "Athlete Training",
    tag: "Strength & Speed",
    body: "Full-body athletic development   strength, speed, agility, vertical jump, lateral quickness, and core explosiveness.",
    href: "/training",
    stat: "+6\"",
    statLabel: "avg vertical gain",
  },
  {
    icon: Shield,
    title: "Elite Camps",
    tag: "Multi-Day Intensive",
    body: "Intensive multi-day basketball camps for youth athletes serious about their game. High-level coaching, real game reps, elite competition.",
    href: "/camps",
    stat: "500+",
    statLabel: "athletes through camp",
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

const steps = [
  { n: "01", icon: ClipboardList, title: "Free Evaluation", body: "Book your FREE evaluation workout. Coaches assess skill, athleticism, basketball IQ   then build your roadmap." },
  { n: "02", icon: Brain,         title: "Custom Plan",     body: "Personalized 360° development plan targeting your exact weaknesses   from shooting mechanics to explosion." },
  { n: "03", icon: Trophy,        title: "Train & Dominate",body: "Execute your plan with elite coaching, rep by rep. Track measurable progress and dominate." },
];

const testimonials = [
  { quote: "Axis Sports Lab completely transformed my game. My shooting percentage went from 28% to 46% in 3 months. Coach operates on a different level.", name: "Marcus J.", role: "Point Guard · Age 16", stars: 5 },
  { quote: "My son gained 6 inches on his vertical and earned a varsity spot. Axis Sports Lab Athletics is the real deal   elite training, elite results.", name: "Mrs. Williams", role: "Parent of Athlete", stars: 5 },
  { quote: "I've trained at multiple academies. Nothing comes close to Axis Sports Lab. The conditioning program alone is worth it   fastest player on my team.", name: "Tyler R.", role: "Small Forward · Age 17", stars: 5 },
];

const partners = ["NIKE", "SPALDING", "GATORADE", "WILSON", "UNDER ARMOUR", "POWERADE"];

const galleryImages = [img01, img02, img03, img04, img05, img06];

/* ─── SPRING CONFIG ────────────────────────────────────── */
const spring = { type: "spring", stiffness: 100, damping: 20 };

/* ─── FADE IMAGE ─────────────────────────────────────────── */
function FadeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease" }}
    />
  );
}

/* ─── TILT CARD ─────────────────────────────────────────── */
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

/* ─── HOME PAGE ──────────────────────────────────────────── */
const Home = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        if (!vid || !isDark) return;
        if (entry.isIntersecting && vid.ended) {
          vid.currentTime = 0;
          vid.play().catch(() => {});
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  const heroImage = resolvedTheme === "light" ? "/axis sports lab - image  02.jpg (1).jpeg" : "/hero-image2.jpg";
  const hText   = isDark ? "#ffffff" : "#111111";
  const hMuted  = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";
  const hBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.10)";

  /* stagger variants */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO   Cinematic Full-Bleed
         ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[calc(100svh-64px)] w-full overflow-hidden" aria-label="Hero">

        {/* ── Layer 1: Background   video always in DOM, image shown in light ── */}
        <div className="absolute inset-0">
          {/* Video: always mounted so it never restarts on theme change */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ zIndex: 0, display: isDark ? "block" : "none" }}
          >
            <source src="/baskitball.mp4" type="video/mp4" />
          </video>
          {/* Image: light theme only */}
          <img
            src={heroImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ zIndex: 0, display: isDark ? "none" : "block" }}
          />
          {/* Overlay */}
          <div className="absolute inset-0" style={{
            background: isDark
              ? "linear-gradient(100deg, rgba(6,6,10,0.88) 0%, rgba(6,6,10,0.72) 35%, rgba(6,6,10,0.38) 60%, rgba(6,6,10,0.10) 80%, transparent 100%)"
              : "linear-gradient(100deg, rgba(6,6,10,0.80) 0%, rgba(6,6,10,0.60) 35%, rgba(6,6,10,0.22) 60%, rgba(6,6,10,0.04) 80%, transparent 100%)"
          }} />
          {/* Bottom fade   matches page bg */}
          <div className="absolute bottom-0 inset-x-0 h-52 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${isDark ? "#0A0A0A" : "#f8f8f8"} 0%, transparent 100%)` }} />
        </div>

        {/* ── Layer 2: Animated red glow orbs ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main orb   large, pulsing behind image */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "600px", height: "600px",
              right: "5%", top: "50%",
              background: "radial-gradient(circle, rgba(141,187,28,0.22) 0%, transparent 65%)",
              transform: "translateY(-50%)",
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Secondary orb   top right */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "350px", height: "350px",
              right: "20%", top: "-5%",
              background: "radial-gradient(circle, rgba(141,187,28,0.14) 0%, transparent 65%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Accent orb   bottom left */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "280px", height: "280px",
              left: "25%", bottom: "0%",
              background: "radial-gradient(circle, rgba(141,187,28,0.10) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* ── Layer 3: Dot grid texture ── */}
        <div className="absolute inset-0 hero-dot-grid opacity-30 pointer-events-none" />

        {/* ── Layer 4: Giant "ELITE" watermark ── */}
        <div
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <motion.span
            className="font-display uppercase whitespace-nowrap"
            style={{
              fontSize: "clamp(10rem, 26vw, 340px)",
              lineHeight: 1,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.024)",
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            ELITE
          </motion.span>
        </div>

        {/* ── Layer 5: Diagonal red slash accent ── */}
        <motion.div
          className="pointer-events-none absolute hidden lg:block"
          style={{
            width: "3px",
            height: "220px",
            background: "linear-gradient(to bottom, transparent, #8dbb1c 30%, #8dbb1c 70%, transparent)",
            boxShadow: "0 0 16px rgba(141,187,28,0.65), 0 0 32px rgba(141,187,28,0.3)",
            left: "calc(50% - 60px)",
            top: "50%",
            transform: "translateY(-50%) rotate(-22deg)",
            zIndex: 2,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Layer 6: Particles ── */}
        <Particles count={22} />

        {/* ── Layer 7: Content ── */}
        <div className="relative flex min-h-[calc(100svh-64px)] items-center" style={{ zIndex: 3 }}>
          <div className="container-x w-full py-6 sm:py-8 lg:py-10">
            <motion.div
              variants={container} initial="hidden" animate="show"
              className="max-w-[580px]"
            >
              {/* Live badge */}
              <motion.div variants={item} className="mb-2 sm:mb-4">
                <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{
                    background: "rgba(10,10,10,0.65)",
                    border: "1px solid rgba(141,187,28,0.4)",
                    color: "#d4ff70",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8dbb1c] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8dbb1c]" />
                  </span>
                  Est. 2017 · Katy, Texas · Now Enrolling
                </span>
              </motion.div>

              {/* Heading */}
              <div className="overflow-hidden">
                <motion.div variants={item} className="hero-h1-lg font-display uppercase"
                  style={{ lineHeight: 0.90, letterSpacing: "-0.01em" }}>
                  <span style={{ color: "#ffffff" }}>THE </span>
                  <span className="text-gradient-red">DIGITAL</span>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={item} className="hero-h1-xl font-display uppercase"
                  style={{ lineHeight: 0.88, letterSpacing: "-0.01em", color: "#ffffff" }}>
                  INFRASTRUCTURE
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div variants={item} className="hero-h1-lg font-display uppercase"
                  style={{ lineHeight: 0.90, letterSpacing: "-0.01em" }}>
                  <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.88)" }}>FOR ELITE</span>
                  <span className="text-gradient-red"> ATHLETES.</span>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div variants={item} className="my-2 sm:my-3 lg:my-5">
                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="origin-left h-[3px] w-16 rounded-full"
                  style={{ background: "var(--gradient-red)", boxShadow: "0 0 18px rgba(141,187,28,0.75)" }}
                />
              </motion.div>

              {/* Subtext */}
              <motion.p variants={item}
                className="text-sm md:text-sm leading-snug md:leading-relaxed max-w-[400px]"
                style={{ color: "rgba(255,255,255,0.62)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Axis Sports Lab integrates advanced <strong style={{ color: "#ffffff" }}>sports science, biomechanics, and data tracking</strong> to optimize human performance. We don't just run drills; we build engineered athletes from the mind, body, and spirit up.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={item} className="mt-3 sm:mt-4 lg:mt-7 flex flex-wrap items-center gap-3">
                <Link to="/evaluation-workout" className="btn-pill btn-pill-primary" style={{ fontSize: "0.9rem", paddingLeft: "1.4rem", paddingRight: "1rem" }}>
                  Claim Free Assessment
                  <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
                </Link>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="btn-pill btn-pill-ghost" style={{ fontSize: "0.9rem" }}>
                  Explore the Tech
                </button>
              </motion.div>

            </motion.div>
          </div>
        </div>



        <div className="hero-streak" style={{ zIndex: 6 }} />
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR   Red gradient with spotlight sweep
         ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" aria-label="Stats">
        <div className="relative py-12 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #465d0e 0%, #8dbb1c 45%, #5a7712 100%)" }}>
          {/* Spotlight sweep */}
          <div className="pointer-events-none absolute -inset-y-4 left-0 w-1/2 opacity-15"
            style={{ background: "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)", animation: "spotlight-sweep 7s ease-in-out 1s infinite" }} />
          <div className="bg-grid-sm absolute inset-0 opacity-20" />

          <div className="container-x relative">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { n: 500, suf: "+",  label: "Athletes Trained",    icon: Trophy },
                { n: 8,   suf: "+",  label: "Years of Excellence", icon: Calendar },
                { n: 4,   suf: "",   label: "Core Programs",       icon: Target },
                { n: 360, suf: "°",  label: "Athlete Development", icon: RotateCw },
              ].map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center py-6 text-center gap-3">
                  <div className="h-10 w-10 rounded-full grid place-items-center bg-white/10">
                    <s.icon className="h-5 w-5 text-white/80" />
                  </div>
                  <CountUp to={s.n} suffix={s.suf} className="font-display text-4xl sm:text-5xl text-white leading-none" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES   Asymmetric Bento Grid
         ═══════════════════════════════════════════════════════ */}
      <section id="services" className="section" aria-label="Services">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-2">
            {/* Left — heading */}
            <Reveal>
              <p className="eyebrow mb-4"><span className="h-px w-8 bg-primary-glow" /> What We Offer</p>
              <h2 className="h-section" style={{ color: hText }}>
                Choose your path<br />
                <span className="text-gradient-red">to greatness</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif", maxWidth: "400px" }}>
                Four elite programs built to develop every dimension of your athletic game.
              </p>
            </Reveal>

            {/* Right — Free Evaluation card */}
            <Reveal delay={0.15}>
              <TiltCard style={{ perspective: "900px" }}>
                <div
                  className="card-img-bg group relative overflow-hidden rounded-[1.6rem] min-h-[220px] flex flex-col justify-end cursor-pointer"
                  style={{ border: "2px solid rgba(141,187,28,0.70)", boxShadow: "0 0 40px rgba(141,187,28,0.18), 0 0 80px rgba(141,187,28,0.08)" }}
                  onClick={() => navigate("/evaluation-workout")}
                >
                  {/* BG */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1a00 0%, #0a0a0a 60%, #0d1a00 100%)" }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(141,187,28,0.25) 0%, transparent 70%)" }} />

                  {/* FREE badge */}
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em]"
                      style={{ background: "#8dbb1c", color: "#0a0a0a", boxShadow: "0 0 20px rgba(141,187,28,0.60)" }}>
                      ★ 100% FREE
                    </span>
                  </div>

                  {/* Ghost number */}
                  <span className="absolute top-5 right-6 font-display text-9xl leading-none pointer-events-none select-none"
                    style={{ color: "rgba(141,187,28,0.12)" }}>00</span>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="font-display text-2xl uppercase text-white leading-tight">
                      Free Evaluation
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 max-w-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Get a complete assessment of your skill, athleticism, and basketball IQ. Our coaches build your personalized roadmap — at zero cost.
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <Link to="/evaluation-workout"
                        className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide group-hover:gap-3 transition-all duration-300"
                        style={{ color: "#8dbb1c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        onClick={e => e.stopPropagation()}>
                        Book Now <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="font-display text-4xl leading-none" style={{ color: "#8dbb1c" }}>$0</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Bento: picture-based cards */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">

            {/* CARD 1   SHOOTING CLASSES   Large (col-span-7), net/ball image */}
            <Reveal delay={0} className="lg:col-span-7">
              <TiltCard style={{ perspective: "900px" }} className="h-full">
                <div className="card-img-bg group relative overflow-hidden rounded-[1.6rem] min-h-[260px] sm:min-h-[240px] sm:min-h-[280px] flex flex-col justify-end cursor-pointer"
                  style={{ border: "1px solid rgba(141,187,28,0.25)", backgroundColor: "#0d1a00" }}
                  onClick={() => navigate("/skills-training-booking")}>
                  {/* BG image */}
                  <FadeImg
                    src="/pictures/gc-shooting.jpg"
                    alt="Shooting Classes"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(141,187,28,0.75) 0%, rgba(141,187,28,0.25) 40%, transparent 70%)" }} />

                  {/* Number ghost */}
                  <span className="absolute top-5 right-6 font-display text-9xl leading-none pointer-events-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-500">01</span>

                  {/* Tag pill */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em]"
                      style={{ background: "rgba(141,187,28,0.85)", color: "#fff" }}>
                      <Target className="h-3 w-3" /> Mechanics & Form
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h3 className="font-display text-4xl uppercase text-white">Shooting Classes</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 max-w-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Biomechanical Shooting Optimization. Master your shot utilizing progressive micro-drills, catch-and-shoot mechanics, and game-speed release analysis to ensure maximum form retention.
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <Link to="/skills-training-booking" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Reserve Your Spot <ArrowRight className="h-4 w-4" />
                      </Link>
                      <div className="text-right">
                        <p className="font-display text-4xl leading-none text-white">98%</p>
                        <p className="text-[9px] uppercase tracking-wider text-white/55 mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>shot form retention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* CARD 2   SKILLS TRAINING   Small (col-span-5), dribbling/player */}
            <Reveal delay={0.1} className="lg:col-span-5">
              <TiltCard style={{ perspective: "900px" }} className="h-full">
                <div className="card-img-bg group relative overflow-hidden rounded-[1.6rem] min-h-[260px] sm:min-h-[240px] sm:min-h-[280px] flex flex-col justify-end cursor-pointer"
                  style={{ border: "1px solid rgba(255,160,0,0.25)", backgroundColor: "#1a0c00" }}
                  onClick={() => navigate("/skills-training-booking")}>
                  <FadeImg
                    src="/pictures/gc-skills.jpg"
                    alt="Skills Training"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Warm orange-red overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#1a0800]/60 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(180,70,0,0.8) 0%, rgba(180,70,0,0.25) 45%, transparent 70%)" }} />

                  <span className="absolute top-5 right-5 font-display text-9xl leading-none pointer-events-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-500">02</span>

                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em]"
                      style={{ background: "rgba(200,100,0,0.85)", color: "#fff" }}>
                      <Zap className="h-3 w-3" /> Guard & Forward
                    </span>
                  </div>

                  <div className="relative z-10 p-6">
                    <h3 className="font-display text-4xl uppercase text-white">Skills Training</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Neuromuscular Skill Acquisition. Complete guard and forward development. Enhancing processing speed, spatial awareness, footwork efficiency, and decision-making under high environmental pressure.
                    </p>
                    <Link to="/skills-training-booking" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Reserve Your Spot <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* CARD 3   ATHLETE TRAINING   Small (col-span-5), jump/dunk */}
            <Reveal delay={0.2} className="lg:col-span-5">
              <TiltCard style={{ perspective: "900px" }} className="h-full">
                <div className="card-img-bg group relative overflow-hidden rounded-[1.6rem] min-h-[240px] sm:min-h-[280px] flex flex-col justify-end cursor-pointer"
                  style={{ border: "1px solid rgba(0,180,120,0.25)", backgroundColor: "#001a0d" }}
                  onClick={() => navigate("/skills-training-booking")}>
                  <FadeImg
                    src="/pictures/gc-athlete.jpg"
                    alt="Athlete Training"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Deep teal-green cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#001a10]/65 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(0,120,70,0.75) 0%, rgba(0,120,70,0.2) 45%, transparent 70%)" }} />

                  <span className="absolute top-5 right-5 font-display text-9xl leading-none pointer-events-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-500">03</span>

                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em]"
                      style={{ background: "rgba(0,140,80,0.85)", color: "#fff" }}>
                      <Dumbbell className="h-3 w-3" /> Strength & Speed
                    </span>
                  </div>

                  <div className="relative z-10 p-6">
                    <h3 className="font-display text-4xl uppercase text-white">Athlete Training</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Kinetic Performance & Plyometrics. Full-body athletic data optimization focusing on rate of force development (RFD), vertical velocity, deceleration mechanics, and injury-prevention infrastructure.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Link to="/skills-training-booking" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Reserve Your Spot <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="font-display text-4xl text-white/90">+6"</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* CARD 4   ELITE CAMPS   Large (col-span-7), silhouette/sunset */}
            <Reveal delay={0.3} className="lg:col-span-7">
              <TiltCard style={{ perspective: "900px" }} className="h-full">
                <div className="card-img-bg group relative overflow-hidden rounded-[1.6rem] min-h-[240px] sm:min-h-[280px] flex flex-col justify-end cursor-pointer"
                  style={{ border: "1px solid rgba(100,80,255,0.25)", backgroundColor: "#08001a" }}
                  onClick={() => navigate("/camps")}>
                  <FadeImg
                    src="/pictures/gc-camps.jpg"
                    alt="Elite Camps"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Deep purple-blue cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-[#0a0018]/70 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(80,40,200,0.75) 0%, rgba(80,40,200,0.2) 45%, transparent 70%)" }} />

                  <span className="absolute top-5 right-6 font-display text-9xl leading-none pointer-events-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-500">04</span>

                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em]"
                      style={{ background: "rgba(90,50,220,0.85)", color: "#fff" }}>
                      <Shield className="h-3 w-3" /> Multi-Day Intensive
                    </span>
                  </div>

                  <div className="relative z-10 p-6">
                    <h3 className="font-display text-4xl uppercase text-white">Elite Camps</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 max-w-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      High-Intensity Lab Diagnostics. Multi-day athletic crucibles combining real-time competitive evaluation, high-velocity repetitions, and comprehensive data feedback metrics.
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <Link to="/camps" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        View Upcoming Camps <ArrowRight className="h-4 w-4" />
                      </Link>
                      <div className="text-right">
                        <p className="font-display text-4xl leading-none text-white">500+</p>
                        <p className="text-[9px] uppercase tracking-wider text-white/55 mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>athletes through camp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE PROCESS   Timeline with connecting line
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" aria-label="The Process">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_hsl(77_74%_42%/0.1),_transparent_70%)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> How It Works</p>
            <h2 className="h-section" style={{ color: hText }}>
              Your path to <span className="text-gradient-red">elite</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-md mx-auto" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Three decisive steps separate where you are from where you want to be.
            </p>
          </Reveal>

          <div className="mt-8 sm:mt-12 relative">
            {/* Animated connecting line (desktop) */}
            <div className="hidden md:block absolute top-11 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px z-0"
              style={{ background: "linear-gradient(90deg, transparent, hsl(77 74% 42% / 0.6) 20%, hsl(77 74% 42% / 0.6) 80%, transparent)" }} />

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.15}>
                  <TiltCard style={{ perspective: "900px" }} className="h-full">
                    <div className="card-bezel-outer h-full">
                      <div className="card-bezel-inner h-full p-7 relative overflow-hidden">
                        {/* Ghost step number */}
                        <span className="absolute top-4 right-4 font-display text-7xl leading-none select-none pointer-events-none animate-count-flicker"
                          style={{ color: hText, opacity: isDark ? 0.06 : 0.04 }}>{step.n}</span>

                        {/* Icon with pulse rings */}
                        <div className="relative mb-6 w-fit">
                          <div className="relative z-10 h-14 w-14 rounded-2xl grid place-items-center"
                            style={{ background: "linear-gradient(135deg, hsl(77 74% 32%), hsl(77 74% 42%))", boxShadow: "0 8px 24px -6px rgba(141,187,28,0.55)" }}>
                            <step.icon className="h-7 w-7 text-white" />
                          </div>
                          {/* Dual pulse rings */}
                          <div className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                            style={{ background: "hsl(77 74% 42%)", animationDuration: `${2.2 + i * 0.4}s` }} />
                        </div>

                        {/* Number label */}
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-[9px] font-bold uppercase tracking-[0.35em]" style={{ color: "#d4ff70", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{step.n}</span>
                          <div className="flex-1 h-px" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
                        </div>

                        <h3 className="font-display text-2xl uppercase" style={{ color: hText }}>{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{step.body}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-14 text-center">
            <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
              Start Your Journey   It's Free
              <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WE BUILD CHAMPIONS   Editorial Split
         ═══════════════════════════════════════════════════════ */}
      <section className="section overflow-hidden" aria-label="About">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: Image card with double bezel */}
            <Reveal delay={0.05}>
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-[2.5rem] opacity-30 blur-xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(141,187,28,0.4), transparent 70%)" }} />

                <div className="card-bezel-outer relative" style={{ borderColor: "rgba(141,187,28,0.25)" }}>
                  <div className="card-bezel-inner overflow-hidden" style={{ borderRadius: "calc(2rem - 6px)" }}>
                    <div className="relative aspect-square">
                      <img src="/pictures/image.png" alt="Axis Sports Lab training" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />

                      {/* Bottom badge */}
                      <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                        <motion.span
                          className="font-display text-5xl text-gradient-red"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                          360°
                        </motion.span>
                        <div className="flex items-center gap-2 rounded-full px-4 py-2"
                          style={{ background: "rgba(10,10,10,0.75)", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#ffffff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Sessions Open</span>
                        </div>
                      </div>
                    </div>

                    {/* Mind · Body · Spirit strip */}
                    <div className="flex items-center justify-between px-6 py-3"
                      style={{ background: isDark ? "hsl(var(--surface))" : "#fff", borderTop: `1px solid ${hBorder}` }}>
                      {(["Mind", "Body", "Spirit"] as const).map((label, i) => (
                        <React.Fragment key={label}>
                          <div className="flex flex-col items-center gap-1">
                            <div className="h-8 w-8 rounded-lg grid place-items-center"
                              style={{ background: isDark ? "rgba(141,187,28,0.12)" : "rgba(141,187,28,0.15)", border: `1px solid ${isDark ? "rgba(141,187,28,0.25)" : "rgba(141,187,28,0.45)"}` }}>
                              {i === 0 && <Brain className="h-4 w-4" style={{ color: isDark ? "#d4ff70" : "#5a8a00" }} />}
                              {i === 1 && <Dumbbell className="h-4 w-4" style={{ color: isDark ? "#d4ff70" : "#5a8a00" }} />}
                              {i === 2 && <Sparkles className="h-4 w-4" style={{ color: isDark ? "#d4ff70" : "#5a8a00" }} />}
                            </div>
                            <span className="font-display text-xs uppercase tracking-wider" style={{ color: hText }}>{label}</span>
                          </div>
                          {i < 2 && <div className="h-8 w-px" style={{ background: hBorder }} />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating achievement badge */}
                <motion.div
                  className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl"
                  style={{ background: isDark ? "hsl(var(--surface-2))" : "#fff", border: "1px solid rgba(141,187,28,0.3)", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4)" }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="h-9 w-9 rounded-xl grid place-items-center"
                    style={{ background: "linear-gradient(135deg, #465d0e, #8dbb1c)" }}>
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-lg leading-none" style={{ color: hText }}>Est. 2017</p>
                    <p className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Katy, Texas</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>

            {/* RIGHT: Text content */}
            <Reveal delay={0.12}>
              <p className="eyebrow mb-5"><span className="h-px w-8 bg-primary-glow" /> The Axis Sports Lab Difference</p>
              <h2 className="h-section" style={{ color: hText }}>
                We don't train athletes.{" "}
                <span className="text-gradient-red">We build champions.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-sm sm:text-base" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                At Axis Sports Lab, we believe every athlete has unlimited potential. Founded in 2017 in Katy, TX, we provide a complete 360° turnkey solution   focusing on the mind, body, and spirit of each student-athlete. Our goal is simple: make you{" "}
                <span className="font-semibold" style={{ color: hText }}>bigger, stronger, faster, smarter & better</span>   every single day.
              </p>

              {/* Checklist */}
              <ul className="mt-8 space-y-4">
                {[
                  "Certified elite-level coaching staff",
                  "Individualized athlete development plans",
                  "State-of-the-art training facilities",
                  "Proven track record since 2017",
                ].map((item, i) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <div className="h-5 w-5 shrink-0 rounded-full grid place-items-center"
                      style={{ background: "linear-gradient(135deg, hsl(77 74% 32%), hsl(77 74% 42%))", boxShadow: "0 0 10px rgba(141,187,28,0.35)" }}>
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
                  Book Free Workout
                  <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
                </Link>
                <Link to="/about" className="btn-pill btn-pill-ghost">
                  Our Story <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8 REASONS   Masonry grid with staggered waterfall
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
          TESTIMONIALS   Spotlight border cards
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" aria-label="Testimonials">
        <div className="absolute inset-0 -z-10" style={{
          background: isDark
            ? "linear-gradient(180deg, transparent, hsl(0 0% 5%) 20%, hsl(0 0% 5%) 80%, transparent)"
            : "linear-gradient(180deg, transparent, hsl(0 0% 97%) 20%, hsl(0 0% 97%) 80%, transparent)"
        }} />

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Success Stories</p>
            <h2 className="h-section" style={{ color: hText }}>Athletes don't lie.</h2>
            <p className="mt-4 text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Real results from real athletes who committed to the process.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <TiltCard style={{ perspective: "900px" }} className="h-full">
                  <div className="testimonial-card h-full flex flex-col relative">
                    {/* Top red accent bar */}
                    <div className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(141,187,28,0.6) 40%, rgba(141,187,28,0.9) 50%, rgba(141,187,28,0.6) 60%, transparent)" }} />

                    {/* Stars */}
                    <div className="flex gap-1 mb-5 mt-1">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current text-[#FFB800]" />
                      ))}
                    </div>

                    {/* Large quote mark */}
                    <div className="mb-2 font-display text-7xl leading-none" style={{ color: "rgba(141,187,28,0.3)" }}>"</div>

                    <p className="text-sm leading-relaxed flex-1 -mt-2" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "italic" }}>
                      "{t.quote}"
                    </p>

                    <div className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: `1px solid ${hBorder}` }}>
                      <div className="h-11 w-11 shrink-0 rounded-full grid place-items-center font-display text-sm uppercase"
                        style={{ background: isDark ? "rgba(141,187,28,0.12)" : "rgba(141,187,28,0.18)", border: `2px solid ${isDark ? "rgba(141,187,28,0.5)" : "rgba(141,187,28,0.7)"}`, color: isDark ? "#d4ff70" : "#5a8a00", boxShadow: "0 0 14px rgba(141,187,28,0.2)" }}>
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: hText, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.name}</p>
                        <p className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTNERS   Dual kinetic marquee
         ═══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 overflow-hidden" aria-label="Partners">
        <Reveal className="container-x text-center mb-8">
          <p className="eyebrow justify-center mb-3"><span className="h-px w-8 bg-primary-glow" /> Proud Partners</p>
          <h2 className="h-section" style={{ color: hText }}>Trusted by elite organizations</h2>
        </Reveal>

        {/* Marquee 1   forward */}
        <div className="relative overflow-hidden mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee" style={{ gap: "2rem" }}>
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.06, borderColor: "rgba(141,187,28,0.55)" }}
                className="flex h-12 shrink-0 items-center justify-center rounded-2xl px-5 transition-all duration-300"
                style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}>
                <span className="font-display text-sm tracking-[0.12em] whitespace-nowrap transition-colors duration-300"
                  style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)" }}>{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee 2   reverse */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-reverse" style={{ gap: "2rem" }}>
            {[...partners.slice().reverse(), ...partners.slice().reverse(), ...partners.slice().reverse(), ...partners.slice().reverse()].map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.06 }}
                className="flex h-14 shrink-0 items-center justify-center rounded-xl px-5 transition-all duration-300"
                style={{ background: "rgba(141,187,28,0.06)", border: "1px solid rgba(141,187,28,0.15)" }}>
                <span className="font-display text-sm tracking-[0.1em] whitespace-nowrap" style={{ color: "rgba(141,187,28,0.55)" }}>{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INSTAGRAM   Accordion expand gallery
         ═══════════════════════════════════════════════════════ */}
      <section className="section" aria-label="Instagram">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center mb-6 sm:mb-10">
            <p className="eyebrow justify-center mb-3"><span className="h-px w-8 bg-primary-glow" /> Follow the Journey</p>
            <h2 className="h-section" style={{ color: hText }}>@axissportslab</h2>
          </Reveal>

          {/* Accordion gallery */}
          <div className="accordion-gallery">
            {galleryImages.map((src, i) => (
              <motion.a key={i}
                href="https://www.instagram.com/axissportslab/"
                target="_blank"
                rel="noreferrer"
                className="accordion-item group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <img src={src} alt="Axis Sports Lab Athletics" loading="lazy" decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 origin-top"
                />
                {/* Gradient overlay always present */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)" }} />
                {/* Red overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(141,187,28,0.75) 0%, rgba(141,187,28,0.2) 60%, transparent 100%)" }} />
                {/* Instagram icon */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-10 w-10 rounded-full grid place-items-center"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.5)" }}>
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://www.instagram.com/axissportslab/" target="_blank" rel="noreferrer" className="btn-pill btn-pill-ghost">
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA   Cinematic full-bleed
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" aria-label="CTA">
        {/* Background */}
        <div className="absolute inset-0 -z-10" style={{
          background: isDark
            ? "linear-gradient(135deg, #080808 0%, #0d1a00 25%, #1d3d00 55%, #0d1a00 80%, #080808 100%)"
            : "linear-gradient(135deg, #fafff5 0%, #edffc4 35%, #d5f09a 55%, #edffc4 80%, #fafff5 100%)"
        }} />
        <div className="absolute inset-0 -z-10 bg-grid-sm opacity-25" />

        {/* Animated glow orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full animate-glow-beat"
            style={{ background: "radial-gradient(circle, rgba(141,187,28,0.28), transparent 65%)" }} />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 translate-x-1/2 translate-y-1/3 rounded-full animate-float-y-alt"
            style={{ background: "radial-gradient(circle, rgba(141,187,28,0.20), transparent 65%)" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(141,187,28,0.1), transparent 70%)", animation: "glow-beat 5s ease-in-out 2s infinite" }} />
        </div>

        <Particles count={28} />

        <div className="container-x relative text-center">
          <Reveal>
            {/* Badge */}
            <motion.div className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.4)", color: isDark ? "#d4ff70" : "#8dbb1c" }}
              animate={{ boxShadow: ["0 0 0 0 rgba(141,187,28,0)", "0 0 0 8px rgba(141,187,28,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <span className="h-2 w-2 rounded-full bg-[#8dbb1c] animate-pulse" />
              Limited Spots Available
            </motion.div>

            <h2 className="h-display text-balance mx-auto" style={{ color: isDark ? "#ffffff" : "#111111", maxWidth: "900px" }}>
              Time to take your athletics<br />
              to <span className="text-shimmer">the next level</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.68)" : "rgba(0,0,0,0.62)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Schedule your FREE Evaluation Workout and see what 360° athlete development looks like up close.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
                Book Now   It's Free
                <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
              </Link>
              {/* <Link to="/contact" className="btn-pill btn-pill-ghost">
                Talk to a Coach
              </Link> */}
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest"
              style={{ color: isDark ? "rgba(255,255,255,0.32)" : "rgba(0,0,0,0.4)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {["No Credit Card Required", "100% Free Session", "500+ Athletes Trained", "Est. 2017 · Katy TX"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "rgba(141,187,28,0.55)" }} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
