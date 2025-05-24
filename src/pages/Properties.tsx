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
import { LayoutGrid, List, PlusCircle, Search, SlidersHorizontal, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AddPropertyDialog } from '@/components/properties/AddPropertyDialog';
import { PageContainer } from '@/components/layout/PageContainer';

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
  {
    id: '7',
    title: 'Golden Palms',
    address: 'Wakad, Pune, Maharashtra',
    price: '₹1,45,00,000',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 3,
    sqft: 2200,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: '8',
    title: 'Orchid Residency',
    address: 'Hadapsar, Pune, Maharashtra',
    price: '₹92,50,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 1800,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
];

const Properties: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isAddPropertyDialogOpen, setIsAddPropertyDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <PageContainer hasSidebar={true}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
            <p className="text-gray-500">Manage and track all your property listings in Pune</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button onClick={() => setIsAddPropertyDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-md mb-6 shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="inline-flex h-10 p-1 bg-slate-100 rounded-md mb-4">
                <TabsTrigger value="all" className="rounded-md h-8">All Properties</TabsTrigger>
                <TabsTrigger value="active" className="rounded-md h-8">For Sale</TabsTrigger>
                <TabsTrigger value="pending" className="rounded-md h-8">Pending</TabsTrigger>
                <TabsTrigger value="sold" className="rounded-md h-8">Sold</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search properties in Pune..." className="pl-9 w-full" />
              </div>
              
              <div className="flex space-x-2 sm:w-auto">
                <Select defaultValue="all">
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
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">{properties.filter(property => 
                activeTab === 'all' || 
                (activeTab === 'active' && property.status === 'for-sale') ||
                (activeTab === 'pending' && property.status === 'pending') ||
                (activeTab === 'sold' && property.status === 'sold')
              ).length} properties</p>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-muted' : ''}>
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-muted' : ''}>
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                {properties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="active" className="mt-0">
              <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                {properties
                  .filter(property => property.status === 'for-sale')
                  .map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pending" className="mt-0">
              <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                {properties
                  .filter(property => property.status === 'pending')
                  .map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sold" className="mt-0">
              <div className={`grid grid-cols-1 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6`}>
                {properties
                  .filter(property => property.status === 'sold')
                  .map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </div>
      
      <AddPropertyDialog 
        open={isAddPropertyDialogOpen} 
        onOpenChange={setIsAddPropertyDialogOpen} 
      />
    </PageContainer>
  );
};

export default Properties;
