import { Outlet } from "react-router-dom";
import { OlimpSidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function OlimpLayout() {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground overflow-hidden">
      <OlimpSidebar />
      <main className="flex-1 overflow-y-auto relative">
        <div
          className="absolute bottom-0 left-1/3 w-[60vw] h-[40vh] bg-primary/15 blur-[140px] rounded-full pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_100%/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%/0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-60"
          aria-hidden
        />
        <div className="relative z-10 p-10">
          <TopBar />
          <Outlet />
        </div>
      </main>
    </div>
  );
}