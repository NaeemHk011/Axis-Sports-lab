import Logo from "@/components/Logo";

const sections = [
  {
    title: "Informed Consent and Acknowledgement",
    content: `I hereby give my approval for my child's participation in any and all activities organized by Axis Sports Lab during the selected events and training sessions. In exchange for acceptance of said child's candidacy by Axis Sports Lab, I assume all risks and hazards incidental to the conduct of the activities, including travel to, participation in, and return from selected training sessions and events, and I release, absolve and hold harmless Axis Sports Lab, its officers, agents, coaches, employees and representatives from any and all liability for injuries to said child.`,
  },
  {
    title: "Waiver of Claims",
    content: `In the event of injury to said child, I hereby waive all claims against Axis Sports Lab (including its coaches, affiliates, participating agencies, advertisers and, if applicable, the owners or lessors of premises used to conduct the trainings and events). I acknowledge that participation in sports activities (including basketball) inherently carries the risk of injury   which may include, but is not limited to, fractures, paralysis, or death.`,
  },
  {
    title: "Medical Release and Authorization",
    content: `As parent and/or guardian of the named athlete, I hereby authorize diagnosis and treatment by a qualified and licensed medical professional of the minor child in the event of a medical emergency that, in the opinion of the attending professional, requires immediate attention to prevent further endangerment of life, physical disfigurement, physical impairment or other undue pain or suffering. Permission is granted to the attending physician to perform any medical or minor surgical treatment, x-ray examination, immunization, or other medical procedure for the named athlete when deemed necessary. In the event of a serious illness, major surgery or significant accidental injury, I understand that every reasonable effort shall be made by the attending physician to contact me as soon as possible. I also grant permission to Axis Sports Lab (including its directors, coaches and staff) to provide emergency treatment prior to the child's admission to a medical facility, for the duration of the registered session or season. This authorization is executed freely and voluntarily for the protection of life and limb of the named minor child.`,
  },
  {
    title: "Photo Release and Authorization",
    content: `I hereby grant Axis Sports Lab, its representatives, employees or anyone authorized by Axis Sports Lab permission to use my likeness and/or the likeness of my child(ren) in photographs and/or video in any and all publications, illustrations, advertising, website entries, social media or other media, without payment or any other consideration. I understand that these materials (including negatives and positives) together with prints become the property of Axis Sports Lab and will not be returned. I irrevocably authorize Axis Sports Lab, its representatives and employees (or anyone authorized by them) to edit, alter, copy, exhibit, publish or distribute the photograph or video for the purpose of publicizing Axis Sports Lab programs or for any other lawful purpose. I waive the right to inspect or approve any finished product wherein my likeness or the likeness of my child(ren) appears. I also waive any right to royalties or other compensation arising from or related to the use of the photograph or video.`,
  },
  {
    title: "5. Membership = 90-Day Commitment",
    content: `By enrolling in any membership program with Axis Sports Lab, I acknowledge and agree that the membership carries a minimum commitment term of ninety (90) days. After the initial 90-day period has been completed, membership continues on the agreed billing cycle unless cancelled in writing as set out in this Agreement.`,
  },
  {
    title: "Payments, Credits and Refunds",
    bullets: [
      "All payments made to Axis Sports Lab are final. Any credits, if issued, may only be applied toward future programs or services offered by Axis Sports Lab. These credits cannot be converted into cash or transferred to another party.",
      "Billing for monthly membership services occurs every 30 days from the date of purchase, automatically using the card on file every month. If there is a change to this billing arrangement, it must be made in writing 7 days before the next billing date.",
      "No Rollover of Training Sessions: Any missed or unused training sessions do not carry over into future programs.",
      "Fund Application: Funds are applied immediately at the time of payment to the selected program or service.",
      "Refunds: Once payment is received, refunds or cash reimbursements will not be provided under any circumstances, except in the case of injury with physician's authorization.",
    ],
    footer: "By enrolling, you acknowledge and agree to these payment and credit policies.",
  },
  {
    title: "Cancellation & Dispute Policy",
    intro: "If you need to cancel your membership, the following conditions apply:",
    bullets: [
      "You must submit cancellation in writing (via email to the designated address) at least 7 days prior to your next billing date.",
      "If you cancel before the program start date, payments made will be refunded minus a $100 administrative fee.",
      "Late or no written notice: clients who fail to provide proper written notice within the required timeframe will be charged the full scheduled amount. In such cases, no refunds will be issued; however, the amount paid may be applied as a credit toward future Axis Sports Lab programs or services (at Axis Sports Lab's discretion).",
      "Disputes or chargebacks filed directly with the financial institution without first contacting Axis Sports Lab service team will result in an immediate and permanent ban from all Axis Sports Lab programs.",
    ],
    footer: "By maintaining a membership with Axis Sports Lab, you acknowledge and agree to these cancellation and dispute terms.",
  },
  {
    title: "Chargeback Policy",
    content: `The Company reserves the right to apply a research and administrative processing fee to you in the event that a chargeback is initiated with your credit card company (whether intentional or unintentional). This fee will be based on the costs incurred by the payment service provider and used to cover the investigative expenses required to demonstrate that:`,
    bullets: [
      "The charge was authorized and made by you;",
      "The services were rendered in accordance with this Agreement;",
      "You had previously agreed to the no-refund policy prior to initiating the chargeback.",
    ],
    footer: "By enrolling in services with Axis Sports Lab, you acknowledge and agree to this chargeback policy.",
  },
  {
    title: "Governing Law & Severability",
    content: `This Agreement shall be governed by and construed in accordance with the laws of the state in which Axis Sports Lab is incorporated or operates. If any part of this Agreement is found to be invalid or unenforceable, that part shall be severed and the remainder of the Agreement shall continue in full force and effect.`,
    footer: "By enrolling in a program or membership with Axis Sports Lab, you acknowledge that you have read, understood and agree to all of the terms and conditions above, including the 90-day commitment term.",
  },
];

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="container-x max-w-4xl mx-auto px-4">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-20 w-auto" alt="Axis Sports Lab" />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-3">
            Terms &amp; Conditions
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm">Axis Sports Lab   Please read carefully before enrolling.</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section
              key={i}
              className="border border-border/40 rounded-xl p-6 md:p-8 bg-surface/40 backdrop-blur-sm"
            >
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-wide text-primary mb-4">
                {section.title}
              </h2>

              {section.intro && (
                <p className="text-foreground/80 leading-relaxed mb-3">{section.intro}</p>
              )}

              {section.content && (
                <p className="text-foreground/80 leading-relaxed">{section.content}</p>
              )}

              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-foreground/80 leading-relaxed">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="mt-4 text-foreground/70 italic text-sm leading-relaxed border-t border-border/30 pt-4">
                  {section.footer}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-xs mt-12">
          &copy; {new Date().getFullYear()} Axis Sports Lab. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default TermsAndConditions;
