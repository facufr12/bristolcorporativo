import React from 'react';
import { Palette, Type, MousePointer2, LayoutTemplate, Table, FormInput, Box, Layers, LogIn, LogOut, Globe } from 'lucide-react';
import { NavItem, ViewState } from '../types';

interface SidebarProps {
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const fundamentalItems: NavItem[] = [
  { id: 'colors', label: 'Colores', icon: <Palette size={20} /> },
  { id: 'typography', label: 'Tipografía', icon: <Type size={20} /> },
];

const libraryItems: NavItem[] = [
  { id: 'buttons', label: 'Botones', icon: <MousePointer2 size={20} /> },
  { id: 'forms', label: 'Formularios', icon: <FormInput size={20} /> },
  { id: 'components', label: 'Componentes UI', icon: <Layers size={20} /> },
  { id: 'tables', label: 'Tablas', icon: <Table size={20} /> },
  { id: 'layouts', label: 'Layouts', icon: <LayoutTemplate size={20} /> },
  { id: 'landing-pages', label: 'Landing Pages', icon: <Globe size={20} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, isOpen, onClose, isAuthenticated, onLogout }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-brand-800 text-white transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static shadow-xl flex flex-col
      `}>
        <div className="p-6 border-b border-brand-700 flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg text-brand-800 shadow-sm">
            <Box size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-white">Design System</h1>
            <p className="text-xs text-brand-200 opacity-90">Guía Oficial</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-4 py-2 text-xs font-semibold text-brand-200 uppercase tracking-wider opacity-80">
            Fundamentos
          </p>
          {fundamentalItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200
                ${activeView === item.id 
                  ? 'bg-white text-brand-800 shadow-md' 
                  : 'text-brand-100 hover:bg-brand-700 hover:text-white'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}

          <div className="h-4"></div>
          
          <p className="px-4 py-2 text-xs font-semibold text-brand-200 uppercase tracking-wider opacity-80">
            Biblioteca
          </p>
          {libraryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200
                ${activeView === item.id 
                  ? 'bg-white text-brand-800 shadow-md' 
                  : 'text-brand-100 hover:bg-brand-700 hover:text-white'}
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-brand-700 bg-brand-900/30">
          {isAuthenticated ? (
            <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm text-brand-100 px-2">
                    <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold border border-white/30">
                        A
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-brand-900 rounded-full"></span>
                    </div>
                    <div>
                    <p className="text-white font-medium">Admin User</p>
                    <p className="text-xs opacity-80 text-green-300">Modo Edición</p>
                    </div>
                </div>
                <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-200 hover:text-white hover:bg-brand-800 rounded-md transition-colors"
                >
                    <LogOut size={16} />
                    Cerrar Sesión
                </button>
            </div>
          ) : (
            <button 
                onClick={() => { onNavigate('login'); onClose(); }}
                className={`
                    w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200
                    ${activeView === 'login' 
                    ? 'bg-white text-brand-800' 
                    : 'text-brand-100 hover:bg-brand-700 hover:text-white'}
                `}
            >
                <LogIn size={20} />
                Acceso Admin
            </button>
          )}
        </div>
      </aside>
    </>
  );
};