
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from '@/hooks/use-toast';

interface ExcelUploaderProps {
  onDataLoaded: (data: any[], fileName: string) => void;
  acceptedTypes?: string;
  maxSizeInMB?: number;
}

export const ExcelUploader: React.FC<ExcelUploaderProps> = ({
  onDataLoaded,
  acceptedTypes = ".xlsx, .xls, .csv",
  maxSizeInMB = 5
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleFile = async (file: File) => {
    if (!file) return;
    
    // Check file type
    if (!file.name.match(/\.(xlsx|xls|csv)$/i)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an Excel or CSV file",
        variant: "destructive"
      });
      return;
    }
    
    // Check file size
    if (file.size > maxSizeInMB * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${maxSizeInMB}MB`,
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const data = await readExcelFile(file);
      if (data && data.length > 0) {
        onDataLoaded(data, file.name);
        toast({
          title: "File uploaded successfully",
          description: `${file.name} has been processed with ${data.length} records`,
        });
      } else {
        toast({
          title: "Empty file",
          description: "The uploaded file contains no data",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error processing file",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const readExcelFile = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
            header: 1,
            defval: '',
            blankrows: false
          });
          
          // Check if we have data (at least headers)
          if (jsonData.length < 2) {
            resolve([]);
            return;
          }
          
          // Convert to array of objects with headers
          const headers = jsonData[0] as string[];
          const rows = jsonData.slice(1);
          
          const formattedData = rows.map((row: any) => {
            const obj: Record<string, any> = {};
            headers.forEach((header, index) => {
              if (header) { // Only process valid headers
                obj[header] = row[index] !== undefined ? row[index] : '';
              }
            });
            return obj;
          });
          
          resolve(formattedData);
        } catch (error) {
          console.error('Excel parsing error:', error);
          reject(new Error('Failed to parse Excel file'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        isDragging ? 'bg-primary/10 border-primary' : 'bg-background/50 border-input hover:bg-background/80'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-3 rounded-full bg-background/80 border">
          <Upload className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-base">Drag and drop your Excel file here</p>
          <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
        </div>
        
        <input
          type="file"
          className="hidden"
          accept={acceptedTypes}
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
          id="excel-file-upload"
        />
        
        <label htmlFor="excel-file-upload">
          <Button
            disabled={isLoading}
            variant="outline"
            className="cursor-pointer"
            type="button"
          >
            {isLoading ? 'Processing...' : 'Select File'}
          </Button>
        </label>
        
        <p className="text-xs text-muted-foreground">
          Supported formats: .xlsx, .xls, .csv (max {maxSizeInMB}MB)
        </p>
      </div>
    </div>
  );
};
