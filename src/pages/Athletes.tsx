import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Search, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import { sanityClient, urlFor } from "@/lib/sanity";
import { ALL_ATHLETES_QUERY } from "@/lib/athleteQueries";
import type { Athlete } from "@/types/athlete";

const membershipPackages = [
  {
    name: "Starter",
    tag: "Most Popular",
    price: "$149",
    per: "/mo",
    desc: "Perfect for athletes just getting started. 2 training sessions per week with professional coaching.",
    perks: ["2 Sessions / Week", "Free Athlete Profile", "Skills Assessment", "Progress Tracking"],
    href: "/membership-checkout-2days-week",
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
    perks: ["4 Sessions / Week", "Pro Athlete Profile", "Video Analysis", "Recruiting Prep"],
    href: "/evaluation-workout",
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
    perks: ["Unlimited Sessions", "Elite Athlete Profile", "1-on-1 Coaching", "Priority Scheduling"],
    href: "/evaluation-workout",
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
            <div className="text-center py-20">
              <p className="font-display text-2xl uppercase mb-2" style={{ color: hText }}>No athletes found</p>
              <p className="text-sm" style={{ color: hMuted }}>Try a different search term.</p>
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
    </>
  );
};

export default Athletes;
