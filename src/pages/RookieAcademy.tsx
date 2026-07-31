import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const FEATURES = [
  "4 Coach-Led Training Sessions",
  "Professional Skills Evaluation",
  "Progress Report",
  "Personalized Development Plan",
  "Graduation Certificate",
  "Axis T-Shirt",
  "Academy Placement Recommendation",
];

const RookieAcademy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">

      {/* ── LEFT: Details (sticky on desktop) ── */}
      <aside
        className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:overflow-y-auto flex flex-col"
        style={{ borderRight: "1px solid rgba(141,187,28,0.15)" }}
      >
        {/* Hero image */}
        <div className="relative h-56 lg:h-72 shrink-0 overflow-hidden">
          <img
            src="public/pictures/RookieAcademy.png"
            alt="Rookie Academy"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />

          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all"
            style={{
              background: "rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-7 py-8 gap-6">

          {/* Logo */}
          <Logo className="h-12 w-auto self-start" alt="Axis Sports Lab" />

          {/* Badge */}
          <span
            className="self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{
              background: "rgba(141,187,28,0.15)",
              border: "1px solid rgba(141,187,28,0.40)",
              color: "#d4ff70",
            }}
          >
            30-Day Introductory Program
          </span>

          {/* Title + price */}
          <div>
            <h1 className="font-display text-3xl lg:text-4xl uppercase text-white leading-tight mb-1">
              Rookie Academy
            </h1>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "rgba(141,187,28,0.8)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Train. Improve. Get Placed.
            </p>
            <div className="flex items-end gap-2">
              <span className="font-display text-5xl" style={{ color: "#8dbb1c" }}>$125</span>
              <span className="mb-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                one-time payment
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* Description */}
          <div className="space-y-3">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              A 30-Day Introductory Basketball Program designed to teach the fundamentals, build
              confidence, and help athletes earn placement into the right Academy.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              Our mission is to develop athletes - we give <span style={{ color: "#fff" }}> every kid </span> a
              chance to grow. Every kid is accepted into the Academy.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              Every athlete graduates with a personalized plan and a recommendation for the best
              Academy level for them.
            </p>
          </div>

          {/* Schedule */}
          <div
            className="rounded-xl px-5 py-4 space-y-3"
            style={{ background: "rgba(141,187,28,0.06)", border: "1px solid rgba(141,187,28,0.20)" }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0" style={{ color: "#8dbb1c" }} />
              <span
                className="text-xs font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Every Sunday
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pl-6">
              <div>
                <p
                  className="text-[9px] uppercase tracking-wider font-semibold mb-0.5"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  3rd – 6th Grade
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  1:00 PM – 2:30 PM
                </p>
              </div>
              <div>
                <p
                  className="text-[9px] uppercase tracking-wider font-semibold mb-0.5"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  6th – 9th Grade
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  2:30 PM – 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#8dbb1c" }} />
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Axis Sports Lab · 510 S. Mason Rd. Unit 16A, Katy, TX 77450
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* What's included */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              What's Included
            </p>
            <ul className="space-y-3">
              {FEATURES.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(141,187,28,0.18)",
                      border: "1px solid rgba(141,187,28,0.40)",
                    }}
                  >
                    <Check className="h-2.5 w-2.5" style={{ color: "#8dbb1c" }} />
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom badges */}
          <div className="mt-auto">
            <div
              className="rounded-xl px-4 py-4"
              style={{ background: "rgba(141,187,28,0.07)", border: "1px solid rgba(141,187,28,0.20)" }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "#8dbb1c" }}
              >
                Built for Confidence. Designed for Success.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Professional Coaching", "Positive Environment", "Real Results"].map(badge => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "rgba(255,255,255,0.60)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    <CheckCircle2 className="h-3 w-3" style={{ color: "#8dbb1c" }} />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </aside>

      {/* ── RIGHT: Form ── */}
      <main className="flex-1 lg:overflow-y-auto">
        <div className="px-4 py-8 lg:px-10 lg:py-10">
          <h2 className="font-display text-2xl uppercase text-white mb-1">
            Complete Your Enrollment
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fill out the form below to secure your spot.
          </p>

          <GhlFormEmbed
            src="https://link.webtechs.dev/widget/form/NDzAgvByiIf5wB02LkCq"
            formId="NDzAgvByiIf5wB02LkCq"
            formName="ROOKIE ACADEMY"
            height={1335}
          />
        </div>
      </main>

    </div>
  );
};

export default RookieAcademy;
