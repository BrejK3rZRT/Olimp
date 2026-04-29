import { BarChart3, TrendingUp, Users, Wallet } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const metrics = [
  { label: "Przychód 30 dni", value: "184 920 PLN", icon: Wallet },
  { label: "Średnia frekwencja", value: "71%", icon: Users },
  { label: "Odnowienia", value: "94%", icon: TrendingUp },
];

const Reports = () => (
  <PageShell
    eyebrow="Analityka · Ostatnie 30 dni"
    title="Raporty"
    description="Podsumowanie przychodów, frekwencji i obciążenia klubu dla recepcji oraz managera."
    icon={BarChart3}
  >
    <div className="grid grid-cols-3 gap-5 mb-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label} className="bg-background/60 border border-white/[0.08] p-6">
            <Icon className="size-5 text-primary mb-6" strokeWidth={1.5} />
            <p className="text-[10px] text-chalk uppercase tracking-[0.2em] font-bold">{metric.label}</p>
            <p className="font-display text-4xl tracking-wide mt-2">{metric.value}</p>
          </div>
        );
      })}
    </div>
    <div className="bg-background/50 border border-white/[0.08] p-6 h-72 flex items-end gap-3">
      {[42, 58, 51, 76, 68, 84, 79, 91, 73, 88, 95, 82].map((height, index) => (
        <div key={index} className="flex-1 bg-foreground/10 flex items-end">
          <div className="w-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]" style={{ height: `${height}%` }} />
        </div>
      ))}
    </div>
  </PageShell>
);

export default Reports;