import React, { useState } from 'react';
import { BookOpen, Users, GraduationCap, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Training() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="training" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Capacitación y Cursos</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Compartimos nuestro conocimiento y experiencia. Ofrecemos programas de formación continua para profesionales de la salud, técnicos de laboratorio y estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-gray rounded-2xl p-8 border border-outline-variant/30">
            <div className="w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm mb-6">
              <BookOpen className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Cursos Especializados</h3>
            <p className="text-on-surface-variant mb-6">
              Programas teóricos y prácticos sobre técnicas de andrología y reproducción asistida.
            </p>
            <a href="#training" onClick={handleOpenModal} className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
              Solicitar información <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-surface-gray rounded-2xl p-8 border border-outline-variant/30">
            <div className="w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm mb-6">
              <Users className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Talleres Presenciales</h3>
            <p className="text-on-surface-variant mb-6">
              Prácticas en laboratorio con equipos de última generación bajo supervisión experta.
            </p>
            <a href="#training" onClick={handleOpenModal} className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
              Ver calendario <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-surface-gray rounded-2xl p-8 border border-outline-variant/30">
            <div className="w-14 h-14 bg-lab-white rounded-xl flex items-center justify-center shadow-sm mb-6">
              <GraduationCap className="text-secondary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Convenios Académicos</h3>
            <p className="text-on-surface-variant mb-6">
              Colaboración con universidades para prácticas profesionales y servicio social.
            </p>
            <a href="#training" onClick={handleOpenModal} className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
              Más detalles <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 backdrop-blur-sm px-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-lab-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden border border-outline-variant/30"
            >
              <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-gray">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-container p-2 rounded-lg text-primary">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Próximamente</h3>
                </div>
                <button onClick={handleCloseModal} className="text-on-surface-variant hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 text-center">
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  ¡Gracias por tu interés! Muy pronto estaremos publicando las fechas y el calendario de nuestras próximas capacitaciones y cursos.
                </p>
                <div className="mt-8">
                  <button
                    onClick={handleCloseModal}
                    className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
