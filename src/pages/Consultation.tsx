import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";

const Consultation = () => (
  <>
    {/* Hero */}
    <section
      className="relative min-h-[55vh] flex items-center overflow-hidden"
      style={{ backgroundImage: "url(/pictures/athlete-running.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <Particles count={14} />
      <div className="relative z-10 container-x w-full py-20">
        <Reveal>
          <p className="eyebrow text-primary-glow mb-4">
            <span className="h-px w-8 bg-primary-glow" /> Free Consultation
          </p>
          <h1 className="font-display text-4xl md:text-6xl uppercase text-white leading-tight max-w-3xl">
            Book Your{" "}
            <span className="text-primary-glow">10 Minute</span>{" "}
            Consultation with AXIS SPORTS LAB Staff
          </h1>
          <p className="mt-4 text-white/70 text-base max-w-xl leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            For Specific Information Regarding Our Program
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(135deg, #080808 0%, #0d1a00 30%, #1d3d00 55%, #0d1a00 80%, #080808 100%)" }} />
      <div className="absolute inset-0 -z-10 bg-grid-sm opacity-20" />

      {/* Animated glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(141,187,28,0.20), transparent 70%)", animation: "glow-beat 5s ease-in-out infinite" }} />
      </div>

      <div className="container-x relative text-center max-w-3xl mx-auto">
        <Reveal>
          {/* Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ background: "rgba(141,187,28,0.15)", border: "1px solid rgba(141,187,28,0.4)", color: "#d4ff70" }}
            animate={{ boxShadow: ["0 0 0 0 rgba(141,187,28,0)", "0 0 0 8px rgba(141,187,28,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="h-2 w-2 rounded-full bg-[#8dbb1c] animate-pulse" />
            Limited Spots Available
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight">
            Time to take your athletics and{" "}
            <span className="text-primary-glow">cognitive skills</span> to the next level
          </h2>

          <p className="mt-6 text-white/65 text-base leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Click below to schedule your Evaluation Workout
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/evaluation-workout" className="btn-pill btn-pill-primary">
              Book Now
              <span className="btn-pill-icon"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Consultation;
