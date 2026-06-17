import logo from "@/assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/harrittha_makeover14/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink text-white font-bold">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <img src={logo} alt="Haritha Makeovers" className="h-28 w-auto object-contain bg-white rounded-md p-2" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white font-bold">
              A premium bridal & party makeup studio crafting cinematic, HD-finish looks
              for life's most beautiful moments.
            </p>
          </div>

          <div>
            <p className="font-serif text-lg text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Services", "Gallery", "Booking", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white font-bold hover:text-primary transition">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white font-bold">+91 86398 09567</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 text-center text-xs text-white font-bold md:flex-row md:justify-center">
          <p>
            ©2026, Haritha Makeovers | Designed and Developed by{" "}
            <a href="https://spark9ai.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">spark9ai</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
