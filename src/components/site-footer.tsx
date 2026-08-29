import { Link } from "@tanstack/react-router";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/doposcuola", label: "Doposcuola" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-wide">IL GRAFFIO</p>
            <p className="mt-2 text-xs uppercase tracking-widest opacity-70">
              S.r.l.s. — Servizi per la formazione
            </p>
            <p className="mt-4 max-w-xs text-sm opacity-80">
              Servizi educativi e formativi, con attenzione alla qualità e al
              percorso di crescita di ogni studente.
            </p>
          </div>

          <nav aria-label="Pagine del sito">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-70">
              Pagine
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {PAGES.map((page) => (
                <li key={page.to}>
                  <Link
                    to={page.to}
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-70">
              Contatti
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic opacity-80">
              <p>Il Graffio S.r.l.s.</p>
              <p>Via Fratelli Cairoli 9/D, 23900 Lecco (LC)</p>
              <p>
                <a
                  href="mailto:info@ilgraffiosrl.it"
                  className="underline underline-offset-2 transition-opacity hover:opacity-100"
                >
                  info@ilgraffiosrl.it
                </a>
              </p>
              <p>
                <a
                  href="tel:+393667046791"
                  className="underline underline-offset-2 transition-opacity hover:opacity-100"
                >
                  +39 366 704 6791
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-xs opacity-70">
          <p>
            © 2026 Il Graffio S.r.l.s. — Tutti i diritti riservati · P.IVA
            04288760137
          </p>
        </div>
      </div>
    </footer>
  );
}
