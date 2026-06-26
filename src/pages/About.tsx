import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Brain, Dumbbell, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
const sliderImages = [
  "/pictures/camps-main.jpg",
  "/pictures/about-featured.png",
  "/pictures/teams-hero.jpg",
  "/pictures/athlete-running.jpg",
  "/pictures/gc-shooting.jpg",
  "/pictures/camps-hero.jpg",
  "/pictures/camps-cta.jpg",
  "/pictures/teams-girls.jpg",
  "/pictures/gc-camps.jpg",
  "/pictures/athlete-feet.jpg",
  "/pictures/teams-boys.jpg",
  "/pictures/facility-equipment.jpg",
  "/pictures/gc-skills.jpg",
  "/pictures/gc-athlete.jpg",
  "/pictures/teams-cta.jpg",
];

const coaches = [
  {
    name: "Richard Foy",
    role: "The Architect of Athletic Excellence",
    img: "/pictures/richard-horizontal.jpg",
    shortBio: "Visionary leader and community builder behind Axis Sports Lab. With thousands of athletes trained and hundreds placed into college programs, Coach Foy's holistic system builds champions for life.",
    slug: "richard-foy",
    specialties: ["Basketball Skills & IQ", "Recruiting Preparation", "Leadership Development"],
  },
  {
    name: "Eddie Robinson",
    role: "Elite Performance Specialist & NBA Veteran",
    img: "/pictures/eddie-horizontal.jpg",
    shortBio: "Former NBA star       Charlotte Hornets, Chicago Bulls ($32M contract), BIG3 legend. Went head-to-head with Jordan, Kobe & Iverson. Now bringing that same elite standard to the next generation.",
    slug: "eddie-robinson",
    specialties: ["NBA-Level Skill Development", "Elite Scoring & Athleticism", "Basketball IQ"],
  },
];

const values = [
  { n: "01", icon: Brain,     title: "Mission", body: "To develop the complete athlete   mentally, physically, and spiritually." },
  { n: "02", icon: Dumbbell,  title: "Vision",  body: "To be the #1 basketball development program in Texas." },
  { n: "03", icon: Sparkles,  title: "Values",  body: "Discipline · Hard Work · Integrity · Excellence · Community" },
];

const timeline = [
  ["2017", "Founded in Katy, TX"],
  ["2018", "First championship team"],
  ["2020", "Expanded to 4 core programs"],
  ["2023", "500+ athletes trained"],
  ["2025", "Growing to serve all of Texas"],
  ["2026", "Evolved into Axis Sports Lab to create a complete athlete development ecosystem"],
];

