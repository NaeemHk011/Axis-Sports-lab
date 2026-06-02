import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const Rentals = () => (
    <>
      <PageHero
        title="Rental with AXIS SPORTS LAB"
        subtitle="Book our premium court & facility for your next game, event, or training session."
        bg="/pictures/facility-equipment.jpg"
        bgPosition="center"
      />

      {/* Headline */}
      <section className="section bg-background">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white leading-tight">
              Two Hassle-Free Ways to Book Your{" "}
              <span className="text-primary-glow">Court / Facility</span> Rental Today!
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Two Options */}
      <section className="pb-24 bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Option 1 - Info */}
          <Reveal>
            <div className="card-elite h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white font-display text-xl">1</span>
                <h3 className="font-display text-2xl uppercase text-white">Book Your Rental Here!</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Available Court Types</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    {["Basketball (full court, half court)", "Volleyball", "Tennis"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Amenities Offered</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    {["Locker rooms & restrooms", "Seating & bleachers", "Scoreboard & shot clock", "Air-conditioned facility"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Discounts Available</p>
                  <p className="text-white/70 text-sm">Special rates for recurring bookings, nonprofits, and school groups. Ask us about bulk hour packages.</p>
                </div>

                <div className="rounded-xl border border-white/5 bg-background/60 p-4">
                  <p className="text-white/80 text-sm font-semibold">You'll receive an instant email confirmation upon booking!</p>
                  <p className="mt-1 text-white/50 text-xs">Not Finding What You Need?</p>
                  <a href="tel:+13465508150" className="mt-2 flex items-center gap-2 text-primary-glow text-sm font-semibold hover:underline">
                    <Phone className="h-4 w-4" /> (346) 550-8150
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Option 2 - Rental Request Iframe Form */}
          <Reveal delay={0.1}>
            <div className="card-elite">
              <div className="flex items-center gap-3 mb-2">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white font-display text-xl">2</span>
                <h3 className="font-display text-2xl uppercase text-white">Submit Your Rental Request Now!</h3>
              </div>
              <p className="text-white/55 text-sm mb-6">Fill out the form below and we'll confirm your booking.</p>

              <iframe
                src="https://link.eyecanathletics.com/widget/form/be9ewFwCcj1nrVNSxskU"
                style={{ width: "100%", height: "570px", border: "none", borderRadius: "25px" }}
                id="inline-be9ewFwCcj1nrVNSxskU"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Rental Request"
                data-height="570"
                data-layout-iframe-id="inline-be9ewFwCcj1nrVNSxskU"
                data-form-id="be9ewFwCcj1nrVNSxskU"
                title="Rental Request"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo strip */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="/pictures/athlete-feet.jpg"
          alt="Court rental"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url(/pictures/gc-athlete.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight">
              Time to take your athletics and<br />cognitive skills to the next level
            </h2>
            <p className="mt-4 text-white/70">Click below to schedule your Evaluation Workout</p>
            <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
);

export default Rentals;
