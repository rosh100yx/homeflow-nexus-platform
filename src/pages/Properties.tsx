
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LayoutGrid, List, PlusCircle, Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

// Mock data for properties in Pune, India
const properties = [
  {
    id: '1',
    title: 'Royal Empress',
    address: 'Baner, Pune, Maharashtra',
    price: '₹85,50,000',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 1950,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: '2',
    title: 'Green Valley Villa',
    address: 'Koregaon Park, Pune, Maharashtra',
    price: '₹1,25,00,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 4,
    baths: 3,
    sqft: 3200,
    status: 'pending' as const,
    type: 'villa' as const,
  },
  {
    id: '3',
    title: 'Horizon Heights',
    address: 'Kharadi, Pune, Maharashtra',
    price: '₹65,00,000',
    image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 2,
    baths: 2,
    sqft: 1250,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: '4',
    title: 'Park Avenue',
    address: 'Viman Nagar, Pune, Maharashtra',
    price: '₹75,50,000',
    image: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 3,
    sqft: 1800,
    status: 'sold' as const,
    type: 'apartment' as const,
  },
  {
    id: '5',
    title: 'Serene Heights',
    address: 'Aundh, Pune, Maharashtra',
    price: '₹95,00,000',
    image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 1650,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: '6',
    title: 'Meadows Twin Bungalow',
    address: 'Bavdhan, Pune, Maharashtra',
    price: '₹2,10,00,000',
    image: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 4,
    baths: 4,
    sqft: 3600,
    status: 'pending' as const,
    type: 'house' as const,
  },
];

const Properties: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 lg:ml-60">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
            <p className="text-gray-500">Manage and track all your property listings in Pune</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <TabsList className="mb-4 sm:mb-0">
              <TabsTrigger value="all">All Properties</TabsTrigger>
              <TabsTrigger value="active">For Sale</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="sold">Sold</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-muted' : ''}>
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-muted' : ''}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search properties in Pune..." className="pl-9 w-full" />
                </div>
                
                <div className="flex space-x-2 w-full sm:w-auto">
                  <Select defaultValue="type">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="gap-1">
                  Price: ₹65L - ₹1.25Cr
                  <button className="ml-1 text-xs">✕</button>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  Beds: 3+
                  <button className="ml-1 text-xs">✕</button>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  Pune, Maharashtra
                  <button className="ml-1 text-xs">✕</button>
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="active" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties
                .filter(property => property.status === 'for-sale')
                .map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties
                .filter(property => property.status === 'pending')
                .map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sold" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties
                .filter(property => property.status === 'sold')
                .map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Properties;
