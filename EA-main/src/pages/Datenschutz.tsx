import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Datenschutz: React.FC = () => {
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{translate('legal.privacy.title')}</h1>
            <p className="text-xl text-blue-100">
              {translate('legal.privacy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Lock,
                  title: translate('legal.privacy.security'),
                  description: translate('legal.privacy.security.desc')
                },
                {
                  icon: Eye,
                  title: translate('legal.privacy.transparency'),
                  description: translate('legal.privacy.transparency.desc')
                },
                {
                  icon: UserCheck,
                  title: translate('legal.privacy.rights'),
                  description: translate('legal.privacy.rights.desc')
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{translate('legal.privacy.section1.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {translate('legal.privacy.section1.content')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{translate('legal.privacy.section2.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {translate('legal.privacy.section2.content')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{translate('legal.privacy.section3.title')}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {translate('legal.privacy.section3.content')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{translate('legal.privacy.contact.title')}</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {translate('legal.privacy.contact.content')}
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>EA Solutions</strong><br />
                      Wiesbaden, Germany<br />
                      Email: ali.h@easolutions.de
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;