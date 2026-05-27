import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, span: "row-span-2", label: "Traditional Bridal" },
  { src: g2, span: "", label: "Party Glam" },
  { src: g3, span: "", label: "Engagement Glow" },
  { src: g4, span: "row-span-2", label: "Reception Elegance" },
  { src: g5, span: "", label: "Pre-Wedding" },
  { src: g6, span: "", label: "HD Bridal Finish" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">The Portfolio</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            A gallery of <span className="font-script text-gradient-gold">stories</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Real brides. Real glow. A glimpse into the looks we've created.
          </p>
        </motion.div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3 lg:auto-rows-[260px]">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left text-white">
                <p className="font-serif text-lg">{it.label}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Haritha Makeovers</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full glass-dark p-2 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={items[active].src}
              alt={items[active].label}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-luxury"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
