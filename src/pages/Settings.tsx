
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Bell, Edit, Globe, Key, Lock, Save, User, UserCog } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Settings saved",
        description: "Your settings have been updated successfully",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 lg:ml-60">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-saas-dark mb-1">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Aditya Sharma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="aditya@oneparivaar.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+91 98765 43210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Pune, Maharashtra" />
                      </div>
                    </div>
                    <Button onClick={handleSave} className="mt-4" disabled={saving}>
                      {saving ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your password and security options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button onClick={handleSave} className="mt-4" disabled={saving}>
                      {saving ? 'Updating...' : 'Update Password'}
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Protect your account with an additional verification step</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Choose what updates you want to receive</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Property Listings</p>
                        <p className="text-sm text-muted-foreground">Get notified when new properties match your criteria</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Lead Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive alerts for new leads and inquiries</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Payment Reminders</p>
                        <p className="text-sm text-muted-foreground">Get notified about upcoming and overdue payments</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Market Updates</p>
                        <p className="text-sm text-muted-foreground">Receive Pune real estate market insights</p>
                      </div>
                      <Switch />
                    </div>
                    <Button onClick={handleSave} className="mt-4" disabled={saving}>
                      {saving ? 'Saving...' : 'Save Preferences'}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="templates" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Agreement Templates</CardTitle>
                    <CardDescription>Manage and customize your document templates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Standard Rental Agreement</h3>
                          <p className="text-sm text-muted-foreground">Last modified: May 10, 2025</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Edit Template
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Sale Agreement</h3>
                          <p className="text-sm text-muted-foreground">Last modified: April 25, 2025</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Edit Template
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Commercial Lease</h3>
                          <p className="text-sm text-muted-foreground">Last modified: May 2, 2025</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Edit className="h-4 w-4" />
                          Edit Template
                        </Button>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4">
                        + Create New Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-full lg:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="font-medium text-lg">Aditya Sharma</h3>
                <p className="text-sm text-muted-foreground">Administrator</p>
                <Button variant="outline" className="mt-4 w-full">Upload Photo</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-start gap-2">
                  <Lock className="h-4 w-4" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-start gap-2">
                  <Bell className="h-4 w-4" />
                  Notification Settings
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-start gap-2">
                  <UserCog className="h-4 w-4" />
                  Account Permissions
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-start gap-2">
                  <Key className="h-4 w-4" />
                  API Access
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-start gap-2">
                  <Globe className="h-4 w-4" />
                  Language Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
