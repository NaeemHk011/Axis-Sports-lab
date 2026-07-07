import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Search, CheckCircle2, ArrowRight, Video, Star, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import { sanityClient, urlFor } from "@/lib/sanity";
import { ALL_ATHLETES_QUERY } from "@/lib/athleteQueries";
import type { Athlete } from "@/types/athlete";

const membershipPackages = [
  {
    name: "Basic",
    tag: "",
    price: "$99",
    per: "/mo",
    desc: "Perfect for athletes just getting started. 2 training sessions per week with professional coaching.",
    perks: ["Athlete profile page","1 highlight video","Up to 5 photos","Athlete bio","School & graduation year","Shareable profile link","Skills Assessment", "Progress Tracking"],
    href: "https://axissportslab.com/membership",
    accent: "rgba(141,187,28,0.85)",
    glow: "rgba(141,187,28,0.25)",
    featured: true,
  },
  {
    name: "Pro",
    tag: "Best Value",
    price: "$199",
    per: "/mo",
    desc: "Accelerate your development with 4 weekly sessions and priority access to elite coaches.",
    perks: ["Everything in Basic","Up to 5 videos","Up to 20 photos","Performance metrics","Social media links","Video Analysis", "Recruiting Prep","QR code"],
    href: "/athletes/plan/pro",
    accent: "rgba(255,160,0,0.85)",
    glow: "rgba(255,160,0,0.20)",
    featured: false,
  },
  {
    name: "Elite",
    tag: "All-Access",
    price: "$299",
    per: "/mo",
    desc: "Unlimited access for the serious competitor. Every program, every session, zero limits.",
    perks: ["Everything in Pro","Unlimited videos","Unlimited photos","1-on-1 Coaching","Recruiting section","Downloadable athlete resume","Featured athlete badge","Priority Scheduling"],
    href: "/athletes/plan/elite",
    accent: "rgba(200,160,255,0.85)",
    glow: "rgba(180,100,255,0.18)",
    featured: false,
  },
];

const tierColors = {
  basic: { label: "Basic", color: "rgba(255,255,255,0.60)", bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)" },
  pro:   { label: "Pro",   color: "#d4ff70",               bg: "rgba(141,187,28,0.12)",  border: "rgba(141,187,28,0.35)" },
  elite: { label: "Elite", color: "#ffd166",               bg: "rgba(255,209,102,0.12)", border: "rgba(255,209,102,0.35)" },
};

