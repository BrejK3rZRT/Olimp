import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { OlimpLayout } from "./components/olimp/Layout.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Passes from "./pages/Passes.tsx";
import Register from "./pages/Register.tsx";
import Reports from "./pages/Reports.tsx";
import ScanCard from "./pages/ScanCard.tsx";
import Schedule from "./pages/Schedule.tsx";
import Settings from "./pages/Settings.tsx";
import ShiftReport from "./pages/ShiftReport.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<OlimpLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/zarejestruj" element={<Register />} />
            <Route path="/grafik" element={<Schedule />} />
            <Route path="/karnety" element={<Passes />} />
            <Route path="/raporty" element={<Reports />} />
            <Route path="/ustawienia" element={<Settings />} />
            <Route path="/skanuj" element={<ScanCard />} />
            <Route path="/raport-zmiany" element={<ShiftReport />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
