
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

type Role = 'builder' | 'realtor' | 'buyer';

// Mock data for stats cards
const statsDataByRole = {
  builder: [
    { title: 'Total Projects', value: '24', icon: <Building2 className="h-5 w-5" />, change: { value: 12, type: 'increase' } },
    { title: 'Active Properties', value: '18', icon: <Building2 className="h-5 w-5" />, change: { value: 5, type: 'increase' } },
    { title: 'Pending Payments', value: '$124,500', icon: <DollarSign className="h-5 w-5" />, change: { value: 8, type: 'decrease' } },
    { title: 'New Inquiries', value: '35', icon: <Users className="h-5 w-5" />, change: { value: 20, type: 'increase' } },
  ],
  realtor: [
    { title: 'Active Listings', value: '32', icon: <Building2 className="h-5 w-5" />, change: { value: 8, type: 'increase' } },
    { title: 'Leads', value: '87', icon: <Users className="h-5 w-5" />, change: { value: 15, type: 'increase' } },
    { title: 'Commissions', value: '$45,200', icon: <DollarSign className="h-5 w-5" />, change: { value: 12, type: 'increase' } },
    { title: 'Scheduled Viewings', value: '18', icon: <Calendar className="h-5 w-5" />, change: { value: 3, type: 'decrease' } },
  ],
  buyer: [
    { title: 'Saved Properties', value: '12', icon: <Building2 className="h-5 w-5" /> },
    { title: 'Recent Views', value: '45', icon: <Building2 className="h-5 w-5" /> },
    { title: 'Appointments', value: '3', icon: <Calendar className="h-5 w-5" /> },
    { title: 'Documents', value: '8', icon: <DollarSign className="h-5 w-5" /> },
  ],
};

// Mock data for activities
const activities = [
  {
    id: '1',
    title: 'New Lead Assigned',
    description: 'John Smith showed interest in Horizon Heights project.',
    time: '10 min ago',
    type: 'lead' as const,
    user: {
      name: 'Emma Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '2',
    title: 'Payment Received',
    description: 'Second installment of $25,000 received for Unit 304.',
    time: '2 hours ago',
    type: 'payment' as const,
  },
  {
    id: '3',
    title: 'Property Status Updated',
    description: 'Skyview Towers - Unit 405 marked as "Reserved".',
    time: '5 hours ago',
    type: 'property' as const,
    user: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  },
  {
    id: '4',
    title: 'Document Uploaded',
    description: 'Agreement document uploaded for Riverfront Estate.',
    time: 'Yesterday',
    type: 'document' as const,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
  },
];

// Mock data for properties
const properties = [
  {
    id: '1',
    title: 'Lakeside Villa',
    address: '123 Lake View Dr, Orlando, FL',
    price: '$435,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 3,
    baths: 2,
    sqft: 2100,
    status: 'for-sale' as const,
    type: 'house' as const,
  },
  {
    id: '2',
    title: 'Downtown Apartment',
    address: '456 Main St, Orlando, FL',
    price: '$285,000',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: 'pending' as const,
    type: 'apartment' as const,
  },
];

// Mock data for leads
const leads = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(407) 555-1234',
    status: 'new' as const,
    source: 'Website',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastContact: 'May 12, 2025',
    notes: 'Interested in 3BR properties in the downtown area.',
    assignedTo: {
      name: 'Emma Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    phone: '(407) 555-5678',
    status: 'contacted' as const,
    source: 'Referral',
    avatar: 'https://i.pravatar.cc/150?img=23',
    lastContact: 'May 10, 2025',
    notes: 'Looking for investment properties under $300k.',
  },
];

const Dashboard: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role>('builder');
  const stats = statsDataByRole[activeRole];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 lg:ml-60">
        <DashboardHeader activeRole={activeRole} setActiveRole={setActiveRole} />
        
        <section className="stats-grid mb-8">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Properties</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <ActivityFeed activities={activities} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Leads</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leads.map(lead => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="w-full h-32 flex items-center justify-center bg-muted rounded-md mb-4">
                  <BarChart3 className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Analytics data will appear here based on your activity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
