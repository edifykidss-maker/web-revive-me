import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-story-1.jpg.asset.json";
import g2 from "@/assets/gallery-story-2.jpg.asset.json";
import g3 from "@/assets/gallery-story-3.jpg.asset.json";
import g4 from "@/assets/gallery-story-4.jpg.asset.json";
import g5 from "@/assets/gallery-story-5.jpg.asset.json";
import g6 from "@/assets/gallery-story-6.jpg.asset.json";
import g7 from "@/assets/gallery-story-7.jpg.asset.json";
import g8 from "@/assets/gallery-story-8.jpg.asset.json";
import g9 from "@/assets/gallery-story-9.jpg.asset.json";
import g10 from "@/assets/gallery-story-10.jpg.asset.json";
import g11 from "@/assets/gallery-story-11.jpg.asset.json";
import g12 from "@/assets/gallery-story-12.jpg.asset.json";
import g13 from "@/assets/gallery-story-13.jpg.asset.json";
import g14 from "@/assets/gallery-story-14.jpg.asset.json";
import g15 from "@/assets/gallery-story-15.jpg.asset.json";
import g16 from "@/assets/gallery-story-16.jpg.asset.json";
import g17 from "@/assets/gallery-story-17.jpg.asset.json";

const items = [
  { src: g1.url, alt: "Bridal makeup gallery photo 1" },
  { src: g2.url, alt: "Bridal makeup gallery photo 2" },
  { src: g3.url, alt: "Bridal makeup gallery close-up" },
  { src: g4.url, alt: "Makeup gallery family look" },
  { src: g5.url, alt: "Makeup gallery mother and child look" },
  { src: g6.url, alt: "Traditional festive look" },
  { src: g7.url, alt: "Bridal ceremony portrait" },
  { src: g8.url, alt: "Family festive portrait" },
  { src: g9.url, alt: "Bridal close-up portrait" },
  { src: g10.url, alt: "Editorial hairstyle back view" },
  { src: g11.url, alt: "Young festive look" },
  { src: g12.url, alt: "Newspaper print saree look" },
  { src: g13.url, alt: "Smiling editorial portrait" },
  { src: g14.url, alt: "Bride with family portrait" },
  { src: g15.url, alt: "Traditional saree portrait" },
  { src: g16.url, alt: "Bridal blessing ceremony moment" },
  { src: g17.url, alt: "Bridal portrait in red saree" },
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
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">The Portfolio</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            A gallery of <span className="font-script text-gradient-gold">stories</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Real brides. Real glow. A glimpse into the looks we've created.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
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
              alt={items[active].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-luxury"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
