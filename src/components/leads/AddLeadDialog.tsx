
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog";
import { LeadForm } from './LeadForm';

interface AddLeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddLeadDialog({ open, onOpenChange }: AddLeadDialogProps) {
  const handleSubmit = (data: any) => {
    console.log('Lead form submitted:', data);
    // Here you would typically save the data to your backend
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Lead</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new lead for properties in Pune
          </DialogDescription>
        </DialogHeader>
        
        <LeadForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
