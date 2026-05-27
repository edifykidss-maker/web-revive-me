import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function Booking() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    toast.success("Appointment request sent!", {
      description: "Haritha's team will reach out shortly to confirm your booking.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Reserve Your Look</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Book your <span className="font-script text-gradient-gold">appointment</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Tell us about your event. Dates fill quickly during wedding season — we recommend
            booking at least 4–8 weeks in advance.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-14 grid gap-5 rounded-3xl glass p-8 sm:p-10 shadow-luxury sm:grid-cols-2"
        >
          <Field label="Full Name" name="name" required placeholder="Your name" />
          <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 43210" />
          <div className="sm:col-span-1">
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Event Type</label>
            <select
              name="event"
              required
              className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
            >
              <option value="">Select an event…</option>
              <option>Bridal Makeup</option>
              <option>Engagement</option>
              <option>Reception</option>
              <option>Party / Cocktail</option>
              <option>Pre-Wedding Shoot</option>
            </select>
          </div>
          <Field label="Event Date" name="date" type="date" required />
          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your vision, venue, or any specific look you have in mind…"
              className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>

          <div className="sm:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-9 py-4 text-sm font-medium text-ink shadow-luxury transition hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 animate-pulse-glow"
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                <>Request Appointment <Send className="h-4 w-4 transition group-hover:translate-x-1" /></>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
