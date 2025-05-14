
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

// Mock data for properties
const properties = [
  {
    id: '1',
    title: 'Lakeside Villa',
    address: '123 Lake View Dr, Orlando, FL',
    price: '$435,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 2100,
    status: 'for-sale' as const,
    type: 'house' as const,
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    address: '456 Main St, Orlando, FL',
    price: '$285,000',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: 'pending' as const,
    type: 'apartment' as const,
  },
  {
    id: '3',
    title: 'Skyline Penthouse',
    address: '789 Tower Rd, Orlando, FL',
    price: '$650,000',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 4,
    baths: 3,
    sqft: 2800,
    status: 'for-sale' as const,
    type: 'condo' as const,
  },
  {
    id: '4',
    title: 'Riverside Condo',
    address: '321 River Lane, Orlando, FL',
    price: '$375,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 2,
    baths: 2,
    sqft: 1500,
    status: 'sold' as const,
    type: 'condo' as const,
  },
  {
    id: '5',
    title: 'Suburban Family Home',
    address: '567 Oak St, Orlando, FL',
    price: '$495,000',
    image: 'https://images.unsplash.com/photo-1593604572578-1f33a3e6d6bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 4,
    baths: 3,
    sqft: 2600,
    status: 'for-sale' as const,
    type: 'house' as const,
  },
  {
    id: '6',
    title: 'City View Studio',
    address: '890 High St, Orlando, FL',
    price: '$220,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 1,
    baths: 1,
    sqft: 650,
    status: 'pending' as const,
    type: 'apartment' as const,
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
            <p className="text-gray-500">Manage and track all your property listings</p>
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
                  <Input placeholder="Search properties..." className="pl-9 w-full" />
                </div>
                
                <div className="flex space-x-2 w-full sm:w-auto">
                  <Select defaultValue="type">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
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
                  Price: $200k - $500k
                  <button className="ml-1 text-xs">✕</button>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  Beds: 2+
                  <button className="ml-1 text-xs">✕</button>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  Orlando, FL
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
