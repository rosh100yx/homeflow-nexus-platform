import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, CheckCircle2, X, Home, BarChart3 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Navbar } from '@/components/ui/Navbar';
import { AlertPattern } from '@/components/untitled/AlertPattern';
import { BannerPattern } from '@/components/untitled/BannerPattern';
import { ModalPattern } from '@/components/untitled/ModalPattern';
import { CardPattern } from '@/components/untitled/CardPattern';
import { TablePattern } from '@/components/untitled/TablePattern';
import NavbarPattern from '../components/untitled/NavbarPattern';
import Sidebar from '../ui/sidebar';
import Container from '../ui/container';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <header className="container mx-auto px-4 py-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Design System Documentation</h1>
        <p className="text-muted-foreground">Explore the design system, atomic design principles, and platform usage instructions.</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="elements" className="mb-8">
          <TabsList>
            <TabsTrigger value="elements">UI Elements</TabsTrigger>
            <TabsTrigger value="patterns">Patterns & Templates</TabsTrigger>
            <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
            <TabsTrigger value="guidelines">Design Guidelines</TabsTrigger>
            <TabsTrigger value="showcase">Components Showcase</TabsTrigger>
          </TabsList>
          <TabsContent value="elements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Button Example */}
              <Card className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Button</h3>
                <Button variant="default">Default <ArrowRight className="inline ml-1 w-4 h-4" /></Button>
                <Button variant="outline" className="mt-2">Outline <CheckCircle2 className="inline ml-1 w-4 h-4" /></Button>
                <Button variant="secondary">Secondary <X className="inline ml-1 w-4 h-4" /></Button>
              </Card>
              {/* Badge Example */}
              <Card className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Badge</h3>
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary" className="ml-2">Secondary</Badge>
                <Badge variant="destructive" className="ml-2">Destructive</Badge>
              </Card>
              {/* Input Example */}
              <Card className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Input</h3>
                <Input placeholder="Type here..." />
              </Card>
              {/* Table Example */}
              <Card className="p-4 flex flex-col gap-2 col-span-1 md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">Table</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Jane Doe</TableCell>
                      <TableCell><Badge variant="default">Active</Badge></TableCell>
                      <TableCell><Home className="inline w-4 h-4" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John Smith</TableCell>
                      <TableCell><Badge variant="secondary">Invited</Badge></TableCell>
                      <TableCell><BarChart3 className="inline w-4 h-4" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="patterns">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Alert Pattern</h3>
                <AlertPattern />
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Banner Pattern</h3>
                <BannerPattern />
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Modal Pattern</h3>
                <ModalPattern />
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Card Pattern</h3>
                <CardPattern />
              </Card>
              <Card className="p-4 md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">Table Pattern</h3>
                <TablePattern />
              </Card>
              <Card className="p-4 md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">Navbar Pattern</h3>
                <NavbarPattern />
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tokens">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-2">Design Tokens</h3>
              <ul className="text-sm">
                <li><b>Primary Color:</b> <span className="text-[#1E3A8A]">#1E3A8A</span></li>
                <li><b>Secondary Color:</b> <span className="text-[#F97316]">#F97316</span></li>
                <li><b>Background:</b> <span className="text-[#F9FAFB]">#F9FAFB</span></li>
                <li><b>Text:</b> <span className="text-[#111827]">#111827</span></li>
                <li><b>Muted:</b> <span className="text-[#6B7280]">#6B7280</span></li>
                <li><b>Font Family:</b> Inter, sans-serif</li>
                <li><b>Border Radius:</b> 0.5rem</li>
                <li><b>Spacing Unit:</b> 4px</li>
              </ul>
            </Card>
          </TabsContent>
          <TabsContent value="guidelines">
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Design Guidelines</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-medium">Update Colors</h3>
                  <p className="text-sm text-gray-600">Modify primary, secondary, and accent colors.</p>
                </div>
                <div>
                  <h3 className="text-md font-medium">Update Typography</h3>
                  <p className="text-sm text-gray-600">Adjust font sizes, weights, and styles.</p>
                </div>
                <div>
                  <h3 className="text-md font-medium">Other Guidelines</h3>
                  <p className="text-sm text-gray-600">Define spacing, shadows, and other design tokens.</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="showcase">
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Components Showcase</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-medium">Sidebar</h3>
                  <Sidebar>
                    <p className="p-4">This is a Sidebar component.</p>
                  </Sidebar>
                </div>
                <div>
                  <h3 className="text-md font-medium">Container</h3>
                  <Container>
                    <p>This is a Container component.</p>
                  </Container>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Design System</h2>
          <p className="text-muted-foreground">Learn about the typography, color palette, and components used in the platform.</p>
          <a href="/DESIGN_SYSTEM.md" target="_blank" className="text-saas-primary hover:underline">View Design System</a>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Atomic Design System</h2>
          <p className="text-muted-foreground">Understand the atomic design principles and component hierarchy.</p>
          <a href="/ATOMIC_DESIGN_SYSTEM.md" target="_blank" className="text-saas-primary hover:underline">View Atomic Design System</a>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Platform Usage</h2>
          <p className="text-muted-foreground">Get started with the platform and explore its features.</p>
          <a href="/README.md" target="_blank" className="text-saas-primary hover:underline">View Platform Documentation</a>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Form UI Elements</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="input" className="block text-sm font-medium text-gray-700">Input</label>
              <input id="input" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Enter text" />
            </div>
            <div>
              <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">Textarea</label>
              <textarea id="textarea" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Enter details"></textarea>
            </div>
            <div>
              <label htmlFor="select" className="block text-sm font-medium text-gray-700">Select</label>
              <select id="select" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Checkbox</label>
              <div className="flex items-center">
                <input id="checkbox" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200" />
                <label htmlFor="checkbox" className="ml-2 text-sm text-gray-700">Check me</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Radio Group</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="radio1" name="radio" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-200" />
                  <label htmlFor="radio1" className="ml-2 text-sm text-gray-700">Option 1</label>
                </div>
                <div className="flex items-center">
                  <input id="radio2" name="radio" type="radio" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-200" />
                  <label htmlFor="radio2" className="ml-2 text-sm text-gray-700">Option 2</label>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Switch</label>
              <div className="flex items-center">
                <input id="switch" type="checkbox" className="h-6 w-11 rounded-full bg-gray-200 focus:ring focus:ring-blue-200" />
                <label htmlFor="switch" className="ml-2 text-sm text-gray-700">Toggle me</label>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">Submit</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-6 border-t border-gray-200 text-center">
        <p className="text-sm text-muted-foreground">© 2025 One Parivaar. All rights reserved.</p>
        <a href="/" className="text-saas-primary hover:underline">Back to Home</a>
      </footer>
    </div>
  );
};

export default Documentation;
