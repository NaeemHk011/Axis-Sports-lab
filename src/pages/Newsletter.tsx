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
              src="https://link.eyecanathletics.com/widget/form/DtldxOK5qhbWb4pMoxHW"
              style={{ width: "100%", height: "544px", border: "none", borderRadius: "3px" }}
              id="inline-DtldxOK5qhbWb4pMoxHW"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Axis Sports Lab Newsletter-sign-up"
              data-height="544"
              data-layout-iframe-id="inline-DtldxOK5qhbWb4pMoxHW"
              data-form-id="DtldxOK5qhbWb4pMoxHW"
              title="Axis Sports Lab Newsletter-sign-up"
            />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Newsletter;
