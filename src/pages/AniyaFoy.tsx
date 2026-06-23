import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Journey Story", href: "#journey"  },
  { label: "Training",      href: "#training" },
  { label: "Programs",      href: "#programs" },
  { label: "Media",         href: "#media"    },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const pillars = [
  {
    title: "Skills",
    desc: "Ball handling, shooting, and decision-making honed through structured drills and repetition.",
    img: "/pictures/alumni/pillar-skills.jpeg",
  },
  {
    title: "Explosiveness",
    desc: "Conditioning and athletic training designed to maximize speed, power, and durability.",
    img: "/pictures/alumni/pillar-explosiveness.jpeg",
  },
  {
    title: "Mentality",
    desc: "Mental toughness, focus, and resilience built through competitive challenges and mentorship.",
    img: "/pictures/alumni/pillar-mentality.jpeg",
  },
  {
    title: "Leadership",
    desc: "Teamwork, communication, and character development that carry far beyond the court.",
    img: "/pictures/alumni/pillar-leadership.jpeg",
  },
];

const programs = [
  {
    name: "Youth Development",
    grade: "3rd–5th Grade",
    desc: "Building strong fundamentals in a fun, encouraging environment. Focus: confidence + love for the game.",
  },
  {
    name: "Competitive Training",
    grade: "6th–8th Grade",
    desc: "Game-ready skills and basketball IQ to prepare athletes for competitive play.",
  },
  {
    name: "Elite Prep",
    grade: "High School",
    desc: "Advanced training, exposure, and mentorship for athletes pursuing scholarships and college opportunities.",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
const AniyaFoy = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [dotPct, setDotPct] = useState(0);

  const { resolvedTheme } = useTheme();
  const isDark     = resolvedTheme !== "light";
  const pageBg     = isDark ? "#080808" : "#f5f5f5";
  const sectionBg  = isDark ? "#0d0d0d" : "#e8e8e8";
  const footerBg   = isDark ? "#050505" : "#e0e0e0";
  const hText      = isDark ? "#ffffff" : "#111111";
  const hMuted     = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";
  const hMutedLo   = isDark ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.42)";
  const hBorder    = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.09)";
  const navBg      = isDark ? "rgba(8,8,8,0.92)"       : "rgba(245,245,245,0.95)";
  const navBorder  = isDark ? "rgba(141,187,28,0.18)"   : "rgba(141,187,28,0.30)";
  const navLink    = isDark ? "rgba(255,255,255,0.60)"  : "rgba(0,0,0,0.55)";
  const navHover   = isDark ? "#ffffff"                 : "#111111";
  const logoBg     = isDark ? "rgba(255,255,255,0.04)"  : "rgba(0,0,0,0.04)";
  const logoBorder = isDark ? "rgba(255,255,255,0.08)"  : "rgba(0,0,0,0.10)";
  const cardBg     = isDark ? "rgba(141,187,28,0.05)"   : "rgba(141,187,28,0.07)";
  const badgeBg    = isDark ? "rgba(255,255,255,0.08)"  : "rgba(0,0,0,0.07)";
  const badgeText  = isDark ? "rgba(255,255,255,0.45)"  : "rgba(0,0,0,0.50)";
  const mobileBtnBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const mobileItemBorder = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";

  /* timeline moved inside for isDark access on <strong> colors */
  const timeline = [
    {
      phase: "Elementary School",
      title: "Foundational Skills Training",
      body: (
        <>
          <span style={{ color: "#8dbb1c", fontWeight: 700 }}>Axis Sports Lab</span>, is where Aniya Foy built the foundation of her skills,
          discipline, and confidence – setting her up for success and igniting a passion that
          would drive her to become one of the nation's top guards.
        </>
      ),
      img: "/pictures/alumni/aniya-elementary.jpeg",
      imgFallback: "/pictures/aniya-foy.png",
      imgAlt: "Aniya Foy – Elementary school training",
      imageRight: true,
    },
    {
      phase: "Junior High School",
      title: "Growth to a Star",
      body: (
        <>
          Aniya took her game to the next level with high level advanced skills training, refining
          her skills and unleashing her full potential. As her talent flourished, she started to make
          a name for herself, earning her first{" "}
          <strong style={{ color: hText }}>Division 1 Scholarship</strong> offer, prestigious
          recognitions and awards that marked the beginning of her rise to stardom.
        </>
      ),
      img: "/pictures/alumni/aniya-jh.jpeg",
      imgFallback: "/pictures/aniya-foy.png",
      imgAlt: "Aniya Foy – Junior high game action",
      imageRight: false,
    },
    {
      phase: "High School",
      title: "Dominance to Destiny",
      body: (
        <>
          Aniya Foy's game exploded to new heights with the addition of elite performance training,
          unlocking unprecedented explosiveness, speed, and mobility. This transformative leap
          propelled her into the{" "}
          <strong style={{ color: hText }}>nation's top 50 rankings by ESPN</strong>, igniting a
          firestorm of national attention and securing dozens of{" "}
          <strong style={{ color: hText }}>Power 5 scholarship offers</strong> from schools across
          the country. The culmination of her tireless work ethic, refined skills, and cutting-edge
          training paid dividends at Cinco Ranch High School, where Aniya etched her name in history
          as the all-time leading scorer. Breaking records and rewriting the school's basketball
          legacy, she cemented her status as arguably the greatest women's basketball player in school
          history.
        </>
      ),
      img: "/pictures/alumni/aniya-hs.jpeg",
      imgFallback: "/pictures/aniya-foy.png",
      imgAlt: "Aniya Foy – High school game",
      imageRight: true,
    },
    {
      phase: "College",
      title: "Building Legacy",
      body: (
        <>
          Next Stop: Big XII Basketball 🏀🏀
          <br />
          Aniya Foy takes her talents to{" "}
          <strong style={{ color: hText }}>Kansas State University.</strong> With her extreme
          athleticism and elite skill set, she's poised to make an immediate impact on the court. As
          she embarks on this exciting new chapter, the possibilities are endless – stay tuned for
          what's next in Aniya's journey.
        </>
      ),
      img: "/pictures/alumni/aniya-college.jpeg",
      imgFallback: "/pictures/aniya-foy.png",
      imgAlt: "Aniya Foy – Kansas State commitment",
      imageRight: false,
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const height = timelineRef.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, (window.innerHeight / 2 - rect.top) / height));
      setDotPct(progress * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: pageBg, fontFamily: "'Plus Jakarta Sans', sans-serif", color: hText }}>

      {/* ── Sticky Navbar ── */}
      <header
        className="sticky top-0 z-50 px-6 py-3"
        style={{
          background: navBg,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${navBorder}`,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <Logo className="h-6 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ color: navLink }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = navHover)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = navLink)}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/evaluation-workout"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-200"
              style={{ background: "#8dbb1c", color: "#0a0a0a" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")}
            >
              Sign Up
            </Link>
            <button
              onClick={() => setMobileOpen(s => !s)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: hText, background: mobileBtnBg }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 pb-3 flex flex-col gap-1" style={{ borderTop: `1px solid ${hBorder}` }}>
            {navLinks.map(l => (
              <button
                key={l.label}
                onClick={() => { scrollTo(l.href); setMobileOpen(false); }}
                className="text-left px-2 py-3 text-sm font-semibold uppercase tracking-widest"
                style={{ color: hMuted, borderBottom: `1px solid ${mobileItemBorder}` }}
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/evaluation-workout"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-widest"
              style={{ background: "#8dbb1c", color: "#0a0a0a" }}
            >
              Sign Up Now
            </Link>
          </div>
        )}
      </header>

      {/* ── Hero ── (always dark — photo with overlay) */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/pictures/alumni/aniya-hero.jpeg"
            alt="Aniya Foy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.70) 45%, rgba(8,8,8,0.15) 100%)" }} />
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: `linear-gradient(to top, ${pageBg}, transparent)` }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.20em] mb-6" style={{ color: "#8dbb1c" }}>
              Aniya Foy · Training &amp; Development
            </p>
            <h1 className="font-display uppercase mb-6" style={{ lineHeight: "0.88" }}>
              <span className="block text-6xl md:text-7xl xl:text-8xl font-black" style={{ color: "#ffffff" }}>UNLEASH</span>
              <span className="block text-6xl md:text-7xl xl:text-8xl font-black" style={{ color: "#ffffff" }}>YOUR</span>
              <span className="block text-6xl md:text-7xl xl:text-8xl font-black" style={{ color: "#8dbb1c", textShadow: "0 0 40px rgba(141,187,28,0.35)" }}>
                ATHLETE'S
              </span>
              <span className="block text-6xl md:text-7xl xl:text-8xl font-black" style={{ color: "#ffffff" }}>POTENTIAL</span>
            </h1>
            <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
              See how Axis Sports Lab transformed one of the nation's top guards and discover the winning formula that can take YOUR athlete to the next level.
            </p>
            <Link
              to="/evaluation-workout"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200"
              style={{ background: "#8dbb1c", color: "#0a0a0a" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")}
            >
              Book Your Free Evaluation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Path to Success ── */}
      <section id="journey" className="py-24 px-6" style={{ background: pageBg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl uppercase" style={{ color: hText }}>The Path to Success</h2>
            <p className="text-sm mt-3" style={{ color: hMutedLo }}>From Foundations to D1 Basketball</p>
          </div>

          <div className="relative" ref={timelineRef}>
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(141,187,28,0.35) 10%, rgba(141,187,28,0.35) 90%, transparent)" }}
            />
            <div
              className="absolute left-1/2 hidden md:block z-20 pointer-events-none"
              style={{ top: `${dotPct}%`, transform: "translate(-50%, -50%)", transition: "top 60ms linear" }}
            >
              <div className="h-5 w-5 rounded-full" style={{
                background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #8dbb1c 55%)",
                boxShadow: "0 0 10px 3px rgba(141,187,28,0.90), 0 0 28px rgba(141,187,28,0.55)",
              }} />
            </div>

            <div className="space-y-24">
              {timeline.map((item, i) => (
                <div key={item.phase} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <div className={item.imageRight ? "md:order-1" : "md:order-2"}>
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#8dbb1c" }}>
                      {item.phase}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl uppercase mb-5 leading-tight" style={{ color: hText }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: hMuted }}>
                      {item.body}
                    </p>
                  </div>

                  <div className={`relative ${item.imageRight ? "md:order-2" : "md:order-1"}`}>
                    <div
                      className="overflow-hidden rounded-2xl aspect-[4/3]"
                      style={{
                        border: "1px solid rgba(141,187,28,0.20)",
                        boxShadow: isDark ? "0 20px 60px rgba(0,0,0,0.6)" : "0 20px 60px rgba(0,0,0,0.15)",
                        transform: i % 2 === 0 ? "rotate(1deg)" : "rotate(-1deg)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.imgAlt}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        onError={e => { (e.currentTarget as HTMLImageElement).src = item.imgFallback; }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Training That Built Aniya ── */}
      <section id="training" className="py-24 px-6" style={{ background: sectionBg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#8dbb1c" }}>
              The Axis Sports Lab System
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-5" style={{ color: hText }}>
              The Training That Built Aniya Foy
            </h2>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: hMuted }}>
              At Axis Sports Lab, every athlete trains through our proven 4-Pillar Development System — a
              holistic approach designed to build not only skilled players, but confident leaders on and off
              the court. This is the very system that guided Aniya Foy from her first dribble all the way
              to a Division I commitment.
            </p>
          </div>

          <p className="text-center text-[11px] font-bold uppercase tracking-widest mb-8" style={{ color: hMutedLo }}>
            The 4 Pillars of Axis Sports Lab
          </p>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map(p => (
              <div key={p.title} className="relative overflow-hidden rounded-2xl aspect-square group">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-display text-xl md:text-2xl uppercase mb-1.5" style={{ color: "#8dbb1c" }}>
                    {p.title}
                  </h4>
                  <p className="text-xs leading-relaxed hidden sm:block" style={{ color: "rgba(255,255,255,0.60)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center max-w-2xl mx-auto">
            <p className="text-sm leading-relaxed" style={{ color: hMuted }}>
              Through hard work, dedication, and a passion for the game, Aniya developed the skills,
              confidence, and resilience to succeed both on and off the court. The lessons she learned at
              Axis Sports Lab have stayed with her, empowering her to take on new challenges and pursue
              her dreams with unwavering determination. More than just a training program,{" "}
              <em style={{ color: "#8dbb1c" }}>Axis Sports Lab builds champions for life.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section id="programs" className="py-24 px-6" style={{ background: pageBg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#8dbb1c" }}>
              Programs for Your Athlete
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-4" style={{ color: hText }}>
              Start Where Your Athlete Is
            </h2>
            <p className="max-w-lg mx-auto text-sm" style={{ color: hMuted }}>
              Whether your child is just picking up the ball or aiming for a college scholarship, we
              have a program tailored to their journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(141,187,28,0.18)" }}>
              <img
                src="/pictures/alumni/programs.jpeg"
                alt="Axis Sports Lab Programs"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4">
              {programs.map(prog => (
                <div
                  key={prog.name}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: cardBg, border: "1px solid rgba(141,187,28,0.18)" }}
                >
                  <div
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.35)" }}
                  >
                    <Trophy className="h-4 w-4" style={{ color: "#8dbb1c" }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="font-bold text-sm" style={{ color: hText }}>{prog.name}</span>
                      <span
                        className="text-[10px] rounded-full px-2 py-0.5 font-bold uppercase"
                        style={{ background: badgeBg, color: badgeText }}
                      >
                        {prog.grade}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: hMuted }}>
                      {prog.desc}
                    </p>
                  </div>
                </div>
              ))}

              <p className="text-xs pt-2" style={{ color: hMutedLo }}>
                Each program includes a{" "}
                <strong style={{ color: "#8dbb1c" }}>Free Athlete Evaluation.</strong>
              </p>

              <Link
                to="/evaluation-workout"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200"
                style={{ background: "#8dbb1c", color: "#0a0a0a" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")}
              >
                Book Your Athlete's Evaluation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recognized by the Best ── */}
      <section id="media" className="py-20 px-6" style={{ background: sectionBg }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl uppercase mb-2" style={{ color: hText }}>Recognized by the Best</h2>
          <p className="text-sm mb-12" style={{ color: hMutedLo }}>
            Aniya's story and Axis Sports Lab's impact have been featured in:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { src: "/pictures/alumni/logo-espn.png",              alt: "ESPN",              h: "h-8"  },
              { src: "/pictures/alumni/logo-houston-chronicle.png", alt: "Houston Chronicle", h: "h-8"  },
              { src: "/pictures/alumni/logo-click2houston.png",     alt: "Click2Houston",     h: "h-9"  },
              { src: "/pictures/alumni/logo-fox26.svg",             alt: "FOX 26 Houston",    h: "h-8"  },
              { src: "/pictures/alumni/logo-vype.webp",             alt: "Vype",              h: "h-6"  },
              { src: "/pictures/alumni/logo-localnews.png",         alt: "Local News",        h: "h-10" },
            ].map(logo => (
              <div key={logo.alt} className="flex items-center justify-center px-4 py-3 rounded-xl"
                style={{ background: logoBg, border: `1px solid ${logoBorder}` }}>
                <img src={logo.src} alt={logo.alt} className={`${logo.h} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Your Athlete Can Be Next ── */}
      <section
        className="relative py-32 px-6 overflow-hidden"
        style={{ backgroundImage: "url(/pictures/alumni/cta-bg.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#8dbb1c" }}>
            Aniya's Story Is Proof
          </p>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-5" style={{ color: "#ffffff" }}>
            Your Athlete Can Be Next
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.60)" }}>
            Give your child the foundation, discipline, and training to thrive on and off the court.
          </p>
          <Link
            to="/evaluation-workout"
            className="inline-flex items-center gap-2 rounded-xl px-9 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200"
            style={{ background: "#8dbb1c", color: "#0a0a0a" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")}
          >
            Book Your Athlete's Evaluation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6" style={{ background: footerBg, borderTop: `1px solid ${hBorder}` }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-auto" />
            <div className="text-left">
              <p className="text-xs font-bold" style={{ color: hMuted }}>Shaping athletes.</p>
              <p className="text-xs" style={{ color: hMutedLo }}>Building leaders.</p>
            </div>
          </div>
          <p className="text-xs text-center" style={{ color: hMutedLo }}>
            © 2026 Axis Sports Lab • Aniya Foy | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>

    </div>
  );
};

export default AniyaFoy;
