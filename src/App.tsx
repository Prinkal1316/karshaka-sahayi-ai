import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AlumniLanguageProvider } from "@/contexts/AlumniLanguageContext";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Farmers from "./pages/Farmers";
import NotFound from "./pages/NotFound";
import AlumniHome from "./pages/alumni/AlumniHome";
import About from "./pages/alumni/About";
import Events from "./pages/alumni/Events";
import Gallery from "./pages/alumni/Gallery";
import Blog from "./pages/alumni/Blog";
import Contact from "./pages/alumni/Contact";
import Dashboard from "./pages/alumni/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AlumniLanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/alumni" element={<AlumniHome />} />
              <Route path="/alumni/about" element={<About />} />
              <Route path="/alumni/events" element={<Events />} />
              <Route path="/alumni/gallery" element={<Gallery />} />
              <Route path="/alumni/blog" element={<Blog />} />
              <Route path="/alumni/contact" element={<Contact />} />
              <Route path="/alumni/dashboard" element={<Dashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AlumniLanguageProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
