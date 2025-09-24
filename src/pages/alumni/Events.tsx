import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Bell, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AlumniNavigation from "@/components/alumni/AlumniNavigation";
import { useAlumniLanguage } from "@/contexts/AlumniLanguageContext";

const Events = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useAlumniLanguage();

  const handleNotifyMe = (eventName: string) => {
    toast({
      title: "Notification Set!",
      description: `You'll be notified about updates for ${eventName}`,
    });
  };

  const events = [
    {
      id: 1,
      title: t('events_annual_reunion'),
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Ballroom, University Campus",
      description: t('events_reunion_desc'),
      status: "upcoming",
      attendees: 245
    },
    {
      id: 2,
      title: t('events_career_seminar'),
      date: "November 20, 2024",
      time: "2:00 PM - 5:00 PM", 
      location: "Business School Auditorium",
      description: t('events_seminar_desc'),
      status: "registration_open",
      attendees: 78
    },
    {
      id: 3,
      title: t('events_networking'),
      date: "Every 3rd Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Downtown Business Center",
      description: t('events_networking_desc'),
      status: "recurring",
      attendees: 35
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
      case 'registration_open': 
        return <Badge className="bg-green-100 text-green-800">Registration Open</Badge>;
      case 'recurring':
        return <Badge className="bg-purple-100 text-purple-800">Recurring</Badge>;
      default:
        return <Badge variant="secondary">Event</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <AlumniNavigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">{t('events_title')}</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl text-blue-800">{event.title}</CardTitle>
                  {getStatusBadge(event.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>{event.attendees} registered</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Button 
                      onClick={() => handleNotifyMe(event.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      {t('notify_me')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/alumni/gallery')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            {t('next_button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;