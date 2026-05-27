import { motion } from "framer-motion";
import { Heart, Gem, Crown, Sparkles, Camera } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Party Makeup",
    desc: "Glamorous looks crafted for cocktails, soirées, and statement evenings.",
  },
  {
    icon: Gem,
    title: "Engagement Makeup",
    desc: "Soft, romantic glam with a luminous finish to start your forever story.",
  },
  {
    icon: Crown,
    title: "Wedding Makeup",
    desc: "Signature HD bridal artistry tailored to your culture and couture.",
  },
  {
    icon: Heart,
    title: "Reception Makeup",
    desc: "Modern, polished elegance for your most photographed celebration.",
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoot",
    desc: "Camera-perfect looks designed for cinematic outdoor portraits.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-gold)" }} />
      <div className="absolute inset-0 bg-gradient-dark/95" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Signature Services</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-white">
            Crafted for every <span className="font-script text-gradient-gold">moment</span>
          </h2>
          <p className="mt-5 text-white/70">
            A curated menu of luxury makeup experiences — each designed to feel personal,
            polished, and unforgettable.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl glass-dark p-8 hover-lift"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-gold opacity-60" />
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-gold opacity-0 blur-3xl transition group-hover:opacity-30" />

              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-ink shadow-glow transition group-hover:rotate-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-primary transition group-hover:gap-2"
                >
                  Enquire →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
