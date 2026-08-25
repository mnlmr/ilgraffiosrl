import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Il Graffio S.r.l. | Servizi per la formazione e l'istruzione" },
      {
        name: "description",
        content:
          "Il Graffio S.r.l. offre servizi educativi e formativi con professionalità e affidabilità. Scopri il servizio di Doposcuola e supporto allo studio.",
      },
      {
        property: "og:title",
        content: "Il Graffio S.r.l. | Servizi per la formazione e l'istruzione",
      },
      {
        property: "og:description",
        content:
          "Il Graffio S.r.l. offre servizi educativi e formativi con professionalità e affidabilità. Scopri il servizio di Doposcuola e supporto allo studio.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero — banner 16:9 con strisce verticali ton-sur-ton */}
      <section className="hero-stripes text-primary-foreground">
        <div className="mx-auto flex min-h-[26rem] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:aspect-video md:min-h-0">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
            Il Graffio S.r.l.
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight tracking-wide sm:text-4xl lg:text-5xl">
            Servizi per la formazione e l&rsquo;istruzione
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-80 sm:text-base">
            Una realtà solida e affidabile, dedicata ai servizi educativi e al
            supporto alla crescita scolastica degli studenti.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/doposcuola"
              className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Scopri il Doposcuola
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Presentazione istituzionale */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            Un impegno concreto: la formazione
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Il Graffio S.r.l. è una società che opera nel settore dei servizi
            per la formazione e l&rsquo;istruzione. Lavoriamo ogni giorno con
            serietà e trasparenza per offrire agli studenti e alle loro
            famiglie un punto di riferimento affidabile nel percorso
            scolastico.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            La nostra offerta formativa nasce da un&rsquo;organizzazione
            rigorosa, da personale qualificato e da un&rsquo;attenzione
            costante alla qualità del servizio: valori che ci contraddistinguono
            e che guidano ogni nostra attività.
          </p>
        </div>
      </section>

      {/* Riquadro riassuntivo — Doposcuola */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Il nostro servizio
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-wide text-card-foreground sm:text-3xl">
                Doposcuola
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Un servizio di doposcuola e supporto allo studio per studenti
                della scuola primaria e secondaria: organizzazione del lavoro
                quotidiano, metodo di studio e accompagnamento alla crescita
                scolastica.
              </p>
            </div>
            <Link
              to="/doposcuola"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Vai al servizio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
