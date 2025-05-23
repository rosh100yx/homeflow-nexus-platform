
import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileJson, 
  Layers, 
  LayoutDashboard, 
  PenTool, 
  Palette, 
  Map, 
  Database, 
  Code
} from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("design-system");
  
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-saas-dark">Documentation</h1>
            <p className="text-muted-foreground">Design system, architecture, logs and resources</p>
          </div>
          
          <Button variant="outline">Export Documentation</Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted p-1 h-auto flex flex-wrap">
            <TabsTrigger value="design-system" className="data-[state=active]:bg-background flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Design System</span>
            </TabsTrigger>
            <TabsTrigger value="architecture" className="data-[state=active]:bg-background flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Architecture</span>
            </TabsTrigger>
            <TabsTrigger value="logs" className="data-[state=active]:bg-background flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Development Logs</span>
            </TabsTrigger>
            <TabsTrigger value="sitemap" className="data-[state=active]:bg-background flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span>Sitemap</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-background flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Database Schema</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-background flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Code Structure</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="design-system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Design System</CardTitle>
                <CardDescription>Visual language and component documentation for One Parivaar platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Color Palette</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-primary flex items-end p-2">
                          <span className="text-white text-sm font-medium">Primary</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#FF5349</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-secondary flex items-end p-2">
                          <span className="text-white text-sm font-medium">Secondary</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#FF5349</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-accent flex items-end p-2">
                          <span className="text-white text-sm font-medium">Accent</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#FF5349</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-dark flex items-end p-2">
                          <span className="text-white text-sm font-medium">Dark</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#1A1F2C</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-light flex items-end p-2 border">
                          <span className="text-saas-dark text-sm font-medium">Light</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#F5F7FA</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 w-full rounded bg-saas-muted flex items-end p-2">
                          <span className="text-white text-sm font-medium">Muted</span>
                        </div>
                        <p className="text-xs text-muted-foreground">#8E9196</p>
                      </div>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Typography</h2>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <h1 className="text-4xl font-bold">Heading 1</h1>
                        <p className="text-xs text-muted-foreground mt-1">text-4xl font-bold</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h2 className="text-3xl font-bold">Heading 2</h2>
                        <p className="text-xs text-muted-foreground mt-1">text-3xl font-bold</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h3 className="text-2xl font-bold">Heading 3</h3>
                        <p className="text-xs text-muted-foreground mt-1">text-2xl font-bold</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <h4 className="text-xl font-bold">Heading 4</h4>
                        <p className="text-xs text-muted-foreground mt-1">text-xl font-bold</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <p className="text-base">Base Text</p>
                        <p className="text-xs text-muted-foreground mt-1">text-base</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <p className="text-sm">Small Text</p>
                        <p className="text-xs text-muted-foreground mt-1">text-sm</p>
                      </div>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border rounded-md">
                        <h3 className="font-semibold mb-4">Buttons</h3>
                        <div className="flex flex-wrap gap-4">
                          <Button>Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="link">Link</Button>
                        </div>
                      </div>
                      
                      <div className="p-6 border rounded-md">
                        <h3 className="font-semibold mb-4">Cards</h3>
                        <Card className="w-full">
                          <CardHeader className="p-4">
                            <CardTitle className="text-lg">Card Title</CardTitle>
                            <CardDescription>Card description text</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            Card content goes here
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Architecture</CardTitle>
                <CardDescription>Technical overview of the One Parivaar platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Application Overview</h2>
                    <p className="text-muted-foreground">
                      One Parivaar is a comprehensive SaaS platform designed to connect builders, realtors, and property buyers
                      in a seamless ecosystem. The platform utilizes a modern tech stack including React, TypeScript, and Tailwind CSS.
                    </p>
                    
                    <div className="p-6 border rounded-md bg-muted/30">
                      <h3 className="font-semibold mb-2">Key Architectural Components:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>React frontend with TypeScript for type safety</li>
                        <li>Tailwind CSS and Shadcn UI for styling and components</li>
                        <li>Role-based access control for different user types</li>
                        <li>Modular component structure for maintainability</li>
                        <li>Responsive design patterns for all device sizes</li>
                        <li>AI-powered analytics and recommendation engine</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">System Architecture Diagram</h2>
                    <div className="p-6 border rounded-md flex justify-center">
                      <div className="max-w-3xl w-full">
                        <div className="p-8 border-2 border-dashed rounded-md bg-muted/10 flex items-center justify-center min-h-[300px]">
                          <p className="text-muted-foreground text-center">System architecture diagram will be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Data Flow</h2>
                    <div className="p-6 border rounded-md bg-muted/30">
                      <h3 className="font-semibold mb-2">Main Data Flow Paths:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>User authentication and role assignment</li>
                        <li>Property data flow (creation, discovery, management)</li>
                        <li>Lead generation and management pipeline</li>
                        <li>Transaction and payment processing</li>
                        <li>Analytics data collection and visualization</li>
                        <li>Document and agreement workflows</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Development Logs</CardTitle>
                <CardDescription>Record of key development activities and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr className="text-left">
                          <th className="py-3 px-4 text-sm font-medium">Date</th>
                          <th className="py-3 px-4 text-sm font-medium">Developer</th>
                          <th className="py-3 px-4 text-sm font-medium">Component</th>
                          <th className="py-3 px-4 text-sm font-medium">Change Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-3 px-4 text-sm">2025-05-23</td>
                          <td className="py-3 px-4 text-sm">Team</td>
                          <td className="py-3 px-4 text-sm">All Pages</td>
                          <td className="py-3 px-4 text-sm">Fixed layout issues with PageContainer component</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm">2025-05-23</td>
                          <td className="py-3 px-4 text-sm">Team</td>
                          <td className="py-3 px-4 text-sm">Dashboard</td>
                          <td className="py-3 px-4 text-sm">Resolved TypeScript errors with component props</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm">2025-05-23</td>
                          <td className="py-3 px-4 text-sm">Team</td>
                          <td className="py-3 px-4 text-sm">Documentation</td>
                          <td className="py-3 px-4 text-sm">Added new Documentation section with design system</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm">2025-05-23</td>
                          <td className="py-3 px-4 text-sm">Team</td>
                          <td className="py-3 px-4 text-sm">Properties</td>
                          <td className="py-3 px-4 text-sm">Fixed layout issues with property card grid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sitemap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sitemap</CardTitle>
                <CardDescription>Navigation structure of the One Parivaar platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Platform Sitemap</h2>
                    <div className="border p-6 rounded-lg overflow-auto">
                      <div className="min-w-[800px]">
                        <ul className="space-y-4">
                          <li>
                            <div className="flex items-center">
                              <div className="h-10 w-40 bg-saas-primary/10 border border-saas-primary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                Home
                              </div>
                            </div>
                            <div className="pl-10 pt-2">
                              <div className="border-l-2 border-dashed pl-8 space-y-4">
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Dashboard
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Properties
                                    </div>
                                    
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-gray-100 border border-gray-200 rounded flex items-center justify-center font-medium text-gray-500 text-sm">
                                      Property Detail
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Marketplace
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Leads & CRM
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Documentation
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center h-10">
                                    <div className="flex-shrink-0 h-0.5 w-8 bg-gray-300"></div>
                                    <div className="h-10 w-40 bg-saas-secondary/10 border border-saas-secondary/20 rounded flex items-center justify-center font-medium text-saas-dark">
                                      Settings
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">XML Sitemap</h2>
                    <div className="bg-muted rounded-md p-4">
                      <pre className="text-xs overflow-auto whitespace-pre-wrap">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://oneparivaar.com/</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://oneparivaar.com/dashboard</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://oneparivaar.com/properties</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://oneparivaar.com/marketplace</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://oneparivaar.com/leads</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://oneparivaar.com/documentation</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`}
                      </pre>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Database Schema</CardTitle>
                <CardDescription>Data models and relationships for the One Parivaar platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Entity Relationship Diagram</h2>
                    <div className="p-6 border rounded-md flex justify-center">
                      <div className="max-w-3xl w-full">
                        <div className="p-8 border-2 border-dashed rounded-md bg-muted/10 flex items-center justify-center min-h-[300px]">
                          <p className="text-muted-foreground text-center">ER diagram will be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Key Data Models</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-muted p-3 font-medium">User</div>
                        <div className="p-4 space-y-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">id</div>
                            <div className="col-span-2">string (UUID)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">name</div>
                            <div className="col-span-2">string</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">email</div>
                            <div className="col-span-2">string</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">role</div>
                            <div className="col-span-2">enum (builder, realtor, buyer)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">created_at</div>
                            <div className="col-span-2">timestamp</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-muted p-3 font-medium">Property</div>
                        <div className="p-4 space-y-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">id</div>
                            <div className="col-span-2">string (UUID)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">title</div>
                            <div className="col-span-2">string</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">price</div>
                            <div className="col-span-2">number</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">status</div>
                            <div className="col-span-2">enum (for-sale, pending, sold)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">created_by</div>
                            <div className="col-span-2">foreign key (User)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-muted p-3 font-medium">Lead</div>
                        <div className="p-4 space-y-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">id</div>
                            <div className="col-span-2">string (UUID)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">name</div>
                            <div className="col-span-2">string</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">status</div>
                            <div className="col-span-2">enum (new, contacted, qualified, etc)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">assigned_to</div>
                            <div className="col-span-2">foreign key (User)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-muted p-3 font-medium">Transaction</div>
                        <div className="p-4 space-y-2">
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">id</div>
                            <div className="col-span-2">string (UUID)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">property_id</div>
                            <div className="col-span-2">foreign key (Property)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">buyer_id</div>
                            <div className="col-span-2">foreign key (User)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">amount</div>
                            <div className="col-span-2">number</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="font-medium">status</div>
                            <div className="col-span-2">enum (initiated, processing, completed)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Structure</CardTitle>
                <CardDescription>Organization of the React codebase and component architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Project Structure</h2>
                    <div className="bg-muted rounded-md p-4">
                      <pre className="text-xs overflow-auto">
{`src/
├── components/
│   ├── common/           # Shared components used across the app
│   ├── dashboard/        # Dashboard specific components
│   ├── layout/           # Layout components like container, header, footer
│   ├── leads/            # Lead management components
│   ├── marketplace/      # Marketplace related components
│   ├── properties/       # Property management components
│   └── ui/              # UI components from shadcn
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
├── pages/               # Page components
└── styles/              # Global styles and Tailwind configuration`}
                      </pre>
                    </div>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Component Architecture</h2>
                    <div className="p-6 border rounded-md flex justify-center">
                      <div className="max-w-3xl w-full">
                        <div className="p-8 border-2 border-dashed rounded-md bg-muted/10 flex items-center justify-center min-h-[200px]">
                          <p className="text-muted-foreground text-center">Component hierarchy diagram will be displayed here</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 border rounded-md">
                      <h3 className="font-semibold mb-4">Key Components</h3>
                      <ul className="space-y-3">
                        <li className="flex">
                          <div className="w-1/3 font-medium">PageContainer</div>
                          <div className="w-2/3">Core layout wrapper for all pages</div>
                        </li>
                        <li className="flex">
                          <div className="w-1/3 font-medium">Navbar</div>
                          <div className="w-2/3">Main navigation component</div>
                        </li>
                        <li className="flex">
                          <div className="w-1/3 font-medium">PropertyCard</div>
                          <div className="w-2/3">Reusable card for property listings</div>
                        </li>
                        <li className="flex">
                          <div className="w-1/3 font-medium">DashboardHeader</div>
                          <div className="w-2/3">Header with role selection and search</div>
                        </li>
                        <li className="flex">
                          <div className="w-1/3 font-medium">StatsCard</div>
                          <div className="w-2/3">Displays key metrics with trend indicators</div>
                        </li>
                        <li className="flex">
                          <div className="w-1/3 font-medium">ActivityFeed</div>
                          <div className="w-2/3">Shows recent platform activity</div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default Documentation;
