
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.tsx'
import './index.css'
import { TooltipProvider } from './components/ui/tooltip';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>
);
