import { Phone } from "lucide-react";
import { useTheme } from "next-themes";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const ReserveTraining = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <>
      <PageHero
        eyebrow="Reserve Training"
        title="Basketball Skills Training Class"
        subtitle="Reserve your spot in our Basketball Skills Training Class. Pick a time that works for you."
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal>
            <div className="card-elite">
              <p className="eyebrow mb-2">Book a Time</p>
              <h3 className="mt-3 font-display text-3xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>
                Basketball Skills Training Class
              </h3>
              <p className="mt-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.60)" }}>
                Select an available slot below to reserve your spot.
              </p>

              <div className="mt-6 w-full rounded-xl overflow-hidden">
                <BookingIframe
                  src="https://link.webtechs.dev/widget/group/hlhLeM5na422btQnB3B5"
                  id="hlhLeM5na422btQnB3B5_1780503100353"
                  title="Basketball Skills Training Class"
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

export default ReserveTraining;
