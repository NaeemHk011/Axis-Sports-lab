import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Twitter, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const unlimitedMonthly = [
  { level: "Beginners Skill Level", price: "$385", img: "/pictures/gc-shooting.jpg" },
  { level: "Intermediate Skill Level", price: "$375", img: "/pictures/gc-skills.jpg" },
  { level: "Advanced Skill Level", price: "$285", img: "/pictures/gc-camps.jpg" },
];

const twoDayWeekly = [
  { level: "Beginners Skill Level", price: "$185", img: "/pictures/teams-girls.jpg" },
  { level: "Intermediate Skill Level", price: "$185", img: "/pictures/teams-boys.jpg" },
  { level: "Advanced Skill Level", price: "$185", img: "/pictures/camps-main.jpg" },
];

const performanceMonthly = [
  { level: "Intermediate & High School", price: "$150", img: "/pictures/gc-athlete.jpg" },
  { level: "Elementary", price: "$150", img: "/pictures/athlete-running.jpg" },
];

/* ── Membership Subscription Modal ── */
const MembershipModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.96)" }}
    onClick={onClose}
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
          border: "1px solid rgba(141,187,28,0.3)",
          borderBottom: "none",
          borderRadius: "1rem 1rem 0 0",
        }}
      >
        <h3 className="font-display text-xl uppercase text-white">Membership Subscription</h3>
        <button
          onClick={onClose}
          className="grid h-8 w-8 place-items-center rounded-full text-white/60 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {/* Modal body wrapper — strips fixed here, scroll inside */}
      <div style={{ position: "relative", border: "1px solid rgba(141,187,28,0.3)", borderTop: "none", borderRadius: "0 0 1rem 1rem", overflow: "hidden" }}>
        {/* Scrollable area */}
        <div className="overflow-y-auto" style={{ background: "#0a0a0a", maxHeight: "calc(90vh - 60px)" }}>
          <iframe
            src="https://link.eyecanathletics.com/widget/form/ddN8ZsCDaOkB8JqMuFLv"
            style={{ width: "100%", height: "1953px", border: "none", display: "block" }}
            id="inline-ddN8ZsCDaOkB8JqMuFLv"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Membership Subscription Form"
            data-height="1953"
            data-layout-iframe-id="inline-ddN8ZsCDaOkB8JqMuFLv"
            data-form-id="ddN8ZsCDaOkB8JqMuFLv"
            title="Membership Subscription Form"
          />
        </div>
        {/* Strips — stay fixed over the viewport, don't scroll */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "10px", background: "#0a0a0a" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "10px", background: "#0a0a0a" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "20px", background: "#0a0a0a" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "20px", background: "#0a0a0a" }} />
        </div>
      </div>
    </div>
  </div>
);

/* ── Section 1: Unlimited Monthly Card ── */
const UnlimitedCard = ({ level, price, img, onAddToCart }: { level: string; price: string; img: string; onAddToCart: () => void }) => (
  <Reveal>
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-xl">
      <img src={img} alt={level} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">Monthly Package</p>
        <h3 className="font-display text-xl uppercase text-white leading-tight">{level}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-3xl text-white">{price}<span className="text-sm text-white/60 ml-1">/mo</span></span>
          <button onClick={onAddToCart} className="btn-red text-xs px-4 py-2">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </Reveal>
);

/* ── Section 2: 2 Days/Week Card ── */
const TwoDayCard = ({ level, price, img }: { level: string; price: string; img: string }) => (
  <Reveal>
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-xl">
      <img src={img} alt={level} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">2 Days / Week</p>
        <h3 className="font-display text-xl uppercase text-white leading-tight">{level}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-3xl text-white">{price}<span className="text-sm text-white/60 ml-1">/mo</span></span>
          <Link to="/membership-checkout-2days-week" className="btn-red text-xs px-4 py-2">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  </Reveal>
);

const Membership = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <MembershipModal onClose={() => setModalOpen(false)} />}

      <PageHero
        title="Membership"
        subtitle="Choose the package that fits your goals."
        bg="/pictures/camps-hero.jpg"
        bgPosition="center top"
      />

      {/* Section 1: Unlimited Monthly */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white text-center mb-10">
              Unlimited Monthly <span className="text-primary-glow">Skills Training</span> Packages
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {unlimitedMonthly.map((p) => (
              <UnlimitedCard key={p.level} {...p} onAddToCart={() => setModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 2 Days / Week */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white text-center mb-10">
              Monthly Skills Training Packages{" "}
              <span className="text-primary-glow">(2 Days / Week)</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {twoDayWeekly.map((p) => (
              <TwoDayCard key={p.level + "2"} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Unlimited Performance Training */}
      <section className="section bg-background">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white text-center mb-10">
              Unlimited Performance Training{" "}
              <span className="text-primary-glow">Monthly Packages</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {performanceMonthly.map((p) => (
              <Reveal key={p.level}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-xl">
                  <img src={p.img} alt={p.level} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">Monthly Package</p>
                    <h3 className="font-display text-xl uppercase text-white leading-tight">{p.level}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display text-3xl text-white">{p.price}<span className="text-sm text-white/60 ml-1">/mo</span></span>
                      <button disabled className="text-xs px-4 py-2 rounded-lg font-bold uppercase tracking-wider cursor-not-allowed"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }}>
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Follow */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl uppercase text-white mb-8">Follow Us on Social Media</h2>
            <div className="flex justify-center flex-wrap gap-8">
              {[
                { Icon: Instagram, label: "@axissportslab", href: "https://www.instagram.com/axissportslab/" },
                { Icon: Facebook, label: "Axis Sports Lab", href: "https://www.facebook.com/AxisSportsLab" },
                { Icon: Twitter, label: "@axissportslab", href: "https://x.com/AxisSportsLab" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-[hsl(var(--surface-2))] text-white/70 transition-all duration-300 group-hover:border-primary group-hover:text-primary-glow group-hover:bg-primary/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url(/pictures/teams-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight">
              Time to take your athletics and<br />cognitive skills to the next level
            </h2>
            <p className="mt-4 text-white/70">Click below to schedule your Evaluation Workout</p>
            <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Membership;
