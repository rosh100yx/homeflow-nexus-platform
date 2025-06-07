
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Book,
  Building,
  ChevronDown,
  FileText, 
  Home, 
  LayoutGrid, 
  MapPin,
  Menu, 
  Percent,
  Search,
  Settings, 
  ShoppingCart, 
  Sparkles,
  User, 
  Users, 
  X 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const location = useLocation();
  const { toast } = useToast();
  
  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      label: "Data Import",
      href: "/data-import",
      icon: <FileText className="h-5 w-5" />,
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
      label: "Knowledgebase",
      href: "/knowledgebase",
      icon: <Book className="h-5 w-5" />,
    },
    {
      label: "AI Insights",
      href: "/ai-insights",
      icon: <Sparkles className="h-5 w-5" />,
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

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      toast({
        title: "Already on this page",
        description: `You're already on the ${path.replace('/', '')} page`,
        duration: 2000,
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Stripe-like UI */}
      <div className={cn(
        "hidden lg:flex fixed inset-y-0 left-0 flex-col py-0 w-60 border-r z-40 transition-all duration-200",
        scrolled ? "bg-white/80 backdrop-blur-md border-muted" : "bg-saas-dark border-saas-dark/20"
      )}>
        <div className="px-3 py-5 border-b border-saas-dark/20">
          <Link to="/" className="flex items-center">
            <div className="bg-[#FF5349] text-white p-2 rounded mr-2">
              <Building className="h-5 w-5" />
            </div>
            <h1 className={cn(
              "font-bold text-xl transition-colors",
              scrolled ? "text-saas-dark" : "text-white"
            )}>One Parivaar</h1>
          </Link>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 mb-2">
            <p className={cn(
              "text-xs font-medium uppercase mb-2 transition-colors",
              scrolled ? "text-muted-foreground" : "text-white/60"
            )}>
              Navigation
            </p>
          </div>
          
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-md text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-[#FF5349]/10 text-[#FF5349]"
                  : scrolled 
                    ? "text-saas-dark hover:bg-slate-100" 
                    : "text-white/80 hover:bg-saas-dark/80 hover:text-white"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="px-3 pt-3 pb-5 border-t border-saas-dark/20">
          <div className={cn(
            "flex items-center gap-3 p-3 rounded-md transition-colors",
            scrolled ? "bg-slate-100" : "bg-saas-dark/50 border border-white/10"
          )}>
            <div className="bg-[#FF5349] text-white p-1 rounded-full">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className={cn(
                "text-sm font-medium",
                scrolled ? "text-saas-dark" : "text-white"
              )}>Aditya Sharma</p>
              <p className={cn(
                "text-xs",
                scrolled ? "text-muted-foreground" : "text-white/70"
              )}>Administrator</p>
            </div>
            <ChevronDown className={cn(
              "h-4 w-4 ml-auto",
              scrolled ? "text-muted-foreground" : "text-white/70"
            )} />
          </div>
        </div>
      </div>
      
      {/* Mobile Header - Stripe-like */}
      <div className={cn(
        "lg:hidden fixed top-0 inset-x-0 h-16 z-30 flex items-center justify-between px-4 transition-all duration-200",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-muted shadow-sm" : "bg-saas-dark"
      )}>
        <Link to="/" className="flex items-center">
          <div className="bg-[#FF5349] text-white p-1 rounded mr-2">
            <Building className="h-4 w-4" />
          </div>
          <h1 className={cn(
            "font-bold text-lg",
            scrolled ? "text-saas-dark" : "text-white"
          )}>One Parivaar</h1>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className={scrolled ? "text-saas-dark" : "text-white"}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowMobileMenu(true)}
            className={scrolled ? "text-saas-dark" : "text-white"}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu - Stripe-like */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 h-full overflow-y-auto shadow-lg animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center">
                <div className="bg-[#FF5349] text-white p-1.5 rounded mr-2">
                  <Building className="h-4 w-4" />
                </div>
                <h2 className="font-bold text-lg text-saas-dark">Menu</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowMobileMenu(false)}
                className="text-muted-foreground hover:text-saas-dark"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => {
                    handleNavigation(e, item.href);
                    setShowMobileMenu(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-[#FF5349]/10 text-[#FF5349]"
                      : "text-saas-dark hover:bg-slate-100"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-md">
                <div className="bg-[#FF5349] text-white p-1 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-saas-dark">Aditya Sharma</p>
                  <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
