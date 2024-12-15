import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ParentComponent from './components/ParentComponent';
import FeatureSection from './components/FeatureSection';
import HowDoesItWorkSection from './components/HowDoesItWorkSection';
import MoneyTransferInfo from './components/MoneyTransferInfo';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import NewsletterSubscribe from './components/NewsLetterSubscribe';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage'; // Import the ContactPage component

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <HeroSection />
                  <ParentComponent />
                  <FeatureSection />
                  <HowDoesItWorkSection />
                  <MoneyTransferInfo />
                  <TestimonialsSection />
                  <FAQSection />
                  <NewsletterSubscribe />
                </div>
              }
            />
            {/* Route for Contact Page */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
