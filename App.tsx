import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ColorsView } from './views/ColorsView';
import { TypographyView } from './views/TypographyView';
import { ButtonsView } from './views/ButtonsView';
import { FormsView } from './views/FormsView';
import { TablesView } from './views/TablesView';
import { LayoutsView } from './views/LayoutsView';
import { ComponentsView } from './views/ComponentsView';
import { LoginView } from './views/LoginView';
import { LandingPageView } from './views/LandingPageView';
import { ViewState } from './types';
import { Menu, Edit } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('colors');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
      setIsAuthenticated(true);
      setActiveView('colors'); // Redirect to home after login
  };

  const handleLogout = () => {
      setIsAuthenticated(false);
      setActiveView('colors');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'colors': return <ColorsView />;
      case 'typography': return <TypographyView />;
      case 'buttons': return <ButtonsView />;
      case 'forms': return <FormsView />;
      case 'components': return <ComponentsView />;
      case 'tables': return <TablesView />;
      case 'layouts': return <LayoutsView />;
      case 'landing-pages': return <LandingPageView />;
      case 'login': return <LoginView onLogin={handleLogin} />;
      default: return <ColorsView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar 
        activeView={activeView} 
        onNavigate={setActiveView} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header */}
        <header className="bg-white border-b border-secondary-200 p-4 lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-secondary-900">Sistema de Diseño</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-md"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Admin Floating Toolbar (Mock) */}
        {isAuthenticated && activeView !== 'login' && (
            <div className="absolute top-4 right-4 md:right-8 md:top-8 z-40 hidden md:flex items-center gap-2 bg-brand-900 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium animate-in slide-in-from-top-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Modo Administrador
                <div className="h-4 w-px bg-white/20 mx-1"></div>
                <button className="hover:text-brand-200 transition-colors flex items-center gap-1">
                    <Edit size={14} />
                    Editar Página
                </button>
            </div>
        )}

        {/* Content Area */}
        <div className={`flex-1 overflow-auto ${activeView === 'login' ? 'p-0' : 'p-4 md:p-8 lg:p-12'}`}>
          <div className={activeView === 'login' ? 'w-full' : 'max-w-7xl mx-auto'}>
            {renderContent()}
          </div>
          
          {activeView !== 'login' && (
            <footer className="mt-12 pt-8 border-t border-secondary-200 text-center text-secondary-400 text-sm pb-8">
              &copy; {new Date().getFullYear()} Sistema de Diseño Corporativo. Uso interno exclusivo.
            </footer>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;