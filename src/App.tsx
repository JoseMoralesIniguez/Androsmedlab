import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Training from './components/Training';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import ImageCarousel from './components/ImageCarousel';

function Home() {
  return (
    <>
      <ImageCarousel />
      <Hero />
      <About />
      <Services />
      <Training />
      <Blog />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-surface font-body text-on-surface">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AdminProvider>
  );
}
