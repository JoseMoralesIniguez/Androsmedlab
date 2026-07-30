import React, { useState, useRef } from 'react';
import { Flag, Eye, Award, Plus, Trash2, Upload, X, Image as ImageIcon } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function About() {
  const { isAdmin, certifications, addCertification, deleteCertification } = useAdmin();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCertName, setNewCertName] = useState('');
  const [newCertDesc, setNewCertDesc] = useState('');
  const [newCertImageUrl, setNewCertImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCertImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCertName && newCertDesc) {
      addCertification({ name: newCertName, description: newCertDesc, imageUrl: newCertImageUrl });
      setNewCertName('');
      setNewCertDesc('');
      setNewCertImageUrl('');
      setIsAddModalOpen(false);
    }
  };

  const openAddModal = () => {
    setNewCertName('');
    setNewCertDesc('');
    setNewCertImageUrl('');
    setIsAddModalOpen(true);
  };

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quiénes Somos</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Somos el primer laboratorio de andrología en Tabasco, fundado con el objetivo de brindar un servicio de diagnóstico especializado, confiable y accesible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="bg-lab-white p-10 md:p-12 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Flag className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Misión</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Garantizar la calidad en la evaluación de la salud reproductiva masculina bajo los más altos estándares de calidad y rigor científico.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-lab-white p-10 md:p-12 rounded-2xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Eye className="text-secondary" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Visión</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Ser el laboratorio líder en innovación de pruebas en andrología y análisis clínicos, siendo el socio estratégico de la comunidad médica.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Award className="text-secondary" size={28} />
                Certificaciones y Credenciales
              </h3>
              <p className="text-on-surface-variant mt-2">Respaldamos nuestro trabajo con los más altos estándares de calidad.</p>
            </div>
            {isAdmin && (
              <button onClick={openAddModal} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-on-primary transition-colors">
                <Upload size={18} />
                Agregar Certificación
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map(cert => (
              <div key={cert.id} className="bg-lab-white border border-outline-variant/50 rounded-xl p-6 flex flex-col items-center text-center relative group overflow-hidden">
                {isAdmin && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-lab-white/90 rounded p-1.5 shadow-sm z-10">
                    <button onClick={() => deleteCertification(cert.id)} className="text-on-surface-variant hover:text-error transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
                {cert.imageUrl ? (
                  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border border-outline-variant/30 flex items-center justify-center bg-lab-white">
                    <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-surface-gray rounded-full flex items-center justify-center mb-4">
                    <Award className="text-outline" size={32} />
                  </div>
                )}
                <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                <p className="text-sm text-on-surface-variant">{cert.description}</p>
              </div>
            ))}

            {/* Add New Placeholder (Admin only) */}
            {isAdmin && (
              <div onClick={openAddModal} className="bg-transparent border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-gray/50 transition-colors min-h-[160px]">
                <Plus className="text-outline-variant mb-3" size={32} />
                <span className="text-sm font-medium text-on-surface-variant">Cargar Nueva</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Certification Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 backdrop-blur-sm px-4">
          <div className="bg-lab-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden border border-outline-variant/30">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary">Nueva Certificación</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">Nombre de la Certificación</label>
                <input
                  type="text"
                  required
                  value={newCertName}
                  onChange={(e) => setNewCertName(e.target.value)}
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                  placeholder="Ej. ISO 9001"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">Descripción Corta</label>
                <input
                  type="text"
                  required
                  value={newCertDesc}
                  onChange={(e) => setNewCertDesc(e.target.value)}
                  className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                  placeholder="Ej. Gestión de Calidad"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface-variant mb-2">Imagen de Certificación (Opcional)</label>
                <div className="flex gap-3">
                  <button 
                    type="button" 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-2 border border-outline-variant/50 rounded-xl bg-surface hover:bg-surface-gray text-primary px-4 py-3 transition-colors"
                  >
                    <ImageIcon size={20} />
                    Subir Imagen
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>
              </div>
              {newCertImageUrl && (
                <div className="relative rounded-xl overflow-hidden h-32 border border-outline-variant/30 flex items-center justify-center bg-surface-gray">
                  <img src={newCertImageUrl} alt="Vista previa" className="max-h-full object-contain" />
                  <button 
                    type="button" 
                    onClick={() => setNewCertImageUrl('')}
                    className="absolute top-2 right-2 p-1.5 bg-lab-white/90 text-error rounded shadow hover:bg-lab-white transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm mt-4"
              >
                Guardar Certificación
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
