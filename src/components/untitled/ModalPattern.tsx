import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ModalPattern = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="default">Open Modal</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Untitled UI Modal</DialogTitle>
      <DialogDescription>This is a modal pattern styled for SaaS.</DialogDescription>
    </DialogContent>
  </Dialog>
);
