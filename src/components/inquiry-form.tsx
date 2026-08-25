import type { FormEvent } from "react";
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
export function InquiryForm({ showPhone = false, submitLabel }: InquiryFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("Richiesta inviata", {
      description:
        "Grazie per averci contattato. Il nostro team ti risponderà al più presto.",
    });
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

      <div>
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
          className={inputClass}
        />
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
