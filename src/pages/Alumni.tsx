import { useTheme } from "next-themes";
import { Trophy, Star, MapPin, GraduationCap, Medal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

/* ─── Alumni Data ─────────────────────────────────────────────────── */
const alumniList = [
  {
    name: "Aniya Foy",
    position: "Guard",
    school: "Cinco Ranch High School",
    commitment: "Kansas State University",
    conference: "Big XII",
    commitmentColor: "#512888",
    tag: "D1 Committed",
    bio: "From foundations to D1 basketball   Aniya Foy's journey is a testament to what elite training and relentless dedication can achieve. Developed through the Axis Sports Lab system from elementary school through high school, Aniya built the extreme athleticism and elite skill set that made her one of the most sought-after prospects in the nation.",
    achievements: [
      "ESPN Nation's Top 50   High School",
      "All-Time Leading Scorer at Cinco Ranch HS",
      "Dozens of Power 5 Scholarship Offers",
      "Arguably the Greatest Women's Basketball Player in School History",
    ],
    media: ["ESPN", "KPRC 2", "Vype"],
    img: "/pictures/aniya-foy.png",
    profileUrl: "/alumni/aniya-foy",
    featured: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
const Alumni = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.62)";

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[52vh] flex items-center overflow-hidden pb-10 pt-14 sm:pt-20"
        style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-label="Alumni Hero"
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />
        <Particles count={14} />
        <div className="relative z-10 container-x w-full text-center">
          <Reveal>
            <p className="eyebrow justify-center mb-4">
              <span className="h-px w-8 bg-primary-glow" /> Where They Are Now
            </p>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl uppercase font-black leading-tight">
              <span style={{ color: "#ffffff" }}>Our </span><span className="text-gradient-red">Alumni</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Athletes who trained at Axis Sports Lab and went on to dominate at the highest levels. Their success is our mission.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-8 border-y" style={{ borderColor: "rgba(141,187,28,0.18)", background: isDark ? "rgba(141,187,28,0.05)" : "rgba(141,187,28,0.04)" }}>
        <div className="container-x">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            {[
              { val: "D1",    label: "College Committed"   },
              { val: "Big XII", label: "Conference"        },
              { val: "Top 50", label: "ESPN National Rank" },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl" style={{ color: "#8dbb1c" }}>{s.val}</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: hMuted }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alumni Profiles ── */}
      <section className="section" aria-label="Alumni Profiles">
        <div className="container-x">
          <Reveal className="text-center mb-14">
            <p className="eyebrow justify-center mb-3"><span className="h-px w-8 bg-primary-glow" /> Featured Athletes</p>
            <h2 className="h-section" style={{ color: hText }}>
              Alumni <span className="text-gradient-red">Spotlight</span>
            </h2>
          </Reveal>

          <div className="space-y-10 max-w-5xl mx-auto">
            {alumniList.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl flex flex-col lg:flex-row"
                  style={{ border: a.featured ? "1px solid rgba(141,187,28,0.40)" : "1px solid rgba(255,255,255,0.08)", background: isDark ? "#0d0d0d" : "#ffffff", boxShadow: a.featured ? "0 0 40px rgba(141,187,28,0.08)" : "none" }}>

                  {/* Left   Image */}
                  <div className="relative shrink-0 w-full lg:w-80 h-80 lg:h-auto overflow-hidden">
                    <img src={a.img} alt={a.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.9) 100%)" }} />
                    <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, transparent 65%, rgba(13,13,13,0.95) 100%)" }} />

                    {/* Featured badge */}
                    {a.featured && (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: "rgba(141,187,28,0.90)", color: "#0a0a0a" }}>
                        <Star className="h-3 w-3 fill-current" /> Featured
                      </div>
                    )}

                    {/* Name overlay on mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:hidden">
                      <p className="font-display text-3xl uppercase text-white">{a.name}</p>
                      <p className="text-xs mt-1" style={{ color: "#8dbb1c" }}>{a.position} · {a.school}</p>
                    </div>
                  </div>

                  {/* Right   Details */}
                  <div className="flex flex-col justify-center p-7 lg:p-10 flex-1 gap-5">

                    {/* Name (desktop) */}
                    <div className="hidden lg:block">
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(141,187,28,0.70)" }}>
                        {a.position}
                      </p>
                      <h3 className="font-display text-4xl xl:text-5xl uppercase" style={{ color: hText }}>{a.name}</h3>
                    </div>

                    {/* Info pills */}
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                        style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", color: hMuted, border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)"}` }}>
                        <MapPin className="h-3 w-3" /> {a.school}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                        style={{ background: "rgba(81,40,136,0.20)", border: "1px solid rgba(81,40,136,0.50)", color: "#c8a8ff" }}>
                        <GraduationCap className="h-3 w-3" /> {a.commitment} · {a.conference}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                        style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70" }}>
                        <Trophy className="h-3 w-3" /> {a.tag}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {a.bio}
                    </p>

                    {/* Achievements */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(141,187,28,0.70)" }}>
                        Achievements
                      </p>
                      <ul className="space-y-2">
                        {a.achievements.map(ach => (
                          <li key={ach} className="flex items-start gap-2.5 text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            <Medal className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "#8dbb1c" }} />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Media */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.35)" }}>
                        As Seen In
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {a.media.map(m => (
                          <span key={m} className="rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
                            style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)"}`, color: hMuted }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Story Link */}
                    {a.profileUrl && (
                      <Link
                        to={a.profileUrl}
                        className="inline-flex items-center gap-2 self-start rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200"
                        style={{ background: "#8dbb1c", color: "#0a0a0a" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.1)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1)")}
                      >
                        View Full Story <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section relative overflow-hidden"
        style={{ backgroundImage: "url(/pictures/teams-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Your Journey Starts Here</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight" style={{ color: "#ffffff" }}>
              The Next <span className="text-gradient-red">Success Story</span><br />Could Be Yours
            </h2>
            <p className="mt-5 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Join the same program that built Aniya Foy and other elite athletes. Your path to the next level begins at Axis Sports Lab.
            </p>
            <a href="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Your Free Evaluation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Alumni;
