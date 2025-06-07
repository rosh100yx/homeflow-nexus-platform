import React from 'react';
import Sidebar from '../ui/sidebar';
import Container from '../ui/container';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar>
        <nav className="p-4 space-y-2">
          <a href="/dashboard" className="block text-gray-700 hover:text-blue-500">Dashboard</a>
          <a href="/properties" className="block text-gray-700 hover:text-blue-500">Properties</a>
          <a href="/leads" className="block text-gray-700 hover:text-blue-500">Leads</a>
          <a href="/transactions" className="block text-gray-700 hover:text-blue-500">Transactions</a>
          <a href="/analytics" className="block text-gray-700 hover:text-blue-500">Analytics</a>
        </nav>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-xl font-bold">Page Title</h1>
        </header>

        {/* Content */}
        <Container className="py-6">
          {children}
        </Container>
      </div>
    </div>
  );
};

export default PageLayout;
