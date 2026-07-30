import React from 'react';
import { FlaskConical, Microscope, TestTube, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              Análisis clínicos especializados con la más alta tecnología para un diagnóstico preciso.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-secondary font-medium hover:underline">
            Ver catálogo completo
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Andrology */}
          <div className="bg-lab-white rounded-2xl border border-outline-variant/50 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="h-48 relative overflow-hidden flex items-end p-6">
              <img src="/andrologia.jpg" alt="Espermatozoides y Andrología" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm">
                <FlaskConical className="text-primary" size={28} />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6">Andrología</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Espermatobioscopía</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Fragmentación de DNA</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Selección espermática</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-outline/30 rounded-xl text-primary font-medium hover:bg-surface-gray transition-colors">
                Detalles del servicio
              </button>
            </div>
          </div>

          {/* Cytogenetics */}
          <div className="bg-lab-white rounded-2xl border border-outline-variant/50 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="h-48 relative overflow-hidden flex items-end p-6">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" alt="Citogenética" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm">
                <Microscope className="text-secondary" size={28} />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6">Citogenética</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Cariotipos en sangre periférica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Cariotipos en tejido</span>
                </li>
              </ul>
              <button className="w-full py-3 mt-auto border border-outline/30 rounded-xl text-primary font-medium hover:bg-surface-gray transition-colors">
                Detalles del servicio
              </button>
            </div>
          </div>

          {/* Clinical Analysis */}
          <div className="bg-lab-white rounded-2xl border border-outline-variant/50 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 shadow-sm">
            <div className="h-48 relative overflow-hidden flex items-end p-6">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" alt="Laboratorista en microscopio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="relative z-10 w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm">
                <TestTube className="text-primary" size={28} />
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6">Análisis Clínicos</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Hematología</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Química clínica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="text-on-surface-variant">Inmunología</span>
                </li>
              </ul>
              <button className="w-full py-3 mt-auto border border-outline/30 rounded-xl text-primary font-medium hover:bg-surface-gray transition-colors">
                Detalles del servicio
              </button>
            </div>
          </div>
        </div>

        <a href="#" className="md:hidden flex items-center justify-center w-full gap-2 text-secondary font-medium mt-8 border border-secondary py-3.5 rounded-xl">
          Ver catálogo completo
        </a>
      </div>
    </section>
  );
}
