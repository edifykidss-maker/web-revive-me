import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-gradient-luxury opacity-40 animate-gradient" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-glow"
            >
              <Sparkles className="h-7 w-7 text-ink" />
            </motion.div>
            <p className="mt-6 font-serif text-2xl">
              Haritha <span className="text-gradient-gold">Makeovers</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Crafting elegance…
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
