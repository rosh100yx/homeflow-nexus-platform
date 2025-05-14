
import React from 'react';
import { Clock, Home, MapPin, Tag } from 'lucide-react';
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
    type: 'apartment' | 'house' | 'condo';
  };
}

const statusConfig = {
  'for-sale': { label: 'For Sale', class: 'bg-green-100 text-green-800' },
  'pending': { label: 'Pending', class: 'bg-amber-100 text-amber-800' },
  'sold': { label: 'Sold', class: 'bg-blue-100 text-blue-800' },
};

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img
              src={property.image}
              alt={property.title}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge variant="secondary" className={statusConfig[property.status].class}>
              {statusConfig[property.status].label}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{property.title}</h3>
          <p className="font-bold text-saas-600">{property.price}</p>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground mb-3 text-sm">
          <MapPin className="h-3 w-3" />
          <span>{property.address}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4 text-muted-foreground" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4 text-muted-foreground" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Badge variant="outline" className="rounded-sm">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </Badge>
        <Button variant="ghost" size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
};
