import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { LanguageProvider } from './components/LanguageSelector';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import GastronomyHospitality from './pages/solutions/GastronomyHospitality';
import IndustrialManufacturing from './pages/solutions/IndustrialManufacturing';
import FinanceSecurity from './pages/solutions/FinanceSecurity';
import SmartLiving from './pages/solutions/SmartLiving';
import SmartHomeProducts from './pages/solutions/SmartHomeProducts';
import Healthcare from './pages/solutions/Healthcare';
import Retail from './pages/solutions/Retail';
import MindProduct from './pages/MindProduct';
import EAMethod from './pages/EAMethod';
import WhyEA from './pages/WhyEA';
import Contact from './pages/Contact';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import HotelPillars from './pages/HotelPillars';
import Services from './pages/Services';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/gastronomy-hospitality" element={<GastronomyHospitality />} />
              <Route path="/solutions/industrial-manufacturing" element={<IndustrialManufacturing />} />
              <Route path="/solutions/finance-security" element={<FinanceSecurity />} />
              <Route path="/solutions/smart-living" element={<SmartLiving />} />
              <Route path="/solutions/smart-living/products" element={<SmartHomeProducts />} />
              <Route path="/solutions/healthcare" element={<Healthcare />} />
              <Route path="/solutions/retail" element={<Retail />} />
              <Route path="/mind" element={<MindProduct />} />
              <Route path="/ea-method" element={<EAMethod />} />
              <Route path="/why-ea" element={<WhyEA />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/hotel-pillars" element={<HotelPillars />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;