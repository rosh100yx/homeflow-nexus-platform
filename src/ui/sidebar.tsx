import React from 'react';
import { cn } from '../lib/utils';

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return (
    <aside
      className={cn(
        "w-64 bg-gray-900 text-white h-screen overflow-y-auto",
        className
      )}
    >
      {children}
    </aside>
  );
};

export default Sidebar;