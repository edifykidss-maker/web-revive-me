import { motion } from "framer-motion";
import { Award, Clock, Droplets, ShieldCheck, Sparkles, Palette } from "lucide-react";

const reasons = [
  { icon: Award, title: "Professional Products", desc: "Only premium, high-pigment brands trusted by global artists." },
  { icon: Clock, title: "Long Lasting Makeup", desc: "Looks engineered to stay flawless from vows to last dance." },
  { icon: Sparkles, title: "HD Bridal Finish", desc: "Camera-ready glow tailored for HD photo & video." },
  { icon: Droplets, title: "Hygienic Service", desc: "Sanitised tools and single-use applicators, every time." },
  { icon: ShieldCheck, title: "On-Time Service", desc: "Punctual, prepared, and seamless on your big day." },
  { icon: Palette, title: "Customised Looks", desc: "Every look is co-created with you — never templated." },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            The Haritha <span className="font-script text-gradient-gold">difference</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 hover-lift"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100" style={{ background: "var(--gradient-gold)" }} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition group-hover:bg-gradient-gold group-hover:text-ink">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
