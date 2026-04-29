import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const PAGE_META: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
  "/": {
    eyebrow: "Baza danych zsynchronizowana · 18 bramek aktywnych",
    title: "Centrum Dowodzenia",
    subtitle: "Witaj z powrotem, Aleksandro. Klub pracuje na 73% pojemności.",
  },
  "/zarejestruj": {
    eyebrow: "Nowy rekord klienta",
    title: "Rejestracja Klienta",
    subtitle: "Wprowadź dane, wybierz karnet i wydaj kartę dostępu.",
  },
  "/grafik": {
    eyebrow: "Tydzień 43 · Październik 2024",
    title: "Grafik Zajęć",
    subtitle: "Plan grupowych treningów oraz dostępność trenerów.",
  },
  "/karnety": {
    eyebrow: "Sprzedaż i odnowienia",
    title: "Karnety i Płatności",
    subtitle: "Zarządzaj produktami, cennikiem i statusem klubowiczów.",
  },
  "/raporty": {
    eyebrow: "Analityka · Ostatnie 30 dni",
    title: "Raporty",
    subtitle: "Frekwencja, przychody i wykorzystanie obiektu.",
  },
  "/ustawienia": {
    eyebrow: "Konfiguracja systemu",
    title: "Ustawienia",
    subtitle: "Profil klubu, integracje i uprawnienia.",
  },
  "/skanuj": {
    eyebrow: "Bramka 01 · Recepcja",
    title: "Skaner Karty",
    subtitle: "Przyłóż kartę RFID lub wpisz numer ręcznie.",
  },
  "/raport-zmiany": {
    eyebrow: "Zamknięcie kasy",
    title: "Raport Zmiany",
    subtitle: "Podsumowanie utargu, transakcji i przekazania zmiany.",
  },
};

export function TopBar() {
  const [now, setNow] = useState(new Date());
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? PAGE_META["/"];

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const time = now.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const date = now
    .toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long" })
    .toUpperCase();

  return (
    <header className="flex justify-between items-end mb-10">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="size-2 bg-success rounded-full shadow-[0_0_10px_hsl(var(--success)/0.6)] animate-pulse" />
          <p className="text-chalk text-[10px] uppercase tracking-[0.25em] font-bold">{meta.eyebrow}</p>
        </div>
        <h1 className="font-display text-5xl tracking-wide">{meta.title}</h1>
        <p className="text-chalk text-sm mt-2 max-w-xl">{meta.subtitle}</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-chalk" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Szukaj klienta lub karnetu..."
            className="bg-matte/60 border border-white/[0.08] backdrop-blur-md pl-10 pr-4 py-2.5 w-72 text-sm text-foreground placeholder:text-chalk/60 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] transition-all"
          />
        </div>
        <div className="text-right">
          <p className="font-display text-4xl text-foreground tabular-nums">{time}</p>
          <p className="text-[10px] text-chalk uppercase tracking-[0.25em] font-bold mt-1">{date}</p>
        </div>
      </div>
    </header>
  );
}