import React, { useState } from 'react';
import { MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Por favor completa los campos obligatorios (Nombre, Teléfono, Servicio).");
      return;
    }

    // Construct WhatsApp Message
    const phoneNumber = "529931234567"; // Replace with actual number
    const text = `Hola Andros MedLab, me gustaría agendar una cita.\n\n*Nombre:* ${formData.name}\n*Teléfono:* ${formData.phone}\n*Fecha deseada:* ${formData.date || 'Por definir'}\n*Hora deseada:* ${formData.time || 'Por definir'}\n*Servicio de interés:* ${formData.service}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-lab-white border-t border-outline-variant/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-0 bg-surface-gray rounded-3xl overflow-hidden shadow-sm border border-outline-variant/50">
        
        {/* Info Panel */}
        <div className="bg-primary text-on-primary p-10 md:p-14 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Información de Contacto</h2>
            <p className="text-on-primary/90 mb-10 leading-relaxed">
              Estamos listos para atenderte con profesionalismo y discreción.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Ubicación</h4>
                  <p className="text-on-primary/80 mt-1">Calle Ejido, C. Miguel Hidalgo y Costilla 1552, 86150 Villahermosa, Tab.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Horario</h4>
                  <p className="text-on-primary/80 mt-1 leading-relaxed">
                    Lunes a Viernes: 7:00 - 18:00<br/>
                    Sábado: 7:00 - 14:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-8 pt-8 border-t border-on-primary/20">
                <div className="w-full">
                  <h4 className="font-semibold text-lg mb-4 text-center md:text-left">Síguenos en redes</h4>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a href="https://www.facebook.com/ANDROSMEDLAB/" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-on-secondary transition-all text-lab-white shadow-sm" aria-label="Facebook">
                      <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/andros_medlab/" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-on-secondary transition-all text-lab-white shadow-sm" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Panel */}
        <div className="p-10 md:p-14 md:w-3/5 bg-lab-white">
          <h2 className="text-3xl font-bold text-primary mb-8">Agenda tu cita</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-on-surface-variant mb-2">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-on-surface-variant mb-2">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="993 123 4567"
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-on-surface-variant mb-2">Fecha sugerida</label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-on-surface-variant mb-2">Hora sugerida</label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-on-surface-variant mb-2">Servicio de interés *</label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="Andrología">Andrología</option>
                <option value="Citogenética">Citogenética</option>
                <option value="Análisis Clínicos">Análisis Clínicos</option>
                <option value="Capacitación">Capacitación / Cursos</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-secondary text-on-secondary font-medium py-3.5 rounded-xl hover:bg-secondary/90 transition-colors shadow-sm mt-4 text-lg"
            >
              Solicitar Cita por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
