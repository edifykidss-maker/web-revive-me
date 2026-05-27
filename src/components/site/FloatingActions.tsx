import { motion } from "framer-motion";
import { MessageCircle, Music, Music2 } from "lucide-react";
import { useState } from "react";

export function FloatingActions() {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <motion.a
        href="https://wa.me/918639809567"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-luxury animate-pulse-glow"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      <motion.button
        onClick={() => setMuted((m) => !m)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full glass text-foreground shadow-soft"
        aria-label="Toggle background music"
        title={muted ? "Music off" : "Music on"}
      >
        {muted ? <Music2 className="h-4 w-4" /> : <Music className="h-4 w-4 text-primary" />}
      </motion.button>
    </>
  );
}
