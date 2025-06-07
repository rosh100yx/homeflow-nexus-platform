
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Download, CreditCard, ArrowUp, ArrowDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// Mock data for payments
const paymentsData = [
  {
    id: 'PAY-701',
    transactionId: 'TRX-1001',
    propertyTitle: 'Luxury Villa, Koregaon Park',
    amount: '₹1,25,00,000',
    date: '15 May 2025',
    status: 'completed' as const,
    type: 'purchase' as const,
    method: 'Bank Transfer',
    reference: 'REF123456789',
    notes: 'Final payment for Koregaon Park Villa',
    payee: {
      name: 'Karan Constructions Ltd.',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    payer: {
      name: 'Vikram Malhotra',
      avatar: 'https://i.pravatar.cc/150?img=68',
    }
  },
  {
    id: 'PAY-698',
    transactionId: 'TRX-1004',
    propertyTitle: '2BHK Flat, Aundh',
    amount: '₹78,50,000',
    date: '8 May 2025',
    status: 'completed' as const,
    type: 'purchase' as const,
    method: 'Bank Transfer',
    reference: 'REF987654321',
    notes: 'Full payment for Aundh 2BHK',
    payee: {
      name: 'Rohan Builders',
      avatar: 'https://i.pravatar.cc/150?img=41',
    },
    payer: {
      name: 'Rajesh & Sunita Sharma',
      avatar: 'https://i.pravatar.cc/150?img=33',
    }
  },
  {
    id: 'PAY-694',
    transactionId: 'TRX-1002',
    propertyTitle: '3BHK Apartment, Viman Nagar',
    amount: '₹19,00,000',
    date: '12 May 2025',
    status: 'completed' as const,
    type: 'deposit' as const,
    method: 'Bank Transfer',
    reference: 'REF456789123',
    notes: 'Deposit for Viman Nagar Apartment (20%)',
    payee: {
      name: 'Pune Properties LLC',
      avatar: 'https://i.pravatar.cc/150?img=34',
    },
    payer: {
      name: 'Ananya Desai',
      avatar: 'https://i.pravatar.cc/150?img=25',
    }
  },
  {
    id: 'PAY-690',
    transactionId: 'TRX-1003',
    propertyTitle: 'Commercial Space, Hinjewadi IT Park',
    amount: '₹55,00,000',
    date: '10 May 2025',
    status: 'completed' as const,
    type: 'deposit' as const,
    method: 'Letter of Credit',
    reference: 'LC789456123',
    notes: 'Initial payment for Hinjewadi Commercial Space (20%)',
    payee: {
      name: 'Panchshil Realty',
      avatar: 'https://i.pravatar.cc/150?img=22',
    },
    payer: {
      name: 'TechSolutions India Pvt Ltd',
      avatar: 'https://i.pravatar.cc/150?img=55',
    }
  },
  {
    id: 'PAY-685',
    transactionId: 'TRX-1005',
    propertyTitle: 'Penthouse, Kalyani Nagar',
    amount: '₹42,00,000',
    date: '5 May 2025',
    status: 'refunded' as const,
    type: 'deposit' as const,
    method: 'Bank Transfer',
    reference: 'REF321654987',
    notes: 'Deposit for Kalyani Nagar Penthouse (20%) - Refunded',
    payee: {
      name: 'Goel Ganga Developers',
      avatar: 'https://i.pravatar.cc/150?img=61',
    },
    payer: {
      name: 'Arjun Kapoor',
      avatar: 'https://i.pravatar.cc/150?img=52',
    }
  },
  {
    id: 'PAY-670',
    transactionId: 'TRX-995',
    propertyTitle: 'Office Space, Model Colony',
    amount: '₹35,00,000',
    date: '28 Apr 2025',
    status: 'pending' as const,
    type: 'deposit' as const,
    method: 'Bank Transfer',
    reference: 'REF654789321',
    notes: 'Processing deposit for Model Colony Office Space',
    payee: {
      name: 'Kolte Patil Developers',
      avatar: 'https://i.pravatar.cc/150?img=71',
    },
    payer: {
      name: 'Oasis Co-working Spaces',
      avatar: 'https://i.pravatar.cc/150?img=44',
    }
  },
];

// Summary data
const paymentSummary = {
  totalCompleted: '₹2,77,50,000',
  totalPending: '₹35,00,000',
  totalRefunded: '₹42,00,000',
  totalThisMonth: '₹3,12,50,000',
};

const PaymentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 2) {
      toast({
        title: "Search Results",
        description: `Searching for payments matching "${e.target.value}"`,
        duration: 2000,
      });
    }
  };

  const handleViewDetails = (id: string) => {
    toast({
      title: "Payment Details",
      description: `Viewing details for payment ${id}`,
      duration: 1500,
    });
    // In a real app, navigate to the payment details page
    // navigate(`/payments/${id}`);
  };

  // Filter data based on search query and filters
  const filteredPayments = paymentsData.filter(payment => {
    // Apply search filter
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.propertyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.payee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.payer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.notes.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply status filter
    const matchesStatus = 
      statusFilter === 'all' || 
      payment.status === statusFilter;
    
    // Apply type filter
    const matchesType = 
      typeFilter === 'all' || 
      payment.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6 lg:ml-60 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-retro-navy">Pune Payments</h1>
              <p className="text-retro-gray">Manage property payment transactions</p>
            </div>
            
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-retro-gray" />
                <Input 
                  type="search" 
                  placeholder="Search payments..." 
                  className="pl-8 w-[200px] lg:w-[260px] border-retro-navy/30 focus-visible:ring-retro-orange"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <Button 
                variant="outline" 
                className="border-retro-navy/30 text-retro-navy hover:text-retro-orange hover:border-retro-orange h-10"
              >
                <Download className="h-4 w-4 mr-2" />
                <span>Export</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Completed Payments</p>
                    <p className="text-2xl font-bold text-green-600">{paymentSummary.totalCompleted}</p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-md">
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Pending Payments</p>
                    <p className="text-2xl font-bold text-amber-600">{paymentSummary.totalPending}</p>
                  </div>
                  <div className="p-2 bg-amber-100 rounded-md">
                    <CreditCard className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Refunded Amount</p>
                    <p className="text-2xl font-bold text-red-600">{paymentSummary.totalRefunded}</p>
                  </div>
                  <div className="p-2 bg-red-100 rounded-md">
                    <ArrowDown className="h-5 w-5 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total This Month</p>
                    <p className="text-2xl font-bold text-retro-orange">{paymentSummary.totalThisMonth}</p>
                  </div>
                  <div className="p-2 bg-retro-orange/10 rounded-md">
                    <ArrowUp className="h-5 w-5 text-retro-orange" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-sm mb-6">
            <CardHeader className="flex flex-row items-center justify-between py-4">
              <CardTitle className="text-xl">Payment History</CardTitle>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Filter Status:</span>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[130px] h-8">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Payment Type:</span>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[130px] h-8">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="purchase">Purchase</SelectItem>
                      <SelectItem value="deposit">Deposit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <ScrollArea className="h-[520px] pr-4">
                <div className="grid grid-cols-1 gap-4">
                  {filteredPayments.map(payment => (
                    <div 
                      key={payment.id} 
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleViewDetails(payment.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold">{payment.propertyTitle}</h3>
                            <Badge className={
                              payment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                              payment.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                              'bg-red-100 text-red-800'
                            }>
                              {payment.status === 'completed' ? 'Completed' : 
                               payment.status === 'pending' ? 'Pending' : 'Refunded'}
                            </Badge>
                            <Badge variant="outline" className="border-retro-navy/30 text-retro-navy">
                              {payment.type === 'purchase' ? 'Purchase' : 'Deposit'}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            ID: {payment.id} | Transaction: {payment.transactionId}
                          </div>
                          <div className="text-sm mb-2">
                            <span className="font-medium">From:</span> {payment.payer.name} •{' '}
                            <span className="font-medium">To:</span> {payment.payee.name}
                          </div>
                          <div className="text-sm mb-2">
                            <span className="font-medium">Method:</span> {payment.method} •{' '}
                            <span className="font-medium">Ref:</span> {payment.reference}
                          </div>
                          <div className="text-sm text-muted-foreground">{payment.notes}</div>
                        </div>
                        <div className="flex flex-col items-end mt-3 md:mt-0">
                          <div className="font-bold text-lg text-retro-orange">{payment.amount}</div>
                          <div className="text-sm text-muted-foreground">{payment.date}</div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-3">
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                  {filteredPayments.length === 0 && (
                    <div className="flex items-center justify-center h-40 text-muted-foreground">
                      No payments match your search criteria
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
