import React, { useState } from "react";
import {
  Check,
  Phone,
  Shield,
  User,
  Clock,
  Star,
  ChevronDown,
  MapPin,
  Menu,
  X
} from "lucide-react";

export const LandingPageView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    nombreTitular: "",
    partido: "",
    loca: "",
    zona: "",
    edadTitular: "",
    estadoTitular: "",
    edadConyuge: "",
    hayHijos: "",
    hijo1: "",
    hijo2: "",
    hijo3: "",
    hijo4: "",
    hijo5: "",
    hijo6: "",
    tipoAfTitular: "",
    costoMono: "",
    sueldoTitular: "",
    aporteTitular: "",
    adMonTitular: "0",
    tipoAfConyuge: "",
    costoMonoCony: "",
    sueldoConyuge: "",
    aporteConyuge: "",
    adMonConyuge: "0",
    libUniv: "",
    celular: "",
    email: ""
  });

  const [showEdadConyuge, setShowEdadConyuge] = useState(false);
  const [showDivHijos, setShowDivHijos] = useState(false);
  const [showLocalidad, setShowLocalidad] = useState(false);
  const [showMonoCate, setShowMonoCate] = useState(false);
  const [showSueldoTitular, setShowSueldoTitular] = useState(false);
  const [showAporteTitular, setShowAporteTitular] = useState(false);
  const [showAdMonTitular, setShowAdMonTitular] = useState(false);
  const [showTipoAfConyuge, setShowTipoAfConyuge] = useState(false);
  const [showMonoCateCony, setShowMonoCateCony] = useState(false);
  const [showSueldoConyuge, setShowSueldoConyuge] = useState(false);
  const [showAporteConyuge, setShowAporteConyuge] = useState(false);
  const [showAdMonConyuge, setShowAdMonConyuge] = useState(false);
  const [showLibUniv, setShowLibUniv] = useState(false);
  const [numHijos, setNumHijos] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEstadoTitularChange = (value: string) => {
    setFormData((prev) => ({ ...prev, estadoTitular: value }));
    setShowEdadConyuge(value === "Casado" || value === "Concubinato");
    setShowTipoAfConyuge(value === "Casado" || value === "Concubinato");
  };

  const handleHayHijosChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hayHijos: value }));
    const hijosNum = value === "no" ? 0 : parseInt(value);
    setNumHijos(hijosNum);
    setShowDivHijos(hijosNum > 0);
  };

  const handleTipoAfTitularChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipoAfTitular: value }));
    setShowMonoCate(value === "Monotributo");
    setShowSueldoTitular(value === "RelDep");
    setShowAporteTitular(value === "RelDep");
  };

  const handleTipoAfConyugeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipoAfConyuge: value }));
    setShowMonoCateCony(value === "Monotributo");
    setShowSueldoConyuge(value === "RelDep");
    setShowAporteConyuge(value === "RelDep");
  };

  const calcularAporteTitular = (sueldo: string) => {
    const sueldoNum = parseFloat(sueldo.replace(/[^0-9]/g, ""));
    if (!isNaN(sueldoNum)) {
      const aporte = sueldoNum * 0.03;
      setFormData((prev) => ({
        ...prev,
        aporteTitular: `$ ${aporte.toFixed(2)}`
      }));
    }
  };

  const calcularAporteConyuge = (sueldo: string) => {
    const sueldoNum = parseFloat(sueldo.replace(/[^0-9]/g, ""));
    if (!isNaN(sueldoNum)) {
      const aporte = sueldoNum * 0.03;
      setFormData((prev) => ({
        ...prev,
        aporteConyuge: `$ ${aporte.toFixed(2)}`
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <div className="bg-white font-sans antialiased relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 mx-auto w-full">
      {/* --- NAV BAR --- */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo (Using SVG from Login) */}
          <div className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 512 512"
              fill="none"
              className="drop-shadow-md"
            >
              <rect width="512" height="512" rx="60" fill="#006600" />
              <path
                d="M170 150H310C365.228 150 410 194.772 410 250V262C410 317.228 365.228 362 310 362H150V300"
                stroke="white"
                strokeWidth="70"
                strokeLinecap="round"
              />
              <path
                d="M150 300H300"
                stroke="white"
                strokeWidth="70"
                strokeLinecap="round"
              />
              <rect
                x="90"
                y="220"
                width="160"
                height="60"
                rx="10"
                fill="#A8A878"
              />
              <rect
                x="140"
                y="170"
                width="60"
                height="160"
                rx="10"
                fill="#A8A878"
              />
            </svg>
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
              Bristol Medicine
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Planes
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cartilla
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Empresas
            </a>
            <button className="bg-white text-brand-800 px-5 py-2 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-md">
              Portal Socios
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION WITH FORM --- */}
      <header className="relative bg-brand-900 text-white pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Medical Family"
            className="w-full h-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800/0 to-brand-800/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: Value Proposition */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-500/30 text-brand-200 text-xs font-medium mb-6 backdrop-blur-sm">
              <Star size={12} className="text-[#A8A878]" fill="#A8A878" />
              Plan Médico Líder 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Una prepaga pensada{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">
                para monotributistas
              </span>
            </h1>
            <p className="text-lg text-brand-100 mb-8 leading-relaxed max-w-lg">
              Protegé tu salud con una cobertura médica pensada para vos. Acceso
              a especialistas y sanatorios, consultas online 24/7 y un plan que
              acompaña tu trabajo y tu familia..
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-brand-200">
              <div className="flex items-center gap-2">
                <Check className="text-[#A8A878]" size={20} /> Sin copagos
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#A8A878]" size={20} /> 50% en farmacias
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#A8A878]" size={20} /> Médico a
                domicilio
              </div>
            </div>
          </div>

          {/* Right Content: Lead Gen Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-secondary-900 max-w-md w-full mx-auto lg:mr-0 border-t-4 border-[#A8A878] max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-brand-900 mb-2">
              CALCULAR MI CUOTA
            </h3>
            <p className="text-secondary-500 text-sm mb-6">
              Completa tus datos y recibe tu cotización personalizada.
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Nombre Titular */}
              <div>
                <input
                  type="text"
                  name="nombreTitular"
                  placeholder="Nombres y Apellido del titular"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                  required
                  value={formData.nombreTitular}
                  onChange={handleInputChange}
                />
              </div>

              {/* Partido */}
              <div>
                <select
                  name="partido"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                  required
                  value={formData.partido}
                  onChange={(e) => {
                    handleInputChange(e);
                    setShowLocalidad(
                      e.target.value !== "" && e.target.value !== "C.A.B.A"
                    );
                  }}
                >
                  <option value="">Partido</option>
                  <option value="C.A.B.A">C.A.B.A</option>
                  <option value="Bs. As. Zona Sur, Almirante Brown">
                    Almirante Brown
                  </option>
                  <option value="Bs. As. Zona Sur, Avellaneda">
                    Avellaneda
                  </option>
                  <option value="Bs. As. Zona Sur, Berazategui">
                    Berazategui
                  </option>
                  <option value="Bs. As. Zona Norte, Campana">Campana</option>
                  <option value="Bs. As. Zona Norte, Esteban Echeverría">
                    Esteban Echeverría
                  </option>
                  <option value="Bs. As. Zona Sur, Ezeiza">Ezeiza</option>
                  <option value="Bs. As. Zona Sur, Florencio Varela">
                    Florencio Varela
                  </option>
                  <option value="Bs. As. Zona Norte, Gral. San Martín">
                    Gral. San Martín
                  </option>
                  <option value="Bs. As. Zona Oeste, Hurlingham">
                    Hurlingham
                  </option>
                  <option value="Bs. As. Zona Oeste, Ituzaingó">
                    Ituzaingó
                  </option>
                  <option value="Bs. As. Zona Oeste, José C. Paz">
                    José C. Paz
                  </option>
                  <option value="Bs. As. Zona Oeste, La Matanza">
                    La Matanza
                  </option>
                  <option value="Bs. As. Zona Sur, Lanús">Lanús</option>
                  <option value="Bs. As. Zona Sur, Lomas de Zamora">
                    Lomas de Zamora
                  </option>
                  <option value="Bs. As. Zona Oeste, Malvinas Argentinas">
                    Malvinas Argentinas
                  </option>
                  <option value="Bs. As. Zona Oeste, Merlo">Merlo</option>
                  <option value="Bs. As. Zona Oeste, Moreno">Moreno</option>
                  <option value="Bs. As. Zona Oeste, Morón">Morón</option>
                  <option value="Bs. As. Zona Norte, Pilar">Pilar</option>
                  <option value="Bs. As. Zona Sur, Quilmes">Quilmes</option>
                  <option value="Bs. As. Zona Norte, San Fernando">
                    San Fernando
                  </option>
                  <option value="Bs. As. Zona Norte, San Isidro">
                    San Isidro
                  </option>
                  <option value="Bs. As. Zona Norte, San Miguel">
                    San Miguel
                  </option>
                  <option value="Bs. As. Zona Norte, Tigre">Tigre</option>
                  <option value="Bs. As. Zona Norte, Tres de Febrero">
                    Tres de Febrero
                  </option>
                  <option value="Bs. As. Zona Norte, Vicente López">
                    Vicente López
                  </option>
                  <option value="Bs. As. Zona Norte, Zárate">Zárate</option>
                  <option value="Otra">Otra</option>
                </select>
              </div>

              {/* Localidad (condicional) */}
              {showLocalidad && (
                <div>
                  <select
                    name="loca"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    required
                    value={formData.loca}
                    onChange={handleInputChange}
                  >
                    <option value="">Localidad</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                {/* Edad Titular */}
                <div>
                  <select
                    name="edadTitular"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    required
                    value={formData.edadTitular}
                    onChange={handleInputChange}
                  >
                    <option value="">Edad</option>
                    {Array.from({ length: 82 }, (_, i) => i + 18).map((age) => (
                      <option key={age} value={age}>
                        {age} años
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estado Civil */}
                <div>
                  <select
                    name="estadoTitular"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    required
                    value={formData.estadoTitular}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleEstadoTitularChange(e.target.value);
                    }}
                  >
                    <option value="">Estado Civil</option>
                    <option value="Soltero">
                      Soltero/a - Afiliación Individual
                    </option>
                    <option value="Casado">Casado/a</option>
                    <option value="Concubinato">Concubinato</option>
                  </select>
                </div>
              </div>

              {/* Edad Cónyuge (condicional) */}
              {showEdadConyuge && (
                <div>
                  <select
                    name="edadConyuge"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.edadConyuge}
                    onChange={handleInputChange}
                  >
                    <option value="">Edad Cónyuge</option>
                    {Array.from({ length: 82 }, (_, i) => i + 18).map((age) => (
                      <option key={age} value={age}>
                        {age} años
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Hijos */}
              <div>
                <select
                  name="hayHijos"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                  required
                  value={formData.hayHijos}
                  onChange={(e) => {
                    handleInputChange(e);
                    handleHayHijosChange(e.target.value);
                  }}
                >
                  <option value="">
                    ¿Incorporás hijos menores de 25 años?
                  </option>
                  <option value="no">NO incorporo hijos al plan</option>
                  <option value="1">Incorporo 1 hijo</option>
                  <option value="2">Incorporo 2 hijos</option>
                  <option value="3">Incorporo 3 hijos</option>
                  <option value="4">Incorporo 4 hijos</option>
                  <option value="5">Incorporo 5 hijos</option>
                  <option value="6">Incorporo 6 hijos</option>
                </select>
              </div>

              {/* Edades de Hijos (condicional) */}
              {showDivHijos && (
                <div>
                  <label className="block text-xs text-center text-secondary-600 mb-2">
                    Ingrese la edad de sus adicionales
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {Array.from({ length: numHijos }, (_, i) => (
                      <div key={i}>
                        <select
                          name={`hijo${i + 1}`}
                          className="w-full px-4 py-2 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                          value={
                            formData[`hijo${i + 1}` as keyof typeof formData]
                          }
                          onChange={handleInputChange}
                        >
                          <option value="">Edad</option>
                          <option value="1 a 24">1 a 24 años</option>
                          <option value="0 a 1">0 a 1 año</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tipo de Afiliación Titular */}
              <div>
                <select
                  name="tipoAfTitular"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                  required
                  value={formData.tipoAfTitular}
                  onChange={(e) => {
                    handleInputChange(e);
                    handleTipoAfTitularChange(e.target.value);
                  }}
                >
                  <option value="">Tipo de Afiliación</option>
                  <option value="Particular">Particular</option>
                  <option value="RelDep">
                    Recibo de Sueldo / Relación de Dependencia
                  </option>
                  <option value="Monotributo">Monotributo</option>
                </select>
              </div>

              {/* Categoría Monotributo Titular (condicional) */}
              {showMonoCate && (
                <div>
                  <select
                    name="costoMono"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.costoMono}
                    onChange={(e) => {
                      handleInputChange(e);
                      setShowAdMonTitular(true);
                    }}
                  >
                    <option value="">Indicar la Categoría</option>
                    <option value="A">A</option>
                    <option value="A Exento">A Exento</option>
                    <option value="B">B</option>
                    <option value="B Exento">B Exento</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                  </select>
                </div>
              )}

              {/* Sueldo Titular (condicional) */}
              {showSueldoTitular && (
                <div>
                  <input
                    type="text"
                    name="sueldoTitular"
                    placeholder="Ingrese su Sueldo Bruto"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.sueldoTitular}
                    onChange={(e) => {
                      handleInputChange(e);
                      calcularAporteTitular(e.target.value);
                      setShowAdMonTitular(true);
                    }}
                  />
                </div>
              )}

              {/* Aporte Titular (condicional) */}
              {showAporteTitular && formData.sueldoTitular && (
                <div>
                  <input
                    type="text"
                    name="aporteTitular"
                    placeholder="Aporte según su sueldo bruto"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-100 border border-secondary-200 outline-none text-sm"
                    value={formData.aporteTitular}
                    readOnly
                  />
                </div>
              )}

              {/* Adherentes Monotributo Titular (condicional) */}
              {showAdMonTitular && (
                <div>
                  <select
                    name="adMonTitular"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.adMonTitular}
                    onChange={handleInputChange}
                  >
                    <option value="0">Indique si tiene adherentes</option>
                    <option value="1">1 adherente</option>
                    <option value="2">2 adherentes</option>
                    <option value="3">3 adherentes</option>
                    <option value="4">4 adherentes</option>
                    <option value="5">5 adherentes</option>
                    <option value="6">6 adherentes</option>
                  </select>
                </div>
              )}

              {/* Tipo de Afiliación Cónyuge (condicional) */}
              {showTipoAfConyuge && (
                <div>
                  <select
                    name="tipoAfConyuge"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.tipoAfConyuge}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleTipoAfConyugeChange(e.target.value);
                    }}
                  >
                    <option value="">Tipo de Afiliación Cónyuge</option>
                    <option value="Particular">Particular</option>
                    <option value="RelDep">
                      Recibo de Sueldo / Relación de Dependencia
                    </option>
                    <option value="Monotributo">Monotributo</option>
                  </select>
                </div>
              )}

              {/* Categoría Monotributo Cónyuge (condicional) */}
              {showMonoCateCony && (
                <div>
                  <select
                    name="costoMonoCony"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.costoMonoCony}
                    onChange={(e) => {
                      handleInputChange(e);
                      setShowAdMonConyuge(true);
                    }}
                  >
                    <option value="">Indicar la Categoría</option>
                    <option value="A">A</option>
                    <option value="A Exento">A Exento</option>
                    <option value="B">B</option>
                    <option value="B Exento">B Exento</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                  </select>
                </div>
              )}

              {/* Sueldo Cónyuge (condicional) */}
              {showSueldoConyuge && (
                <div>
                  <input
                    type="text"
                    name="sueldoConyuge"
                    placeholder="Ingrese el Sueldo Bruto del Cónyuge"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.sueldoConyuge}
                    onChange={(e) => {
                      handleInputChange(e);
                      calcularAporteConyuge(e.target.value);
                      setShowAdMonConyuge(true);
                    }}
                  />
                </div>
              )}

              {/* Aporte Cónyuge (condicional) */}
              {showAporteConyuge && formData.sueldoConyuge && (
                <div>
                  <input
                    type="text"
                    name="aporteConyuge"
                    placeholder="Aporte según su sueldo bruto"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-100 border border-secondary-200 outline-none text-sm"
                    value={formData.aporteConyuge}
                    readOnly
                  />
                </div>
              )}

              {/* Adherentes Cónyuge (condicional) */}
              {showAdMonConyuge && (
                <div>
                  <select
                    name="adMonConyuge"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    value={formData.adMonConyuge}
                    onChange={handleInputChange}
                  >
                    <option value="0">Indique si tiene adherentes</option>
                    <option value="1">1 adherente</option>
                    <option value="2">2 adherentes</option>
                    <option value="3">3 adherentes</option>
                    <option value="4">4 adherentes</option>
                    <option value="5">5 adherentes</option>
                    <option value="6">6 adherentes</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                {/* Celular */}
                <div>
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Nº de Celular"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    required
                    pattern="[0-9]{10}"
                    value={formData.celular}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-50 border border-secondary-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-800 text-white font-bold py-4 rounded-lg hover:bg-brand-900 transition-all shadow-lg transform hover:-translate-y-0.5 mt-2"
              >
                Continuar
              </button>

              <p className="text-xs text-center text-secondary-400 mt-4">
                Te mostraremos la cotización solicitada sin obligación de
                compra.
              </p>
            </form>
          </div>
        </div>
      </header>

      {/* --- SOCIAL PROOF / STATS --- */}
      <section className="bg-brand-50 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-brand-800 mb-1">
              +25
            </p>
            <p className="text-sm font-medium text-secondary-600 uppercase tracking-wide">
              Años de Experiencia
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-brand-800 mb-1">
              200k
            </p>
            <p className="text-sm font-medium text-secondary-600 uppercase tracking-wide">
              Afiliados Activos
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-brand-800 mb-1">
              500+
            </p>
            <p className="text-sm font-medium text-secondary-600 uppercase tracking-wide">
              Centros Médicos
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-brand-800 mb-1">
              24/7
            </p>
            <p className="text-sm font-medium text-secondary-600 uppercase tracking-wide">
              Atención Urgencias
            </p>
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-secondary-600 text-lg">
              Diseñamos un sistema de salud pensando en lo que realmente
              importa: tu bienestar y el de tu familia, sin trámites
              complicados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-secondary-50 rounded-xl p-8 border border-secondary-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Telemedicina Digital
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Consultas médicas por videollamada en menos de 15 minutos.
                Recetas digitales enviadas directo a tu celular.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-secondary-50 rounded-xl p-8 border border-secondary-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Cobertura Total
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Sin letras chicas. Cubrimos desde consultas de rutina hasta
                internaciones de alta complejidad al 100%.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-secondary-50 rounded-xl p-8 border border-secondary-100 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Red médica en AMBA
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Elegí una cobertura pensada para moverte tranquilo en CABA y
                Gran Buenos Aires, con atención médica de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLANS --- */}
      <section className="py-20 bg-secondary-50 border-t border-secondary-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Planes diseñados para vos
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Basic */}
            <div className="bg-white rounded-2xl p-8 border border-secondary-200 shadow-sm hover:shadow-md transition-all relative">
              <h3 className="text-xl font-bold text-secondary-900">BM200</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-brand-800">
                  $45.000
                </span>
                <span className="text-secondary-500 text-sm">/mes final</span>
              </div>
              <p className="text-secondary-500 text-sm mb-6 pb-6 border-b border-secondary-100">
               Consultas con copago 
Descuento en medicamentos 
Odontología consultas y urgencias
Servicio de Urgencias y Emergencias
Médico por videollamada sin cargo 

              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Consultas
                  online ilimitadas
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Odontología
                  general
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> 40% dto en
                  farmacias
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-brand-800 text-brand-800 font-bold rounded-lg hover:bg-brand-50 transition-colors">
                Elegir Plan
              </button>
            </div>

            {/* Plan Recommended */}
            <div className="bg-white rounded-2xl p-8 border-2 border-brand-500 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Más Popular
              </div>
              <h3 className="text-xl font-bold text-secondary-900">BM400</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-brand-800">
                  $85.000
                </span>
                <span className="text-secondary-500 text-sm">/mes final</span>
              </div>
              <p className="text-secondary-500 text-sm mb-6 pb-6 border-b border-secondary-100">
             Consultas sin cargo
Descuento en medicamentos 
Odontología consultas y urgencias
Practicas odontológicas sin cargo
Médico por videollamadas sin cargo

              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Todo lo del
                  Plan Joven
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Internación
                  100%
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Ortodoncia
                  hasta 18 años
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Médico a
                  domicilio s/cargo
                </li>
              </ul>
              <button className="w-full py-3 bg-brand-800 text-white font-bold rounded-lg hover:bg-brand-900 transition-colors shadow-md">
                Cotizar Ahora
              </button>
            </div>

            {/* Plan Premium */}
            <div className="bg-white rounded-2xl p-8 border border-secondary-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-secondary-900">BM500</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-brand-800">
                  $120.000
                </span>
                <span className="text-secondary-500 text-sm">/mes final</span>
              </div>
              <p className="text-secondary-500 text-sm mb-6 pb-6 border-b border-secondary-100">
                Reintegros Cobertura en cirugía plástica Prácticas Odontológicas
                sin cargo Descuento en farmacias Consultas sin cargo
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Todo lo del
                  Plan Familiar
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Cirugía
                  estética (1 por año)
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Habitación
                  individual de lujo
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-700">
                  <Check size={16} className="text-brand-600" /> Cobertura
                  internacional
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-brand-800 text-brand-800 font-bold rounded-lg hover:bg-brand-50 transition-colors">
                Elegir Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Cómo me afilio 100% online?",
                a: "Es muy simple. Completas el formulario de arriba, un asesor te contacta para validar tus datos y firmás digitalmente. En 24hs ya tenés tu credencial digital activa."
              },
              {
                q: "¿Tienen períodos de carencia?",
                a: "Para consultas y urgencias no hay carencia. Para cirugías programadas y prestaciones de alta complejidad aplican los plazos establecidos por ley, salvo promociones vigentes."
              },
              {
                q: "¿Aceptan derivación de aportes?",
                a: "Sí, podés derivar tus aportes de relación de dependencia o monotributo y pagar solo la diferencia del valor del plan."
              },
              {
                q: "¿Qué incluye el servicio de telemedicina?",
                a: "Incluye videoconsultas con clínicos y pediatras las 24hs, receta digital aceptada en todas las farmacias y órdenes de estudios simples."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border border-secondary-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-secondary-50 font-medium text-secondary-900"
                >
                  {item.q}
                  <ChevronDown
                    className={`text-secondary-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-secondary-50 text-secondary-600 text-sm leading-relaxed border-t border-secondary-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-white">
                Bristol Medicine
              </span>
            </div>
            <p className="text-secondary-400 text-sm leading-relaxed">
              Cuidando la salud de los argentinos con compromiso y calidad
              médica desde hace más de 45 años.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Planes</h4>
            <ul className="space-y-2 text-sm text-secondary-400">
              <li>
                <a href="#" className="hover:text-white">
                  Plan Joven
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Plan Familiar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Plan Corporativo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-secondary-400">
              <li>0810-999-1234</li>
              <li>ventas@bristol.com.ar</li>
              <li>Sucursales</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-400">
              <li>
                <a href="#" className="hover:text-white">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Defensa del consumidor
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-secondary-800 pt-8 text-center text-xs text-secondary-500">
          © 2025 Bristol Medicine. Todos los derechos reservados. Superintencia
          de Servicios de Salud.
        </div>
      </footer>
    </div>
  );
};
