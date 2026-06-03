import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const CampScheduler = () => (
  <>
    <PageHero
      eyebrow="Camps"
      title="Schedule Your Basketball Skill Camp"
      subtitle="Choose your camp date and reserve your spot today."
      bg="/pictures/camps-hero.jpg"
      bgPosition="center top"
    />

    <section className="section">
      <div className="container-x max-w-4xl mx-auto">
        <Reveal>
          <div className="card-elite">
            <p className="eyebrow mb-2">Camp Booking</p>
            <h3 className="mt-3 font-display text-3xl uppercase text-white">
              Schedule Your Basketball Skill Camp Below
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Select an available camp date from the calendar below.
            </p>

            <div className="mt-6 w-full overflow-hidden rounded-xl" style={{ background: "#0a0a0a" }}>
              <iframe
                src="https://link.webtechs.dev/widget/group/eTfFR5PPgbbpj2eKRyUQ"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "800px" }}
                scrolling="yes"
                id="eTfFR5PPgbbpj2eKRyUQ_1780505804743"
                title="Basketball Skills Camps"
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

export default CampScheduler;
