
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, BarChart3, CheckCircle2, Home, MapPin, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-saas-light to-white">
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

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-saas-dark">All-in-One Platform</span> for<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-saas-primary to-saas-secondary">Builders, Realtors & Buyers</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Streamline real estate operations, manage leads, track payments, and close deals faster on a single integrated platform.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
      </section>

      <section id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-saas-dark">Solutions For Every Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-saas-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-saas-dark">For Builders</h3>
            <p className="text-muted-foreground mb-4">Automate operations, manage projects, and track payments in one place.</p>
            <ul className="space-y-2 mb-6">
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
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-saas-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-saas-dark">For Realtors</h3>
            <p className="text-muted-foreground mb-4">Organize leads, track commissions, and close deals faster.</p>
            <ul className="space-y-2 mb-6">
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
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-saas-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Home className="h-6 w-6 text-saas-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-saas-dark">For Buyers</h3>
            <p className="text-muted-foreground mb-4">Get personalized recommendations and simplify your buying journey.</p>
            <ul className="space-y-2 mb-6">
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
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Features</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Solutions</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4 text-saas-dark">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-primary transition-colors">Documentation</a></li>
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
    </div>
  );
};

export default Index;
