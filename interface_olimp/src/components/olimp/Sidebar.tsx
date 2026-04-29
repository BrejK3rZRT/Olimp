import { LayoutGrid, UserPlus, CalendarRange, CreditCard, BarChart3, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const mainNav = [
  { to: "/", label: "PANEL RECEPCJI", icon: LayoutGrid, end: true },
  { to: "/zarejestruj", label: "ZAREJESTRUJ KLIENTA", icon: UserPlus },
  { to: "/grafik", label: "GRAFIK ZAJĘĆ", icon: CalendarRange },
  { to: "/karnety", label: "KARNETY", icon: CreditCard },
];

const secondaryNav = [
  { to: "/raporty", label: "RAPORTY", icon: BarChart3 },
  { to: "/ustawienia", label: "USTAWIENIA", icon: Settings },
];

export function OlimpSidebar() {
  return (
    <aside className="w-72 shrink-0 bg-matte/80 backdrop-blur-2xl border-r border-white/[0.08] flex flex-col justify-between z-10">
      <div className="p-8">
        <div className="flex items-baseline gap-2">
          <h1 className="font-display text-7xl tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-white to-chalk/30 select-none leading-none">
            OLIMP
          </h1>
        </div>
        <p className="text-[10px] text-chalk/60 uppercase tracking-[0.25em] mt-2 font-medium">
          Klub Fitness · v4.2
        </p>
        <div className="mt-3 h-px w-full bg-white/[0.08] relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-primary w-1/3 shadow-[0_0_12px_hsl(var(--primary))]" />
        </div>

        <nav className="mt-12 flex flex-col gap-1">
          <p className="text-[10px] text-chalk/50 uppercase tracking-[0.2em] mb-4 font-bold">System Główny</p>
          {mainNav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-3 border-l-2 text-sm tracking-wider font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/5 border-primary text-foreground shadow-[inset_24px_0_24px_-20px_hsl(var(--primary)/0.4)]"
                      : "border-transparent text-chalk hover:bg-white/[0.03] hover:text-foreground hover:border-white/20"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">
                      <Icon className="size-4" strokeWidth={1.5} />
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] animate-pulse" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}

          <p className="text-[10px] text-chalk/50 uppercase tracking-[0.2em] mb-4 mt-8 font-bold">Zarządzanie</p>
          {secondaryNav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 border-l-2 text-sm tracking-wider font-medium transition-all ${
                    isActive
                      ? "bg-white/5 border-primary text-foreground"
                      : "border-transparent text-chalk hover:bg-white/[0.03] hover:text-foreground"
                  }`
                }
              >
                <Icon className="size-4" strokeWidth={1.5} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-white/[0.08] bg-background/40">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-sm bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 flex items-center justify-center font-display text-lg text-foreground shadow-[0_0_16px_hsl(var(--primary)/0.3)]">
            AN
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold uppercase tracking-wide truncate">A. Nowak</p>
            <p className="text-[10px] text-primary tracking-[0.2em] uppercase">Recepcja · Zmiana 2</p>
          </div>
          <button className="text-chalk hover:text-foreground transition-colors" aria-label="Wyloguj">
            <LogOut className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </aside>
  );
}