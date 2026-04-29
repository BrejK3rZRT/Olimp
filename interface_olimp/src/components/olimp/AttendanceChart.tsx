const hours = [
  { h: "06", v: 18 },
  { h: "08", v: 42 },
  { h: "10", v: 31 },
  { h: "12", v: 55 },
  { h: "14", v: 48 },
  { h: "16", v: 72 },
  { h: "17", v: 88 },
  { h: "18", v: 96, current: true },
  { h: "19", v: 78 },
  { h: "20", v: 64 },
  { h: "21", v: 41 },
  { h: "22", v: 22 },
];

export function AttendanceChart() {
  const max = 100;
  return (
    <div className="bg-matte/40 backdrop-blur-md border border-white/[0.08] p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[10px] text-primary uppercase tracking-[0.25em] font-bold mb-2">Frekwencja · Dziś</p>
          <h3 className="font-display text-3xl tracking-wide">Obciążenie Godzinowe</h3>
        </div>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-chalk font-bold">
          <span className="flex items-center gap-2">
            <span className="size-2 bg-foreground" />
            Wczoraj
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            Dziś
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-48">
        {hours.map((slot) => {
          const height = (slot.v / max) * 100;
          return (
            <div key={slot.h} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="text-[10px] tabular-nums text-chalk/60 group-hover:text-primary transition-colors font-bold">
                {slot.v}
              </div>
              <div className="w-full h-40 flex items-end relative">
                <div
                  className={`w-full transition-all duration-500 ${
                    slot.current
                      ? "bg-gradient-to-t from-primary to-primary-glow shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
                      : "bg-foreground/15 group-hover:bg-foreground/30"
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <div
                className={`text-[10px] tabular-nums tracking-widest font-bold ${
                  slot.current ? "text-primary" : "text-chalk"
                }`}
              >
                {slot.h}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}