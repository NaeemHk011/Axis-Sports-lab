import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/about", label: "About" },
  { to: "/training", label: "Training" },
  { to: "/camps", label: "Camps" },
  { to: "/teams", label: "Teams" },
  { to: "/contact", label: "Contact" },
  { to: "/rentals", label: "Rentals" },
  { to: "/membership", label: "Membership" },
  { to: "/ebook", label: "Ebook" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const navBg      = isDark ? "#0A0A0A"                  : "#ffffff";
  const navBorder  = isDark ? "rgba(255,255,255,0.08)"   : "rgba(0,0,0,0.10)";
  const linkColor  = isDark ? "rgba(255,255,255,0.80)"   : "rgba(0,0,0,0.70)";
  const linkHover  = isDark ? "#ffffff"                  : "#000000";
  const menuIcon   = isDark ? "#ffffff"                  : "#111111";
  const mobileBorder = isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const mobileTx   = isDark ? "#ffffff"                  : "#111111";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="sticky inset-x-0 top-0 z-50 py-4 md:py-5 transition-all duration-300"
        style={{
          background: navBg,
          borderBottom: "1px solid #8dbb1c",
        }}
      >
        {/* Animated red shine sweep on bottom border */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
          <div style={{
            position: "absolute",
            top: 0,
            left: "-40%",
            width: "40%",
            height: "100%",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
            animation: "navbar-shine 2.5s ease-in-out infinite",
          }} />
        </div>
        <div className="container-x flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105" aria-label="Axis Sports Lab home">
            <Logo className="h-5 w-auto md:h-7 lg:h-9" />

          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                style={({ isActive }) => ({
                  color: isActive ? linkHover : linkColor,
                })}
                className={({ isActive }) =>
                  `link-underline text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${isActive ? "active" : ""}`
                }
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = linkHover; }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  if (!el.classList.contains("active")) el.style.color = linkColor;
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/reserve-training"
              className="btn-red hidden text-sm sm:inline-flex font-bold tracking-wide"
              style={{ boxShadow: "0 0 20px rgba(141,187,28,0.4)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(141,187,28,0.65)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(141,187,28,0.4)"; }}
            >
              Reserve Training
            </Link>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="rounded-md p-2 lg:hidden"
              style={{ color: menuIcon }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-24">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 font-display text-4xl uppercase"
                    style={{ color: mobileTx, borderBottom: `1px solid ${mobileBorder}` }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/reserve-training" className="btn-red mt-8 self-start">
                Reserve Training
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
