
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { LeadCard } from '@/components/leads/LeadCard';
import { BarChart3, Building2, Calendar, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

type Role = 'builder' | 'realtor';

// Mock data for stats cards
const statsDataByRole = {
  builder: [
    { title: 'Total Pune Projects', value: '18', icon: <Building2 className="h-5 w-5" />, change: { value: 8, type: 'increase' as const } },
    { title: 'Active Properties', value: '14', icon: <Building2 className="h-5 w-5" />, change: { value: 4, type: 'increase' as const } },
    { title: 'Pending Payments', value: '₹9,50,000', icon: <DollarSign className="h-5 w-5" />, change: { value: 12, type: 'decrease' as const } },
    { title: 'New Inquiries', value: '28', icon: <Users className="h-5 w-5" />, change: { value: 15, type: 'increase' as const } },
  ],
  realtor: [
    { title: 'Active Pune Listings', value: '27', icon: <Building2 className="h-5 w-5" />, change: { value: 6, type: 'increase' as const } },
    { title: 'Pune Leads', value: '64', icon: <Users className="h-5 w-5" />, change: { value: 12, type: 'increase' as const } },
    { title: 'Commissions', value: '₹3,80,000', icon: <DollarSign className="h-5 w-5" />, change: { value: 9, type: 'increase' as const } },
    { title: 'Scheduled Viewings', value: '15', icon: <Calendar className="h-5 w-5" />, change: { value: 3, type: 'decrease' as const } },
  ],
};

// Modified Buyer insights stats - adding empty change property to match StatsCard interface requirements
const buyerInsightsStats = [
  { title: 'Saved Pune Properties', value: '12', icon: <Building2 className="h-5 w-5" />, change: undefined },
  { title: 'Recent Views', value: '45', icon: <Building2 className="h-5 w-5" />, change: undefined },
  { title: 'Appointments', value: '3', icon: <Calendar className="h-5 w-5" />, change: undefined },
  { title: 'Documents', value: '8', icon: <DollarSign className="h-5 w-5" />, change: undefined },
];

// Mock data for activities
const activities = [
  {
    id: '1',
    title: 'New Lead Assigned',
    description: 'Rahul Deshmukh showed interest in Koregaon Park Residences.',
    time: '10 min ago',
    type: 'lead' as const,
    user: {
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '2',
    title: 'Payment Received',
    description: 'Second installment of ₹2,00,000 received for Aundh Heights Unit 304.',
    time: '2 hours ago',
    type: 'payment' as const,
  },
  {
    id: '3',
    title: 'Property Status Updated',
    description: 'Kharadi Towers - Unit 405 marked as "Reserved".',
    time: '5 hours ago',
    type: 'property' as const,
    user: {
      name: 'Arjun Patel',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  },
  {
    id: '4',
    title: 'Document Uploaded',
    description: 'Agreement document uploaded for Magarpatta Estate.',
    time: 'Yesterday',
    type: 'document' as const,
    user: {
      name: 'Neha Verma',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  },
];

// Mock data for properties
const properties = [
  {
    id: '1',
    title: 'Luxury Villa',
    address: '123 Koregaon Park, Pune, MH',
    price: '₹1,25,00,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 4,
    baths: 3,
    sqft: 3200,
    status: 'for-sale' as const,
    type: 'house' as const,
  },
  {
    id: '2',
    title: 'Modern Apartment',
    address: '456 Baner Road, Pune, MH',
    price: '₹85,00,000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 1600,
    status: 'pending' as const,
    type: 'apartment' as const,
  },
];

// Mock data for leads
const leads = [
  {
    id: '1',
    name: 'Amit Sharma',
    email: 'amit.sharma@example.com',
    phone: '(020) 555-1234',
    status: 'new' as const,
    source: 'Website',
    avatar: 'https://i.pravatar.cc/150?img=59',
    lastContact: 'May 12, 2025',
    notes: 'Interested in 3BHK properties in Hinjewadi area.',
    assignedTo: {
      name: 'Priya Sharma',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '2',
    name: 'Meera Patil',
    email: 'meera.patil@example.com',
    phone: '(020) 555-5678',
    status: 'contacted' as const,
    source: 'Referral',
    avatar: 'https://i.pravatar.cc/150?img=45',
    lastContact: 'May 10, 2025',
    notes: 'Looking for investment properties in Viman Nagar under ₹1 Cr.',
  },
];

const Dashboard: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role>('builder');
  const [showBuyerInsights, setShowBuyerInsights] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const stats = showBuyerInsights ? buyerInsightsStats : statsDataByRole[activeRole];
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleShowBuyerInsights = () => {
    setShowBuyerInsights(!showBuyerInsights);
    toast({
      title: showBuyerInsights ? "Switched to Professional View" : "Showing Buyer Insights",
      description: showBuyerInsights ? 
        `Returned to ${activeRole === 'builder' ? 'Builder' : 'Realtor'} dashboard` : 
        "Displaying potential buyer behavior and preferences",
      duration: 3000,
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 2) {
      toast({
        title: "Search Results",
        description: `Searching for Pune properties matching "${e.target.value}"`,
        duration: 2000,
      });
    }
  };
  
  // Filter properties based on search query
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6 lg:ml-60 max-w-7xl">
          <DashboardHeader 
            activeRole={activeRole} 
            setActiveRole={setActiveRole}
            onShowBuyerInsights={handleShowBuyerInsights}
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
          />
          
          <section className="stats-grid mb-6">
            {stats.map((stat, index) => (
              <StatsCard 
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
              />
            ))}
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="h-full shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">{showBuyerInsights ? "Recommended Properties" : "Recent Pune Properties"}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/properties')}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[420px] pr-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                      {filteredProperties.length === 0 && (
                        <div className="col-span-2 flex items-center justify-center h-40 text-muted-foreground">
                          No properties match your search
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ActivityFeed activities={activities} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Recent Pune Leads</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/leads')}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {leads.map(lead => (
                        <LeadCard key={lead.id} lead={lead} />
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Pune Market Overview</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="w-full h-32 flex items-center justify-center bg-muted rounded-md mb-4">
                    <BarChart3 className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    {showBuyerInsights 
                      ? "Buyer interest trends across Pune neighborhoods"
                      : "Analytics data for Pune real estate market performance"}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4"
                    onClick={() => navigate('/analytics')}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
