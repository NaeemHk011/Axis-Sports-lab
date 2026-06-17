import { useState } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import {
  ArrowRight, Instagram, Facebook, Twitter, X,
  Shield, Eye, Video, Fingerprint, Network,
  Bell, ChevronDown, CheckCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

/* ─── data ──────────────────────────────────────────────────────── */
const unlimitedMonthly = [
  { level: "Beginners Skill Level",    price: "$285", img: "/pictures/gc-shooting.jpg", slug: "beginners-unlimited"    },
  { level: "Intermediate Skill Level", price: "$275", img: "/pictures/gc-skills.jpg",   slug: "intermediate-unlimited" },
  { level: "Advanced Skill Level",     price: "$265", img: "/pictures/gc-camps.jpg",    slug: "advanced-unlimited"     },
];

const twoDayWeekly = [
  { level: "Beginners Skill Level",    price: "$185", img: "/pictures/teams-girls.jpg", slug: "beginners-2days"    },
  { level: "Intermediate Skill Level", price: "$175", img: "/pictures/teams-boys.jpg",  slug: "intermediate-2days" },
  { level: "Advanced Skill Level",     price: "$165", img: "/pictures/camps-main.jpg",  slug: "advanced-2days"     },
];

const performanceMonthly = [
  { level: "Intermediate & High School", price: "$150", img: "/pictures/gc-athlete.jpg"     },
  { level: "Elementary",                 price: "$150", img: "/pictures/athlete-running.jpg" },
];

const checkoutUrl = (slug: string) => `https://axissportslab.com/checkout?plan=${slug}`;

/* ─── Checkout button with Stripe tooltip ───────────────────────── */
const CheckoutBtn = ({ href, label }: { href: string; label: string }) => (
  <div className="relative group/tip">
    <a href={href} className="btn-red text-xs px-4 py-2 inline-block">
      {label}
    </a>
    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5
                    opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150 z-20">
      <div className="relative whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] font-semibold"
        style={{ background: "#111", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)" }}>
        🔒 Secure checkout powered by Stripe
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px h-2 w-2 rotate-45"
          style={{ background: "#111", borderRight: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}/>
      </div>
    </div>
  </div>
);

/* ─── Notify Me Modal ────────────────────────────────────────────── */
const NotifyModal = ({ plan, onClose }: { plan: string; onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [done,  setDone]  = useState(false);
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }} onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl p-7"
        style={{ background: "#0d0d0d", border: "1px solid rgba(141,187,28,0.30)" }}
        onClick={e => e.stopPropagation()}>

        <button onClick={onClose}
          className="absolute top-4 right-4 grid h-7 w-7 place-items-center rounded-full text-white/60 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          <X className="h-3.5 w-3.5"/>
        </button>

        {!done ? (
          <>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
              style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.25)" }}>
              <Bell className="h-5 w-5" style={{ color: "#8dbb1c" }}/>
            </div>
            <h3 className="font-display text-xl uppercase text-white mb-1">Notify Me</h3>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
              Be the first to know when{" "}
              <strong className="text-white">{plan}</strong> becomes available.
            </p>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border px-4 py-3 text-sm mb-3"
              style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.10)", color: "#fff", outline: "none" }}
              onFocus={e => (e.target.style.borderColor = "rgba(141,187,28,0.55)")}
              onBlur={e  => (e.target.style.borderColor = "rgba(255,255,255,0.10)")}
            />
            <button
              onClick={() => email && setDone(true)}
              disabled={!email}
              className="w-full rounded-xl py-3 font-display text-base uppercase tracking-wider transition-all"
              style={{
                background: email ? "#8dbb1c" : "rgba(255,255,255,0.06)",
                color:      email ? "#0a0a0a" : "rgba(255,255,255,0.22)",
                cursor:     email ? "pointer"  : "not-allowed",
              }}>
              Notify Me When Available
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <CheckCircle className="h-10 w-10 mx-auto mb-3" style={{ color: "#8dbb1c" }}/>
            <h3 className="font-display text-xl uppercase text-white mb-2">You're on the list!</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
              We'll email{" "}
              <span style={{ color: "#8dbb1c" }}>{email}</span>{" "}
              as soon as this package launches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Membership Subscription Modal ─────────────────────────────── */
const MembershipModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.96)" }} onClick={onClose}>
    <div className="relative w-full max-w-2xl"
      style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
      onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between px-5 py-4 shrink-0"
        style={{ background: "#0a0a0a", border: "1px solid rgba(141,187,28,0.3)", borderBottom: "none", borderRadius: "1rem 1rem 0 0" }}>
        <h3 className="font-display text-xl uppercase text-white">Membership Subscription</h3>
        <button onClick={onClose}
          className="grid h-8 w-8 place-items-center rounded-full text-white/60 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          <X className="h-4 w-4"/>
        </button>
      </div>
      <div style={{ position: "relative", border: "1px solid rgba(141,187,28,0.3)", borderTop: "none", borderRadius: "0 0 1rem 1rem", overflow: "hidden" }}>
        <div className="overflow-y-auto" style={{ background: "transparent", maxHeight: "calc(90vh - 60px)" }}>
          <iframe
            src="https://link.webtechs.dev/widget/form/glFK27QcYnexZFOH0nhv"
            style={{ width: "100%", height: "1565px", border: "none", display: "block", background: "transparent" }}
            id="inline-glFK27QcYnexZFOH0nhv"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Membership Subscription Form "
            data-height="1565"
            data-layout-iframe-id="inline-glFK27QcYnexZFOH0nhv"
            data-form-id="glFK27QcYnexZFOH0nhv"
            title="Membership Subscription Form"
          />
        </div>
      </div>
    </div>
  </div>
);

/* ─── Membership card    Unlimited ───────────────────────────────── */
const UnlimitedCard = ({ level, price, img, onAddToCart }: { level: string; price: string; img: string; onAddToCart: () => void }) => (
  <Reveal>
    <div onClick={onAddToCart} className="card-img-bg relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-xl">
      <img src={img} alt={level} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"/>
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">Monthly Package</p>
        <h3 className="font-display text-xl uppercase text-white leading-tight">{level}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-3xl text-white">{price}<span className="text-sm text-white/60 ml-1">/mo</span></span>
          <button onClick={e => { e.stopPropagation(); onAddToCart(); }} className="btn-red text-xs px-4 py-2">Add To Cart</button>
        </div>
      </div>
    </div>
  </Reveal>
);

/* ─── Membership card    2 Days/Week ─────────────────────────────── */
const TwoDayCard = ({ level, price, img }: { level: string; price: string; img: string; slug: string }) => (
  <Reveal>
    <Link to="/membership-checkout-2days-week" className="block">
      <div className="card-img-bg relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-xl">
        <img src={img} alt={level} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"/>
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">2 Days / Week</p>
          <h3 className="font-display text-xl uppercase text-white leading-tight">{level}</h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display text-3xl text-white">{price}<span className="text-sm text-white/60 ml-1">/mo</span></span>
            <span className="btn-red text-xs px-4 py-2">Join Now</span>
          </div>
        </div>
      </div>
    </Link>
  </Reveal>
);

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
const Membership = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const [modalOpen,    setModalOpen]    = useState(false);
  const [notifyTarget, setNotifyTarget] = useState<string | null>(null);

  return (
    <>
      {modalOpen    && <MembershipModal onClose={() => setModalOpen(false)}/>}
      {notifyTarget && <NotifyModal plan={notifyTarget} onClose={() => setNotifyTarget(null)}/>}

      <section className="w-full overflow-hidden">
        <img src="/pictures/banner-membership.png" alt="We Don't Just Train. We Build Your Digital Infrastructure." className="w-full object-cover" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          TIER SECTIONS    wrapped so sticky bar appears at bottom
         ════════════════════════════════════════════════════════════ */}
      <div className="relative">

        {/* Section 1: Unlimited Monthly */}
        <section className="section bg-background">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl uppercase text-center mb-10" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Unlimited Monthly <span className="text-primary-glow">Skills Training</span> Packages
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {unlimitedMonthly.map(p => (
                <UnlimitedCard key={p.level} {...p} onAddToCart={() => setModalOpen(true)}/>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: 2 Days / Week */}
        <section className="section bg-[hsl(var(--surface))]">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-center mb-10" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Monthly Skills Training Packages{" "}
                <span className="text-primary-glow">(2 Days / Week)</span>
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {twoDayWeekly.map(p => (
                <TwoDayCard key={p.level + "2"} {...p}/>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Performance Training (Coming Soon) */}
        <section className="section bg-background">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-3xl uppercase text-center mb-10" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Unlimited Performance Training{" "}
                <span className="text-primary-glow">Monthly Packages</span>
              </h2>
            </Reveal>
            <div className="grid gap-6 grid-cols-1 max-w-lg mx-auto">
              {performanceMonthly.map(p => (
                <Reveal key={p.level}>
                  <div className="card-img-bg relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-xl">
                    <img src={p.img} alt={p.level}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      {/* Coming Soon badge */}
                      <span className="mb-2 self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)", color: "rgba(255,255,255,0.60)" }}>
                        Coming Soon
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-1">Monthly Package</p>
                      <h3 className="font-display text-xl uppercase text-white leading-tight">{p.level}</h3>
                      <div className="mt-3">
                        <span className="font-display text-3xl text-white">
                          {p.price}<span className="text-sm text-white/60 ml-1">/mo</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sticky Compare Plans Bar ── */}
        <div className="sticky bottom-0 z-40 py-3"
          style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(141,187,28,0.18)" }}>
          <div className="container-x flex items-center justify-between gap-4">
            <p className="text-sm hidden sm:block" style={{ color: "rgba(255,255,255,0.50)" }}>
              Not sure which plan is right for you?
            </p>
            <button
              onClick={() => document.getElementById("compare-plans")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ml-auto"
              style={{ background: "#8dbb1c", color: "#0a0a0a", boxShadow: "0 0 18px rgba(141,187,28,0.25)" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.1)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}>
              Compare Plans <ChevronDown className="h-4 w-4"/>
            </button>
          </div>
        </div>

      </div>{/* end tier wrapper */}

      {/* ── Value Proposition ── */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-14">
              <p className="mx-auto max-w-3xl text-base leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)" }}>
                Every Axis Sports Lab membership is a complete ecosystem delivering five critical outcomes. Every Axis athlete receives a professional, centralized Athlete Profile designed to showcase your skills, achievements, highlights, growth, and athletic lifestyle to the world. We deliver the definitive blueprint for recruitment and athletic dominance.
              </p>
            </div>

            {/* 5 Outcomes */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {[
                { icon: Shield,      label: "Training"                 },
                { icon: Eye,         label: "Exposure"                 },
                { icon: Video,       label: "Media"                    },
                { icon: Fingerprint, label: "Digital Identity"         },
                { icon: Network,     label: "Recruiting Infrastructure" },
              ].map((o, i) => (
                <div key={o.label}
                  className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
                  style={{ background: "rgba(141,187,28,0.10)", border: "1px solid rgba(141,187,28,0.35)", color: isDark ? "#d4ff70" : "#111111" }}>
                  <span className="text-[10px] font-bold opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <o.icon className="h-3.5 w-3.5" style={{ color: "#8dbb1c" }}/>
                  <span className="text-xs font-bold uppercase tracking-widest">{o.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Elite Athlete Profile Dashboard Mockup */}
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(141,187,28,0.30)", background: "#0d0d0d", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 40px rgba(141,187,28,0.08)" }}>
              <div className="flex items-center gap-2 px-5 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#111" }}>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(255,80,80,0.6)"     }}/>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(255,190,0,0.6)"    }}/>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(141,187,28,0.7)"   }}/>
                <span className="ml-4 text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                  axissportslab.com/athlete/profile
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-5 mb-8">
                  <div className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center font-display text-3xl text-white"
                    style={{ background: "linear-gradient(135deg, #465d0e, #8dbb1c)" }}>A</div>
                  <div className="flex-1 text-left">
                    <h4 className="font-display text-xl uppercase leading-none" style={{ color: "#ffffff" }}>Athlete Name</h4>
                    <p className="text-sm mt-1" style={{ color: "#8dbb1c" }}>Point Guard · Class of 2026</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Axis Sports Lab · Katy, TX</p>
                  </div>
                  <span className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: "rgba(141,187,28,0.18)", border: "1px solid rgba(141,187,28,0.4)", color: "#d4ff70" }}>
                    ELITE MEMBER
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[{ label:"Vertical", val:'+6"' },{ label:"40-Yard", val:"4.4s" },{ label:"Skill Level", val:"Elite" }].map(s => (
                    <div key={s.label} className="rounded-xl py-4 text-center"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <p className="font-display text-2xl" style={{ color: "#ffffff" }}>{s.val}</p>
                      <p className="text-[9px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Highlights","Stats","Media","Recruiting","Timeline"].map((tab, i) => (
                    <span key={tab} className="rounded-lg px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: i === 0 ? "rgba(141,187,28,0.18)" : "rgba(255,255,255,0.04)",
                        color:      i === 0 ? "#d4ff70"               : "rgba(255,255,255,0.35)",
                        border: `1px solid ${i === 0 ? "rgba(141,187,28,0.4)" : "rgba(255,255,255,0.06)"}`,
                      }}>
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs" style={{ color: isDark ? "rgba(255,255,255,0.30)" : "#111111" }}>
                 Elite Athlete Profile Dashboard (Mockup)   
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section id="compare-plans" className="section bg-[hsl(var(--surface))]">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3 text-center">   Side by Side</p>
            <h2 className="font-display text-3xl uppercase text-center mb-10" style={{ color: isDark ? "#ffffff" : "#111111" }}>
              Compare <span className="text-primary-glow">Plans</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.12)"}` }}>

              {/* Table header */}
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest"
                style={{ borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
                <div className="px-6 py-4 text-left" style={{ color: isDark ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.45)", background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)" }}>
                  Feature
                </div>
                <div className="px-6 py-4 text-center" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)", background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" }}>
                  2 Days / Week
                </div>
                <div className="px-6 py-4 text-center"
                  style={{ color: "#8dbb1c", background: "rgba(141,187,28,0.07)", borderLeft: "1px solid rgba(141,187,28,0.15)" }}>
                  Unlimited
                </div>
              </div>

              {/* Rows */}
              {[
                { feature: "Sessions per week",  two: "2",  unlimited: "Unlimited" },
                { feature: "Athlete Profile",    two: "✓",  unlimited: "✓"         },
                { feature: "Video Highlights",   two: "  ",  unlimited: "✓"         },
                { feature: "Recruiting Support", two: "  ",  unlimited: "✓"         },
                { feature: "Priority Booking",   two: "  ",  unlimited: "✓"         },
              ].map((row, i) => (
                <div key={row.feature}
                  className="grid grid-cols-3"
                  style={{ borderBottom: i < 4 ? `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}` : "none" }}>
                  <div className="px-6 py-4 text-sm"
                    style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.70)", background: i % 2 === 0 ? (isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)") : "transparent" }}>
                    {row.feature}
                  </div>
                  <div className="px-6 py-4 text-center text-sm font-semibold"
                    style={{
                      color:      row.two === "✓" ? "#8dbb1c" : row.two === "  " ? (isDark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.25)") : (isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.80)"),
                      background: i % 2 === 0 ? (isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)") : "transparent",
                    }}>
                    {row.two}
                  </div>
                  <div className="px-6 py-4 text-center text-sm font-semibold"
                    style={{
                      color:      row.unlimited === "✓" ? "#8dbb1c" : row.unlimited === "  " ? (isDark ? "rgba(255,255,255,0.20)" : "rgba(0,0,0,0.25)") : (isDark ? "#d4ff70" : "#5a8a00"),
                      background: `rgba(141,187,28,${i % 2 === 0 ? "0.05" : "0.03"})`,
                      borderLeft: "1px solid rgba(141,187,28,0.10)",
                    }}>
                    {row.unlimited}
                  </div>
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-3"
                style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
                <div className="px-6 py-5 text-xs italic" style={{ color: isDark ? "rgba(255,255,255,0.30)" : "rgba(0,0,0,0.40)" }}>Starting at</div>
                <div className="px-6 py-5 text-center">
                  <p className="font-display text-2xl mb-2" style={{ color: isDark ? "#ffffff" : "#111111" }}>$185<span className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.45)" }}>/mo</span></p>
                  <Link to="/membership-checkout-2days-week" className="btn-red text-xs px-4 py-2">Join Now</Link>
                </div>
                <div className="px-6 py-5 text-center"
                  style={{ background: "rgba(141,187,28,0.05)", borderLeft: "1px solid rgba(141,187,28,0.10)" }}>
                  <p className="font-display text-2xl mb-2" style={{ color: isDark ? "#d4ff70" : "#3d6b00" }}>$285<span className="text-sm" style={{ color: "rgba(141,187,28,0.70)" }}>/mo</span></p>
                  <button onClick={() => setModalOpen(true)} className="btn-red text-xs px-4 py-2">Add To Cart</button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Social Media Follow ── */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl uppercase mb-8" style={{ color: isDark ? "#ffffff" : "#111111" }}>Follow Us on Social Media</h2>
            <div className="flex justify-center flex-wrap gap-8">
              {[
                { Icon: Instagram, label: "@axissportslab", href: "https://www.instagram.com/axissportslab/"     },
                { Icon: Facebook,  label: "Axis Sports Lab", href: "https://www.facebook.com/AxisSportsLab"      },
                { Icon: Twitter,   label: "@axissportslab", href: "https://x.com/AxisSportsLab"                  },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex flex-col items-center gap-3 group">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[hsl(var(--surface-2))] transition-all duration-300 group-hover:border-primary group-hover:text-primary-glow group-hover:bg-primary/10"
                    style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`, color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)" }}>
                    <Icon className="h-6 w-6"/>
                  </div>
                  <span className="text-sm transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url(/pictures/teams-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight" style={{ color: "#ffffff" }}>
              Time to take your athletics and<br/>cognitive skills to the next level
            </h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.70)" }}>Click below to schedule your Evaluation Workout</p>
            <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Now <ArrowRight className="h-4 w-4"/>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Membership;
