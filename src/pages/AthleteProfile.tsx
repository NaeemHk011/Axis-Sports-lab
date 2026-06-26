import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { ArrowLeft, Share2, Instagram, Twitter, Facebook, Calendar, GraduationCap, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import { sanityClient, urlFor } from "@/lib/sanity";
import { ATHLETE_BY_SLUG_QUERY } from "@/lib/athleteQueries";
import type { Athlete } from "@/types/athlete";

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  if (match) return `https://www.youtube.com/embed/${match[1]}`;
  return url;
};

const AthleteProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";

  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    sanityClient.fetch(ATHLETE_BY_SLUG_QUERY, { slug }).then((data: Athlete) => {
      setAthlete(data);
      setLoading(false);
    });
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-10 pb-20">
        <div className="container-x max-w-4xl mx-auto px-4 animate-pulse space-y-6">
          <div className="h-6 w-32 rounded-lg" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }} />
          <div className="h-72 rounded-3xl" style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" }} />
          <div className="h-4 w-2/3 rounded" style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }} />
          <div className="h-4 w-1/2 rounded" style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" }} />
        </div>
      </main>
    );
  }

  if (!athlete) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <p className="font-display text-3xl uppercase" style={{ color: hText }}>Athlete not found</p>
        <Link to="/athletes" className="btn-pill btn-pill-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Athletes
        </Link>
      </main>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(athlete.highlightVideoUrl);
  const isPro   = athlete.tier === "pro" || athlete.tier === "elite";
  const isElite = athlete.tier === "elite";

  return (
    <main className="min-h-screen pb-24 pt-10">
      <div className="container-x max-w-4xl mx-auto px-4">

        {/* Back */}
        <Reveal>
          <Link
            to="/athletes"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-8 transition-colors"
            style={{ color: "rgba(141,187,28,0.80)" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Athletes
          </Link>
        </Reveal>

        {/* Hero card */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl mb-10 flex flex-col md:flex-row"
            style={{ border: "1px solid rgba(141,187,28,0.25)", background: isDark ? "#0d0d0d" : "#ffffff" }}
          >
            {/* Photo */}
            <div className="relative shrink-0 w-full md:w-72 overflow-hidden" style={{ minHeight: "280px" }}>
              {athlete.photo ? (
                <img
                  src={urlFor(athlete.photo).width(400).fit("clip").url()}
                  alt={athlete.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center"
                  style={{ background: "linear-gradient(135deg, rgba(141,187,28,0.2), rgba(141,187,28,0.05))" }}>
                  <span className="font-display text-8xl" style={{ color: "rgba(141,187,28,0.3)" }}>
                    {athlete.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 60%, rgba(13,13,13,0.9) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #8dbb1c, transparent)" }} />

              {/* Elite badge */}
              {isElite && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: "rgba(255,209,102,0.15)", border: "1px solid rgba(255,209,102,0.40)" }}>
                  <Trophy className="h-3 w-3" style={{ color: "#ffd166" }} />
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#ffd166" }}>Elite</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-7 md:p-10 flex-1">
              {/* Tier */}
              <span className="self-start mb-4 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70" }}>
                {athlete.tier} profile
              </span>

              <h1 className="font-display text-3xl md:text-4xl uppercase leading-tight mb-2" style={{ color: hText }}>
                {athlete.name}
              </h1>
              <p className="text-sm font-semibold mb-5" style={{ color: "rgba(141,187,28,0.80)" }}>
                {athlete.sport} · {athlete.position}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 shrink-0" style={{ color: "rgba(141,187,28,0.70)" }} />
                  <span className="text-xs" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {athlete.school}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0" style={{ color: "rgba(141,187,28,0.70)" }} />
                  <span className="text-xs" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Class of {athlete.graduationYear}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/evaluation-workout" className="btn-pill btn-pill-primary text-xs px-5 py-2.5">
                  Book a Session
                </Link>
                <Link to="/evaluation-workout" className="btn-pill text-xs px-5 py-2.5"
                  style={{ border: "1px solid rgba(141,187,28,0.35)", color: "#d4ff70", background: "rgba(141,187,28,0.08)" }}>
                  Claim Free Workout
                </Link>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                    color: hMuted,
                    background: "transparent",
                  }}
                >
                  <Share2 className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        {athlete.bio && (
          <Reveal>
            <div className="rounded-2xl p-7 mb-8"
              style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"}`, background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)" }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(141,187,28,0.75)" }}>About</p>
              <p className="text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {athlete.bio}
              </p>
            </div>
          </Reveal>
        )}

        {/* Highlight Video */}
        {embedUrl && (
          <Reveal>
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(141,187,28,0.75)" }}>
                Highlight Video
              </p>
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={embedUrl}
                  title={`${athlete.name} highlight video`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        )}

        {/* Photos */}
        {athlete.photos?.length > 0 && (
          <Reveal>
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(141,187,28,0.75)" }}>
                Photos
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {athlete.photos.map((photo) => (
                  <div key={photo._key} className="relative overflow-hidden rounded-xl aspect-square">
                    <img
                      src={urlFor(photo).width(300).height(300).fit("crop").url()}
                      alt={photo.alt || athlete.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* PRO: Performance Metrics */}
        {isPro && athlete.performanceMetrics && athlete.performanceMetrics.length > 0 && (
          <Reveal>
            <div className="rounded-2xl p-7 mb-8"
              style={{ border: "1px solid rgba(141,187,28,0.20)", background: "rgba(141,187,28,0.04)" }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(141,187,28,0.75)" }}>
                Performance Metrics
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {athlete.performanceMetrics.map((m, i) => (
                  <div key={i} className="text-center rounded-xl p-4"
                    style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" }}>
                    <p className="font-display text-2xl text-gradient-red">{m.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: hMuted }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* PRO: Awards */}
        {isPro && athlete.awards && athlete.awards.length > 0 && (
          <Reveal>
            <div className="rounded-2xl p-7 mb-8"
              style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"}` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(141,187,28,0.75)" }}>Awards & Achievements</p>
              <ul className="space-y-2">
                {athlete.awards.map((award, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <Trophy className="h-3.5 w-3.5 shrink-0" style={{ color: "rgba(141,187,28,0.70)" }} />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {/* PRO: Social Links */}
        {isPro && athlete.socialLinks && athlete.socialLinks.length > 0 && (
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-8">
              {athlete.socialLinks.map((link, i) => {
                const Icon = link.platform === "instagram" ? Instagram : link.platform === "twitter" ? Twitter : Facebook;
                return (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-80"
                    style={{ background: "rgba(141,187,28,0.10)", border: "1px solid rgba(141,187,28,0.30)", color: "#d4ff70" }}>
                    <Icon className="h-3.5 w-3.5" />
                    {link.platform}
                  </a>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* ELITE: Recruiting */}
        {isElite && athlete.recruitingInfo && (
          <Reveal>
            <div className="rounded-2xl p-7 mb-8"
              style={{ border: "1px solid rgba(255,209,102,0.25)", background: "rgba(255,209,102,0.04)" }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,209,102,0.75)" }}>
                Recruiting Information
              </p>
              <p className="text-sm leading-relaxed" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {athlete.recruitingInfo}
              </p>
            </div>
          </Reveal>
        )}

        {/* Powered by footer */}
        <Reveal>
          <div className="mt-12 pt-8 text-center border-t border-border/10">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: hMuted }}>
              Powered by{" "}
              <span className="text-gradient-red">Axis Sports Lab</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default AthleteProfile;
