import Logo from "@/components/Logo";

const sections = [
  {
    title: "1. Strict No-Refund Policy",
    content: "All sales, purchases, and membership billings executed with Axis Sports Lab are final, non-refundable, and non-reimbursable.",
    bullets: [
      "Immediate Allocation of Funds: Upon receipt of payment, funds are immediately allocated to secure coaching staff, facility rentals, administrative overhead, and program resources.",
      "No Rollovers: Unused or missed training sessions, classes, or clinic days do not roll over into future billing cycles or subsequent programs under any circumstances.",
      "Voluntary Withdrawal: If a participant chooses to withdraw, cancel, or fail to attend a program for personal reasons, no monetary refunds will be issued.",
    ],
  },
  {
    title: "2. Limited Exceptions (Medical Injury Only)",
    content: "The only exception to our strict no-refund policy is a severe medical injury that completely prevents the athlete from participating. To qualify for a partial refund or credit:",
    bullets: [
      "You must submit a formal written request via email accompanied by a signed, official note from a licensed medical physician explicitly stating that the athlete cannot participate in sports activities.",
      "Medical documentation must be received within 7 days of the injury occurrence.",
      "If approved, refunds or credits will be calculated pro-rata from the date the written notice and doctor's note were received, minus a $100 administrative processing fee.",
    ],
  },
  {
    title: "3. Account Credits and Transfers",
    content: "At the sole discretion of Axis Sports Lab management, a non-refundable Account Credit may be issued in lieu of a monetary refund.",
    bullets: [
      "Account credits can only be applied toward future Axis Sports Lab services or programs.",
      "Account credits cannot be exchanged for cash, are entirely non-transferable to other families or athletes, and expire exactly 12 months from the date of issuance.",
    ],
  },
  {
    title: "4. Membership & Billing Commitment",
    bullets: [
      "90-Day Minimum Commitment: All recurring membership programs carry an ironclad, minimum commitment term of ninety (90) days. Early termination during this period is prohibited.",
      "Automatic Billing: Subscriptions automatically renew every 30 days using the authorized credit card on file.",
      "Cancellation Notice: To pause or cancel a membership after the initial 90-day period, a written notice must be submitted via email to info@axissportslab.com at least 7 days prior to your next scheduled billing date. Failure to provide 7 days' notice will result in the automated processing of the next cycle's payment, which is strictly non-refundable.",
    ],
  },
  {
    title: "5. Zero-Tolerance Chargeback & Dispute Policy",
    content: "Axis Sports Lab proactively monitors and defends against friendly fraud (the unauthorized disputing of legitimate charges). By executing a transaction with us, you agree to the following terms regarding payment disputes:",
    badge: "Critical Notice to Consumers",
    badgeNote: "Filing a dispute or \"chargeback\" with your bank or credit card issuer without first attempting to resolve the matter directly with Axis Sports Lab management constitutes a breach of this contract.",
    bullets: [
      "Immediate Termination of Services: If you initiate a chargeback or payment dispute with your financial institution, Axis Sports Lab will immediately and permanently terminate all active memberships, registrations, and access to training facilities for your entire household. No credits or service fulfillments will be honored moving forward.",
      "Administrative and Research Fee: In the event of a chargeback (whether intentional, accidental, or fraudulent), Axis Sports Lab reserves the right to assess a $150 administrative and research processing fee to your account.",
      "Submission of Contract Evidence: Axis Sports Lab works directly with merchant processors and banks to vigorously contest unauthorized chargebacks. We will submit this signed agreement, digital access logs, attendance sheets, and IP/timestamp purchase records to your financial institution as legally binding proof.",
      "Collection Agency Referral: If a chargeback is successfully forced by your bank despite this agreement, Axis Sports Lab reserves the right to report the unpaid debt (including the original amount plus the $150 administrative fee) to third-party collection agencies and credit reporting bureaus.",
    ],
  },
  {
    title: "6. Acknowledgement of Terms",
    content: "By checking the agreement box at checkout, signing an enrollment form, or processing a manual payment with Axis Sports Lab, you certify that:",
    numbered: [
      "You are the authorized cardholder or have explicit permission from the cardholder to execute this transaction.",
      "You have thoroughly read, understood, and accept this Refund & Chargeback Policy.",
      "You waive your right to dispute charges with your bank for reasons including, but not limited to: scheduling conflicts, minor athlete disinterest, or a change of mind.",
    ],
    footer: "For any legitimate billing inquiries or assistance, please contact our support team immediately at info@axissportslab.com. We are always happy to work directly with our families to find fair solutions.",
  },
];

const RefundPolicy = () => {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="container-x max-w-4xl mx-auto px-4">

        <div className="flex justify-center mb-8">
          <Logo className="h-20 w-auto" alt="Axis Sports Lab" />
        </div>

        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-3">
            Refund Policy
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm">
            Axis Sports Lab · Effective Date: June 22, 2026
          </p>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
            By purchasing any product, service, camp, clinic, training session, or membership from Axis Sports Lab, you explicitly agree to the terms of this Refund and Chargeback Policy.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section
              key={i}
              className="border border-border/40 rounded-xl p-6 md:p-8 bg-surface/40 backdrop-blur-sm"
            >
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-wide text-primary mb-4">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-foreground/80 leading-relaxed mb-3">{section.content}</p>
              )}

              {section.badge && (
                <div className="mb-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
                  <p className="font-bold text-primary text-sm uppercase tracking-wider mb-1">{section.badge}</p>
                  {section.badgeNote && (
                    <p className="text-foreground/80 text-sm leading-relaxed">{section.badgeNote}</p>
                  )}
                </div>
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

              {section.numbered && (
                <ol className="mt-3 space-y-2 list-none">
                  {section.numbered.map((item, j) => (
                    <li key={j} className="flex gap-3 text-foreground/80 leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 text-primary text-xs font-bold grid place-items-center">
                        {j + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}

              {section.footer && (
                <p className="mt-4 text-foreground/70 italic text-sm leading-relaxed border-t border-border/30 pt-4">
                  {section.footer}
                </p>
              )}
            </section>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-12">
          &copy; {new Date().getFullYear()} Axis Sports Lab. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default RefundPolicy;
