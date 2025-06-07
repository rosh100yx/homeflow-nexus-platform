
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BarChart, LineChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, BarChart3, Brain, Calendar, Download, Filter, LineChart as LineChartIcon, PieChart as PieChartIcon, Sparkles, Users } from 'lucide-react';

// Dummy data for analytics
const monthlyData = [
  { month: 'Jan', sales: 120000, leads: 45, conversions: 12 },
  { month: 'Feb', sales: 150000, leads: 60, conversions: 15 },
  { month: 'Mar', sales: 180000, leads: 75, conversions: 22 },
  { month: 'Apr', sales: 210000, leads: 90, conversions: 30 },
  { month: 'May', sales: 250000, leads: 105, conversions: 35 },
  { month: 'Jun', sales: 280000, leads: 120, conversions: 42 },
  { month: 'Jul', sales: 240000, leads: 105, conversions: 38 },
  { month: 'Aug', sales: 220000, leads: 90, conversions: 32 },
  { month: 'Sep', sales: 290000, leads: 135, conversions: 45 },
  { month: 'Oct', sales: 320000, leads: 150, conversions: 52 },
  { month: 'Nov', sales: 350000, leads: 165, conversions: 58 },
  { month: 'Dec', sales: 380000, leads: 180, conversions: 65 },
];

const sourceData = [
  { name: 'Website', value: 35 },
  { name: 'Referrals', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Property Portals', value: 15 },
  { name: 'Direct', value: 5 },
];

const COLORS = ['#7E69AB', '#9b87f5', '#0FA0CE', '#2ECC71', '#F39C12'];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiQuery, setAiQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-saas-dark mb-1">Product Analytics</h1>
            <p className="text-muted-foreground">Track performance metrics and gain insights</p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-saas-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹3.2 Cr</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-saas-success">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Leads Generated</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-saas-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-saas-success">+8.2%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-saas-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32.4%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-saas-success">+3.5%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Deal Size</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-saas-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹24.8 Lac</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-saas-success">+5.1%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="grid grid-cols-3 w-[400px]">
              <TabsTrigger value="overview">
                <BarChart3 className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="leads">
                <Users className="h-4 w-4 mr-2" />
                Leads
              </TabsTrigger>
              <TabsTrigger value="ai">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Insights
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <LineChartIcon className="h-5 w-5 text-saas-primary" />
                      Revenue Trend
                    </CardTitle>
                    <Button variant="outline" size="sm">Monthly</Button>
                  </div>
                  <CardDescription>Monthly revenue over the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#7E69AB" activeDot={{ r: 8 }} name="Revenue (₹)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <PieChartIcon className="h-5 w-5 text-saas-primary" />
                      Lead Sources
                    </CardTitle>
                    <Button variant="outline" size="sm">All Time</Button>
                  </div>
                  <CardDescription>Distribution of leads by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-saas-primary" />
                      Leads and Conversions
                    </CardTitle>
                    <Button variant="outline" size="sm">Quarterly</Button>
                  </div>
                  <CardDescription>Monthly lead generation and conversion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="leads" fill="#9b87f5" name="Leads" />
                      <Bar yAxisId="right" dataKey="conversions" fill="#0FA0CE" name="Conversions" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="leads" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Lead Performance</CardTitle>
                  <CardDescription>Detailed analysis of lead sources and conversion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">Select a tab to view detailed lead analytics</p>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Website</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">435 leads</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-saas-primary rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Referrals</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">310 leads</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-saas-secondary rounded-full" style={{ width: '55%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Social Media</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">248 leads</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-saas-accent rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Property Portals</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">186 leads</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-saas-success rounded-full" style={{ width: '32%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Direct</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">66 leads</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-saas-warning rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Property Type Performance</CardTitle>
                  <CardDescription>Analysis by property type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Apartments', value: 55 },
                          { name: 'Villas', value: 20 },
                          { name: 'Plots', value: 15 },
                          { name: 'Commercial', value: 10 },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        <Cell fill="#7E69AB" />
                        <Cell fill="#9b87f5" />
                        <Cell fill="#0FA0CE" />
                        <Cell fill="#2ECC71" />
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <Card className="border-saas-secondary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-saas-secondary" />
                  AI Analytics Insights
                </CardTitle>
                <CardDescription>
                  Ask questions about your data and get AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about your data (e.g., 'Which property type has the highest conversion rate?')"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    className="bg-saas-secondary hover:bg-saas-secondary/90"
                    disabled={!aiQuery.trim()}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Insights
                  </Button>
                </div>
                
                <div className="bg-saas-secondary/10 p-6 rounded-lg">
                  <h3 className="font-medium text-saas-secondary mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Generated Insights
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    <p>Based on your data, here are some key insights:</p>
                    
                    <div>
                      <h4 className="font-medium">Trend Analysis:</h4>
                      <p className="text-muted-foreground">Revenue has shown consistent growth with a 15% year-over-year increase. The Q3 performance exceeded projections by 8.3%.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Lead Performance:</h4>
                      <p className="text-muted-foreground">Apartments have the highest conversion rate at 42%, followed by villas at 36%. Website leads convert better than other sources at 28%.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Growth Opportunities:</h4>
                      <p className="text-muted-foreground">Investing more in social media could yield high returns, as it currently drives only 20% of leads but has a 32% conversion rate, second only to referrals.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Recommendations:</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Increase focus on high-converting apartment listings</li>
                        <li>Optimize the website lead capture flow to improve conversion</li>
                        <li>Expand social media marketing efforts for better ROI</li>
                        <li>Consider reallocating 15% of the marketing budget from property portals to referral programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Analytics;
