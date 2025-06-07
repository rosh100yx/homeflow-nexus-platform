
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Search, FileText, ArrowRight, Download, SlidersHorizontal } from 'lucide-react';
import { AgreementCard } from '@/components/agreements/AgreementCard';
import { CreateAgreementDialog } from '@/components/agreements/CreateAgreementDialog';

// Mock data for agreements
const agreements = [
  {
    id: '1',
    title: 'Purchase Agreement - Royal Empress',
    propertyName: 'Royal Empress, 3 BHK Apartment',
    location: 'Baner, Pune',
    clientName: 'Rajesh Sharma',
    status: 'active' as const,
    createdDate: 'May 10, 2025',
    dueDate: 'May 25, 2025',
    documentType: 'Purchase Agreement',
    amount: '₹85,50,000',
    signedBy: ['Rajesh Sharma'],
    pendingWith: ['Vijay Constructions'],
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '2',
    title: 'Booking Form - Green Valley Villa',
    propertyName: 'Green Valley Villa, 4 BHK Villa',
    location: 'Koregaon Park, Pune',
    clientName: 'Priya Patel',
    status: 'draft' as const,
    createdDate: 'May 11, 2025',
    dueDate: 'May 20, 2025',
    documentType: 'Booking Form',
    amount: '₹1,25,00,000',
    signedBy: [],
    pendingWith: ['Priya Patel', 'Sunshine Developers'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '3',
    title: 'Sale Deed - Horizon Heights',
    propertyName: 'Horizon Heights, 2 BHK Apartment',
    location: 'Kharadi, Pune',
    clientName: 'Amit Singh',
    status: 'signed' as const,
    createdDate: 'May 5, 2025',
    dueDate: 'May 15, 2025',
    documentType: 'Sale Deed',
    amount: '₹65,00,000',
    signedBy: ['Amit Singh', 'Vihaan Constructions'],
    pendingWith: [],
    image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: '4',
    title: 'Rent Agreement - Park Avenue',
    propertyName: 'Park Avenue, 3 BHK Apartment',
    location: 'Viman Nagar, Pune',
    clientName: 'Neha Agarwal',
    status: 'expired' as const,
    createdDate: 'Jan 10, 2025',
    dueDate: 'Apr 10, 2025',
    documentType: 'Rent Agreement',
    amount: '₹55,000/month',
    signedBy: ['Neha Agarwal', 'Property Owner'],
    pendingWith: [],
    image: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

// Mock template data
const templates = [
  { id: '1', name: 'Standard Purchase Agreement', type: 'Purchase', lastUpdated: 'May 1, 2025' },
  { id: '2', name: 'Residential Lease Agreement', type: 'Rent', lastUpdated: 'Apr 15, 2025' },
  { id: '3', name: 'Builder-Buyer Agreement', type: 'Purchase', lastUpdated: 'Apr 10, 2025' },
  { id: '4', name: 'Commercial Property Agreement', type: 'Purchase', lastUpdated: 'Mar 25, 2025' },
];

const Agreements: React.FC = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 lg:ml-60">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Agreements</h1>
            <p className="text-gray-500">Manage and track all property documents and agreements</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Agreement
            </Button>
          </div>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search agreements..." className="pl-9 w-full" />
              </div>
              
              <div className="flex space-x-2 w-full sm:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="signed">Signed</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="agreements" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="agreements">Agreements</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="agreements" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agreements.map(agreement => (
                <AgreementCard key={agreement.id} agreement={agreement} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="templates" className="mt-0">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Document Templates</CardTitle>
                  <Button size="sm">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Template
                  </Button>
                </div>
                <CardDescription>
                  Standard templates for various agreement types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {templates.map(template => (
                      <TableRow key={template.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            {template.name}
                          </div>
                        </TableCell>
                        <TableCell>{template.type}</TableCell>
                        <TableCell>{template.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                            <span className="sr-only">Use Template</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Agreement Analytics</CardTitle>
                <CardDescription>
                  Overview of document statuses and processing times
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground">Active</div>
                        <div className="text-2xl font-bold">12</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground">Draft</div>
                        <div className="text-2xl font-bold">5</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground">Signed</div>
                        <div className="text-2xl font-bold">24</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground">Expired</div>
                        <div className="text-2xl font-bold">3</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="p-8 text-center bg-muted rounded-md">
                    <p className="text-muted-foreground">Detailed analytics charts will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <CreateAgreementDialog 
        open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen} 
      />
    </div>
  );
};

export default Agreements;
