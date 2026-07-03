import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <Logo className="h-11 w-auto sm:h-12" />
        <p className="text-center font-mono text-xs text-paper/40">
          © {new Date().getFullYear()} BYS Group Consulting · Cocody-Akouedo, Abidjan · Côte d'Ivoire
        </p>
        <a
          href="#top"
          className="rounded-full border border-white/15 px-4 py-2 text-xs text-paper/70 transition-colors hover:border-white/40 hover:text-paper"
        >
          Haut de page ↑
        </a>
      </div>
    </footer>
  );
}
