import { Bell, Lock, Settings as SettingsIcon, SlidersHorizontal } from "lucide-react";
import { PageShell } from "@/components/olimp/PageShell";

const sections = [
  { title: "Profil klubu", copy: "Dane obiektu, godziny otwarcia i limity pojemności.", icon: SlidersHorizontal },
  { title: "Uprawnienia", copy: "Role recepcji, trenerów i managerów.", icon: Lock },
  { title: "Powiadomienia", copy: "Alerty płatności, wejść i przekroczeń obłożenia.", icon: Bell },
];

const Settings = () => (
  <PageShell
    eyebrow="Konfiguracja systemu"
    title="Ustawienia"
    description="Centrum konfiguracji systemu OLIMP, integracji i profili pracowników."
    icon={SettingsIcon}
  >
    <div className="grid grid-cols-3 gap-5">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <button key={section.title} className="min-h-56 p-6 bg-background/60 border border-white/[0.08] hover:border-primary/50 text-left transition-colors">
            <Icon className="size-6 text-primary mb-8" strokeWidth={1.5} />
            <p className="font-display text-3xl tracking-wide">{section.title}</p>
            <p className="text-sm text-chalk mt-2">{section.copy}</p>
          </button>
        );
      })}
    </div>
  </PageShell>
);

export default Settings;