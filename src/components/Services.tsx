import { useState } from "react";

const services = [
  {
    tag: "01",
    title: "Ingénierie digitale & développement",
    accent: "text-orange",
    bar: "bg-orange",
    points: [
      "Sites vitrines et sites e-commerce",
      "Applications web et mobiles (React, Next.js, cloud)",
      "Plateformes SaaS : base de données, authentification, paiement en ligne",
      "Systèmes de gestion métier (CRM, suivi d'activité, reporting)",
    ],
    example:
      "Plateforme SaaS de gestion de chantiers pour une entreprise du BTP : rapports journaliers, suivi des équipes et synchronisation hors-ligne.",
  },
  {
    tag: "02",
    title: "Marketing & communication digitale",
    accent: "text-teal",
    bar: "bg-teal",
    points: [
      "Stratégie de contenu et réseaux sociaux (Facebook, Instagram, WhatsApp Business)",
      "Référencement naturel (SEO) et Google Business Profile",
      "Identité visuelle et supports de communication",
      "Plans de lancement digital pour nouvelles activités",
    ],
    example:
      "Stratégie de lancement digital sur 90 jours pour un groupe multi-secteurs (événementiel & santé optique), pitch deck et plan de communication complet.",
  },
  {
    tag: "03",
    title: "Suivi & évaluation (M&E)",
    accent: "text-lime",
    bar: "bg-lime",
    points: [
      "Conception d'indicateurs de suivi et tableaux de bord",
      "Outils de collecte et de reporting adaptés au terrain",
      "Accompagnement à la prise de décision basée sur la donnée",
    ],
    example:
      "Pour les structures ayant besoin de mesurer l'impact réel de leurs projets et de leurs activités.",
  },
  {
    tag: "04",
    title: "Conseil IT multi-secteurs",
    accent: "text-sky",
    bar: "bg-sky",
    points: [
      "Audit et recommandations techniques",
      "Mise en place et maintenance d'outils de gestion (patients, réservations, stocks)",
      "Support et évolution des systèmes existants",
    ],
    example:
      "Un accompagnement technique flexible pour structures de santé, hôtellerie et autres secteurs de service.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="reveal mb-12">
        <p className="font-mono text-sm uppercase tracking-widest text-lime">
          // Nos services
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-600 leading-tight tracking-tight sm:text-5xl">
          Quatre pôles, une exécution cohérente.
        </h2>
      </div>

      <div className="space-y-3">
        {services.map((s, i) => {
          const active = open === i;
          return (
            <div
              key={s.tag}
              className="reveal overflow-hidden rounded-2xl border border-white/10 bg-ink-soft"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <button
                onClick={() => setOpen(active ? -1 : i)}
                className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className={`h-10 w-1 rounded-full ${s.bar}`} />
                <span className={`font-mono text-sm ${s.accent}`}>{s.tag}</span>
                <span className="flex-1 font-display text-xl font-600 sm:text-2xl">
                  {s.title}
                </span>
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full border border-white/15 text-lg transition-transform duration-300 ${
                    active ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 px-6 pb-7 pl-16 sm:grid-cols-[1.4fr_1fr]">
                    <ul className="space-y-2.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-sm text-paper/65"
                        >
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${s.bar}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl border border-white/10 bg-ink p-4">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-paper/40">
                        Exemple de réalisation
                      </p>
                      <p className="mt-2 text-sm italic text-paper/70">
                        {s.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
