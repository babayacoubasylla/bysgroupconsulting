const items = [
  "React",
  "Next.js",
  "SaaS",
  "Mobile",
  "SEO",
  "Cloud",
  "CRM",
  "Suivi & Évaluation",
  "E-commerce",
  "Marketing digital",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/10 bg-ink-soft py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-paper/40"
          >
            {t}
            <span className="text-orange">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
