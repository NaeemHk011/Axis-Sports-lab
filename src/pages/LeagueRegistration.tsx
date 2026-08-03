import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { CheckCircle, Trophy, Star, Zap, Shield, Target, Calendar, Clock, X, Mail, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const stats = [
  { value: "8",         label: "Week Season" },
  { value: "4",         label: "Divisions"   },
  { value: "3V3",       label: "Format"      },
  { value: "Ages 6–18", label: "Open To"     },
];

const divisions = [
  { dot: "#4ade80", name: "Rookies",      ages: "Ages 6–8",   detail: "3–4 players per team · Introduction to the game"   },
  { dot: "#60a5fa", name: "Rising Stars", ages: "Ages 9–11",  detail: "3–4 players per team · Developing fundamentals"    },
  { dot: "#8dbb1c", name: "Future Pros",  ages: "Ages 12–14", detail: "3–4 players per team · Competitive skill building" },
  { dot: "#c084fc", name: "Elite Draft",  ages: "Ages 15–18", detail: "3–4 players per team · High-level competition"     },
];

const sessions = [
  {
    session:    "Session 1",
    season:     "Late Summer Tip-Off",
    duration:   "8-Week Season",
    gamesBegin: "Saturday, August 15th",
    status:     "Register Now",
  },
  {
    session:    "Session 2",
    season:     "Fall League",
    duration:   "8-Week Season",
    gamesBegin: "Saturday, October 17th",
    status:     "Register Now",
  },
  {
    session:    "Session 3",
    season:     "Winter League",
    duration:   "8-Week Season",
    gamesBegin: "Saturday, January 9th",
    status:     "Register Now",
  },
];

const schedule = [
  { week: "Week 1", icon: "🏃", title: "Combine Day",  desc: "Athlete evaluation & assessment"  },
  { week: "Week 2", icon: "🏀", title: "Games Begin",  desc: "Season tips off"                  },
  { week: "Week 3", icon: "🔥", title: "League Games", desc: "Competitive play continues"       },
  { week: "Week 4", icon: "🔥", title: "League Games", desc: "Competitive play continues"       },
  { week: "Week 5", icon: "⚡", title: "League Games", desc: "Mid-season push"                  },
  { week: "Week 6", icon: "📊", title: "League Games", desc: "Standings tighten"                },
  { week: "Week 7", icon: "🥊", title: "League Games", desc: "Final push before championship"   },
  { week: "Week 8", icon: "🏆", title: "Championship", desc: "One team takes it all"            },
];

const benefits = [
  { num: "01", title: "Max Playing Time",    body: "Every player is on the court. No bench-warming, no sitting out."        },
  { num: "02", title: "Pro Development",     body: "Coached by certified trainers who develop real skills every week."      },
  { num: "03", title: "Weekly Games",        body: "High-energy games with stat tracking and video highlights."             },
  { num: "04", title: "Rapid Improvement",   body: "More reps, more touches    players improve faster, guaranteed."         },
  { num: "05", title: "Confidence Building", body: "Perfect for beginners and advanced athletes at every level."           },
];

const experiences = [
  { icon: Star,   title: "Player Combine Day",  body: "Athletes evaluated before the season for fair team placement."           },
  { icon: Trophy, title: "Jerseys",          body: "Every player gets a professional-quality jersey."                     },
  { icon: Zap,    title: "Player of the Week",   body: "Top performers recognized weekly    fueling confidence and motivation." },
  { icon: Target, title: "Highlight Videos",     body: "Games filmed and clipped. Your athlete goes viral in the family group chat." },
  { icon: Shield, title: "Championship Weekend", body: "Season ends with a full championship event    trophies and all."        },
];

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
};

