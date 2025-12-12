import React, { useState } from 'react';
import { Section } from '../components/Section';
import { AlertCircle, CheckCircle, Info, XCircle, Bell, X, Heart, Share2, MoreHorizontal, Calendar } from 'lucide-react';

export const ComponentsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section title="Componentes UI" description="Elementos de interfaz modulares para feedback, navegación y visualización de contenido.">
      
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* --- ALERTS --- */}
        <div className="space-y-8">
            <h3 className="text-xl font-semibold text-secondary-800 border-b border-secondary-200 pb-2">Alertas</h3>
            <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r flex items-start gap-3">
                    <Info className="text-blue-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                        <p className="font-medium text-blue-800">Información</p>
                        <p className="text-sm text-blue-700 mt-1">Una nueva versión del sistema está disponible.</p>
                    </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                        <p className="font-medium text-green-800">Éxito</p>
                        <p className="text-sm text-green-700 mt-1">Los cambios han sido guardados correctamente.</p>
                    </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r flex items-start gap-3">
                    <Bell className="text-yellow-600 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                        <p className="font-medium text-yellow-800">Advertencia</p>
                        <p className="text-sm text-yellow-700 mt-1">Tu sesión expirará en 5 minutos.</p>
                    </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r flex items-start gap-3">
                    <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                        <p className="font-medium text-red-800">Error</p>
                        <p className="text-sm text-red-700 mt-1">No se pudo conectar con el servidor. Intente nuevamente.</p>
                    </div>
                </div>
            </div>

            {/* --- BADGES & TAGS --- */}
            <h3 className="text-xl font-semibold text-secondary-800 border-b border-secondary-200 pb-2 pt-4">Badges & Etiquetas</h3>
            <div className="space-y-6">
                <div className="space-y-2">
                    <p className="text-sm text-secondary-500 mb-2">Estados de proceso</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                            Completado
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                            Pendiente
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Rechazado
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            En Revisión
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-secondary-500 mb-2">Etiquetas con icono</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-white border border-secondary-200 text-secondary-700">
                            <span className="w-2 h-2 bg-brand-500 rounded-full mr-2"></span>
                            Online
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-secondary-800 text-white">
                            <span className="mr-1.5 text-xs">v2.0</span>
                            Beta
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- CARDS --- */}
        <div className="space-y-8">
            <h3 className="text-xl font-semibold text-secondary-800 border-b border-secondary-200 pb-2">Tarjetas (Cards)</h3>
            
            {/* Simple Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg border border-secondary-200">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-secondary-900">Tarjeta Simple</h3>
                    <div className="mt-2 max-w-xl text-sm text-secondary-500">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
                    </div>
                    <div className="mt-4">
                        <button className="text-brand-800 font-medium hover:text-brand-900 text-sm flex items-center gap-1">
                            Leer más &rarr;
                        </button>
                    </div>
                </div>
            </div>

            {/* Media Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-secondary-200">
                <div className="relative h-40 bg-secondary-300">
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-bold uppercase text-brand-800 tracking-wide">Blog</span>
                         <span className="text-xs text-secondary-400 flex items-center gap-1"><Calendar size={12}/> 12 Oct</span>
                    </div>
                    <h4 className="text-lg font-bold text-secondary-900 mb-2">Construyendo Equipos Ágiles</h4>
                    <p className="text-secondary-600 text-sm mb-4">Descubre las metodologías que están transformando la productividad.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                        <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-secondary-200"></div>
                             <span className="text-xs font-medium text-secondary-700">Ana G.</span>
                        </div>
                        <div className="flex gap-3 text-secondary-400">
                            <Heart size={16} className="hover:text-red-500 cursor-pointer transition-colors" />
                            <Share2 size={16} className="hover:text-blue-500 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- TABS --- */}
      <div className="mt-16">
         <h3 className="text-xl font-semibold text-secondary-800 border-b border-secondary-200 pb-2 mb-6">Pestañas (Tabs)</h3>
         
         <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
             <div className="border-b border-secondary-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {['Mi Cuenta', 'Empresa', 'Miembros', 'Facturación'].map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(index)}
                      className={`
                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                        ${activeTab === index
                          ? 'border-brand-800 text-brand-800'
                          : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'}
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
             </div>
             <div className="mt-6 text-secondary-600 text-sm">
                 <p>Contenido de la pestaña: <strong className="text-secondary-900">{['Mi Cuenta', 'Empresa', 'Miembros', 'Facturación'][activeTab]}</strong></p>
                 <p className="mt-2">Aquí iría el panel de configuración correspondiente.</p>
             </div>
         </div>
      </div>

    </Section>
  );
};