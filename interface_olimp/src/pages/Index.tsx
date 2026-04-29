import { Activity, CreditCard, Gauge, UserPlus, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/olimp/StatCard";
import { SchedulePulse } from "@/components/olimp/SchedulePulse";
import { ActivityStream } from "@/components/olimp/ActivityStream";
import { AttendanceChart } from "@/components/olimp/AttendanceChart";

const Index = () => {
  return (
    <>
      {/* Stats */}
      <section className="grid grid-cols-4 gap-6 mb-8" aria-label="Kluczowe wskaźniki">
        <StatCard
          label="Obecni Klubowicze"
          value="142"
          delta="+12"
          icon={Users}
          progress={65}
          hint="65% średniej dziennej"
        />
        <StatCard
          label="Aktywne Karnety"
          value="2 841"
          icon={CreditCard}
          hint="94% odnowień w tym miesiącu"
        />
        <StatCard
          label="Nowe Rejestracje · 24h"
          value="18"
          delta="+4"
          icon={UserPlus}
          hint="Cel dzienny: 15"
        />
        <StatCard
          label="Zajętość Klubu"
          value="73%"
          icon={Gauge}
          highlight
          progress={73}
          hint="142 z 195 miejsc · poziom optymalny"
        />
      </section>

      {/* Chart */}
      <section className="mb-8" aria-label="Frekwencja godzinowa">
        <AttendanceChart />
      </section>

      {/* Schedule + Activity */}
      <section className="grid grid-cols-3 gap-6 mb-8" aria-label="Grafik i aktywność">
        <div className="col-span-2">
          <SchedulePulse />
        </div>
        <div className="col-span-1">
          <ActivityStream />
        </div>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-4 gap-6" aria-label="Szybkie akcje">
        <Link
          to="/zarejestruj"
          className="group relative bg-gradient-to-br from-primary to-primary-glow p-6 text-left overflow-hidden border border-primary/40 shadow-[0_0_24px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-shadow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <UserPlus className="size-6 text-primary-foreground mb-4 relative z-10" strokeWidth={1.5} />
          <p className="font-display text-2xl text-primary-foreground tracking-wide relative z-10">
            ZAREJESTRUJ
          </p>
          <p className="text-xs text-primary-foreground/80 uppercase tracking-widest mt-1 font-bold relative z-10">
            Nowy klient + karnet
          </p>
        </Link>

        <Link
          to="/karnety"
          className="group bg-matte/60 border border-white/[0.08] backdrop-blur-md p-6 text-left hover:border-primary/40 transition-colors"
        >
          <CreditCard className="size-6 text-chalk group-hover:text-primary mb-4 transition-colors" strokeWidth={1.5} />
          <p className="font-display text-2xl text-foreground tracking-wide">SPRZEDAJ KARNET</p>
          <p className="text-xs text-chalk uppercase tracking-widest mt-1 font-bold">
            7 produktów dostępnych
          </p>
        </Link>

        <Link
          to="/skanuj"
          className="group bg-matte/60 border border-white/[0.08] backdrop-blur-md p-6 text-left hover:border-primary/40 transition-colors"
        >
          <Activity className="size-6 text-chalk group-hover:text-primary mb-4 transition-colors" strokeWidth={1.5} />
          <p className="font-display text-2xl text-foreground tracking-wide">SKANUJ KARTĘ</p>
          <p className="text-xs text-chalk uppercase tracking-widest mt-1 font-bold">
            Bramka 01 · gotowa
          </p>
        </Link>

        <Link
          to="/raport-zmiany"
          className="group bg-matte/60 border border-white/[0.08] backdrop-blur-md p-6 text-left hover:border-primary/40 transition-colors"
        >
          <Zap className="size-6 text-chalk group-hover:text-primary mb-4 transition-colors" strokeWidth={1.5} />
          <p className="font-display text-2xl text-foreground tracking-wide">RAPORT ZMIANY</p>
          <p className="text-xs text-chalk uppercase tracking-widest mt-1 font-bold">
            Zamknięcie kasy
          </p>
        </Link>
      </section>
    </>
  );
};

export default Index;
