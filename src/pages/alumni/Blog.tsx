import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AlumniNavigation from "@/components/alumni/AlumniNavigation";
import { useAlumniLanguage } from "@/contexts/AlumniLanguageContext";

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useAlumniLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t('blog_success_story'),
      excerpt: t('blog_success_desc'),
      author: "Alumni Relations Team",
      date: "November 10, 2024",
      category: "Success Stories",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2, 
      title: t('blog_reunion_recap'),
      excerpt: t('blog_reunion_desc'),
      author: "Events Committee",
      date: "October 25, 2024",
      category: "Events",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 3,
      title: t('blog_scholarship'),
      excerpt: t('blog_scholarship_desc'),
      author: "Scholarship Committee",
      date: "October 15, 2024",
      category: "Announcements",
      readTime: "4 min read",
      featured: false
    }
  ];

  const getCategoryBadge = (category: string) => {
    const colors = {
      'Success Stories': 'bg-green-100 text-green-800',
      'Events': 'bg-blue-100 text-blue-800',
      'Announcements': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <AlumniNavigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">{t('blog_title')}</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="border-blue-200 mb-12 bg-gradient-to-r from-blue-50 to-white">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                <Badge className={getCategoryBadge(post.category)}>{post.category}</Badge>
              </div>
              <CardTitle className="text-3xl text-blue-800">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <BookOpen className="w-16 h-16 mx-auto mb-4" />
                    <p>Featured Image</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className={`${getCategoryBadge(post.category)} w-fit`}>{post.category}</Badge>
                <CardTitle className="text-xl text-blue-800">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs text-blue-600">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/alumni/contact')}
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

export default Blog;