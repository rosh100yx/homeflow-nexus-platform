
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface TransactionCardProps {
  transaction: {
    id: string;
    propertyId: string;
    propertyTitle: string;
    amount: string;
    date: string;
    status: 'completed' | 'in-escrow' | 'pending' | 'failed';
    buyer: {
      name: string;
      avatar: string;
    };
    seller: {
      name: string;
      avatar: string;
    };
    documents: number;
    paymentMethod: string;
    failureReason?: string;
  };
  onViewDetails: (id: string) => void;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ 
  transaction,
  onViewDetails
}) => {
  const statusConfig = {
    'completed': { 
      icon: <CheckCircle2 className="h-4 w-4" />, 
      label: 'Completed',
      badgeClass: 'bg-green-100 text-green-800'
    },
    'in-escrow': { 
      icon: <Clock className="h-4 w-4" />, 
      label: 'In Escrow',
      badgeClass: 'bg-amber-100 text-amber-800'
    },
    'pending': { 
      icon: <Clock className="h-4 w-4" />, 
      label: 'Pending',
      badgeClass: 'bg-blue-100 text-blue-800'
    },
    'failed': { 
      icon: <AlertCircle className="h-4 w-4" />, 
      label: 'Failed',
      badgeClass: 'bg-red-100 text-red-800'
    },
  };
  
  const status = statusConfig[transaction.status];
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-base">{transaction.propertyTitle}</h3>
              <p className="text-sm text-muted-foreground">
                ID: {transaction.id} | Property: {transaction.propertyId}
              </p>
            </div>
            <Badge className={status.badgeClass}>
              <div className="flex items-center gap-1">
                {status.icon}
                <span>{status.label}</span>
              </div>
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="h-6 w-6 rounded-full overflow-hidden">
                  <img src={transaction.buyer.avatar} alt={transaction.buyer.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Buyer</p>
                  <p className="font-medium truncate">{transaction.buyer.name}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="h-6 w-6 rounded-full overflow-hidden">
                  <img src={transaction.seller.avatar} alt={transaction.seller.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Seller</p>
                  <p className="font-medium truncate">{transaction.seller.name}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{transaction.documents} documents</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm">{transaction.date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-bold text-retro-orange">{transaction.amount}</span>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onViewDetails(transaction.id)}
              >
                Details
              </Button>
            </div>
          </div>
          
          {transaction.failureReason && (
            <div className="text-sm text-red-500 pt-2">
              <span className="font-medium">Reason for failure:</span> {transaction.failureReason}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
