import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import InfoBar from './sections/InfoBar';
import Banner from './sections/Banner';
import Features from './sections/Features';
import Engineering from './sections/Engineering';
import Brands from './sections/Brands';
import ContactBar from './sections/ContactBar';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
import Products from './sections/Products';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products'>('home');

  const navigateTo = (page: 'home' | 'about' | 'products') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      {currentPage === 'home' && (
        <main>
          <Hero />
          <InfoBar onNavigate={navigateTo} />
          <Banner />
          <Features />
          <Engineering />
          <Brands />
          <ContactBar />
        </main>
      )}
      
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'products' && <Products />}
      
      <Footer />
    </div>
  );
}

export default App;
