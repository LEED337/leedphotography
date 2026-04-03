import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Gear from "./pages/Gear";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const routerBasename = window.location.hostname.endsWith("github.io") ? "/leedphotography" : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/video" element={<Video />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
