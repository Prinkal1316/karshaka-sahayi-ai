import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'hindi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  english: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_events: "Events", 
    nav_gallery: "Gallery",
    nav_blog: "Blog",
    nav_contact: "Contact",
    nav_dashboard: "Dashboard",
    
    // Home Page
    home_title: "We Are Proud Alumni of",
    home_university: "Your University Name",
    home_welcome: "Welcome to our alumni community! Connect with fellow graduates, discover opportunities, and stay updated on university events and achievements.",
    home_get_started: "Get Started",
    choose_language: "Choose Language",
    
    // About Page
    about_title: "About Our Association",
    about_mission: "Our Mission",
    about_mission_text: "To foster lifelong connections among alumni, support career development, and strengthen the bond with our alma mater through networking, mentorship, and community engagement.",
    about_benefits: "Key Benefits",
    about_networking: "Professional Networking",
    about_networking_desc: "Connect with alumni across industries and locations",
    about_mentorship: "Mentorship Programs", 
    about_mentorship_desc: "Get guidance from experienced professionals",
    about_events: "Exclusive Events",
    about_events_desc: "Access to reunions, seminars, and social gatherings",
    next_button: "Next",
    
    // Events Page
    events_title: "Upcoming Events",
    events_annual_reunion: "Annual Alumni Reunion 2024",
    events_reunion_desc: "Join us for our biggest gathering of the year with networking, dinner, and awards ceremony.",
    events_career_seminar: "Career Development Seminar",
    events_seminar_desc: "Professional development workshop focusing on leadership and industry trends.",
    events_networking: "Monthly Networking Mixer",
    events_networking_desc: "Casual networking event for alumni in the business district.",
    notify_me: "Notify Me",
    
    // Gallery Page
    gallery_title: "Alumni Gallery",
    gallery_subtitle: "Celebrating our achievements and memories",
    
    // Blog Page
    blog_title: "Alumni Stories",
    blog_success_story: "Success Story: From Campus to CEO",
    blog_success_desc: "Read how John Smith (Class of 2010) built his tech startup from a dorm room idea to a multi-million dollar company.",
    blog_reunion_recap: "2023 Reunion Recap",
    blog_reunion_desc: "Highlights from our amazing reunion event with over 500 alumni in attendance.",
    blog_scholarship: "New Scholarship Program Launch",
    blog_scholarship_desc: "We're excited to announce our new merit-based scholarship program for current students.",
    
    // Contact Page
    contact_title: "Contact Us",
    contact_form_title: "Get In Touch",
    contact_name: "Full Name",
    contact_email: "Email Address", 
    contact_message: "Message",
    contact_send: "Send Message",
    contact_info: "Contact Information",
    contact_email_label: "Email",
    contact_phone: "Phone",
    
    // Dashboard
    dashboard_title: "Alumni Dashboard",
    dashboard_chat: "AI Assistant",
    dashboard_chat_placeholder: "Ask about networking, events, or career opportunities...",
    dashboard_graduation_year: "Graduation Year",
    dashboard_notifications: "Notifications",
    dashboard_welcome: "Welcome to your personalized alumni dashboard! Use the AI assistant for guidance and stay updated with notifications.",
    send: "Send"
  },
  hindi: {
    // Navigation
    nav_home: "होम",
    nav_about: "परिचय", 
    nav_events: "कार्यक्रम",
    nav_gallery: "गैलरी",
    nav_blog: "ब्लॉग",
    nav_contact: "संपर्क",
    nav_dashboard: "डैशबोर्ड",
    
    // Home Page
    home_title: "हम गर्व से हैं पूर्व छात्र",
    home_university: "आपके विश्वविद्यालय का नाम",
    home_welcome: "हमारे पूर्व छात्र समुदाय में आपका स्वागत है! साथी स्नातकों से जुड़ें, अवसरों की खोज करें, और विश्वविद्यालय की घटनाओं और उपलब्धियों के साथ अपडेट रहें।",
    home_get_started: "शुरू करें",
    choose_language: "भाषा चुनें",
    
    // About Page
    about_title: "हमारे संघ के बारे में",
    about_mission: "हमारा मिशन",
    about_mission_text: "पूर्व छात्रों के बीच जीवनभर के संबंध को बढ़ावा देना, करियर विकास का समर्थन करना, और नेटवर्किंग, मेंटरशिप और सामुदायिक सहभागिता के माध्यम से अपने पुराने स्कूल के साथ बंधन को मजबूत करना।",
    about_benefits: "मुख्य लाभ",
    about_networking: "व्यावसायिक नेटवर्किंग",
    about_networking_desc: "उद्योगों और स्थानों में पूर्व छात्रों से जुड़ें",
    about_mentorship: "मेंटरशिप कार्यक्रम",
    about_mentorship_desc: "अनुभवी पेशेवरों से मार्गदर्शन प्राप्त करें",
    about_events: "विशेष कार्यक्रम",
    about_events_desc: "पुनर्मिलन, सेमिनार और सामाजिक सभाओं तक पहुंच",
    next_button: "अगला",
    
    // Events Page
    events_title: "आगामी कार्यक्रम",
    events_annual_reunion: "वार्षिक पूर्व छात्र पुनर्मिलन 2024",
    events_reunion_desc: "नेटवर्किंग, डिनर और पुरस्कार समारोह के साथ वर्ष की हमारी सबसे बड़ी सभा में शामिल हों।",
    events_career_seminar: "करियर विकास सेमिनार",
    events_seminar_desc: "नेतृत्व और उद्योग रुझानों पर केंद्रित व्यावसायिक विकास कार्यशाला।",
    events_networking: "मासिक नेटवर्किंग मिक्सर",
    events_networking_desc: "व्यापारिक जिले में पूर्व छात्रों के लिए अनौपचारिक नेटवर्किंग कार्यक्रम।",
    notify_me: "मुझे सूचित करें",
    
    // Gallery Page
    gallery_title: "पूर्व छात्र गैलरी",
    gallery_subtitle: "हमारी उपलब्धियों और यादों का जश्न",
    
    // Blog Page
    blog_title: "पूर्व छात्र कहानियां",
    blog_success_story: "सफलता की कहानी: कैंपस से सीईओ तक",
    blog_success_desc: "पढ़िए कि कैसे जॉन स्मिथ (2010 की कक्षा) ने अपना टेक स्टार्टअप एक छात्रावास के कमरे के विचार से एक करोड़ डॉलर की कंपनी में बदला।",
    blog_reunion_recap: "2023 पुनर्मिलन रिकैप",
    blog_reunion_desc: "500 से अधिक पूर्व छात्रों की उपस्थिति के साथ हमारे अद्भुत पुनर्मिलन कार्यक्रम की मुख्य बातें।",
    blog_scholarship: "नया छात्रवृत्ति कार्यक्रम लॉन्च",
    blog_scholarship_desc: "हम वर्तमान छात्रों के लिए अपने नए मेधा-आधारित छात्रवृत्ति कार्यक्रम की घोषणा करते हुए उत्साहित हैं।",
    
    // Contact Page
    contact_title: "संपर्क करें",
    contact_form_title: "संपर्क में रहें",
    contact_name: "पूरा नाम",
    contact_email: "ईमेल पता",
    contact_message: "संदेश",
    contact_send: "संदेश भेजें",
    contact_info: "संपर्क जानकारी",
    contact_email_label: "ईमेल",
    contact_phone: "फोन",
    
    // Dashboard  
    dashboard_title: "पूर्व छात्र डैशबोर्ड",
    dashboard_chat: "AI सहायक",
    dashboard_chat_placeholder: "नेटवर्किंग, कार्यक्रम या करियर अवसरों के बारे में पूछें...",
    dashboard_graduation_year: "स्नातक वर्ष",
    dashboard_notifications: "सूचनाएं",
    dashboard_welcome: "आपके व्यक्तिगत पूर्व छात्र डैशबोर्ड में आपका स्वागत है! मार्गदर्शन के लिए AI सहायक का उपयोग करें और सूचनाओं के साथ अपडेट रहें।",
    send: "भेजें"
  }
};

const AlumniLanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useAlumniLanguage = () => {
  const context = useContext(AlumniLanguageContext);
  if (!context) {
    throw new Error('useAlumniLanguage must be used within an AlumniLanguageProvider');
  }
  return context;
};

export const AlumniLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('english');

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('alumni-language', newLanguage);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.english] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('alumni-language') as Language;
    if (savedLanguage && (savedLanguage === 'english' || savedLanguage === 'hindi')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <AlumniLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </AlumniLanguageContext.Provider>
  );
};