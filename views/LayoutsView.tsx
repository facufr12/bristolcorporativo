import React, { useState } from 'react';
import { Section } from '../components/Section';
import { X, ChevronRight, Home, ArrowRight, Menu, Bell, Search, AlertTriangle, CheckCircle2, Settings, LogOut, User, PlayCircle, ChevronDown, HelpCircle, CreditCard, ShieldCheck, Lock } from 'lucide-react';

export const LayoutsView: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'basic' | 'destructive' | null>(null);
  const [activeOffcanvas, setActiveOffcanvas] = useState<'left' | 'right' | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <Section title="Layouts y Componentes Estructurales" description="Patrones de diseño para la estructura de páginas, incluyendo Heros, Modales, Offcanvas y Grillas.">
      
      {/* --- HERO SECTIONS --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-secondary-900 border-b border-secondary-200 pb-2">Hero Sections</h3>
        
        <div className="space-y-12">
            {/* Hero 1: Simple Centered */}
            <div className="bg-white border border-secondary-200 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-16 md:px-12 lg:py-24 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 border border-brand-100">
                        Novedad v2.0
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 tracking-tight mb-6">
                        Construye más rápido con nuestro Sistema
                    </h2>
                    <p className="text-lg text-secondary-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Una biblioteca completa de componentes React y estilos Tailwind CSS diseñados para escalar.
                        Estandariza tu UI y mejora la experiencia de desarrollo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-6 py-3 bg-brand-800 text-white rounded-lg font-medium hover:bg-brand-900 transition-colors shadow-md">
                            Comenzar ahora
                        </button>
                        <button className="px-6 py-3 bg-white text-secondary-700 border border-secondary-300 rounded-lg font-medium hover:bg-secondary-50 transition-colors flex items-center justify-center gap-2">
                            <PlayCircle size={20} className="text-secondary-400" />
                            Ver Demo
                        </button>
                    </div>
                </div>
                <div className="bg-secondary-50 border-t border-secondary-100 py-3 px-6 text-center text-xs text-secondary-400 font-mono">
                    Componente: Hero Centered
                </div>
            </div>

            {/* Hero 2: Split with Image */}
            <div className="bg-white border border-secondary-200 rounded-xl overflow-hidden shadow-sm">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="px-8 py-12 md:px-12 md:py-20 lg:pr-4 flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 tracking-tight mb-4">
                            Gestión inteligente para tu equipo
                        </h2>
                        <p className="text-secondary-600 mb-8 leading-relaxed text-lg">
                            Optimiza flujos de trabajo y centraliza la comunicación. Nuestra plataforma permite a los equipos colaborar en tiempo real sin fricción.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                             <button className="px-5 py-3 bg-brand-800 text-white rounded-md font-medium hover:bg-brand-900 transition-colors inline-flex items-center gap-2 justify-center">
                                Solicitar Acceso <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="mt-8 flex items-center gap-4 text-sm text-secondary-500 border-t border-secondary-100 pt-6">
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary-300"></div>
                                ))}
                            </div>
                            <p>+2k usuarios activos confían en nosotros</p>
                        </div>
                    </div>
                    <div className="bg-secondary-100 h-64 md:h-full min-h-[320px] flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                        {/* Abstract placeholder pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-100/20 to-secondary-200/20"></div>
                        <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-xl transform rotate-3 flex items-center justify-center text-secondary-300 border border-secondary-200 relative z-10">
                            <div className="text-center p-4">
                                <div className="w-12 h-12 bg-secondary-100 rounded-full mx-auto mb-2"></div>
                                <span className="font-medium block mb-1">Dashboard Preview</span>
                                <span className="text-xs text-secondary-400">1200x800px</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary-50 border-t border-secondary-100 py-3 px-6 text-center text-xs text-secondary-400 font-mono">
                    Componente: Hero Split
                </div>
            </div>

             {/* Hero 3: Background Image (New) */}
             <div className="relative rounded-xl overflow-hidden shadow-lg bg-secondary-900 min-h-[500px] flex items-center">
                {/* Background & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Office Background" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-secondary-900/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 w-full max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
                        Transformación Digital
                    </h2>
                    <p className="text-lg md:text-xl text-secondary-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        Lleva tu empresa al siguiente nivel con nuestras soluciones integrales de diseño y tecnología. 
                        Adaptabilidad total para un mundo en constante cambio.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-brand-900 rounded-full font-bold hover:bg-secondary-100 transition-colors shadow-lg">
                            Explorar Soluciones
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Agendar Demo
                        </button>
                    </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 py-3 px-6 text-center text-xs text-white/60 font-mono z-20">
                    Componente: Hero Background Image
                </div>
            </div>
        </div>
      </div>

      {/* --- AUTH LAYOUTS (NEW) --- */}
      <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-secondary-900 border-b border-secondary-200 pb-2">Autenticación (Login Split)</h3>
          <p className="text-secondary-600 mb-6">Patrón de pantalla dividida: área de formulario oscura a la izquierda y medios visuales a la derecha.</p>
          
          <div className="border border-secondary-300 rounded-xl overflow-hidden bg-secondary-900 flex flex-col md:flex-row h-[400px] shadow-md">
               {/* Mini Preview of Login Left */}
               <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                   <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded bg-brand-800"></div>
                        <div className="h-4 w-24 bg-white rounded opacity-90"></div>
                   </div>
                   <div className="space-y-4 max-w-xs">
                       <div className="h-6 w-32 bg-white rounded"></div>
                       <div className="space-y-2">
                           <div className="h-2 w-10 bg-secondary-500 rounded"></div>
                           <div className="h-10 w-full bg-secondary-800 border border-secondary-700 rounded"></div>
                       </div>
                       <div className="space-y-2">
                           <div className="h-2 w-16 bg-secondary-500 rounded"></div>
                           <div className="h-10 w-full bg-secondary-800 border border-secondary-700 rounded"></div>
                       </div>
                       <div className="h-10 w-full bg-brand-600 rounded mt-4"></div>
                   </div>
               </div>
               {/* Mini Preview of Login Right */}
               <div className="hidden md:block w-1/2 bg-secondary-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-transparent to-transparent z-10 opacity-50"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        className="w-full h-full object-cover opacity-50 grayscale"
                        alt="Preview"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono border border-white/20">
                            Layout: Full Screen Split
                        </span>
                    </div>
               </div>
          </div>
      </div>


      {/* --- MODALS --- */}
      <div className="mb-16 scroll-mt-20" id="modals">
         <h3 className="text-2xl font-semibold mb-6 text-secondary-900 border-b border-secondary-200 pb-2">Modales (Dialogs)</h3>
         
         <div className="grid lg:grid-cols-2 gap-8 mb-8">
             {/* Static Example (Visual Structure) */}
             <div>
                <h4 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Estructura Visual</h4>
                <div className="relative bg-secondary-100 h-80 rounded-xl border border-secondary-200 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden flex flex-col transform scale-90 origin-center">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-secondary-100">
                            <h3 className="font-semibold text-secondary-900">Título del Modal</h3>
                            <X size={18} className="text-secondary-400" />
                        </div>
                        <div className="px-5 py-4">
                            <div className="space-y-2">
                                <div className="h-2 bg-secondary-100 rounded w-full"></div>
                                <div className="h-2 bg-secondary-100 rounded w-5/6"></div>
                                <div className="h-2 bg-secondary-100 rounded w-4/6"></div>
                            </div>
                        </div>
                        <div className="px-5 py-3 bg-secondary-50 border-t border-secondary-100 flex justify-end gap-2">
                            <div className="h-8 w-20 bg-secondary-200 rounded"></div>
                            <div className="h-8 w-20 bg-brand-800 rounded"></div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Interactive Demos */}
             <div>
                <h4 className="text-sm font-bold text-secondary-500 uppercase tracking-wider mb-4">Demos Interactivos</h4>
                <div className="bg-white p-8 rounded-xl border border-secondary-200 h-80 flex flex-col items-center justify-center gap-4">
                    <p className="text-secondary-500 text-center mb-2">Haz clic para probar el comportamiento</p>
                    
                    <button 
                        onClick={() => setActiveModal('basic')}
                        className="w-full max-w-xs px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-md hover:bg-secondary-50 transition-all shadow-sm font-medium"
                    >
                        Abrir Modal Básico
                    </button>
                    
                    <button 
                        onClick={() => setActiveModal('destructive')}
                        className="w-full max-w-xs px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-md hover:bg-red-100 transition-all shadow-sm font-medium"
                    >
                        Abrir Modal Destructivo
                    </button>
                </div>
             </div>
         </div>
      </div>

      {/* --- OFFCANVAS --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-secondary-900 border-b border-secondary-200 pb-2">Offcanvas (Drawers)</h3>
        <p className="text-secondary-600 mb-6">Paneles deslizantes utilizados para navegación móvil, carritos de compra o detalles contextuales.</p>

        <div className="grid lg:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-xl border border-secondary-200 flex flex-col items-center justify-center gap-6 min-h-[200px]">
                 <div className="text-center">
                     <h4 className="font-semibold text-secondary-900 mb-1">Menú Lateral (Izquierda)</h4>
                     <p className="text-sm text-secondary-500">Patrón estándar para navegación en móviles o tabletas.</p>
                 </div>
                 <button 
                    onClick={() => setActiveOffcanvas('left')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-secondary-900 text-white rounded-lg hover:bg-secondary-800 transition-all"
                 >
                     <Menu size={18} />
                     Abrir Navegación
                 </button>
             </div>

             <div className="bg-white p-8 rounded-xl border border-secondary-200 flex flex-col items-center justify-center gap-6 min-h-[200px]">
                 <div className="text-center">
                     <h4 className="font-semibold text-secondary-900 mb-1">Panel de Detalles (Derecha)</h4>
                     <p className="text-sm text-secondary-500">Para filtros, formularios de edición o detalles de items.</p>
                 </div>
                 <button 
                    onClick={() => setActiveOffcanvas('right')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-all shadow-sm"
                 >
                     <Settings size={18} />
                     Abrir Configuración
                 </button>
             </div>
        </div>
      </div>

      {/* --- ACCORDION --- */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-secondary-900 border-b border-secondary-200 pb-2">Acordeón (Accordion)</h3>
        <p className="text-secondary-600 mb-6">Organización vertical de contenido colapsable. Utiliza transiciones suaves para mejorar la experiencia de lectura.</p>
        
        <div className="max-w-3xl bg-white rounded-xl border border-secondary-200 shadow-sm divide-y divide-secondary-100 overflow-hidden">
          {[
            { 
              id: 0, 
              title: 'Centro de Ayuda y Soporte', 
              icon: <HelpCircle size={20} className="text-brand-600" />,
              content: 'Accede a guías detalladas, tutoriales en video y documentación técnica para aprovechar al máximo todas las funcionalidades de la plataforma. Nuestro equipo de soporte está disponible 24/7.' 
            },
            { 
              id: 1, 
              title: 'Facturación y Suscripciones', 
              icon: <CreditCard size={20} className="text-brand-600" />,
              content: 'Gestiona tus métodos de pago, descarga facturas históricas y actualiza tu plan de suscripción en cualquier momento desde el panel de administración financiera.' 
            },
            { 
              id: 2, 
              title: 'Políticas de Privacidad y Seguridad', 
              icon: <ShieldCheck size={20} className="text-brand-600" />,
              content: 'Nos tomamos la seguridad en serio. Tus datos están encriptados bajo el estándar AES-256 y cumplimos estrictamente con las normativas GDPR y CCPA para proteger tu información.' 
            }
          ].map((item) => (
            <div key={item.id} className="group">
              <button 
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-secondary-50 transition-colors focus:outline-none focus:bg-secondary-50"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className={`font-medium ${activeAccordion === item.id ? 'text-brand-800' : 'text-secondary-900'}`}>
                    {item.title}
                  </span>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`text-secondary-400 transition-transform duration-300 ease-in-out ${activeAccordion === item.id ? 'rotate-180 text-brand-600' : ''}`}
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  activeAccordion === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-1 text-secondary-600 leading-relaxed text-sm pl-[3.25rem]">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- GRID & BREADCRUMBS --- */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 text-secondary-800">Sistema de Grilla (12 Columnas)</h3>
        <div className="bg-secondary-100 rounded-xl p-4 border border-secondary-200 space-y-2 mb-8">
            <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-brand-200 text-brand-800 text-xs font-mono py-3 text-center rounded border border-brand-300">1</div>
                ))}
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 bg-brand-200 text-brand-800 text-xs font-mono py-3 text-center rounded border border-brand-300">col-4</div>
                <div className="col-span-4 bg-brand-200 text-brand-800 text-xs font-mono py-3 text-center rounded border border-brand-300">col-4</div>
                <div className="col-span-4 bg-brand-200 text-brand-800 text-xs font-mono py-3 text-center rounded border border-brand-300">col-4</div>
            </div>
        </div>

        <h3 className="text-lg font-semibold mb-4 text-secondary-800">Navegación (Breadcrumbs)</h3>
        <div className="bg-white p-4 rounded-lg border border-secondary-200">
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                    <li><a href="#" className="text-secondary-400 hover:text-secondary-500"><Home size={16} /></a></li>
                    <li><ChevronRight size={16} className="text-secondary-300" /></li>
                    <li><a href="#" className="text-sm font-medium text-secondary-500 hover:text-secondary-700">Layouts</a></li>
                    <li><ChevronRight size={16} className="text-secondary-300" /></li>
                    <li><span className="text-sm font-medium text-brand-800">Estructura</span></li>
                </ol>
            </nav>
        </div>
      </div>

      {/* --- INTERACTIVE COMPONENTS RENDER --- */}
      
      {/* Modal Backdrop & Container */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={() => setActiveModal(null)}
            ></div>

            {/* Modal: Basic */}
            {activeModal === 'basic' && (
                <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-100">
                        <h3 className="text-lg font-semibold text-secondary-900">Términos del Servicio</h3>
                        <button onClick={() => setActiveModal(null)} className="text-secondary-400 hover:text-secondary-600">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="px-6 py-6">
                        <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                            Al aceptar estos términos, usted consiente el uso de sus datos para mejorar la experiencia del usuario. Por favor lea detenidamente las condiciones.
                        </p>
                        <div className="flex items-start gap-3 bg-secondary-50 p-3 rounded-md">
                            <CheckCircle2 size={20} className="text-brand-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-secondary-600">Datos encriptados de extremo a extremo.</p>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-secondary-50 flex justify-end gap-3">
                        <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-sm font-medium text-secondary-700 bg-white border border-secondary-300 rounded-md hover:bg-secondary-50">
                            Cancelar
                        </button>
                        <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-sm font-medium text-white bg-brand-800 rounded-md hover:bg-brand-900">
                            Aceptar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal: Destructive */}
            {activeModal === 'destructive' && (
                <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-6 pt-6 pb-4 flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="text-red-600" size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-secondary-900 mb-2">¿Eliminar cuenta permanentemente?</h3>
                            <p className="text-sm text-secondary-500 leading-relaxed">
                                Estás a punto de eliminar tu cuenta y todos los datos asociados. Esta acción es irreversible y no podrás recuperar tu información.
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-secondary-50 flex justify-end gap-3">
                        <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-sm font-medium text-secondary-700 bg-white border border-secondary-300 rounded-md hover:bg-secondary-50">
                            Cancelar
                        </button>
                        <button onClick={() => setActiveModal(null)} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 shadow-sm">
                            Sí, eliminar cuenta
                        </button>
                    </div>
                </div>
            )}
        </div>
      )}

      {/* Offcanvas Container */}
      {activeOffcanvas && (
          <div className="fixed inset-0 z-50 overflow-hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setActiveOffcanvas(null)}></div>
              
              <div className={`absolute inset-y-0 ${activeOffcanvas === 'left' ? 'left-0' : 'right-0'} max-w-xs w-full flex`}>
                  <div className={`h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${activeOffcanvas === 'left' ? 'animate-in slide-in-from-left' : 'animate-in slide-in-from-right'}`}>
                      
                      {/* Offcanvas Left: Navigation Style */}
                      {activeOffcanvas === 'left' && (
                          <div className="h-full flex flex-col">
                              <div className="px-6 py-4 border-b border-secondary-200 flex items-center justify-between bg-secondary-50">
                                  <h3 className="font-bold text-secondary-900">Menú Principal</h3>
                                  <button onClick={() => setActiveOffcanvas(null)}><X size={20} className="text-secondary-500" /></button>
                              </div>
                              <div className="flex-1 overflow-y-auto py-4">
                                  <nav className="space-y-1 px-3">
                                      {['Inicio', 'Proyectos', 'Equipo', 'Reportes'].map((item) => (
                                          <a key={item} href="#" className="flex items-center px-3 py-2 text-secondary-700 rounded-md hover:bg-secondary-100 font-medium">
                                              {item}
                                          </a>
                                      ))}
                                      <div className="my-4 border-t border-secondary-100"></div>
                                      <a href="#" className="flex items-center px-3 py-2 text-secondary-600 rounded-md hover:bg-secondary-100 text-sm">Documentación</a>
                                      <a href="#" className="flex items-center px-3 py-2 text-secondary-600 rounded-md hover:bg-secondary-100 text-sm">Soporte</a>
                                  </nav>
                              </div>
                              <div className="p-4 border-t border-secondary-200 bg-secondary-50">
                                  <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-800 font-bold">JD</div>
                                      <div>
                                          <p className="text-sm font-medium text-secondary-900">John Doe</p>
                                          <p className="text-xs text-secondary-500">Admin</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )}

                      {/* Offcanvas Right: Details Style */}
                      {activeOffcanvas === 'right' && (
                          <div className="h-full flex flex-col">
                              <div className="px-6 py-6 border-b border-secondary-200">
                                  <div className="flex items-center justify-between mb-4">
                                      <h3 className="text-xl font-bold text-secondary-900">Configuración</h3>
                                      <button onClick={() => setActiveOffcanvas(null)} className="text-secondary-400 hover:text-secondary-600">
                                          <X size={24} />
                                      </button>
                                  </div>
                                  <p className="text-sm text-secondary-500">Administra las preferencias generales de tu cuenta.</p>
                              </div>
                              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                  <div>
                                      <label className="block text-sm font-medium text-secondary-700 mb-1">Nombre de visualización</label>
                                      <input type="text" className="w-full rounded-md border border-secondary-300 px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500" defaultValue="Usuario Demo" />
                                  </div>
                                  <div>
                                      <label className="block text-sm font-medium text-secondary-700 mb-1">Correo electrónico</label>
                                      <input type="email" className="w-full rounded-md border border-secondary-300 px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500" defaultValue="demo@empresa.com" />
                                  </div>
                                  <div className="pt-4 border-t border-secondary-100">
                                      <h4 className="text-sm font-medium text-secondary-900 mb-3">Notificaciones</h4>
                                      <div className="space-y-3">
                                          <label className="flex items-center gap-3">
                                              <input type="checkbox" defaultChecked className="text-brand-800 focus:ring-brand-800 rounded" />
                                              <span className="text-sm text-secondary-600">Emails de marketing</span>
                                          </label>
                                          <label className="flex items-center gap-3">
                                              <input type="checkbox" defaultChecked className="text-brand-800 focus:ring-brand-800 rounded" />
                                              <span className="text-sm text-secondary-600">Alertas de seguridad</span>
                                          </label>
                                      </div>
                                  </div>
                              </div>
                              <div className="p-4 border-t border-secondary-200 flex gap-3">
                                  <button className="flex-1 px-4 py-2 bg-brand-800 text-white rounded-md hover:bg-brand-900 shadow-sm font-medium">Guardar</button>
                                  <button onClick={() => setActiveOffcanvas(null)} className="px-4 py-2 bg-white border border-secondary-300 text-secondary-700 rounded-md hover:bg-secondary-50 font-medium">Cancelar</button>
                              </div>
                          </div>
                      )}

                  </div>
              </div>
          </div>
      )}

    </Section>
  );
};