
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
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  activeRole, 
  setActiveRole,
  onShowBuyerInsights,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-saas-dark">Pune Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Aditya Sharma</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search Pune properties..." 
            className="pl-8 w-full md:w-[260px]"
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-saas-primary text-white">3</Badge>
        </Button>
        
        <RoleSelector activeRole={activeRole} setActiveRole={setActiveRole} />
        
        <Button 
          variant="outline"
          className="hidden md:flex items-center gap-2"
          onClick={onShowBuyerInsights}
        >
          <Users className="h-4 w-4" />
          <span>Buyer Insights</span>
        </Button>
      </div>
    </div>
  );
};
