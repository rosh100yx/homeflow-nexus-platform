
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
} from "@/components/ui/dialog";
import { PropertyForm } from './PropertyForm';

interface AddPropertyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddPropertyDialog({ open, onOpenChange }: AddPropertyDialogProps) {
  const handleSubmit = (data: any) => {
    console.log('Property form submitted:', data);
    // Here you would typically save the data to your backend
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new property listing in Pune
          </DialogDescription>
        </DialogHeader>
        
        <PropertyForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
