
import React from 'react';
import { Bed, Bath, MapPin, Tag } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    address: string;
    price: string;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
    status: 'for-sale' | 'pending' | 'sold';
    type: 'apartment' | 'house' | 'condo' | 'villa';
  };
}

const statusConfig = {
  'for-sale': { label: 'For Sale', class: 'bg-green-100 text-green-800' },
  'pending': { label: 'Pending', class: 'bg-amber-100 text-amber-800' },
  'sold': { label: 'Sold', class: 'bg-blue-100 text-blue-800' },
};

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 lg:w-2/5">
          <div className="relative">
            <AspectRatio ratio={4/3} className="md:h-full">
              <img
                src={property.image}
                alt={property.title}
                className="object-cover w-full h-full rounded-t-md md:rounded-l-md md:rounded-t-none"
              />
            </AspectRatio>
            <div className="absolute top-2 right-2 flex gap-2">
              <Badge variant="secondary" className={statusConfig[property.status].class}>
                {statusConfig[property.status].label}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 lg:w-3/5 flex flex-col">
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-retro-navy">{property.title}</h3>
              <p className="font-bold text-retro-orange">{property.price}</p>
            </div>
            <div className="flex items-center gap-1 text-retro-gray mb-3 text-sm">
              <MapPin className="h-3 w-3" />
              <span>{property.address}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-retro-gray" />
                <span>{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-retro-gray" />
                <span>{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4 text-retro-gray" />
                <span>{property.sqft} sq.ft</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0 mt-auto">
            <Badge variant="outline" className="rounded-sm border-retro-navy text-retro-navy">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
            <Button variant="ghost" size="sm" className="text-retro-orange hover:text-retro-orange/80 hover:bg-retro-orange/10">View Details</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};
