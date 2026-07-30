import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      onClose();
      setPassword('');
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 backdrop-blur-sm px-4">
      <div className="bg-lab-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden border border-outline-variant/30">
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
          <h3 className="text-xl font-bold text-primary">Acceso Administrador</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm text-on-surface-variant mb-6">
            Ingresa la contraseña para acceder a las funciones de administración (demo: <strong>admin123</strong>).
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-outline-variant/50 rounded-xl bg-surface focus:border-secondary focus:ring-1 focus:ring-secondary text-primary px-4 py-3 outline-none transition-all"
                autoFocus
              />
              {error && <p className="text-error text-sm mt-2 font-medium">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-medium py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
