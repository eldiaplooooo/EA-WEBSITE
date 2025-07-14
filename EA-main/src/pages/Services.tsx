import React, { useEffect, useState } from 'react';
import { 
  Code, 
  Smartphone, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  ExternalLink,
  Globe,
  Palette,
  Shield,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Play,
  Download
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Services: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'AI-Powered Website Development',
      description: 'Custom websites built with AI integration, smart automation, and modern design principles.',
      features: [
        'AI-assisted development process',
        'Responsive design for all devices',
        'SEO optimization',
        'Performance optimization',
        'Content management system',
        'Analytics integration'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with AI features and seamless user experience.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'AI feature integration',
        'Push notifications',
        'Offline functionality',
        'App store optimization'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent chatbots that handle customer service, support, and sales automatically.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with existing systems',
        '24/7 automated support',
        'Learning and adaptation',
        'Analytics and reporting'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Booking Systems',
      description: 'AI-optimized booking and scheduling systems with automation and intelligent features.',
      features: [
        'Real-time availability',
        'Automated scheduling',
        'Payment integration',
        'Reminder notifications',
        'Calendar synchronization',
        'Analytics dashboard'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics Platforms',
      description: 'Custom analytics dashboards with AI insights and real-time business intelligence.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'KPI tracking',
        'Data integration',
        'Mobile accessibility'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with AI recommendations and automated processes.',
      features: [
        'Product catalog management',
        'AI-powered recommendations',
        'Payment processing',
        'Inventory management',
        'Order tracking',
        'Customer analytics'
      ],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Starter Package',
      price: '€2,999',
      originalPrice: '€4,999',
      savings: '€2,000',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom website (up to 5 pages)',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        'Google Analytics setup',
        '3 months support',
        'Basic AI chatbot',
        'Social media integration'
      ],
      deliveryTime: '2-3 weeks',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'professional',
      name: 'Professional Package',
      price: '€7,999',
      originalPrice: '€12,999',
      savings: '€5,000',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Custom website (up to 15 pages)',
        'Advanced AI chatbot with NLP',
        'Smart booking system',
        'Payment integration',
        'Advanced analytics dashboard',
        'CMS with training',
        '6 months support',
        'SEO optimization',
        'Performance optimization',
        'Security features'
      ],
      deliveryTime: '4-6 weeks',
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: '€19,999',
      originalPrice: '€34,999',
      savings: '€15,000',
      description: 'Complete digital transformation for large organizations',
      features: [
        'Custom web application',
        'Mobile app (iOS & Android)',
        'Advanced AI integration',
        'Custom booking system',
        'Business intelligence platform',
        'Multi-language support',
        '12 months support',
        'Staff training included',
        'API development',
        'Third-party integrations',
        'Advanced security',
        'Scalable architecture'
      ],
      deliveryTime: '8-12 weeks',
      popular: false,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      price: 'From €25,000',
      originalPrice: null,
      savings: null,
      description: 'Tailored solutions for unique requirements',
      features: [
        'Fully customized development',
        'Unlimited pages/features',
        'Advanced AI capabilities',
        'Custom integrations',
        'Dedicated project manager',
        'Priority support',
        'Ongoing maintenance',
        'Performance guarantees',
        'Scalability planning',
        'Security audits'
      ],
      deliveryTime: '12+ weeks',
      popular: false,
      gradient: 'from-indigo-600 to-purple-700'
    }
  ];

  const testimonials = [
    {
      name: 'Glenn Miller',
      role: 'Founder',
      company: 'Klavierschule Glenn Miller',
      quote: 'EA Solutions built us an incredible website with AI booking system. The intelligent scheduling has transformed our operations completely.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['AI booking system', 'Automated scheduling', '40-60% cost savings']
    },
    {
      name: 'Hassan Arour',
      role: 'General Manager',
      company: 'Hotel am Kochbrunnen',
      quote: 'The website and booking system integration exceeded our expectations. Professional, efficient, and cost-effective.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['Seamless integration', 'Professional design', 'Excellent support']
    },
    {
      name: 'Martin Schneider',
      role: 'Practice Owner',
      company: 'Falchi Dental',
      quote: 'The AI-powered patient management system has streamlined our entire practice. Outstanding quality at unbeatable prices.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['Patient management', 'Streamlined operations', 'Great value']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.',
      duration: '1 week',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create stunning mockups and interactive prototypes for your approval.',
      duration: '1-2 weeks',
      icon: Palette
    },
    {
      step: '03',
      title: 'AI-Assisted Development',
      description: 'Our developers build your solution using AI-assisted coding for faster, more efficient development.',
      duration: '2-8 weeks',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing ensures your solution works perfectly across all devices and scenarios.',
      duration: '1 week',
      icon: Shield
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We handle the launch and provide ongoing support to ensure your success.',
      duration: 'Ongoing',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Websites & Apps
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              We build intelligent websites and applications with AI integration, smart automation, 
              and modern design. 40-60% cost savings compared to big companies.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">40-60%</div>
                  <div className="text-blue-100">Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2-12</div>
                  <div className="text-blue-100">Weeks Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">AI Integration</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Play className="mr-2 h-5 w-5 inline" />
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how we transformed a traditional piano school into a modern, AI-powered platform.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Klavierschule Glenn Miller</h3>
                    <p className="text-blue-600 dark:text-blue-400">AI-Integrated Piano School Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Complete website transformation with AI-powered booking system, intelligent schedule creator, 
                  and automated student management. Features smart lesson planning and personalized learning paths.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Calendar, label: 'AI Booking System', color: 'text-blue-500' },
                    { icon: MessageSquare, label: 'Smart Chatbot', color: 'text-green-500' },
                    { icon: Users, label: 'Student Management', color: 'text-purple-500' },
                    { icon: BarChart3, label: 'Analytics Dashboard', color: 'text-orange-500' }
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <IconComponent className={`h-5 w-5 ${feature.color}`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="https://klavierschule-glennmiller.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    40-60% cost savings vs big companies
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎹</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Complete Success</div>
                  <div className="text-gray-600 dark:text-gray-400">AI-powered transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by AI to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the package that fits your needs. All packages include AI integration and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'border-blue-500 shadow-2xl scale-105' 
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="line-through">{pkg.originalPrice}</span>
                        <span className="text-green-600 dark:text-green-400 ml-2 font-medium">Save {pkg.savings}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{pkg.description}</p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{pkg.deliveryTime}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg'
                      : selectedPackage === pkg.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {pkg.id === 'custom' ? 'Get Custom Quote' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All packages include free consultation • 30-day support • Money-back guarantee
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Secure Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our proven methodology ensures high-quality delivery on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{step.description}</p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{step.duration}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from real clients who chose our services for their digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-2 mb-6">
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join successful businesses who have revolutionized their operations with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Download className="mr-2 h-5 w-5 inline" />
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;