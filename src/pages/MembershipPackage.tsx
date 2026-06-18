import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Logo from "@/components/Logo";

/* ─── package config ──────────────────────────────────────────────── */
const PACKAGES: Record<string, {
  title: string;
  type: string;
  price: string;
  img: string;
  formSrc: string;
  formId: string;
  formName: string;
  formHeight: number;
  description: string[];
  features: string[];
  accent: string;
}> = {
  "beginners-unlimited": {
    title:       "Monthly Skills Training Package - Beginners Skill Level",
    type:        "Unlimited Monthly",
    price:       "$285",
    img:         "/pictures/gc-shooting.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/wwhDp56j3DaBWcUF1aoZ",
    formId:      "wwhDp56j3DaBWcUF1aoZ",
    formName:    "$285 Monthly Skills Training Package - Membership Subscription",
    formHeight:  1487,
    description: [
      "Skills training package for Beginners Skill Level participants.",
      "Schedule: Monday – Thursday · 7pm – 8pm",
    ],
    features: [
      "Unlimited training sessions per month",
      "Foundational skills & ball handling",
      "Footwork and movement training",
      "Game IQ & court awareness",
      "Elite Athlete Profile",
      "Progress tracking & evaluations",
      "Community & team culture",
    ],
    accent: "#8dbb1c",
  },
  "intermediate-unlimited": {
    title:       "Monthly Skills Training Package - Intermediate Skill Level",
    type:        "Unlimited Monthly",
    price:       "$275",
    img:         "/pictures/gc-skills.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/dsvgpjSSgNmCJS7SJcab",
    formId:      "dsvgpjSSgNmCJS7SJcab",
    formName:    "$275 Monthly Skills Training Package - Membership Subscription",
    formHeight:  1340,
    description: [
      "Skills training package for Intermediate Skill Level participants.",
      "Schedule: Monday – Thursday · 8pm – 9pm",
    ],
    features: [
      "Unlimited training sessions per month",
      "Advanced ball handling & shooting mechanics",
      "Competitive skill scenarios",
      "Position-specific development",
      "Elite Athlete Profile",
      "Video highlights & media",
      "Recruiting support & exposure",
    ],
    accent: "#8dbb1c",
  },
  "advanced-unlimited": {
    title:       "Monthly Skills Training Package - Advanced Skill Level",
    type:        "Unlimited Monthly",
    price:       "$265",
    img:         "/pictures/gc-camps.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/iRqYzX1WSFjFQZJrqI37",
    formId:      "iRqYzX1WSFjFQZJrqI37",
    formName:    "$265 Monthly Skills Training Package - Membership Subscription",
    formHeight:  1340,
    description: [
      "Skills training package for Advanced Skill Level participants.",
      "Schedule: Monday – Thursday · 8pm – 9pm",
    ],
    features: [
      "Unlimited training sessions per month",
      "Elite performance drills & analytics",
      "Full recruiting infrastructure",
      "Priority court access & booking",
      "Elite Athlete Profile",
      "Video highlights & media production",
      "Exposure events & showcases",
    ],
    accent: "#8dbb1c",
  },
  "beginners-2days": {
    title:       "Beginners Skill Training Membership_2026",
    type:        "2 Days / Week",
    price:       "$185",
    img:         "/pictures/teams-girls.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/9v0kP24U3RBp5dKpnzBJ",
    formId:      "9v0kP24U3RBp5dKpnzBJ",
    formName:    "$185 Membership Subscription Form  - (2 Days / Week)",
    formHeight:  1574,
    description: [
      "Our Beginner class is perfect for athletes who are new to basketball or looking to build a strong foundation. In this class, athletes will focus on fundamental skills including dribbling, passing, shooting, and defensive positioning.",
      "Led by Master Trainer Richard Foy, beginners will develop confidence, coordination, and court awareness in a fun and supportive environment. Classes are small and structured, allowing for personalized instruction while learning essential teamwork and basketball IQ.",
      "This is the first step in the Axis Sports Lab progression system, preparing athletes to advance as they grow and improve.",
    ],
    features: [
      "2 structured sessions per week",
      "Core basketball fundamentals",
      "Ball handling & shooting basics",
      "Footwork & movement patterns",
      "Elite Athlete Profile",
      "Consistent skill development",
      "Supportive team environment",
    ],
    accent: "#8dbb1c",
  },
  "intermediate-2days": {
    title:       "Intermediate Skills Training Membership_2026",
    type:        "2 Days / Week",
    price:       "$175",
    img:         "/pictures/teams-boys.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/9VT7pZH64cmIHpRfxkzl",
    formId:      "9VT7pZH64cmIHpRfxkzl",
    formName:    "$175 Membership Subscription Form  - (2 Days / Week)",
    formHeight:  1574,
    description: [
      "The Intermediate class is designed for athletes who have mastered the basics and are ready to take their game to the next level. Athletes will refine their skills in dribbling, shooting, passing, and defensive strategies while beginning to learn more advanced concepts such as spacing, reading the game, and decision-making under pressure.",
      "With hands-on coaching from Master Trainer Richard Foy, athletes receive personalized feedback and skill challenges to accelerate development. Intermediate athletes also have the opportunity to test up to the Advanced level once they demonstrate readiness, creating a clear path for progression and growth.",
    ],
    features: [
      "2 high-intensity sessions per week",
      "Advanced shooting & finishing",
      "Defensive fundamentals",
      "Position-specific skill work",
      "Elite Athlete Profile",
      "Skill assessment & feedback",
      "Competitive group training",
    ],
    accent: "#8dbb1c",
  },
  "advanced-2days": {
    title:       "Advanced Skills Training Membership_2026",
    type:        "2 Days / Week",
    price:       "$165",
    img:         "/pictures/camps-main.jpg",
    formSrc:     "https://link.webtechs.dev/widget/form/zKpIr1VtgtuYWF0qivHO",
    formId:      "zKpIr1VtgtuYWF0qivHO",
    formName:    "$165 Membership Subscription Form  - (2 Days / Week)",
    formHeight:  1574,
    description: [
      "Our Advanced class is for athletes who are highly skilled and motivated to compete at a high level. Training focuses on elite skill development, advanced offensive and defensive strategies, athletic conditioning, and high-level basketball IQ.",
      "Led by Master Trainer Richard Foy, athletes in this class receive intensive, performance-driven coaching designed to prepare them for competitive leagues, showcases, and higher-level opportunities. Advanced players continue to refine their skills and take leadership roles on and off the court, while serving as role models for younger athletes in the program.",
      "This class is INTENSE and HARD.",
    ],
    features: [
      "2 elite-level sessions per week",
      "High-performance drills",
      "Game-speed scenario training",
      "Analytics & performance metrics",
      "Elite Athlete Profile",
      "Recruiting & exposure support",
      "Priority session scheduling",
    ],
    accent: "#8dbb1c",
  },
};

