import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  status: 'Publicado' | 'Borrador';
  date: string;
  content?: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  editPost: (id: string, post: Partial<Omit<BlogPost, 'id'>>) => void;
  deletePost: (id: string) => void;
  certifications: Certification[];
  addCertification: (cert: Omit<Certification, 'id'>) => void;
  deleteCertification: (id: string) => void;
}

const defaultPosts: BlogPost[] = [
  { id: '1', title: 'Taller de Técnicas Avanzadas de Andrología...', status: 'Publicado', date: 'Feb 28, 2024', content: 'Únete a nuestro taller práctico sobre análisis espermático y morfología estricta...', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Nuevos equipos para Fragmentación de DNA', status: 'Borrador', date: 'Mar 15, 2024', content: 'Hemos adquirido nuevos equipos de última generación...', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Importancia del Análisis de Semen', status: 'Publicado', date: 'Abr 05, 2024', content: 'El análisis de semen es fundamental para la evaluación de la fertilidad masculina. Conoce los parámetros clave que evaluamos en el laboratorio.', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Congelación de Semen: Lo que debes saber', status: 'Publicado', date: 'May 12, 2024', content: 'La preservación de la fertilidad es una opción segura y eficaz. Descubre cómo funciona el proceso de criopreservación en nuestro centro.', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Avances en Biología Molecular Reproductiva', status: 'Publicado', date: 'Jun 20, 2024', content: 'Las técnicas de biología molecular están revolucionando el diagnóstico andrológico. Entérate de las últimas novedades científicas.', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' }
];

const defaultCerts: Certification[] = [
  { id: '1', name: 'ISO 15189', description: 'Calidad de Laboratorio' },
  { id: '2', name: 'COFEPRIS', description: 'Autoridad Sanitaria' }
];

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [certifications, setCertifications] = useState<Certification[]>(defaultCerts);

  useEffect(() => {
    const savedAdmin = localStorage.getItem('andros_admin');
    if (savedAdmin === 'true') setIsAdmin(true);

    const savedPosts = localStorage.getItem('andros_posts');
    if (savedPosts) setPosts(JSON.parse(savedPosts));

    const savedCerts = localStorage.getItem('andros_certs');
    if (savedCerts) setCertifications(JSON.parse(savedCerts));
  }, []);

  const login = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('andros_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('andros_admin');
  };

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = { ...post, id: Date.now().toString() };
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    localStorage.setItem('andros_posts', JSON.stringify(newPosts));
  };

  const deletePost = (id: string) => {
    const newPosts = posts.filter(p => p.id !== id);
    setPosts(newPosts);
    localStorage.setItem('andros_posts', JSON.stringify(newPosts));
  };

  const editPost = (id: string, updatedPost: Partial<Omit<BlogPost, 'id'>>) => {
    const newPosts = posts.map(p => p.id === id ? { ...p, ...updatedPost } : p);
    setPosts(newPosts);
    localStorage.setItem('andros_posts', JSON.stringify(newPosts));
  };

  const addCertification = (cert: Omit<Certification, 'id'>) => {
    const newCert = { ...cert, id: Date.now().toString() };
    const newCerts = [...certifications, newCert];
    setCertifications(newCerts);
    localStorage.setItem('andros_certs', JSON.stringify(newCerts));
  };

  const deleteCertification = (id: string) => {
    const newCerts = certifications.filter(c => c.id !== id);
    setCertifications(newCerts);
    localStorage.setItem('andros_certs', JSON.stringify(newCerts));
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, posts, addPost, editPost, deletePost, certifications, addCertification, deleteCertification }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
