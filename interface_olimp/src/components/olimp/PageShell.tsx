import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, icon: Icon, children }: PageShellProps) {
  return (
    <section className="glass-panel p-8 min-h-[620px]" aria-labelledby="page-shell-title">
      <div className="flex items-start justify-between gap-8 border-b border-white/[0.08] pb-8 mb-8">
        <div>
          <p className="text-[10px] text-primary uppercase tracking-[0.25em] font-bold mb-3">{eyebrow}</p>
          <h2 id="page-shell-title" className="font-display text-4xl tracking-wide">
            {title}
          </h2>
          <p className="text-sm text-chalk mt-2 max-w-2xl">{description}</p>
        </div>
        <div className="size-14 shrink-0 border border-primary/30 bg-primary/10 flex items-center justify-center shadow-[0_0_24px_hsl(var(--primary)/0.2)]">
          <Icon className="size-6 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {children}
    </section>
  );
}