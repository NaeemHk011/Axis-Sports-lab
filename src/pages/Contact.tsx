import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const Contact = () => {

  return (
    <>
      <section className="w-full overflow-hidden max-[380px]:h-[160px] h-[220px] sm:h-[320px] md:h-auto">
        <img src="/pictures/banner-contact.png" alt="Have Questions? Call Us" className="w-full h-full object-cover object-center" />
      </section>

      {/* Intro */}
      <section className="section bg-background">
        <div className="container-x max-w-3xl text-center mx-auto">
          <Reveal>
            <p className="text-white/75 leading-relaxed text-base">
              If you would like more information about our training and development program or our girls or boys nights,
              or need to contact us for any reason, please use the form below and don't forget to follow us on social
              media.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed text-base">
              Otherwise, you can call us at{" "}
              <a href="tel:+13465178623" className="text-primary-glow font-semibold hover:underline">
                (346) 517 8623
              </a>{" "}
              or fill out the contact form below and we will get back to you as soon as possible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl uppercase text-white mb-6">Contact Us Form</h2>

            <GhlFormEmbed
              src="https://link.webtechs.dev/widget/form/dbPvzrYgiPD3ohCGU3Ic"
              formId="dbPvzrYgiPD3ohCGU3Ic"
              formName="Contact Us Form"
              height={905}
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 space-y-5">
            <InfoRow icon={Phone} label="(346) 517 8623" href="tel:+13465178623" />
            <InfoRow icon={Mail} label="info@axissportslab.com" href="mailto:info@axissportslab.com" />
            <InfoRow icon={MapPin} label="510 S Mason Rd Unit 16A Katy Tx 77450" />
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Axis Sports Lab location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.073453731557!2d-95.75349320000001!3d29.7761451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641275c1ba7c3b3%3A0xd9812861e97be1bf!2sAxis%20Sports%20Lab!5e1!3m2!1sen!2s!4v1784652483282!5m2!1sen!2s"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url(/pictures/basketball-net-art.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight" style={{ color: "#ffffff" }}>
              Time to take your athletics and<br />cognitive skills to the next level
            </h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.70)" }}>Click below to schedule your Evaluation Workout</p>
            <Link to="/evaluation-workout" className="btn-red mt-8 inline-flex text-sm font-bold">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

const InfoRow = ({ icon: Icon, label, href }: { icon: any; label: string; href?: string }) => {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-[hsl(var(--surface))] p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-glow">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-white/80 text-sm">{label}</span>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90">{inner}</a> : <div>{inner}</div>;
};

export default Contact;
