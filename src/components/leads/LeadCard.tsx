
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
  'new': { label: 'New', class: 'bg-blue-100 text-blue-800' },
  'contacted': { label: 'Contacted', class: 'bg-amber-100 text-amber-800' },
  'qualified': { label: 'Qualified', class: 'bg-green-100 text-green-800' },
  'unqualified': { label: 'Unqualified', class: 'bg-red-100 text-red-800' },
};

export const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={lead.avatar} alt={lead.name} />
              <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{lead.name}</h3>
              <p className="text-sm text-muted-foreground">Source: {lead.source}</p>
            </div>
          </div>
          <Badge className={statusConfig[lead.status].class}>
            {statusConfig[lead.status].label}
          </Badge>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a href={`mailto:${lead.email}`} className="text-saas-700 hover:underline">{lead.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href={`tel:${lead.phone}`} className="text-saas-700 hover:underline">{lead.phone}</a>
          </div>
          {lead.lastContact && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Last Contact: {lead.lastContact}</span>
            </div>
          )}
        </div>
        
        {lead.notes && (
          <div className="mt-3 p-2 bg-muted rounded-md text-sm">
            <p className="text-muted-foreground">{lead.notes}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        {lead.assignedTo ? (
          <div className="flex items-center gap-2 text-xs">
            <User className="h-3 w-3 text-muted-foreground" />
            <span>Assigned to {lead.assignedTo.name}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">Not assigned</span>
        )}
        <Button size="sm">Contact</Button>
      </CardFooter>
    </Card>
  );
};
