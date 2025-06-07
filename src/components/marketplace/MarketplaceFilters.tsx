
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface MarketplaceFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export const MarketplaceFilters: React.FC<MarketplaceFiltersProps> = ({ onFilterChange }) => {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 200]);
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: [] as string[],
    bedrooms: [] as string[],
    amenities: [] as string[]
  });
  
  const handleCheckboxChange = (category: 'propertyType' | 'bedrooms' | 'amenities', value: string) => {
    setSearchParams(prev => {
      const isSelected = prev[category].includes(value);
      let updated;
      
      if (isSelected) {
        updated = prev[category].filter(item => item !== value);
      } else {
        updated = [...prev[category], value];
      }
      
      return {
        ...prev,
        [category]: updated
      };
    });
  };
  
  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        priceRange: `₹${priceRange[0]} Lac - ₹${priceRange[1]} Lac`,
        ...searchParams
      });
    }
    
    toast({
      title: "Filters Applied",
      description: `Showing properties in ${searchParams.location || 'Pune'} between ₹${priceRange[0]} Lac - ₹${priceRange[1]} Lac`,
      duration: 3000,
    });
  };
  
  const handleResetFilters = () => {
    setPriceRange([20, 200]);
    setSearchParams({
      location: '',
      propertyType: [],
      bedrooms: [],
      amenities: []
    });
    
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared",
      duration: 2000,
    });
  };
  
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <Label htmlFor="location" className="text-sm font-medium mb-2 block">Location</Label>
            <Input 
              id="location" 
              placeholder="e.g. Koregaon Park" 
              value={searchParams.location}
              onChange={(e) => setSearchParams(prev => ({ ...prev, location: e.target.value }))}
            />
            <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
              <Button variant="ghost" size="sm" className="h-7 justify-start font-normal"
                onClick={() => setSearchParams(prev => ({ ...prev, location: 'Koregaon Park' }))}>
                Koregaon Park
              </Button>
              <Button variant="ghost" size="sm" className="h-7 justify-start font-normal"
                onClick={() => setSearchParams(prev => ({ ...prev, location: 'Baner' }))}>
                Baner
              </Button>
              <Button variant="ghost" size="sm" className="h-7 justify-start font-normal"
                onClick={() => setSearchParams(prev => ({ ...prev, location: 'Viman Nagar' }))}>
                Viman Nagar
              </Button>
              <Button variant="ghost" size="sm" className="h-7 justify-start font-normal"
                onClick={() => setSearchParams(prev => ({ ...prev, location: 'Hinjewadi' }))}>
                Hinjewadi
              </Button>
            </div>
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-2 block">Price Range (₹ in Lac)</Label>
            <div className="px-2">
              <Slider 
                value={priceRange} 
                min={5} 
                max={500} 
                step={5}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mt-6"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>₹{priceRange[0]} Lac</span>
              <span>₹{priceRange[1]} Lac</span>
            </div>
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-2 block">Property Type</Label>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox 
                  id="apartment" 
                  checked={searchParams.propertyType.includes('apartment')}
                  onCheckedChange={() => handleCheckboxChange('propertyType', 'apartment')}
                />
                <Label htmlFor="apartment" className="ml-2 text-sm font-normal">Apartment</Label>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="villa" 
                  checked={searchParams.propertyType.includes('villa')}
                  onCheckedChange={() => handleCheckboxChange('propertyType', 'villa')}
                />
                <Label htmlFor="villa" className="ml-2 text-sm font-normal">Villa</Label>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="house" 
                  checked={searchParams.propertyType.includes('house')}
                  onCheckedChange={() => handleCheckboxChange('propertyType', 'house')}
                />
                <Label htmlFor="house" className="ml-2 text-sm font-normal">Independent House</Label>
              </div>
              <div className="flex items-center">
                <Checkbox 
                  id="plot" 
                  checked={searchParams.propertyType.includes('plot')}
                  onCheckedChange={() => handleCheckboxChange('propertyType', 'plot')}
                />
                <Label htmlFor="plot" className="ml-2 text-sm font-normal">Plot/Land</Label>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium mb-2 block">Bedrooms</Label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="1bhk" 
                    checked={searchParams.bedrooms.includes('1')}
                    onCheckedChange={() => handleCheckboxChange('bedrooms', '1')}
                  />
                  <Label htmlFor="1bhk" className="ml-2 text-sm font-normal">1 BHK</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="2bhk" 
                    checked={searchParams.bedrooms.includes('2')}
                    onCheckedChange={() => handleCheckboxChange('bedrooms', '2')}
                  />
                  <Label htmlFor="2bhk" className="ml-2 text-sm font-normal">2 BHK</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="3bhk" 
                    checked={searchParams.bedrooms.includes('3')}
                    onCheckedChange={() => handleCheckboxChange('bedrooms', '3')}
                  />
                  <Label htmlFor="3bhk" className="ml-2 text-sm font-normal">3 BHK</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="4plusbhk" 
                    checked={searchParams.bedrooms.includes('4+')}
                    onCheckedChange={() => handleCheckboxChange('bedrooms', '4+')}
                  />
                  <Label htmlFor="4plusbhk" className="ml-2 text-sm font-normal">4+ BHK</Label>
                </div>
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">Amenities</Label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox 
                    id="parking" 
                    checked={searchParams.amenities.includes('parking')}
                    onCheckedChange={() => handleCheckboxChange('amenities', 'parking')}
                  />
                  <Label htmlFor="parking" className="ml-2 text-sm font-normal">Parking</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="gym" 
                    checked={searchParams.amenities.includes('gym')}
                    onCheckedChange={() => handleCheckboxChange('amenities', 'gym')}
                  />
                  <Label htmlFor="gym" className="ml-2 text-sm font-normal">Gym</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="pool" 
                    checked={searchParams.amenities.includes('pool')}
                    onCheckedChange={() => handleCheckboxChange('amenities', 'pool')}
                  />
                  <Label htmlFor="pool" className="ml-2 text-sm font-normal">Swimming Pool</Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="security" 
                    checked={searchParams.amenities.includes('security')}
                    onCheckedChange={() => handleCheckboxChange('amenities', 'security')}
                  />
                  <Label htmlFor="security" className="ml-2 text-sm font-normal">24x7 Security</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={handleResetFilters}>Reset Filters</Button>
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
};
