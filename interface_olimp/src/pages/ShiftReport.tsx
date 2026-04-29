import { Banknote, ReceiptText, Zap } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const rows = [
  ["Sprzedaż karnetów", "24", "8 240 PLN"],
  ["Wejścia jednorazowe", "31", "1 395 PLN"],
  ["Produkty recepcji", "18", "620 PLN"],
];

const ShiftReport = () => (
  <PageShell
    eyebrow="Zamknięcie kasy"
    title="Raport Zmiany"
    description="Podsumowanie transakcji i gotówki przed przekazaniem stanowiska kolejnej zmianie."
    icon={Zap}
  >
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-background/60 border border-white/[0.08]">
        {rows.map(([name, count, total]) => (
          <div key={name} className="grid grid-cols-3 gap-4 p-5 border-b border-white/[0.08] last:border-b-0">
            <p className="font-bold uppercase tracking-wide">{name}</p>
            <p className="text-chalk tabular-nums">{count} transakcji</p>
            <p className="text-primary font-bold tabular-nums text-right">{total}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary text-primary-foreground p-6 flex flex-col justify-between shadow-[0_0_28px_hsl(var(--primary)/0.35)]">
        <ReceiptText className="size-7" strokeWidth={1.5} />
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-bold opacity-80">Razem</p>
          <p className="font-display text-5xl tracking-wide mt-2">10 255 PLN</p>
        </div>
        <button className="bg-background text-foreground p-3 text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2">
          <Banknote className="size-4" strokeWidth={1.5} /> Zamknij zmianę
        </button>
      </div>
    </div>
  </PageShell>
);

export default ShiftReport;