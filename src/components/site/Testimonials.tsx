import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    name: "Aishwarya R.",
    role: "Bride • Hyderabad",
    text: "Haritha made me feel like the most beautiful version of myself on my wedding day. The HD finish photographed like a dream — every single picture is framed in our home.",
  },
  {
    name: "Meghana S.",
    role: "Reception • Bangalore",
    text: "Beyond stunning. The look lasted 12+ hours through dance, dinner, and hugs. Calm, professional, and a true artist.",
  },
  {
    name: "Pooja K.",
    role: "Engagement",
    text: "Soft glam perfection. She understood my vision instantly and elevated it. Easily the best decision I made for my big day.",
  },
  {
    name: "Sneha V.",
    role: "Pre-Wedding Shoot",
    text: "Every angle, every frame — flawless. Haritha is genuinely gifted and incredibly sweet to work with.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % data.length);
  const prev = () => setI((p) => (p - 1 + data.length) % data.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = data[i];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-dark text-white">
      <div className="absolute inset-0 opacity-20 animate-gradient" style={{ background: "var(--gradient-luxury)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Love Letters</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-white">
          Words from our <span className="font-script text-gradient-gold">brides</span>
        </h2>

        <div className="relative mt-14 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-dark mx-auto max-w-3xl rounded-3xl p-10 md:p-14"
            >
              <Quote className="mx-auto h-10 w-10 text-primary" />
              <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed italic text-white/90">
                "{t.text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-1 text-primary">
                {[...Array(5)].map((_, n) => (<Star key={n} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-4 font-serif text-lg text-white">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} className="rounded-full glass-dark p-3 hover:bg-white/10 transition" aria-label="Previous">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {data.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                className={`h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-gradient-gold" : "w-1.5 bg-white/30"}`}
                aria-label={`Go to ${n + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="rounded-full glass-dark p-3 hover:bg-white/10 transition" aria-label="Next">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
