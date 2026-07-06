import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Logo from "@/components/Logo";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const PLANS: Record<string, {
  name: string;
  tag: string;
  price: string;
  per: string;
  img: string;
  formSrc: string;
  formId: string;
  formName: string;
  formHeight: number;
  description: string[];
  features: string[];
  accent: string;
  glow: string;
}> = {
  starter: {
    name: "Starter Plan",
    tag: "Most Popular",
    price: "$149",
    per: "/mo",
    img: "/pictures/gc-shooting.jpg",
    formSrc: "https://link.webtechs.dev/widget/form/zQNhwitHUBFOHMlXSE6Y",
    formId: "zQNhwitHUBFOHMlXSE6Y",
    formName: "Subscription Plan (Starter)",
    formHeight: 1282,
    description: [
      "Perfect for athletes just getting started. Train 2 days per week with professional coaching in a structured, supportive environment.",
      "Build a strong foundation with fundamental skills, court awareness, and consistent progress tracking to set you up for long-term success.",
    ],
    features: [
      "2 Sessions / Week",
      "Basic Athlete Profile (FREE   $99 Value)",
      "Skills Assessment",
      "Progress Tracking",
      "Foundational drills & footwork",
      "Supportive team environment",
    ],
    accent: "rgba(141,187,28,0.85)",
    glow: "rgba(141,187,28,0.25)",
  },
  pro: {
    name: "Pro Plan",
    tag: "Best Value",
    price: "$199",
    per: "/mo",
    img: "/pictures/gc-skills.jpg",
    formSrc: "https://link.webtechs.dev/widget/form/WwbYiDDvzX4LFfaVcut7",
    formId: "WwbYiDDvzX4LFfaVcut7",
    formName: "Subscription Plan (Pro)",
    formHeight: 1282,
    description: [
      "Accelerate your development with 4 weekly sessions and priority access to elite coaches. Designed for athletes ready to compete at the next level.",
      "Includes advanced skill work, video analysis, and recruiting preparation to give you a real edge on and off the court.",
    ],
    features: [
      "4 Sessions / Week",
      "Pro Athlete Profile",
      "Video Analysis",
      "Recruiting Prep",
      "Position-specific skill work",
      "Competitive group training",
    ],
    accent: "rgba(255,160,0,0.85)",
    glow: "rgba(255,160,0,0.25)",
  },
  elite: {
    name: "Elite Plan",
    tag: "All-Access",
    price: "$299",
    per: "/mo",
    img: "/pictures/gc-camps.jpg",
    formSrc: "https://link.webtechs.dev/widget/form/vm3RqTLzOyNcBCmSjknP",
    formId: "vm3RqTLzOyNcBCmSjknP",
    formName: "Subscription Plan (Elite)",
    formHeight: 1282,
    description: [
      "Unlimited access for the serious competitor. Every program, every session, zero limits. This is the pinnacle of Axis Sports Lab training.",
      "Includes 1-on-1 coaching, priority scheduling, elite athlete profile, and full exposure & recruiting infrastructure.",
    ],
    features: [
      "Unlimited Sessions",
      "Elite Athlete Profile",
      "1-on-1 Coaching",
      "Priority Scheduling",
      "High-performance drills & analytics",
      "Recruiting & exposure support",
    ],
    accent: "rgba(200,160,255,0.85)",
    glow: "rgba(180,100,255,0.25)",
  },
};

const AthletePlan = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const plan = slug ? PLANS[slug] : null;

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <p className="font-display text-2xl uppercase text-white">Plan not found</p>
        <button onClick={() => navigate("/athletes")} className="btn-red text-sm px-5 py-2">
          Back to Athletes
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">

      {/* ── LEFT: Details (sticky on desktop) ── */}
      <aside
        className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:overflow-y-auto flex flex-col"
        style={{ borderRight: "1px solid rgba(141,187,28,0.15)" }}
      >
        {/* hero image */}
        <div className="relative h-56 lg:h-72 shrink-0 overflow-hidden">
          <img
            src={plan.img}
            alt={plan.name}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />

          {/* back button */}
          <button
            onClick={() => navigate("/athletes")}
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

          {/* tag badge */}
          {plan.tag && (
            <span
              className="absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest"
              style={{ background: plan.accent, color: "#fff" }}
            >
              {plan.tag}
            </span>
          )}
        </div>

        {/* content */}
        <div className="flex flex-col flex-1 px-7 py-8 gap-6">

          {/* logo */}
          <Logo className="h-12 w-auto self-start" alt="Axis Sports Lab" />

          {/* plan name + price */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest mb-2" style={{ color: plan.accent }}>
              {plan.name}
            </p>
            <div className="flex items-end gap-1">
              <span className="font-display text-5xl" style={{ color: "#8dbb1c" }}>{plan.price}</span>
              <span className="mb-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{plan.per}</span>
            </div>
          </div>

          {/* divider */}
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* description */}
          <div className="space-y-3">
            {plan.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                {para}
              </p>
            ))}
          </div>

          {/* features */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              What's Included
            </p>
            <ul className="space-y-3">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(141,187,28,0.18)", border: "1px solid rgba(141,187,28,0.40)" }}
                  >
                    <Check className="h-2.5 w-2.5" style={{ color: "#8dbb1c" }} />
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* commitment note */}
          <div
            className="mt-auto rounded-xl px-4 py-4"
            style={{ background: "rgba(141,187,28,0.07)", border: "1px solid rgba(141,187,28,0.20)" }}
          >
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
              <span className="font-bold" style={{ color: "#8dbb1c" }}>90-Day Commitment.</span>{" "}
              Membership carries a minimum term of 90 days. Auto-renews on agreed billing cycle unless cancelled in writing 7 days prior to next billing date.
            </p>
          </div>

        </div>
      </aside>

      {/* ── RIGHT: Form ── */}
      <main className="flex-1 lg:overflow-y-auto">
        <div className="px-4 py-8 lg:px-10 lg:py-10">
          <h2 className="font-display text-2xl uppercase text-white mb-1">Complete Your Enrollment</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fill out the form below to secure your spot.
          </p>

          <GhlFormEmbed
            src={plan.formSrc}
            formId={plan.formId}
            formName={plan.formName}
            height={plan.formHeight}
          />
        </div>
      </main>

    </div>
  );
};

export default AthletePlan;
