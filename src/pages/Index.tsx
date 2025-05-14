
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, Layers, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-saas-50 to-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-saas-600 text-white p-2 rounded-md">
            <Layers className="h-5 w-5" />
          </div>
          <h1 className="ml-2 text-xl font-bold">BuilderHub</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-saas-600">Features</a>
          <a href="#solutions" className="text-sm font-medium hover:text-saas-600">Solutions</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-saas-600">Testimonials</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-saas-800">All-in-One Platform</span> for<br />
          Builders, Realtors & Buyers
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Streamline real estate operations, manage leads, track payments, and close deals faster on a single integrated platform.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg" className="w-full md:w-auto">
              Try Demo Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full md:w-auto">
            Book a Demo
          </Button>
        </div>
      </section>

      <section id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Solutions For Every Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-saas-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">For Builders</h3>
            <p className="text-muted-foreground mb-4">Automate operations, manage projects, and track payments in one place.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Project management</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Payment tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Vendor management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">For Realtors</h3>
            <p className="text-muted-foreground mb-4">Organize leads, track commissions, and close deals faster.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Full CRM system</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Commission tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Document management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">For Buyers</h3>
            <p className="text-muted-foreground mb-4">Get personalized recommendations and simplify your buying journey.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Personalized recommendations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Document access</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-saas-600 mr-2" />
                <span className="text-sm">Payment tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Join thousands of builders, realtors, and buyers who have streamlined their operations with BuilderHub.
        </p>
        <Link to="/dashboard">
          <Button size="lg">
            Try Demo Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-saas-600 text-white p-2 rounded-md">
                  <Layers className="h-5 w-5" />
                </div>
                <h2 className="ml-2 text-xl font-bold">BuilderHub</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The all-in-one platform connecting builders, realtors, and buyers for seamless real estate experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Features</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Solutions</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Pricing</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Documentation</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Careers</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-saas-600">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BuilderHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
