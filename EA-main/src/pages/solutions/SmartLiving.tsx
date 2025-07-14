import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Smartphone, Zap, Thermometer, Lock, Lightbulb, ArrowRight, ShoppingCart, Star, Package } from 'lucide-react';

const SmartLiving: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">Smart Living & Personal AI</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                Create intelligent living spaces with adaptive home automation, personal AI assistants, 
                and energy optimization that transforms your daily life experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Book Your Smart Home Demo
                </button>
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Smart Home Products
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Smart home technology" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Products Showcase */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Complete Smart Home Transformation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              We've curated the best smart home products from leading brands like Philips Hue, Nest, Ring, and more. 
              Get everything you need for a complete smart home transformation at unbeatable bundle prices.
            </p>
            <Link
              to="/solutions/smart-living/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              <Package className="mr-2 h-5 w-5" />
              Explore All Products & Bundles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Featured Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: 'Smart Lighting',
                description: 'Philips Hue, LIFX, and more',
                image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '50+ products',
                startingPrice: '€29.99'
              },
              {
                name: 'Climate Control',
                description: 'Nest, Ecobee, Honeywell',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '25+ products',
                startingPrice: '€149.99'
              },
              {
                name: 'Security Systems',
                description: 'Ring, Arlo, SimpliSafe',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '40+ products',
                startingPrice: '€99.99'
              },
              {
                name: 'Smart Speakers',
                description: 'Amazon Echo, Google Nest',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '30+ products',
                startingPrice: '€49.99'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-t-xl overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{category.products}</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">From {category.startingPrice}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Highlights */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Smart Home Bundles</h3>
                <p className="text-blue-100 mb-6">
                  Save up to 30% with our curated smart home bundles. Each bundle is designed by our AI 
                  to provide the perfect combination of devices for your specific needs and budget.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Starter Bundle: €449 (Save €70)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Security Bundle: €579 (Save €80)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Premium Bundle: €999 (Save €300)</span>
                  </li>
                </ul>
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  View All Bundles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <div className="text-lg">Average Savings</div>
                  <div className="text-sm text-blue-200 mt-2">on bundle purchases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Automation Section */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              Why Home Automation?
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light italic">
              Because life's too short for busywork — let your home handle it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🛒',
                title: 'Errand-Free Living',
                description: 'Your Personal AI predicts when you\'re running low on groceries or household essentials, places the order, and schedules delivery while you focus on what matters.',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: '🎫',
                title: 'Instant Bookings & Plans',
                description: 'From concerts to flight check-ins, one voice command secures tickets, reserves tables, and updates your calendar — no apps, no queues, no stress.',
                gradient: 'from-purple-500 to-violet-600'
              },
              {
                icon: '🌡️',
                title: 'Perfect Climate, Always',
                description: 'Adaptive sensors learn your comfort patterns and the local weather, fine-tuning heating, cooling, and air-quality in real time. Save up to 40% on energy without lifting a finger.',
                gradient: 'from-blue-500 to-cyan-600'
              },
              {
                icon: '🛡️',
                title: 'Shield-Level Security & Fire Guard',
                description: 'AI-driven cameras, smart locks, and smoke/CO detectors detect anomalies in milliseconds, trigger alerts, and can even call emergency services — whether you\'re downstairs or thousands of miles away.',
                gradient: 'from-red-500 to-orange-600'
              },
              {
                icon: '👥',
                title: 'Care Beyond Distance',
                description: 'Discreet fall sensors, medication reminders, and two-way video check-ins keep older parents safe and connected. If something\'s wrong, you and emergency responders know immediately.',
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                icon: '🎛️',
                title: 'Unified Control, Effortless Routine',
                description: 'Lights, blinds, music, appliances — everything choreographed through a single dashboard or a simple "Good night" voice cue.',
                gradient: 'from-indigo-500 to-purple-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-3xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Make the leap from connected devices to a truly intelligent lifestyle.
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Explore our bundles or book a live demo today and see how Smart Living turns houses into responsive, caring partners — 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                >
                  Explore Smart Bundles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Book Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Intelligent Home Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your living space into an intelligent ecosystem that learns your preferences, 
              optimizes comfort, and enhances your daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Personal AI Assistant',
                description: 'Voice-activated AI that manages your schedule, controls smart devices, and provides personalized assistance.',
                features: ['Voice command recognition', 'Schedule management', 'Smart device control', 'Personalized recommendations']
              },
              {
                icon: Thermometer,
                title: 'Climate Intelligence',
                description: 'Adaptive climate control that learns your preferences and optimizes temperature for comfort and efficiency.',
                features: ['Adaptive temperature control', 'Weather integration', 'Occupancy sensing', 'Energy optimization']
              },
              {
                icon: Lightbulb,
                title: 'Intelligent Lighting',
                description: 'Smart lighting systems that adjust automatically based on time, activity, and natural light conditions.',
                features: ['Circadian rhythm lighting', 'Automated scene control', 'Motion detection', 'Natural light integration']
              },
              {
                icon: Lock,
                title: 'Advanced Security',
                description: 'AI-powered security systems with facial recognition, anomaly detection, and intelligent monitoring.',
                features: ['Facial recognition', 'Intrusion detection', 'Smart notifications', 'Remote monitoring']
              },
              {
                icon: Zap,
                title: 'Energy Management',
                description: 'Intelligent energy systems that optimize usage, reduce costs, and integrate renewable energy sources.',
                features: ['Usage optimization', 'Peak shaving', 'Solar integration', 'Cost reduction analytics']
              },
              {
                icon: Home,
                title: 'Whole-Home Automation',
                description: 'Centralized control system that orchestrates all smart devices for seamless home management.',
                features: ['Centralized control', 'Device integration', 'Automated routines', 'Remote access']
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Smart Living Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the tangible benefits of intelligent home automation that adapts to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '40%',
                description: 'Average energy savings',
                icon: Zap
              },
              {
                metric: '2 hrs',
                description: 'Daily time saved',
                icon: Smartphone
              },
              {
                metric: '95%',
                description: 'User satisfaction rate',
                icon: Home
              },
              {
                metric: '30%',
                description: 'Improved home security',
                icon: Lock
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.metric}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple Installation Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our expert team handles everything from initial consultation to final optimization, 
              ensuring a seamless smart home transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Home Assessment',
                description: 'Comprehensive evaluation of your home layout, existing systems, and automation goals.',
                icon: Home
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Personalized smart home blueprint tailored to your lifestyle and preferences.',
                icon: Lightbulb
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Expert installation of all smart devices and systems with minimal disruption.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Optimization & Training',
                description: 'System optimization and comprehensive training to maximize your smart home experience.',
                icon: Smartphone
              }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Smart Home Features</h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the cutting-edge features that make our smart home solutions stand out from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Predictive Automation',
                description: 'AI that learns your routines and automatically adjusts settings before you even realize you need them.',
                features: ['Behavioral pattern learning', 'Predictive scheduling', 'Proactive adjustments', 'Continuous optimization']
              },
              {
                title: 'Voice & Gesture Control',
                description: 'Natural interaction through advanced voice recognition and gesture control for intuitive home management.',
                features: ['Multi-language support', 'Gesture recognition', 'Context awareness', 'Personalized responses']
              },
              {
                title: 'Integrated Health Monitoring',
                description: 'Subtle health and wellness monitoring through environmental sensors and wearable device integration.',
                features: ['Air quality monitoring', 'Sleep optimization', 'Activity tracking', 'Wellness insights']
              },
              {
                title: 'Adaptive Security',
                description: 'Intelligent security that adapts to your lifestyle and provides personalized protection.',
                features: ['Behavioral baselines', 'Threat assessment', 'Emergency response', 'Privacy protection']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 dark:bg-gray-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of homeowners who have created intelligent living spaces with EA Solutions' smart home technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule Home Consultation
            </button>
            <Link
              to="/solutions/smart-living/products"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Shop Smart Home Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartLiving;