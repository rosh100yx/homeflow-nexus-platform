import React, { useState } from 'react';
import Sidebar from '../ui/sidebar';
import Container from '../ui/container';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { ChartContainer } from '../components/ui/chart';
import { Users, Bell, Search } from 'lucide-react';
import PageLayout from '../layout/PageLayout';

const Dashboard = () => {
  const activeRole: 'builder' | 'realtor' = 'builder';

  return (
    <PageLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Properties" value="1,234" icon={<Users className="h-6 w-6" />} />
        <StatsCard title="Active Leads" value="567" icon={<Bell className="h-6 w-6" />} />
        <StatsCard title="Transactions" value="$89,000" icon={<Search className="h-6 w-6" />} />
        <StatsCard title="Revenue" value="$123,456" icon={<Users className="h-6 w-6" />} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer config={{}}>
          <p>Bar Chart Placeholder</p>
        </ChartContainer>
        <ChartContainer config={{}}>
          <p>Line Chart Placeholder</p>
        </ChartContainer>
      </div>

      {/* Activity Feed */}
      <ActivityFeed activities={[]} />
    </PageLayout>
  );
};

export default Dashboard;
