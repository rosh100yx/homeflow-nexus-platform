
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Home, 
  LayoutGrid, 
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
      <div className="hidden lg:flex fixed inset-y-0 left-0 flex-col py-4 px-3 w-60 bg-retro-navy border-r shadow-sm">
        <div className="px-3 mb-10">
          <Link to="/" className="flex items-center">
            <div className="bg-retro-orange text-retro-white p-2 rounded mr-2">
              <Home className="h-5 w-5" />
            </div>
            <h1 className="font-bold text-xl text-retro-white">BuilderHub</h1>
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
                  ? "bg-retro-orange text-retro-white"
                  : "text-retro-white hover:bg-retro-navy/80 hover:text-retro-orange"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto px-3">
          <div className="flex items-center gap-3 p-3 bg-retro-navy/80 rounded-md border border-retro-white/20">
            <div className="bg-retro-orange text-retro-white p-1 rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-retro-white">Alex Morrison</p>
              <p className="text-xs text-retro-white/70">Admin</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-16 border-b bg-retro-white z-30 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <div className="bg-retro-orange text-retro-white p-1 rounded mr-2">
            <Home className="h-4 w-4" />
          </div>
          <h1 className="font-bold text-lg text-retro-navy">BuilderHub</h1>
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setShowMobileMenu(true)}
          className="text-retro-navy"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-retro-black/50 z-50">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-retro-navy p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-lg text-retro-white">Menu</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowMobileMenu(false)}
                className="text-retro-white"
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
                      ? "bg-retro-orange text-retro-white"
                      : "text-retro-white hover:bg-retro-navy/80"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-retro-white/20">
              <div className="flex items-center gap-3 p-3 bg-retro-navy/80 rounded-md border border-retro-white/20">
                <div className="bg-retro-orange text-retro-white p-1 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-retro-white">Alex Morrison</p>
                  <p className="text-xs text-retro-white/70">Admin</p>
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
