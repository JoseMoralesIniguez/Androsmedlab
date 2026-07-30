import React, { useState } from 'react';
import { LayoutDashboard, Plus, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react';
import { useAdmin, BlogPost } from '../context/AdminContext';

export default function Blog() {
  const { isAdmin, posts, addPost, editPost, deletePost } = useAdmin();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<'Publicado' | 'Borrador'>('Publicado');
  const [imageUrl, setImageUrl] = useState('');
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const openAddModal = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
    setStatus('Publicado');
    setImageUrl('');
    setIsModalOpen(true);
  };

  const openEditModal = (post: BlogPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content || '');
    setStatus(post.status);
    setImageUrl(post.imageUrl || '');
    setIsModalOpen(true);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      if (editingId) {
        editPost(editingId, { title, content, status, imageUrl });
      } else {
        const date = new Intl.DateTimeFormat('es-MX', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date());
        addPost({ title, content, status, date, imageUrl });
      }
      setIsModalOpen(false);
    }
  };

  return (
    <section id="blog" className="py-24 bg-surface border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-2">
              {isAdmin && <LayoutDashboard className="text-secondary" size={32} />}
              {isAdmin ? 'Administración del Blog' : 'Nuestro Blog'}
            </h2>
            <p className="text-on-surface-variant mt-2">
              {isAdmin ? 'Administra las noticias y artículos del laboratorio.' : 'Últimas noticias y artículos sobre salud reproductiva.'}
            </p>
          </div>
          {isAdmin && (
            <button onClick={openAddModal} className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-container transition-colors">
              <Plus size={20} />
              Nuevo Post
            </button>
          )}
        </div>

        {isAdmin ? (
          // Admin View (Table)
          <div className="bg-lab-white border border-outline-variant/50 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-gray border-b border-outline-variant/50">
                    <th className="p-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Título</th>
                    <th className="p-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider hidden sm:table-cell">Estado</th>
                    <th className="p-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider hidden md:table-cell">Fecha</th>
                    <th className="p-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-surface-gray/50 transition-colors group">
                      <td className="p-5 font-medium text-primary flex items-center gap-3">
                        {post.imageUrl && (
                          <img src={post.imageUrl} alt="" className="w-10 h-10 rounded object-cover" />
                        )}
                        <span className="line-clamp-1">{post.title}</span>
                      </td>
                      <td className="p-5 hidden sm:table-cell">
                        <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          post.status === 'Publicado' 
                            ? 'bg-secondary/10 text-secondary' 
                            : 'bg-outline-variant/30 text-on-surface-variant'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="p-5 text-on-surface-variant hidden md:table-cell">{post.date}</td>
                      <td className="p-5 text-right">
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openEditModal(post)} className="p-1.5 text-on-surface-variant hover:text-primary transition-colors" title="Editar">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => deletePost(post.id)} className="p-1.5 text-on-surface-variant hover:text-error transition-colors" title="Eliminar">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-on-surface-variant">
                        No hay posts registrados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          // Public View (Cards)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(p => p.status === 'Publicado').slice(0, 3).map((post) => (
              <a 
                href="/blog" 
                target="_blank" 
                rel="noopener noreferrer"
                key={post.id} 
                className="bg-lab-white rounded-2xl border border-outline-variant/50 flex flex-col hover:shadow-md transition-shadow cursor-pointer overflow-hidden group block"
              >
                {post.imageUrl ? (
                  <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="h-48 bg-surface-gray flex items-center justify-center">
                    <LayoutDashboard className="text-outline-variant" size={48} />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-secondary font-semibold mb-2">{post.date}</span>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-on-surface-variant mb-4 line-clamp-3">
                    {post.content || 'Conoce más sobre las últimas técnicas y avances en nuestro laboratorio para brindar mejores diagnósticos...'}
                  </p>
                  <div className="mt-auto pt-4 border-t border-outline-variant/30">
                    <span className="text-primary font-medium group-hover:text-secondary transition-colors inline-flex items-center gap-2">
                      Leer artículo completo
                    </span>
                  </div>
                </div>
              </a>
            ))}
            {posts.filter(p => p.status === 'Publicado').length === 0 && (
               <p className="text-on-surface-variant text-center col-span-full py-12">Próximamente más artículos...</p>
            )}
            
            {posts.filter(p => p.status === 'Publicado').length > 3 && (
              <div className="col-span-full text-center mt-8">
                <p className="text-on-surface-variant mb-4">Hay más artículos y noticias por descubrir.</p>
                <a 
                  href="/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary-container transition-colors shadow-sm"
                >
                  Explorar todo el blog
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add/Edit Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 backdrop-blur-sm px-4 py-8">
          <div className="bg-lab-white rounded-2xl shadow-lg w-full max-w-2xl max-h-full flex flex-col overflow-hidden border border-outline-variant/30">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center shrink-0">
              <h3 className="text-xl font-bold text-primary">{editingId ? 'Editar Artículo' : 'Nuevo Artículo'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="post-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">Título del Artículo *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                    placeholder="Ej. Avances en Andrología"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2">Estado *</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as 'Publicado' | 'Borrador')}
                      className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                    >
                      <option value="Publicado">Publicado (Visible)</option>
                      <option value="Borrador">Borrador (Oculto)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2">Imagen Destacada</label>
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
                </div>

                {imageUrl && (
                  <div className="relative rounded-xl overflow-hidden h-40 border border-outline-variant/30">
                    <img src={imageUrl} alt="Vista previa" className="w-full h-full object-cover" />
                    <button 
                      type="button" 
                      onClick={() => setImageUrl('')}
                      className="absolute top-2 right-2 p-1.5 bg-lab-white/90 text-error rounded shadow hover:bg-lab-white transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-2">Contenido</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={6}
                    className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all resize-y"
                    placeholder="Escribe el contenido del artículo aquí..."
                  />
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-outline-variant/30 shrink-0 bg-surface-gray/30">
              <button
                type="submit"
                form="post-form"
                className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm"
              >
                {editingId ? 'Actualizar Artículo' : 'Guardar Artículo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
