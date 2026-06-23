import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  return (
    <footer className="relative border-t border-white/5 bg-[hsl(var(--surface))] pt-20">
      <div className="container-x">

        {/* Newsletter bar */}
        <div className="mb-16 flex flex-col items-center gap-6 rounded-2xl border border-white/5 bg-gradient-to-br from-[hsl(var(--surface-2))] to-[hsl(var(--surface))] p-8 text-center md:flex-row md:justify-between md:text-left"
          style={{ borderTop: "2px solid hsl(77 74% 42% / 0.4)" }}>
          <div>
            <h3 className="font-display text-3xl uppercase text-white">Download the Axis Athlete Blueprint</h3>
            <p className="mt-1 text-sm text-muted-foreground">The Tech Guide to Vertical & Skill Optimization. Exclusive training insights for elite athletes.</p>
          </div>
          <Link to="/newsletter" className="btn-red btn-red-glow px-6 py-3 text-sm font-bold">Subscribe</Link>
        </div>

        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-4 pb-12 text-center">
          <Logo className="h-20 w-auto logo-halo" />
          <p className="font-display text-xl uppercase tracking-widest text-primary-glow">Building Explosive Athletes</p>
          <p className="text-xs text-white/40 uppercase tracking-widest">Est. 2017 · Katy, Texas · Basketball Training Academy</p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-10 border-t border-white/5 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1: Sitemap */}
          <div>
            <h4 className="mb-5 font-display text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full" style={{ background: "#8dbb1c" }} />
              Sitemap
            </h4>
            <ul className="space-y-2 text-sm text-white/65">
              {[
                ["About Us", "/about"],
                ["Training", "/training"],
                ["3V3 League", "/youth-league"],
                ["Camps", "/camps"],
                ["Memberships", "/membership"],
                ["Rentals", "/rentals"],
                ["Contact", "/contact"],
                ["Athlete Blueprint", "/ebook"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="hover:text-primary-glow transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Programs */}
          <div>
            <h4 className="mb-5 font-display text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full" style={{ background: "#8dbb1c" }} />
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-white/65">
              {[
                ["Shooting Classes", "/training"],
                ["Skills Training", "/training"],
                ["Athlete Development", "/training"],
                ["Basketball Camps", "/camps"],
                ["3V3 Open League", "/youth-league"],
                ["Membership Plans", "/membership"],
                ["Free Evaluation", "/evaluation-workout"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="hover:text-primary-glow transition-colors duration-200">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="mb-5 font-display text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full" style={{ background: "#8dbb1c" }} />
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 shrink-0 text-primary-glow mt-0.5" />
                <span>510 S Mason Rd Unit 16A,<br />Katy, TX 77450</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href="tel:+13465508150" className="hover:text-white transition-colors">(346) 550-8150</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href="mailto:info@axissportslab.com" className="hover:text-white transition-colors break-all">
                  info@axissportslab.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div>
            <h4 className="mb-5 font-display text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-4 w-0.5 rounded-full" style={{ background: "#8dbb1c" }} />
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/axissportslab/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/AxisSportsLab", label: "Facebook" },
                { Icon: Twitter, href: "https://x.com/AxisSportsLab", label: "Twitter" },
                { Icon: Youtube, href: "https://www.youtube.com/@axissportslab", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full transition-all duration-300"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.15)"}`,
                    color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8dbb1c";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(141,187,28,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#d4ff70";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 12px rgba(141,187,28,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.60)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="https://www.instagram.com/axissportslab/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 text-primary-glow hover:text-white"
            >
              <Instagram className="h-3.5 w-3.5" /> Follow on Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Axis Sports Lab. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary-glow transition-colors duration-200">Privacy Policy</Link>
            <span className="opacity-40">·</span>
            <Link to="/refund-policy" className="hover:text-primary-glow transition-colors duration-200">Refund Policy</Link>
            <span className="opacity-40">·</span>
            <span className="font-display tracking-widest uppercase opacity-60">Katy, TX · Est. 2017</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