const About = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText   = isDark ? "#ffffff" : "#111111";
  const hMuted  = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";
  const hBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.10)";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[55vh] flex items-center pb-10 pt-14 sm:pt-20 lg:pt-24" aria-label="About Hero"
        style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Particles count={14} />

        <div className="container-x w-full text-center relative z-10">
          <Reveal>
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Our Story</p>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl uppercase font-black leading-tight"
              style={{ color: isDark ? "#ffffff" : "#ffffff" }}>
              Building <span className="text-gradient-red">Explosive</span><br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px ${isDark ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.85)"}` }}>Athletes.</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="origin-center my-5 h-[3px] w-16 rounded-full mx-auto"
              style={{ background: "var(--gradient-red)", boxShadow: "0 0 18px rgba(141,187,28,0.75)" }}
            />
            <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              The premier basketball training program in Katy    where passion meets precision, and potential turns into performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR COACHES   (moved here, right after hero)
         ═══════════════════════════════════════════════════════ */}
      <section className="section" aria-label="Our Coaches">
        <div className="container-x">
          <Reveal className="text-center mb-14">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Meet The Team</p>
            <h2 className="h-section" style={{ color: hText }}>
              Our <span className="text-gradient-red">Coaches</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed"
              style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              World-class coaches dedicated to unlocking every athlete's full potential       on and off the court.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {coaches.map((coach, i) => (
              <Reveal key={coach.name} delay={i * 0.12}>
                <div
                  className="group relative overflow-hidden rounded-2xl flex flex-col h-full"
                  style={{ border: "1px solid rgba(141,187,28,0.22)", background: isDark ? "#0d0d0d" : "#ffffff" }}
                >
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={coach.img}
                      alt={coach.name}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-10"
                      style={{ background: `linear-gradient(to top, ${isDark ? "#0d0d0d" : "#ffffff"}, transparent)` }} />
                    <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{ background: "linear-gradient(90deg, #8dbb1c, transparent)" }} />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="inline-block self-start mb-2 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                      style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70" }}>
                      {coach.role}
                    </span>
                    <h3 className="font-display text-2xl uppercase leading-tight mb-4" style={{ color: hText }}>
                      {coach.name}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-5"
                      style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {coach.shortBio}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {coach.specialties.map(s => (
                        <span key={s} className="rounded-md px-2.5 py-1 text-[11px] font-semibold"
                          style={{
                            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)"}`,
                            color: hMuted,
                          }}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/coaches/${coach.slug}`}
                      className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-widest transition-colors duration-200 group/link"
                      style={{ color: "#8dbb1c" }}
                    >
                      See More
                      <span
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 group-hover/link:translate-x-0.5"
                        style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.35)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5h8M5.5 1.5 9 5l-3.5 3.5" stroke="#8dbb1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FEATURED PHOTO   Full-width cinematic image
         ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden h-[260px] sm:h-[360px] lg:h-[440px]" aria-label="Featured">
        <img
          src="/pictures/about-featured.png"
          alt="Axis Sports Lab coaching session"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(6,6,10,0.88) 0%, rgba(6,6,10,0.55) 45%, rgba(6,6,10,0.15) 75%, transparent 100%)" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow mb-4"><span className="h-px w-8 bg-primary-glow" /> The Axis Sports Lab Difference</p>
              <h2 className="font-display uppercase"
                style={{ fontSize: "clamp(2rem, 5vw, 72px)", lineHeight: 0.92, maxWidth: "580px", color: "#ffffff" }}>
                We don't just train athletes.<br />
                <span className="text-gradient-red">We build champions.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed max-w-md"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Our approach is holistic   training the mind, body, and spirit because true athletic greatness goes beyond physical ability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MISSION / VISION / VALUES
         ═══════════════════════════════════════════════════════ */}
      <section className="section" aria-label="Values">
        <div className="container-x">
          <Reveal className="max-w-xl mb-16">
            <p className="eyebrow mb-4"><span className="h-px w-8 bg-primary-glow" /> Why Axis Sports Lab</p>
            <h2 className="h-section" style={{ color: hText }}>
              Rooted in <span className="text-gradient-red">purpose</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card-bezel-outer h-full" style={{ borderColor: i === 0 ? "rgba(141,187,28,0.3)" : hBorder }}>
                  <div className="card-bezel-inner h-full p-7 relative overflow-hidden">
                    <span className="absolute top-4 right-5 font-display text-8xl leading-none select-none pointer-events-none"
                      style={{ color: hText, opacity: isDark ? 0.04 : 0.03 }}>{v.n}</span>

                    <div className="h-12 w-12 rounded-2xl grid place-items-center mb-5"
                      style={{ background: "linear-gradient(135deg, hsl(77 74% 32%), hsl(77 74% 42%))", boxShadow: "0 8px 24px -6px rgba(141,187,28,0.5)" }}>
                      <v.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="font-display text-2xl uppercase text-gradient-red">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed"
                      style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TIMELINE
         ═══════════════════════════════════════════════════════ */}
      <section className="section relative overflow-hidden" aria-label="Timeline">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_hsl(77_74%_42%/0.08),_transparent_70%)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center mb-16">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> History</p>
            <h2 className="h-section" style={{ color: hText }}>
              The Axis Sports Lab <span className="text-gradient-red">Journey</span>
            </h2>
          </Reveal>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px md:left-1/2"
              style={{ background: "linear-gradient(to bottom, rgba(141,187,28,0.8), rgba(141,187,28,0.2) 80%, transparent)" }} />
            <ul className="space-y-10">
              {timeline.map(([year, label], i) => (
                <Reveal key={year as string} delay={i * 0.08}>
                  <li className={`relative grid gap-3 pl-12 md:grid-cols-2 md:pl-0 ${i % 2 ? "md:text-right" : ""}`}>
                    <span className="absolute left-2.5 top-2 h-3 w-3 rounded-full md:left-1/2 md:-translate-x-1/2"
                      style={{ background: "#8dbb1c", boxShadow: "0 0 0 4px rgba(141,187,28,0.2), 0 0 14px rgba(141,187,28,0.5)" }} />
                    <div className={`md:px-8 ${i % 2 ? "md:order-2 md:text-left" : "md:text-right"}`}>
                      <p className="font-display text-4xl text-gradient-red">{year}</p>
                    </div>
                    <div className={`md:px-8 ${i % 2 ? "md:order-1 md:text-right" : ""}`}>
                      <p className="text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* <Reveal className="mt-16 text-center">
            <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
              Train With Us
              <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          </Reveal> */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ATHLETES AT WORK   Infinite image marquee  (footer ke upar)
         ═══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 overflow-hidden" aria-label="Athletes at work">
        <Reveal className="container-x text-center mb-8">
          <p className="eyebrow justify-center mb-3"><span className="h-px w-8 bg-primary-glow" /> Gallery</p>
          <h2 className="h-section" style={{ color: hText }}>See Our Athletes At Work</h2>
        </Reveal>

        <div className="relative overflow-hidden mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee" style={{ gap: "1rem" }}>
            {[...sliderImages, ...sliderImages].map((src, i) => (
              <motion.div key={i}
                whileHover={{ scale: 1.04 }}
                className="relative shrink-0 overflow-hidden rounded-2xl group"
                style={{ width: "220px", height: "160px", border: "1px solid rgba(141,187,28,0.2)" }}>
                <img src={src} alt="Axis Sports Lab athlete"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(141,187,28,0.65) 0%, transparent 70%)" }} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-reverse" style={{ gap: "1rem" }}>
            {[...sliderImages.slice().reverse(), ...sliderImages.slice().reverse()].map((src, i) => (
              <motion.div key={i}
                whileHover={{ scale: 1.04 }}
                className="relative shrink-0 overflow-hidden rounded-2xl group"
                style={{ width: "190px", height: "140px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <img src={src} alt="Axis Sports Lab athlete"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(141,187,28,0.55) 0%, transparent 70%)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
