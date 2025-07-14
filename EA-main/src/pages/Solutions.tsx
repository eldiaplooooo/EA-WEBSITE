import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Factory, 
  Shield, 
  Home as HomeIcon, 
  Heart, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'gastronomy-hospitality',
      title: 'Gastronomy & Hospitality',
      icon: Utensils,
      description: 'Transform guest experiences with intelligent reservation systems, automated customer service, and predictive analytics for inventory management.',
      features: ['Smart Reservation Management', 'Automated Guest Services', 'Inventory Optimization', 'Revenue Forecasting'],
      link: '/solutions/gastronomy-hospitality',
      bgColor: 'from-orange-500 to-red-500'
    },
    {
      id: 'industrial-manufacturing',
      title: 'Industrial & Manufacturing',
      icon: Factory,
      description: 'Optimize production with predictive maintenance, quality control automation, and intelligent supply chain management.',
      features: ['Predictive Maintenance', 'Quality Control Automation', 'Supply Chain Optimization', 'Production Planning'],
      link: '/solutions/industrial-manufacturing',
      bgColor: 'from-gray-600 to-gray-800'
    },
    {
      id: 'finance-security',
      title: 'Finance & Security',
      icon: Shield,
      description: 'Enhance security and compliance with advanced fraud detection, risk assessment, and automated regulatory reporting.',
      features: ['Fraud Detection Systems', 'Risk Assessment', 'Compliance Automation', 'Transaction Monitoring'],
      link: '/solutions/finance-security',
      bgColor: 'from-green-600 to-emerald-700'
    },
    {
      id: 'smart-living',
      title: 'Smart Living & Personal AI',
      icon: HomeIcon,
      description: 'Create intelligent living spaces with adaptive home automation, personal assistant systems, and energy optimization.',
      features: ['Home Automation', 'Personal AI Assistants', 'Energy Management', 'Security Integration'],
      link: '/solutions/smart-living',
      bgColor: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: Heart,
      description: 'Improve patient outcomes with diagnostic assistance, automated administrative tasks, and intelligent patient management.',
      features: ['Diagnostic Support', 'Patient Management', 'Administrative Automation', 'Research Analytics'],
      link: '/solutions/healthcare',
      bgColor: 'from-pink-500 to-rose-600'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Boost sales with personalized recommendations, inventory optimization, and intelligent customer service automation.',
      features: ['Personalized Recommendations', 'Inventory Management', 'Customer Service Bots', 'Sales Analytics'],
      link: '/solutions/retail',
      bgColor: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Solutions Tailored to Your Industry
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Every industry has unique challenges. Our bespoke AI solutions are engineered 
              specifically for your sector's DNA, delivering transformational results.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Header with gradient background */}
                  <div className={`bg-gradient-to-r ${solution.bgColor} p-8 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h2 className="text-2xl font-bold">{solution.title}</h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 text-lg mb-6">{solution.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={solution.link}
                      className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We create custom AI solutions for any industry. Let's discuss how we can 
            transform your specific business challenges into competitive advantages.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
            Schedule a Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;