import { motion } from "framer-motion";
import { Phone, Instagram, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "+91 86398 09567";
const PHONE_TEL = "+918639809567";
const WHATSAPP_URL = "https://wa.me/918639809567";
const INSTAGRAM_URL = "https://www.instagram.com/harrittha_makeover14/";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-dark text-white overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-white">
            Let's create something <span className="font-script text-gradient-gold">beautiful</span>
          </h2>
          <p className="mt-5 text-white/70">
            Reach out on WhatsApp, give us a call, or slide into our DMs — we'd love to hear about your event.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-5 sm:grid-cols-3"
        >
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat instantly"
            href={WHATSAPP_URL}
          />
          <ContactCard
            icon={Phone}
            label="Call"
            value={PHONE_DISPLAY}
            href={`tel:${PHONE_TEL}`}
          />
          <ContactCard
            icon={Instagram}
            label="Instagram"
            value="@harrittha_makeover14"
            href={INSTAGRAM_URL}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl glass-dark p-5 transition hover:bg-white/5 hover-lift"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-ink transition group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/60">{label}</p>
        <p className="mt-0.5 font-serif text-lg text-white">{value}</p>
      </div>
    </a>
  );
}
