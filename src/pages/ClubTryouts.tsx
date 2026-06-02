import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const ClubTryouts = () => (
  <>
    <PageHero
      eyebrow="Club Teams"
      title="Club Team Tryouts"
      subtitle="Ready to join the team? Book your tryout below for Girls or Boys Club Basketball."
      bg="/pictures/teams-hero.jpg"
      bgPosition="center top"
    />

    <section className="section">
      <div className="container-x max-w-4xl mx-auto">
        <Reveal>
          <div className="card-elite">
            <p className="eyebrow mb-2">Tryout Booking</p>
            <h3 className="mt-3 font-display text-3xl uppercase text-white">
              Book Your Club Team Tryout
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Select an available tryout date below. Open for both Girls and Boys Club Basketball Teams.
            </p>

            <div className="mt-6 w-full overflow-hidden rounded-xl" style={{ background: "#0a0a0a" }}>
              <iframe
                src="https://link.eyecanathletics.com/widget/booking/nK9DSDrmvj5Eh58M69UX"
                style={{ width: "100%", height: "1500px", border: "none", display: "block", background: "#0a0a0a" }}
                scrolling="yes"
                id="7WK0DkBTi6fXeZqVsV42_1778692368692"
                title="Club Team Tryouts"
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

export default ClubTryouts;
