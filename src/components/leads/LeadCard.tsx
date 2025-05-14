
import React from 'react';
import { Calendar, Mail, Phone, User } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeadCardProps {
  lead: {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'new' | 'contacted' | 'qualified' | 'unqualified';
    source: string;
    avatar?: string;
    lastContact?: string;
    notes?: string;
    assignedTo?: {
      name: string;
      avatar?: string;
    };
  };
}

const statusConfig = {
  'new': { label: 'New', class: 'bg-retro-orange/20 text-retro-orange' },
  'contacted': { label: 'Contacted', class: 'bg-amber-100 text-amber-800' },
  'qualified': { label: 'Qualified', class: 'bg-green-100 text-green-800' },
  'unqualified': { label: 'Unqualified', class: 'bg-red-100 text-red-800' },
};

export const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  return (
    <Card className="card-hover retro-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={lead.avatar} alt={lead.name} />
              <AvatarFallback className="bg-retro-navy text-retro-white">{lead.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-retro-navy">{lead.name}</h3>
              <p className="text-sm text-retro-gray">Source: {lead.source}</p>
            </div>
          </div>
          <Badge className={statusConfig[lead.status].class}>
            {statusConfig[lead.status].label}
          </Badge>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-retro-gray" />
            <a href={`mailto:${lead.email}`} className="text-retro-orange hover:underline">{lead.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-retro-gray" />
            <a href={`tel:${lead.phone}`} className="text-retro-orange hover:underline">{lead.phone}</a>
          </div>
          {lead.lastContact && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-retro-gray" />
              <span className="text-retro-navy">Last Contact: {lead.lastContact}</span>
            </div>
          )}
        </div>
        
        {lead.notes && (
          <div className="mt-3 p-2 bg-retro-navy/5 rounded-md text-sm">
            <p className="text-retro-gray">{lead.notes}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        {lead.assignedTo ? (
          <div className="flex items-center gap-2 text-xs text-retro-gray">
            <User className="h-3 w-3" />
            <span>Assigned to {lead.assignedTo.name}</span>
          </div>
        ) : (
          <span className="text-xs text-retro-gray">Not assigned</span>
        )}
        <Button size="sm" className="bg-retro-orange hover:bg-retro-orange/90 text-retro-white">Contact</Button>
      </CardFooter>
    </Card>
  );
};
