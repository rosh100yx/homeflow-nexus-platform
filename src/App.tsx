import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Index from "./pages/Index";
import Dashboard from './pages/Dashboard'
import DataImport from './pages/DataImport'
import Documentation from './pages/Documentation'
import KnowledgeBase from './pages/Knowledgebase'
import Leads from './pages/Leads'
import Login from './pages/Login'
import Marketplace from './pages/Marketplace'
import NotFound from './pages/NotFound'
import Payments from './pages/Payments'
import Properties from './pages/Properties'
import Settings from './pages/Settings'
import Transactions from './pages/Transactions'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-import" element={<DataImport />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App