const Athletes = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";

  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [filtered, setFiltered] = useState<Athlete[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll || search.length > 0 ? filtered : filtered.slice(0, 3);

  useEffect(() => {
    sanityClient.fetch(ALL_ATHLETES_QUERY).then((data: Athlete[]) => {
      setAthletes(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      athletes.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.school?.toLowerCase().includes(q) ||
          a.sport?.toLowerCase().includes(q)
      )
    );
  }, [search, athletes]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[42vh] flex items-center pb-10 pt-14 sm:pt-20 lg:pt-24"
        style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Particles count={10} />
        <div className="container-x w-full text-center relative z-10">
          <Reveal>
            <p className="eyebrow justify-center mb-4">
              <span className="h-px w-8 bg-primary-glow" /> Axis Athletes
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase font-black leading-tight" style={{ color: "#ffffff" }}>
              Athlete <span className="text-gradient-red">Profiles</span>
            </h1>
            <p className="mt-4 text-sm text-white/65 max-w-md mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Every athlete. Every story. Powered by Axis Sports Lab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search + Grid */}
      <section className="section">
        <div className="container-x">

          {/* Search bar */}
          <Reveal className="mb-10 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "rgba(141,187,28,0.70)" }} />
              <input
                type="text"
                placeholder="Search by name, school, or sport..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.12)"}`,
                  color: hText,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              />
            </div>
          </Reveal>

          {/* Loading */}
          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden animate-pulse"
                  style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", height: "320px" }} />
              ))}
            </div>
          )}

          {/* Grid */}
          {!loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {displayed.map((athlete, i) => {
                const tier = tierColors[athlete.tier] ?? tierColors.basic;
                return (
                  <Reveal key={athlete._id} delay={i * 0.06}>
                    <Link to={`/athletes/${athlete.slug.current}`} className="group block">
                      <div
                        className="relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
                        style={{
                          border: "1px solid rgba(141,187,28,0.18)",
                          background: isDark ? "#0d0d0d" : "#ffffff",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                        }}
                      >
                        {/* Photo */}
                        <div className="relative overflow-hidden" style={{ height: "220px" }}>
                          {athlete.photo ? (
                            <img
                              src={urlFor(athlete.photo).width(400).height(220).fit("crop").url()}
                              alt={athlete.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ objectPosition: "center 15%" }}
                            />
                          ) : (
                            <div className="w-full h-full grid place-items-center"
                              style={{ background: "linear-gradient(135deg, rgba(141,187,28,0.15), rgba(141,187,28,0.05))" }}>
                              <span className="font-display text-5xl text-primary-glow/30">
                                {athlete.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%)" }} />
                          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                            style={{ background: "linear-gradient(90deg, #8dbb1c, transparent)" }} />

                          {/* Tier badge */}
                          <span
                            className="absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                            style={{ background: tier.bg, border: `1px solid ${tier.border}`, color: tier.color }}
                          >
                            {tier.label}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="p-5">
                          <h3 className="font-display text-xl uppercase mb-1 text-white">
                            {athlete.name}
                          </h3>
                          <p className="text-xs mb-3" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {athlete.sport} · {athlete.position}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: hMuted }}>
                              {athlete.school} · Class of {athlete.graduationYear}
                            </span>
                            <span
                              className="text-[10px] font-bold uppercase tracking-widest transition-colors"
                              style={{ color: "#8dbb1c" }}
                            >
                              View →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          )}

          {/* View All button */}
          {!loading && !showAll && search.length === 0 && filtered.length > 3 && (
            <div className="mt-10 text-center">
              <motion.button
                onClick={() => setShowAll(true)}
                whileHover={{ y: -2 }}
                className="btn-pill btn-pill-ghost"
              >
                View All Athletes
                <span className="btn-pill-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7.5 1.5 13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.button>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div className="text-center py-20 max-w-md mx-auto">
              {search.length > 0 ? (
                <>
                  <p className="font-display text-3xl uppercase mb-3" style={{ color: hText }}>
                    No Results for <span className="text-gradient-red">"{search}"</span>
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: hMuted }}>
                    Try searching by a different name, school, or sport.
                  </p>
                  <button
                    onClick={() => setSearch("")}
                    className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all"
                    style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.35)", color: "#d4ff70" }}>
                    Clear Search
                  </button>
                </>
              ) : (
                <>
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(141,187,28,0.10)", border: "1px solid rgba(141,187,28,0.25)" }}>
                    <Trophy className="h-7 w-7" style={{ color: "#8dbb1c" }} />
                  </div>
                  <p className="font-display text-3xl uppercase mb-3" style={{ color: hText }}>
                    Profiles Coming Soon
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: hMuted }}>
                    Athlete profiles are being built out. Check back soon to see our roster.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Membership Packages */}
      <section className="section relative overflow-hidden border-t border-border/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_hsl(77_74%_42%/0.08),_transparent_70%)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center mb-12">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Memberships</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase font-black" style={{ color: hText }}>
              Choose Your <span className="text-gradient-red">Plan</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Every membership includes a free digital athlete profile. Start with a free evaluation       no commitment required.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {membershipPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative flex flex-col rounded-2xl overflow-hidden h-full"
                  style={{
                    border: pkg.featured
                      ? `2px solid ${pkg.accent}`
                      : `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                    background: isDark ? "#0d0d0d" : "#ffffff",
                    boxShadow: pkg.featured ? `0 0 40px ${pkg.glow}` : "none",
                  }}
                >
                  {pkg.name === "Basic" && (
                    <div
                      className="w-full text-center py-2 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: "rgba(74,222,128,0.12)",
                        borderBottom: "1px solid rgba(74,222,128,0.30)",
                        color: "#4ade80",
                      }}
                    >
                      Included <span style={{ fontWeight: 900 }}>FREE</span> with Every Membership
                    </div>
                  )}
                  {pkg.tag && (
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                        style={{ background: pkg.accent, color: "#fff" }}>
                        {pkg.tag}
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    <p className="font-display text-xs uppercase tracking-widest mb-2" style={{ color: pkg.accent }}>
                      {pkg.name}
                    </p>

                    <div className="flex items-end gap-1 mb-4">
                      <span className="font-display text-5xl leading-none" style={{ color: hText }}>{pkg.price}</span>
                      <span className="text-sm mb-1" style={{ color: hMuted }}>{pkg.per}</span>
                    </div>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {pkg.desc}
                    </p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2.5 text-sm"
                          style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: pkg.accent }} />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={pkg.href}
                      className="w-full text-center rounded-xl py-3 text-xs font-black uppercase tracking-widest transition-all duration-300"
                      style={pkg.featured
                        ? { background: pkg.accent, color: "#fff", boxShadow: `0 0 20px ${pkg.glow}` }
                        : { border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`, color: hText, background: "transparent" }
                      }
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upgrade & Services ── */}
      <section className="section bg-[hsl(var(--surface))]">
        <div className="container-x">

          <Reveal className="text-center mb-14">
            <p className="eyebrow justify-center mb-4"><span className="h-px w-8 bg-primary-glow" /> Athlete Services</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase font-black" style={{ color: hText }}>
              Upgrade & <span className="text-gradient-red">Add-Ons</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Already a member? Take your digital presence to the next level with profile upgrades and professional media services.
            </p>
          </Reveal>

          {/* ── Profile Upgrades ── */}
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Profile Upgrades
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 max-w-3xl mx-auto mb-14">

            {/* PRO */}
            <Reveal delay={0.05}>
              <div className="relative flex flex-col rounded-2xl overflow-hidden h-full"
                style={{ border: "1px solid rgba(141,187,28,0.40)", background: isDark ? "#0d0d0d" : "#ffffff" }}>
                <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(141,187,28,0.12)" }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#8dbb1c" }}>Profile Upgrade</span>
                  <h3 className="font-display text-2xl uppercase mt-1" style={{ color: hText }}>Pro Athlete Profile</h3>
                  <div className="flex items-end gap-3 mt-3 flex-wrap">
                    <div>
                      <span className="font-display text-4xl" style={{ color: "#8dbb1c" }}>$19</span>
                      <span className="text-sm ml-1" style={{ color: hMuted }}>/month</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(141,187,28,0.12)", color: "#d4ff70", border: "1px solid rgba(141,187,28,0.30)" }}>
                      or $99 Setup Fee
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-5">
                  <ul className="space-y-2.5 flex-1">
                    {[
                      "Everything in Basic",
                      "Up to 5 videos",
                      "Up to 20 photos",
                      "Performance metrics",
                      "Social media links",
                      "QR code",
                    ].map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: hMuted }}>
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#8dbb1c" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full text-center rounded-xl py-3 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    style={{ background: "#8dbb1c", color: "#0a0a0a" }}>
                    Get Started <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* ELITE */}
            <Reveal delay={0.10}>
              <div className="relative flex flex-col rounded-2xl overflow-hidden h-full"
                style={{ border: "1px solid rgba(255,209,102,0.40)", background: isDark ? "#0d0d0d" : "#ffffff" }}>
                <div className="absolute top-4 right-4">
                  <span className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                    style={{ background: "rgba(255,209,102,0.20)", border: "1px solid rgba(255,209,102,0.45)", color: "#ffd166" }}>
                    Most Advanced
                  </span>
                </div>
                <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(255,209,102,0.12)" }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#ffd166" }}>Profile Upgrade</span>
                  <h3 className="font-display text-2xl uppercase mt-1" style={{ color: hText }}>Elite Athlete Profile</h3>
                  <div className="flex items-end gap-3 mt-3 flex-wrap">
                    <div>
                      <span className="font-display text-4xl" style={{ color: "#ffd166" }}>$49</span>
                      <span className="text-sm ml-1" style={{ color: hMuted }}>/month</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(255,209,102,0.10)", color: "#ffd166", border: "1px solid rgba(255,209,102,0.30)" }}>
                      or $299 Setup Fee
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-5">
                  <ul className="space-y-2.5 flex-1">
                    {[
                      "Everything in Pro",
                      "Unlimited videos",
                      "Unlimited photos",
                      "Recruiting section",
                      "Downloadable athlete resume",
                      "Featured athlete badge",
                      "Priority updates",
                    ].map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: hMuted }}>
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#ffd166" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full text-center rounded-xl py-3 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    style={{ background: "#ffd166", color: "#0a0a0a" }}>
                    Get Started <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ── Professional Services ── */}
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Professional Services
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">

            {/* Highlight Reel */}
            <Reveal delay={0.05}>
              <div className="flex flex-col rounded-2xl overflow-hidden h-full"
                style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "#0d0d0d" : "#ffffff" }}>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.25)" }}>
                    <Video className="h-5 w-5" style={{ color: "#8dbb1c" }} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase" style={{ color: hText }}>Highlight Reel Package</h4>
                    <p className="font-display text-2xl mt-1" style={{ color: "#8dbb1c" }}>$149 – $499</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {["Professional highlight reel", "Social media clips", "Recruiting-style video"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: hMuted }}>
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#8dbb1c" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full text-center rounded-xl py-2.5 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    style={{ border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70", background: "rgba(141,187,28,0.08)" }}>
                    Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Player Intro Video */}
            <Reveal delay={0.10}>
              <div className="flex flex-col rounded-2xl overflow-hidden h-full"
                style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "#0d0d0d" : "#ffffff" }}>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.25)" }}>
                    <Star className="h-5 w-5" style={{ color: "#8dbb1c" }} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase" style={{ color: hText }}>Player Intro Video</h4>
                    <p className="font-display text-2xl mt-1" style={{ color: "#8dbb1c" }}>$99 – $299</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {["Professional player introduction video", "Social-ready content"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: hMuted }}>
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#8dbb1c" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full text-center rounded-xl py-2.5 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    style={{ border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70", background: "rgba(141,187,28,0.08)" }}>
                    Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Recruiting Package */}
            <Reveal delay={0.15}>
              <div className="flex flex-col rounded-2xl overflow-hidden h-full"
                style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "#0d0d0d" : "#ffffff" }}>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgba(141,187,28,0.12)", border: "1px solid rgba(141,187,28,0.25)" }}>
                    <Trophy className="h-5 w-5" style={{ color: "#8dbb1c" }} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase" style={{ color: hText }}>Recruiting Package</h4>
                    <p className="font-display text-2xl mt-1" style={{ color: "#8dbb1c" }}>$499 – $999</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {["Recruiting profile buildout", "Highlight reel", "Player resume", "Recruiting page design"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: hMuted }}>
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: "#8dbb1c" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full text-center rounded-xl py-2.5 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    style={{ border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70", background: "rgba(141,187,28,0.08)" }}>
                    Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Basic Athlete Profile Benefit */}
      <section className="section bg-background">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(141,187,28,0.35)", background: "linear-gradient(135deg, rgba(141,187,28,0.07) 0%, rgba(0,0,0,0) 60%)" }}>

              {/* header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-5"
                style={{ borderBottom: "1px solid rgba(141,187,28,0.18)", background: "rgba(141,187,28,0.09)" }}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#8dbb1c" }}>
                    Included FREE with Every Membership
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight" style={{ color: hText }}>
                    Basic Athlete Profile
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="line-through text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>$99 Value</span>
                  <span className="rounded-full px-4 py-1.5 font-display text-base uppercase tracking-wider"
                    style={{ background: "rgba(141,187,28,0.18)", border: "1px solid rgba(141,187,28,0.45)", color: "#d4ff70" }}>
                    FREE
                  </span>
                </div>
              </div>

              {/* features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-7">
                {[
                  "Athlete profile page",
                  "1 highlight video",
                  "Up to 5 photos",
                  "Athlete bio",
                  "School & graduation year",
                  "Shareable profile link",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#8dbb1c" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* footer */}
              <div className="px-7 pb-6">
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Every member automatically receives a Basic Athlete Profile upon joining. Upgrade to Pro or Elite for advanced features.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Athletes;
