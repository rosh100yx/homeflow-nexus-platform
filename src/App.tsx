
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Marketplace from "./pages/Marketplace";
import Leads from "./pages/Leads";
import Agreements from "./pages/Agreements";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/transactions" element={<Dashboard />} />
            <Route path="/payments" element={<Dashboard />} />
            <Route path="/agreements" element={<Agreements />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
