import { Check, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const whatToExpect = [
  "Vertical jump & explosiveness training",
  "Lateral quickness & agility drills",
  "Core strength & stability work",
  "Sport-specific conditioning",
  "Injury prevention protocols",
];

const PerformanceTrainingBooking = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <>
      {/* Banner */}
      <section className="w-full overflow-hidden max-[380px]:h-[90px] h-[100px] sm:h-[320px] md:h-auto">
        <img
          src="/pictures/banner-performance-training.png"
          alt="Performance Training"
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
              <p className="eyebrow">Book A Class</p>
              <h3 className="mt-3 font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Performance Training
              </h3>
              <p className="mt-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                Select an available slot below to book your performance training class.
              </p>

              <div className="mt-6 w-full rounded-xl overflow-hidden" style={{ background: isDark ? "#0a0a0a" : "#ffffff" }}>
                <BookingIframe
                  src="https://link.webtechs.dev/widget/group/vLY9yutjEVlB0FM88Ima"
                  id="vLY9yutjEVlB0FM88Ima_1782165602493"
                  title="Performance Training Booking"
                  style={{ borderRadius: "12px" }}
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

export default PerformanceTrainingBooking;
