import { CalendarRange } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const days = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
const classes = ["Cross WOD", "Muay Thai", "Mobility", "Kettlebell", "Yoga", "Boxing"];

const Schedule = () => (
  <PageShell
    eyebrow="Tydzień 43 · Październik"
    title="Grafik Zajęć"
    description="Widok tygodniowy zajęć grupowych z salami, trenerami i obłożeniem zapisów."
    icon={CalendarRange}
  >
    <div className="grid grid-cols-6 gap-3">
      {days.map((day, index) => (
        <div key={day} className="bg-background/50 border border-white/[0.08] min-h-[430px] p-4">
          <p className="font-display text-3xl tracking-wide text-primary">{day}</p>
          <div className="mt-5 space-y-3">
            {classes.slice(index % 2, index % 2 + 3).map((name, itemIndex) => (
              <div key={name} className="border-l-2 border-primary/60 bg-white/[0.03] p-3">
                <p className="text-[10px] text-chalk tracking-widest font-bold tabular-nums">{17 + itemIndex}:30</p>
                <p className="font-bold uppercase text-sm tracking-wide mt-1">{name}</p>
                <p className="text-xs text-chalk mt-1">Sala {String.fromCharCode(65 + itemIndex)} · {12 + index + itemIndex}/20</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Schedule;