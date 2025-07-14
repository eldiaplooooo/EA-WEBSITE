import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import IntelligentChatbot from './IntelligentChatbot';
import { useTheme } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <IntelligentChatbot isDark={isDark} />
    </div>
  );
};

export default Layout;