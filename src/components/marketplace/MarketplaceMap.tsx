
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Search, Maximize, Home, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  image: string;
  lat?: number;
  lng?: number;
}

interface MarketplaceMapProps {
  properties: Property[];
}

// Real Pune locations for map markers
const puneLocations = [
  { name: "Koregaon Park", lat: 18.5362, lng: 73.8959, count: 15 },
  { name: "Baner", lat: 18.5642, lng: 73.7769, count: 12 },
  { name: "Viman Nagar", lat: 18.5679, lng: 73.9143, count: 8 },
  { name: "Hinjewadi", lat: 18.5912, lng: 73.7389, count: 22 },
  { name: "Kharadi", lat: 18.5511, lng: 73.9485, count: 10 },
  { name: "Aundh", lat: 18.5589, lng: 73.8086, count: 14 },
  { name: "Magarpatta City", lat: 18.5169, lng: 73.9285, count: 7 },
];

export const MarketplaceMap: React.FC<MarketplaceMapProps> = ({ properties }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("Koregaon Park");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
  const filteredLocations = puneLocations.filter(location => 
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleLocationClick = (locationName: string) => {
    setSelectedLocation(locationName);
  };
  
  const toggleFullscreen = () => {
    if (mapContainerRef.current) {
      if (!document.fullscreenElement) {
        mapContainerRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  
  return (
    <div className="relative h-[70vh] rounded-lg overflow-hidden border">
      <div className={`absolute inset-0 bg-saas-light ${isFullscreen ? 'z-50' : ''}`} ref={mapContainerRef}>
        {/* Map background - in a real implementation this would be replaced with an actual map */}
        <div className="h-full w-full flex items-center justify-center flex-col gap-2 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/73.88,18.52,11,0/1200x800?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xhYmNkZXZ0MDEwYXdzbnhzODlmbmp1OCJ9.xHAbPITFm67JuSUXJgNvYQ')]">
          {/* Property markers for Pune locations */}
          {puneLocations.map((location, index) => (
            <div 
              key={index}
              className="absolute cursor-pointer"
              style={{ 
                top: `${20 + Math.random() * 60}%`, 
                left: `${20 + Math.random() * 60}%`,
              }}
              onClick={() => handleLocationClick(location.name)}
            >
              <div 
                className={`w-6 h-6 ${selectedLocation === location.name ? 'bg-saas-secondary' : 'bg-saas-primary'} rounded-full flex items-center justify-center text-white font-bold ${selectedLocation === location.name ? 'scale-125' : 'animate-pulse'} transition-all duration-300`}
              >
                {location.count > 9 ? '9+' : location.count}
              </div>
              {selectedLocation === location.name && (
                <div className="absolute -bottom-12 -left-24 w-48">
                  <Card className="p-2 shadow-lg bg-white text-xs border-saas-primary animate-fadeIn">
                    <p className="font-semibold">{location.name}</p>
                    <p className="text-muted-foreground">{location.count} properties</p>
                  </Card>
                </div>
              )}
            </div>
          ))}
          
          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button variant="outline" size="icon" className="bg-white shadow-md" onClick={toggleFullscreen}>
              <Maximize className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white shadow-md">
              <Navigation className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Map search and info panel */}
      <div className="absolute top-4 left-4 right-4 max-w-sm">
        <Card className="p-3 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="relative mb-3">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search areas in Pune..." 
              className="pl-8 pr-4 py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {searchQuery && filteredLocations.length > 0 && (
            <div className="mb-3 max-h-32 overflow-y-auto">
              {filteredLocations.map((location, index) => (
                <div 
                  key={index}
                  className="p-2 hover:bg-muted rounded cursor-pointer flex items-center gap-2 text-sm"
                  onClick={() => handleLocationClick(location.name)}
                >
                  <MapPin className="h-3 w-3 text-saas-primary" />
                  {location.name}
                  <Badge variant="outline" className="ml-auto text-xs">
                    {location.count}
                  </Badge>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-saas-primary" />
            <h3 className="font-medium text-sm">Selected Area: {selectedLocation}</h3>
          </div>
          
          <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
            <Badge variant="outline" className="flex items-center gap-1 justify-center">
              <Home className="h-3 w-3" /> Apartments
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 justify-center">
              Villas
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 justify-center">
              Plots
            </Badge>
          </div>
        </Card>
      </div>
      
      {/* Selected area info */}
      <div className="absolute bottom-4 left-4 right-4 max-w-md">
        <Card className="p-4 bg-white/90 backdrop-blur-md shadow-lg border-saas-primary">
          <h3 className="font-medium mb-1">
            {selectedLocation} Market Data
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {puneLocations.find(l => l.name === selectedLocation)?.count || 0} properties available
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg. Price:</span>
              <span className="font-medium">₹{selectedLocation === "Koregaon Park" ? "12,500" : selectedLocation === "Baner" ? "9,200" : "8,500"}/sqft</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Growth:</span>
              <span className="font-medium text-green-600">+{selectedLocation === "Hinjewadi" ? "15" : selectedLocation === "Kharadi" ? "12" : "8"}% YoY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Demand:</span>
              <span className="font-medium">{selectedLocation === "Koregaon Park" || selectedLocation === "Aundh" ? "High" : "Medium"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Investment:</span>
              <span className="font-medium">{selectedLocation === "Hinjewadi" || selectedLocation === "Kharadi" ? "Excellent" : "Good"}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
