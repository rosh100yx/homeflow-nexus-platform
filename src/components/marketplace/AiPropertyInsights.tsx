
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, TrendingUp, MapPin, Home, Building } from 'lucide-react';

export const AiPropertyInsights: React.FC = () => {
  return (
    <Card className="mb-6 border-saas-secondary/40">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-5 w-5 text-saas-secondary" />
          <h2 className="text-lg font-medium text-saas-dark">AI Property Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-saas-secondary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-saas-secondary" />
              <h3 className="font-medium">Price Trends</h3>
            </div>
            <p className="text-sm text-muted-foreground">Property values in Koregaon Park have increased 8.5% over the last year, outperforming the Pune average of 6.2%.</p>
          </div>
          
          <div className="bg-saas-secondary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-saas-secondary" />
              <h3 className="font-medium">Location Analysis</h3>
            </div>
            <p className="text-sm text-muted-foreground">Viman Nagar offers excellent connectivity to IT hubs and has shown consistent demand from young professionals.</p>
          </div>
          
          <div className="bg-saas-secondary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-5 w-5 text-saas-secondary" />
              <h3 className="font-medium">Investment Potential</h3>
            </div>
            <p className="text-sm text-muted-foreground">Upcoming metro expansion to Hinjewadi is expected to boost property values by 10-15% in adjacent areas.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Ask AI about Pune real estate market..." 
            className="flex-grow border-saas-secondary/30 focus-visible:ring-saas-secondary"
          />
          <Button className="bg-saas-secondary hover:bg-saas-secondary/90">
            <Sparkles className="h-4 w-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
