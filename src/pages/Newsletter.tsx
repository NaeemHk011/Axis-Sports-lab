import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

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

            <iframe
              src="https://link.webtechs.dev/widget/form/acWncB1xrwrdjERuqG1L"
              style={{ width: "100%", height: "549px", border: "none", borderRadius: "3px", background: "transparent" }}
              id="inline-acWncB1xrwrdjERuqG1L"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Axis Sports Lab Newsletter Sign Up"
              data-height="549"
              data-layout-iframe-id="inline-acWncB1xrwrdjERuqG1L"
              data-form-id="acWncB1xrwrdjERuqG1L"
              title="Axis Sports Lab Newsletter Sign Up"
            />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Newsletter;
