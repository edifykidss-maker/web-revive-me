import { Instagram, Sparkles } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/harrittha_makeover14/";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-serif text-xl text-white">
                Haritha <span className="text-gradient-gold">Makeovers</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A premium bridal & party makeup studio crafting cinematic, HD-finish looks
              for life's most beautiful moments.
            </p>
          </div>

          <div>
            <p className="font-serif text-lg text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Services", "Gallery", "Booking", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-primary transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-lg text-white">Connect</p>
            <div className="mt-4 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:bg-gradient-gold hover:text-ink hover:border-transparent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">+91 86398 09567</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 md:flex-row md:justify-center">
          <p>
            ©2026, Haritha Makeovers | Designed and Developed by{" "}
            <a href="https://spark9ai.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">spark9ai</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
