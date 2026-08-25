# Sito vetrina — Il Graffio S.r.l.

Sito aziendale minimale, elegante e istituzionale per Il Graffio S.r.l., con presentazione del servizio di Doposcuola. Contenuti interamente in italiano, tono formale e sobrio.

## Struttura (4 pagine + header/footer condivisi)

```text
/             Home       Hero istituzionale + riquadro con CTA verso Doposcuola
/doposcuola   Doposcuola Descrizione del servizio + modulo richiesta informazioni
/chi-siamo    Chi Siamo  Presentazione istituzionale e valori aziendali
/contatti     Contatti   Modulo essenziale + dati societari
```

- **Header fisso**: logo testuale "Il Graffio S.r.l." (link alla Home) e menu a 3 voci: Doposcuola, Chi Siamo, Contatti. Versione mobile con menu a comparsa.
- **Footer minimale**: copyright Il Graffio S.r.l., P.IVA placeholder, note legali e link alle pagine.

## Design

- **Palette**: antracite, nero e bianco (token semantici dedicati, nessun colore hardcoded).
- **Tipografia**: titoli in font stile College/Varsity (slab serif strutturato, es. "Graduate" da Google Fonts); testo in sans-serif pulito e professionale (es. "Archivo").
- **Hero**: banner in rapporto 16:9 con fantasia a strisce verticali ton-sur-ton grigio scuro/nero, realizzata in CSS puro (sfumature ripetute), con titolo istituzionale sovrapposto.
- Stile complessivo: corporate, essenziale, ampi spazi bianchi, bordi netti, nessun effetto superfluo.

## Contenuti delle pagine

- **Home**: titolo istituzionale, breve testo su affidabilità e servizi educativi/formativi; riquadro sintetico con pulsante verso la pagina Doposcuola.
- **Doposcuola**: descrizione formale del servizio di doposcuola e affiancamento allo studio; tre focus (organizzazione dello studio, metodo di lavoro, supporto alla crescita scolastica); solo i termini "Doposcuola" e "Supporto allo studio", nessun riferimento a ripetizioni private o brand terzi; modulo "Richiedi informazioni" (Nome, Email, Telefono, Messaggio).
- **Chi Siamo**: presentazione istituzionale come realtà dedita ai servizi per la formazione e l'istruzione; sintesi dei valori (professionalità, attenzione al percorso didattico, qualità dell'offerta).
- **Contatti**: modulo essenziale (Nome, Email, Messaggio) + blocco dati societari (email, telefono, indirizzo, dicitura S.r.l.) con dati placeholder chiaramente sostituibili.

## Moduli (dimostrativi)

Validazione lato client e messaggio di conferma a schermo all'invio; nessun dato viene inviato o salvato (nessun backend, come concordato).

## SEO

Ogni pagina con metadati dedicati in italiano: title, description, og:title/og:description unici; un solo H1 per pagina; HTML semantico.

## Dettagli tecnici

- Route: `src/routes/index.tsx`, `doposcuola.tsx`, `chi-siamo.tsx`, `contatti.tsx` (TanStack Router, ognuna con `head()` proprio).
- Componenti condivisi: `SiteHeader` e `SiteFooter` in `src/components/`, montati in `src/routes/__root.tsx` attorno a `<Outlet />`.
- Font caricati via `<link>` in `__root.tsx`; palette e token tipografici definiti in `src/styles.css` (formato oklch).
- Strisce dell'hero con `repeating-linear-gradient` in CSS — nessuna immagine generata.
- Conferme moduli con il componente toast (sonner) già disponibile.
- Aggiornati title/description di default in `__root.tsx` (rimosso "Lovable App").
