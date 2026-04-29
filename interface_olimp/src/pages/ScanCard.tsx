import { Activity, CheckCircle2, ScanLine } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const ScanCard = () => (
  <PageShell
    eyebrow="Bramka 01 · Recepcja"
    title="Skaner Karty"
    description="Szybka weryfikacja wejścia klubowicza po RFID lub numerze karty."
    icon={ScanLine}
  >
    <div className="grid grid-cols-2 gap-6 items-stretch">
      <div className="bg-background/60 border border-primary/30 min-h-96 flex flex-col items-center justify-center text-center shadow-[0_0_32px_hsl(var(--primary)/0.12)]">
        <Activity className="size-16 text-primary mb-6 animate-pulse" strokeWidth={1.25} />
        <p className="font-display text-5xl tracking-wide">Gotowy do skanu</p>
        <p className="text-xs text-chalk uppercase tracking-[0.25em] font-bold mt-3">Przyłóż kartę do czytnika</p>
      </div>
      <div className="space-y-4">
        <input className="w-full bg-background/60 border border-white/[0.08] px-5 py-4 text-sm outline-none focus:border-primary/60" placeholder="Wpisz numer karty ręcznie" />
        <div className="bg-success/10 border border-success/30 p-5">
          <CheckCircle2 className="size-5 text-success mb-4" strokeWidth={1.5} />
          <p className="font-bold uppercase tracking-wide">Status systemu: aktywny</p>
          <p className="text-sm text-chalk mt-1">Czytnik RFID i bramka wejściowa działają poprawnie.</p>
        </div>
      </div>
    </div>
  </PageShell>
);

export default ScanCard;