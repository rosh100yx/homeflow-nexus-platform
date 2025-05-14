
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  status: z.string().min(1, "Status is required"),
  source: z.string().min(1, "Source is required"),
  propertyInterest: z.string().optional(),
  budget: z.string().min(1, "Budget is required"),
  area: z.string().min(1, "Area is required"),
  notes: z.string().optional(),
});

type LeadFormValues = z.infer<typeof formSchema>;

interface LeadFormProps {
  onSubmit: (data: LeadFormValues) => void;
  defaultValues?: Partial<LeadFormValues>;
  isLoading?: boolean;
}

export function LeadForm({ onSubmit, defaultValues, isLoading = false }: LeadFormProps) {
  const { toast } = useToast();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      name: "",
      email: "",
      phone: "",
      status: "new",
      source: "",
      propertyInterest: "",
      budget: "",
      area: "",
      notes: "",
    },
  });

  function handleSubmit(values: LeadFormValues) {
    try {
      onSubmit(values);
      toast({
        title: "Lead saved",
        description: "The lead has been saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error saving lead",
        description: "There was an error saving the lead. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. (+91) 98765-43210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="unqualified">Unqualified</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Referral">Referral</SelectItem>
                    <SelectItem value="Housing.com">Housing.com</SelectItem>
                    <SelectItem value="99acres">99acres.com</SelectItem>
                    <SelectItem value="Magicbricks">Magicbricks</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Property Expo">Property Expo</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="propertyInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Below 50L">Below ₹50 Lakhs</SelectItem>
                    <SelectItem value="50L-75L">₹50 Lakhs - ₹75 Lakhs</SelectItem>
                    <SelectItem value="75L-1Cr">₹75 Lakhs - ₹1 Crore</SelectItem>
                    <SelectItem value="1Cr-1.5Cr">₹1 Crore - ₹1.5 Crore</SelectItem>
                    <SelectItem value="1.5Cr-2Cr">₹1.5 Crore - ₹2 Crore</SelectItem>
                    <SelectItem value="Above 2Cr">Above ₹2 Crore</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Area</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Baner">Baner</SelectItem>
                    <SelectItem value="Kharadi">Kharadi</SelectItem>
                    <SelectItem value="Viman Nagar">Viman Nagar</SelectItem>
                    <SelectItem value="Koregaon Park">Koregaon Park</SelectItem>
                    <SelectItem value="Aundh">Aundh</SelectItem>
                    <SelectItem value="Bavdhan">Bavdhan</SelectItem>
                    <SelectItem value="Hadapsar">Hadapsar</SelectItem>
                    <SelectItem value="Wakad">Wakad</SelectItem>
                    <SelectItem value="Hinjewadi">Hinjewadi</SelectItem>
                    <SelectItem value="Multiple">Multiple Areas</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Additional information about this lead" 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Lead"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
