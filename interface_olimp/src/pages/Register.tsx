import { CreditCard, Fingerprint, UserPlus } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const fields = ["Imię i nazwisko", "Telefon", "E-mail", "Data urodzenia"];

const Register = () => (
  <PageShell
    eyebrow="Nowy rekord klienta"
    title="Rejestracja Klienta"
    description="Formularz recepcji do założenia profilu, przypisania karnetu i wydania karty dostępu."
    icon={UserPlus}
  >
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 grid grid-cols-2 gap-4">
        {fields.map((field) => (
          <label key={field} className="block">
            <span className="text-[10px] text-chalk uppercase tracking-[0.2em] font-bold">{field}</span>
            <input className="mt-2 w-full bg-background/60 border border-white/[0.08] px-4 py-3 text-sm outline-none focus:border-primary/60" />
          </label>
        ))}
        <label className="col-span-2 block">
          <span className="text-[10px] text-chalk uppercase tracking-[0.2em] font-bold">Notatka recepcji</span>
          <textarea className="mt-2 h-32 w-full resize-none bg-background/60 border border-white/[0.08] px-4 py-3 text-sm outline-none focus:border-primary/60" />
        </label>
      </div>

      <div className="space-y-4">
        {[
          { icon: CreditCard, title: "Karnet OPEN", copy: "219 PLN · pełny dostęp" },
          { icon: Fingerprint, title: "Karta RFID", copy: "Gotowa do aktywacji" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.title} className="w-full p-5 text-left bg-background/60 border border-white/[0.08] hover:border-primary/50 transition-colors">
              <Icon className="size-5 text-primary mb-4" strokeWidth={1.5} />
              <p className="font-display text-2xl tracking-wide">{item.title}</p>
              <p className="text-xs text-chalk uppercase tracking-widest font-bold mt-1">{item.copy}</p>
            </button>
          );
        })}
        <button className="w-full bg-primary text-primary-foreground p-4 font-bold uppercase tracking-[0.2em] text-xs shadow-[0_0_24px_hsl(var(--primary)/0.35)]">
          Zapisz klienta
        </button>
      </div>
    </div>
  </PageShell>
);

export default Register;