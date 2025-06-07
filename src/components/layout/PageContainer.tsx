import React from 'react';
import { Navbar } from '@/components/ui/Navbar';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean; // Control full height
  hasSidebar?: boolean; // Toggle sidebar visibility
  maxWidth?: string; // Custom max width for content
  padding?: string; // Custom padding for content
  layout?: 'grid' | 'flex' | 'stack'; // Define layout type
}

export const PageContainer = ({
  children,
  className = '',
  fullHeight = true,
  hasSidebar = true,
  maxWidth = 'max-w-7xl', // Default max width
  padding = 'px-4 py-6', // Default padding
  layout = 'stack', // Default layout
}: PageContainerProps) => {
  const layoutClasses = {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    flex: 'flex flex-wrap gap-4',
    stack: 'space-y-4',
  };

  return (
    <div
      className={`flex ${fullHeight ? 'h-screen' : ''} bg-background ${className}`}
    >
      {hasSidebar && <Navbar />}
      <main
        className={`relative flex-1 w-full ${hasSidebar ? 'lg:pl-60' : ''} pt-16 lg:pt-0 overflow-y-auto`}
      >
        <div className={`${maxWidth} mx-auto ${padding} ${layoutClasses[layout]} w-full`}>{children}</div>
      </main>
    </div>
  );
};

export default PageContainer;
