import projectMaci from "../assets/project-maci.jpg";
import projectClinic from "../assets/project-clinic.jpg";
import projectFlash from "../assets/project-flash225.jpg";
import projectDatapulse from "../assets/project-datapulse.jpg";
import projectInov from "../assets/project-inovci.jpg";

const projects = [
  {
    img: projectMaci,
    sector: "Secteur éducatif",
    title: "Plateforme de gestion scolaire",
    text: "Application d'administration scolaire complète en français : gestion des admissions, programmes, messagerie, avec accès selon les rôles des utilisateurs.",
    tags: ["Web app", "Gestion scolaire", "Rôles"],
    accent: "orange" as const,
    orientation: "landscape" as const,
  },
  {
    img: projectClinic,
    sector: "Secteur santé",
    title: "Logiciel de gestion clinique",
    text: "Plateforme de suivi des constantes en temps réel pour une paraclinique : saisie tablette par les infirmiers, alertes automatiques, connexion multi-rôles (médecin, archiviste, secrétaire, facturier).",
    tags: ["Santé", "Temps réel", "Multi-rôles"],
    accent: "teal" as const,
    orientation: "landscape" as const,
  },
  {
    img: projectFlash,
    sector: "Application mobile",
    title: "Réseau social & annonces locales",
    text: "Application mobile de rencontres et d'annonces géolocalisées couvrant 13 communes d'Abidjan et 43 villes de Côte d'Ivoire. Système de wallet intégré, chat et studio de contenu.",
    tags: ["Mobile", "Géolocalisation", "Chat"],
    accent: "lime" as const,
    orientation: "portrait" as const,
  },
  {
    img: projectDatapulse,
    sector: "SaaS B2B",
    title: "Centre de contrôle marché",
    text: "Plateforme SaaS sécurisée de veille et d'intelligence marché : espace entreprise, surveillance concurrentielle, dashboard de données et gestion d'organisations multi-utilisateurs.",
    tags: ["SaaS", "Data", "B2B"],
    accent: "sky" as const,
    orientation: "landscape" as const,
  },
  {
    img: projectInov,
    sector: "Marketplace & livraison",
    title: "Plateforme de livraison locale",
    text: "Marketplace de mise en relation entre commerces locaux (restaurants, boutiques) et clients, avec gestion de contenu, suivi de commandes et livraison partout en Côte d'Ivoire.",
    tags: ["Marketplace", "E-commerce", "Livraison"],
    accent: "orange" as const,
    orientation: "landscape" as const,
  },
];

const accentColors = {
  orange: {
    text: "text-orange",
    border: "border-orange/30",
    bg: "bg-orange/10",
    glow: "group-hover:shadow-orange/15",
    dot: "bg-orange",
  },
  teal: {
    text: "text-teal",
    border: "border-teal/30",
    bg: "bg-teal/10",
    glow: "group-hover:shadow-teal/15",
    dot: "bg-teal",
  },
  lime: {
    text: "text-lime",
    border: "border-lime/30",
    bg: "bg-lime/10",
    glow: "group-hover:shadow-lime/15",
    dot: "bg-lime",
  },
  sky: {
    text: "text-sky",
    border: "border-sky/30",
    bg: "bg-sky/10",
    glow: "group-hover:shadow-sky/15",
    dot: "bg-sky",
  },
};

function ProjectCard({
  p,
  i,
  layout,
}: {
  p: (typeof projects)[0];
  i: number;
  layout: "featured" | "grid";
}) {
  const c = accentColors[p.accent];
  const isFeatured = layout === "featured";
  const isPortrait = p.orientation === "portrait";

  if (isFeatured) {
    return (
      <article
        className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft transition-all duration-500 hover:border-white/20 ${c.glow} hover:shadow-2xl`}
        style={{ transitionDelay: `${i * 100}ms` }}
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-soft/80 z-10 hidden lg:block" />
            <img
              src={p.img}
              alt={p.title}
              className={`h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                isPortrait ? "max-h-[500px] object-contain bg-ink p-4" : "min-h-[320px]"
              }`}
            />
          </div>
          <div className="relative flex flex-col justify-center p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full ${c.dot}`} />
              <span className={`font-mono text-xs uppercase tracking-widest ${c.text}`}>
                {p.sector}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-600 leading-tight sm:text-4xl">
              {p.title}
            </h3>
            <p className="mt-4 leading-relaxed text-paper/55">{p.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3 py-1 font-mono text-[11px] ${c.border} ${c.bg} ${c.text}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-soft transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${c.glow} hover:shadow-2xl`}
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent z-10" />
        <img
          src={p.img}
          alt={p.title}
          className={`w-full transition-transform duration-700 group-hover:scale-105 ${
            isPortrait
              ? "h-[400px] object-contain bg-ink/50 p-3"
              : "h-[220px] object-cover object-top"
          }`}
        />
      </div>
      <div className="relative p-6">
        <div className="flex items-center gap-3">
          <span className={`h-2 w-2 rounded-full ${c.dot}`} />
          <span className={`font-mono text-xs uppercase tracking-widest ${c.text}`}>
            {p.sector}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-600">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-paper/55">{p.text}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-3 py-1 font-mono text-[11px] ${c.border} ${c.bg} ${c.text}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="realisations" className="relative border-t border-white/10 bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="reveal mb-6 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-widest text-sky">
            // Nos réalisations
          </p>
          <h2 className="mt-3 font-display text-4xl font-600 leading-tight tracking-tight sm:text-5xl">
            Des projets concrets, des résultats mesurables.
          </h2>
          <p className="mt-4 text-paper/50 leading-relaxed">
            Quelques-unes de nos réalisations dans différents secteurs d'activité
            en Côte d'Ivoire et à l'international.
          </p>
        </div>

        {/* Featured project — first one large */}
        <div className="mt-12">
          <ProjectCard p={projects[0]} i={0} layout="featured" />
        </div>

        {/* Grid for the rest */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.slice(1, 3).map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i + 1} layout="grid" />
          ))}
        </div>

        {/* Second featured */}
        <div className="mt-6">
          <ProjectCard p={projects[3]} i={3} layout="featured" />
        </div>

        {/* Last one */}
        <div className="mt-6">
          <ProjectCard p={projects[4]} i={4} layout="featured" />
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <p className="text-paper/50">Vous avez un projet similaire ?</p>
          <a
            href="https://wa.me/2250101322783"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange/25"
          >
            Discutons de votre projet →
          </a>
        </div>
      </div>
    </section>
  );
}
