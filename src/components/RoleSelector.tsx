
import React from 'react';
import { Check, UserCircle2 } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Role = 'builder' | 'realtor';

interface RoleSelectorProps {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
}

const roleLabels: Record<Role, string> = {
  builder: 'Builder',
  realtor: 'Realtor'
};

const roleClasses: Record<Role, string> = {
  builder: 'role-builder',
  realtor: 'role-realtor'
};

export const RoleSelector: React.FC<RoleSelectorProps> = ({ activeRole, setActiveRole }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <UserCircle2 className="h-4 w-4" />
          <span className={`role-indicator ${roleClasses[activeRole]}`}>{roleLabels[activeRole]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(roleLabels).map(([role, label]) => (
          <DropdownMenuItem 
            key={role} 
            onClick={() => setActiveRole(role as Role)}
            className="flex items-center justify-between"
          >
            <span>{label}</span>
            {role === activeRole && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
