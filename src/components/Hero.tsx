import { useEffect, useState } from "react";

const lines = [
  { t: "$ bys deploy --client votre-projet", c: "text-paper/60" },
  { t: "✓ Stratégie validée", c: "text-teal" },
  { t: "✓ Design & développement", c: "text-teal" },
  { t: "✓ Mise en production Abidjan-CI", c: "text-teal" },
  { t: "→ Croissance en ligne", c: "text-lime" },
];

function Terminal() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= lines.length) return;
    const id = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 600 : 700);
    return () => clearTimeout(id);
  }, [shown]);

  return (
    <div className="animate-float rounded-2xl border border-white/10 bg-ink-soft/90 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-orange" />
        <span className="h-3 w-3 rounded-full bg-lime" />
        <span className="h-3 w-3 rounded-full bg-teal" />
        <span className="ml-3 font-mono text-xs text-paper/40">bys-pipeline.sh</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${l.c} ${
              i < shown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
          >
            {l.t}
            {i === shown - 1 && i < lines.length && (
              <span className="cursor-blink ml-1 inline-block text-paper">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange/20 blur-[120px]" />
      <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-teal/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs text-paper/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
            Cabinet d'ingénierie digitale · Abidjan, CI
          </span>

          <h1 className="mt-6 font-display text-[2.7rem] font-700 leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            L'ingénierie
            <br />
            digitale au service
            <br />
            de votre{" "}
            <span className="relative inline-block text-orange">
              croissance
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3 120 3 198 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-lime"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/60">
            Développement web & mobile, solutions SaaS, marketing digital et
            conseil stratégique pour les entreprises de Côte d'Ivoire.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/2250101322783"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full bg-orange px-7 py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Discuter de mon projet →</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Voir nos services
            </a>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
