import React, { useEffect } from 'react';
import { Building, Mail, MapPin, Phone, FileText, Scale } from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Impressum: React.FC = () => {
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 text-gray-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{translate('legal.impressum.title')}</h1>
            <p className="text-xl text-gray-100">
              {translate('legal.impressum.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Company Information */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{translate('legal.impressum.company.title')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{translate('legal.impressum.company.details')}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>EA Solutions</strong><br />
                      Ali H.<br />
                      Wiesbaden, Germany
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{translate('legal.impressum.contact.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">ali.h@easolutions.de</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">Wiesbaden, Germany</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{translate('legal.impressum.legal.title')}</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{translate('legal.impressum.legal.responsibility')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {translate('legal.impressum.legal.responsibility.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{translate('legal.impressum.legal.liability')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {translate('legal.impressum.legal.liability.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{translate('legal.impressum.legal.copyright')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {translate('legal.impressum.legal.copyright.content')}
                  </p>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{translate('legal.impressum.dispute.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {translate('legal.impressum.dispute.content')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;