import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, ClipboardList } from "lucide-react";
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
      <section className="w-full overflow-hidden max-[380px]:h-[160px] h-[220px] sm:h-[320px] md:h-auto">
        <img src="/pictures/banner-rentals.png" alt="Two Hassle-Free Ways to Book Your Court / Facility Rental Today!" className="w-full h-full object-cover object-center" />
      </section>

      {/* ── Section Heading ── */}
      <section className="pt-16 pb-4 bg-background text-center">
        <Reveal>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase leading-tight">
            <span style={{ color: isDark ? "#ffffff" : "#111111" }}>Two Hassle-Free Ways to Book Your</span><br />
            <span style={{ color: "#8dbb1c" }}>Court / Facility Rental Today!</span>
          </h2>
        </Reveal>
      </section>

      {/* ── Main Two-Column Booking Section ── */}
      <section className="pb-24 bg-background">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── LEFT: Info / Amenities ── */}
          <Reveal>
            <div className="card-elite h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-black font-display text-xl">1</span>
                <h3 className="font-display text-2xl uppercase" style={{ color: isDark ? "#ffffff" : "#111111" }}>Book Your Rental Here!</h3>
              </div>

              {/* Callout Badge */}
              <div className="mb-6 rounded-xl px-4 py-3 text-center font-bold text-sm uppercase tracking-wide"
                style={{ background: "linear-gradient(90deg, #8dbb1c, #a8d422)", color: "#0a0a0a" }}>
                Perfect for Elite Training, Event Hosting & Birthday Parties!
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Available Court Types</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary-glow shrink-0 mt-0.5"/>
                      <div>
                        <span className="font-semibold" style={{ color: isDark ? "#ffffff" : "#111111" }}>Basketball Half Court</span>
                        <p className="text-xs mt-0.5" style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.50)" }}>
                          5 Total Rims     Engineered for maximum training reps
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Amenities Offered</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    {[
                      "Air-Conditioned Facility",
                      "Integrated Camera Recording System (For playback & streaming)",
                      "Premium Bluetooth Audio Connectivity",
                      "2-Way Audio Speakers (Perfect for events & conferences)",
                      "Scoreboard & Shot Clock",
                    ].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0"/> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Elite Training Equipment</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    {[
                      { name: "VertiMax Platforms", desc: "Advanced vertical & speed training" },
                      { name: "VertiMax Raptors",   desc: "Resistance training for explosive movement" },
                    ].map(eq => (
                      <li key={eq.name} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0 mt-0.5"/>
                        <div>
                          <span className="font-semibold" style={{ color: isDark ? "#ffffff" : "#111111" }}>{eq.name}</span>
                          <span style={{ color: isDark ? "rgba(255,255,255,0.50)" : "rgba(0,0,0,0.50)" }}>     {eq.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Ideal For</p>
                  <ul className="space-y-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    {["Sports & Skill Training", "Events, Conferences, & Camps", "Birthday Parties & Private Hosting"].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary-glow shrink-0"/> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow mb-2">Discounts Available</p>
                  <p className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)" }}>
                    Special rates and discounts available for volume bookings, recurring slots, nonprofits, and school groups. Ask us about bulk hour packages!
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
                Pick an available slot below    a confirmation email will be sent instantly after booking.
              </p>

              {/* ── Special Request Banner ── */}
              <Link
                to="/rental-request"
                className="group flex items-center gap-4 rounded-xl px-5 py-4 mb-6 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, rgba(141,187,28,0.15), rgba(141,187,28,0.08))",
                  border: "1.5px solid rgba(141,187,28,0.55)",
                  boxShadow: "0 0 20px rgba(141,187,28,0.12)",
                }}
              >
                <div className="h-10 w-10 shrink-0 rounded-xl grid place-items-center"
                  style={{ background: "linear-gradient(135deg, #465d0e, #8dbb1c)" }}>
                  <ClipboardList className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black uppercase tracking-wide" style={{ color: "#8dbb1c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    No Slots Available? Need a Special Time?
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Submit a rental request       we'll confirm within 24 hrs
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#8dbb1c" }} />
              </Link>

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
