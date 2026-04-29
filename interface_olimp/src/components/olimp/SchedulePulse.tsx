import { ChevronRight, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

const classes = [
  {
    time: "18:30",
    title: "Cross WOD · Siła i Wytrzymałość",
    location: "Sala A",
    coach: "M. Zbroja",
    booked: 24,
    capacity: 24,
    status: "active" as const,
  },
  {
    time: "19:30",
    title: "Muay Thai · Technika",
    location: "Sala B",
    coach: "K. Wójcik",
    booked: 18,
    capacity: 20,
    status: "upcoming" as const,
  },
  {
    time: "20:30",
    title: "Kettlebell Hardstyle",
    location: "Strefa Wolna",
    coach: "M. Zbroja",
    booked: 8,
    capacity: 15,
    status: "upcoming" as const,
  },
  {
    time: "21:00",
    title: "Yoga · Flow & Recovery",
    location: "Sala Zen",
    coach: "A. Maj",
    booked: 11,
    capacity: 18,
    status: "upcoming" as const,
  },
];

export function SchedulePulse() {
  return (
    <div className="bg-matte/40 backdrop-blur-md border border-white/[0.08] p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[10px] text-primary uppercase tracking-[0.25em] font-bold mb-2">Live · Studio</p>
          <h3 className="font-display text-3xl tracking-wide">Puls Zajęć</h3>
        </div>
        <Link to="/grafik" className="text-[10px] text-primary border border-primary/30 px-4 py-2 uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
          Pełny Grafik <ChevronRight className="size-3" strokeWidth={2} />
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        {classes.map((c) => {
          const isActive = c.status === "active";
          const fill = (c.booked / c.capacity) * 100;
          const isFull = c.booked >= c.capacity;
          return (
            <div
              key={c.time}
              className={`p-5 flex items-center justify-between transition-colors cursor-pointer relative overflow-hidden ${
                isActive
                  ? "bg-white/5 border border-primary/40"
                  : "border-b border-white/[0.05] hover:bg-white/[0.03]"
              }`}
            >
              {isActive && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                  <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-r from-transparent to-primary/10 pointer-events-none" />
                </>
              )}

              <div className="flex items-center gap-8 relative z-10 min-w-0">
                <span
                  className={`font-display tabular-nums ${
                    isActive ? "text-4xl text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : "text-3xl text-chalk"
                  }`}
                >
                  {c.time}
                </span>
                <div className="min-w-0">
                  <h4
                    className={`font-bold uppercase tracking-wide truncate ${
                      isActive ? "text-xl text-foreground" : "text-base text-foreground/80"
                    }`}
                  >
                    {c.title}
                  </h4>
                  <p className="text-xs text-chalk mt-1 uppercase tracking-widest flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3" strokeWidth={1.5} />
                      {c.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="size-3" strokeWidth={1.5} />
                      {c.coach}
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-right relative z-10 shrink-0">
                <div className={`tabular-nums font-bold ${isActive ? "text-xl" : "text-base text-foreground/80"}`}>
                  {c.booked}
                  <span className="text-chalk text-sm">/{c.capacity}</span>
                </div>
                {isFull ? (
                  <div className="text-[10px] text-primary uppercase mt-1 tracking-widest font-bold">Komplet</div>
                ) : (
                  <div className="w-24 h-1 bg-white/[0.06] mt-2 ml-auto">
                    <div className="h-full bg-foreground" style={{ width: `${fill}%` }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}