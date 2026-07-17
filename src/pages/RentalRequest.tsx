import { useTheme } from "next-themes";
import { ClipboardList, Clock, Phone, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const RentalRequest = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const hText  = isDark ? "#ffffff" : "#111111";
  const hMuted = isDark ? "rgba(255,255,255,0.58)" : "rgba(0,0,0,0.62)";

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden min-h-[38vh] flex items-center pb-10 pt-14 sm:pt-20 lg:pt-24"
        style={{ backgroundImage: "url(/pictures/banner-design.png)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <Particles count={10} />
        <div className="container-x w-full text-center relative z-10">
          <Reveal>
            <Link
              to="/rentals"
              className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest transition-colors"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Rentals
            </Link>
            <p className="eyebrow justify-center mb-4">
              <span className="h-px w-8 bg-primary-glow" /> Special Request
            </p>
            <h1 className="font-display text-5xl md:text-6xl uppercase font-black leading-tight text-white">
              Rental <span className="text-gradient-red">Request</span>
            </h1>
            <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              No open slots? Need a custom time? Fill out this form and we'll get back to you within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="py-24 bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── LEFT: Info ── */}
          <Reveal>
            <div className="card-elite h-full space-y-6">

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-2xl uppercase" style={{ color: hText }}>What This Form Is For</h3>
              </div>

              {/* Callout */}
              <div className="rounded-xl px-4 py-3 text-center font-bold text-sm uppercase tracking-wide"
                style={{ background: "linear-gradient(90deg, #8dbb1c, #a8d422)", color: "#0a0a0a" }}>
                No Slots? Special Request? We Got You!
              </div>

              {/* Use cases */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-3">Submit This Form If You Need</p>
                <ul className="space-y-3">
                  {[
                    { title: "No Available Slots", desc: "Calendar is full but you need a specific date" },
                    { title: "Custom Time Request", desc: "Need a time not listed on the booking calendar" },
                    { title: "Special Event / Large Group", desc: "Birthday parties, camps, or group bookings" },
                    { title: "Custom Rental Package", desc: "Volume discounts or recurring slot arrangements" },
                  ].map(item => (
                    <li key={item.title} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold" style={{ color: hText }}>{item.title}</span>
                        <p className="text-xs mt-0.5" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Response Time</p>
                <div className="flex items-center gap-3 rounded-xl p-4"
                  style={{ background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
                  <Clock className="h-5 w-5 shrink-0" style={{ color: "#8dbb1c" }} />
                  <p className="text-sm" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    We review all requests within <span className="font-semibold" style={{ color: hText }}>24 hours</span> and confirm via email or phone.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-xl p-4" style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.10)"}`, background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }}>
                <p className="text-sm font-semibold" style={{ color: hMuted }}>Prefer to call instead?</p>
                <a href="tel:+13465508150" className="mt-2 flex items-center gap-2 text-primary-glow text-sm font-semibold hover:underline">
                  <Phone className="h-4 w-4" /> (346) 517 8623
                </a>
                <p className="mt-1 text-xs" style={{ color: hMuted, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Mon – Sat · 9am – 7pm</p>
              </div>

            </div>
          </Reveal>

          {/* ── RIGHT: Form ── */}
          <Reveal delay={0.1}>
            <div className="card-elite">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-2xl uppercase" style={{ color: hText }}>Fill Out Your Request</h3>
              </div>
              <p className="text-sm mb-6" style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.50)" }}>
                Complete the form below       we'll review and get back to you within 24 hours.
              </p>

              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(141,187,28,0.25)", background: "#000000" }}>
                <div className="px-5 py-3 flex items-center gap-3"
                  style={{ borderBottom: "1px solid rgba(141,187,28,0.20)", background: "linear-gradient(90deg, rgba(141,187,28,0.12), transparent)" }}>
                  <div className="h-2 w-2 rounded-full bg-[#8dbb1c] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8dbb1c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Rental Request Waitlist
                  </span>
                </div>
                <GhlFormEmbed
                  src="https://link.webtechs.dev/widget/form/Owe2p4EFWbKQle3usUY9"
                  formId="Owe2p4EFWbKQle3usUY9"
                  formName="Rental Request Waitlist"
                  height={911}
                />
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
};

export default RentalRequest;
