import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FileText, Search, Book, BookOpen, Sparkles, FileSearch, FilePen, Calendar, Database, Bookmark, ClipboardCheck } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';

// Sample data
const articles = [
  {
    id: "1",
    title: "Pune Real Estate Market Overview 2025",
    description: "A comprehensive analysis of Pune's real estate market trends, pricing, and forecasts for 2025.",
    category: "Market Insights",
    author: "Ravi Shankar",
    date: "May 10, 2025",
    readTime: "8 min read",
    tags: ["Market Analysis", "Investment", "Pune"],
  },
  {
    id: "2",
    title: "Guide to Property Registration in Maharashtra",
    description: "Step-by-step guide to property registration process, stamp duty and registration charges in Maharashtra.",
    category: "Legal",
    author: "Priya Patel",
    date: "April 28, 2025",
    readTime: "10 min read",
    tags: ["Legal", "Registration", "Documentation"],
  },
  {
    id: "3",
    title: "Emerging Localities in Pune: Investment Hotspots",
    description: "Detailed analysis of upcoming areas in Pune with high growth potential for real estate investment.",
    category: "Investment",
    author: "Anil Deshmukh",
    date: "May 5, 2025",
    readTime: "12 min read",
    tags: ["Investment", "Growth Areas", "ROI"],
  },
  {
    id: "4",
    title: "RERA Compliance Guide for Builders in Pune",
    description: "Comprehensive guide to RERA regulations, compliance requirements and documentation for developers.",
    category: "Legal",
    author: "Sunita Sharma",
    date: "April 15, 2025",
    readTime: "15 min read",
    tags: ["RERA", "Compliance", "Regulations"],
  },
  {
    id: "5",
    title: "Home Loan Interest Rates Comparison 2025",
    description: "Detailed comparison of home loan interest rates, processing fees and eligibility criteria from major banks.",
    category: "Finance",
    author: "Vikram Malhotra",
    date: "May 8, 2025",
    readTime: "7 min read",
    tags: ["Home Loans", "Finance", "Interest Rates"],
  },
];

const templates = [
  {
    id: "1",
    title: "Rental Agreement - Residential",
    description: "Standard rental agreement template for residential properties in Maharashtra",
    category: "Agreements",
    lastUpdated: "May 12, 2025",
  },
  {
    id: "2",
    title: "Sale Deed - Apartment",
    description: "Comprehensive sale deed for apartment properties",
    category: "Sale Documents",
    lastUpdated: "April 30, 2025",
  },
  {
    id: "3",
    title: "Commercial Lease Agreement",
    description: "Detailed lease agreement for commercial properties",
    category: "Agreements",
    lastUpdated: "May 2, 2025",
  },
  {
    id: "4",
    title: "Property Inspection Checklist",
    description: "Detailed checklist for property inspections",
    category: "Checklists",
    lastUpdated: "May 7, 2025",
  },
];

// Pune real estate market data
const marketData = [
  { area: "Koregaon Park", price: "₹12,500", change: "+5.2%", demand: "High" },
  { area: "Baner", price: "₹9,200", change: "+8.7%", demand: "Very High" },
  { area: "Viman Nagar", price: "₹8,900", change: "+6.3%", demand: "High" },
  { area: "Hinjewadi", price: "₹7,800", change: "+15.2%", demand: "Very High" },
  { area: "Kharadi", price: "₹8,100", change: "+12.5%", demand: "High" },
  { area: "Aundh", price: "₹10,200", change: "+4.8%", demand: "Medium" },
  { area: "Magarpatta", price: "₹9,500", change: "+7.1%", demand: "High" },
  { area: "Hadapsar", price: "₹6,900", change: "+9.6%", demand: "Medium" },
  { area: "Wagholi", price: "₹5,800", change: "+18.2%", demand: "Very High" },
  { area: "Wakad", price: "₹7,400", change: "+11.3%", demand: "High" },
];

const Knowledgebase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredTemplates = templates.filter(template => 
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 lg:ml-60">
        <PageContainer hasSidebar={true} maxWidth="max-w-7xl" padding="px-4 py-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold">Knowledgebase</h1>
              <p className="text-gray-600">Find answers and resources for your queries</p>
            </div>

            {/* Default Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Knowledgebase Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Article 1</CardTitle>
                  <CardDescription>Details about Article 1</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Article 2</CardTitle>
                  <CardDescription>Details about Article 2</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </PageContainer>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-saas-dark mb-1">Knowledge Base</h1>
            <p className="text-muted-foreground">Resources, guides, and market insights for Pune real estate</p>
          </div>
          
          <div className="relative mt-4 md:mt-0 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search articles, templates, and market data..." 
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Articles & Guides</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="market-data" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Market Data</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="mb-2">
                          {article.category}
                        </Badge>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg font-semibold line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between text-sm mt-4">
                        <div className="text-muted-foreground">
                          {article.date} • {article.readTime}
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 px-2 py-0">
                          Read Article
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-12">
                  <FileSearch className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Articles Found</h3>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your search query or browse all articles
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map(template => (
                  <Card key={template.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="mb-2">
                          {template.category}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          Updated: {template.lastUpdated}
                        </p>
                      </div>
                      <CardTitle className="text-lg font-semibold">
                        {template.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <FilePen className="h-4 w-4" />
                          Edit Template
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2 flex flex-col items-center justify-center py-12">
                  <FileSearch className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Templates Found</h3>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your search query or browse all templates
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="market-data">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Pune Real Estate Price Trends (May 2025)</CardTitle>
                  <CardDescription>
                    Average price per sq. ft. across major localities in Pune
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Area</th>
                          <th className="text-right p-2">Avg. Price/sqft</th>
                          <th className="text-right p-2">YoY Change</th>
                          <th className="text-right p-2">Demand</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketData.map((item, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="p-2 font-medium">{item.area}</td>
                            <td className="text-right p-2">{item.price}</td>
                            <td className="text-right p-2 text-green-600 font-medium">{item.change}</td>
                            <td className="text-right p-2">
                              <Badge variant={item.demand === "Very High" ? "default" : item.demand === "High" ? "secondary" : "outline"}>
                                {item.demand}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4">
                    Source: MahaRERA, Pune Real Estate Association, May 2025
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">Overall Growth</h4>
                      <p className="text-sm text-muted-foreground">Pune real estate prices grew by an average of 8.5% year-over-year</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Top Performing Area</h4>
                      <p className="text-sm text-muted-foreground">Wagholi (18.2% YoY) driven by improved infrastructure and IT corridor expansion</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Luxury Segment</h4>
                      <p className="text-sm text-muted-foreground">5.4% price appreciation in luxury properties (₹1.5Cr+) in Koregaon Park and Aundh</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Rental Yields</h4>
                      <p className="text-sm text-muted-foreground">Average rental yield of 3.8% with Hinjewadi and Kharadi exceeding 4.2%</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <ClipboardCheck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Pune Metro Phase 2</p>
                        <p className="text-xs text-muted-foreground">Expected completion: Q4 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <ClipboardCheck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Ring Road Project</p>
                        <p className="text-xs text-muted-foreground">Expected completion: Q2 2027</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <ClipboardCheck className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Airport Expansion</p>
                        <p className="text-xs text-muted-foreground">In progress (50% complete)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <ClipboardCheck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Pune-Mumbai Expressway Expansion</p>
                        <p className="text-xs text-muted-foreground">Expected completion: Q3 2026</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Knowledgebase;
