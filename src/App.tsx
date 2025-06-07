import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";
import Knowledgebase from "./pages/Knowledgebase";
import AiInsights from "./pages/AiInsights";
import DataImport from "./pages/DataImport";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<NotFound />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/agreements" element={<Agreements />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/knowledgebase" element={<Knowledgebase />} />
            <Route path="/ai-insights" element={<AiInsights />} />
            <Route path="/data-import" element={<DataImport />} />
            <Route path="/login" element={<Login />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
