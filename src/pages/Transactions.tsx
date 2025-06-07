
import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { TransactionCard } from '@/components/transactions/TransactionCard';
import { useToast } from '@/hooks/use-toast';

// Mock data for transactions
const transactionsData = [
  {
    id: 'TRX-1001',
    propertyId: 'PROP-301',
    propertyTitle: 'Luxury Villa, Koregaon Park',
    amount: '₹1,25,00,000',
    date: 'May 15, 2025',
    status: 'completed' as const,
    buyer: {
      name: 'Vikram Malhotra',
      avatar: 'https://i.pravatar.cc/150?img=68',
    },
    seller: {
      name: 'Karan Constructions Ltd.',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    documents: 4,
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TRX-1002',
    propertyId: 'PROP-287',
    propertyTitle: '3BHK Apartment, Viman Nagar',
    amount: '₹95,00,000',
    date: 'May 12, 2025',
    status: 'in-escrow' as const,
    buyer: {
      name: 'Ananya Desai',
      avatar: 'https://i.pravatar.cc/150?img=25',
    },
    seller: {
      name: 'Pune Properties LLC',
      avatar: 'https://i.pravatar.cc/150?img=34',
    },
    documents: 3,
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TRX-1003',
    propertyId: 'PROP-165',
    propertyTitle: 'Commercial Space, Hinjewadi IT Park',
    amount: '₹2,75,00,000',
    date: 'May 10, 2025',
    status: 'pending' as const,
    buyer: {
      name: 'TechSolutions India Pvt Ltd',
      avatar: 'https://i.pravatar.cc/150?img=55',
    },
    seller: {
      name: 'Panchshil Realty',
      avatar: 'https://i.pravatar.cc/150?img=22',
    },
    documents: 2,
    paymentMethod: 'Letter of Credit',
  },
  {
    id: 'TRX-1004',
    propertyId: 'PROP-429',
    propertyTitle: '2BHK Flat, Aundh',
    amount: '₹78,50,000',
    date: 'May 8, 2025',
    status: 'completed' as const,
    buyer: {
      name: 'Rajesh & Sunita Sharma',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    seller: {
      name: 'Rohan Builders',
      avatar: 'https://i.pravatar.cc/150?img=41',
    },
    documents: 4,
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TRX-1005',
    propertyId: 'PROP-195',
    propertyTitle: 'Penthouse, Kalyani Nagar',
    amount: '₹2,10,00,000',
    date: 'May 5, 2025',
    status: 'failed' as const,
    buyer: {
      name: 'Arjun Kapoor',
      avatar: 'https://i.pravatar.cc/150?img=52',
    },
    seller: {
      name: 'Goel Ganga Developers',
      avatar: 'https://i.pravatar.cc/150?img=61',
    },
    documents: 1,
    paymentMethod: 'Bank Transfer',
    failureReason: 'Financing fell through',
  },
];

// Mock data for Escrow accounts
const escrowData = [
  {
    id: 'ESC-501',
    propertyId: 'PROP-287',
    transactionId: 'TRX-1002',
    amount: '₹95,00,000',
    status: 'active' as const,
    createdDate: 'May 12, 2025',
    expectedCloseDate: 'Jun 12, 2025',
    holdingBank: 'HDFC Bank Ltd.',
    conditions: 'Pending final inspection and documentation',
  },
  {
    id: 'ESC-498',
    propertyId: 'PROP-165',
    transactionId: 'TRX-1003',
    amount: '₹2,75,00,000',
    status: 'active' as const,
    createdDate: 'May 10, 2025',
    expectedCloseDate: 'Jun 25, 2025',
    holdingBank: 'ICICI Bank Ltd.',
    conditions: 'Pending legal clearance and property title verification',
  },
  {
    id: 'ESC-492',
    propertyId: 'PROP-311',
    transactionId: 'TRX-998',
    amount: '₹1,45,00,000',
    status: 'closed' as const,
    createdDate: 'Apr 25, 2025',
    closedDate: 'May 28, 2025',
    holdingBank: 'SBI',
    conditions: 'All conditions met',
  },
];

// Mock data for payments
const paymentsData = [
  {
    id: 'PAY-701',
    transactionId: 'TRX-1001',
    amount: '₹1,25,00,000',
    date: 'May 15, 2025',
    status: 'completed' as const,
    method: 'Bank Transfer',
    reference: 'REF123456789',
    notes: 'Final payment for Koregaon Park Villa',
  },
  {
    id: 'PAY-698',
    transactionId: 'TRX-1004',
    amount: '₹78,50,000',
    date: 'May 8, 2025',
    status: 'completed' as const,
    method: 'Bank Transfer',
    reference: 'REF987654321',
    notes: 'Full payment for Aundh 2BHK',
  },
  {
    id: 'PAY-694',
    transactionId: 'TRX-1002',
    amount: '₹19,00,000',
    date: 'May 12, 2025',
    status: 'completed' as const,
    method: 'Bank Transfer',
    reference: 'REF456789123',
    notes: 'Deposit for Viman Nagar Apartment (20%)',
  },
  {
    id: 'PAY-690',
    transactionId: 'TRX-1003',
    amount: '₹55,00,000',
    date: 'May 10, 2025',
    status: 'completed' as const,
    method: 'Letter of Credit',
    reference: 'LC789456123',
    notes: 'Initial payment for Hinjewadi Commercial Space (20%)',
  },
  {
    id: 'PAY-685',
    transactionId: 'TRX-1005',
    amount: '₹42,00,000',
    date: 'May 5, 2025',
    status: 'refunded' as const,
    method: 'Bank Transfer',
    reference: 'REF321654987',
    notes: 'Deposit for Kalyani Nagar Penthouse (20%) - Refunded due to failed transaction',
  },
];

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 2) {
      toast({
        title: "Search Results",
        description: `Searching for transactions matching "${e.target.value}"`,
        duration: 2000,
      });
    }
  };

  const handleOpenDetails = (id: string, type: 'transaction' | 'escrow' | 'payment') => {
    toast({
      title: "Opening Details",
      description: `Viewing ${type} ${id} details`,
      duration: 1500,
    });
    // In a real app, navigate to the details page
    // navigate(`/transactions/${type}/${id}`);
  };

  // Filter data based on search query
  const filteredTransactions = transactionsData.filter(
    t => t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.propertyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.seller.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEscrow = escrowData.filter(
    e => e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
         e.propertyId.toLowerCase().includes(searchQuery.toLowerCase()) ||
         e.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPayments = paymentsData.filter(
    p => p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
         p.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6 lg:ml-60 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-retro-navy">Pune Transactions</h1>
              <p className="text-retro-gray">Manage property transactions, escrow accounts, and payments</p>
            </div>
            
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-retro-gray" />
                <Input 
                  type="search" 
                  placeholder="Search transactions..." 
                  className="pl-8 w-[200px] lg:w-[300px] border-retro-navy/30 focus-visible:ring-retro-orange"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="border-retro-navy/30 text-retro-navy hover:text-retro-orange hover:border-retro-orange"
              >
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="transactions" onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 bg-muted/50">
              <TabsTrigger value="transactions" className="data-[state=active]:bg-retro-orange data-[state=active]:text-white">
                Transactions
              </TabsTrigger>
              <TabsTrigger value="escrow" className="data-[state=active]:bg-retro-orange data-[state=active]:text-white">
                Escrow Accounts
              </TabsTrigger>
              <TabsTrigger value="payments" className="data-[state=active]:bg-retro-orange data-[state=active]:text-white">
                Payments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="transactions">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Property Transactions</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <div className="flex items-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                        <span>Completed</span>
                      </div>
                      <div className="flex items-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-amber-500 mr-1"></span>
                        <span>In Escrow</span>
                      </div>
                      <div className="flex items-center mr-3">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-1"></span>
                        <span>Pending</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                        <span>Failed</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="grid grid-cols-1 gap-4">
                      {filteredTransactions.map(transaction => (
                        <div 
                          key={transaction.id} 
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleOpenDetails(transaction.id, 'transaction')}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">{transaction.propertyTitle}</h3>
                                <Badge 
                                  className={
                                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                                    transaction.status === 'in-escrow' ? 'bg-amber-100 text-amber-800' :
                                    transaction.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                                    'bg-red-100 text-red-800'
                                  }
                                >
                                  {transaction.status === 'completed' ? 'Completed' :
                                   transaction.status === 'in-escrow' ? 'In Escrow' :
                                   transaction.status === 'pending' ? 'Pending' :
                                   'Failed'}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">ID: {transaction.id} | Property: {transaction.propertyId}</div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Buyer:</span> {transaction.buyer.name} •{' '}
                                <span className="font-medium">Seller:</span> {transaction.seller.name}
                              </div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Payment Method:</span> {transaction.paymentMethod} •{' '}
                                <span className="font-medium">Documents:</span> {transaction.documents}
                              </div>
                            </div>
                            <div className="flex flex-col items-end mt-3 md:mt-0">
                              <div className="font-bold text-lg text-retro-orange">{transaction.amount}</div>
                              <div className="text-sm text-muted-foreground">{transaction.date}</div>
                              {transaction.status === 'failed' && (
                                <div className="text-sm text-red-500 mt-1">Reason: {transaction.failureReason}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      ))}
                      {filteredTransactions.length === 0 && (
                        <div className="flex items-center justify-center h-40 text-muted-foreground">
                          No transactions match your search
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="escrow">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Escrow Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="grid grid-cols-1 gap-4">
                      {filteredEscrow.map(escrow => (
                        <div 
                          key={escrow.id} 
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleOpenDetails(escrow.id, 'escrow')}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">Escrow: {escrow.id}</h3>
                                <Badge className={escrow.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                                  {escrow.status === 'active' ? 'Active' : 'Closed'}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Transaction: {escrow.transactionId} | Property: {escrow.propertyId}
                              </div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Holding Bank:</span> {escrow.holdingBank}
                              </div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Created:</span> {escrow.createdDate} •{' '}
                                <span className="font-medium">
                                  {escrow.status === 'active' ? 'Expected Close:' : 'Closed:'}
                                </span> {escrow.status === 'active' ? escrow.expectedCloseDate : escrow.closedDate}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium">Conditions:</span> {escrow.conditions}
                              </div>
                            </div>
                            <div className="flex flex-col items-end mt-3 md:mt-0">
                              <div className="font-bold text-lg text-retro-orange">{escrow.amount}</div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      ))}
                      {filteredEscrow.length === 0 && (
                        <div className="flex items-center justify-center h-40 text-muted-foreground">
                          No escrow accounts match your search
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="grid grid-cols-1 gap-4">
                      {filteredPayments.map(payment => (
                        <div 
                          key={payment.id} 
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleOpenDetails(payment.id, 'payment')}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold">Payment: {payment.id}</h3>
                                <Badge className={
                                  payment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                                  'bg-amber-100 text-amber-800'
                                }>
                                  {payment.status === 'completed' ? 'Completed' : 'Refunded'}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground mb-2">
                                Transaction: {payment.transactionId} | Method: {payment.method}
                              </div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Reference:</span> {payment.reference}
                              </div>
                              <div className="text-sm mb-2">
                                <span className="font-medium">Notes:</span> {payment.notes}
                              </div>
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
                          No payments match your search
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
