const approach = [
  "Écoute et diagnostic avant toute proposition technique",
  "Livrables professionnels et documentés à chaque étape",
  "Validation progressive : rien n'est figé avant votre accord",
  "Transparence sur les coûts, les délais et le périmètre",
];

const stats = [
  { k: "Abidjan", v: "Cocody-Akouedo, Côte d'Ivoire", label: "Notre base" },
  { k: "5+", v: "BTP · Santé · Hôtellerie · Événementiel · Éducation", label: "Secteurs livrés" },
  { k: "Full-stack", v: "De la stratégie à la mise en production", label: "Notre approche" },
];

export default function About() {
  return (
    <section id="apropos" className="relative border-y border-white/10 bg-ink-soft/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="reveal">
          <p className="font-mono text-sm uppercase tracking-widest text-teal">
            // Qui sommes-nous
          </p>
          <h2 className="mt-3 font-display text-4xl font-600 leading-tight tracking-tight sm:text-5xl">
            Penser stratégie{" "}
            <span className="italic text-teal">et</span> exécuter techniquement.
          </h2>
          <div className="mt-7 space-y-5 text-paper/60 leading-relaxed">
            <p>
              BYS Group Consulting est un cabinet ivoirien multi-services né d'un
              constat simple : les entreprises locales ont besoin d'un partenaire
              capable de concevoir la stratégie ET de la construire — sans
              multiplier les prestataires.
            </p>
            <p>
              Basés à Cocody-Akouedo, nous intervenons à Abidjan et dans les
              grandes villes de Côte d'Ivoire, pour des structures allant de la
              PME familiale au groupe multi-activités.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {approach.map((a, i) => (
              <li
                key={i}
                className="reveal flex items-start gap-3 text-sm text-paper/75"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal/15 font-mono text-[10px] text-teal">
                  ✓
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className="reveal group flex items-center gap-6 rounded-2xl border border-white/10 bg-ink p-6 transition-colors hover:border-white/25"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-display text-3xl font-700 text-orange transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                {s.k}
              </span>
              <div className="border-l border-white/10 pl-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-paper/40">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-paper/80">{s.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
