
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Download, Search } from 'lucide-react';
import * as XLSX from 'xlsx';

interface ExcelPreviewProps {
  data: any[];
  fileName: string;
}

export const ExcelPreview: React.FC<ExcelPreviewProps> = ({ data, fileName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const rowsPerPage = 10;
  
  // Extract headers from the first data item
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  
  // Filter data based on search query
  const filteredData = data.filter((row) => {
    return Object.values(row).some(
      (value) => 
        value !== null && 
        value !== undefined && 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);
  
  // Generate page numbers
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  if (totalPages <= maxVisiblePages) {
    // Show all pages
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Show first, last and pages around current
    if (currentPage <= 3) {
      // Near start
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(-1); // Ellipsis
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Near end
      pageNumbers.push(1);
      pageNumbers.push(-1); // Ellipsis
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Middle
      pageNumbers.push(1);
      pageNumbers.push(-1); // Ellipsis
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(-1); // Ellipsis
      pageNumbers.push(totalPages);
    }
  }
  
  // Handle download as Excel
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    
    // Generate download
    XLSX.writeFile(workbook, fileName || 'exported-data.xlsx');
  };
  
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search data..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
        
        <Button 
          variant="outline" 
          onClick={handleDownload}
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <Download className="h-4 w-4" /> 
          Download
        </Button>
      </div>
      
      <div className="border rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>
              {filteredData.length > 0 
                ? `Showing ${startIndex + 1} to ${Math.min(startIndex + rowsPerPage, filteredData.length)} of ${filteredData.length} records` 
                : 'No data available'}
            </TableCaption>
            
            <TableHeader>
              <TableRow>
                {headers.map((header, index) => (
                  <TableHead key={index} className="whitespace-nowrap">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {headers.map((header, colIndex) => (
                      <TableCell key={colIndex} className="truncate max-w-xs">
                        {row[header] !== undefined && row[header] !== null
                          ? String(row[header])
                          : '-'}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell 
                    colSpan={headers.length} 
                    className="text-center h-32"
                  >
                    {searchQuery 
                      ? 'No results found. Try a different search term.' 
                      : 'No data available in this file.'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {pageNumbers.map((pageNumber, i) => (
              pageNumber === -1 ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <span className="px-4 py-2">...</span>
                </PaginationItem>
              ) : (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    onClick={() => setCurrentPage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
