
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { MarketplaceMap } from '@/components/marketplace/MarketplaceMap';
import { MarketplaceFilters } from '@/components/marketplace/MarketplaceFilters';
import { AiPropertyInsights } from '@/components/marketplace/AiPropertyInsights';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ChevronDown, Filter, Grid, List, MapPin, Search, Sparkles } from 'lucide-react';

const propertyData = [
  {
    id: "1",
    title: "Luxurious 3BHK Apartment",
    address: "Koregaon Park, Pune",
    price: "₹1.25 Cr",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 3,
    baths: 2,
    sqft: 1200,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: "2",
    title: "Modern 2BHK Flat",
    address: "Viman Nagar, Pune",
    price: "₹85 Lac",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 2,
    baths: 2,
    sqft: 950,
    status: 'for-sale' as const,
    type: 'apartment' as const,
  },
  {
    id: "3", 
    title: "Premium Villa with Garden",
    address: "Baner, Pune",
    price: "₹2.1 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 3,
    sqft: 2200,
    status: 'for-sale' as const,
    type: 'villa' as const,
  },
  {
    id: "4",
    title: "Rental Apartment Near IT Park",
    address: "Hinjewadi, Pune",
    price: "₹30K/mo",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 2,
    baths: 2,
    sqft: 1000,
    status: 'pending' as const,
    type: 'apartment' as const,
  },
  {
    id: "5",
    title: "Budget 1BHK for Rent",
    address: "Kothrud, Pune",
    price: "₹18K/mo",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 1,
    baths: 1,
    sqft: 650,
    status: 'pending' as const,
    type: 'apartment' as const,
  },
  {
    id: "6",
    title: "Office Space for Lease",
    address: "Magarpatta City, Pune",
    price: "₹1.2 Lac/mo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beds: 0,
    baths: 2,
    sqft: 1800,
    status: 'for-sale' as const,
    type: 'condo' as const,
  },
];

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [showAiInsights, setShowAiInsights] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Navbar />
      
      <main className="relative flex-1 w-full lg:pl-60 pt-16 lg:pt-0 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-saas-dark mb-1">Property Marketplace</h1>
              <p className="text-muted-foreground">Discover the perfect property in Pune, India</p>
            </div>
            
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Tabs defaultValue="buy" className="w-[200px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for location, property type..." 
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className={showFilters ? "bg-saas-primary/10 text-saas-primary" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowAiInsights(!showAiInsights)}
                className={showAiInsights ? "bg-saas-secondary/10 text-saas-secondary" : ""}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                AI Insights
              </Button>
              <div className="hidden md:flex border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? "bg-muted" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? "bg-muted" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setViewMode('map')}
                  className={viewMode === 'map' ? "bg-muted" : ""}
                >
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {showFilters && <MarketplaceFilters />}
          {showAiInsights && <AiPropertyInsights />}
          
          <div className="pb-8">
            {viewMode === 'map' ? (
              <div className="h-[calc(100vh-220px)]">
                <MarketplaceMap properties={propertyData} />
              </div>
            ) : (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {propertyData.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
