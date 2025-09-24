import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CropsSection = () => {
  const crops = [
    {
      name: "Rice Varieties",
      varieties: ["Pokkali", "Kuttanad", "Jyothi", "Swetha"],
      description: "Specialized guidance for Kerala's traditional and modern rice cultivation methods",
      image: "🌾",
      season: "Kharif & Rabi",
    },
    {
      name: "Coconut Cultivation", 
      varieties: ["Tall", "Dwarf", "Hybrid"],
      description: "Comprehensive coconut farming from planting to harvesting and processing",
      image: "🥥",
      season: "Year-round",
    },
    {
      name: "Banana Farming",
      varieties: ["Nendran", "Poovan", "Robusta", "Red Banana"],
      description: "Expert advice on banana cultivation, disease management, and marketing",
      image: "🍌", 
      season: "Year-round",
    },
    {
      name: "Spice Cultivation",
      varieties: ["Black Pepper", "Cardamom", "Vanilla", "Ginger"],
      description: "Kerala's famous spices with specialized cultivation and processing techniques",
      image: "🌶️",
      season: "Seasonal",
    },
    {
      name: "Vegetable Crops",
      varieties: ["Brinjal", "Tomato", "Tapioca", "Okra"],
      description: "Vegetable farming with focus on organic methods and pest management",
      image: "🍅",
      season: "Year-round",
    },
    {
      name: "Rubber Plantation",
      varieties: ["RRII 105", "RRII 203", "GT 1"],
      description: "Rubber cultivation, tapping techniques, and yield optimization strategies",
      image: "🌳",
      season: "Perennial",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supporting Kerala's Diverse Agriculture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get specialized guidance for all major crops grown in Kerala, from traditional 
            varieties to modern farming techniques.
          </p>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crops.map((crop, index) => (
            <Card 
              key={crop.name}
              className="group hover:shadow-agricultural-lg transition-smooth bg-card border-border/50 hover:border-primary/30 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-4xl">{crop.image}</div>
                  <Badge variant="secondary" className="text-xs">
                    {crop.season}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {crop.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {crop.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground mb-2">Popular Varieties:</div>
                  <div className="flex flex-wrap gap-2">
                    {crop.varieties.map((variety) => (
                      <Badge 
                        key={variety} 
                        variant="outline"
                        className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-smooth"
                      >
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Comprehensive Crop Database
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI assistant has extensive knowledge about Kerala's agricultural practices, 
              seasonal patterns, soil requirements, and market trends for all major crops. 
              Get personalized advice based on your location, farm size, and experience level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropsSection;