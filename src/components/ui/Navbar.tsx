
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Book, 
  Building,
  ChevronDown,
  ChevronRight,
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
  Star,
  User, 
  Users, 
  X 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
  subItems?: { label: string; href: string; badge?: number }[];
};

type NavGroup = {
  title?: string;
  items: NavItem[];
  collapsible?: boolean;
};

export const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    'main': true,
    'others': false,
    'documents': false,
    'favorites': false
  });
  const location = useLocation();
  const { toast } = useToast();
  
  const navGroups: NavGroup[] = [
    {
      title: undefined,
      items: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: <Home className="h-5 w-5" />,
        },
        {
          label: "Properties",
          href: "/properties",
          icon: <LayoutGrid className="h-5 w-5" />,
          badge: 45,
          subItems: [
            { label: "My Properties", href: "/properties?filter=my" },
            { label: "Featured", href: "/properties?filter=featured" }
          ]
        },
        {
          label: "Marketplace",
          href: "/marketplace",
          icon: <MapPin className="h-5 w-5" />,
        },
        {
          label: "Search",
          href: "/search",
          icon: <Search className="h-5 w-5" />,
        }
      ]
    },
    {
      title: "Others",
      collapsible: true,
      items: [
        {
          label: "Leads & CRM",
          href: "/leads",
          icon: <Users className="h-5 w-5" />,
          badge: 3,
        },
        {
          label: "Transactions",
          href: "/transactions",
          icon: <ShoppingCart className="h-5 w-5" />,
        }
      ]
    },
    {
      title: "Documents",
      collapsible: true,
      items: [
        {
          label: "Agreements",
          href: "/agreements",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          label: "Payments",
          href: "/payments",
          icon: <Percent className="h-5 w-5" />,
        },
      ]
    },
    {
      title: "Favorites",
      collapsible: true,
      items: [
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
      ]
    },
    {
      title: undefined,
      items: [
        {
          label: "Settings",
          href: "/settings",
          icon: <Settings className="h-5 w-5" />,
        },
      ]
    }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
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

  const toggleGroup = (groupName: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const renderNavItem = (item: NavItem) => {
    if (item.subItems) {
      return (
        <Collapsible key={item.href} className="w-full">
          <CollapsibleTrigger className={cn(
            "flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
            isCollapsed ? "justify-center" : "",
            isActive(item.href)
              ? "bg-[#FF5349] text-white"
              : "text-white hover:bg-saas-dark/80 hover:text-[#FF5349]"
          )}>
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {item.icon}
              {!isCollapsed && (
                <>
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto text-xs tabular-nums">{item.badge}</span>
                  )}
                </>
              )}
            </div>
            {!isCollapsed && <ChevronDown className="h-4 w-4 shrink-0" />}
          </CollapsibleTrigger>
          <CollapsibleContent className={cn(
            "pl-10 space-y-1 mt-1",
            isCollapsed && "hidden"
          )}>
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.href}
                to={subItem.href}
                className="flex items-center py-1 text-sm text-white/80 hover:text-[#FF5349]"
              >
                <span className="truncate">{subItem.label}</span>
                {subItem.badge && (
                  <span className="ml-auto text-xs tabular-nums">{subItem.badge}</span>
                )}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }
    
    return (
      <Link
        key={item.href}
        to={item.href}
        onClick={(e) => handleNavigation(e, item.href)}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isCollapsed ? "justify-center" : "",
          isActive(item.href)
            ? "bg-[#FF5349] text-white"
            : "text-white hover:bg-saas-dark/80 hover:text-[#FF5349]"
        )}
      >
        {item.icon}
        {!isCollapsed && (
          <div className="flex-1 min-w-0 flex items-center">
            <span className="truncate">{item.label}</span>
            {item.badge && (
              <span className="ml-auto text-xs tabular-nums">{item.badge}</span>
            )}
          </div>
        )}
        {isCollapsed && item.badge && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5349] text-[10px] font-medium text-white">
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className={cn(
        "hidden lg:flex fixed inset-y-0 left-0 flex-col py-4 px-3 bg-saas-dark border-r shadow-sm z-40 overflow-y-auto scrollbar-none transition-all duration-300",
        isCollapsed ? "w-16" : "w-60"
      )}>
        <div className={cn("px-3 mb-6 flex items-center", isCollapsed && "justify-center")}>
          <Link to="/" className="flex items-center">
            <div className="bg-[#FF5349] text-white p-2 rounded mr-2">
              <Building className="h-5 w-5" />
            </div>
            {!isCollapsed && <h1 className="font-bold text-xl text-white">One Parivaar</h1>}
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className={cn(
              "ml-auto text-white hover:bg-sidebar-accent hover:text-white",
              isCollapsed && "hidden"
            )}
          >
            <ChevronDown className="h-4 w-4 transform rotate-90" />
          </Button>
        </div>
        
        {isCollapsed && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className="mx-auto mb-4 text-white hover:bg-sidebar-accent hover:text-white"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        )}
        
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {navGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-2">
              {group.title && !isCollapsed && (
                <div className="flex items-center px-3 py-2">
                  {group.collapsible ? (
                    <button 
                      onClick={() => toggleGroup(group.title || '')}
                      className="w-full flex items-center justify-between text-white/70 hover:text-white text-sm"
                    >
                      {group.title}
                      {openGroups[group.title || ''] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  ) : (
                    <span className="text-white/70 text-sm">{group.title}</span>
                  )}
                </div>
              )}
              
              {(!group.collapsible || openGroups[group.title || ''] || isCollapsed) && (
                <div className="space-y-1">
                  {group.items.map(renderNavItem)}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {!isCollapsed && (
          <div className="mt-auto px-3 pt-3">
            <div className="flex items-center gap-3 p-3 bg-saas-dark/80 rounded-md border border-white/20">
              <div className="bg-[#FF5349] text-white p-1 rounded-full">
                <User className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">Aditya Sharma</p>
                <p className="text-xs text-white/70 truncate">Administrator</p>
              </div>
            </div>
          </div>
        )}
        
        {isCollapsed && (
          <div className="mt-auto px-3 pt-3 flex justify-center">
            <div className="bg-[#FF5349] text-white p-1 rounded-full">
              <User className="h-5 w-5" />
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-16 border-b bg-white z-30 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <div className="bg-[#FF5349] text-white p-1 rounded mr-2">
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
            <div className="flex items-center justify-between mb-6">
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
            
            <nav className="space-y-4 overflow-y-auto">
              {navGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  {group.title && (
                    <div className="flex items-center px-3 py-2">
                      {group.collapsible ? (
                        <button 
                          onClick={() => toggleGroup(group.title || '')}
                          className="w-full flex items-center justify-between text-white/70 hover:text-white text-sm"
                        >
                          {group.title}
                          {openGroups[group.title || ''] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                      ) : (
                        <span className="text-white/70 text-sm">{group.title}</span>
                      )}
                    </div>
                  )}
                  
                  {(!group.collapsible || openGroups[group.title || '']) && (
                    <div className="space-y-1">
                      {group.items.map(item => (
                        <div key={item.href}>
                          {item.subItems ? (
                            <Collapsible className="w-full">
                              <CollapsibleTrigger className={cn(
                                "flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                isActive(item.href)
                                  ? "bg-[#FF5349] text-white"
                                  : "text-white hover:bg-saas-dark/80"
                              )}>
                                <div className="flex items-center gap-3">
                                  {item.icon}
                                  <span>{item.label}</span>
                                </div>
                                <div className="flex items-center">
                                  {item.badge && (
                                    <span className="mr-2 text-xs tabular-nums">{item.badge}</span>
                                  )}
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="pl-10 space-y-1 mt-1">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    to={subItem.href}
                                    onClick={() => setShowMobileMenu(false)}
                                    className="flex items-center py-1 text-sm text-white/80 hover:text-[#FF5349]"
                                  >
                                    <span>{subItem.label}</span>
                                    {subItem.badge && (
                                      <span className="ml-auto text-xs tabular-nums">{subItem.badge}</span>
                                    )}
                                  </Link>
                                ))}
                              </CollapsibleContent>
                            </Collapsible>
                          ) : (
                            <Link
                              to={item.href}
                              onClick={(e) => {
                                handleNavigation(e, item.href);
                                setShowMobileMenu(false);
                              }}
                              className={cn(
                                "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium",
                                isActive(item.href)
                                  ? "bg-[#FF5349] text-white"
                                  : "text-white hover:bg-saas-dark/80"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.label}</span>
                              </div>
                              {item.badge && (
                                <span className="text-xs tabular-nums">{item.badge}</span>
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3 p-3 bg-saas-dark/80 rounded-md border border-white/20">
                <div className="bg-[#FF5349] text-white p-1 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Aditya Sharma</p>
                  <p className="text-xs text-white/70">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Padding for Mobile */}
      <div className="lg:hidden h-16" />
      
      {/* Content Padding for Desktop */}
      <div className="hidden lg:block" style={{ marginLeft: isCollapsed ? '4rem' : '15rem' }} />
    </>
  );
};