/* ═══════════════════════════════════════════════════════════════════ */
const MembershipPackage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate  = useNavigate();
  const pkg       = slug ? PACKAGES[slug] : null;

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <p className="font-display text-2xl uppercase text-white">Package not found</p>
        <button onClick={() => navigate("/membership")} className="btn-red text-sm px-5 py-2">
          Back to Membership
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">

      {/* ── LEFT: Details (sticky on desktop) ── */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:overflow-y-auto flex flex-col"
        style={{ borderRight: "1px solid rgba(141,187,28,0.15)" }}>

        {/* hero image */}
        <div className="relative h-56 lg:h-72 shrink-0 overflow-hidden">
          <img src={pkg.img} alt={pkg.title}
            className="h-full w-full object-cover object-center"/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background"/>

          {/* back button */}
          <button
            onClick={() => { window.close(); navigate("/membership"); }}
            className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)", backdropFilter: "blur(8px)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}>
            <ArrowLeft className="h-3.5 w-3.5"/> Back
          </button>
        </div>

        {/* content */}
        <div className="flex flex-col flex-1 px-7 py-8 gap-6">

          {/* logo */}
          <Logo className="h-12 w-auto self-start" alt="Axis Sports Lab"/>

          {/* type badge */}
          <span className="self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.40)", color: "#d4ff70" }}>
            {pkg.type}
          </span>

          {/* title + price */}
          <div>
            <h1 className="font-display text-3xl lg:text-4xl uppercase text-white leading-tight mb-3">
              {pkg.title}
            </h1>
            <div className="flex items-end gap-1">
              <span className="font-display text-5xl" style={{ color: "#8dbb1c" }}>{pkg.price}</span>
              <span className="mb-1.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>/month</span>
            </div>
          </div>

          {/* divider */}
          <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }}/>

          {/* description */}
          <div className="space-y-3">
            {pkg.description.map((para, i) => (
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
              {pkg.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(141,187,28,0.18)", border: "1px solid rgba(141,187,28,0.40)" }}>
                    <Check className="h-2.5 w-2.5" style={{ color: "#8dbb1c" }}/>
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 90-day commitment note */}
          <div className="mt-auto rounded-xl px-4 py-4"
            style={{ background: "rgba(141,187,28,0.07)", border: "1px solid rgba(141,187,28,0.20)" }}>
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

          <iframe
            src={pkg.formSrc}
            style={{ width: "100%", height: `${pkg.formHeight}px`, border: "none", display: "block", background: "transparent", borderRadius: "0" }}
            id={`inline-${pkg.formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={pkg.formName}
            data-height={pkg.formHeight}
            data-layout-iframe-id={`inline-${pkg.formId}`}
            data-form-id={pkg.formId}
            title={pkg.formName}
          />
        </div>
      </main>

    </div>
  );
};

export default MembershipPackage;
