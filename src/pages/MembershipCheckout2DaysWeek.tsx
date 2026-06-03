import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const MembershipCheckout2DaysWeek = () => (
  <>
    <PageHero
      eyebrow="Membership"
      title="Monthly Skills Training (2 Days/Week)"
      subtitle="Complete your membership enrollment below."
      bg="/pictures/camps-hero.jpg"
      bgPosition="center top"
    />

    <section className="section">
      <div className="container-x max-w-4xl mx-auto">
        <Reveal>
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Membership
          </Link>

          <div className="card-elite">
            <p className="eyebrow mb-2">Enrollment</p>
            <h3 className="mt-3 font-display text-3xl uppercase text-white">
              2 Days / Week Membership Subscription
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Complete the form below to enroll in our 2 Days/Week Monthly Skills Training package.
            </p>

            <div className="mt-6 w-full overflow-hidden rounded-xl">
              <iframe
                src="https://link.webtechs.dev/widget/form/zKpIr1VtgtuYWF0qivHO"
                style={{ width: "100%", height: "1680px", border: "none", borderRadius: "3px" }}
                id="inline-zKpIr1VtgtuYWF0qivHO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Membership Subscription Form  - (2 Days / Week)"
                data-height="1680"
                data-layout-iframe-id="inline-zKpIr1VtgtuYWF0qivHO"
                data-form-id="zKpIr1VtgtuYWF0qivHO"
                title="Membership Subscription Form  - (2 Days / Week)"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default MembershipCheckout2DaysWeek;
