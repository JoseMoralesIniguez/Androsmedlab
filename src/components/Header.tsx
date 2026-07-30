import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FlaskConical } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import LoginModal from './LoginModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isAdmin, logout } = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-outline-variant ${
          isScrolled
            ? 'bg-lab-white/95 backdrop-blur-md shadow-sm'
            : 'bg-lab-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center">
              <img
                src="https://androsmedlab.com/assets/logo.jpg"
                alt="Andros MedLab Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Quiénes Somos
            </a>
            <a href="/#services" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="/#training" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Capacitación
            </a>
            <a href="/blog" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {isAdmin ? (
              <button
                onClick={logout}
                className="text-sm font-medium text-primary hover:bg-surface-gray px-4 py-2 rounded-full transition-colors"
              >
                Salir de Admin
              </button>
            ) : (
               <button
                onClick={() => setIsLoginOpen(true)}
                className="text-sm font-medium text-primary hover:bg-surface-gray px-4 py-2 rounded-full transition-colors"
              >
                Login Admin
              </button>
            )}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-secondary text-on-secondary px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-transform hover:scale-105 shadow-sm"
            >
              Agenda tu cita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-on-surface"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-lab-white border-t border-outline-variant px-4 py-4 space-y-4 shadow-sm flex flex-col">
            <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-on-surface-variant py-2">Quiénes Somos</a>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-on-surface-variant py-2">Servicios</a>
            <a href="/#training" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-on-surface-variant py-2">Capacitación</a>
            <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium text-on-surface-variant py-2">Blog</a>
            <hr className="border-outline-variant" />
            {isAdmin ? (
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full text-left text-sm font-medium text-primary py-2">Salir de Admin</button>
            ) : (
              <button onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }} className="w-full text-left text-sm font-medium text-primary py-2">Login Admin</button>
            )}
            
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-block text-center text-sm font-medium bg-secondary text-on-secondary px-6 py-3 rounded-full mt-2 w-full">
              Agenda tu cita
            </a>
          </div>
        )}
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
