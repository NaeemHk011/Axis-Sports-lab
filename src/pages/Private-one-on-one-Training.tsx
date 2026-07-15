import { Check, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const whatToExpect = [
  "Fully personalized session built around your goals",
  "100% one-on-one attention from an elite coach",
  "Custom drills targeting your individual weaknesses",
  "Flexible scheduling to fit your calendar",
  "Progress tracked and adjusted every session",
];

const PrivateOneOnOneTraining = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <>
      {/* Banner */}
      <section className="w-full overflow-hidden max-[380px]:h-[120px] h-[140px] sm:h-[320px] md:h-auto">
        <img
          src="/pictures/private1.png"
          alt="Private 1-on-1 Training"
          className="w-full h-full object-cover object-center"
        />
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
              What to Expect
            </h2>
            <ul className="mt-6 space-y-3">
              {whatToExpect.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-[hsl(var(--surface))] p-4 text-sm"
                  style={{ color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.75)" }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /> {e}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card-elite">
              <p className="eyebrow">Book A Session</p>
              <h3 className="mt-3 font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Private 1-on-1 Training
              </h3>
              <p className="mt-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                Select an available slot below to book your private training session.
              </p>

              <div className="mt-6 w-full rounded-xl overflow-hidden" style={{ background: isDark ? "#0a0a0a" : "#ffffff", minHeight: "200px" }}>
                <BookingIframe
                  src="https://link.webtechs.dev/widget/group/G61Va2kKWMe7hXf99EaG"
                  id="G61Va2kKWMe7hXf99EaG_1783093286240"
                  title="Private 1-on-1 Training"
                />
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                <Phone className="h-4 w-4 text-primary-glow" /> Have questions? Call us at{" "}
                <a className="font-semibold" href="tel:+13465508150" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                  (346) 550-8150
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PrivateOneOnOneTraining;
