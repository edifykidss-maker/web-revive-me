import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBride from "@/assets/hero-bride.jpg";
import { ParticlesBg } from "./ParticlesBg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <ParticlesBg />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="Bridal makeup by Haritha Makeovers"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Sliding animated background layer */}
      <div className="absolute inset-0 animate-slide-bg mix-blend-soft-light pointer-events-none" />
      <div
        className="absolute -inset-x-1/4 -inset-y-1/4 animate-slide-diagonal pointer-events-none opacity-40"
        style={{ background: "var(--gradient-blush)" }}
      />

      {/* Floating glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-0 bottom-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "var(--gradient-blush)" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground/80"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Premium Makeup Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Transforming{" "}
            <span className="font-script text-gradient-gold text-6xl sm:text-7xl md:text-8xl">Beauty</span>
            <br />
            Into <em className="font-serif italic">Elegance</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Professional bridal & party makeup artist crafting cinematic, HD-finish looks
            for your most special moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-ink shadow-luxury transition hover:scale-105 animate-pulse-glow"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary/60"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-gradient-luxury"
                />
              ))}
            </div>
            <span><b className="text-foreground">500+</b> happy brides & counting</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
