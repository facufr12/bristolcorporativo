import React from 'react';
import { Section } from '../components/Section';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

export const TablesView: React.FC = () => {
  const users = [
    { id: 1, name: 'Ana García', role: 'Administrador', status: 'Activo', email: 'ana.garcia@empresa.com', lastLogin: 'Hace 2 min' },
    { id: 2, name: 'Carlos López', role: 'Editor', status: 'Inactivo', email: 'carlos.lopez@empresa.com', lastLogin: 'Ayer' },
    { id: 3, name: 'Maria Rodriguez', role: 'Viewer', status: 'Activo', email: 'maria.r@empresa.com', lastLogin: 'Hace 1 hora' },
    { id: 4, name: 'Juan Perez', role: 'Editor', status: 'Pendiente', email: 'juan.p@empresa.com', lastLogin: 'N/A' },
    { id: 5, name: 'Sofia Torres', role: 'Viewer', status: 'Activo', email: 'sofia.t@empresa.com', lastLogin: 'Hace 5 dias' },
  ];

  return (
    <Section title="Tablas" description="Estructura para mostrar grandes colecciones de datos. Incluye paginación, acciones y estilos alternos.">
      
      <div className="bg-white rounded-lg border border-secondary-200 shadow-sm mb-8">
        <div className="px-6 py-4 border-b border-secondary-200 flex justify-between items-center bg-white rounded-t-lg">
            <h3 className="text-lg font-medium text-secondary-900">Usuarios del Sistema</h3>
            <div className="flex gap-2">
                <button className="text-sm text-brand-800 font-medium hover:bg-brand-50 px-3 py-1.5 rounded transition-colors">Exportar</button>
            </div>
        </div>
        
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-50">
                <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Usuario
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Rol
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Estado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider hidden md:table-cell">
                    Último Acceso
                </th>
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
                {users.map((user, idx) => (
                <tr key={user.id} className="hover:bg-secondary-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="h-9 w-9 flex-shrink-0 rounded-full bg-brand-100 flex items-center justify-center text-brand-800 text-sm font-bold border border-brand-200">
                        {user.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                        <div className="text-sm font-medium text-secondary-900">{user.name}</div>
                        <div className="text-sm text-secondary-500">{user.email}</div>
                        </div>
                    </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-secondary-700">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-medium rounded-full border 
                        ${user.status === 'Activo' ? 'bg-green-50 text-green-700 border-green-200' : 
                        user.status === 'Inactivo' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'}`}>
                        {user.status}
                    </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500 hidden md:table-cell">
                        {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-secondary-400 hover:text-secondary-600 p-1 rounded-full hover:bg-secondary-100">
                            <MoreVertical size={16} />
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-secondary-200 sm:px-6 rounded-b-lg">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                <p className="text-sm text-secondary-700">
                    Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">42</span> resultados
                </p>
                </div>
                <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50">
                    <span className="sr-only">Anterior</span>
                    <ChevronLeft size={16} />
                    </a>
                    <a href="#" aria-current="page" className="z-10 bg-brand-50 border-brand-500 text-brand-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                    </a>
                    <a href="#" className="bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                    </a>
                    <a href="#" className="bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-700">
                    ...
                    </span>
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50">
                    <span className="sr-only">Siguiente</span>
                    <ChevronRight size={16} />
                    </a>
                </nav>
                </div>
            </div>
            <div className="flex items-center justify-between sm:hidden w-full">
                 <button className="relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50">
                    Anterior
                 </button>
                 <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50">
                    Siguiente
                 </button>
            </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-secondary-800 mt-12">Tabla Compacta (Dense)</h3>
      <div className="overflow-hidden rounded-lg border border-secondary-200 shadow-sm bg-white max-w-2xl">
        <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-50">
                <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase">Métrica</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-secondary-500 uppercase">Valor</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-secondary-500 uppercase">Var %</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200">
                {[1,2,3].map(i => (
                    <tr key={i}>
                        <td className="px-4 py-2 text-xs text-secondary-900">Ingresos Q{i}</td>
                        <td className="px-4 py-2 text-xs text-secondary-600 text-right font-mono">$12,40{i}.00</td>
                        <td className="px-4 py-2 text-xs text-green-600 text-right font-medium">+2.{i}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

    </Section>
  );
};