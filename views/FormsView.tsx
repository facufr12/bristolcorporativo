import React from 'react';
import { Section } from '../components/Section';
import { CodeSnippet } from '../components/CodeSnippet';
import { Search, Mail, Lock, Info, AlertCircle } from 'lucide-react';

export const FormsView: React.FC = () => {
  return (
    <Section title="Formularios" description="Elementos de entrada de datos estandarizados, claros y accesibles. Incluye validaciones y grupos de inputs.">
      
      <div className="grid lg:grid-cols-2 gap-8">
        
        <div className="space-y-8">
          {/* Inputs Simples */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Inputs Básicos</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                Nombre de etiqueta
              </label>
              <input 
                id="name"
                type="text" 
                className="w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder-secondary-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="Texto de ejemplo"
              />
              <p className="mt-1.5 text-xs text-secondary-500">Texto de ayuda que proporciona contexto adicional.</p>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-secondary-700 mb-1">
                Biografía
              </label>
              <textarea 
                id="bio"
                rows={3}
                className="w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                placeholder="Escribe algo sobre ti..."
              ></textarea>
            </div>
          </div>

          {/* Input Groups (Iconos) */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm space-y-6">
             <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Grupos con Iconos</h3>
             
             <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Buscar</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-secondary-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-secondary-300 bg-white pl-10 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    placeholder="Buscar usuarios..."
                  />
                </div>
             </div>

             <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Email Corporativo</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-4 w-4 text-secondary-400" />
                  </div>
                  <input
                    type="email"
                    className="block w-full rounded-md border border-secondary-300 bg-white pl-10 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    placeholder="usuario@empresa.com"
                  />
                </div>
             </div>

             <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Website</label>
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-secondary-300 bg-secondary-50 px-3 text-secondary-500 text-sm">
                    https://
                  </span>
                  <input
                    type="text"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-secondary-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
                    placeholder="www.ejemplo.com"
                  />
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Validation */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Estados de Validación</h3>
            
            <div>
              <label className="block text-sm font-medium text-red-700 mb-1">Campo con Error</label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  defaultValue="Valor incorrecto"
                  className="block w-full rounded-md border border-red-300 bg-white pr-10 py-2 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <p className="mt-2 text-sm text-red-600">Este campo es obligatorio.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Campo Válido</label>
              <input
                type="text"
                defaultValue="Valor correcto"
                className="block w-full rounded-md border border-green-300 bg-white py-2 px-3 text-green-900 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Selection Controls */}
          <div className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm space-y-6">
             <h3 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-2">Selección</h3>
             
             <div className="space-y-4">
               <div className="flex items-start">
                 <div className="flex h-5 items-center">
                   <input id="comments" type="checkbox" className="h-4 w-4 rounded border-secondary-300 bg-white text-brand-800 focus:ring-brand-800 cursor-pointer" />
                 </div>
                 <div className="ml-3 text-sm">
                   <label htmlFor="comments" className="font-medium text-secondary-700 cursor-pointer">Notificaciones</label>
                   <p className="text-secondary-500">Recibir avisos cuando alguien comente.</p>
                 </div>
               </div>

               <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-sm font-medium text-secondary-700">Modo Avión</span>
                    <span className="text-xs text-secondary-500">Desactivar todas las conexiones</span>
                 </div>
                 <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-800 focus:ring-offset-2 bg-secondary-200 hover:bg-secondary-300">
                   <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                 </button>
               </div>
                
               <div className="flex items-center justify-between">
                 <span className="text-sm font-medium text-secondary-700">Activo</span>
                 <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-800 focus:ring-offset-2 bg-brand-800">
                   <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                 </button>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <CodeSnippet code={`<div className="relative rounded-md shadow-sm">
  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <Search className="h-4 w-4 text-secondary-400" />
  </div>
  <input
    type="text"
    className="block w-full rounded-md border border-secondary-300 bg-white pl-10 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
    placeholder="Buscar..."
  />
</div>`} />
      </div>
    </Section>
  );
};