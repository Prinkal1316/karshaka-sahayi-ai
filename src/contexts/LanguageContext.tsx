import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'malayalam';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  english: {
    hero_title: "Your AI Farming Friend",
    hero_subtitle: "Kerala Farm AI empowers farmers with intelligent agricultural guidance, multilingual support, and personalized farming advice for all major crops.",
    start_chat: "Start AI Chat",
    manage_farmers: "Manage Farmers",
    choose_language: "Choose Language",
    feature_multilingual: "Malayalam + English",
    feature_multilingual_desc: "Real-time translation support",
    feature_smart: "Smart Advice",
    feature_smart_desc: "AI-powered crop guidance",
    feature_tracking: "Activity Tracking",
    feature_tracking_desc: "Monitor farming progress",
    get_started: "Get Started Today"
  },
  malayalam: {
    hero_title: "നിങ്ങളുടെ AI കൃഷി സുഹൃത്ത്",
    hero_subtitle: "കേരള ഫാം AI കർഷകർക്ക് ബുദ്ധിപരമായ കാർഷിക മാർഗനിർദേശം, ബഹുഭാഷാ പിന്തുണ, എല്ലാ പ്രധാന വിളകൾക്കും വ്യക്തിഗത കാർഷിക ഉപദേശം നൽകുന്നു.",
    start_chat: "AI ചാറ്റ് ആരംഭിക്കുക",
    manage_farmers: "കർഷകരെ കൈകാര്യം ചെയ്യുക",
    choose_language: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    feature_multilingual: "മലയാളം + ഇംഗ്ലീഷ്",
    feature_multilingual_desc: "തത്സമയ വിവർത്തന പിന്തുണ",
    feature_smart: "സ്മാർട്ട് ഉപദേശം",
    feature_smart_desc: "AI-പവർഡ് ക്രോപ് ഗൈഡൻസ്",
    feature_tracking: "പ്രവർത്തന ട്രാക്കിംഗ്",
    feature_tracking_desc: "കൃഷിയുടെ പുരോഗതി നിരീക്ഷിക്കുക",
    get_started: "ഇന്ന് ആരംഭിക്കുക"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('english');

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('kerala-farm-language', newLanguage);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.english] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('kerala-farm-language') as Language;
    if (savedLanguage && (savedLanguage === 'english' || savedLanguage === 'malayalam')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};