import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Building2,
  Sparkles,
  Globe,
  Code,
  Palette,
  Key,
  MessageSquare,
  Thermometer,
  Lock,
  TrendingUp,
  BarChart3,
  Smartphone,
  ExternalLink,
  Search,
  Lightbulb,
  Cog,
  Rocket,
  Brain,
  Shield,
  Monitor,
  Calendar,
  Star,
  Play
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Home: React.FC = () => {
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 text-white relative overflow-hidden">
        {/* Minimalistic Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
              {translate('hero.title').split('.')[0]}.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium">
                {translate('hero.title').split('.')[1]}.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              {translate('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                {translate('cta.book')}
              </button>
              <Link 
                to="/mind" 
                className="border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Discover MIND AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MIND Product Showcase */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              MIND – Universal AI Solution
            </h2>
            <p className="text-2xl text-purple-600 dark:text-purple-400 font-light italic">
              "One brain, infinite workflows."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
                    MIND
                  </h2>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">Universal AI Solution</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">
                One intelligent system that adapts to every industry, every workflow, every challenge. 
                MIND transforms how businesses think, learn, and grow.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-600 dark:text-purple-400 mb-2">€499</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Starting from</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-600 dark:text-purple-400 mb-2">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client satisfaction</div>
                </div>
              </div>
              
              <Link
                to="/mind"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
              >
                Explore MIND
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: 'Fast Deploy' },
                    { icon: Shield, label: 'Secure' },
                    { icon: Globe, label: 'Universal' },
                    { icon: Target, label: 'Precise' }
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
                        <IconComponent className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{feature.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Websites & Apps Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              AI-Powered Websites & Apps
            </h2>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-light italic mb-4">
              "Websites that think; apps that anticipate."
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              We build intelligent websites and applications with AI booking systems, chatbots, and automation. 
              40-60% cost savings compared to big companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Featured Project - Glenn Miller */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                    <img 
                      src="https://klavierschule-glennmiller.de/wp-content/uploads/2024/12/cropped-Klavierschule-Glenn-Miller-Logo-32x32.png" 
                      alt="Klavierschule Glenn Miller logo"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Klavierschule Glenn Miller</h3>
                    <p className="text-blue-600 dark:text-blue-400">AI-Integrated Piano School Platform</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Calendar, label: 'AI Booking System' },
                    { icon: MessageSquare, label: 'Smart Chatbot' },
                    { icon: Users, label: 'Student Management' },
                    { icon: BarChart3, label: 'Analytics Dashboard' }
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{feature.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Complete website with AI-powered booking system, intelligent schedule creator, and automated student management. 
                  Features smart lesson planning and personalized learning paths.
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href="https://klavierschule-glennmiller.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    40-60% cost savings vs big companies
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/services"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  View All Services & Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Smart Development</h4>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium italic mb-2">
                  "Code once, let AI cut the cost in half."
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  AI-assisted development process that reduces costs while maintaining enterprise-grade quality.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">AI Chatbots</h4>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium italic mb-2">
                  "Customer service that never sleeps (and never says, 'Please hold')."
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Intelligent chatbots that handle customer service, bookings, and support automatically.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Booking Systems</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium italic mb-2">
                  "Your calendar, already handled."
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Smart booking and scheduling systems with AI optimization and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Solutions */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Smart Home Solutions
            </h2>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-light italic">
              "Turn four walls into a living, caring ally."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Lightbulb, label: 'Smart Lighting', color: 'text-yellow-500' },
                    { icon: Thermometer, label: 'Climate Control', color: 'text-blue-500' },
                    { icon: Lock, label: 'Security Systems', color: 'text-red-500' },
                    { icon: Smartphone, label: 'Home Automation', color: 'text-green-500' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
                        <IconComponent className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Average Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">
                Transform your home with curated smart devices from leading brands. 
                AI-powered bundles with professional installation and ongoing support.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Philips Hue, Nest, Ring & more</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Professional installation included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">AI-optimized bundles save 30%</span>
                </div>
              </div>
              
              <Link
                to="/solutions/smart-living"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
              >
                Explore Smart Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Minimalistic */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Specialized AI solutions for your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏨',
                title: 'Hospitality',
                tagline: '"From check-in to check-out, pure wow."',
                description: 'Smart reservations, guest services, and operations',
                link: '/solutions/gastronomy-hospitality',
                available: true
              },
              {
                icon: '🏭',
                title: 'Manufacturing',
                tagline: '"Machines that fix themselves before they fail."',
                description: 'Predictive maintenance and quality control',
                link: '/solutions/industrial-manufacturing',
                available: true
              },
              {
                icon: '🏥',
                title: 'Healthcare',
                tagline: '"Sharper diagnoses, happier patients."',
                description: 'Diagnostic support and patient management',
                link: '/solutions/healthcare',
                available: true
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl mb-6">{industry.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{industry.title}</h3>
                {industry.tagline && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium italic mb-3">
                    {industry.tagline}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                
                {industry.available ? (
                  <Link
                    to={industry.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 font-medium">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel am Kochbrunnen - Minimalistic Showcase */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">🏨</div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Hotel am Kochbrunnen</h3>
                    <p className="text-orange-600 dark:text-orange-400">Complete AI Transformation</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Our flagship hospitality project showcasing 8 integrated AI pillars that transformed 
                  traditional operations into an intelligent ecosystem.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">40hrs</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Monthly savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://hotelamkochbrunnen.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 font-medium hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    Visit Hotel
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Link
                    to="/hotel-pillars"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    View 8 Pillars
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Key, label: 'Keyless Entry' },
                  { icon: MessageSquare, label: 'AI Concierge' },
                  { icon: Thermometer, label: 'Smart Climate' },
                  { icon: Lock, label: 'Zero Trust Security' }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
                      <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{feature.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Indicators */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-gray-400 mb-8">Trusted by 4+ companies in Germany and 1 internationally</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Hotel am Kochbrunnen',
                  ceo: 'Hassan Arour',
                  role: 'General Manager',
                  metric: '40hrs/month saved'
                },
                {
                  name: 'Falchi Dental',
                  ceo: 'Martin Schneider',
                  role: 'Practice Owner',
                  metric: '60% faster diagnostics'
                },
                {
                  name: 'Klavierschule Glenn Miller',
                  ceo: 'Glenn Miller',
                  role: 'Founder',
                  metric: 'AI booking system'
                }
              ].map((client, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                  <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">{client.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{client.ceo}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mb-3">{client.role}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{client.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">{translate('final.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light">
            {translate('final.subtitle')}
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            {translate('final.cta')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;