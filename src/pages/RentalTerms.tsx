import Logo from "@/components/Logo";

const sections = [
  {
    title: "1. Rules, Regulations, and Liability",
    subsections: [
      {
        subtitle: "Assumption of Liability and Indemnification",
        content: `The Renter acknowledges and agrees to assume all liability for any injuries, damages, or losses arising from the use of the Axis Sports Lab facility, equipment, or services. Participation in sports and physical activities involves inherent risks. By renting the facility, the Renter explicitly releases and holds harmless Axis Sports Lab, its officers, employees, agents, and affiliates (the "Released Parties") from any liability, including:`,
        bullets: [
          "Personal injuries, including death, to the Renter or any participant within their group.",
          "Damage to, theft of, or loss of personal property.",
          "Any claim, demand, or cause of action arising from or related to the rental period.",
        ],
      },
      {
        subtitle: "Indemnification",
        content: "The Renter agrees to indemnify, defend, and hold harmless the Released Parties from any claims, demands, losses, or actions (including reasonable attorney fees) that:",
        bullets: [
          "Arise from the Renter's or their guests' use of the facility.",
          "Are caused by the Renter's negligence, omissions, or willful misconduct.",
          "Result from any breach of this Agreement.",
        ],
      },
    ],
  },
  {
    title: "2. Insurance & Documentation Requirements",
    content: "The Renter must obtain and maintain liability insurance coverage with respect to their use of the facility. The insurance policy must:",
    bullets: [
      "Name Axis Sports Lab as an additional insured.",
      "Provide comprehensive coverage for bodily injury and property damage.",
      "Have a minimum limit of liability of $1,000,000 per occurrence.",
    ],
    subsections: [
      {
        subtitle: "Required Contact Information",
        content: "The Renter must provide valid, verifiable primary contact info prior to facility access, including full legal name, phone number, and email address. Fraudulent contact information will result in immediate cancellation without refund.",
      },
    ],
  },
  {
    title: "3. Strict Cancellation & No-Refund Policy",
    content: "Axis Sports Lab operates on a strict, absolute No-Refund Policy for all booked rental sessions. All sales are final at the time of payment. In lieu of refunds, rental credits for future use may be issued strictly according to the following notice periods:",
    bullets: [
      "48 Hours or More Notice: 100% credit towards a future rental.",
      "24 to 47 Hours Notice: 50% credit towards a future rental.",
      "Less than 24 Hours Notice: No credit will be issued; 100% of the booking fee is forfeited.",
      "No-Shows: Failure to appear for a scheduled rental without written notice prior to the start time results in immediate forfeiture of payment. No credits or rescheduling will be permitted under any circumstances.",
    ],
    subsections: [
      {
        subtitle: "Cancellation Procedures",
        content: "To request a valid rental credit, the Renter must notify Axis Sports Lab in writing via email. Approved credits will be processed within 5 business days. Credits are non-transferable, cannot be redeemed for cash, and expire exactly 6 months from the original issue date.",
      },
    ],
  },
  {
    title: "4. Anti-Chargeback & Dispute Waiver",
    badge: "CRITICAL BILLING AGREEMENT",
    content: "By submitting payment and digitally accepting these terms, the Renter explicitly agrees to the billing terms outlined below and acknowledges that this digital signature is legally binding.",
    bullets: [
      "Service Rendered Upon Reservation: The Renter acknowledges that by booking a specific time slot, Axis Sports Lab removes that inventory from the market, preventing other clients from booking it. Therefore, the service is considered 100% rendered the moment the reservation is confirmed. Failure by the Renter to utilize the facility (e.g., no-shows, arriving late, or scheduling conflicts) does not constitute \"Service Not Rendered.\"",
      "Absolute Chargeback Waiver: The Renter explicitly waives any right to dispute, chargeback, or reverse the booking fee through their credit card issuer, bank, or payment processor for reasons including change of mind, scheduling conflicts, traffic, inclement weather (unless Axis Sports Lab officially closes), customer cancellation outside the approved window, or claims of \"Service Not Rendered\" when the facility was open and available.",
      "Authorization Verification: The Renter certifies they are the authorized cardholder. Digital acceptance of these terms, coupled with IP address tracking during checkout, constitutes explicit authorization of the charge.",
      "Dispute Penalty & Recovery Fees: If the chargeback is successfully defended, the Renter agrees to an automatic $50.00 Administrative Dispute Fee, which will be charged to the card on file.",
    ],
  },
  {
    title: "5. Facility Responsibilities",
    bullets: [
      "Safety: The Renter assumes complete liability for the safety and conduct of all participants, spectators, and guests during their designated rental period.",
      "Cleanliness: The Renter is responsible for maintaining the cleanliness of the facility. A cleaning fee of $150 will be automatically assessed to the payment method on file if the facility is left with excessive trash, debris, or damage.",
      "Security: The Renter must ensure the facility is secure throughout and at the immediate conclusion of their rental block.",
    ],
  },
  {
    title: "6. Governing Law & Acceptance",
    content: "This Agreement is governed by and construed in accordance with the laws of the State of Texas.",
    footer: "BY COMPLETING THE BOOKING AND SUBMITTING PAYMENT, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND VOLUNTARILY ACCEPTED ALL RULES, REGULATIONS, THE NO-REFUND POLICY, AND THE ABSOLUTE CHARGEBACK WAIVER CONTAINED HEREIN.",
  },
];

const RentalTerms = () => {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="container-x max-w-4xl mx-auto px-4">

        <div className="flex justify-center mb-8">
          <Logo className="h-20 w-auto" alt="Axis Sports Lab" />
        </div>

        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-3">
            Rental Terms &amp; Conditions
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm">
            Axis Sports Lab · Please read carefully before booking a facility rental.
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

              {section.badge && (
                <span className="inline-block mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border border-primary/50 text-primary bg-primary/10">
                  {section.badge}
                </span>
              )}

              {section.content && (
                <p className="text-foreground/80 leading-relaxed mb-3">{section.content}</p>
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

              {section.subsections?.map((sub, k) => (
                <div key={k} className="mt-5 border-l-2 border-primary/30 pl-4">
                  <h3 className="font-semibold text-foreground/90 mb-2">{sub.subtitle}</h3>
                  {sub.content && (
                    <p className="text-foreground/80 leading-relaxed">{sub.content}</p>
                  )}
                  {sub.bullets && (
                    <ul className="mt-2 space-y-2">
                      {sub.bullets.map((b, l) => (
                        <li key={l} className="flex gap-3 text-foreground/80 leading-relaxed">
                          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.footer && (
                <p className="mt-4 text-foreground/70 font-semibold text-sm leading-relaxed border-t border-border/30 pt-4">
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

export default RentalTerms;
