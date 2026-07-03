const items = [
  {
    n: "01",
    icon: "⌘",
    color: "text-orange",
    ring: "group-hover:border-orange/50",
    glow: "group-hover:shadow-orange/20",
    title: "Ingénierie digitale",
    text: "Conception et développement d'applications web, mobiles et de plateformes SaaS sur mesure, adaptées aux réalités du marché ivoirien.",
  },
  {
    n: "02",
    icon: "◈",
    color: "text-teal",
    ring: "group-hover:border-teal/50",
    glow: "group-hover:shadow-teal/20",
    title: "Marketing & communication",
    text: "Stratégie de présence en ligne, gestion de réseaux sociaux, SEO et positionnement de marque pour les PME et groupes multi-activités.",
  },
  {
    n: "03",
    icon: "▤",
    color: "text-lime",
    ring: "group-hover:border-lime/50",
    glow: "group-hover:shadow-lime/20",
    title: "Suivi & évaluation (M&E)",
    text: "Mise en place d'outils de pilotage et de reporting pour mesurer l'impact réel de vos projets et actions.",
  },
  {
    n: "04",
    icon: "❖",
    color: "text-sky",
    ring: "group-hover:border-sky/50",
    glow: "group-hover:shadow-sky/20",
    title: "Conseil IT multi-secteurs",
    text: "Accompagnement technique et stratégique pour la santé, l'hôtellerie, le BTP et les services, avec une approche orientée résultats.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-orange">
            // Ce que nous faisons
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-600 leading-tight tracking-tight sm:text-5xl">
            Un seul partenaire, de la stratégie à la production.
          </h2>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.n}
            className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft p-7 shadow-xl shadow-transparent transition-all duration-500 hover:-translate-y-2 ${it.ring} ${it.glow}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className={`text-3xl ${it.color}`}>{it.icon}</span>
              <span className="font-mono text-xs text-paper/30">{it.n}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-600">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/55">{it.text}</p>
            <div className="mt-6 h-px w-0 bg-gradient-to-r from-white/40 to-transparent transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
