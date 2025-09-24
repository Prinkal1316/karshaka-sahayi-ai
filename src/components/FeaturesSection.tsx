import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Languages, 
  Users, 
  TrendingUp, 
  Leaf, 
  MapPin,
  Clock,
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Advice",
      description: "Get intelligent farming recommendations using advanced AI technology tailored for Kerala's climate",
      icon: Brain,
      color: "text-primary",
    },
    {
      title: "Multilingual Support", 
      description: "Communicate in Malayalam or English with real-time translation for seamless farming guidance",
      icon: Languages,
      color: "text-success",
    },
    {
      title: "Farmer Profiles",
      description: "Comprehensive farmer management system with personalized guidance and progress tracking",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Activity Tracking",
      description: "Log and monitor farming activities, crop cycles, and yield data for better management",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Crop Expertise",
      description: "Specialized knowledge for rice, coconut, spices, vegetables, and rubber plantations",
      icon: Leaf,
      color: "text-primary",
    },
    {
      title: "Local Knowledge",
      description: "Kerala-specific farming practices, soil conditions, and weather-based recommendations",
      icon: MapPin,
      color: "text-success",
    },
    {
      title: "Real-time Support",
      description: "24/7 AI assistant available for immediate farming queries and emergency guidance",
      icon: Clock,
      color: "text-primary",
    },
    {
      title: "Trusted Platform",
      description: "Secure, reliable platform designed specifically for Kerala's farming community",
      icon: Shield,
      color: "text-success",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Farming
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge AI technology to provide comprehensive farming solutions 
            tailored for Kerala's agricultural landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="group hover:shadow-agricultural-md transition-smooth bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;