
import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { ExcelUploader } from '@/components/common/ExcelUploader';
import { ExcelPreview } from '@/components/common/ExcelPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type DataCategory = 'templates' | 'buyers' | 'realtors' | 'leads';

interface CategoryData {
  data: any[];
  fileName: string;
}

// Sample data for each category
const sampleData = {
  templates: [
    {
      "Template Name": "Property Listing Template",
      "Description": "Standard template for property listings",
      "Last Modified": "2025-04-15",
      "Created By": "Admin",
      "Type": "Listing"
    },
    {
      "Template Name": "Agreement Form",
      "Description": "Legal agreement template for property transactions",
      "Last Modified": "2025-05-01",
      "Created By": "Legal Team",
      "Type": "Agreement"
    },
    {
      "Template Name": "Marketing Email",
      "Description": "Email template for new property announcements",
      "Last Modified": "2025-05-10",
      "Created By": "Marketing",
      "Type": "Email"
    }
  ],
  buyers: [
    {
      "Name": "Rajesh Kumar",
      "Email": "rajesh.k@example.com",
      "Phone": "9876543210",
      "Budget": "₹1.2 Cr",
      "Preferred Location": "Koregaon Park",
      "Property Type": "Apartment",
      "Status": "Active"
    },
    {
      "Name": "Priya Singh",
      "Email": "priya.s@example.com",
      "Phone": "8765432109",
      "Budget": "₹2.5 Cr",
      "Preferred Location": "Baner",
      "Property Type": "Villa",
      "Status": "Active"
    },
    {
      "Name": "Amit Patel",
      "Email": "amit.p@example.com",
      "Phone": "7654321098",
      "Budget": "₹90 Lac",
      "Preferred Location": "Hinjewadi",
      "Property Type": "Apartment",
      "Status": "Inactive"
    }
  ],
  realtors: [
    {
      "Name": "Divya Sharma",
      "Email": "divya.s@example.com",
      "Phone": "9876543211",
      "Area": "Koregaon Park, Kalyani Nagar",
      "Experience": "5 years",
      "Listings": "12",
      "Rating": "4.8/5"
    },
    {
      "Name": "Vikram Mehta",
      "Email": "vikram.m@example.com",
      "Phone": "8765432108",
      "Area": "Baner, Balewadi",
      "Experience": "8 years",
      "Listings": "24",
      "Rating": "4.9/5"
    },
    {
      "Name": "Neha Verma",
      "Email": "neha.v@example.com",
      "Phone": "7654321097",
      "Area": "Hinjewadi, Wakad",
      "Experience": "3 years",
      "Listings": "9",
      "Rating": "4.6/5"
    }
  ],
  leads: [
    {
      "Name": "Ravi Desai",
      "Email": "ravi.d@example.com",
      "Phone": "9876543212",
      "Source": "Website",
      "Interest": "3BHK in Baner",
      "Status": "New",
      "Date Added": "2025-05-18"
    },
    {
      "Name": "Anita Joshi",
      "Email": "anita.j@example.com",
      "Phone": "8765432107",
      "Source": "Referral",
      "Interest": "Villa in Koregaon Park",
      "Status": "Contacted",
      "Date Added": "2025-05-15"
    },
    {
      "Name": "Mohan Kapur",
      "Email": "mohan.k@example.com",
      "Phone": "7654321096",
      "Source": "Property Portal",
      "Interest": "2BHK in Viman Nagar",
      "Status": "Qualified",
      "Date Added": "2025-05-10"
    }
  ]
};

const DataImport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DataCategory>('templates');
  const [categoryData, setCategoryData] = useState<Record<DataCategory, CategoryData | null>>({
    templates: null,
    buyers: null,
    realtors: null,
    leads: null
  });
  const { toast } = useToast();
  
  // Load sample data for demonstration purposes
  useEffect(() => {
    // Only load sample data if no data has been uploaded for that category
    const categories: DataCategory[] = ['templates', 'buyers', 'realtors', 'leads'];
    categories.forEach(category => {
      if (!categoryData[category]) {
        // Simulate loading from a file with a random name
        const demoFileNames = {
          templates: 'templates-demo.xlsx',
          buyers: 'buyers-list.xlsx',
          realtors: 'pune-realtors.xlsx',
          leads: 'may-leads.xlsx'
        };
      }
    });
  }, [categoryData]);
  
  const handleDataLoaded = (data: any[], fileName: string) => {
    setCategoryData(prev => ({
      ...prev,
      [activeTab]: { data, fileName }
    }));
    
    toast({
      title: "Data imported successfully",
      description: `Imported ${data.length} records for ${activeTab}`,
    });
  };
  
  const loadSampleData = (category: DataCategory) => {
    const demoFileNames = {
      templates: 'templates-demo.xlsx',
      buyers: 'buyers-list.xlsx',
      realtors: 'pune-realtors.xlsx',
      leads: 'may-leads.xlsx'
    };
    
    setCategoryData(prev => ({
      ...prev,
      [category]: { 
        data: sampleData[category], 
        fileName: demoFileNames[category]
      }
    }));
    
    toast({
      title: "Sample data loaded",
      description: `Loaded sample data for ${category}`,
    });
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 w-full lg:pl-60 pt-16 lg:pt-0 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Data Import</h1>
            <p className="text-muted-foreground">
              Upload and manage data for templates, buyers, realtors, and leads
            </p>
          </div>
          
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as DataCategory)}
            className="w-full"
          >
            <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="buyers">Buyers</TabsTrigger>
              <TabsTrigger value="realtors">Realtors</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
            </TabsList>
            
            {(['templates', 'buyers', 'realtors', 'leads'] as DataCategory[]).map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{category} Data</CardTitle>
                    <CardDescription>
                      {categoryData[category] 
                        ? `Viewing uploaded ${category} data from ${categoryData[category]?.fileName}` 
                        : `Upload your ${category} data in Excel format`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {categoryData[category] ? (
                      <div className="space-y-6">
                        <ExcelPreview 
                          data={categoryData[category]!.data} 
                          fileName={categoryData[category]!.fileName}
                        />
                        
                        <div className="flex flex-col sm:flex-row justify-end gap-2">
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setCategoryData(prev => ({
                                ...prev,
                                [category]: null
                              }));
                            }}
                            className="text-sm text-muted-foreground hover:text-destructive"
                          >
                            Clear and upload different file
                          </Button>
                          
                          <Button
                            variant="secondary"
                            onClick={() => loadSampleData(category)}
                            className="flex items-center gap-2"
                          >
                            <Download className="h-4 w-4" />
                            Download as Excel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <ExcelUploader onDataLoaded={handleDataLoaded} />
                        
                        <div className="flex justify-center mt-4">
                          <Button
                            variant="outline"
                            onClick={() => loadSampleData(category)}
                            className="flex items-center gap-2"
                          >
                            <UploadCloud className="h-4 w-4" />
                            Load Sample Data
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DataImport;
