
import React from 'react';
import { Bell, Search, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RoleSelector } from "@/components/RoleSelector";

type Role = 'builder' | 'realtor';

interface DashboardHeaderProps {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
  onShowBuyerInsights: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  activeRole, 
  setActiveRole,
  onShowBuyerInsights
}) => {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-retro-navy">Pune Dashboard</h1>
        <p className="text-retro-gray">Welcome back, Aditya Sharma</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-retro-gray" />
          <Input type="search" placeholder="Search Pune properties..." className="pl-8 w-[200px] lg:w-[300px] border-retro-navy/30 focus-visible:ring-retro-orange" />
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="relative border-retro-navy/30 text-retro-navy hover:text-retro-orange hover:border-retro-orange"
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-retro-orange text-retro-white">3</Badge>
        </Button>
        
        <RoleSelector activeRole={activeRole} setActiveRole={setActiveRole} />
        
        <Button 
          variant="outline"
          className="hidden md:flex items-center gap-2 border-retro-navy/30"
          onClick={onShowBuyerInsights}
        >
          <Users className="h-4 w-4" />
          <span>Buyer Insights</span>
        </Button>
      </div>
    </div>
  );
};
