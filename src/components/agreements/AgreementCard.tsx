
import React from 'react';
import { Calendar, Download, FileText, MapPin, User } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AgreementCardProps {
  agreement: {
    id: string;
    title: string;
    propertyName: string;
    location: string;
    clientName: string;
    status: 'active' | 'draft' | 'signed' | 'expired';
    createdDate: string;
    dueDate: string;
    documentType: string;
    amount: string;
    signedBy: string[];
    pendingWith: string[];
    image?: string;
  };
}

const statusConfig = {
  'active': { label: 'Active', class: 'bg-amber-100 text-amber-800' },
  'draft': { label: 'Draft', class: 'bg-blue-100 text-blue-800' },
  'signed': { label: 'Signed', class: 'bg-green-100 text-green-800' },
  'expired': { label: 'Expired', class: 'bg-red-100 text-red-800' },
};

export const AgreementCard: React.FC<AgreementCardProps> = ({ agreement }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="flex flex-col sm:flex-row">
        {agreement.image && (
          <div className="sm:w-1/3">
            <AspectRatio ratio={1 / 1}>
              <img
                src={agreement.image}
                alt={agreement.propertyName}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        )}
        
        <div className={`${agreement.image ? 'sm:w-2/3' : 'w-full'}`}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg line-clamp-1">{agreement.title}</h3>
              <Badge className={statusConfig[agreement.status].class}>
                {statusConfig[agreement.status].label}
              </Badge>
            </div>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{agreement.propertyName}, {agreement.location}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <User className="h-3 w-3" />
                <span>Client: {agreement.clientName}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Due: {agreement.dueDate}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="text-xs mr-1">Status:</div>
              {agreement.pendingWith.length > 0 ? (
                <div className="flex items-center gap-1">
                  <span className="text-xs text-amber-600">Pending with:</span>
                  <div className="flex -space-x-2">
                    {agreement.pendingWith.map((person, i) => (
                      <Avatar key={i} className="h-5 w-5 border border-white">
                        <AvatarFallback className="text-[10px]">{person.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              ) : (
                <span className="text-xs text-green-600">Completed</span>
              )}
            </div>
            
            {agreement.status !== 'draft' && (
              <div className="flex items-center gap-1 mb-2">
                <FileText className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Document Type: {agreement.documentType}</span>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between p-4 pt-0">
            <div className="text-sm font-medium">
              {agreement.amount}
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-3 w-3" />
              {agreement.status === 'draft' ? 'Edit Draft' : 'View Document'}
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};