const LeagueRegistration = () => {
  const { resolvedTheme } = useTheme();
  const isDark    = resolvedTheme !== "light";
  const hText     = isDark ? "#ffffff"                : "#111111";
  const hMuted    = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.60)";
  const hBorder   = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const hSurface  = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const hSurface2 = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
  const pageBg    = isDark ? "#0A0A0A"                : "#f8f8f8";

  const [submitted, setSubmitted]  = useState(false);
  const thankYouRef                 = useRef<HTMLElement>(null);
  const [ruleOpen, setRuleOpen]     = useState(false);
  const [ruleLoaded, setRuleLoaded] = useState(false);

  const openRule  = () => { setRuleLoaded(false); setRuleOpen(true); };
  const closeRule = () => { setRuleOpen(false); setRuleLoaded(false); };


  const scrollToForm = () =>
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ═══ ANNOUNCEMENT BANNER ═══ */}
      <div
        className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em]"
        style={{ background: "linear-gradient(90deg, #8dbb1c, #a8d422)", color: "#0a0a0a" }}
      >
        🏀 Registration Now Open    Spots Are Limited. Secure Yours Today.
      </div>

      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-[88vh] w-full overflow-hidden flex items-center"
        aria-label="League Hero"
        style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(141,187,28,0.12) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(141,187,28,0.07) 0%, transparent 50%)" }}
        />
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ scale:[1,1.18,1], opacity:[0.22,0.38,0.22] }}
            transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut" }}
            className="absolute"
            style={{ width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle, rgba(141,187,28,0.28) 0%, transparent 70%)", top:"5%", left:"-8%" }}
          />
          <motion.div
            animate={{ scale:[1,1.12,1], opacity:[0.12,0.22,0.12] }}
            transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:1 }}
            className="absolute"
            style={{ width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(141,187,28,0.18) 0%, transparent 70%)", bottom:"10%", right:"5%" }}
          />
        </div>

        <div className="container-x relative z-10 py-16 md:py-24">
          <motion.div variants={container} initial="hidden" animate="show"
            className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <motion.p variants={item} className="eyebrow mb-4">
                   Axis Sports Lab · Open Draft Pool
              </motion.p>
              <motion.h1 variants={item} className="font-display uppercase leading-none"
                style={{ fontSize:"clamp(3.2rem, 8vw, 7.5rem)", color:"#ffffff", lineHeight:1.0 }}>
                3V3 OPEN<br/>
                <span style={{ color:"#8dbb1c" }}>BASKETBALL</span><br/>
                <span style={{ WebkitTextStroke:"2px rgba(255,255,255,0.25)", color:"transparent", fontSize:"80%" }}>LEAGUE</span>
              </motion.h1>
              <motion.p variants={item} className="mt-6 max-w-md text-lg" style={{ color:"rgba(255,255,255,0.65)" }}>
                Sign up as an <strong style={{ color:"#ffffff" }}>individual</strong>    no team needed. We handle the draft. You bring the game. Every player gets touches, every player gets better.
              </motion.p>
              <motion.div variants={item} className="my-8"
                style={{ height:2, background:"linear-gradient(90deg, #8dbb1c 0%, transparent 80%)", maxWidth:240 }}/>
              <motion.div variants={item} className="mb-8 max-w-xs">
                <div className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider"
                  style={{ color:"rgba(255,255,255,0.60)" }}>
                  <span>Spots Filling Fast</span>
                  <span style={{ color:"#8dbb1c" }}>FILLING FAST</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ background:"rgba(255,255,255,0.12)" }}>
                  <motion.div initial={{ width:0 }} animate={{ width:"62%" }}
                    transition={{ duration:1.4, delay:0.8, ease:[0.22,1,0.36,1] }}
                    className="h-full rounded-full" style={{ background:"linear-gradient(90deg, #8dbb1c, #a8d422)" }}/>
                </div>
                <p className="mt-1.5 text-xs" style={{ color:"rgba(255,255,255,0.42)" }}>62 of 120 spots filled</p>
              </motion.div>
              <motion.div variants={item} className="flex flex-wrap gap-4">
                <button onClick={scrollToForm} className="btn-red font-bold uppercase tracking-wide"
                  style={{ boxShadow:"0 0 28px rgba(141,187,28,0.45)" }}>
                  Register Now
                </button>
                <a href="#how-it-works"
                  className="flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                  style={{ borderColor:"rgba(255,255,255,0.20)", color:"rgba(255,255,255,0.80)" }}
                  onClick={e => { e.preventDefault(); document.getElementById("how-it-works")?.scrollIntoView({ behavior:"smooth" }); }}>
                  How It Works
                </a>
              </motion.div>
            </div>

            <motion.div variants={container} className="grid grid-cols-2 gap-3">
              {stats.map(s => (
                <motion.div key={s.label} variants={item}
                  className="flex flex-col items-center justify-center rounded-2xl py-8 px-4 text-center"
                  style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.10)", backdropFilter:"blur(12px)" }}>
                  <span className="font-display text-5xl uppercase leading-none" style={{ color:"#8dbb1c" }}>{s.value}</span>
                  <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest" style={{ color:"rgba(255,255,255,0.55)" }}>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY AXIS LEAGUE ═══ */}
      <section id="how-it-works" className="section" style={{ background: pageBg }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   The Format</p>
            <h2 className="h-section mb-14" style={{ color: hText }}>
              WHY AXIS LEAGUE <span className="text-gradient-red">IS DIFFERENT</span>
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map(b => (
              <Reveal key={b.num}>
                <div className="flex flex-col gap-3">
                  <span className="font-display text-5xl" style={{ color:"#8dbb1c", opacity:0.9 }}>{b.num}</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: hText }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: hMuted }}>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SESSION SCHEDULE ═══ */}
      <section className="section" style={{ background: isDark ? "#111111" : "#f0f0f0" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   Season Schedule</p>
            <h2 className="h-section mb-4" style={{ color: isDark ? "#ffffff" : "#111111" }}>
              3 SESSIONS. <span className="text-gradient-red">ONE MISSION.</span>
            </h2>
            <p className="mb-14 max-w-lg text-sm" style={{ color: isDark ? "rgba(255,255,255,0.52)" : "rgba(0,0,0,0.52)" }}>
              Each session is a full 8-week season - Combine Day, Draft Night, League Games, and a Championship Weekend.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {sessions.map((s) => (
              <Reveal key={s.session}>
                <div
                  className="relative flex flex-col rounded-2xl p-7 transition-all duration-300"
                  style={{
                    background: hSurface,
                    border: `1px solid ${hBorder}`,
                  }}
                >
                  {/* Session label + season name */}
                  <p
                    className="mb-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: "#8dbb1c" }}
                  >
                    {s.session}
                  </p>
                  <h3
                    className="font-display text-3xl uppercase leading-tight"
                    style={{ color: isDark ? "#ffffff" : "#111111" }}
                  >
                    {s.season}
                  </h3>

                  {/* Divider */}
                  <div className="my-5" style={{ height: 1, background: hBorder }} />

                  {/* Info rows */}
                  <div className="flex flex-col gap-4 flex-1 mb-7">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.18)" }}
                      >
                        <Clock className="h-4 w-4" style={{ color: "#8dbb1c" }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: hMuted }}>Duration</p>
                        <p className="text-sm font-bold" style={{ color: isDark ? "#ffffff" : "#111111" }}>{s.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.18)" }}
                      >
                        <Calendar className="h-4 w-4" style={{ color: "#8dbb1c" }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: hMuted }}>Games Begin</p>
                        <p className="text-sm font-bold" style={{ color: isDark ? "#ffffff" : "#111111" }}>{s.gamesBegin}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status CTA */}
                  <button
                    onClick={scrollToForm}
                    className="w-full rounded-xl py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(90deg, #8dbb1c, #a8d422)",
                      color: "#0a0a0a",
                      boxShadow: "0 2px 10px rgba(141,187,28,0.20)",
                    }}
                  >
                    {s.status}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section className="section" style={{ background: pageBg }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   The Experience</p>
            <h2 className="h-section mb-14" style={{ color: hText }}>
              PRO-STYLE <span className="text-gradient-red">EVERYTHING</span>
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map(e => (
              <Reveal key={e.title}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background:"rgba(141,187,28,0.12)", border:"1px solid rgba(141,187,28,0.20)" }}>
                    <e.icon className="h-5 w-5" style={{ color:"#8dbb1c" }}/>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-widest"
                      style={{ color: hText }}>{e.title}</h3>
                    <p className="text-sm leading-relaxed"
                      style={{ color: hMuted }}>{e.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVISIONS ═══ */}
      <section className="section" style={{ background: isDark ? "#111111" : "#f0f0f0" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   Divisions</p>
            <h2 className="h-section mb-14" style={{ color: isDark ? "#ffffff" : "#111111" }}>
              FIND YOUR <span className="text-gradient-red">LEVEL</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map(d => (
              <Reveal key={d.name}>
                <div className="flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300"
                  style={{ background: hSurface, border:`1px solid ${hBorder}`, borderTop:`3px solid ${d.dot}` }}>
                  <div className="h-4 w-4 rounded-full" style={{ background: d.dot, boxShadow:`0 0 12px ${d.dot}` }}/>
                  <div>
                    <h3 className="font-display text-2xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>{d.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: d.dot }}>{d.ages}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: hMuted }}>{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8-WEEK BREAKDOWN ═══ */}
      <section className="section" style={{ background: pageBg }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   Weekly Breakdown</p>
            <h2 className="h-section mb-14" style={{ color: hText }}>
              8 WEEKS. <span className="text-gradient-red">ONE MISSION.</span>
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {schedule.map((s, i) => (
              <Reveal key={s.week}>
                <div className="relative flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center"
                  style={{
                    background: i === 7 ? "linear-gradient(135deg, rgba(141,187,28,0.18), rgba(141,187,28,0.08))" : hSurface,
                    border: `1px solid ${i === 7 ? "rgba(141,187,28,0.45)" : hBorder}`,
                  }}>
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color:"#8dbb1c" }}>{s.week}</p>
                    <p className="font-display text-sm uppercase" style={{ color: hText }}>{s.title}</p>
                    <p className="mt-1 text-[11px] leading-snug" style={{ color: hMuted }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RULE BOOK POPUP ═══ */}
      {ruleOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.70)", backdropFilter: "blur(8px)" }}
          onClick={e => { if (e.target === e.currentTarget) closeRule(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ background: isDark ? "#141414" : "#ffffff", border: `1px solid ${hBorder}`, boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${hBorder}` }}>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg,#8dbb1c,#a8d422)" }}>
                  <BookOpen className="h-3.5 w-3.5" style={{ color: "#0a0a0a" }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-none" style={{ color: "#8dbb1c" }}>Free via Email</p>
                  <p className="text-sm font-bold uppercase leading-tight" style={{ color: hText }}>Athlete Rule Book</p>
                </div>
              </div>
              <button onClick={closeRule} className="flex h-7 w-7 items-center justify-center rounded-full hover:opacity-70 transition-opacity" style={{ background: hSurface2, color: hMuted }}>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Form */}
            <div className="relative">
              {!ruleLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3" style={{ background: isDark ? "#141414" : "#ffffff", minHeight: 320 }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} className="h-8 w-8 rounded-full" style={{ border: `3px solid ${hBorder}`, borderTopColor: "#8dbb1c" }} />
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: hMuted }}>Loading…</p>
                </div>
              )}
              <iframe
                key={String(ruleOpen)}
                src="https://link.webtechs.dev/widget/form/sJx015f1QLYskrvjS6q4"
                onLoad={() => setRuleLoaded(true)}
                style={{ display: "block", width: "100%", height: 360, border: "none", opacity: ruleLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
                title="Athlete Rule Book Form"
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* ═══ FORM SECTION ═══ */}
      <section id="register-form" className="section" style={{ background: pageBg }}>
        <div className="container-x max-w-3xl">
          <Reveal>
            <button
              onClick={openRule}
              className="mb-8 mx-auto flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
              style={{
                borderColor: hBorder,
                background: hSurface,
                color: hText,
              }}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(90deg, #8dbb1c, #a8d422)" }}
              >
                <Mail className="h-3 w-3" style={{ color: "#0a0a0a" }} />
              </span>
              Get Athlete Rule Book
            </button>
            <p className="eyebrow mb-3">   Step 01</p>
            <h2 className="h-section mb-3" style={{ color: hText }}>
              REGISTER YOUR <span className="text-gradient-red">PLAYER</span>
            </h2>
            <p className="mb-12 text-base" style={{ color: hMuted }}>
              Takes under 3 minutes. Your spot is waiting.
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl overflow-hidden w-full">
              <GhlFormEmbed
                src="https://link.webtechs.dev/widget/form/XWVuLmVRB1BufpiSRKxl"
                formId="XWVuLmVRB1BufpiSRKxl"
                formName="Axis Sports Lab 3V3 Open League"
                height={2421}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ THANK YOU    only after submit ═══ */}
      <section
        ref={thankYouRef}
        id="thank-you"
        className="section"
        style={{
          background: "linear-gradient(135deg, #8dbb1c 0%, #a8d422 100%)",
          display: submitted ? "block" : "none",
        }}
      >
        <div className="container-x text-center">
          <Reveal>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background:"rgba(0,0,0,0.15)" }}>
              <CheckCircle className="h-10 w-10 text-white"/>
            </div>
            <h2 className="font-display text-5xl uppercase leading-tight md:text-7xl"
              style={{ color:"#0a0a0a" }}>
              You're In!
            </h2>
            <p className="mt-4 text-xl font-semibold" style={{ color:"rgba(0,0,0,0.75)" }}>
              Registration Received    We'll Be In Touch.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-base" style={{ color:"rgba(0,0,0,0.60)" }}>
              Our team will review your registration and reach out within 24–48 hours with your next steps, team placement details, and season schedule.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="/"
                className="rounded-full bg-[#0a0a0a] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80">
                Back to Home
              </a>
              <a href="/contact"
                className="rounded-full border-2 border-[#0a0a0a]/30 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0a0a0a] transition-opacity duration-200 hover:opacity-70">
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default LeagueRegistration;
