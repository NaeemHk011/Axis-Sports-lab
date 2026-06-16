import { Check, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const whatToExpect = [
  "60-minute skills training session",
  "Work with elite coaching staff",
  "Dribbling, footwork & finishing drills",
  "Game-speed decision-making reps",
  "Progress tracked every session",
];

const SkillsTrainingBooking = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return (
  <>
    <PageHero
      eyebrow="Book A Class"
      title="Basketball Skills Training Class"
      subtitle="Reserve your spot in a single skills training session. Elite coaching, real reps, real results."
    />

    <section className="section">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl uppercase text-white">What to Expect</h2>
          <ul className="mt-6 space-y-3">
            {whatToExpect.map((e) => (
              <li key={e} className="flex items-start gap-3 rounded-xl border border-white/5 bg-[hsl(var(--surface))] p-4 text-sm text-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" /> {e}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="card-elite">
            <p className="eyebrow">Book A Class</p>
            <h3 className="mt-3 font-display text-3xl uppercase text-white">
              Basketball Skills Training Class
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Select an available slot below to book your skills training class.
            </p>

            <div className="mt-6 w-full rounded-xl overflow-hidden" style={{ background: isDark ? "#0a0a0a" : "#ffffff" }}>
              <BookingIframe
                src="https://link.webtechs.dev/widget/group/hlhLeM5na422btQnB3B5"
                id="hlhLeM5na422btQnB3B5_1780503100353"
                title="Basketball Skills Training Class"
              />
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 text-primary-glow" /> Have questions? Call us at{" "}
              <a className="font-semibold text-white" href="tel:+13465508150">(346) 550-8150</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  </>
  );
};

export default SkillsTrainingBooking;
