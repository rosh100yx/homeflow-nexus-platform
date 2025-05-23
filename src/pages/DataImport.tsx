
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { ExcelUploader } from '@/components/common/ExcelUploader';
import { ExcelPreview } from '@/components/common/ExcelPreview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type DataCategory = 'templates' | 'buyers' | 'realtors' | 'leads';

interface CategoryData {
  data: any[];
  fileName: string;
}

const DataImport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DataCategory>('templates');
  const [categoryData, setCategoryData] = useState<Record<DataCategory, CategoryData | null>>({
    templates: null,
    buyers: null,
    realtors: null,
    leads: null
  });
  
  const handleDataLoaded = (data: any[], fileName: string) => {
    setCategoryData(prev => ({
      ...prev,
      [activeTab]: { data, fileName }
    }));
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
                        
                        <div className="flex justify-end">
                          <button 
                            onClick={() => {
                              setCategoryData(prev => ({
                                ...prev,
                                [category]: null
                              }));
                            }}
                            className="text-sm text-muted-foreground hover:text-destructive"
                          >
                            Clear and upload different file
                          </button>
                        </div>
                      </div>
                    ) : (
                      <ExcelUploader onDataLoaded={handleDataLoaded} />
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
