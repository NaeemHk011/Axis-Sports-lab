import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const faqs = [
  { q: "How do I access the free basketball workout?", a: "Simply click the 'Click to Download' button above and enter your email to get instant access to the full 60-minute workout guide." },
  { q: "Is this suitable for beginners?", a: "Absolutely. The workout is structured to meet athletes at all skill levels   from first-time players to advanced competitors." },
  { q: "How long is the basketball skills workout?", a: "The complete workout runs 60 minutes and covers ball handling, shooting mechanics, footwork, and game IQ drills." },
  { q: "Can I contact Axis Sports Lab for more info?", a: "Yes! Reach us at (346) 550-8150 or info@axissportslab.com   we're happy to help you find the right program." },
];

const Ebook = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Ebook Form Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(141,187,28,0.35)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem 1rem 0 0",
              }}
            >
              <h3 className="font-display text-xl uppercase text-white">Download Your Ebook</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-white/60 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/* Modal body */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(141,187,28,0.35)",
                borderTop: "none",
                borderRadius: "0 0 1rem 1rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                src="https://link.webtechs.dev/widget/form/l7kCZoH6ydgd3P94w9IP"
                style={{ width: "100%", height: "432px", border: "none", display: "block", borderRadius: "3px" }}
                id="inline-l7kCZoH6ydgd3P94w9IP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Ebook Form "
                data-height="432"
                data-layout-iframe-id="inline-l7kCZoH6ydgd3P94w9IP"
                data-form-id="l7kCZoH6ydgd3P94w9IP"
                title="Ebook Form "
              />
              {/* Black strips covering GHL white padding on all 4 sides */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10 }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "10px", background: "#0a0a0a" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "10px", background: "#0a0a0a" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "20px", background: "#0a0a0a" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "20px", background: "#0a0a0a" }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url(/pictures/athlete-running.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-x text-center w-full">
          <Reveal>
            <p className="eyebrow justify-center text-primary-glow">
              <span className="h-px w-8 bg-primary-glow" /> FREE Basketball Workout
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase text-white mt-4 leading-tight">
              DEVELOP Your Basketball Game<br />
              <span className="text-primary-glow">With Our 60 Minutes Workout</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-xl mx-auto text-base">
              Professionally crafted drills, techniques, and routines used by elite athletes to sharpen every facet of
              their game   available free to you.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-red mt-8 inline-flex text-sm font-bold"
            >
              Click to Download <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="section bg-background">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/LMSzitbTy6U"
                title="Axis Sports Lab Basketball Workout"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Transform Section */}
      <section className="section bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl uppercase text-white leading-tight">
              Transform Your Game, Unlock Your Potential with{" "}
              <span className="text-primary-glow">Axis Sports Lab</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              At Axis Sports Lab, we are devoted to deep practices as preparation for competition. We offer programs
              and develop players in an individualized format   every athlete gets the specific attention they need.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              At Axis Sports Lab, it's not just about playing basketball   it's about developing champion athletes with
              elite fundamentals. Our coaches give you the game-changing skills to dominate the court and get to the
              next level.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-red mt-8 inline-flex"
            >
              Click to Download <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
              <img
                src="/pictures/camps-main.jpg"
                alt="Axis Sports Lab team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ebook Showcase */}
      <section id="download" className="section bg-[hsl(var(--surface))]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square max-w-sm mx-auto">
              <img
                src="/pictures/gc-shooting.jpg"
                alt="The Basketball Skills Workout"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-8 text-center">
                <p className="font-display text-2xl uppercase text-white">THE BASKETBALL</p>
                <p className="font-display text-4xl uppercase text-primary-glow">SKILLS WORKOUT</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow"><span className="h-px w-8 bg-primary-glow" /> Free Resource</p>
            <h2 className="font-display text-4xl uppercase text-white mt-4 leading-tight">
              Your Ultimate Guide to Elevate Your{" "}
              <span className="text-primary-glow">Basketball Skills</span>
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Basketball is a game   it's a discipline. A dedication. A commitment that defines an athlete.",
                "It all comes down to 60 minutes. Unlock the full potential of your capabilities.",
                "Train smarter, not just harder   follow the same structure used by our elite coaches.",
                "Don't miss the workouts: find yours & share it in your community, add a rating.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-red mt-8 inline-flex"
            >
              Click to Download <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white text-center mb-10">
              Master the Fundamentals, <span className="text-primary-glow">Dominate the Court</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "🔥",
                title: "Commitment & Confidence",
                desc: "At Axis Sports Lab, we are committed to developing players in an individualized format so athletes develop the confidence to perform at the highest level.",
                img: "/pictures/teams-explore.jpg",
              },
              {
                icon: "⚡",
                title: "Professionally Crafted Skills",
                desc: "From coaches who bring professional-level experience   every drill, every session is designed to maximize your performance on the court.",
                img: "/pictures/gc-skills.jpg",
              },
              {
                icon: "📈",
                title: "Level Up Your Growth",
                desc: "Consistently progressing your fundamentals and athleticism, we give you the tools to reach your maximum and grow as an athlete.",
                img: "/pictures/athlete-feet.jpg",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-xl">
                  <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-3xl mb-2">{card.icon}</span>
                    <h3 className="font-display text-xl uppercase text-white leading-tight">{card.title}</h3>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">{card.desc}</p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="btn-red mt-5 text-xs inline-flex self-start"
                    >
                      Click to Download
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x max-w-2xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white text-center mb-10">
              Have Some <span className="text-primary-glow">Questions?</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="card-elite overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-semibold text-white text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary-glow transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open === i && (
                    <p className="mt-4 text-sm text-white/65 leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ebook;
