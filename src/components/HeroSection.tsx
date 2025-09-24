import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, MessageCircle, Users } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kerala farming landscape with lush green fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary-foreground/20">
            <Sprout className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Your AI Farming Friend
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Kerala Farm AI empowers farmers with intelligent agricultural guidance, 
          multilingual support, and personalized farming advice for all major crops.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg" asChild className="min-w-[200px]">
            <Link to="/chat" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start AI Chat
            </Link>
          </Button>
          <Button variant="ghost" size="lg" asChild className="min-w-[200px] text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/farmers" className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Manage Farmers
            </Link>
          </Button>
        </div>

        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <div className="text-2xl font-bold text-primary-foreground mb-2">Malayalam + English</div>
            <div className="text-primary-foreground/80 text-sm">Real-time translation support</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <div className="text-2xl font-bold text-primary-foreground mb-2">Smart Advice</div>
            <div className="text-primary-foreground/80 text-sm">AI-powered crop guidance</div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <div className="text-2xl font-bold text-primary-foreground mb-2">Activity Tracking</div>
            <div className="text-primary-foreground/80 text-sm">Monitor farming progress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;