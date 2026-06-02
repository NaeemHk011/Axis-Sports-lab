import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const ReserveTraining = () => (
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
            <h3 className="mt-3 font-display text-3xl uppercase text-white">
              Basketball Skills Training Class
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Select an available slot below to reserve your spot.
            </p>

            <div className="mt-6 w-full rounded-xl overflow-hidden" style={{ background: "#0a0a0a" }}>
              <iframe
                src="https://link.eyecanathletics.com/widget/group/XLZ2jWVK1IM8NU2l6WnR"
                style={{ width: "100%", height: "1500px", border: "none", display: "block", background: "#0a0a0a" }}
                scrolling="yes"
                id="XLZ2jWVK1IM8NU2l6WnR_1778688330308"
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

export default ReserveTraining;
