import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Registos from "./pages/Registos.tsx";
import ContextoHistorico from "./pages/ContextoHistorico.tsx";
import LinhaDoTempo from "./pages/LinhaDoTempo.tsx";
import SobreoProjeto from "./pages/SobreoProjeto.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registos" element={<Registos />} />
          <Route path="/contexto" element={<ContextoHistorico />} />
          <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />
          <Route path="/sobre" element={<SobreoProjeto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
