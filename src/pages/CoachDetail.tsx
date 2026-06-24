import { useParams, Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

const coachData: Record<string, {
  name: string;
  role: string;
  img: string;
  tagline: string;
  paras: string[];
  specialties: string[];
  highlights?: { label: string; value: string }[];
  quote?: string;
}> = {
  "richard-foy": {
    name: "Richard Foy",
    role: "The Architect of Athletic Excellence",
    img: "/pictures/richard-vertical.jpg",
    tagline: "Visionary leader. Community builder. Transformative voice in sports development.",
    paras: [
      "Richard Foy is a visionary leader, a community builder, and a transformative voice in sports development. Often described as a unifying, charismatic force who brings an unmatched level of inspiration and strategic vision to the game, Coach Foy has redefined what it means to build athletes from the ground up.",
      "From the fundamental beginnings of grade school courts to the high-stakes arenas of professional sports, his holistic development system has successfully elevated both men's and women's sports      breaking barriers and creating a culture where excellence is the only standard.",
      "Richard's journey began in 2017 with the founding of Eyecan Athletics, a groundbreaking program dedicated to building explosive athletes from the grassroots level. Driven by an insatiable desire to innovate, that initial spark evolved into Axis Sports Lab      a premier ecosystem where elite sports development seamlessly meets cutting-edge technology and digital enterprise to unlock an athlete's true ceiling.",
      "At the core of Richard's relentless drive is a profound foundation of faith. A devoted believer in Jesus Christ, he openly credits his strength, wisdom, and vision to being powered by God. For Richard, training is a divine calling to speak purpose into the lives of young men and women, helping them realize their God-given potential both on and off the court.",
      "With thousands of youth, collegiate, and professional athletes trained      and hundreds successfully placed into collegiate programs with life-changing scholarships      Coach Foy continues to inspire, elevate, and lead a movement that is transforming Texas sports and empowering families for generations to come.",
    ],
    specialties: [
      "World-Class Basketball Skills Development & IQ",
      "Athletic Conditioning & Recruiting Preparation",
      "Sports Technology & Digital Enterprise Integration",
      "Business Entrepreneurship & Ecosystem Building",
      "Community Wealth, Leadership, & Family Empowerment",
    ],
    highlights: [
      { label: "Founded", value: "2017" },
      { label: "Athletes Trained", value: "1,000+" },
      { label: "College Placements", value: "100s" },
      { label: "Based In", value: "Katy, TX" },
    ],
    quote: "We don't just train athletes. We build champions for life.",
  },
  "eddie-robinson": {
    name: "Eddie Robinson",
    role: "Elite Performance Specialist & NBA Veteran",
    img: "/pictures/eddie-vertical.jpg",
    tagline: "Former NBA star. $32M Chicago Bulls contract. Head-to-head with Jordan, Kobe, and Iverson.",
    paras: [
      "Former NBA player Eddie Robinson built his reputation on freakish athleticism, elite scoring ability, and a relentless work ethic. A native of Flint, Michigan, Eddie overcame long odds through sheer determination and the guidance of mentors who recognized his raw potential early      an experience that shapes his training philosophy today.",
      "After earning First Team All-American honors, Eddie transitioned to the NBA, playing for the Charlotte Hornets before signing a landmark five-year, $32 million contract with the Chicago Bulls. Throughout his professional career, he went head-to-head guarding some of the greatest icons in basketball history, including Michael Jordan, Kobe Bryant, and Allen Iverson.",
      "He later concluded his playing career in Ice Cube's star-studded BIG3 league, selected from hundreds of fellow NBA veterans      a testament to the elite-level fitness and skill he maintained well past his prime.",
      "For more than a decade, Eddie has translated this high-stakes experience into results for athletes of all ages. His coaching goes beyond standard drills      it implants a true NBA standard of preparation, sharp basketball IQ, and the fine details that separate good players from great ones.",
      "By training with Eddie, athletes gain access to a rare, elite-level developmental blueprint that builds unwavering confidence and a distinct competitive edge. This is where the highest level of the game meets the next generation of talent.",
    ],
    specialties: [
      "NBA-Level Skill Development",
      "Elite Scoring & Athleticism",
      "Advanced Basketball IQ",
      "Competitive Edge Training",
      "High-Performance Preparation",
    ],
    highlights: [
      { label: "NBA Contract", value: "$32M" },
      { label: "Teams", value: "Hornets · Bulls · BIG3" },
      { label: "All-American", value: "First Team" },
      { label: "Experience", value: "10+ Years Coaching" },
    ],
    quote: "The details that look easy from the stands are what separate good from great.",
  },
};

const CoachDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";

  const coach = coachData[slug ?? ""];

  if (!coach) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-display text-3xl uppercase" style={{ color: hText }}>Coach not found</p>
        <Link to="/about" className="btn-pill btn-pill-primary">
          <ArrowLeft className="h-4 w-4" /> Back to About
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24 pt-10">
      <div className="container-x max-w-5xl mx-auto px-4">

        {/* Back link */}
        <Reveal>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-10 transition-colors duration-200"
            style={{ color: "rgba(141,187,28,0.80)" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to About
          </Link>
        </Reveal>

        {/* Hero card */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl mb-14 flex flex-col md:flex-row"
            style={{ border: "1px solid rgba(141,187,28,0.25)", background: isDark ? "#0d0d0d" : "#ffffff" }}
          >
            {/* Image */}
            <div className="relative shrink-0 w-full md:w-80 h-72 md:h-auto overflow-hidden">
              <img
                src={coach.img}
                alt={coach.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 55%, rgba(13,13,13,0.95) 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 h-24"
                style={{ background: "linear-gradient(to top, rgba(13,13,13,1) 0%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #8dbb1c, transparent)" }} />
            </div>

            {/* Intro */}
            <div className="flex flex-col justify-center p-8 md:p-12 flex-1">
              <span className="self-start mb-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70" }}>
                {coach.role}
              </span>
              <h1 className="font-display text-4xl md:text-5xl uppercase leading-tight mb-4" style={{ color: hText }}>
                {coach.name}
              </h1>
              <p className="text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {coach.tagline}
              </p>

              {/* Stat highlights */}
              {coach.highlights && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {coach.highlights.map(h => (
                    <div key={h.label} className="rounded-xl px-4 py-3"
                      style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(141,187,28,0.75)" }}>{h.label}</p>
                      <p className="font-display text-lg uppercase" style={{ color: hText }}>{h.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Bio paragraphs */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div className="md:col-span-2 space-y-5">
            <Reveal>
              <p className="eyebrow mb-5"><span className="h-px w-8 bg-primary-glow" /> Full Story</p>
            </Reveal>
            {coach.paras.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Specialties sidebar */}
          <div>
            <Reveal>
              <div className="rounded-2xl p-6 sticky top-24"
                style={{ border: "1px solid rgba(141,187,28,0.20)", background: isDark ? "rgba(141,187,28,0.05)" : "rgba(141,187,28,0.06)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(141,187,28,0.80)" }}>
                  Specialties
                </p>
                <ul className="space-y-3">
                  {coach.specialties.map(s => (
                    <li key={s} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: "#8dbb1c" }} />
                      <span className="text-sm leading-snug" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quote */}
        {coach.quote && (
          <Reveal>
            <blockquote
              className="relative rounded-2xl px-10 py-8 text-center mb-14"
              style={{ border: "1px solid rgba(141,187,28,0.25)", background: isDark ? "#0d0d0d" : "#f9f9f9" }}
            >
              <span className="absolute top-4 left-6 font-display text-7xl leading-none select-none" style={{ color: "rgba(141,187,28,0.15)" }}>"</span>
              <p className="font-display text-2xl md:text-3xl uppercase leading-tight text-gradient-red relative z-10">
                {coach.quote}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(141,187,28,0.60)" }}>
                     {coach.name}
              </p>
            </blockquote>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal className="text-center">
          <p className="text-sm mb-6" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Ready to train with {coach.name.split(" ")[0]}?
          </p>
          <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
            Book a Free Evaluation
            <span className="btn-pill-icon"><ArrowLeft className="h-4 w-4 rotate-180" /></span>
          </Link>
        </Reveal>
      </div>
    </main>
  );
};

export default CoachDetail;
