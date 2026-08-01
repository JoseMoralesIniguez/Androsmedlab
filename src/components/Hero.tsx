import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-surface-gray overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
          alt="Laboratorio médico"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left py-20">
        <div className="bg-lab-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-outline-variant/30 max-w-2xl transform transition-transform hover:scale-[1.01]">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase">
            Precisión y Confianza
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight mb-6">
            Primer laboratorio de andrología en Tabasco
          </h1>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Ofrecemos estudios precisos y confiables para darte las respuestas que necesitas sobre tu salud reproductiva masculina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-secondary text-on-secondary px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all font-medium shadow-sm"
            >
              Agenda tu cita
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center border-2 border-primary text-primary px-8 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all font-medium"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
