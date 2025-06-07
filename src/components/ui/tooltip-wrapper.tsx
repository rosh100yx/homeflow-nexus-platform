
import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';

interface TooltipWrapperProps {
  children: React.ReactNode;
  delayDuration?: number;
}

export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ 
  children, 
  delayDuration = 300 
}) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      {children}
    </TooltipProvider>
  );
};

export default TooltipWrapper;
