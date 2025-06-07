
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Sparkles, TrendingUp, MapPin, Home, Building, AlertCircle, Clock, ArrowUpRight, ChevronRight, Search, BarChart3 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AiInsights = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recentQueries, setRecentQueries] = useState([
    "What areas in Pune have the best appreciation potential?",
    "Compare rental yields between Baner and Viman Nagar",
    "Upcoming infrastructure projects affecting real estate in Pune"
  ]);
  
  const handleAskAi = () => {
    if (!query.trim()) {
      toast({
        title: "Query Required",
        description: "Please enter a question to ask the AI",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setLoading(true);
    toast({
      title: "Analyzing Data",
      description: "Processing your query about Pune real estate...",
      duration: 3000,
    });
    
    // In a real app, this would be an API call to an AI service
    setTimeout(() => {
      setLoading(false);
      if (!recentQueries.includes(query)) {
        setRecentQueries([query, ...recentQueries].slice(0, 5));
      }
      setQuery('');
      toast({
        title: "Analysis Complete",
        description: "AI insights for your query are ready",
        duration: 3000,
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 lg:ml-60">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-saas-dark mb-1">AI Insights</h1>
            <p className="text-muted-foreground">Advanced analytics and AI-powered insights for Pune real estate</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-sm border-saas-secondary/30">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Sparkles className="h-5 w-5 text-saas-secondary" />
                <div>
                  <CardTitle>Ask AI Assistant</CardTitle>
                  <CardDescription>Get AI-powered insights about Pune real estate market</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <Input 
                    placeholder="Ask a question about Pune real estate..." 
                    className="flex-grow border-saas-secondary/30 focus-visible:ring-saas-secondary"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskAi()}
                  />
                  <Button 
                    className="bg-saas-secondary hover:bg-saas-secondary/90"
                    onClick={handleAskAi}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Analyzing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Ask AI
                      </span>
                    )}
                  </Button>
                </div>
                
                <div className="space-y-1 mb-4">
                  {recentQueries.length > 0 && (
                    <p className="text-xs text-muted-foreground mb-2">Recent Queries:</p>
                  )}
                  {recentQueries.map((q, i) => (
                    <div 
                      key={i}
                      className="text-sm p-2 rounded hover:bg-muted cursor-pointer flex justify-between items-center"
                      onClick={() => setQuery(q)}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {q}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                
                <div className="border rounded-lg p-4 bg-saas-secondary/5">
                  <h3 className="text-base font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-saas-secondary" />
                    Latest AI Insight: Pune Market Forecast
                  </h3>
                  
                  <div className="text-sm space-y-3">
                    <p>
                      Based on current trends and historical data analysis, the Pune real estate market is projected to see a <strong>7-9% appreciation</strong> in property values over the next 12 months, with significant variations by locality.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="border rounded p-2 text-center">
                        <p className="text-xs text-muted-foreground">East Pune</p>
                        <p className="font-medium text-green-600">+12.3%</p>
                      </div>
                      <div className="border rounded p-2 text-center">
                        <p className="text-xs text-muted-foreground">West Pune</p>
                        <p className="font-medium text-green-600">+8.7%</p>
                      </div>
                      <div className="border rounded p-2 text-center">
                        <p className="text-xs text-muted-foreground">Central Pune</p>
                        <p className="font-medium text-green-600">+5.2%</p>
                      </div>
                    </div>
                    
                    <p>
                      Highest growth areas include <strong>Hinjewadi</strong> and <strong>Wagholi</strong> due to infrastructure developments and commercial expansion. The luxury segment in <strong>Koregaon Park</strong> is expected to remain stable with moderate growth of 4-5%.
                    </p>
                    
                    <div className="flex justify-between items-center text-xs mt-3 pt-3 border-t">
                      <span className="text-muted-foreground">Analysis based on 24,580 property transactions and market reports</span>
                      <span className="text-muted-foreground">Updated: May 15, 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI-Powered Market Indicators</CardTitle>
                <CardDescription>Real-time analytics for Pune</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Market Sentiment</p>
                      <p className="text-xs text-muted-foreground">Based on 2,500+ data points</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Positive</p>
                    <p className="text-xs text-green-600">85/100</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Affordability Index</p>
                      <p className="text-xs text-muted-foreground">Price to income ratio</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Moderate</p>
                    <p className="text-xs text-amber-600">63/100</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Investment Potential</p>
                      <p className="text-xs text-muted-foreground">5-year growth projection</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">High</p>
                    <p className="text-xs text-green-600">78/100</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Supply-Demand Gap</p>
                      <p className="text-xs text-muted-foreground">Market equilibrium</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Balanced</p>
                    <p className="text-xs text-blue-600">72/100</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" className="w-full flex items-center gap-2 justify-center">
                  <BarChart3 className="h-4 w-4" />
                  View Full Analytics
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-saas-primary/5 border-saas-primary/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Property Valuation</CardTitle>
                <CardDescription>AI-powered valuation service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Get an accurate valuation of any property in Pune with our AI valuation tool.</p>
                <Button className="w-full">
                  Get Property Valuation
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-saas-secondary/5 border-saas-secondary/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Investment Calculator</CardTitle>
                <CardDescription>ROI and mortgage estimator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Calculate potential returns, mortgage payments, and more.</p>
                <Button variant="outline" className="w-full">
                  Open Calculator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Trending AI Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Pune skyline" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Rental Yield Analysis</h3>
                <p className="text-sm text-muted-foreground mb-2">AI-powered analysis of rental yields across Pune localities</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">May 12, 2025</p>
                  <Button variant="ghost" size="sm" className="h-8 px-2 py-0">
                    View Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Price trends chart" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Price Prediction Model</h3>
                <p className="text-sm text-muted-foreground mb-2">12-month price forecast for key Pune micro-markets</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">May 8, 2025</p>
                  <Button variant="ghost" size="sm" className="h-8 px-2 py-0">
                    View Forecast
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Infrastructure map" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Infrastructure Impact Analysis</h3>
                <p className="text-sm text-muted-foreground mb-2">How new infrastructure projects will affect property values</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">May 5, 2025</p>
                  <Button variant="ghost" size="sm" className="h-8 px-2 py-0">
                    View Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AiInsights;
