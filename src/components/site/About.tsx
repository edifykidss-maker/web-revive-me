import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-artist.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 300, suffix: "+", label: "Bridal Makeovers" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Awards & Features" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxury">
              <img
                src={aboutImg}
                alt="Haritha — professional makeup artist at work"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            {/* Floating gold badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-6 w-44 rounded-2xl bg-gradient-gold p-5 shadow-luxury"
            >
              <p className="font-script text-3xl text-ink leading-none">8+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/80">Years of artistry</p>
            </motion.div>
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gradient-gold opacity-30 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About Haritha</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Where artistry meets <span className="font-script text-gradient-gold">elegance</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Haritha Makeovers is a premium bridal and event makeup studio dedicated to
              creating timeless, camera-ready looks. With a refined eye for detail and a
              passion for celebrating every woman's unique beauty, we craft bespoke
              makeovers that feel as luxurious as they look.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From intimate engagements to grand weddings, every brush stroke is intentional,
              every shade is hand-picked, and every finish is HD-flawless.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="rounded-2xl glass p-5 hover-lift"
                >
                  <p className="font-serif text-4xl text-gradient-gold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
