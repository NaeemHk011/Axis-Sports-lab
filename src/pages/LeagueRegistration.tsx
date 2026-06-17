import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { CheckCircle, Trophy, Users, Star, Zap, Shield, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

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

const schedule = [
  { week: "Week 1", icon: "🏃", title: "Combine Day",  desc: "Athlete evaluation & assessment"  },
  { week: "Week 2", icon: "🎯", title: "Draft Night",   desc: "Players selected for their teams" },
  { week: "Week 3", icon: "🏀", title: "Games Begin",   desc: "Season tips off"                  },
  { week: "Week 4", icon: "🔥", title: "League Games",  desc: "Competitive play continues"       },
  { week: "Week 5", icon: "⚡", title: "League Games",  desc: "Mid-season push"                  },
  { week: "Week 6", icon: "📊", title: "League Games",  desc: "Standings tighten"                },
  { week: "Week 7", icon: "🥊", title: "Semi-Finals",   desc: "Top teams battle it out"          },
  { week: "Week 8", icon: "🏆", title: "Championship",  desc: "One team takes it all"            },
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
  { icon: Users,  title: "Team Draft Night",     body: "A real draft experience    players get selected just like the pros."     },
  { icon: Trophy, title: "Pro Jerseys",          body: "Every player gets a professional-quality jersey with their name."       },
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

  useEffect(() => {
    const id = "webtechs-form-embed-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id; s.src = "https://link.webtechs.dev/js/form_embed.js"; s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const thankYouRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const d = e.data;
      const isSubmit =
        (typeof d === "string" && (d.includes("submit") || d.includes("form_complete") || d.includes("success"))) ||
        d?.type === "form_submitted" || d?.event === "form_submitted" ||
        d?.message === "form_submitted" || d?.type === "form_complete" ||
        d?.formSubmitted === true;
      if (isSubmit) {
        setSubmitted(true);
        setTimeout(() => thankYouRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
        <Particles className="absolute inset-0 z-0"/>
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

      {/* ═══ EXPERIENCE ═══ */}
      <section className="section" style={{ background: isDark ? "#111111" : "#f0f0f0" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   The Experience</p>
            <h2 className="h-section mb-14" style={{ color: isDark ? "#ffffff" : "#111111" }}>
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
                      style={{ color: isDark ? "#ffffff" : "#111111" }}>{e.title}</h3>
                    <p className="text-sm leading-relaxed"
                      style={{ color: isDark ? "rgba(255,255,255,0.56)" : "rgba(0,0,0,0.60)" }}>{e.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVISIONS ═══ */}
      <section className="section" style={{ background: pageBg }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   Divisions</p>
            <h2 className="h-section mb-14" style={{ color: hText }}>
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
                    <h3 className="font-display text-2xl uppercase" style={{ color: hText }}>{d.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: d.dot }}>{d.ages}</p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: hMuted }}>{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEASON SCHEDULE ═══ */}
      <section className="section" style={{ background: isDark ? "#111111" : "#f0f0f0" }}>
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">   Season Schedule</p>
            <h2 className="h-section mb-14" style={{ color: isDark ? "#ffffff" : "#111111" }}>
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
                    <p className="font-display text-sm uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>{s.title}</p>
                    <p className="mt-1 text-[11px] leading-snug" style={{ color: hMuted }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM SECTION ═══ */}
      <section id="register-form" className="section" style={{ background: pageBg }}>
        <div className="container-x max-w-3xl">
          <Reveal>
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
              <iframe
                src="https://link.webtechs.dev/widget/form/XWVuLmVRB1BufpiSRKxl"
                style={{ width:"100%", height:2421, border:"none", borderRadius:10, background:"transparent" }}
                id="inline-XWVuLmVRB1BufpiSRKxl"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Axis Sports Lab 3V3 Open League"
                data-height="2421"
                data-layout-iframe-id="inline-XWVuLmVRB1BufpiSRKxl"
                data-form-id="XWVuLmVRB1BufpiSRKxl"
                title="Axis Sports Lab 3V3 Open League Registration"
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
