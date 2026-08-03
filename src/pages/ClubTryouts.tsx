import { Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const ClubTryouts = () => (
  <>
    <PageHero
      eyebrow="Club Teams"
      title="Club Team Tryouts"
      subtitle="Ready to join the team? Book your tryout below for Girls or Boys Club Basketball."
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
              <BookingIframe
                src="https://link.webtechs.dev/widget/booking/WTuKw0hZOdzmx6k2Md6E"
                id="WTuKw0hZOdzmx6k2Md6E_1780506587092"
                title="Club Team Tryouts"
              />
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 text-primary-glow" /> Have questions? Call us at{" "}
              <a className="font-semibold text-white" href="tel:+13465178623">(346) 517 8623</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ClubTryouts;
