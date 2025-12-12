import React from 'react';
import { Section } from '../components/Section';
import { CodeSnippet } from '../components/CodeSnippet';
import { ArrowRight, Settings, Download, Trash2, Loader2, Plus } from 'lucide-react';

export const ButtonsView: React.FC = () => {
  return (
    <Section title="Botones" description="Componentes interactivos para acciones y navegación. Incluyen estados de carga, variantes de iconos y grupos.">
      
      <div className="grid gap-8">
        {/* Primary & Variants */}
        <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
          <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Jerarquía y Variantes</h3>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <button className="px-4 py-2 bg-brand-800 text-white rounded-md hover:bg-brand-900 focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 transition-all font-medium shadow-sm">
              Primario
            </button>
            <button className="px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-md hover:bg-secondary-50 hover:border-secondary-400 focus:ring-2 focus:ring-offset-2 focus:ring-brand-800 transition-all font-medium shadow-sm">
              Secundario
            </button>
            <button className="px-4 py-2 bg-transparent text-brand-800 hover:bg-brand-50 rounded-md transition-all font-medium">
              Terciario (Ghost)
            </button>
            <div className="w-px h-8 bg-secondary-200 mx-2"></div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all font-medium shadow-sm">
              Peligro
            </button>
          </div>
          <CodeSnippet code={`<button className="bg-brand-800 text-white hover:bg-brand-900 px-4 py-2 rounded-md shadow-sm transition-all">
  Confirmar Acción
</button>`} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sizes */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Tamaños</h3>
            <div className="flex flex-wrap items-end gap-4">
              <button className="px-2.5 py-1.5 text-xs bg-secondary-100 text-secondary-800 rounded hover:bg-secondary-200 border border-secondary-200 font-medium">
                Pequeño (sm)
              </button>
              <button className="px-4 py-2 text-sm bg-secondary-100 text-secondary-800 rounded-md hover:bg-secondary-200 border border-secondary-200 font-medium">
                Mediano (md)
              </button>
              <button className="px-6 py-3 text-base bg-secondary-100 text-secondary-800 rounded-lg hover:bg-secondary-200 border border-secondary-200 font-medium">
                Grande (lg)
              </button>
            </div>
          </div>

          {/* Loading States */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Estados de Carga</h3>
            <div className="flex flex-wrap gap-4">
              <button disabled className="inline-flex items-center gap-2 px-4 py-2 bg-brand-800 text-white rounded-md opacity-70 cursor-wait">
                <Loader2 size={18} className="animate-spin" />
                Procesando
              </button>
              <button disabled className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-secondary-200 text-secondary-400 rounded-md cursor-wait">
                <Loader2 size={18} className="animate-spin" />
                Cargando
              </button>
            </div>
          </div>
        </div>

        {/* Icons & Groups */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
             <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Iconos e Icon-Only</h3>
             <div className="flex flex-wrap gap-4 items-center">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-brand-800 text-white rounded-md hover:bg-brand-900 transition-all shadow-sm">
                  <Download size={18} />
                  Exportar
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-md hover:bg-secondary-50 transition-all shadow-sm">
                  Siguiente
                  <ArrowRight size={18} />
                </button>
                
                <div className="w-px h-8 bg-secondary-200 mx-2"></div>

                <button className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-md transition-colors" aria-label="Configuración">
                  <Settings size={20} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors" aria-label="Eliminar">
                  <Trash2 size={20} />
                </button>
                <button className="p-2 bg-brand-800 text-white rounded-full hover:bg-brand-900 transition-colors shadow-md">
                  <Plus size={24} />
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
             <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Grupo de Botones</h3>
             <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-secondary-900 bg-white border border-secondary-200 rounded-l-lg hover:bg-secondary-50 focus:z-10 focus:ring-2 focus:ring-brand-500">
                  Años
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-brand-800 border-t border-b border-brand-800 hover:bg-brand-900 focus:z-10 focus:ring-2 focus:ring-brand-500">
                  Meses
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-secondary-900 bg-white border border-secondary-200 rounded-r-lg hover:bg-secondary-50 focus:z-10 focus:ring-2 focus:ring-brand-500">
                  Días
                </button>
              </div>
          </div>
        </div>

        {/* Full Width */}
        <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
          <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Bloque (Full Width)</h3>
          <button className="w-full px-4 py-3 bg-brand-800 text-white rounded-md hover:bg-brand-900 transition-all font-medium shadow-sm text-center">
              Iniciar Sesión
          </button>
        </div>
      </div>
    </Section>
  );
};