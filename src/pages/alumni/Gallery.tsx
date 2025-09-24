import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AlumniNavigation from "@/components/alumni/AlumniNavigation";
import { useAlumniLanguage } from "@/contexts/AlumniLanguageContext";

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useAlumniLanguage();

  const galleryItems = [
    { id: 1, title: "Graduation Ceremony 2023", category: "Events" },
    { id: 2, title: "Alumni Reunion 2023", category: "Reunions" },
    { id: 3, title: "Career Fair Success", category: "Achievements" },
    { id: 4, title: "Distinguished Alumni Awards", category: "Awards" },
    { id: 5, title: "Campus Milestones", category: "Milestones" },
    { id: 6, title: "Student Life Memories", category: "Memories" },
    { id: 7, title: "Sports Championships", category: "Sports" },
    { id: 8, title: "Academic Excellence", category: "Academics" },
    { id: 9, title: "Community Service", category: "Service" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <AlumniNavigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">{t('gallery_title')}</h1>
          <p className="text-xl text-gray-600 mb-6">{t('gallery_subtitle')}</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <ImageIcon className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Photo Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <Card className="border-blue-200 mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <ImageIcon className="w-20 h-20 mx-auto mb-4" />
                  <p>Featured Alumni Achievement</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Latest Milestone</h3>
                <p className="text-gray-700 mb-4">
                  Celebrating our alumni's incredible achievements across various fields including technology, 
                  healthcare, education, and entrepreneurship. Their success stories inspire our current 
                  students and fellow graduates.
                </p>
                <p className="text-gray-600">
                  Join us in celebrating these remarkable journeys and achievements that make our 
                  university proud.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/alumni/blog')}
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

export default Gallery;