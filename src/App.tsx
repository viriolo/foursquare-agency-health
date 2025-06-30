import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { InstitutionDetailPage } from './pages/InstitutionDetailPage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { ImpactPartnersPage } from './pages/ImpactPartnersPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/institutions" element={<InstitutionsPage />} />
            <Route path="/institutions/:slug" element={<InstitutionDetailPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/news/:slug" element={<BlogPostPage />} />
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