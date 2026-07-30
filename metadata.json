import React, { useState } from 'react';
import { Globe, Facebook, Instagram, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="w-full bg-primary pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <span className="text-2xl font-bold text-lab-white block mb-4">Andros MedLab</span>
          <p className="text-sm text-on-primary/80 mb-6 max-w-xs leading-relaxed">
            Excelencia Clínica y Precisión. El primer laboratorio especializado en andrología.
          </p>
          <div className="flex gap-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-on-primary/80 hover:text-secondary hover:opacity-100 transition-all">
              <Globe size={20} />
            </button>
            <a href="https://www.facebook.com/ANDROSMEDLAB/" target="_blank" rel="noreferrer" className="text-on-primary/80 hover:text-secondary hover:opacity-100 transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/andros_medlab/" target="_blank" rel="noreferrer" className="text-on-primary/80 hover:text-secondary hover:opacity-100 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <h5 className="text-xs font-semibold text-lab-white uppercase tracking-wider mb-2">Legal</h5>
            <button onClick={() => setActiveModal('privacy')} className="text-sm text-on-primary/80 hover:text-secondary transition-all text-left">
              Política de Privacidad
            </button>
            <button onClick={() => setActiveModal('terms')} className="text-sm text-on-primary/80 hover:text-secondary transition-all text-left">
              Términos de Servicio
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-xs font-semibold text-lab-white uppercase tracking-wider mb-2">Soporte</h5>
            <button onClick={() => setActiveModal('support')} className="text-sm text-on-primary/80 hover:text-secondary transition-all text-left">
              Contacto de Soporte
            </button>
            <button onClick={() => setActiveModal('location')} className="text-sm text-on-primary/80 hover:text-secondary transition-all text-left">
              Ubicación
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-on-primary/20 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-on-primary/80">
            © {new Date().getFullYear()} Andros MedLab. Excelencia Clínica y Precisión.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
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
              className="bg-lab-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden border border-outline-variant/30 text-on-surface"
            >
              <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-gray shrink-0">
                <h3 className="text-xl font-bold text-primary">
                  {activeModal === 'privacy' && 'Política de Privacidad'}
                  {activeModal === 'terms' && 'Términos de Servicio'}
                  {activeModal === 'support' && 'Contacto de Soporte'}
                  {activeModal === 'location' && 'Ubicación del Laboratorio'}
                </h3>
                <button onClick={closeModal} className="text-on-surface-variant hover:text-primary transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                {activeModal === 'privacy' && (
                  <div className="text-on-surface-variant space-y-5 text-sm leading-relaxed">
                    <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}</p>
                    <p>En Andros MedLab ("nosotros", "nuestro", "el laboratorio"), valoramos su privacidad y estamos comprometidos a proteger su información personal y médica de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás regulaciones de salud aplicables.</p>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">1. Información que Recopilamos</h4>
                      <p className="mt-1">Podemos recopilar información personal, de contacto, así como información sensible relacionada con su historial médico, resultados de análisis clínicos, información genética y muestras biológicas entregadas a nuestro laboratorio.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">2. Uso de la Información</h4>
                      <p className="mt-1">Utilizamos su información personal y médica exclusivamente para la realización de los análisis clínicos solicitados, la entrega de resultados, el seguimiento de su expediente clínico, propósitos de facturación y para cumplir con obligaciones legales ante las autoridades sanitarias competentes.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">3. Protección y Confidencialidad</h4>
                      <p className="mt-1">Toda la información médica y resultados de laboratorio se manejan bajo el más estricto secreto profesional. Hemos implementado rigurosas medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales y sensibles contra daño, pérdida, alteración, destrucción o uso no autorizado.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">4. Transferencia de Datos</h4>
                      <p className="mt-1">Sus datos no serán compartidos ni vendidos a terceros sin su consentimiento expreso, excepto cuando sea requerido por la ley, por autoridades de salud (COFEPRIS, Secretaría de Salud) o para la derivación de estudios altamente especializados a laboratorios de referencia pre-aprobados, manteniendo los estándares de confidencialidad.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">5. Derechos ARCO</h4>
                      <p className="mt-1">Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso (Acceso); solicitar la corrección de su información en caso de que esté desactualizada o incorrecta (Rectificación); que la eliminemos de nuestros registros cuando considere que no se está utilizando adecuadamente (Cancelación); así como oponerse al uso de sus datos para fines específicos (Oposición).</p>
                    </div>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div className="text-on-surface-variant space-y-5 text-sm leading-relaxed">
                    <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}</p>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">1. Prestación de Servicios</h4>
                      <p className="mt-1">Andros MedLab se compromete a realizar análisis clínicos y andrológicos siguiendo los más altos estándares de calidad, normas oficiales mexicanas (NOM) aplicables a laboratorios clínicos y buenas prácticas de laboratorio. Los tiempos de entrega de resultados son estimados y pueden variar dependiendo del estudio.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">2. Toma de Muestras</h4>
                      <p className="mt-1">El paciente se compromete a seguir las indicaciones previas (ayuno, abstinencia, recolección adecuada) otorgadas por el laboratorio para garantizar la viabilidad de la muestra. El laboratorio se reserva el derecho de rechazar muestras que no cumplan con los criterios de calidad o seguridad necesarios para su análisis.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">3. Entrega de Resultados</h4>
                      <p className="mt-1">Los resultados serán entregados únicamente al paciente, a su médico tratante o a la persona expresamente autorizada por el paciente por escrito. La interpretación de los resultados es responsabilidad exclusiva del médico tratante.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">4. Responsabilidad Médica</h4>
                      <p className="mt-1">Los estudios de laboratorio son auxiliares de diagnóstico. Andros MedLab no proporciona diagnósticos médicos, prescripciones ni tratamientos. Las decisiones clínicas deben ser tomadas por un profesional de la salud con base en los resultados y la historia clínica del paciente.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary text-base">5. Políticas de Pago y Cancelación</h4>
                      <p className="mt-1">Los estudios deben ser pagados en su totalidad previo a la realización de la toma de muestra o entrega de la misma. No se realizan reembolsos una vez procesada la muestra. En caso de no poder procesar una muestra por causas imputables al laboratorio, se realizará una nueva toma sin costo adicional o la devolución del pago correspondiente.</p>
                    </div>
                  </div>
                )}

                {activeModal === 'support' && (
                  <div className="text-center py-8">
                    <p className="text-on-surface-variant mb-8 text-lg">
                      Nuestro equipo está disponible para responder a cualquier pregunta o duda acerca de sus estudios, requisitos previos o resultados.
                    </p>
                    <div className="flex flex-col gap-6 text-lg max-w-sm mx-auto">
                      <a href="tel:+529931386506" className="flex items-center gap-4 text-primary hover:text-secondary transition-colors font-semibold group">
                        <div className="bg-primary-container group-hover:bg-secondary-container transition-colors text-primary p-4 rounded-xl">
                          <Phone size={24} />
                        </div>
                        +52 993 138 6506
                      </a>
                      <a href="mailto:androsmedlab@outlook.com" className="flex items-center gap-4 text-primary hover:text-secondary transition-colors font-semibold group">
                        <div className="bg-primary-container group-hover:bg-secondary-container transition-colors text-primary p-4 rounded-xl">
                          <Mail size={24} />
                        </div>
                        androsmedlab@outlook.com
                      </a>
                    </div>
                  </div>
                )}

                {activeModal === 'location' && (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-3 bg-primary-container/50 p-4 rounded-xl">
                      <MapPin className="text-primary shrink-0 mt-1" size={24} />
                      <p className="text-on-surface-variant font-medium">
                        Nos encontramos ubicados en:<br/>
                        <span className="text-primary font-bold">X29W+7G Villahermosa, Tabasco</span><br/>
                        <span className="text-sm">Calle Ejido, C. Miguel Hidalgo y Costilla 1552, 86150</span>
                      </p>
                    </div>
                    <div className="w-full h-72 bg-surface-gray rounded-xl overflow-hidden border border-outline-variant/30">
                      <iframe 
                        title="Ubicación Andros MedLab"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.123282247271!2d-92.95624792476535!3d17.96818278302061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd771e162b501%3A0x9d8a0cda39ac0a35!2sANDROS%20MedLab!5e0!3m2!1ses-419!2smx!4v1714421921385!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <a href="https://www.google.com/maps/place/ANDROS+MedLab/@17.9682384,-92.9545334,18.5z/data=!4m15!1m8!3m7!1s0x85edd771e162b501:0x9d8a0cda39ac0a35!2sANDROS+MedLab!8m2!3d17.9681828!4d-92.9536716!10e1!16s%2Fg%2F11q2zgsykm!3m5!1s0x85edd771e162b501:0x9d8a0cda39ac0a35!8m2!3d17.9681828!4d-92.9536716!16s%2Fg%2F11q2zgsykm" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-primary text-on-primary py-3 rounded-xl hover:bg-secondary transition-colors font-medium shadow-sm">
                      Abrir en Google Maps
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

