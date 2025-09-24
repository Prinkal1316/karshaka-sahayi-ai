import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Bot, 
  User, 
  Languages, 
  Leaf, 
  MapPin,
  Clock,
  MessageCircle 
} from "lucide-react";
import Navigation from "@/components/Navigation";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  language?: 'english' | 'malayalam';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI farming assistant. I can help you with crop advice, pest management, and farming techniques in both English and Malayalam. What would you like to know about farming in Kerala?',
      sender: 'ai',
      timestamp: new Date(),
      language: 'english'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'malayalam'>('english');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date(),
        language: selectedLanguage
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (input: string) => {
    const responses = [
      "Based on Kerala's climate, I recommend planting rice during the monsoon season. For Pokkali variety, ensure proper drainage and use organic fertilizers.",
      "For coconut cultivation in Kerala, choose well-drained soil and maintain 7.5-8.5 meters spacing between plants. Regular watering during dry seasons is essential.",
      "Pepper cultivation requires shade trees and well-drained soil. Plant during May-June with proper mulching to retain moisture.",
      "For banana farming, Nendran variety is ideal for Kerala's climate. Ensure proper drainage and use organic manure for better yield."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickQuestions = [
    "Rice cultivation tips",
    "Coconut pest management", 
    "Banana farming guide",
    "Spice cultivation advice",
    "Weather-based farming",
    "Organic farming methods"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Farming Assistant</h1>
          <p className="text-muted-foreground">Get expert farming advice in English or Malayalam</p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-2 p-1 bg-card rounded-lg border border-border shadow-agricultural">
            <Button
              variant={selectedLanguage === 'english' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage('english')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              English
            </Button>
            <Button
              variant={selectedLanguage === 'malayalam' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedLanguage('malayalam')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              മലയാളം
            </Button>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="shadow-agricultural-lg border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Chat with AI Assistant
              <Badge variant="success" className="ml-auto">Online</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <ScrollArea className="h-[500px] p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'ai' && (
                      <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border shadow-agricultural'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className="flex items-center gap-2 mt-2 opacity-70">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-card border border-border rounded-2xl px-4 py-3 shadow-agricultural">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.1s]" />
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Quick Questions */}
            <div className="px-6 py-4 border-t border-border bg-muted/30">
              <div className="mb-3">
                <span className="text-sm font-medium text-muted-foreground">Quick Questions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <Button
                    key={question}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setInputMessage(question);
                      handleSendMessage();
                    }}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-border">
              <div className="flex gap-3">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    selectedLanguage === 'english' 
                      ? "Ask about farming, crops, or agriculture..."
                      : "കൃഷിയെക്കുറിച്ച് ചോദിക്കുക..."
                  }
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6 text-center">
              <Leaf className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Crop Expertise</h3>
              <p className="text-sm text-muted-foreground">Specialized knowledge for Kerala's major crops</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local Knowledge</h3>
              <p className="text-sm text-muted-foreground">Kerala-specific farming practices and conditions</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 shadow-agricultural">
            <CardContent className="p-6 text-center">
              <Languages className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Multilingual</h3>
              <p className="text-sm text-muted-foreground">Available in English and Malayalam</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;