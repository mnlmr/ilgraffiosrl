import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { InquiryForm } from "../components/inquiry-form";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti | Il Graffio S.r.l." },
      {
        name: "description",
        content:
          "Contatta Il Graffio S.r.l.: compila il modulo o raggiungici ai recapiti indicati per informazioni sui nostri servizi di formazione.",
      },
      { property: "og:title", content: "Contatti | Il Graffio S.r.l." },
      {
        property: "og:description",
        content:
          "Contatta Il Graffio S.r.l.: compila il modulo o raggiungici ai recapiti indicati per informazioni sui nostri servizi di formazione.",
      },
    ],
  }),
  component: ContattiPage,
});

const COMPANY_DETAILS = [
  {
    icon: MapPin,
    label: "Indirizzo",
    lines: ["Via delle Arti 12", "20121 Milano (MI)"],
  },
  {
    icon: Phone,
    label: "Telefono",
    lines: ["+39 02 0000 0000"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@ilgraffiosrl.it"],
  },
] as const;

function ContattiPage() {
  return (
    <>
      {/* Intestazione pagina */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Il Graffio S.r.l.
          </p>
          <h1 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            Contatti
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Per informazioni sui nostri servizi compila il modulo oppure
            utilizza i recapiti societari: ti risponderemo al più presto.
          </p>
        </div>
      </section>

      {/* Modulo + dati societari */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl tracking-wide text-card-foreground">
              Scrivici
            </h2>
            <div className="mt-6">
              <InquiryForm submitLabel="Invia messaggio" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl tracking-wide text-foreground">
              Dati societari
            </h2>
            <p className="mt-2 text-sm font-medium text-foreground">
              Il Graffio S.r.l.
            </p>

            <dl className="mt-6 space-y-6">
              {COMPANY_DETAILS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary">
                    <item.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </dt>
                    {item.lines.map((line) => (
                      <dd key={line} className="mt-1 text-sm text-foreground">
                        {line}
                      </dd>
                    ))}
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-lg border border-border bg-secondary p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Il Graffio S.r.l. — Società a responsabilità limitata · P.IVA
                00000000000
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
