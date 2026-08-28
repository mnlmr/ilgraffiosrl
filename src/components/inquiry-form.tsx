import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

type InquiryFormProps = {
  /** Mostra anche il campo Telefono (pagina Doposcuola) */
  showPhone?: boolean;
  submitLabel: string;
};

/**
 * Modulo dimostrativo: validazione lato client e conferma a schermo.
 * Nessun dato viene inviato o salvato.
 */
const EMAIL_DOMAINS = [
  "gmail.com",
  "hotmail.it",
  "outlook.it",
  "alice.it",
  "libero.it",
  "virgilio.it",
  "tiscali.it",
  "fastwebnet.it",
  "tim.it",
  "yahoo.it",
  "live.it",
  "aruba.it",
  "pec.it",
  "protonmail.com",
];

export function InquiryForm({ showPhone = false, submitLabel }: InquiryFormProps) {
  const [email, setEmail] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const atIndex = email.indexOf("@");
  const localPart = atIndex >= 0 ? email.slice(0, atIndex) : email;
  const domainPart = atIndex >= 0 ? email.slice(atIndex + 1) : "";

  const suggestions =
    atIndex >= 0
      ? EMAIL_DOMAINS.filter((domain) => domain.toLowerCase().startsWith(domainPart.toLowerCase())).map(
          (domain) => `${localPart}@${domain}`
        )
      : EMAIL_DOMAINS.map((domain) => `${localPart}@${domain}`);

  useEffect(() => {
    setActiveIndex(0);
  }, [email]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setEmail("");
    setShowSuggestions(false);
    toast.success("Richiesta inviata", {
      description:
        "Grazie per averci contattato. Il nostro team ti risponderà al più presto.",
    });
  }

  function applySuggestion(value: string) {
    setEmail(value);
    setShowSuggestions(false);
  }

  function handleEmailKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % suggestions.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
        break;
      case "Enter":
        event.preventDefault();
        if (suggestions[activeIndex]) {
          applySuggestion(suggestions[activeIndex]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className={labelClass}>
          Nome e cognome *
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Mario Rossi"
          className={inputClass}
        />
      </div>

      <div ref={wrapperRef} className="relative">
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="mario.rossi@esempio.it"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleEmailKeyDown}
          className={inputClass}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-card py-1 shadow-lg"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                role="option"
                aria-selected={index === activeIndex}
                className={`cursor-pointer px-3 py-2 text-sm ${
                  index === activeIndex
                    ? "bg-primary text-primary-foreground"
                    : "text-card-foreground hover:bg-secondary"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  applySuggestion(suggestion);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {showPhone && (
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+39 333 000 0000"
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor="messaggio" className={labelClass}>
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Scrivi qui la tua richiesta…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {submitLabel}
      </button>
    </form>
  );
}
