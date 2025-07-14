import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Brain,
  Zap,
  ArrowRight,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatbotProps {
  isDark?: boolean;
}

const IntelligentChatbot: React.FC<ChatbotProps> = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hello! I'm EA's AI Assistant - your intelligent guide to understanding how we can transform your business. I have deep knowledge about our solutions, methodology, and can help you discover the perfect AI strategy for your needs. What would you like to explore?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickActions = [
    { text: "Tell me about Hotel am Kochbrunnen project", icon: Brain },
    { text: "What's the EA Method?", icon: Zap },
    { text: "Book a strategy call", icon: ArrowRight },
    { text: "Show me AI solutions for my industry", icon: Sparkles }
  ];

  const getIntelligentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Hotel am Kochbrunnen specific responses
    if (message.includes('hotel am kochbrunnen') || message.includes('kochbrunnen')) {
      return "🏨 Hotel am Kochbrunnen is our flagship hospitality transformation! We implemented a complete AI ecosystem across 8 integrated pillars:\n\n🔑 **Friction-Free Guest Journey**: Keyless check-in/out via QR & NFC, AI-concierge available in-room, at reception, and on WhatsApp with multilingual voice commands\n\n📊 **Fully-Automated Back Office**: e-Invoice generator, GoBD-compliant workflows, real-time PMS & OTA sync, saving ~40 hrs/month\n\n🌡️ **Smart Building Control**: IoT occupancy-based HVAC, cutting energy costs by 25%\n\n🔒 **Security & Compliance**: Zero-trust network, GDPR-proof data lake with automatic PII masking\n\n💰 **Revenue-Driving AI**: Context-aware RAG system, upsell engine, sentiment analysis\n\n📱 **Seamless Booking**: Mobile-first website with 99 Lighthouse score, one-tap booking\n\n👥 **Staff Orchestration**: AI-driven housekeeping routes, automated maintenance tickets\n\n⚡ **Scalable Architecture**: 99.9% uptime guarantee, DSGVO-compliant\n\nResult: Complete transformation from traditional hospitality to AI-driven guest perfection!";
    }
    
    // Industry-specific responses
    if (message.includes('hotel') || message.includes('hospitality') || message.includes('restaurant')) {
      return "🏨 Perfect! For hospitality businesses, we specialize in intelligent reservation systems, automated guest services, and predictive analytics. Our Hotel am Kochbrunnen client achieved complete AI transformation across 8 integrated pillars including keyless check-in, AI-concierge, automated back office (saving 40hrs/month), smart building control (25% energy savings), and 99.9% uptime. We can implement similar comprehensive solutions for your property. Would you like to see a demo tailored to your specific hospitality needs?";
    }
    
    if (message.includes('manufacturing') || message.includes('factory') || message.includes('industrial')) {
      return "🏭 Excellent choice! Our manufacturing AI solutions focus on predictive maintenance, quality control automation, and supply chain optimization. We've helped clients achieve 70% reduction in unplanned downtime and 45% decrease in maintenance costs. Our systems include real-time equipment monitoring, failure prediction algorithms, and automated production planning. Shall I show you how we can optimize your specific manufacturing processes?";
    }
    
    if (message.includes('healthcare') || message.includes('medical') || message.includes('dental')) {
      return "🏥 Healthcare is one of our specialties! We develop diagnostic support systems, patient management automation, and clinical documentation tools. Our Falchi Dental client experienced 40% faster diagnostics and 95% accuracy improvement. We ensure full HIPAA compliance and integrate seamlessly with existing healthcare systems. Would you like to explore how AI can enhance your patient care?";
    }
    
    if (message.includes('finance') || message.includes('bank') || message.includes('security')) {
      return "🏦 Financial services require the highest security and precision! We build advanced fraud detection systems with 99.7% accuracy, automated compliance monitoring, and risk assessment tools. Our solutions include real-time transaction analysis, AML compliance, and regulatory reporting automation. All systems meet strict financial regulations. How can we secure and optimize your financial operations?";
    }
    
    if (message.includes('retail') || message.includes('ecommerce') || message.includes('shop')) {
      return "🛍️ Retail transformation is our forte! We create personalized recommendation engines, inventory intelligence systems, and omnichannel customer experiences. Our clients typically see 45% increase in conversion rates and 30% boost in average order value. We integrate with all major platforms like Shopify, WooCommerce, and Salesforce Commerce. Ready to revolutionize your retail experience?";
    }
    
    if (message.includes('smart home') || message.includes('home automation') || message.includes('iot')) {
      return "🏠 Smart living solutions are incredibly exciting! We design personal AI assistants, adaptive climate control, intelligent lighting, and comprehensive home automation systems. Our clients save an average of 40% on energy costs while gaining 2 hours daily through automation. We create truly intelligent homes that learn and adapt to your lifestyle. Interested in transforming your living space?";
    }

    // Klavierschule Glenn Miller responses
    if (message.includes('klavierschule') || message.includes('glenn miller') || message.includes('piano school')) {
      return "🎹 Klavierschule Glenn Miller is a perfect example of our AI-powered website development! We built a complete platform featuring:\n\n📅 **AI-Powered Booking System**: Intelligent scheduling that optimizes lesson times and teacher availability\n\n🎯 **Smart Schedule Creator**: Automated schedule optimization based on student preferences and teacher capacity\n\n👨‍🎓 **Student Management**: Automated progress tracking and personalized learning paths\n\n💰 **Cost Efficiency**: Delivered at 40-60% less cost than big companies while maintaining premium quality\n\nThe website showcases how we integrate AI seamlessly into educational platforms. Visit klavierschule-glennmiller.de to see it in action! Would you like us to build a similar intelligent platform for your business?";
    }
    
    // EA Method and process questions
    if (message.includes('ea method') || message.includes('methodology') || message.includes('process')) {
      return "🎯 The EA Method is our proven 4-stage approach that delivered the Hotel am Kochbrunnen transformation:\n\n**01. Deep Dive & Discovery (2-4 weeks)** - We embed with your team to map processes and identify opportunities\n\n**02. Architectural Design (3-5 weeks)** - Custom AI blueprint creation with optimal technology selection\n\n**03. Seamless Implementation (6-12 weeks)** - Precise deployment with minimal disruption and comprehensive training\n\n**04. Evolution & Enhancement (ongoing)** - Continuous optimization as your AI systems grow\n\nWe maintain a 95% project success rate with this methodology. Each stage unlocks dynamically as we progress, ensuring perfect execution. Want to see how it applies to your specific situation?";
    }
    
    // Cost and pricing questions
    if (message.includes('cost') || message.includes('price') || message.includes('investment') || message.includes('40-60%') || message.includes('savings')) {
      return "💰 Our cost advantage is significant! We deliver AI solutions at 40-60% less cost than big companies while maintaining enterprise-grade quality. Here's why:\n\n🤖 **AI-Assisted Development**: Smart automation reduces development time\n🎯 **Focused Expertise**: Specialized team, no corporate overhead\n⚡ **Efficient Process**: The EA Method eliminates waste\n🔄 **Reusable Components**: Smart architecture reduces future costs\n\nTypical projects range €50K-€500K depending on scope, with ROI typically achieved within 18 months. Most clients see 60% efficiency improvements. Would you like a personalized cost analysis for your specific needs?";
    }
    
    // Booking and contact
    if (message.includes('book') || message.includes('call') || message.includes('meeting') || message.includes('demo')) {
      return "📅 I'd love to connect you with our team! You can book a personalized AI strategy call where Ali H., our founder, will personally walk you through solutions tailored to your business. The call includes:\n\n✅ Live demonstration of relevant solutions\n✅ Custom ROI analysis for your business\n✅ Detailed implementation roadmap\n✅ Q&A with our lead AI architect\n\nYou can use the 'Book Your AI Strategy Call' button on this page, or I can guide you through our booking process right here. What works better for you?";
    }
    
    // Company information
    if (message.includes('about') || message.includes('company') || message.includes('team') || message.includes('experience')) {
      return "🚀 EA Solutions is led by world-class AI engineers and strategists with 15+ years average experience. We've completed 6+ successful implementations including major projects like Hotel am Kochbrunnen's complete AI transformation and Klavierschule Glenn Miller's intelligent platform.\n\n👥 **Our Team**: PhD-level researchers, former Big Tech engineers, industry domain experts\n🏆 **Track Record**: 98% client satisfaction, 95% project success rate\n🌍 **Global Reach**: Based in Wiesbaden, Germany, serving clients worldwide\n🥇 **Recognition**: AI Innovation Award 2024 winner\n\nWhat specific aspect of our expertise interests you most?";
    }
    
    // Technical questions
    if (message.includes('technical') || message.includes('integration') || message.includes('security') || message.includes('data')) {
      return "🔧 Technically, we're cutting-edge! Our Hotel am Kochbrunnen project showcases our capabilities:\n\n🤖 **AI Models**: Latest GPT-4, Claude, custom LLMs, context-aware RAG systems\n🔒 **Security**: Zero-trust networks, GDPR-proof data lakes, automatic PII masking\n☁️ **Infrastructure**: Containerized microservices, 99.9% uptime guarantee\n🔗 **Integration**: Seamless with existing systems (PMS, OTA, payment gateways)\n📊 **Monitoring**: Real-time analytics, continuous vulnerability scanning\n🌍 **Compliance**: DSGVO, HIPAA, industry-specific regulations\n\nWe support cloud and on-premise deployments with 24/7 monitoring. What specific technical requirements do you have?";
    }
    
    // Comparison questions
    if (message.includes('different') || message.includes('better') || message.includes('competition') || message.includes('compare')) {
      return "⭐ What sets us apart - proven by projects like Hotel am Kochbrunnen:\n\n🎯 **Radically Bespoke**: Every solution custom-built (8 integrated pillars for hotels vs generic software)\n👥 **Elite Expertise**: World-class team delivering 99.9% uptime and 40hrs/month savings\n💰 **Tangible Results**: Guaranteed ROI within 18 months, 40-60% cost savings vs big companies\n🔄 **Continuous Evolution**: Your AI grows with your business (ongoing optimization)\n🏆 **Proven Success**: 98% client satisfaction, real transformations not just implementations\n\nUnlike generic platforms or traditional consulting, we deliver fully customized, performance-guaranteed solutions. Want to see a detailed comparison?";
    }
    
    // General AI questions
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
      return "🧠 AI is transforming every industry! We specialize in practical AI applications that deliver immediate business value:\n\n🤖 **Automation**: Eliminate repetitive tasks (like Hotel am Kochbrunnen's 40hrs/month admin savings)\n🧠 **Intelligence**: Smart decision-making systems and predictive analytics\n👥 **Personalization**: Tailored customer experiences and recommendations\n⚡ **Efficiency**: Optimize operations (25% energy savings, 99.9% uptime)\n\nOur approach focuses on augmenting human capabilities, not replacing them. We ensure ethical AI implementation with full transparency. What specific AI applications interest you for your business?";
    }
    
    // Default intelligent response
    return "🤔 That's an interesting question! I'm designed to help you understand how EA Solutions can transform your business with AI. I can provide detailed information about:\n\n🏨 **Success Stories**: Hotel am Kochbrunnen's complete transformation, Klavierschule Glenn Miller's intelligent platform\n🎯 **The EA Method**: Our proven 4-stage methodology\n💰 **Cost Advantages**: 40-60% savings vs big companies\n🔧 **Technical Capabilities**: Enterprise-grade AI solutions\n📅 **Strategy Calls**: Connect with our expert team\n\nCould you tell me more about your specific business or what aspect of AI transformation interests you most? I'm here to provide intelligent, personalized guidance!";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate intelligent processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getIntelligentResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Variable response time for realism
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    setTimeout(() => handleSend(), 100);
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const resetChat = () => {
    setMessages([{
      id: '1',
      type: 'bot',
      content: "👋 Hello! I'm EA's AI Assistant - your intelligent guide to understanding how we can transform your business. I have deep knowledge about our solutions, methodology, and can help you discover the perfect AI strategy for your needs. What would you like to explore?",
      timestamp: new Date()
    }]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' 
            : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400'
        } text-white group`}
      >
        <div className="relative">
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-300 animate-pulse opacity-75" />
            </>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 h-[600px] z-40 rounded-2xl shadow-2xl border transition-all duration-300 transform ${
          isDark 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 border-b rounded-t-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-700' 
              : 'bg-gradient-to-r from-blue-600 to-blue-500 border-gray-200'
          } text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold">EA AI Assistant</h3>
                  <p className="text-xs opacity-90">Intelligent Business Guide</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetChat}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                  title="Reset chat"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 h-96 ${
            isDark ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] group ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? isDark ? 'bg-blue-600' : 'bg-blue-500'
                        : isDark ? 'bg-purple-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    } text-white`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? isDark 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-blue-500 text-white'
                        : isDark 
                          ? 'bg-gray-800 text-gray-100 border border-gray-700' 
                          : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      {message.type === 'bot' && (
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-opacity-20">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => copyMessage(message.content)}
                              className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 transition-colors ${
                                isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                              }`}
                              title="Copy message"
                            >
                              <Copy className="h-3 w-3" />
                            </button>
                            <button className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 transition-colors ${
                              isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                            }`}>
                              <ThumbsUp className="h-3 w-3" />
                            </button>
                            <button className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 transition-colors ${
                              isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                            }`}>
                              <ThumbsDown className="h-3 w-3" />
                            </button>
                          </div>
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-purple-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  } text-white`}>
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-sm border border-gray-200'
                  }`}>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '0ms' }}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '150ms' }}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className={`px-4 py-2 border-t ${
              isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
            }`}>
              <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.text)}
                      className={`p-2 rounded-lg text-xs flex items-center space-x-1 transition-colors ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                      }`}
                    >
                      <IconComponent className="h-3 w-3" />
                      <span className="truncate">{action.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input */}
          <div className={`p-4 border-t ${
            isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
          } rounded-b-2xl`}>
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about EA Solutions..."
                className={`flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className={`p-2 rounded-full transition-all duration-200 ${
                  inputValue.trim() && !isTyping
                    ? isDark
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                    : isDark
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IntelligentChatbot;