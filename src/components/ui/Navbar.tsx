
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Building,
  FileText, 
  Home, 
  LayoutGrid, 
  MapPin,
  Menu, 
  Percent,
  Settings, 
  ShoppingCart, 
  User, 
  Users, 
  X 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: "Properties",
      href: "/properties",
      icon: <LayoutGrid className="h-5 w-5" />,
    },
    {
      label: "Marketplace",
      href: "/marketplace",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      label: "Leads & CRM",
      href: "/leads",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Transactions",
      href: "/transactions",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      label: "Payments",
      href: "/payments",
      icon: <Percent className="h-5 w-5" />,
    },
    {
      label: "Agreements",
      href: "/agreements",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 flex-col py-4 px-3 w-60 bg-saas-dark border-r shadow-sm">
        <div className="px-3 mb-10">
          <Link to="/" className="flex items-center">
            <div className="bg-saas-primary text-white p-2 rounded mr-2">
              <Building className="h-5 w-5" />
            </div>
            <h1 className="font-bold text-xl text-white">One Parivaar</h1>
          </Link>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-saas-primary text-white"
                  : "text-white hover:bg-saas-dark/80 hover:text-saas-secondary"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto px-3">
          <div className="flex items-center gap-3 p-3 bg-saas-dark/80 rounded-md border border-white/20">
            <div className="bg-saas-primary text-white p-1 rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Alex Morrison</p>
              <p className="text-xs text-white/70">Admin</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-16 border-b bg-white z-30 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <div className="bg-saas-primary text-white p-1 rounded mr-2">
            <Building className="h-4 w-4" />
          </div>
          <h1 className="font-bold text-lg text-saas-dark">One Parivaar</h1>
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setShowMobileMenu(true)}
          className="text-saas-dark"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-saas-dark p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-lg text-white">Menu</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowMobileMenu(false)}
                className="text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                    isActive(item.href)
                      ? "bg-saas-primary text-white"
                      : "text-white hover:bg-saas-dark/80"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 p-3 bg-saas-dark/80 rounded-md border border-white/20">
                <div className="bg-saas-primary text-white p-1 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Alex Morrison</p>
                  <p className="text-xs text-white/70">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Padding for Mobile */}
      <div className="lg:hidden h-16" />
      
      {/* Content Padding for Desktop */}
      <div className="hidden lg:block lg:ml-60" />
    </>
  );
};
