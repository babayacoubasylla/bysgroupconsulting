import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <Logo className="h-11 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-12" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-paper/70 transition-colors hover:text-paper"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/2250101322783"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime px-5 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_-6px] hover:shadow-lime"
          >
            Discuter →
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 bg-paper transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-paper transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-paper transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-soft transition-all duration-400 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-paper/80 transition-colors hover:bg-white/5 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/2250101322783"
            className="mt-2 rounded-full bg-lime px-4 py-3 text-center font-semibold text-ink"
          >
            Discuter de mon projet →
          </a>
        </nav>
      </div>
    </header>
  );
}
