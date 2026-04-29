import { CreditCard } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const passes = [
  ["OPEN", "219 PLN", "Pełny dostęp · 30 dni"],
  ["PORANNY", "149 PLN", "Wejścia do 14:00"],
  ["STUDENT", "169 PLN", "Weryfikacja legitymacji"],
  ["WEJŚCIE 1X", "45 PLN", "Jednorazowy dostęp"],
];

const Passes = () => (
  <PageShell
    eyebrow="Sprzedaż i odnowienia"
    title="Karnety"
    description="Lista produktów, szybka sprzedaż i kontrola statusów członkostwa."
    icon={CreditCard}
  >
    <div className="grid grid-cols-4 gap-5">
      {passes.map(([name, price, copy]) => (
        <button key={name} className="p-6 min-h-52 bg-background/60 border border-white/[0.08] hover:border-primary/50 text-left transition-colors">
          <p className="font-display text-4xl tracking-wide">{name}</p>
          <p className="font-display text-5xl text-primary mt-8 tracking-wide">{price}</p>
          <p className="text-xs text-chalk uppercase tracking-widest font-bold mt-2">{copy}</p>
        </button>
      ))}
    </div>
  </PageShell>
);

export default Passes;