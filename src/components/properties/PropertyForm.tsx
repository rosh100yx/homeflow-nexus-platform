
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
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
  title: z.string().min(3, "Title must be at least 3 characters"),
  type: z.string().min(1, "Property type is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  area: z.string().min(1, "Area is required"),
  city: z.string().min(1, "City is required"),
  price: z.string().min(1, "Price is required"),
  beds: z.coerce.number().min(1, "Number of beds is required"),
  baths: z.coerce.number().min(1, "Number of bathrooms is required"),
  sqft: z.coerce.number().min(100, "Square footage must be at least 100"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type PropertyFormValues = z.infer<typeof formSchema>;

interface PropertyFormProps {
  onSubmit: (data: PropertyFormValues) => void;
  defaultValues?: Partial<PropertyFormValues>;
  isLoading?: boolean;
}

export function PropertyForm({ onSubmit, defaultValues, isLoading = false }: PropertyFormProps) {
  const { toast } = useToast();

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      title: "",
      type: "",
      address: "",
      area: "",
      city: "Pune",
      price: "",
      beds: 2,
      baths: 2,
      sqft: 1000,
      description: "",
    },
  });

  function handleSubmit(values: PropertyFormValues) {
    try {
      onSubmit(values);
      toast({
        title: "Property saved",
        description: "Your property has been saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error saving property",
        description: "There was an error saving your property. Please try again.",
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Beautiful 3BHK Apartment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type</FormLabel>
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
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
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
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (₹)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. ₹85,00,000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="beds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beds</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="baths"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Baths</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sqft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Square Feet</FormLabel>
                  <FormControl>
                    <Input type="number" min={100} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide details about the property" 
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
            {isLoading ? "Saving..." : "Save Property"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
