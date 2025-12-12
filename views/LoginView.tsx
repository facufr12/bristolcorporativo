import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, AlertCircle, Github, Chrome } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
         onLogin();
      } else {
        setError('Por favor complete todos los campos');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen w-full bg-secondary-900">
      
      {/* Left Side: Form (Dark Theme) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10">
        
        {/* Logo Area */}
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
                {/* Logo Bristol Vector SVG (Light Mode version for Dark Background) */}
                <svg width="48" height="48" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="512" height="512" rx="60" fill="#006600"/>
                    <path d="M170 150H310C365.228 150 410 194.772 410 250V262C410 317.228 365.228 362 310 362H150V300" stroke="white" strokeWidth="70" strokeLinecap="round"/>
                    <path d="M150 300H300" stroke="white" strokeWidth="70" strokeLinecap="round"/>
                    <rect x="90" y="220" width="160" height="60" rx="10" fill="#A8A878"/>
                    <rect x="140" y="170" width="60" height="160" rx="10" fill="#A8A878"/>
                </svg>
                <span className="text-2xl font-bold text-white tracking-tight">Bristol Medicine</span>
            </div>
            <p className="text-secondary-400 text-sm">Sistema de Gestión de Design System</p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
          <p className="text-secondary-400">
            No eres miembro? <a href="#" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">Solicitar acceso a prueba</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 text-red-400 text-sm border border-red-500/20">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-secondary-300">Email</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-secondary-700 bg-secondary-800 px-4 py-3 text-white placeholder-secondary-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all"
                  placeholder="usuario@bristol.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-secondary-300">Contraseña</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-secondary-700 bg-secondary-800 px-4 py-3 text-white placeholder-secondary-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
               <label className="flex items-center gap-2 cursor-pointer">
                 <input type="checkbox" className="w-4 h-4 rounded bg-secondary-700 border-secondary-600 text-brand-600 focus:ring-brand-500 focus:ring-offset-secondary-900" />
                 <span className="text-sm text-secondary-400">Recordarme</span>
               </label>
               <a href="#" className="text-sm font-medium text-brand-400 hover:text-brand-300">Olvidaste tu contraseña?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-500 focus:ring-4 focus:ring-brand-900 transition-all disabled:opacity-70 shadow-lg shadow-brand-900/50 mt-2"
            >
              {isLoading ? 'Ingresando...' : 'Iniciar Sesión'}
            </button>
        </form>

        <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-secondary-900 text-secondary-500">O continuar con</span>
            </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-secondary-700 rounded-lg bg-secondary-800 text-secondary-300 hover:bg-secondary-700 hover:text-white transition-colors">
                <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-secondary-700 rounded-lg bg-secondary-800 text-secondary-300 hover:bg-secondary-700 hover:text-white transition-colors">
                <Github size={18} /> GitHub
            </button>
        </div>

        <div className="mt-12 text-center text-xs text-secondary-600">
            &copy; {new Date().getFullYear()} Bristol Medicine. Todos los derechos reservados.
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
         <div className="absolute inset-0 bg-brand-900/20 z-10 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-transparent to-transparent z-10"></div>
         <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Office Workspace" 
            className="w-full h-full object-cover"
         />
      </div>

    </div>
  );
};