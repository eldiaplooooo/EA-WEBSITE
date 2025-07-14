import React from 'react';
import { Utensils, Users, BarChart3, Clock, Shield, Zap } from 'lucide-react';

const GastronomyHospitality: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Utensils className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">Gastronomy & Hospitality</h1>
              </div>
              <p className="text-xl text-orange-100 mb-8">
                Transform guest experiences with intelligent reservation systems, automated customer service, 
                and predictive analytics that elevate every touchpoint of your hospitality business.
              </p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
                Book Your Hospitality AI Demo
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Modern restaurant interior" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Solutions for Modern Hospitality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From boutique hotels to restaurant chains, our AI solutions streamline operations 
              and create memorable experiences that keep guests coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Smart Reservation Management',
                description: 'AI-powered booking system that optimizes table allocation, predicts no-shows, and maximizes seating efficiency.',
                features: ['Dynamic pricing optimization', 'No-show prediction', 'Waitlist automation', 'Multi-channel booking sync']
              },
              {
                icon: BarChart3,
                title: 'Guest Experience Analytics',
                description: 'Comprehensive insights into guest preferences, satisfaction patterns, and service optimization opportunities.',
                features: ['Sentiment analysis from reviews', 'Preference tracking', 'Service gap identification', 'Personalized recommendations']
              },
              {
                icon: Clock,
                title: 'Automated Customer Service',
                description: 'Intelligent chatbots and voice assistants that handle inquiries, bookings, and guest requests 24/7.',
                features: ['Multi-language support', 'Order management', 'FAQ automation', 'Complaint resolution']
              },
              {
                icon: Shield,
                title: 'Inventory Intelligence',
                description: 'Predictive inventory management that reduces waste, prevents stockouts, and optimizes food costs.',
                features: ['Demand forecasting', 'Waste reduction', 'Supplier optimization', 'Menu engineering insights']
              },
              {
                icon: Zap,
                title: 'Revenue Optimization',
                description: 'Dynamic pricing and yield management to maximize revenue per guest and optimize occupancy rates.',
                features: ['Dynamic pricing models', 'Yield management', 'Upselling automation', 'Revenue forecasting']
              },
              {
                icon: Users,
                title: 'Staff Optimization',
                description: 'Intelligent scheduling and task management that ensures optimal staffing levels and service quality.',
                features: ['Demand-based scheduling', 'Task automation', 'Performance tracking', 'Training optimization']
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Story</h2>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Hotel am Kochbrunnen Wiesbaden</h3>
                <p className="text-lg text-gray-600 mb-6">
                  "EA Solutions transformed our guest experience with their intelligent booking system. 
                  We've seen a 40% reduction in no-shows and 25% increase in customer satisfaction scores."
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">Reduction in No-shows</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">25%</div>
                    <div className="text-sm text-gray-600">Increase in Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">30%</div>
                    <div className="text-sm text-gray-600">Operational Efficiency</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Luxury hotel lobby" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures seamless integration with your existing hospitality operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Operations Audit',
                description: 'Comprehensive analysis of your current guest journey, reservation systems, and operational workflows.'
              },
              {
                step: '02',
                title: 'Custom AI Design',
                description: 'Tailored AI architecture designed specifically for your property type, guest demographics, and service standards.'
              },
              {
                step: '03',
                title: 'Seamless Integration',
                description: 'Careful implementation with minimal disruption to daily operations and comprehensive staff training.'
              },
              {
                step: '04',
                title: 'Continuous Optimization',
                description: 'Ongoing performance monitoring and system refinement to ensure maximum ROI and guest satisfaction.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Guest Experience?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join leading hospitality brands that have revolutionized their operations with EA Solutions' AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
              Schedule Your Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Download Case Study
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomyHospitality;