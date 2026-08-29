import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, PenLine, TrendingUp } from "lucide-react";

import { InquiryForm } from "../components/inquiry-form";

export const Route = createFileRoute("/doposcuola")({
  head: () => ({
    meta: [
      { title: "Doposcuola e supporto allo studio | Il Graffio S.r.l.s." },
      {
        name: "description",
        content:
          "Il servizio di Doposcuola de Il Graffio S.r.l.s.: affiancamento allo studio, organizzazione del lavoro quotidiano, metodo e crescita scolastica.",
      },
      {
        property: "og:title",
        content: "Doposcuola e supporto allo studio | Il Graffio S.r.l.s.",
      },
      {
        property: "og:description",
        content:
          "Il servizio di Doposcuola de Il Graffio S.r.l.s.: affiancamento allo studio, organizzazione del lavoro quotidiano, metodo e crescita scolastica.",
      },
    ],
  }),
  component: DoposcuolaPage,
});

const FOCUS_AREAS = [
  {
    icon: CalendarCheck,
    title: "Organizzazione dello studio",
    description:
      "Aiutiamo ogni studente a pianificare il lavoro quotidiano: gestione dei compiti, distribuzione equilibrata del carico di studio e rispetto delle scadenze.",
  },
  {
    icon: PenLine,
    title: "Metodo di lavoro",
    description:
      "Trasmettiamo un metodo di studio efficace e personale: riassumere, schematizzare, ripetere e verificare le proprie conoscenze in autonomia.",
  },
  {
    icon: TrendingUp,
    title: "Crescita scolastica",
    description:
      "Accompagniamo lo studente nel tempo con continuità, con l'obiettivo di consolidare autonomia, sicurezza e risultati nel percorso scolastico.",
  },
] as const;

function DoposcuolaPage() {
  return (
    <>
      {/* Intestazione pagina */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Il Graffio S.r.l.s. — I nostri servizi
          </p>
          <h1 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            Doposcuola
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Il Graffio S.r.l.s. offre un servizio di doposcuola e affiancamento
            allo studio rivolto agli studenti della scuola primaria e
            secondaria. Un supporto pomeridiano strutturato, in piccoli gruppi,
            condotto da personale qualificato.
          </p>
        </div>
      </section>

      {/* Descrizione del servizio */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            Il servizio
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Il doposcuola de Il Graffio S.r.l.s. nasce per offrire agli studenti
            uno spazio ordinato e seguito in cui svolgere i compiti e studiare
            con continuità. Ogni pomeriggio gli studenti sono affiancati da
            tutor che li guidano nell&rsquo;organizzazione del lavoro, nel
            chiarimento dei dubbi e nella preparazione di verifiche e
            interrogazioni.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Il servizio è pensato come un percorso: non si limita al
            completamento dei compiti, ma mira a costruire abitudini di studio
            solide e durature, nel rispetto dei tempi e delle caratteristiche
            di ciascuno studente.
          </p>
        </div>

        {/* Tre focus */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FOCUS_AREAS.map((area) => (
            <article
              key={area.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary">
                <area.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Modulo richiesta informazioni */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
                Richiedi informazioni
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Per conoscere orari, disponibilità e modalità di iscrizione al
                servizio di doposcuola, compila il modulo: il nostro team ti
                ricontatterà al più presto con tutte le informazioni necessarie.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In alternativa, puoi raggiungerci ai recapiti indicati nella
                pagina Contatti.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <InquiryForm showPhone submitLabel="Invia richiesta" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
