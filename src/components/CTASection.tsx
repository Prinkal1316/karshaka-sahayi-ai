import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of Kerala farmers already using our AI assistant for smarter, 
          more productive agriculture. Get started today and see the difference.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Button variant="outline" size="lg" asChild className="min-w-[250px] text-lg">
            <Link to="/chat" className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              Get Started Today
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-foreground mb-2">5000+</div>
            <div className="text-primary-foreground/80">Active Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-foreground mb-2">50+</div>
            <div className="text-primary-foreground/80">Crop Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
            <div className="text-primary-foreground/80">Success Rate</div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm">Increase Crop Yield</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-primary-foreground/50 rounded-full" />
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <Users className="w-5 h-5" />
            <span className="text-sm">Expert Community Support</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-primary-foreground/50 rounded-full" />
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">24/7 AI Assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;