import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building, 
  BarChart3, 
  CheckCircle2, 
  Home, 
  MapPin, 
  Users, 
  FileText, 
  Sparkles,
  Layers,
  Percent,
  MessageSquare
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-saas-light to-white overflow-x-hidden">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-saas-primary text-white p-2 rounded-md">
            <Building className="h-5 w-5" />
          </div>
          <h1 className="ml-2 text-xl font-bold text-saas-dark">One Parivaar</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm font-medium text-saas-dark hover:text-saas-primary transition-colors">Features</a>
          <a href="#solutions" className="text-sm font-medium text-saas-dark hover:text-saas-primary transition-colors">Solutions</a>
          <Link to="/marketplace" className="text-sm font-medium text-saas-dark hover:text-saas-primary transition-colors">Marketplace</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:inline-flex border-saas-primary text-saas-primary hover:bg-saas-primary hover:text-white">
              Log in
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="bg-saas-primary hover:bg-saas-primary/90">Get Started</Button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-saas-dark">All-in-One Platform</span> for<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-saas-primary to-saas-secondary">Builders, Realtors & Buyers</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Streamline real estate operations, manage leads, track payments, and close deals faster on a single integrated platform.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/dashboard">
            <Button size="lg" className="w-full md:w-auto bg-saas-primary hover:bg-saas-primary/90">
              Try Demo Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="lg" className="w-full md:w-auto border-saas-primary text-saas-primary hover:bg-saas-primary hover:text-white">
              Explore Properties
            </Button>
          </Link>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative w-full max-w-5xl mx-auto mt-8 mb-20">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 rounded-xl h-[50%] bottom-0"></div>
          <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="One Parivaar Dashboard" 
              className="w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
            <Link to="/dashboard">
              <Button size="lg" className="shadow-lg bg-saas-primary hover:bg-saas-primary/90">
                Explore Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-saas-dark">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your real estate business in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-saas-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-saas-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">Property Marketplace</h3>
            <p className="text-muted-foreground mb-6">Browse, filter, and discover properties across locations with our AI-powered search tools.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Marketplace Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-saas-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-saas-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">Leads Management</h3>
            <p className="text-muted-foreground mb-6">Track, nurture, and convert leads with our powerful CRM system designed for real estate.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Leads Management Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-saas-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-saas-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">Agreement Management</h3>
            <p className="text-muted-foreground mb-6">Create, manage, and store all your agreements in one secure place with e-signature support.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Agreement Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">Analytics & Reports</h3>
            <p className="text-muted-foreground mb-6">Gain insights into your business with customizable dashboards and detailed reports.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Analytics Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Percent className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">Payment Tracking</h3>
            <p className="text-muted-foreground mb-6">Manage invoices, track payments, and handle commissions all in one integrated system.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Payment Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-saas-dark">AI Insights</h3>
            <p className="text-muted-foreground mb-6">Leverage AI to predict market trends, optimize pricing, and identify new opportunities.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Insights Feature" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-saas-dark">Solutions For Every Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-saas-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-saas-dark">For Builders</h3>
            <p className="text-muted-foreground mb-6">Automate operations, manage projects, and track payments in one place.</p>
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Builder Solution" 
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-primary mr-2" />
                <span className="text-sm">Project management</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-primary mr-2" />
                <span className="text-sm">Payment tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-primary mr-2" />
                <span className="text-sm">Vendor management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-saas-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-saas-dark">For Realtors</h3>
            <p className="text-muted-foreground mb-6">Organize leads, track commissions, and close deals faster.</p>
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Realtor Solution" 
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-secondary mr-2" />
                <span className="text-sm">Full CRM system</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-secondary mr-2" />
                <span className="text-sm">Commission tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-secondary mr-2" />
                <span className="text-sm">Document management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Home className="h-6 w-6 text-saas-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-saas-dark">For Buyers</h3>
            <p className="text-muted-foreground mb-6">Get personalized recommendations and simplify your buying journey.</p>
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560518883-590b8183a119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Buyer Solution" 
                className="w-full h-40 object-cover"
              />
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-accent mr-2" />
                <span className="text-sm">Personalized recommendations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-accent mr-2" />
                <span className="text-sm">Document access</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-accent mr-2" />
                <span className="text-sm">Payment tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-saas-dark rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Take Your Real Estate Business to the Next Level</h2>
              <p className="text-white/80 mb-8">
                Join thousands of builders, realtors, and buyers who have streamlined their operations with One Parivaar.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-saas-primary">95%</span>
                  <span className="text-sm text-white/70">Faster deal closures</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-saas-primary">80%</span>
                  <span className="text-sm text-white/70">Reduction in paperwork</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-saas-primary">3.5x</span>
                  <span className="text-sm text-white/70">Increase in conversions</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-saas-primary">24/7</span>
                  <span className="text-sm text-white/70">Customer support</span>
                </div>
              </div>
              <Link to="/dashboard">
                <Button size="lg" className="bg-saas-primary hover:bg-saas-primary/90 w-full md:w-auto">
                  Try Demo Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Real Estate Business" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-saas-dark to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <Link to="/marketplace" className="inline-block">
          <div className="group relative overflow-hidden rounded-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-saas-primary/80 to-saas-secondary/80 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Property marketplace" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-6">
              <MapPin className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Explore Our Marketplace</h3>
              <p className="text-white/80 max-w-md mb-4">Discover the perfect property with our AI-powered search tools and interactive map</p>
              <Button variant="secondary" size="sm" className="bg-white text-saas-primary hover:bg-white/90">
                View Listings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>

        <h2 className="text-3xl font-bold mb-6 text-saas-dark">Ready to Transform Your Real Estate Business?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of builders, realtors, and buyers who have streamlined their operations with One Parivaar.
        </p>
        <Link to="/dashboard">
          <Button size="lg" className="bg-saas-primary hover:bg-saas-primary/90">
            Try Demo Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      <footer className="bg-saas-light py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-saas-primary text-white p-2 rounded-md">
                  <Building className="h-5 w-5" />
                </div>
                <h2 className="ml-2 text-xl font-bold text-saas-dark">One Parivaar</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The all-in-one platform connecting builders, realtors, and buyers for seamless real estate experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4 text-saas-dark">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Features</a></li>
                  <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Solutions</a></li>
                  <li><Link to="/marketplace" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Marketplace</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4 text-saas-dark">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/knowledgebase" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Knowledge Base</Link></li>
                  <li><Link to="/agreements" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Agreements</Link></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4 text-saas-dark">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 One Parivaar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <footer className="container mx-auto px-4 py-6 border-t border-gray-200 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 One Parivaar. All rights reserved.
        </p>
        <div className="mt-4">
          <Link to="/documentation" className="text-saas-primary hover:underline">
            Documentation
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
