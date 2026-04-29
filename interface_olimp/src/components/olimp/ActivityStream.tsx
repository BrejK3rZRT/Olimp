import { AlertTriangle, ArrowDownLeft, ArrowUpRight } from "lucide-react";

const events = [
  {
    id: 1,
    name: "Piotr Kowalczyk",
    pass: "Karnet OPEN · Odnowienie 12.11",
    time: "TERAZ",
    initials: "PK",
    type: "in" as const,
  },
  {
    id: 2,
    name: "Anna Wiśniewska",
    pass: "Wejście jednorazowe · 45 PLN",
    time: "2 MIN",
    initials: "AW",
    type: "in" as const,
  },
  {
    id: 3,
    name: "Kamil Stępień",
    pass: "Brak płatności · Zaległość 3 dni",
    time: "5 MIN",
    initials: "KS",
    type: "alert" as const,
  },
  {
    id: 4,
    name: "Michał Mazurek",
    pass: "Karnet Ranny Ptasek",
    time: "12 MIN",
    initials: "MM",
    type: "in" as const,
  },
  {
    id: 5,
    name: "Karolina Lis",
    pass: "Karnet OPEN · Wyjście",
    time: "18 MIN",
    initials: "KL",
    type: "out" as const,
  },
  {
    id: 6,
    name: "Tomasz Dąb",
    pass: "Karnet Multi · Wyjście",
    time: "24 MIN",
    initials: "TD",
    type: "out" as const,
  },
];

export function ActivityStream() {
  return (
    <div className="bg-matte/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col h-full">
      <div className="mb-6">
        <p className="text-[10px] text-primary uppercase tracking-[0.25em] font-bold mb-2">Live · Bramka 01</p>
        <h3 className="font-display text-3xl tracking-wide">Strumień Wejść</h3>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
        {events.map((e) => {
          const isAlert = e.type === "alert";
          const isOut = e.type === "out";
          return (
            <div
              key={e.id}
              className={`flex items-start gap-4 p-3 -mx-3 transition-colors ${
                isAlert
                  ? "bg-destructive/10 border-l-2 border-destructive"
                  : "border-l-2 border-transparent hover:bg-white/[0.03]"
              }`}
            >
              <div
                className={`size-12 shrink-0 flex items-center justify-center font-display text-lg border ${
                  isAlert
                    ? "bg-destructive/10 border-destructive/40 text-destructive"
                    : "bg-background border-white/10 text-chalk"
                }`}
              >
                {e.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-baseline gap-2">
                  <p
                    className={`font-bold uppercase truncate text-sm tracking-wide ${
                      isAlert ? "text-destructive" : "text-foreground"
                    }`}
                  >
                    {e.name}
                  </p>
                  <p
                    className={`text-[10px] tabular-nums tracking-widest font-bold shrink-0 ${
                      e.id === 1 ? "text-primary" : "text-chalk"
                    }`}
                  >
                    {e.time}
                  </p>
                </div>
                <p
                  className={`text-xs truncate mt-0.5 flex items-center gap-1.5 ${
                    isAlert ? "text-destructive/80 font-bold uppercase" : "text-chalk"
                  }`}
                >
                  {isAlert ? (
                    <AlertTriangle className="size-3" strokeWidth={2} />
                  ) : isOut ? (
                    <ArrowUpRight className="size-3" strokeWidth={2} />
                  ) : (
                    <ArrowDownLeft className="size-3 text-success" strokeWidth={2} />
                  )}
                  {e.pass}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}