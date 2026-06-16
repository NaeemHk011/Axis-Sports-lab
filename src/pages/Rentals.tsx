import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingIframe from "@/components/BookingIframe";

const BOOKING_ID = "F4895vpjQD9F4S0gQdYi_1781211446123";

const Rentals = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
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
            <h2 className="font-display text-3xl md:text-4xl uppercase leading-tight" style={{ color: isDark ? "#ffffff" : "#111111" }}>
              Two Hassle-Free Ways to Book Your{" "}
              <span className="text-primary-glow">Court / Facility</span> Rental Today!
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── Main Two-Column Booking Section ── */}
      <section className="pb-24 bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── LEFT: Info / Amenities ── */}
          <Reveal>
            <div className="card-elite h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-black font-display text-xl">1</span>
                <h3 className="font-display text-2xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>Book Your Rental Here!</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Available Court Types</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    {["Basketball (full court, half court)","Volleyball","Tennis"].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0"/> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Amenities Offered</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    {["Locker rooms & restrooms","Seating & bleachers","Scoreboard & shot clock","Air-conditioned facility"].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0"/> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Discounts Available</p>
                  <p className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    Special rates for recurring bookings, nonprofits, and school groups.
                    Ask us about bulk hour packages.
                  </p>
                </div>

                <div className="rounded-xl p-4" style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.10)"}`, background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }}>
                  <p className="text-sm font-semibold" style={{ color: isDark ? "rgba(255,255,255,0.80)" : "rgba(0,0,0,0.80)" }}>
                    You'll receive an instant email confirmation upon booking!
                  </p>
                  <p className="mt-1 text-xs" style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.50)" }}>Not Finding What You Need?</p>
                  <a href="tel:+13465508150"
                     className="mt-2 flex items-center gap-2 text-primary-glow text-sm font-semibold hover:underline">
                    <Phone className="h-4 w-4"/> (346) 550-8150
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: GHL Booking Calendar ── */}
          <Reveal delay={0.1}>
            <div className="card-elite">
              <div className="flex items-center gap-3 mb-2">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-black font-display text-xl">2</span>
                <h3 className="font-display text-2xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>Select a Date & Time</h3>
              </div>
              <p className="text-sm mb-6" style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.50)" }}>
                Pick an available slot below — a confirmation email will be sent instantly after booking.
              </p>

              <BookingIframe
                src="https://link.webtechs.dev/widget/booking/F4895vpjQD9F4S0gQdYi"
                id={BOOKING_ID}
                title="Axis Sports Lab Court Rental Booking"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage:"url(/pictures/gc-athlete.jpg)", backgroundSize:"cover", backgroundPosition:"center" }}
      >
        <div className="absolute inset-0 bg-black/75"/>
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight" style={{ color: "#ffffff" }}>
              Time to take your athletics and<br/>cognitive skills to the next level
            </h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.70)" }}>Click below to schedule your Evaluation Workout</p>
            <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Now <ArrowRight className="h-4 w-4"/>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Rentals;
