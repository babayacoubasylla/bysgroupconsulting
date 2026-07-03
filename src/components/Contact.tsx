import { useState } from "react";

const coords = [
  { icon: "📍", label: "Adresse", value: "Cocody-Akouedo, Abidjan, Côte d'Ivoire", href: null },
  { icon: "💬", label: "WhatsApp Business", value: "+225 0101 322 783", href: "https://wa.me/2250101322783" },
  { icon: "✉️", label: "Email", value: "contact@bysgroupconsulting.com", href: "mailto:contact@bysgroupconsulting.com" },
  {
    icon: "🔗",
    label: "Facebook",
    value: "Bys Group Consulting",
    href: "https://www.facebook.com/people/Bys-Group-Consulting/100067605797171/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    secteur: "",
    besoin: "",
    budget: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Bonjour BYS Group, je suis ${form.nom || "—"}.`,
      form.entreprise && `Structure : ${form.entreprise}`,
      form.secteur && `Secteur : ${form.secteur}`,
      form.besoin && `Besoin : ${form.besoin}`,
      form.budget && `Budget indicatif : ${form.budget}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/2250101322783?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-paper placeholder-paper/30 outline-none transition-colors focus:border-orange/60 focus:bg-ink-soft";

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange/15 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="reveal">
          <p className="font-mono text-sm uppercase tracking-widest text-orange">
            // Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-600 leading-tight tracking-tight sm:text-5xl">
            Discutons de votre projet.
          </h2>
          <p className="mt-5 max-w-md text-paper/60 leading-relaxed">
            Que vous ayez une idée précise ou un simple besoin à clarifier, nous
            prenons le temps d'échanger avant de vous proposer une solution.
          </p>

          <div className="mt-9 space-y-3">
            {coords.map((c) => {
              const Inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg">
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-paper/40">
                      {c.label}
                    </p>
                    <p className="text-sm text-paper/85">{c.value}</p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition-colors hover:border-white/10 hover:bg-white/5"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4 p-2">
                  {Inner}
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="reveal rounded-3xl border border-white/10 bg-ink-soft/70 p-7 backdrop-blur sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={field} placeholder="Nom *" required value={form.nom} onChange={set("nom")} />
            <input className={field} placeholder="Entreprise / Structure" value={form.entreprise} onChange={set("entreprise")} />
          </div>
          <input className={`${field} mt-4`} placeholder="Secteur d'activité" value={form.secteur} onChange={set("secteur")} />
          <textarea
            className={`${field} mt-4 resize-none`}
            rows={4}
            placeholder="Description du besoin *"
            required
            value={form.besoin}
            onChange={set("besoin")}
          />
          <input className={`${field} mt-4`} placeholder="Budget indicatif (optionnel)" value={form.budget} onChange={set("budget")} />

          <button
            type="submit"
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-4 font-semibold text-white transition-all duration-300 hover:bg-lime hover:text-ink"
          >
            Envoyer via WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <p className="mt-3 text-center font-mono text-[11px] text-paper/35">
            Votre message s'ouvre pré-rempli dans WhatsApp Business.
          </p>
        </form>
      </div>
    </section>
  );
}
