import { Phone } from "lucide-react";
import { useTheme } from "next-themes";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const CampScheduler = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <>
      {/* Banner */}
      <section className="w-full overflow-hidden max-[380px]:h-[130px] h-[150px] sm:h-[320px] md:h-auto">
        <img
          src="/pictures/banner-camps.png"
          alt="Basketball Skill Camps"
          className="w-full h-full object-cover object-center"
        />
      </section>

      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal>
            <div className="card-elite">
              <p className="eyebrow mb-2">Camp Booking</p>
              <h3 className="mt-3 font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Schedule Your Basketball Skill Camp Below
              </h3>
              <p className="mt-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                Select an available camp date from the calendar below.
              </p>

              <div className="mt-6 w-full overflow-hidden rounded-xl" style={{ background: isDark ? "#0a0a0a" : "#ffffff" }}>
                <BookingIframe
                  src="https://link.webtechs.dev/widget/group/eTfFR5PPgbbpj2eKRyUQ"
                  id="eTfFR5PPgbbpj2eKRyUQ_1780505804743"
                  title="Basketball Skills Camps"
                />
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                <Phone className="h-4 w-4 text-primary-glow" /> Have questions? Call us at{" "}
                <a className="font-semibold" href="tel:+13465508150" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                  (346) 517 8623
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default CampScheduler;
