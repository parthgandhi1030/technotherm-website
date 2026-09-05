import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CableExplorer from './components/CableExplorer';
import HeatCalculator from './components/HeatCalculator';
import EnergyRoiCalculator from './components/EnergyRoiCalculator';
import TurnkeyProcess from './components/TurnkeyProcess';
import Industries from './components/Industries';
import ClientReferences from './components/ClientReferences';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProductCompareModal from './components/ProductCompareModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareProducts, setCompareProducts] = useState(null);
  const [rfqProductTitle, setRfqProductTitle] = useState('');
  const [rfqSpecs, setRfqSpecs] = useState('');

  const handleOpenRfq = (productTitle = '') => {
    if (productTitle) {
      setRfqProductTitle(productTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRfqWithSpecs = (specsString) => {
    setRfqSpecs(specsString);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Header onOpenRfq={handleOpenRfq} />
      
      <main>
        <Hero onOpenRfq={handleOpenRfq} />
        <About />
        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenRfq={handleOpenRfq}
          onOpenCompare={(productsList) => setCompareProducts(productsList)}
        />
        <CableExplorer />
        <HeatCalculator onOpenRfqWithSpecs={handleOpenRfqWithSpecs} />
        <EnergyRoiCalculator onOpenRfqWithSpecs={handleOpenRfqWithSpecs} />
        <TurnkeyProcess onOpenRfq={handleOpenRfq} />
        <Industries />
        <ClientReferences />
        <FaqSection />
        <ContactSection 
          selectedProductTitle={rfqProductTitle}
          prefilledSpecs={rfqSpecs}
        />
      </main>

      <Footer />

      {/* Floating ThermoBot AI Chatbot */}
      <Chatbot 
        onOpenRfq={handleOpenRfq} 
        onScrollToSection={handleScrollToSection}
      />

      {/* Product Specification Sheet Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenRfq={handleOpenRfq}
        />
      )}

      {/* Side-by-Side Product Comparison Modal */}
      {compareProducts && (
        <ProductCompareModal 
          products={compareProducts}
          onClose={() => setCompareProducts(null)}
          onOpenRfq={handleOpenRfq}
        />
      )}
    </div>
  );
}
