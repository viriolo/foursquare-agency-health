import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { ImpactPartnersPage } from './pages/ImpactPartnersPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/impact-partners" element={<ImpactPartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;