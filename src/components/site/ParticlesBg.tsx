import { motion } from "framer-motion";

export function ParticlesBg() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury opacity-40 animate-gradient" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      {particles.map((_, i) => {
        const size = 6 + Math.random() * 14;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 10 + Math.random() * 14;
        return (
          <motion.span
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: "radial-gradient(circle, oklch(0.92 0.09 85 / 0.9), transparent 70%)",
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </div>
  );
}
