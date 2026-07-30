import React, { useState } from 'react';
import { LayoutDashboard, X } from 'lucide-react';
import { useAdmin, BlogPost } from '../context/AdminContext';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogPage() {
  const { posts } = useAdmin();
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Filter to show only published posts for the public blog view
  const publishedPosts = posts.filter(p => p.status === 'Publicado');

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nuestro Blog</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Explora todos nuestros artículos, noticias y avances en el campo de la andrología y análisis clínicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setActivePost(post)}
              className="bg-lab-white rounded-2xl border border-outline-variant/50 flex flex-col hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
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
                <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-on-surface-variant mb-4 line-clamp-3">
                  {post.content || 'Conoce más sobre las últimas técnicas y avances en nuestro laboratorio para brindar mejores diagnósticos...'}
                </p>
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="text-primary font-medium group-hover:text-secondary transition-colors inline-flex items-center gap-2">
                    Leer artículo completo
                  </span>
                </div>
              </div>
            </div>
          ))}
          {publishedPosts.length === 0 && (
             <p className="text-on-surface-variant text-center col-span-full py-12 text-lg">Próximamente más artículos...</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {activePost && (
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
              className="bg-lab-white rounded-2xl shadow-lg w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden border border-outline-variant/30"
            >
              <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-gray shrink-0">
                <h3 className="text-xl font-bold text-primary truncate pr-4">{activePost.title}</h3>
                <button onClick={() => setActivePost(null)} className="text-on-surface-variant hover:text-primary transition-colors shrink-0">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                {activePost.imageUrl && (
                  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                    <img src={activePost.imageUrl} alt={activePost.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-6 text-sm text-secondary font-semibold">
                  <span>{activePost.date}</span>
                </div>
                <div className="text-on-surface whitespace-pre-wrap leading-relaxed">
                  {activePost.content || 'Contenido no disponible.'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
