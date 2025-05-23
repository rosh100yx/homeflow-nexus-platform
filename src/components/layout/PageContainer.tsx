
import React from 'react';
import { Navbar } from '@/components/ui/Navbar';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Navbar />
      <main className={`relative flex-1 w-full lg:pl-60 pt-16 lg:pt-0 overflow-y-auto ${className}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageContainer;
