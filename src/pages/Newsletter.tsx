import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const Newsletter = () => (
  <>
    <PageHero
      eyebrow="Newsletter"
      title="Stay up to date with the Axis Sports Lab Newsletter"
      subtitle="We hate SPAM just as much as you do, we promise not to spam!"
    />

    <section className="section">
      <div className="container-x max-w-3xl mx-auto">
        <Reveal>
          <div className="card-elite">
            <h3 className="font-display text-3xl uppercase text-white text-center mb-2">
              Axis Sports Lab Newsletter Sign Up
            </h3>
            <p className="text-white/60 text-sm text-center mb-6">
              Get the latest news, training tips, camp announcements, and exclusive offers straight to your inbox.
            </p>

            <GhlFormEmbed
              src="https://link.webtechs.dev/widget/form/acWncB1xrwrdjERuqG1L"
              formId="acWncB1xrwrdjERuqG1L"
              formName="Axis Sports Lab Newsletter Sign Up"
              height={549}
            />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Newsletter;

