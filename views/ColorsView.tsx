import React, { useState } from 'react';
import { Section } from '../components/Section';
import { CodeSnippet } from '../components/CodeSnippet';
import { Check, Copy, Edit2 } from 'lucide-react';

const ColorCard: React.FC<{ name: string; hex: string; bgClass?: string; style?: React.CSSProperties; textClass?: string }> = ({ 
  name, 
  hex, 
  bgClass,
  style,
  textClass = 'text-secondary-900' 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div 
      onClick={handleCopy}
      className="group flex flex-col cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div 
        className={`relative h-28 w-full rounded-xl shadow-md border border-black/5 flex items-end justify-between p-4 ${bgClass} ${textClass}`}
        style={style}
      >
        <div className="w-full">
            <span className="font-mono text-sm font-bold opacity-90 block mb-1">{hex}</span>
        </div>
        <div className={`absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-1.5 rounded-md ${textClass}`}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </div>
      </div>
      <div className="mt-3 px-1">
        <p className="font-bold text-base text-secondary-900">{name}</p>
        {bgClass && <p className="text-xs text-secondary-500 font-mono mt-1">.{bgClass}</p>}
      </div>
    </div>
  );
};

export const ColorsView: React.FC = () => {
  return (
    <div className="space-y-10 relative">
      
      <Section title="Colores Institucionales" description="Esta es la paleta oficial definida para la identidad de la marca. El uso correcto de estos códigos es obligatorio en todos los medios digitales.">
        
        {/* Paleta Oficial Principal */}
        <div className="bg-white p-8 rounded-2xl border border-secondary-200 shadow-sm mb-10 relative group/section">
            <div className="absolute top-4 right-4 opacity-0 group-hover/section:opacity-100 transition-opacity">
                {/* This button simulates an Admin edit action, functionally it would open a CMS modal */}
                <button className="text-xs font-medium bg-secondary-100 text-secondary-600 px-3 py-1.5 rounded-md hover:bg-secondary-200 flex items-center gap-1">
                    <Edit2 size={12} /> Editar Paleta
                </button>
            </div>

            <h3 className="text-lg font-bold text-secondary-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-800"></span>
                Paleta Oficial
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <ColorCard 
                    name="Verde Institucional" 
                    hex="#006600" 
                    style={{ backgroundColor: '#006600' }} 
                    textClass="text-white" 
                    bgClass="bg-brand-800"
                />
                <ColorCard 
                    name="Dark Gray" 
                    hex="#989898" 
                    style={{ backgroundColor: '#989898' }} 
                    textClass="text-white" 
                    bgClass="bg-secondary-400"
                />
                <ColorCard 
                    name="Medium Gray" 
                    hex="#c4c4c4" 
                    style={{ backgroundColor: '#c4c4c4' }} 
                    bgClass="bg-secondary-300"
                />
                <ColorCard 
                    name="Light Gray" 
                    hex="#e1e2e2" 
                    style={{ backgroundColor: '#e1e2e2' }} 
                    bgClass="bg-secondary-200"
                />
                <ColorCard 
                    name="White" 
                    hex="#ffffff" 
                    style={{ backgroundColor: '#ffffff' }} 
                    bgClass="bg-white"
                />
            </div>
        </div>

        {/* Variaciones Generadas */}
        <h3 className="text-xl font-semibold mb-4 text-secondary-800 border-b border-secondary-200 pb-2">Escala Extendida (Tailwind)</h3>
        <p className="text-secondary-500 mb-6">Variaciones generadas para estados de interacción (hover, active, focus).</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          <ColorCard name="Brand 50" hex="#f2fcf2" bgClass="bg-brand-50" />
          <ColorCard name="Brand 100" hex="#e1fce2" bgClass="bg-brand-100" />
          <ColorCard name="Brand 300" hex="#93ef99" bgClass="bg-brand-300" />
          <ColorCard name="Brand 500" hex="#2dc339" bgClass="bg-brand-500" textClass="text-white" />
          <ColorCard name="Brand 600" hex="#1ea32a" bgClass="bg-brand-600" textClass="text-white" />
          <ColorCard name="Brand 800" hex="#006600" bgClass="bg-brand-800" textClass="text-white" />
        </div>

        <h3 className="text-xl font-semibold mb-4 text-secondary-800 border-b border-secondary-200 pb-2">Neutros de Soporte</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          <ColorCard name="Gris Claro" hex="#e1e2e2" bgClass="bg-secondary-200" />
          <ColorCard name="Gris Medio" hex="#c4c4c4" bgClass="bg-secondary-300" />
          <ColorCard name="Gris Oscuro" hex="#989898" bgClass="bg-secondary-400" textClass="text-white" />
          <ColorCard name="Texto Base" hex="#1f2937" bgClass="bg-secondary-800" textClass="text-white" />
          <ColorCard name="Texto Titulos" hex="#111827" bgClass="bg-secondary-900" textClass="text-white" />
        </div>

        <h3 className="text-xl font-semibold mb-4 text-secondary-800 border-b border-secondary-200 pb-2">Semánticos (Feedback)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorCard name="Error" hex="#ef4444" bgClass="bg-red-500" textClass="text-white" />
          <ColorCard name="Warning" hex="#eab308" bgClass="bg-yellow-500" textClass="text-white" />
          <ColorCard name="Success" hex="#22c55e" bgClass="bg-green-500" textClass="text-white" />
          <ColorCard name="Info" hex="#3b82f6" bgClass="bg-blue-500" textClass="text-white" />
        </div>

        <div className="mt-12 bg-secondary-900 rounded-xl p-6 text-white">
            <h4 className="font-medium mb-4 text-lg">Configuración Tailwind CSS</h4>
            <p className="text-secondary-400 text-sm mb-4">Extensión para incluir los colores institucionales.</p>
            <CodeSnippet language="javascript" code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          800: '#006600', // Institucional
        },
        secondary: {
          200: '#e1e2e2', // Gris Claro
          300: '#c4c4c4', // Gris Medio
          400: '#989898', // Gris Oscuro
        }
      }
    }
  }
}`} />
        </div>
      </Section>
    </div>
  );
};