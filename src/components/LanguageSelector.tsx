import React, { createContext, useContext, useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.method': 'EA Method',
    'nav.why': 'Why EA',
    'nav.contact': 'Contact',
    'header.cta': 'Book Your AI Strategy Call',
    'hero.title': 'Your Business Has a Body. We Build Its Mind',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency for your enterprise.',
    'cta.book': 'Book Your AI Strategy Call',
    'final.title': 'Ready to Build Your Business Mind?',
    'final.subtitle': 'Join industry leaders who have transformed their operations with EA Solutions\' AI technology.',
    'final.cta': 'Start Your AI Transformation',
    'footer.description': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency.',
    'footer.cta': 'Book Your AI Strategy Call',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'industry.gastronomy': 'Gastronomy & Hospitality',
    'industry.industrial': 'Industrial & Manufacturing',
    'industry.finance': 'Finance & Security',
    'industry.finance.status': 'Coming Soon',
    'industry.smart': 'Smart Living & Personal AI',
    'industry.healthcare': 'Healthcare & Life Sciences',
    'industry.retail': 'Retail & E-commerce',
    'industry.retail.status': 'Coming Soon',
    'mind.features.title': 'Powerful Features',
    'mind.features.subtitle': 'MIND adapts to any industry, any workflow, any challenge.',
    'mind.features.universal.title': 'Universal Intelligence',
    'mind.features.universal.desc': 'One AI system that adapts to every industry and workflow.',
    'mind.features.fast.title': 'Lightning Fast',
    'mind.features.fast.desc': 'Deploy in weeks, not months, with immediate impact.',
    'mind.features.security.title': 'Enterprise Security',
    'mind.features.security.desc': 'Military-grade security with full compliance.',
    'mind.features.integration.title': 'Seamless Integration',
    'mind.features.integration.desc': 'Works with your existing systems and processes.',
    'mind.description': 'One intelligent system that adapts to every industry, every workflow, every challenge. MIND transforms how businesses think, learn, and grow.',
    'mind.cta.start': 'Start Your AI Journey',
    'mind.cta.demo': 'Watch Live Demo',
    'mind.trusted': 'Trusted by 4+ companies in Germany and 1 internationally',
    'mind.pricing.title': 'Simple, Transparent Pricing',
    'mind.pricing.subtitle': 'Choose the plan that fits your business needs.',
    'mind.pricing.pilot': 'Perfect for testing and small teams',
    'mind.pricing.growth': 'Ideal for growing businesses',
    'mind.pricing.scale': 'For large organizations',
    'mind.pricing.enterprise': 'Custom solutions for enterprises',
    'mind.pricing.popular': 'Most Popular',
    'mind.pricing.contact': 'Contact Sales',
    'mind.pricing.trial': 'Start Free Trial',
    'mind.pricing.features': 'All plans include 24/7 support, security, and regular updates',
    'mind.testimonials.title': 'What Our Clients Say',
    'mind.testimonials.subtitle': 'Real results from real businesses.',
    'mind.roi.title': 'Calculate Your ROI',
    'mind.roi.subtitle': 'See how much MIND can save your business.',
    'mind.roi.employees': 'Number of Employees',
    'mind.roi.revenue': 'Annual Revenue',
    'mind.roi.industry': 'Industry',
    'mind.roi.plan': 'MIND Plan',
    'mind.roi.monthly': 'Monthly Savings',
    'mind.roi.annual': 'Annual Savings',
    'mind.roi.payback': 'Payback Period',
    'mind.roi.benefits': 'Additional Benefits',
    'mind.roi.report': 'Get Detailed ROI Report',
    'mind.cta.title': 'Ready to Transform Your Business?',
    'mind.cta.subtitle': 'Join the AI revolution and unlock your business potential.',
    'mind.cta.trial': 'Start Free Trial',
    'mind.cta.schedule': 'Schedule Demo',
    'mind.architecture.title': 'Advanced Architecture',
    'mind.architecture.subtitle': 'Built on cutting-edge technology for maximum performance.',
    'mind.industries.title': 'Industries We Serve',
    'mind.industries.subtitle': 'MIND adapts to any industry with specialized solutions.',
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.subtitle': 'Your privacy is our priority. Learn how we protect your data.',
    'legal.privacy.security': 'Data Security',
    'legal.privacy.security.desc': 'We use industry-leading security measures.',
    'legal.privacy.transparency': 'Transparency',
    'legal.privacy.transparency.desc': 'Clear information about data usage.',
    'legal.privacy.rights': 'Your Rights',
    'legal.privacy.rights.desc': 'Full control over your personal data.',
    'legal.privacy.section1.title': 'Information We Collect',
    'legal.privacy.section1.content': 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us.',
    'legal.privacy.section2.title': 'How We Use Information',
    'legal.privacy.section2.content': 'We use the information we collect to provide, maintain, and improve our services.',
    'legal.privacy.section3.title': 'Information Sharing',
    'legal.privacy.section3.content': 'We do not sell, trade, or otherwise transfer your personal information to third parties.',
    'legal.privacy.contact.title': 'Contact Us',
    'legal.privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us.',
    'legal.impressum.title': 'Legal Notice',
    'legal.impressum.subtitle': 'Legal information and company details.',
    'legal.impressum.company.title': 'Company Information',
    'legal.impressum.company.details': 'Company Details',
    'legal.impressum.contact.title': 'Contact Information',
    'legal.impressum.legal.title': 'Legal Information',
    'legal.impressum.legal.responsibility': 'Responsibility for Content',
    'legal.impressum.legal.responsibility.content': 'We are responsible for the content of our website according to applicable law.',
    'legal.impressum.legal.liability': 'Liability for Links',
    'legal.impressum.legal.liability.content': 'We are not responsible for the content of external websites.',
    'legal.impressum.legal.copyright': 'Copyright',
    'legal.impressum.legal.copyright.content': 'All content on this website is protected by copyright.',
    'legal.impressum.dispute.title': 'Dispute Resolution',
    'legal.impressum.dispute.content': 'We are not willing or obliged to participate in dispute resolution proceedings.'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'EA Methode',
    'nav.why': 'Warum EA',
    'nav.contact': 'Kontakt',
    'header.cta': 'AI-Strategiegespräch buchen',
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienz für Ihr Unternehmen freisetzen.',
    'cta.book': 'AI-Strategiegespräch buchen',
    'final.title': 'Bereit, den Verstand Ihres Unternehmens zu bauen?',
    'final.subtitle': 'Schließen Sie sich Branchenführern an, die ihre Abläufe mit EA Solutions\' KI-Technologie transformiert haben.',
    'final.cta': 'Starten Sie Ihre KI-Transformation',
    'footer.description': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienz freisetzen.',
    'footer.cta': 'AI-Strategiegespräch buchen',
    'footer.quickLinks': 'Schnellzugriff',
    'footer.contactInfo': 'Kontaktinfo',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Impressum',
    'industry.gastronomy': 'Gastronomie & Hotellerie',
    'industry.industrial': 'Industrie & Fertigung',
    'industry.finance': 'Finanzen & Sicherheit',
    'industry.finance.status': 'Demnächst',
    'industry.smart': 'Smart Living & Persönliche KI',
    'industry.healthcare': 'Gesundheitswesen',
    'industry.retail': 'Einzelhandel & E-Commerce',
    'industry.retail.status': 'Demnächst',
    'mind.features.title': 'Leistungsstarke Funktionen',
    'mind.features.subtitle': 'MIND passt sich an jede Branche, jeden Workflow, jede Herausforderung an.',
    'mind.features.universal.title': 'Universelle Intelligenz',
    'mind.features.universal.desc': 'Ein KI-System, das sich an jede Branche und jeden Workflow anpasst.',
    'mind.features.fast.title': 'Blitzschnell',
    'mind.features.fast.desc': 'Bereitstellung in Wochen, nicht Monaten, mit sofortiger Wirkung.',
    'mind.features.security.title': 'Unternehmenssicherheit',
    'mind.features.security.desc': 'Militärische Sicherheit mit vollständiger Compliance.',
    'mind.features.integration.title': 'Nahtlose Integration',
    'mind.features.integration.desc': 'Funktioniert mit Ihren bestehenden Systemen und Prozessen.',
    'mind.description': 'Ein intelligentes System, das sich an jede Branche, jeden Workflow, jede Herausforderung anpasst. MIND transformiert, wie Unternehmen denken, lernen und wachsen.',
    'mind.cta.start': 'Starten Sie Ihre KI-Reise',
    'mind.cta.demo': 'Live-Demo ansehen',
    'mind.trusted': 'Vertraut von 4+ Unternehmen in Deutschland und 1 international',
    'mind.pricing.title': 'Einfache, transparente Preise',
    'mind.pricing.subtitle': 'Wählen Sie den Plan, der zu Ihren Geschäftsanforderungen passt.',
    'mind.pricing.pilot': 'Perfekt zum Testen und für kleine Teams',
    'mind.pricing.growth': 'Ideal für wachsende Unternehmen',
    'mind.pricing.scale': 'Für große Organisationen',
    'mind.pricing.enterprise': 'Maßgeschneiderte Lösungen für Unternehmen',
    'mind.pricing.popular': 'Beliebteste',
    'mind.pricing.contact': 'Vertrieb kontaktieren',
    'mind.pricing.trial': 'Kostenlose Testversion starten',
    'mind.pricing.features': 'Alle Pläne beinhalten 24/7-Support, Sicherheit und regelmäßige Updates',
    'mind.testimonials.title': 'Was unsere Kunden sagen',
    'mind.testimonials.subtitle': 'Echte Ergebnisse von echten Unternehmen.',
    'mind.roi.title': 'Berechnen Sie Ihren ROI',
    'mind.roi.subtitle': 'Sehen Sie, wie viel MIND Ihrem Unternehmen sparen kann.',
    'mind.roi.employees': 'Anzahl der Mitarbeiter',
    'mind.roi.revenue': 'Jahresumsatz',
    'mind.roi.industry': 'Branche',
    'mind.roi.plan': 'MIND Plan',
    'mind.roi.monthly': 'Monatliche Einsparungen',
    'mind.roi.annual': 'Jährliche Einsparungen',
    'mind.roi.payback': 'Amortisationszeit',
    'mind.roi.benefits': 'Zusätzliche Vorteile',
    'mind.roi.report': 'Detaillierten ROI-Bericht erhalten',
    'mind.cta.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'mind.cta.subtitle': 'Schließen Sie sich der KI-Revolution an und erschließen Sie Ihr Geschäftspotenzial.',
    'mind.cta.trial': 'Kostenlose Testversion starten',
    'mind.cta.schedule': 'Demo planen',
    'mind.architecture.title': 'Fortschrittliche Architektur',
    'mind.architecture.subtitle': 'Basierend auf modernster Technologie für maximale Leistung.',
    'mind.industries.title': 'Branchen, die wir bedienen',
    'mind.industries.subtitle': 'MIND passt sich an jede Branche mit spezialisierten Lösungen an.',
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.privacy.subtitle': 'Ihr Datenschutz ist unsere Priorität. Erfahren Sie, wie wir Ihre Daten schützen.',
    'legal.privacy.security': 'Datensicherheit',
    'legal.privacy.security.desc': 'Wir verwenden branchenführende Sicherheitsmaßnahmen.',
    'legal.privacy.transparency': 'Transparenz',
    'legal.privacy.transparency.desc': 'Klare Informationen über die Datennutzung.',
    'legal.privacy.rights': 'Ihre Rechte',
    'legal.privacy.rights.desc': 'Vollständige Kontrolle über Ihre persönlichen Daten.',
    'legal.privacy.section1.title': 'Informationen, die wir sammeln',
    'legal.privacy.section1.content': 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, unsere Dienste nutzen oder uns kontaktieren.',
    'legal.privacy.section2.title': 'Wie wir Informationen verwenden',
    'legal.privacy.section2.content': 'Wir verwenden die gesammelten Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern.',
    'legal.privacy.section3.title': 'Informationsaustausch',
    'legal.privacy.section3.content': 'Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht an Dritte.',
    'legal.privacy.contact.title': 'Kontaktieren Sie uns',
    'legal.privacy.contact.content': 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte.',
    'legal.impressum.title': 'Impressum',
    'legal.impressum.subtitle': 'Rechtliche Informationen und Firmendetails.',
    'legal.impressum.company.title': 'Firmeninformationen',
    'legal.impressum.company.details': 'Firmendetails',
    'legal.impressum.contact.title': 'Kontaktinformationen',
    'legal.impressum.legal.title': 'Rechtliche Informationen',
    'legal.impressum.legal.responsibility': 'Verantwortung für Inhalte',
    'legal.impressum.legal.responsibility.content': 'Wir sind für den Inhalt unserer Website nach geltendem Recht verantwortlich.',
    'legal.impressum.legal.liability': 'Haftung für Links',
    'legal.impressum.legal.liability.content': 'Wir sind nicht verantwortlich für den Inhalt externer Websites.',
    'legal.impressum.legal.copyright': 'Urheberrecht',
    'legal.impressum.legal.copyright.content': 'Alle Inhalte dieser Website sind urheberrechtlich geschützt.',
    'legal.impressum.dispute.title': 'Streitbeilegung',
    'legal.impressum.dispute.content': 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren teilzunehmen.'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
        className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
        aria-label="Toggle language"
      >
        <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
          {language}
        </span>
      </button>
    </div>
  );
};

export default LanguageSelector;