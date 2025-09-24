import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Network, Calendar, MessageSquare, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AlumniNavigation from "@/components/alumni/AlumniNavigation";
import { useAlumniLanguage } from "@/contexts/AlumniLanguageContext";

const AlumniHome = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useAlumniLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <AlumniNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('home_title')} <br />
            <span className="text-blue-200">{t('home_university')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('home_welcome')}
          </p>

          {/* Language Selection */}
          <div className="mb-8">
            <p className="text-blue-200 mb-4 text-lg">{t('choose_language')}</p>
            <div className="flex justify-center gap-4">
              <Button
                variant={language === 'english' ? 'default' : 'secondary'}
                size="lg"
                onClick={() => setLanguage('english')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Languages className="w-5 h-5 mr-2" />
                English
              </Button>
              <Button
                variant={language === 'hindi' ? 'default' : 'secondary'}
                size="lg"
                onClick={() => setLanguage('hindi')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Languages className="w-5 h-5 mr-2" />
                हिंदी
              </Button>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => navigate('/alumni/about')}
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
          >
            {t('home_get_started')}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Network className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Professional Network</h3>
                <p className="text-muted-foreground">Connect with alumni worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Events</h3>
                <p className="text-muted-foreground">Join reunions and networking events</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
                <p className="text-muted-foreground">Get personalized guidance</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Stay connected with your batch</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200">
            © 2024 Alumni Connect AI. Connecting graduates worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AlumniHome;