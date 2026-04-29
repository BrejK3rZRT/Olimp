import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  icon?: LucideIcon;
  highlight?: boolean;
  progress?: number; // 0-100
}

export function StatCard({ label, value, delta, hint, icon: Icon, highlight, progress }: StatCardProps) {
  return (
    <div
      className={`group relative p-6 border transition-colors overflow-hidden ${
        highlight
          ? "bg-primary/10 border-primary/30 backdrop-blur-xl shadow-[inset_0_0_60px_hsl(var(--primary)/0.08)]"
          : "bg-matte/60 border-white/[0.08] backdrop-blur-xl hover:border-primary/40"
      }`}
    >
      {/* top edge highlight */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
      {highlight && (
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="flex items-start justify-between mb-4 relative z-10">
        <h3
          className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
            highlight ? "text-primary" : "text-chalk"
          }`}
        >
          {label}
        </h3>
        {Icon && <Icon className={`size-4 ${highlight ? "text-primary" : "text-chalk/60"}`} strokeWidth={1.5} />}
      </div>

      <div className="flex items-baseline gap-3 relative z-10">
        <span
          className={`font-display text-6xl leading-none tabular-nums transition-colors ${
            highlight ? "text-foreground" : "text-foreground group-hover:text-primary"
          }`}
        >
          {value}
        </span>
        {delta && (
          <span className="text-xs text-success font-bold tracking-widest flex items-center gap-1">
            <TrendingUp className="size-3" strokeWidth={2} />
            {delta}
          </span>
        )}
      </div>

      {progress !== undefined && (
        <div className="mt-5 w-full h-1 bg-white/[0.06] relative z-10">
          <div
            className={`h-full ${highlight ? "bg-primary shadow-[0_0_10px_hsl(var(--primary))]" : "bg-foreground"}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      )}

      {hint && (
        <p className="mt-4 text-[10px] text-chalk uppercase tracking-widest relative z-10">{hint}</p>
      )}
    </div>
  );
}