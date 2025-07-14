import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from './LanguageSelector';

interface FooterProps {
  onBookingClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookingClick }) => {
  const { translate } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EA Solutions</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              {translate('footer.description')}
            </p>
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 dark:hover:from-blue-400 dark:hover:to-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              {translate('footer.cta')}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translate('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">{translate('nav.home')}</Link></li>
              <li><Link to="/solutions" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">{translate('nav.solutions')}</Link></li>
              <li><Link to="/mind" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">MIND</Link></li>
              <li><Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Services</Link></li>
              <li><Link to="/ea-method" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">{translate('nav.method')}</Link></li>
              <li><Link to="/why-ea" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">{translate('nav.why')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">{translate('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translate('footer.contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:ali.h@easolutions.de" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">
                  ali.h@easolutions.de
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">Wiesbaden, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              © 2025 EA Solutions. {translate('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <Link to="/datenschutz" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors text-sm">
                {translate('footer.privacy')}
              </Link>
              <Link to="/impressum" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors text-sm">
                {translate('footer.legal')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;