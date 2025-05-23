
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Building2, Home, Users, Percent, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Role = 'builder' | 'realtor';

const Dashboard = () => {
  // Add state for the required props
  const [activeRole, setActiveRole] = useState<Role>('builder');
  const [searchQuery, setSearchQuery] = useState('');

  // Handler functions
  const handleShowBuyerInsights = () => {
    console.log('Show buyer insights');
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Mock activity data for ActivityFeed
  const activityData = [
    {
      id: '1',
      title: 'New Lead Generated',
      description: 'Rahul Sharma showed interest in Ruby Tower',
      time: '2 hours ago',
      type: 'lead' as const,
      user: {
        name: 'Neha Patel',
        avatar: ''
      }
    },
    {
      id: '2',
      title: 'Property Viewing Scheduled',
      description: 'Site visit for Blue Heights scheduled tomorrow',
      time: '4 hours ago',
      type: 'property' as const,
      user: {
        name: 'Vikram Singh',
        avatar: ''
      }
    },
    {
      id: '3',
      title: 'Payment Received',
      description: '₹2.5L booking amount received for Serene Villas',
      time: '1 day ago',
      type: 'payment' as const,
      user: {
        name: 'Priya Desai',
        avatar: ''
      }
    },
    {
      id: '4',
      title: 'Agreement Generated',
      description: 'Sale agreement created for Green Valley unit 302',
      time: '2 days ago',
      type: 'document' as const,
      user: {
        name: 'Aditya Sharma',
        avatar: ''
      }
    }
  ];

  return (
    <PageContainer>
      <DashboardHeader 
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        onShowBuyerInsights={handleShowBuyerInsights}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <div className="stats-grid mb-8">
        <StatsCard
          title="Total Properties"
          value="126"
          change={{ value: 12, type: 'increase' }}
          icon={<Home className="h-5 w-5" />}
        />
        <StatsCard
          title="Active Leads"
          value="84"
          change={{ value: 24, type: 'increase' }}
          icon={<Users className="h-5 w-5" />}
        />
        <StatsCard
          title="Projects"
          value="16"
          change={{ value: 2, type: 'increase' }}
          icon={<Building2 className="h-5 w-5" />}
        />
        <StatsCard
          title="Revenue"
          value="₹42.5L"
          change={{ value: 8, type: 'increase' }}
          icon={<Percent className="h-5 w-5" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Monthly Sales</CardTitle>
              <CardDescription>Total sales performance for the current month</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-b">
              <p className="text-muted-foreground">Chart will be displayed here</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-4">
              <div>
                <p className="text-sm font-medium">Total Revenue: ₹6.2Cr</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                View Report
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Latest property transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Ruby Tower - 3BHK</p>
                        <p className="text-xs text-muted-foreground">Sold for ₹1.45Cr</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">12% up</p>
                        <p className="text-xs text-muted-foreground">from avg price</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-xs w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Completion</CardTitle>
                <CardDescription>Current projects status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Green Valley</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Blue Heights</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Serene Villas</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="text-xs w-full">
                  View All Projects
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityFeed activities={activityData} />
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-xs w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
