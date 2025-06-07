
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { LeadCard } from '@/components/leads/LeadCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  PlusCircle, 
  Search, 
  SlidersHorizontal, 
  User, 
  UserPlus
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AddLeadDialog } from '@/components/leads/AddLeadDialog';

// Mock data for leads in Pune, India
const leads = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '(+91) 98765-43210',
    status: 'new' as const,
    source: 'Website',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastContact: 'May 12, 2025',
    notes: 'Interested in 3BHK apartment in Baner area, budget around 85L.',
    assignedTo: {
      name: 'Neha Kapoor',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '(+91) 87654-32109',
    status: 'contacted' as const,
    source: 'Referral',
    avatar: 'https://i.pravatar.cc/150?img=23',
    lastContact: 'May 10, 2025',
    notes: 'Looking for investment property in Kharadi, budget under 70L.',
  },
  {
    id: '3',
    name: 'Amit Singh',
    email: 'amit.singh@example.com',
    phone: '(+91) 76543-21098',
    status: 'qualified' as const,
    source: 'Housing.com',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastContact: 'May 8, 2025',
    notes: 'Pre-qualified for 95L. Interested in Serene Heights project in Aundh.',
    assignedTo: {
      name: 'Vikram Mehta',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  },
  {
    id: '4',
    name: 'Meera Verma',
    email: 'meera.verma@example.com',
    phone: '(+91) 65432-10987',
    status: 'unqualified' as const,
    source: 'Property Expo',
    avatar: 'https://i.pravatar.cc/150?img=8',
    lastContact: 'May 5, 2025',
    notes: 'Budget constraints (under 50L). Looking for something below our inventory.',
  },
  {
    id: '5',
    name: 'Arjun Reddy',
    email: 'arjun.reddy@example.com',
    phone: '(+91) 54321-09876',
    status: 'new' as const,
    source: 'Facebook Ad',
    avatar: 'https://i.pravatar.cc/150?img=67',
    lastContact: 'May 13, 2025',
    notes: 'Looking for 4BHK villa in Koregaon Park, budget 2Cr+.',
  },
  {
    id: '6',
    name: 'Ananya Desai',
    email: 'ananya.desai@example.com',
    phone: '(+91) 43210-98765',
    status: 'contacted' as const,
    source: 'Website',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastContact: 'May 9, 2025',
    notes: 'Scheduled for property viewing at Green Valley Villa next week.',
    assignedTo: {
      name: 'Neha Kapoor',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '7',
    name: 'Rahul Malhotra',
    email: 'rahul.malhotra@example.com',
    phone: '(+91) 87651-23456',
    status: 'qualified' as const,
    source: '99acres.com',
    avatar: 'https://i.pravatar.cc/150?img=53',
    lastContact: 'May 7, 2025',
    notes: 'Ready to invest in multiple properties in Hinjewadi. Budget 3Cr.',
    assignedTo: {
      name: 'Vikram Mehta',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  },
  {
    id: '8',
    name: 'Kavita Joshi',
    email: 'kavita.joshi@example.com',
    phone: '(+91) 76543-89012',
    status: 'new' as const,
    source: 'Magicbricks',
    avatar: 'https://i.pravatar.cc/150?img=45',
    lastContact: 'May 14, 2025',
    notes: 'NRI looking for investment property in Pune. Interested in Baner or Aundh.',
  },
];

const Leads: React.FC = () => {
  const [isAddLeadDialogOpen, setIsAddLeadDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 lg:ml-60">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leads & CRM</h1>
            <p className="text-gray-500">Manage your leads and customer relationships in Pune region</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Import
            </Button>
            <Button onClick={() => setIsAddLeadDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Lead
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Leads Pipeline Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Lead Pipeline</CardTitle>
                <CardDescription>Overview of your Pune sales funnel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm font-medium">New</span>
                      </div>
                      <span className="text-sm font-medium">8</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                        <span className="text-sm font-medium">Contacted</span>
                      </div>
                      <span className="text-sm font-medium">6</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm font-medium">Qualified</span>
                      </div>
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm font-medium">Unqualified</span>
                      </div>
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  View All Leads
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Leads List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="p-4 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <CardTitle>Leads</CardTitle>
                  
                  <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input placeholder="Search leads..." className="pl-9 w-[200px]" />
                    </div>
                    
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="unqualified">Unqualified</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button variant="outline" size="icon">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="all">All Leads</TabsTrigger>
                    <TabsTrigger value="new">New</TabsTrigger>
                    <TabsTrigger value="contacted">Contacted</TabsTrigger>
                    <TabsTrigger value="qualified">Qualified</TabsTrigger>
                  </TabsList>
                
                  <CardContent className="p-4">
                    <TabsContent value="all" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leads.map(lead => (
                          <LeadCard key={lead.id} lead={lead} />
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="new" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leads
                          .filter(lead => lead.status === 'new')
                          .map(lead => (
                            <LeadCard key={lead.id} lead={lead} />
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="contacted" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leads
                          .filter(lead => lead.status === 'contacted')
                          .map(lead => (
                            <LeadCard key={lead.id} lead={lead} />
                          ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="qualified" className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {leads
                          .filter(lead => lead.status === 'qualified')
                          .map(lead => (
                            <LeadCard key={lead.id} lead={lead} />
                          ))}
                      </div>
                    </TabsContent>
                  </CardContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      
      <AddLeadDialog 
        open={isAddLeadDialogOpen} 
        onOpenChange={setIsAddLeadDialogOpen} 
      />
    </div>
  );
};

export default Leads;
