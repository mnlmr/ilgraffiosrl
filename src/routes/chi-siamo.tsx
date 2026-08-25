import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo | Il Graffio S.r.l." },
      {
        name: "description",
        content:
          "Il Graffio S.r.l. è una realtà dedita ai servizi per la formazione e l'istruzione. Scopri la società e i valori che guidano il nostro lavoro.",
      },
      { property: "og:title", content: "Chi Siamo | Il Graffio S.r.l." },
      {
        property: "og:description",
        content:
          "Il Graffio S.r.l. è una realtà dedita ai servizi per la formazione e l'istruzione. Scopri la società e i valori che guidano il nostro lavoro.",
      },
    ],
  }),
  component: ChiSiamoPage,
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Professionalità",
    description:
      "Un'organizzazione rigorosa e personale qualificato: ogni attività è gestita con serietà, trasparenza e rispetto degli impegni presi.",
  },
  {
    icon: Compass,
    title: "Attenzione al percorso didattico",
    description:
      "Seguiamo ogni studente nel suo percorso, con un accompagnamento costante che rispetta i tempi e le caratteristiche di ciascuno.",
  },
  {
    icon: Award,
    title: "Qualità dell'offerta",
    description:
      "Progettiamo i nostri servizi con cura e li miglioriamo nel tempo, per garantire un'offerta formativa sempre all'altezza delle aspettative.",
  },
] as const;

function ChiSiamoPage() {
  return (
    <>
      {/* Intestazione pagina */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            La società
          </p>
          <h1 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            Chi Siamo
          </h1>
        </div>
      </section>

      {/* Presentazione istituzionale */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            Una realtà dedita alla formazione
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Il Graffio S.r.l. è una società che opera nel campo dei servizi
            per la formazione e l&rsquo;istruzione. Nata dall&rsquo;esperienza
            di professionisti del settore educativo, la società si propone
            come un interlocutore solido e affidabile per studenti e famiglie.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            La nostra attività principale è il servizio di doposcuola e
            supporto allo studio: un impegno quotidiano che mettiamo al
            servizio della crescita scolastica degli studenti, con
            un&rsquo;attenzione particolare alla qualità e alla continuità
            dell&rsquo;offerta formativa.
          </p>
        </div>

        {/* Valori */}
        <div className="mt-16">
          <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            I nostri valori
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary">
                  <value.icon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-border bg-card p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Vuoi saperne di più sulle nostre attività o sul servizio di
              doposcuola? Siamo a tua disposizione.
            </p>
            <Link
              to="/contatti"
              className="inline-flex shrink-0 items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
