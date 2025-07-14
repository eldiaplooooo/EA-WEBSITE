import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSelector, { useLanguage } from './LanguageSelector';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const { translate } = useLanguage();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-900 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">EA Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
              {translate('nav.home')}
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
                {translate('nav.solutions')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSolutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                  <Link to="/solutions/gastronomy-hospitality" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400">
                    {translate('industry.gastronomy')}
                  </Link>
                  <Link to="/solutions/industrial-manufacturing" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400">
                    {translate('industry.industrial')}
                  </Link>
                  <div className="px-4 py-2 text-gray-400 dark:text-gray-500 text-sm">
                    {translate('industry.finance')} ({translate('industry.finance.status')})
                  </div>
                  <Link to="/solutions/smart-living" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400">
                    {translate('industry.smart')}
                  </Link>
                  <Link to="/solutions/healthcare" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400">
                    {translate('industry.healthcare')}
                  </Link>
                  <div className="px-4 py-2 text-gray-400 dark:text-gray-500 text-sm">
                    {translate('industry.retail')} ({translate('industry.retail.status')})
                  </div>
                </div>
              )}
            </div>

            <Link to="/mind" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors font-medium">
              MIND
            </Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link to="/ea-method" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
              {translate('nav.method')}
            </Link>
            <Link to="/why-ea" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
              {translate('nav.why')}
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
              {translate('nav.contact')}
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-800 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            >
              {translate('header.cta')}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                {translate('nav.home')}
              </Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                {translate('nav.solutions')}
              </Link>
              <Link to="/mind" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium">
                MIND
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                Services
              </Link>
              <Link to="/ea-method" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                {translate('nav.method')}
              </Link>
              <Link to="/why-ea" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                {translate('nav.why')}
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800">
                {translate('nav.contact')}
              </Link>
              <button
                onClick={onBookingClick}
                className="w-full text-left px-3 py-2 text-blue-900 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                {translate('header.cta')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;