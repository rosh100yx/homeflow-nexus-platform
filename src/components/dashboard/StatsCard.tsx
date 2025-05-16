
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  change,
  className,
}) => {
  return (
    <Card className={cn("card-hover shadow-sm border border-[#8E9196]/20", className)}>
      <CardContent className="flex items-start justify-between pt-6">
        <div>
          <p className="text-sm font-medium text-retro-gray">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-retro-navy">{value}</h3>
            {change && (
              <div className={cn("flex items-center text-xs",
                change.type === 'increase' ? 'text-green-500' : 'text-red-500'
              )}>
                {change.type === 'increase' ? 
                  <ArrowUpIcon className="h-3 w-3" /> : 
                  <ArrowDownIcon className="h-3 w-3" />
                }
                <span>{Math.abs(change.value)}%</span>
              </div>
            )}
          </div>
        </div>
        <div className="p-2 bg-[#FF5349]/10 text-[#FF5349] rounded-md">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};
