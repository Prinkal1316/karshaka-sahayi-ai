import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  MapPin, 
  Phone, 
  Mail, 
  Leaf,
  TrendingUp,
  Calendar,
  User
} from "lucide-react";
import Navigation from "@/components/Navigation";

interface Farmer {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  crops: string[];
  landSize: number;
  joinDate: string;
  status: 'active' | 'inactive';
  lastActivity: string;
}

const Farmers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [farmers] = useState<Farmer[]>([
    {
      id: '1',
      name: 'Ravi Kumar',
      location: 'Kuttanad, Alappuzha',
      phone: '+91 9876543210',
      email: 'ravi.kumar@email.com',
      crops: ['Rice (Pokkali)', 'Coconut'],
      landSize: 5.5,
      joinDate: '2024-01-15',
      status: 'active',
      lastActivity: '2 hours ago'
    },
    {
      id: '2', 
      name: 'Priya Nair',
      location: 'Wayanad',
      phone: '+91 9876543211',
      email: 'priya.nair@email.com',
      crops: ['Pepper', 'Cardamom', 'Vanilla'],
      landSize: 3.2,
      joinDate: '2024-02-20',
      status: 'active',
      lastActivity: '1 day ago'
    },
    {
      id: '3',
      name: 'Suresh Menon',
      location: 'Thrissur',
      phone: '+91 9876543212',
      email: 'suresh.menon@email.com',
      crops: ['Banana (Nendran)', 'Rubber'],
      landSize: 8.0,
      joinDate: '2024-01-10',
      status: 'active',
      lastActivity: '3 days ago'
    },
    {
      id: '4',
      name: 'Lakshmi Pillai',
      location: 'Kollam',
      phone: '+91 9876543213',
      email: 'lakshmi.pillai@email.com',
      crops: ['Coconut', 'Tapioca', 'Brinjal'],
      landSize: 4.5,
      joinDate: '2024-03-05',
      status: 'inactive',
      lastActivity: '1 week ago'
    },
    {
      id: '5',
      name: 'Mohan Das',
      location: 'Kozhikode',
      phone: '+91 9876543214',
      email: 'mohan.das@email.com',
      crops: ['Rice (Kuttanad)', 'Ginger'],
      landSize: 6.8,
      joinDate: '2024-02-12',
      status: 'active',
      lastActivity: '5 hours ago'
    }
  ]);

  const filteredFarmers = farmers.filter(farmer =>
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.crops.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalFarmers = farmers.length;
  const activeFarmers = farmers.filter(f => f.status === 'active').length;
  const totalLandSize = farmers.reduce((sum, f) => sum + f.landSize, 0);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Farmer Management</h1>
            <p className="text-muted-foreground">Manage and track farmer profiles and activities</p>
          </div>
          <Button variant="hero" className="mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Add New Farmer
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalFarmers}</div>
                  <div className="text-sm text-muted-foreground">Total Farmers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{activeFarmers}</div>
                  <div className="text-sm text-muted-foreground">Active Farmers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalLandSize.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">Total Acres</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">8</div>
                  <div className="text-sm text-muted-foreground">Crop Types</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search farmers, location, or crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarmers.map((farmer) => (
            <Card key={farmer.id} className="border-border/50 shadow-agricultural hover:shadow-agricultural-md transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {farmer.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {farmer.location}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={farmer.status === 'active' ? 'default' : 'secondary'}
                    className={farmer.status === 'active' ? 'bg-success text-success-foreground' : ''}
                  >
                    {farmer.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-3 h-3" />
                    {farmer.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-3 h-3" />
                    {farmer.email}
                  </div>
                </div>

                {/* Crops */}
                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Crops:</div>
                  <div className="flex flex-wrap gap-1">
                    {farmer.crops.map((crop) => (
                      <Badge key={crop} variant="outline" className="text-xs">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Land Size */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Land Size:</span>
                  <span className="font-medium text-foreground">{farmer.landSize} acres</span>
                </div>

                {/* Last Activity */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Activity:</span>
                  <span className="font-medium text-foreground">{farmer.lastActivity}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No farmers found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or add a new farmer.
            </p>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Add New Farmer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Farmers;