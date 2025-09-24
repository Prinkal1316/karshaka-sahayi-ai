import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Users, Languages } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlumniLanguage } from "@/contexts/AlumniLanguageContext";

const AlumniNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useAlumniLanguage();

  const navigation = [
    { name: t('nav_home'), href: '/alumni', icon: Users },
    { name: t('nav_about'), href: '/alumni/about', icon: Users },
    { name: t('nav_events'), href: '/alumni/events', icon: Users },
    { name: t('nav_gallery'), href: '/alumni/gallery', icon: Users },
    { name: t('nav_blog'), href: '/alumni/blog', icon: Users },
    { name: t('nav_contact'), href: '/alumni/contact', icon: Users },
    { name: t('nav_dashboard'), href: '/alumni/dashboard', icon: Users },
  ];

  const isActiveRoute = (path: string): boolean => {
    if (path === '/alumni' && location.pathname === '/alumni') return true;
    if (path !== '/alumni' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/alumni')}
          >
            <Users className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Alumni Connect AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActiveRoute(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex gap-1 p-1 bg-muted rounded-lg border border-border">
              <Button
                variant={language === 'english' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('english')}
                className="text-xs"
              >
                <Languages className="w-3 h-3 mr-1" />
                EN
              </Button>
              <Button
                variant={language === 'hindi' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('hindi')}
                className="text-xs"
              >
                <Languages className="w-3 h-3 mr-1" />
                हिं
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant={isActiveRoute(item.href) ? "default" : "ghost"}
                    className="justify-start"
                    onClick={() => navigate(item.href)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-2">{t('choose_language')}</p>
                  <div className="flex gap-2">
                    <Button
                      variant={language === 'english' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setLanguage('english')}
                      className="flex-1"
                    >
                      English
                    </Button>
                    <Button
                      variant={language === 'hindi' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setLanguage('hindi')}
                      className="flex-1"
                    >
                      हिंदी
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default AlumniNavigation;