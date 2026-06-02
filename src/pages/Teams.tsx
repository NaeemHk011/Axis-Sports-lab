import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const Teams = () => (
  <>
    {/* Hero */}
    <section
      className="relative overflow-hidden pb-16 pt-20 lg:pt-28"
      style={{ backgroundImage: "url(/pictures/teams-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container-x">
        <Reveal>
          <h1 className="font-display text-5xl md:text-6xl uppercase text-white leading-tight">
            Our Club <span className="text-primary-glow">Teams</span>
          </h1>
        </Reveal>
      </div>
    </section>

    {/* Explore Section */}
    <section className="section bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow"><span className="h-px w-8 bg-primary-glow" /> Club Teams</p>
          <h2 className="font-display text-4xl uppercase text-white mt-4 leading-tight">
            Explore Our <span className="text-primary-glow">Club Teams</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            At Axis Sports Lab, we develop young athletes across the Richmond, Cypress, Sugar Land, Rosenberg, Fulshear,
            and Houston area with club teams for girls (ages 7–17) and boys (7–17).
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Our skilled coaches focus on improving individual skills and preparing players for the next level while holding
            the standard to succeed on and off the court. Join us to give both as an athlete and a teammate.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/pictures/teams-explore.jpg"
              alt="Axis Sports Lab Club Teams"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* Girls & Boys Teams */}
    <section className="section bg-[hsl(var(--surface))]">
      <div className="container-x grid gap-6 sm:grid-cols-2">
        {[
          {
            label: "Girls Club Basketball Team",
            img: "/pictures/teams-girls.jpg",
          },
          {
            label: "Boys Club Basketball Team",
            img: "/pictures/teams-boys.jpg",
          },
        ].map((team, i) => (
          <Reveal key={team.label} delay={i * 0.1}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-2xl cursor-pointer">
              <img
                src={team.img}
                alt={team.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl uppercase text-white leading-tight">{team.label}</h3>
                <Link
                  to="/club-tryouts"
                  className="btn-red mt-4 self-start text-xs"
                >
                  Register for Tryouts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* What You Get */}
    <section className="section bg-background">
      <div className="container-x">
        <Reveal>
          <h2 className="font-display text-3xl uppercase text-white text-center mb-12">
            What You Get With{" "}
            <span className="text-primary-glow">Axis Sports Lab</span> Club Teams
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              num: "#1",
              title: "Comprehensive Development",
              items: [
                "Team Practices & Games",
                "Camps & Clinics",
                "Optional Skill Workouts",
                "College Recruiting Assistance",
                "Full D2, D3 & NAIA Exposure",
              ],
            },
            {
              num: "#2",
              title: "Certified & Positive Coaches",
              items: [
                "Experienced & Knowledgeable",
                "Background Checked",
                "First Aid & Child Safety Trained",
                "Advanced Skill Training",
                "USA Basketball Licensed",
              ],
            },
            {
              num: "#3",
              title: "Organized Parent Communication",
              items: [
                "Full-Time Support Staff",
                "Emails & Phone Calls Answered",
                "All Expectations Set Up Front",
                "Stat Tracking",
                "Helpful Team News & Platforms",
              ],
            },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 0.1}>
              <div className="card-elite h-full">
                <p className="font-display text-3xl text-primary-glow mb-3">{col.num}</p>
                <h3 className="font-display text-xl uppercase text-white leading-tight mb-5">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundImage: "url(/pictures/teams-cta.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
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

export default Teams;
