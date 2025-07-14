import React from 'react';
import { Heart, Stethoscope, Brain, Activity, FileText, Users } from 'lucide-react';

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">Healthcare & Life Sciences</h1>
              </div>
              <p className="text-xl text-pink-100 mb-8">
                Improve patient outcomes with diagnostic assistance, automated administrative tasks, 
                and intelligent patient management systems that enhance care quality and efficiency.
              </p>
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-colors duration-300">
                Book Your Healthcare AI Demo
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Modern healthcare technology" 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Healthcare AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform patient care with intelligent systems that support clinical decision-making, 
              streamline operations, and improve health outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: 'Diagnostic Support Systems',
                description: 'AI-powered diagnostic assistance that analyzes medical images, lab results, and patient data for accurate diagnoses.',
                features: ['Medical image analysis', 'Symptom assessment', 'Differential diagnosis', 'Risk stratification']
              },
              {
                icon: Users,
                title: 'Patient Management',
                description: 'Comprehensive patient management systems that optimize care pathways and improve patient engagement.',
                features: ['Care pathway optimization', 'Appointment scheduling', 'Treatment adherence', 'Patient communication']
              },
              {
                icon: FileText,
                title: 'Clinical Documentation',
                description: 'Automated clinical documentation that reduces administrative burden and improves accuracy.',
                features: ['Voice-to-text transcription', 'Clinical note generation', 'Coding assistance', 'Quality assurance']
              },
              {
                icon: Activity,
                title: 'Remote Monitoring',
                description: 'Continuous patient monitoring systems that track vital signs and health metrics remotely.',
                features: ['Vital sign monitoring', 'Alert systems', 'Trend analysis', 'Preventive care']
              },
              {
                icon: Brain,
                title: 'Drug Discovery & Research',
                description: 'AI-accelerated research and drug discovery processes that reduce development time and costs.',
                features: ['Molecular analysis', 'Clinical trial optimization', 'Biomarker discovery', 'Research automation']
              },
              {
                icon: Heart,
                title: 'Personalized Medicine',
                description: 'Tailored treatment plans based on individual patient characteristics and genetic profiles.',
                features: ['Genomic analysis', 'Treatment personalization', 'Outcome prediction', 'Precision dosing']
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
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

      {/* Impact Metrics */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Healthcare Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare AI solutions deliver quantifiable improvements in patient outcomes, 
              operational efficiency, and cost reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '35%',
                description: 'Improvement in diagnostic accuracy',
                icon: Stethoscope
              },
              {
                metric: '50%',
                description: 'Reduction in documentation time',
                icon: FileText
              },
              {
                metric: '25%',
                description: 'Decrease in readmission rates',
                icon: Heart
              },
              {
                metric: '60%',
                description: 'Faster treatment initiation',
                icon: Activity
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{stat.metric}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Story</h2>
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">Falchi Dental Wiesbaden</h3>
                <p className="text-lg text-gray-600 mb-6">
                  "EA Solutions' AI diagnostic tools have revolutionized our practice. We've seen significant 
                  improvements in treatment accuracy and patient satisfaction, while reducing diagnostic time by 40%."
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">40% reduction in diagnostic time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">95% improvement in treatment accuracy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Enhanced patient experience</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Modern dental practice with AI technology" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Healthcare Compliance & Security</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are built with healthcare-specific compliance and security requirements in mind, 
              ensuring patient data protection and regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'HIPAA Compliance',
                description: 'Full HIPAA compliance with advanced encryption and access controls to protect patient data.'
              },
              {
                title: 'FDA Validation',
                description: 'Our diagnostic AI tools follow FDA guidelines and validation processes for medical devices.'
              },
              {
                title: 'Data Security',
                description: 'Enterprise-grade security with end-to-end encryption and secure data handling protocols.'
              },
              {
                title: 'Audit Trails',
                description: 'Comprehensive audit trails and logging for compliance reporting and quality assurance.'
              },
              {
                title: 'Privacy Protection',
                description: 'Advanced privacy protection measures including data anonymization and access controls.'
              },
              {
                title: 'Integration Standards',
                description: 'Full integration with HL7 FHIR standards and existing healthcare information systems.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Patient Care with AI</h2>
          <p className="text-xl text-pink-100 mb-8">
            Join leading healthcare providers who are improving patient outcomes and operational efficiency with EA Solutions' healthcare AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-colors duration-300">
              Schedule Healthcare Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
              Download Healthcare Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;