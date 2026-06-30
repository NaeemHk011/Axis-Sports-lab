import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const Camps = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return (
  <>
      <section className="w-full overflow-hidden max-[380px]:h-[160px] h-[220px] sm:h-[320px] md:h-auto">
        <img src="/pictures/banner-camps.png" alt="Train & Play - Basketball Camps" className="w-full h-full object-cover object-center" />
      </section>

    {/* Main Camp Info */}
    <section className="section bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="font-display text-4xl uppercase text-white leading-tight">
            Axis Sports Lab <span className="text-primary-glow">Basketball Camps</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Is your child passionate about basketball? Do you want them to develop essential skills, build confidence,
            and have a blast playing the game? Look no further! Axis Sports Lab' Train &amp; Play program is
            specifically designed for kids in 1st–8th grade to learn, grow, and thrive in a fun and competitive
            environment.
          </p>
          <Link to="/campscheduler" className="btn-red mt-8 inline-flex">
            Book Your Camp Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/pictures/camps-main.jpg"
              alt="Youth basketball camp"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                Now Enrolling · Ages 5–17
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* What You Get */}
    <section className="section bg-[hsl(var(--surface))]">
      <div className="container-x">
        <Reveal>
          <h2 className="font-display text-3xl uppercase text-white text-center">
            What's <span className="text-primary-glow">Included</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🏀", title: "Skill-Specific Training", desc: "Ball handling, shooting, footwork & IQ drills led by pro coaches." },
            { icon: "⚡", title: "Real Game Competition", desc: "Scrimmages and game-day scenarios to apply what you learn." },
            { icon: "🧠", title: "Mental Performance", desc: "Mindset coaching to build confidence and competitive drive." },
            { icon: "💪", title: "Strength & Conditioning", desc: "Age-appropriate athletic development sessions." },
            { icon: "📋", title: "Progress Tracking", desc: "Personalized feedback and assessment after each camp." },
            { icon: "👕", title: "Axis Sports Lab Jersey", desc: "Every camper receives an official Axis Sports Lab jersey." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="card-elite h-full flex flex-col gap-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display text-xl uppercase text-white">{item.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: isDark
          ? "linear-gradient(135deg, #080808 0%, #0d1a00 25%, #1d3d00 55%, #0d1a00 80%, #080808 100%)"
          : "linear-gradient(135deg, #0a1800 0%, #193600 25%, #2d6600 55%, #193600 80%, #0a1800 100%)"
      }} />
      <div className="relative z-10 container-x text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight" style={{ color: "#ffffff" }}>
            Time to take your athletics and<br />cognitive skills to the next level
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.70)" }}>Click below to schedule your Evaluation Workout</p>
          <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </>
  );
};

export default Camps;
