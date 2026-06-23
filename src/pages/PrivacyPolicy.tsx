import Logo from "@/components/Logo";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information that you voluntarily provide to us when registering for training sessions, memberships, or events. This includes:",
    bullets: [
      "Parent/Guardian Information: Name, billing address, email address, phone number, and emergency contact details.",
      "Athlete Information: Name, birthdate/age, gender, and relevant medical history or physical conditions (as provided in your medical release).",
      "Payment Data: Credit card numbers, expiration dates, and security codes. All payment processing is securely handled by our third-party payment gateways; we do not store full credit card details on our local servers.",
      "Media: Photographs and videos captured during Axis Sports Lab training sessions, games, and events (subject to your Photo Release authorization).",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the collected data to operate our business and provide you with high-quality athletic training services. Specifically, we use it to:",
    bullets: [
      "Register athletes for classes, camps, and clinic sessions.",
      "Process monthly membership billings and financial transactions.",
      "Send operational updates, schedule changes, and promotional materials.",
      "Ensure athlete safety by reviewing provided medical disclosures in emergencies.",
      "Publicize and promote Axis Sports Lab programs on our website, social media channels, and marketing materials (using authorized photos/videos).",
    ],
  },
  {
    title: "3. Sharing and Disclosing Information",
    content: "Axis Sports Lab does not sell, rent, or trade your personal information to third parties. We may share information only in the following circumstances:",
    bullets: [
      "Service Providers: With trusted third-party vendors who assist us in operating our website, managing student rosters, or processing payments (e.g., Stripe, specialized sports management software).",
      "Medical Emergencies: With licensed medical professionals or first responders if necessary to protect the life or health of an athlete.",
      "Legal Requirements: If required to do so by law, court order, or government regulation.",
    ],
  },
  {
    title: "4. Children's Privacy (COPPA Compliance)",
    content: "Because we provide sports training for minors, we take children's privacy very seriously.",
    bullets: [
      "We do not knowingly collect personal information directly from children under the age of 13.",
      "All athlete profiles, registrations, and medical information must be submitted exclusively by a parent or legal guardian.",
    ],
  },
  {
    title: "5. Data Security",
    content: "We implement standard administrative, technical, and physical security measures designed to protect your personal information from unauthorized access, loss, or alteration. However, no electronic transmission or digital storage method is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Rights and Choices",
    content: "You have control over the information you share with us:",
    bullets: [
      "Account Updates: You may update your contact or billing information at any time by logging into your account portal or contacting us in writing.",
      "Marketing Opt-Out: You can unsubscribe from our promotional emails at any time by clicking the \"unsubscribe\" link at the bottom of the email. (Note: You will still receive essential operational emails regarding active memberships or schedule changes).",
    ],
  },
  {
    title: "7. Changes to This Privacy Policy",
    content: "Axis Sports Lab reserves the right to modify this Privacy Policy at any time. Any changes will be posted directly to this page with an updated \"Effective Date.\" We encourage you to review this policy periodically to stay informed.",
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:",
    contact: true,
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="container-x max-w-4xl mx-auto px-4">

        <div className="flex justify-center mb-8">
          <Logo className="h-20 w-auto" alt="Axis Sports Lab" />
        </div>

        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-3">
            Privacy Policy
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm">
            Axis Sports Lab · Effective Date: June 22, 2026
          </p>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
            At Axis Sports Lab, we respect your privacy and are committed to protecting the personal information of our athletes, parents, and guardians.
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

              {section.contact && (
                <div className="mt-2 space-y-1 text-foreground/80">
                  <p>
                    <span className="font-semibold">Email: </span>
                    <a href="mailto:info@axissportslab.com" className="text-primary hover:underline">
                      info@axissportslab.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Website: </span>
                    <a href="https://axissportslab.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      axissportslab.com
                    </a>
                  </p>
                </div>
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

export default PrivacyPolicy;
