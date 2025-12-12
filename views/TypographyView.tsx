import React from 'react';
import { Section } from '../components/Section';

export const TypographyView: React.FC = () => {
  return (
    <Section title="Tipografía" description="Utilizamos 'Inter' como nuestra tipografía principal. Esta escala tipográfica asegura consistencia y jerarquía visual.">
      
      <div className="bg-white rounded-xl border border-secondary-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-secondary-50 border-b border-secondary-200">
          <h3 className="font-semibold text-secondary-900">Escala Tipográfica</h3>
          <p className="text-sm text-secondary-500 mt-1">Font Family: Inter, sans-serif</p>
        </div>
        
        <table className="w-full text-left text-sm">
          <thead className="bg-white text-secondary-500 border-b border-secondary-200">
            <tr>
              <th className="px-6 py-3 font-medium">Nombre / Etiqueta</th>
              <th className="px-6 py-3 font-medium">Especificaciones</th>
              <th className="px-6 py-3 font-medium">Ejemplo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-100">
            {/* H1 Standard */}
            <tr>
              <td className="px-6 py-8 align-top">
                <span className="font-mono text-brand-800 font-bold block">H1</span>
                <span className="text-secondary-400 text-xs">Display Grande</span>
              </td>
              <td className="px-6 py-8 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 48px (3rem)</div>
                <div>Line: 1.0</div>
                <div>Weight: Bold (700)</div>
                <div>Tracking: -0.025em</div>
              </td>
              <td className="px-6 py-8 align-middle">
                <h1 className="text-5xl font-bold text-secondary-900 tracking-tight">Design System</h1>
              </td>
            </tr>

            {/* H1 Gradient (New) */}
            <tr>
              <td className="px-6 py-8 align-top">
                <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600 font-extrabold block">H1 Gradient</span>
                <span className="text-secondary-400 text-xs">Display Impact</span>
              </td>
              <td className="px-6 py-8 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 48px (3rem)</div>
                <div>Weight: ExtraBold (800)</div>
                <div>Fill: Gradient (Orange → Violet)</div>
              </td>
              <td className="px-6 py-8 align-middle">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-600 tracking-tight">
                  Creative Impact
                </h1>
              </td>
            </tr>

            {/* H2 */}
            <tr>
              <td className="px-6 py-6 align-top">
                <span className="font-mono text-brand-800 font-bold block">H2</span>
                <span className="text-secondary-400 text-xs">Encabezado de Sección</span>
              </td>
              <td className="px-6 py-6 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 36px (2.25rem)</div>
                <div>Line: 1.1</div>
                <div>Weight: Bold (700)</div>
                <div>Tracking: -0.025em</div>
              </td>
              <td className="px-6 py-6 align-middle">
                <h2 className="text-4xl font-bold text-secondary-900 tracking-tight">Estructura Visual</h2>
              </td>
            </tr>

            {/* H3 */}
            <tr>
              <td className="px-6 py-6 align-top">
                <span className="font-mono text-brand-800 font-bold block">H3</span>
                <span className="text-secondary-400 text-xs">Subtítulo</span>
              </td>
              <td className="px-6 py-6 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 30px (1.875rem)</div>
                <div>Line: 1.25</div>
                <div>Weight: Semibold (600)</div>
              </td>
              <td className="px-6 py-6 align-middle">
                <h3 className="text-3xl font-semibold text-secondary-900">Componentes UI</h3>
              </td>
            </tr>

            {/* H4 */}
            <tr>
              <td className="px-6 py-4 align-top">
                <span className="font-mono text-brand-800 font-bold block">H4</span>
                <span className="text-secondary-400 text-xs">Título de Tarjeta</span>
              </td>
              <td className="px-6 py-4 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 24px (1.5rem)</div>
                <div>Line: 1.25</div>
                <div>Weight: Semibold (600)</div>
              </td>
              <td className="px-6 py-4 align-middle">
                <h4 className="text-2xl font-semibold text-secondary-900">Detalles del Usuario</h4>
              </td>
            </tr>

            {/* Body Large */}
            <tr>
              <td className="px-6 py-4 align-top">
                <span className="font-mono text-brand-600 font-medium block">Body Large</span>
                <span className="text-secondary-400 text-xs">Intro / Lead</span>
              </td>
              <td className="px-6 py-4 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 18px (1.125rem)</div>
                <div>Line: 1.75</div>
                <div>Weight: Regular (400)</div>
              </td>
              <td className="px-6 py-4 align-middle">
                <p className="text-lg text-secondary-700">
                  El diseño consistente genera confianza y claridad en la comunicación.
                </p>
              </td>
            </tr>

            {/* Body Base */}
            <tr>
              <td className="px-6 py-4 align-top">
                <span className="font-mono text-brand-600 font-medium block">Body Base</span>
                <span className="text-secondary-400 text-xs">Párrafo estándar</span>
              </td>
              <td className="px-6 py-4 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 16px (1rem)</div>
                <div>Line: 1.5</div>
                <div>Weight: Regular (400)</div>
              </td>
              <td className="px-6 py-4 align-middle">
                <p className="text-base text-secondary-700">
                  Utilice este tamaño para la mayoría del contenido textual. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </td>
            </tr>

             {/* Body Small */}
             <tr>
              <td className="px-6 py-4 align-top">
                <span className="font-mono text-brand-600 font-medium block">Caption</span>
                <span className="text-secondary-400 text-xs">Metadatos / Ayuda</span>
              </td>
              <td className="px-6 py-4 align-top text-secondary-600 font-mono text-xs space-y-1">
                <div>Size: 14px (0.875rem)</div>
                <div>Line: 1.4</div>
                <div>Weight: Regular (400)</div>
              </td>
              <td className="px-6 py-4 align-middle">
                <p className="text-sm text-secondary-500">
                  Última actualización: Hace 2 horas
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </Section>
  );
};