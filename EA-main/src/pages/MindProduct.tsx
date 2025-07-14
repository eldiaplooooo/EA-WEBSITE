import React, { useState, useEffect } from 'react';
import MindDemoVisualization from '../components/MindDemoVisualization';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Building,
  Factory,
  Heart,
  Home,
  ShoppingCart,
  Utensils,
  Calculator,
  Play,
  Download,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Settings,
  Layers,
  Infinity
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const MindProduct: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [employees, setEmployees] = useState(100);
  const [revenue, setRevenue] = useState(5000000);
  const [industry, setIndustry] = useState('manufacturing');
  const [roiResults, setRoiResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate ROI based on inputs
  useEffect(() => {
    const calculateROI = () => {
      const baseEfficiencyGain = 0.35; // 35% base efficiency gain
      const industryMultiplier = {
        'hospitality': 1.2,
        'manufacturing': 1.4,
        'healthcare': 1.1,
        'retail': 1.3,
        'finance': 1.0,
        'other': 1.0
      };
      
      const employeeCostPerMonth = 4500; // Average employee cost per month
      const efficiencyGain = baseEfficiencyGain * (industryMultiplier[industry] || 1.0);
      const monthlySavings = employees * employeeCostPerMonth * efficiencyGain;
      const annualSavings = monthlySavings * 12;
      
      const planCosts = {
        'pilot': 499,
        'growth': 1499,
        'scale': 4999,
        'enterprise': 12000
      };
      
      const monthlyCost = planCosts[selectedPlan] || planCosts.growth;
      const netMonthlySavings = monthlySavings - monthlyCost;
      const roiPercentage = ((netMonthlySavings * 12) / (monthlyCost * 12)) * 100;
      const paybackMonths = monthlyCost / netMonthlySavings;
      
      setRoiResults({
        monthlySavings: Math.round(netMonthlySavings),
        annualSavings: Math.round(netMonthlySavings * 12),
        roiPercentage: Math.round(roiPercentage),
        paybackMonths: Math.max(1, Math.round(paybackMonths))
      });
    };
    
    calculateROI();
  }, [employees, revenue, industry, selectedPlan]);

  const features = [
    {
      icon: Brain,
      title: translate('mind.features.universal.title'),
      description: translate('mind.features.universal.desc'),
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      pattern: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Zap,
      title: translate('mind.features.fast.title'),
      description: translate('mind.features.fast.desc'),
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      pattern: 'radial-gradient(circle at 30% 40%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Shield,
      title: translate('mind.features.security.title'),
      description: translate('mind.features.security.desc'),
      gradient: 'from-green-400 via-teal-500 to-blue-500',
      pattern: 'radial-gradient(circle at 40% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)'
    },
    {
      icon: Globe,
      title: translate('mind.features.integration.title'),
      description: translate('mind.features.integration.desc'),
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      pattern: 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)'
    }
  ];

  const industries = [
    { icon: Utensils, name: 'Hospitality', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
    { icon: Factory, name: 'Manufacturing', color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-700' },
    { icon: Heart, name: 'Healthcare', color: 'text-pink-500', bgColor: 'bg-pink-100 dark:bg-pink-900/30' },
    { icon: Home, name: 'Smart Living', color: 'text-blue-500', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: ShoppingCart, name: 'Retail', color: 'text-purple-500', bgColor: 'bg-purple-100 dark:bg-purple-900/30' },
    { icon: Building, name: 'Finance', color: 'text-green-500', bgColor: 'bg-green-100 dark:bg-green-900/30' }
  ];

  const pricingPlans = [
    {
      id: 'pilot',
      name: 'Pilot',
      price: '€499',
      period: '/month',
      description: translate('mind.pricing.pilot'),
      features: [
        '1 local model',
        '1 connector',
        'Community support',
        'Basic analytics',
        'Up to 10 users'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
      recommended: false
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '€1,499',
      period: '/month',
      description: translate('mind.pricing.growth'),
      features: [
        'Up to 50 staff',
        '3 connectors',
        'Quarterly optimization',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-600',
      recommended: true
    },
    {
      id: 'scale',
      name: 'Scale',
      price: '€4,999',
      period: '/month',
      description: translate('mind.pricing.scale'),
      features: [
        'Up to 250 staff',
        'Unlimited connectors',
        'Weekly optimization',
        'Priority support',
        'Advanced AI models',
        'White-label options',
        'Dedicated success manager'
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600',
      recommended: false
    },
    {
      id: 'enterprise',
      name: 'Sovereign Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: translate('mind.pricing.enterprise'),
      features: [
        'On-prem cluster',
        '24/7 SLA',
        'Compliance audits',
        'Unlimited users',
        'Custom AI development',
        'Dedicated infrastructure',
        'Enterprise security',
        'Global deployment'
      ],
      popular: false,
      gradient: 'from-indigo-600 to-purple-700',
      recommended: false
    }
  ];

  const testimonials = [
    {
      name: 'Hassan Arour',
      role: 'General Manager',
      company: 'Hotel am Kochbrunnen',
      quote: 'MIND transformed our entire hospitality operation. 40% efficiency increase and 99.9% uptime. Our guests love the seamless AI-powered experience.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['40% efficiency increase', '99.9% uptime', '25% energy savings']
    },
    {
      name: 'Martin Schneider',
      role: 'Practice Owner',
      company: 'Falchi Dental',
      quote: 'The diagnostic accuracy improvements are remarkable. MIND revolutionized our patient care with 60% faster diagnostics and 95% accuracy improvement.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['60% faster diagnostics', '95% accuracy improvement', '40% admin reduction']
    },
    {
      name: 'Glenn Miller',
      role: 'Founder',
      company: 'Klavierschule Glenn Miller',
      quote: 'MIND\'s intelligent scheduling and student management system automated our entire operation. 50% time savings and perfect lesson optimization.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      results: ['50% time savings', 'Automated scheduling', 'Perfect optimization']
    }
  ];

  const architectureFeatures = [
    {
      icon: Cpu,
      title: 'Neural Processing Core',
      description: 'Advanced neural networks with quantum-inspired algorithms'
    },
    {
      icon: Database,
      title: 'Intelligent Data Lake',
      description: 'Self-organizing data architecture with automatic optimization'
    },
    {
      icon: Network,
      title: 'Adaptive Integration Layer',
      description: 'Dynamic API management with real-time protocol adaptation'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security',
      description: 'Military-grade encryption with behavioral anomaly detection'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Engine',
      description: 'Real-time insights with future trend prediction capabilities'
    },
    {
      icon: Settings,
      title: 'Self-Healing Infrastructure',
      description: 'Autonomous system maintenance and performance optimization'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Enhanced Patterns */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 dark:from-gray-950 dark:via-purple-950 dark:to-blue-950 text-white py-32 overflow-hidden">
        {/* Complex Animated Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Hexagonal Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                  <polygon points="50,1 85,25 85,62 50,86 15,62 15,25" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <Brain className="h-20 w-20 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-light mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                MIND
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl mb-6 text-gray-300 dark:text-gray-400 font-light">
              Unleash one intelligence to connect dots humans didn't know existed.
            </p>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 dark:text-gray-400 max-w-5xl mx-auto font-light leading-relaxed">
              {translate('mind.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                  <span>{translate('mind.cta.start')}</span>
                </div>
              </button>
              <button className="group border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span onClick={() => setIsDemoOpen(true)}>{translate('mind.cta.demo')}</span>
                </div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-center">
              <p className="text-gray-400 dark:text-gray-500 mb-6">{translate('mind.trusted')}</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-sm font-medium">Hotel am Kochbrunnen</div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="text-sm font-medium">Falchi Dental</div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="text-sm font-medium">Klavierschule Glenn Miller</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features with Patterns */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light">
              {translate('mind.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl p-12 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${feature.pattern}), linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))` }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} animate-pulse`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12`}>
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.architecture.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('mind.architecture.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served with Enhanced Design */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.industries.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('mind.industries.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`${industry.bgColor} w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 border border-gray-100 dark:border-gray-700`}>
                    <IconComponent className={`h-10 w-10 ${industry.color}`} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{industry.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricing-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                <rect x="30" y="30" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('mind.pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500 shadow-2xl scale-105 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      {translate('mind.pricing.popular')}
                    </div>
                  </div>
                )}

                {plan.recommended && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg'
                      : selectedPlan === plan.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.id === 'enterprise' ? translate('mind.pricing.contact') : translate('mind.pricing.trial')}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {translate('mind.pricing.features')}
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('mind.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-light leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-3 mb-6">
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

      {/* Sophisticated ROI Calculator */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('mind.roi.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              {translate('mind.roi.subtitle')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl p-12 border border-gray-100 dark:border-gray-700 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8 flex items-center">
                  <Calculator className="h-6 w-6 mr-3 text-blue-600" />
                  Your Organization
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translate('mind.roi.employees')}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>10</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">{employees}</span>
                      <span>1000+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translate('mind.roi.revenue')}
                    </label>
                    <input
                      type="range"
                      min="500000"
                      max="100000000"
                      step="500000"
                      value={revenue}
                      onChange={(e) => setRevenue(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>€500K</span>
                      <span className="font-medium text-blue-600 dark:text-blue-400">€{(revenue / 1000000).toFixed(1)}M</span>
                      <span>€100M+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translate('mind.roi.industry')}
                    </label>
                    <select 
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="hospitality">Hospitality & Tourism</option>
                      <option value="manufacturing">Manufacturing & Industrial</option>
                      <option value="healthcare">Healthcare & Life Sciences</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translate('mind.roi.plan')}
                    </label>
                    <select 
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="pilot">Pilot - €499/month</option>
                      <option value="growth">Growth - €1,499/month</option>
                      <option value="scale">Scale - €4,999/month</option>
                      <option value="enterprise">Enterprise - Custom</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* ROI Results */}
              <div>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-8 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-green-600" />
                  Your ROI Projection
                </h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{translate('mind.roi.monthly')}</div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      €{roiResults.monthlySavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{translate('mind.roi.annual')}</div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      €{roiResults.annualSavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">ROI</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {roiResults.roiPercentage}%
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{translate('mind.roi.payback')}</div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {roiResults.paybackMonths}mo
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">{translate('mind.roi.benefits')}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">65% average efficiency increase</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">45% reduction in operational costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">99.9% system uptime guarantee</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">24/7 intelligent automation</span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                    {translate('mind.roi.report')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 dark:from-purple-950 dark:via-blue-950 dark:to-gray-950 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 animate-pulse blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-15 animate-pulse blur-2xl" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Infinity className="h-16 w-16 mx-auto text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
            {translate('mind.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light max-w-4xl mx-auto">
            {translate('mind.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                <span>{translate('mind.cta.trial')}</span>
              </div>
            </button>
            <button className="group border-2 border-white text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>{translate('mind.cta.schedule')}</span>
              </div>
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">ali.h@easolutions.de</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">+49 (0) 611 XXX XXXX</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">Wiesbaden, Germany</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Visualization Modal */}
      <MindDemoVisualization 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </div>
  );
};

export default MindProduct;