
import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const MarketplaceFilters: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="space-y-4">
        <h3 className="font-medium text-saas-dark">Price Range</h3>
        <div className="flex items-center justify-between gap-4 mb-2">
          <div>
            <Label htmlFor="min-price">Min</Label>
            <Input id="min-price" placeholder="₹0" className="mt-1" />
          </div>
          <div className="text-center pt-4">to</div>
          <div>
            <Label htmlFor="max-price">Max</Label>
            <Input id="max-price" placeholder="₹5 Cr" className="mt-1" />
          </div>
        </div>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-saas-dark">Property Type</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="apartment" />
            <label htmlFor="apartment" className="text-sm">Apartment</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="house" />
            <label htmlFor="house" className="text-sm">House</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="villa" />
            <label htmlFor="villa" className="text-sm">Villa</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="plot" />
            <label htmlFor="plot" className="text-sm">Plot</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="commercial" />
            <label htmlFor="commercial" className="text-sm">Commercial</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="office" />
            <label htmlFor="office" className="text-sm">Office</label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-saas-dark">Bedrooms & Bathrooms</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select>
              <SelectTrigger id="bedrooms" className="mt-1">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Select>
              <SelectTrigger id="bathrooms" className="mt-1">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="area">Area (sq.ft)</Label>
          <div className="flex items-center gap-2">
            <Input id="min-area" placeholder="Min" className="mt-1" />
            <span>-</span>
            <Input id="max-area" placeholder="Max" className="mt-1" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-saas-dark">Location & Amenities</h3>
        <div>
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location" className="mt-1">
              <SelectValue placeholder="All Pune" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pune</SelectItem>
              <SelectItem value="koregaon-park">Koregaon Park</SelectItem>
              <SelectItem value="baner">Baner</SelectItem>
              <SelectItem value="viman-nagar">Viman Nagar</SelectItem>
              <SelectItem value="kothrud">Kothrud</SelectItem>
              <SelectItem value="hinjewadi">Hinjewadi</SelectItem>
              <SelectItem value="magarpatta">Magarpatta City</SelectItem>
              <SelectItem value="wakad">Wakad</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="gym" />
            <label htmlFor="gym" className="text-sm">Gym</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pool" />
            <label htmlFor="pool" className="text-sm">Swimming Pool</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="parking" />
            <label htmlFor="parking" className="text-sm">Parking</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="garden" />
            <label htmlFor="garden" className="text-sm">Garden</label>
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline">Reset</Button>
          <Button>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};
