import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Copy,
  Check,
  BookOpen,
  Compass,
  Calendar,
  Users,
} from 'lucide-react';
import {
  HERO_IMAGE,
  PANORAMA_MAIN_STREET,
  PANORAMA_TWILIGHT,
  HERO_CONTENT,
  ADVANTAGES_CONTENT,
  PANORAMA_SECTIONS,
  PLANS_CONTENT,
  EXTRA_SERVICES,
  COMPARISON_ROWS,
  PLANNING_STEPS,
  TESTIMONIALS_CONTENT,
  BLOG_ARTICLES,
  FAQ_ITEMS,
  SERVICES_SUBMENU,
  CONTACT_CONFIG,
  BlogArticleItem,
  SubmenuItem,
} from './data/siteContent';
import { Navbar } from './components/Navbar';
import { EditorialImage } from './components/EditorialImage';
import { ArticleModal } from './components/ArticleModal';
import { ParisMagicLogo } from './components/ParisMagicLogo';

export default function App() {
  // Interactive state for Services Submenu filter
  const [serviceView, setServiceView] = useState<
    NonNullable<SubmenuItem['filterValue']>
  >('all');

  // Interactive state for Family Plan Recommender
  const [stayDuration, setStayDuration] = useState<'short' | 'medium' | 'long'>('medium');
  const [familyType, setFamilyType] = useState<'toddlers' | 'kids' | 'multigen'>('kids');
  const [needsParisCity, setNeedsParisCity] = useState<boolean>(false);

  // Interactive state for the 4 Planning Steps active spotlight
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Interactive state for Client Content Markers visibility (default false for clean presentation)
  const [showClientMarkers, setShowClientMarkers] = useState<boolean>(false);

  // Interactive state for Blog category filter and modal reader
  const [blogFilter, setBlogFilter] = useState<
    'Todos' | 'Planificación' | 'Gastronomía' | 'Atracciones en Familia'
  >('Todos');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticleItem | null>(null);

  // Interactive state for Accessible FAQ Accordions
  const [faqCategory, setFaqCategory] = useState<'Todas' | 'Servicio' | 'Reservas' | 'En el Parque'>(
    'Todas'
  );
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-2']);

  // Interactive state for Real Contact Request Builder (no fake reservation or fake form submission)
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<string>(
    'Plan Magia Completa (95 €)'
  );
  const [travelMonth, setTravelMonth] = useState<string>('Primavera / Verano');
  const [travelersSummary, setTravelersSummary] = useState<string>(
    '2 adultos y 2 niños'
  );
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);

  const navigateToSection = (sectionSelector: string) => {
    const id = sectionSelector.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlanAndScroll = (planName: string) => {
    setSelectedPlanForInquiry(planName);
    navigateToSection('#contacto');
  };

  // Compute recommended plan based on interactive family inputs
  const recommendedPlan = (() => {
    if (needsParisCity || stayDuration === 'long' || familyType === 'multigen') {
      return PLANS_CONTENT[2]; // Plan Étoile VIP
    }
    if (stayDuration === 'short' && familyType === 'kids') {
      return PLANS_CONTENT[0]; // Plan Esencial
    }
    return PLANS_CONTENT[1]; // Plan Magia Completa
  })();

  const filteredBlogArticles =
    blogFilter === 'Todos'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.category === blogFilter);

  const filteredFaqs =
    faqCategory === 'Todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === faqCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAllFaqs = () => {
    if (openFaqIds.length === filteredFaqs.length) {
      setOpenFaqIds([]);
    } else {
      setOpenFaqIds(filteredFaqs.map((f) => f.id));
    }
  };

  // Build real mailto link and clipboard text for honest contact action
  const inquiryMessageText = `Hola equipo de Paris Magic Plan,\n\nMe gustaría recibir información para planificar nuestro viaje a Disneyland Paris:\n- Modalidad de interés: ${selectedPlanForInquiry}\n- Época aproximada del viaje: ${travelMonth}\n- Composición familiar: ${travelersSummary}\n\nQuedo a la espera de los siguientes pasos. ¡Muchas gracias!`;

  const mailtoHref = `mailto:${CONTACT_CONFIG.emailPlaceholder}?subject=${encodeURIComponent(
    `Solicitud de planificación: ${selectedPlanForInquiry} — Paris Magic Plan`
  )}&body=${encodeURIComponent(inquiryMessageText)}`;

  const handleCopyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(inquiryMessageText);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = inquiryMessageText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 3000);
    }
  };

  const surfaceClasses = {
    white: 'bg-white border border-[#1E3264]/10',
    'pastel-blue': 'bg-[#EBF3FC]/85 border border-[#1E3264]/10',
    lavender: 'bg-[#F2EEFA]/85 border border-[#1E3264]/10',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#1E3264]">
      {/* Main Header & Accessible Submenu with Official Logo */}
      <Navbar
        onSelectServiceFilter={(filter) => setServiceView(filter)}
        onNavigateToSection={navigateToSection}
      />

      <main className="flex-grow">
        {/* =====================================================================
            1. HERO VISUAL DIFERENTE (Luminous Editorial Split & Official Logo)
           ===================================================================== */}
        <section
          id="inicio"
          className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#EBF3FC]/65 via-[#FAFBFD] to-[#FAFBFD]"
        >
          {/* Subtle decorative top accent line in Logo Pink & Gold */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EBF3FC] via-[#EB539F]/60 to-[#F2EEFA]"
          />

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Editorial top kicker */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-7 border-b border-[#1E3264]/10">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#42506B]">
                <span className="font-semibold text-[#EB539F]">Paris Magic Plan</span>
                <span aria-hidden="true">·</span>
                <span>{HERO_CONTENT.kicker}</span>
              </div>
            </div>

            {/* Main Hero Asymmetric Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Official Logo Emblem, Editorial Typography & Logo-Styled Buttons (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-3.5">
                  <ParisMagicLogo size={76} showWordmark={false} />
                  <div className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#EB539F]">
                      París & Disneyland Paris
                    </p>
                    <p className="font-serif text-lg font-semibold text-[#1E3264]">
                      Diseño de viajes familiares a medida
                    </p>
                  </div>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1E3264] leading-[1.08] tracking-tight text-balance">
                  {HERO_CONTENT.title}
                </h1>

                <p className="text-base sm:text-lg text-[#42506B] leading-relaxed">
                  {HERO_CONTENT.subtitle}
                </p>

                {/* Primary & Secondary CTAs using the Logo's Shape & Color */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigateToSection('#servicios')}
                    className="btn-logo-primary px-7 py-3.5 text-sm font-semibold"
                  >
                    <span>{HERO_CONTENT.primaryCta}</span>
                    <ArrowRight className="w-4 h-4 text-[#EB539F] group-hover:text-white" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigateToSection('#pasos')}
                    className="btn-logo-secondary px-7 py-3.5 text-sm font-semibold"
                  >
                    <span>{HERO_CONTENT.secondaryCta}</span>
                  </button>
                </div>

                {/* Unboxed quiet trust note */}
                <div className="pt-4 border-t border-[#1E3264]/10 text-xs text-[#42506B] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-[#1E3264]">Atención 100% personalizada</span>
                  <span aria-hidden="true">·</span>
                  <span>Rutas adaptadas con niños</span>
                  <span aria-hidden="true">·</span>
                  <span>Optimización de tiempos y reservas</span>
                </div>
              </div>

              {/* Right Column: Large High-Resolution 16:9 Visual Frame (7 cols) */}
              <div className="lg:col-span-7 space-y-3 px-1 sm:px-0">
                <EditorialImage
                  src={HERO_IMAGE}
                  alt="Familia contemplando el Castillo de Disneyland Paris al amanecer entre tonos azul pastel, lavanda y luz dorada"
                  priority={true}
                  containerClassName="relative aspect-[16/10] w-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#EBF3FC] border-2 border-[#1E3264] shadow-[0_0_0_2px_#ffffff,0_0_0_5px_#EB539F]"
                  className="w-full h-full object-cover"
                />

                {/* Caption Bar below Hero Photograph */}
                <div className="px-2 pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#42506B]">
                  <span className="font-serif italic text-sm text-[#1E3264]">
                    Disneyland Paris · Diseño de itinerarios familiares a medida
                  </span>
                  <span className="text-[#EB539F] font-semibold">
                    Identidad Paris Magic Plan · Experiencias en familia
                  </span>
                </div>
              </div>
            </div>

            {/* Key Quantitative Proof Bar (Unboxed with Hairline Dividers & Tabular Numerals) */}
            <div className="mt-14 pt-10 border-t border-[#1E3264]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HERO_CONTENT.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="sm:border-l first:border-l-0 border-[#EB539F]/40 sm:pl-6 first:pl-0"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#1E3264] tabular-nums">
                    {metric.value}
                  </div>
                  <p className="mt-1.5 text-sm text-[#42506B] leading-snug">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. SECCIÓN LUMINOSA — VENTAJAS (Asymmetric Bento Grid)
           ===================================================================== */}
        <section id="ventajas" className="py-20 md:py-28 bg-[#FAFBFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 mb-14">
              <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                <span>Ventajas Exclusivas</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#96702B]">Por qué planificar tu viaje con Paris Magic Plan</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E3264] leading-tight">
                Viajar a Disneyland Paris con todo pensado marca la diferencia entre hacer colas o vivir la magia
              </h2>
              <p className="text-base text-[#42506B] leading-relaxed">
                Cada decisión previa al viaje influye en vuestra experiencia: desde elegir el hotel adecuado hasta saber en qué minuto exacto cruzar Fantasyland o reservar vuestra mesa favorita.
              </p>
            </div>

            {/* Asymmetric Bento Grid (7 / 5 alternating spans) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {ADVANTAGES_CONTENT.map((adv) => {
                const spanClass =
                  adv.colSpan === 'wide' ? 'md:col-span-7' : 'md:col-span-5';
                return (
                  <article
                    key={adv.number}
                    className={`${spanClass} ${
                      surfaceClasses[adv.surface]
                    } rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-colors duration-150 hover:border-[#EB539F]/60`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between gap-4 border-b border-[#1E3264]/10 pb-4">
                        <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#EB539F] tabular-nums">
                          {adv.number}
                        </span>
                        <span className="text-xs text-[#42506B] text-right">{adv.kicker}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#1E3264] leading-snug">
                        {adv.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#42506B] leading-relaxed">
                        {adv.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#1E3264]/10 flex items-center justify-between gap-2 text-xs font-semibold text-[#1E3264]">
                      <span>Resultado para tu familia: {adv.highlight}</span>
                      <span className="text-[#EB539F]" aria-hidden="true">
                        ✦
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. FOTOGRAFÍA PANORÁMICA A PANTALLA COMPLETA #1 (Full-Bleed Interlude)
           ===================================================================== */}
        <section
          aria-label="Panorámica de Disneyland Paris por la mañana"
          className="relative w-full min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden"
        >
          <EditorialImage
            src={PANORAMA_MAIN_STREET}
            alt="Avenida principal inspirada en Main Street hacia el Castillo de Disneyland Paris bajo una luz matinal dorada y cielo azul pastel"
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
          />

          {/* Measured Dark Contrast Scrim for WCAG AA+ Legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/50 to-[#111827]/15"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="max-w-3xl space-y-5 text-white">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#EBF3FC] tracking-wide">
                <span>{PANORAMA_SECTIONS.first.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F9A8D4]">{PANORAMA_SECTIONS.first.caption}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-wide">
                {PANORAMA_SECTIONS.first.title}
              </h2>

              <p className="text-base sm:text-lg text-[#EBF3FC]/95 leading-relaxed max-w-2xl">
                {PANORAMA_SECTIONS.first.description}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => navigateToSection(PANORAMA_SECTIONS.first.ctaHref)}
                  className="btn-logo-secondary px-7 py-3.5 text-sm font-semibold"
                >
                  <span>{PANORAMA_SECTIONS.first.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#EB539F]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. SECCIÓN LUMINOSA — SERVICIOS, SUBMENÚ FUNCIONAL Y PRECIOS
           ===================================================================== */}
        <section
          id="servicios"
          className="py-20 md:py-28 bg-gradient-to-b from-[#FAFBFD] via-[#EBF3FC]/35 to-[#FAFBFD]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                  <span>Servicios, Planes y Tarifas</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#96702B]">Submenú interactivo de planificación</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E3264] leading-tight">
                  Elige el nivel de acompañamiento ideal para el viaje de tu familia
                </h2>
                <p className="text-base text-[#42506B] leading-relaxed">
                  Tanto si ya tienes tus entradas reservadas y buscas optimizar tus días en el parque, como si deseas que diseñemos tu viaje completo desde cero.
                </p>
              </div>

              {/* Interactive Submenu Filter Buttons with Logo Capsule Style */}
              <div
                role="tablist"
                aria-label="Submenú de visualización de servicios y precios"
                className="flex flex-wrap items-center gap-3 self-start"
              >
                {SERVICES_SUBMENU.map((sub) => {
                  const active = serviceView === sub.filterValue;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() =>
                        sub.filterValue && setServiceView(sub.filterValue)
                      }
                      className={`${
                        active ? 'btn-logo-tab-active' : 'btn-logo-tab'
                      } px-4 py-2 text-xs font-semibold`}
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* A. Core Planning Packages (Shown in 'all' and 'planes') */}
            {(serviceView === 'all' || serviceView === 'planes') && (
              <div className="space-y-6 mb-16">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3264]/10 pb-3">
                  <h3 className="font-serif text-2xl font-semibold text-[#1E3264]">
                    Planes Principales de Planificación
                  </h3>
                  {showClientMarkers && (
                    <span className="text-xs text-[#EB539F]">
                      [Marcador de Precios: Importes listos para confirmar o ajustar según tarifa vigente del cliente]
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {PLANS_CONTENT.map((plan) => (
                    <article
                      key={plan.id}
                      className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-colors duration-150 ${
                        plan.featured
                          ? 'bg-[#EBF3FC] border-2 border-[#1E3264] shadow-[0_0_0_3px_#ffffff,0_0_0_6px_#EB539F]'
                          : surfaceClasses[plan.surface]
                      }`}
                    >
                      <div className="space-y-6">
                        {/* Quiet 1-line text kicker */}
                        <div className="flex items-center justify-between gap-2 text-xs text-[#42506B] border-b border-[#1E3264]/10 pb-3">
                          <span className="font-semibold text-[#EB539F]">
                            {plan.featured
                              ? 'Modalidad Más Elegida · Recomendado'
                              : 'Planificación Personalizada'}
                          </span>
                          <span>Disneyland Paris</span>
                        </div>

                        <div>
                          <h4 className="font-serif text-3xl font-semibold text-[#1E3264]">
                            {plan.name}
                          </h4>
                          <p className="mt-2 text-sm text-[#42506B] leading-relaxed">
                            {plan.subtitle}
                          </p>
                        </div>

                        {/* Price Display with Tabular Numerals */}
                        <div className="pt-2 pb-4 border-b border-[#1E3264]/10">
                          <div className="flex items-baseline gap-2">
                            <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#1E3264] tabular-nums">
                              {plan.price}
                            </span>
                            <span className="text-xs text-[#42506B]">{plan.priceUnit}</span>
                          </div>
                          {showClientMarkers && (
                            <p className="mt-1.5 text-xs text-[#EB539F]">{plan.markerLabel}</p>
                          )}
                        </div>

                        <p className="text-sm text-[#1E3264] leading-relaxed">{plan.summary}</p>

                        {/* Feature Checklist */}
                        <div className="space-y-2.5">
                          <p className="text-xs font-semibold text-[#1E3264]">
                            Qué incluye este plan:
                          </p>
                          <ul className="space-y-2.5 text-sm text-[#42506B]">
                            {plan.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span
                                  className="text-[#EB539F] font-semibold select-none mt-0.5"
                                  aria-hidden="true"
                                >
                                  ✓
                                </span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-5 border-t border-[#1E3264]/10 space-y-5">
                        <div className="text-xs text-[#42506B]">
                          <span className="font-semibold text-[#1E3264]">Entregable: </span>
                          <span>{plan.deliverables}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleSelectPlanAndScroll(`${plan.name} (${plan.price})`)
                          }
                          className={`w-full py-3.5 px-6 text-sm font-semibold ${
                            plan.featured ? 'btn-logo-primary' : 'btn-logo-secondary'
                          }`}
                        >
                          <span>{plan.ctaLabel}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* B. Extra / A-La-Carte Services (Shown in 'all' and 'extras') */}
            {(serviceView === 'all' || serviceView === 'extras') && (
              <div className="space-y-6 mb-16">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3264]/10 pb-3">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1E3264]">
                      Servicios a la Carta y Módulos Especiales
                    </h3>
                    <p className="text-sm text-[#42506B]">
                      Opciones específicas para resolver dudas puntuales o ampliar tu viaje a la ciudad de París.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {EXTRA_SERVICES.map((extra) => (
                    <article
                      key={extra.id}
                      className="bg-white rounded-3xl p-7 border border-[#1E3264]/10 flex flex-col justify-between hover:border-[#EB539F]/60 transition-colors"
                    >
                      <div className="space-y-4">
                        <div className="flex items-baseline justify-between gap-2 border-b border-[#1E3264]/10 pb-3">
                          <span className="font-mono text-xs font-semibold text-[#EB539F] tabular-nums">
                            {extra.number} · {extra.durationOrScope}
                          </span>
                          <span className="font-serif text-2xl font-semibold text-[#1E3264] tabular-nums whitespace-nowrap">
                            {extra.price}
                          </span>
                        </div>

                        {showClientMarkers && (
                          <p className="text-xs text-[#EB539F]">{extra.markerLabel}</p>
                        )}

                        <h4 className="font-serif text-2xl font-semibold text-[#1E3264] leading-snug">
                          {extra.title}
                        </h4>

                        <p className="text-sm text-[#42506B] leading-relaxed">
                          {extra.description}
                        </p>

                        <ul className="space-y-1.5 pt-2 text-xs text-[#42506B]">
                          {extra.includedItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#EB539F]" aria-hidden="true">
                                ·
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-5 border-t border-[#1E3264]/10">
                        <button
                          type="button"
                          onClick={() =>
                            handleSelectPlanAndScroll(`${extra.title} (${extra.price})`)
                          }
                          className="w-full btn-logo-secondary py-2.5 px-5 text-xs font-semibold"
                        >
                          <span>Consultar disponibilidad</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#EB539F]" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* C. Comparison Table (Shown in 'all' and 'comparativa') */}
            {(serviceView === 'all' || serviceView === 'comparativa') && (
              <div className="mb-16 bg-white rounded-3xl border border-[#1E3264]/12 overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-[#1E3264]/10 bg-[#F2EEFA]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1E3264]">
                      Comparativa Detallada de Planes
                    </h3>
                    <p className="text-sm text-[#42506B]">
                      Revisa de un vistazo qué incluye cada modalidad de Paris Magic Plan.
                    </p>
                  </div>
                  <span className="text-xs text-[#EB539F] font-semibold">
                    Precios por familia · Sin comisiones ocultas
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#1E3264]/10 bg-[#FAFBFD] text-xs font-semibold text-[#1E3264]">
                        <th className="py-4 px-6 min-w-[240px]">Característica del Servicio</th>
                        <th className="py-4 px-6 tabular-nums">Plan Esencial (49 €)</th>
                        <th className="py-4 px-6 bg-[#EBF3FC]/60 text-[#1E3264] tabular-nums">
                          Plan Magia Completa (95 €)
                        </th>
                        <th className="py-4 px-6 tabular-nums">Plan Étoile VIP (165 €)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E3264]/8 text-sm">
                      {COMPARISON_ROWS.map((row, index) => (
                        <tr key={index} className="hover:bg-[#FAFBFD]">
                          <td className="py-4 px-6 font-semibold text-[#1E3264]">{row.feature}</td>
                          <td className="py-4 px-6 text-[#42506B] tabular-nums">{row.esencial}</td>
                          <td className="py-4 px-6 bg-[#EBF3FC]/35 font-semibold text-[#1E3264] tabular-nums">
                            {row.completa}
                          </td>
                          <td className="py-4 px-6 text-[#42506B] tabular-nums">{row.vip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* D. Interactive Plan Recommender Assistant (Shown in 'all' and 'recomendador') */}
            {(serviceView === 'all' || serviceView === 'recomendador') && (
              <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-r from-[#EBF3FC] via-white to-[#F2EEFA] border border-[#1E3264]/15">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-[#EB539F]">
                        Asistente Interactivo · Recomendador de Plan
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E3264] mt-1">
                        ¿No sabes qué modalidad encaja mejor con vuestro viaje?
                      </h3>
                      <p className="text-sm text-[#42506B] mt-1">
                        Selecciona las características de tu estancia para ver nuestra recomendación honesta:
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Control 1: Duration */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E3264] mb-2.5">
                          1. Duración prevista en Disneyland Paris:
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { id: 'short', label: '1 a 2 días' },
                            { id: 'medium', label: '3 a 4 días (Estancia media)' },
                            { id: 'long', label: '5 o más días' },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() =>
                                setStayDuration(opt.id as 'short' | 'medium' | 'long')
                              }
                              className={`${
                                stayDuration === opt.id
                                  ? 'btn-logo-tab-active'
                                  : 'btn-logo-tab'
                              } px-4 py-2 text-xs font-semibold`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Control 2: Family Profile */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E3264] mb-2.5">
                          2. Perfil de los viajeros:
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { id: 'toddlers', label: 'Con bebés o peques (0-5 años)' },
                            { id: 'kids', label: 'Con niños / adolescentes (6+ años)' },
                            { id: 'multigen', label: 'Grupo grande o abuelos + nietos' },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() =>
                                setFamilyType(opt.id as 'toddlers' | 'kids' | 'multigen')
                              }
                              className={`${
                                familyType === opt.id
                                  ? 'btn-logo-tab-active'
                                  : 'btn-logo-tab'
                              } px-4 py-2 text-xs font-semibold`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Control 3: Paris City Extension */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1E3264] mb-2.5">
                          3. ¿Queréis visitar también la ciudad de París (Torre Eiffel, Sena, Louvre)?
                        </label>
                        <div className="flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => setNeedsParisCity(false)}
                            className={`${
                              !needsParisCity ? 'btn-logo-tab-active' : 'btn-logo-tab'
                            } px-4 py-2 text-xs font-semibold`}
                          >
                            Solo parques Disneyland Paris
                          </button>
                          <button
                            type="button"
                            onClick={() => setNeedsParisCity(true)}
                            className={`${
                              needsParisCity ? 'btn-logo-tab-active' : 'btn-logo-tab'
                            } px-4 py-2 text-xs font-semibold`}
                          >
                            Sí, viaje combinado Disney + París
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Result Panel separated by hairline divider */}
                  <div className="lg:col-span-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#1E3264]/12 lg:pl-10 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#EB539F] font-semibold border-b border-[#1E3264]/10 pb-3">
                      <span>Modalidad recomendada para vosotros</span>
                      <span className="tabular-nums text-[#1E3264]">{recommendedPlan.price}</span>
                    </div>
                    <h4 className="font-serif text-3xl font-semibold text-[#1E3264]">
                      {recommendedPlan.name}
                    </h4>
                    <p className="text-sm text-[#42506B] leading-relaxed">
                      {recommendedPlan.summary}
                    </p>
                    <p className="text-xs text-[#1E3264]">
                      <span className="font-semibold">Por qué encaja: </span>
                      {recommendedPlan.recommendedFor}
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectPlanAndScroll(
                            `${recommendedPlan.name} (${recommendedPlan.price})`
                          )
                        }
                        className="w-full btn-logo-primary px-6 py-3.5 text-sm font-semibold"
                      >
                        <span>Preseleccionar {recommendedPlan.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            5. SECCIÓN LUMINOSA — LOS CUATRO PASOS DE PLANIFICACIÓN
           ===================================================================== */}
        <section id="pasos" className="py-20 md:py-28 bg-[#FAFBFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 mb-14">
              <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                <span>Metodología Paso a Paso</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#96702B]">Los 4 pasos de planificación</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E3264] leading-tight">
                Cuatro pasos claros para transformar la preparación en parte de la magia
              </h2>
              <p className="text-base text-[#42506B] leading-relaxed">
                Un proceso ordenado, transparente y sin agobios en el que siempre sabes cuál es el siguiente paso y qué documentos vas a recibir.
              </p>
            </div>

            {/* 4 Steps Architectural Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PLANNING_STEPS.map((step, index) => {
                const isSelected = activeStepIndex === index;
                return (
                  <article
                    key={step.stepNumber}
                    onClick={() => setActiveStepIndex(index)}
                    className={`cursor-pointer rounded-3xl p-7 flex flex-col justify-between transition-colors duration-150 ${
                      isSelected
                        ? 'bg-[#EBF3FC] border-2 border-[#1E3264] shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#EB539F]'
                        : surfaceClasses[step.surface]
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between border-b border-[#1E3264]/10 pb-4">
                        <span className="font-serif text-4xl font-semibold text-[#EB539F] tabular-nums">
                          {step.stepNumber}.
                        </span>
                        <span className="text-xs font-semibold text-[#42506B]">
                          Fase {step.stepNumber} de 04
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-[#EB539F]">{step.phaseLabel}</p>

                      <h3 className="font-serif text-2xl font-semibold text-[#1E3264] leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#42506B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#1E3264]/10 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-[#1E3264]">Tu parte: </span>
                        <span className="text-[#42506B]">{step.clientAction}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#EB539F]">Recibes: </span>
                        <span className="text-[#1E3264]">{step.ourDeliverable}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Interactive Step Detail Spotlight Bar */}
            <div className="mt-10 rounded-3xl p-6 sm:p-8 bg-[#F2EEFA]/75 border border-[#1E3264]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="text-xs font-semibold text-[#EB539F]">
                  Detalle activo · {PLANNING_STEPS[activeStepIndex].phaseLabel}
                </div>
                <h4 className="font-serif text-2xl font-semibold text-[#1E3264]">
                  {PLANNING_STEPS[activeStepIndex].subtitle}
                </h4>
                <p className="text-sm text-[#42506B]">
                  Entregable garantizado: {PLANNING_STEPS[activeStepIndex].ourDeliverable}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((prev) => (prev + 1) % PLANNING_STEPS.length)
                  }
                  className="btn-logo-secondary px-5 py-2.5 text-xs font-semibold"
                >
                  Ver siguiente paso ({((activeStepIndex + 1) % 4) + 1}/4)
                </button>
                <button
                  type="button"
                  onClick={() => navigateToSection('#contacto')}
                  className="btn-logo-primary px-6 py-2.5 text-xs font-semibold"
                >
                  Iniciar Paso 01 ahora
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. FOTOGRAFÍA PANORÁMICA A PANTALLA COMPLETA #2 (Twilight Castle)
           ===================================================================== */}
        <section
          aria-label="Panorámica nocturna del Castillo iluminado en Disneyland Paris"
          className="relative w-full min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden"
        >
          <EditorialImage
            src={PANORAMA_TWILIGHT}
            alt="Castillo de Disneyland Paris iluminado con luces doradas bajo un cielo crepuscular azul pastel y lavanda"
            containerClassName="absolute inset-0 w-full h-full"
            className="w-full h-full object-cover"
          />

          {/* Measured Dark Contrast Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/50 to-[#111827]/20"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="max-w-3xl space-y-5 text-white">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#F2EEFA] tracking-wide">
                <span>{PANORAMA_SECTIONS.second.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F9A8D4]">{PANORAMA_SECTIONS.second.caption}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-wide">
                {PANORAMA_SECTIONS.second.title}
              </h2>

              <p className="text-base sm:text-lg text-[#F2EEFA]/95 leading-relaxed max-w-2xl">
                {PANORAMA_SECTIONS.second.description}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => navigateToSection(PANORAMA_SECTIONS.second.ctaHref)}
                  className="btn-logo-secondary px-7 py-3.5 text-sm font-semibold"
                >
                  <span>{PANORAMA_SECTIONS.second.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#EB539F]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            7. SECCIÓN LUMINOSA — OPINIONES (Preparada para 4 Testimonios Reales)
           ===================================================================== */}
        <section
          id="opiniones"
          className="py-20 md:py-28 bg-gradient-to-b from-[#FAFBFD] via-[#F2EEFA]/45 to-[#FAFBFD]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                  <span>Experiencias Reales en Familia</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#96702B]">Sección preparada para 4 testimonios reales</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E3264] leading-tight">
                  Lo que cuentan las familias que han vivido Disneyland Paris con nuestro plan
                </h2>
                <p className="text-base text-[#42506B] leading-relaxed">
                  Estructura editorial en cuadrícula simétrica diseñada específicamente para albergar cuatro testimonios verificados del cliente con atribución completa.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowClientMarkers((prev) => !prev)}
                className="self-start btn-logo-secondary px-5 py-2.5 text-xs font-semibold"
              >
                {showClientMarkers
                  ? 'Modo actual: Con marcadores de cliente visibles'
                  : 'Modo actual: Vista limpia de presentación'}
              </button>
            </div>

            {/* 4 Testimonials Grid (2x2 on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {TESTIMONIALS_CONTENT.map((item) => (
                <article
                  key={item.id}
                  className={`${
                    surfaceClasses[item.surface]
                  } rounded-3xl p-7 sm:p-9 flex flex-col justify-between`}
                >
                  <div className="space-y-5">
                    {/* Unboxed Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1E3264]/10 text-xs text-[#42506B]">
                      <span className="font-mono font-semibold text-[#EB539F] tabular-nums">
                        {item.slotIndex}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#C59B52]" aria-hidden="true">
                          ★★★★★
                        </span>
                        <span className="font-semibold text-[#1E3264] tabular-nums">
                          {item.ratingText}
                        </span>
                      </div>
                    </div>

                    {/* Explicit Client Marker Notice when enabled */}
                    {showClientMarkers && (
                      <div className="pb-4 border-b border-dashed border-[#EB539F]/60 text-xs space-y-1">
                        <p className="font-semibold text-[#EB539F]">{item.markerCode}</p>
                        <p className="text-[#42506B]">{item.markerInstructions}</p>
                      </div>
                    )}

                    <h3 className="font-serif text-2xl font-semibold text-[#1E3264] leading-snug">
                      {item.headline}
                    </h3>

                    <p className="text-sm sm:text-base text-[#42506B] leading-relaxed">
                      {item.quoteBeforeAfter}
                    </p>
                  </div>

                  {/* Attribution Footer (Unboxed clean text with · separators) */}
                  <div className="mt-8 pt-4 border-t border-[#1E3264]/10 space-y-1">
                    <div className="font-serif text-lg font-semibold text-[#1E3264]">
                      {item.familyName}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#42506B]">
                      <span>{item.locationAndDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.familyProfile}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#EB539F]">{item.planUsed}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            8. SECCIÓN LUMINOSA — BLOQUE DE ARTÍCULOS DESTACADOS DEL BLOG
           ===================================================================== */}
        <section id="blog" className="py-20 md:py-28 bg-[#FAFBFD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                  <span>Blog y Guías Prácticas</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#96702B]">Artículos destacados sobre Disneyland Paris</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1E3264] leading-tight">
                  Consejos expertos para empezar a soñar y preparar vuestra visita
                </h2>
                <p className="text-base text-[#42506B] leading-relaxed">
                  Explora nuestras guías sobre horarios, restaurantes temáticos y trucos para viajar en familia a Disneyland Paris.
                </p>
              </div>

              {/* Interactive Blog Category Filter with Logo Button Style */}
              <div
                role="tablist"
                aria-label="Filtrar artículos del blog por temática"
                className="flex flex-wrap items-center gap-3 self-start"
              >
                {(
                  [
                    'Todos',
                    'Planificación',
                    'Gastronomía',
                    'Atracciones en Familia',
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={blogFilter === cat}
                    onClick={() => setBlogFilter(cat)}
                    className={`${
                      blogFilter === cat ? 'btn-logo-tab-active' : 'btn-logo-tab'
                    } px-4 py-2 text-xs font-semibold`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-3xl border border-[#1E3264]/10 overflow-hidden flex flex-col justify-between hover:border-[#EB539F]/60 transition-colors group"
                >
                  <div>
                    <EditorialImage
                      src={article.imagePath}
                      alt={article.imageAlt}
                      containerClassName="relative aspect-[4/3] w-full overflow-hidden bg-[#EBF3FC]"
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />

                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Clean unboxed metadata with · separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#42506B]">
                        <span className="font-semibold text-[#EB539F]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishDate}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{article.readTime}</span>
                      </div>

                      {showClientMarkers && (
                        <p className="text-xs text-[#EB539F]">{article.markerNote}</p>
                      )}

                      <h3 className="font-serif text-2xl font-semibold text-[#1E3264] leading-snug group-hover:text-[#EB539F] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-[#42506B] leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-7 pt-4 border-t border-[#1E3264]/10">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="w-full btn-logo-secondary py-2.5 px-5 text-xs font-semibold"
                    >
                      <BookOpen className="w-4 h-4 text-[#EB539F]" />
                      <span>Leer artículo completo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#EB539F]" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            9. SECCIÓN LUMINOSA — PREGUNTAS FRECUENTES (Acordeones Accesibles)
           ===================================================================== */}
        <section
          id="faq"
          className="py-20 md:py-28 bg-gradient-to-b from-[#FAFBFD] via-[#EBF3FC]/35 to-[#FAFBFD]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-[#EB539F] font-semibold">
                  <span>Preguntas Frecuentes (FAQ)</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#96702B]">Resolvemos tus dudas sobre Paris Magic Plan</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1E3264] leading-tight">
                  Todo lo que necesitas saber antes de empezar a planificar
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {(['Todas', 'Servicio', 'Reservas', 'En el Parque'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFaqCategory(cat)}
                    className={`${
                      faqCategory === cat ? 'btn-logo-tab-active' : 'btn-logo-tab'
                    } px-3.5 py-1.5 text-xs font-semibold`}
                  >
                    {cat}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={toggleAllFaqs}
                  className="btn-logo-secondary px-4 py-1.5 text-xs font-semibold"
                >
                  {openFaqIds.length === filteredFaqs.length
                    ? 'Contraer todas'
                    : 'Expandir todas'}
                </button>
              </div>
            </div>

            {/* Accessible Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIds.includes(faq.id);
                const panelId = `faq-panel-${faq.id}`;
                const buttonId = `faq-button-${faq.id}`;

                return (
                  <div
                    key={faq.id}
                    className={`rounded-3xl transition-colors duration-150 ${
                      isOpen
                        ? 'bg-white border-2 border-[#1E3264] shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#EB539F]'
                        : 'bg-white border border-[#1E3264]/12 hover:border-[#EB539F]/60'
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB539F] rounded-3xl"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-[#42506B]">
                            <span className="font-mono font-semibold text-[#EB539F] tabular-nums">
                              0{idx + 1}.
                            </span>
                            <span>Categoría: {faq.category}</span>
                          </div>
                          <span className="block font-serif text-xl sm:text-2xl font-semibold text-[#1E3264] leading-snug">
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-[#1E3264] shadow-[0_0_0_1.5px_#ffffff,0_0_0_3px_#EB539F] shrink-0 transition-transform duration-150 ${
                            isOpen
                              ? 'rotate-180 bg-[#1E3264] text-white'
                              : 'bg-white text-[#1E3264]'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-6 sm:px-8 sm:pb-7 pt-2 border-t border-[#1E3264]/10 space-y-3"
                      >
                        <p className="text-sm sm:text-base text-[#42506B] leading-relaxed">
                          {faq.answer}
                        </p>
                        <p className="text-xs text-[#EB539F] font-semibold">
                          Nota práctica: {faq.detailNote}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================================
            10. LLAMADA A LA ACCIÓN EMOCIONAL FINAL Y SOLICITUD DE CONTACTO REAL
           ===================================================================== */}
        <section
          id="contacto"
          className="py-20 md:py-28 bg-gradient-to-b from-[#EBF3FC]/50 via-[#F2EEFA]/60 to-[#FAFBFD] border-t border-[#1E3264]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border-2 border-[#1E3264] shadow-[0_0_0_3px_#ffffff,0_0_0_6px_#EB539F] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Emotional Value Statement & Direct Channels (6 cols) */}
                <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-[#1E3264] via-[#243B75] to-[#162347] text-white flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <ParisMagicLogo
                        size={56}
                        showWordmark={true}
                        wordmarkClassName="font-serif text-2xl font-semibold text-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#F9A8D4] tracking-wide">
                      <span>Comienza la cuenta atrás hacia la magia</span>
                      <span aria-hidden="true">·</span>
                      <span>Viajes en familia</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-wide">
                      Tus hijos solo serán pequeños una vez. Haz que vuestro viaje a Disneyland Paris sea inolvidable
                    </h2>

                    <p className="text-base text-[#EBF3FC]/90 leading-relaxed">
                      Déjanos acompañarte con una planificación artesanal, serena y pensada al milímetro para que en vuestro viaje solo haya espacio para la ilusión, las risas y los abrazos frente al Castillo.
                    </p>
                  </div>

                  {/* Direct Contact Channels & Marker Note */}
                  <div className="space-y-4 pt-6 border-t border-white/15 text-sm">
                    <div className="space-y-1">
                      <p className="text-xs text-[#F9A8D4] font-semibold">
                        Canales directos de atención al viajero:
                      </p>
                      <p className="text-white font-semibold">
                        Correo:{' '}
                        <a
                          href={mailtoHref}
                          className="underline decoration-[#EB539F] underline-offset-4 hover:text-[#F9A8D4] transition-colors"
                        >
                          {CONTACT_CONFIG.emailPlaceholder}
                        </a>
                      </p>
                      <p className="text-[#EBF3FC]/85">
                        Teléfono / WhatsApp:{' '}
                        <a
                          href={`tel:${CONTACT_CONFIG.phonePlaceholder.replace(/\s+/g, '')}`}
                          className="underline decoration-[#EB539F] underline-offset-4 hover:text-[#F9A8D4] transition-colors tabular-nums"
                        >
                          {CONTACT_CONFIG.phonePlaceholder}
                        </a>
                      </p>
                      <p className="text-xs text-[#EBF3FC]/70">{CONTACT_CONFIG.scheduleText}</p>
                    </div>

                    {showClientMarkers && (
                      <p className="text-xs text-[#F9A8D4]/90 border-t border-white/10 pt-3">
                        {CONTACT_CONFIG.markerNotice}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column: Honest Functional Request Preparer (6 cols) */}
                <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 bg-white">
                  <div className="space-y-2 border-b border-[#1E3264]/10 pb-4">
                    <p className="text-xs font-semibold text-[#EB539F]">
                      Solicitud de Planificación · Acción Directa y Funcional
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1E3264]">
                      Prepara tu consulta personalizada en 30 segundos
                    </h3>
                    <p className="text-xs text-[#42506B]">
                      Selecciona los detalles de vuestro viaje para abrir directamente tu correo con la solicitud lista o copiar el resumen para WhatsApp.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Selector 1: Plan */}
                    <div>
                      <label
                        htmlFor="plan-select"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1E3264] mb-1.5"
                      >
                        <Compass className="w-3.5 h-3.5 text-[#EB539F]" />
                        <span>Modalidad o servicio de interés:</span>
                      </label>
                      <select
                        id="plan-select"
                        value={selectedPlanForInquiry}
                        onChange={(e) => setSelectedPlanForInquiry(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm text-[#1E3264] bg-[#FAFBFD] border border-[#1E3264]/20 rounded-full focus:outline-2 focus:outline-[#EB539F]"
                      >
                        <option value="Plan Esencial (49 €)">Plan Esencial (49 €)</option>
                        <option value="Plan Magia Completa (95 €)">
                          Plan Magia Completa (95 € · Más elegido)
                        </option>
                        <option value="Plan Étoile VIP (165 €)">Plan Étoile VIP (165 €)</option>
                        <option value="Sesión de Asesoría Express 1 a 1 (39 €)">
                          Sesión de Asesoría Express 1 a 1 (39 €)
                        </option>
                        <option value="Estrategia y Guía de Reservas Gastronómicas (29 €)">
                          Estrategia y Guía de Reservas Gastronómicas (29 €)
                        </option>
                        <option value="Módulo Extensión: París en Familia (45 €)">
                          Módulo Extensión: París en Familia (45 €)
                        </option>
                      </select>
                    </div>

                    {/* Selector 2: Season / Month */}
                    <div>
                      <label
                        htmlFor="season-select"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1E3264] mb-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#EB539F]" />
                        <span>Época o temporada prevista del viaje:</span>
                      </label>
                      <select
                        id="season-select"
                        value={travelMonth}
                        onChange={(e) => setTravelMonth(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm text-[#1E3264] bg-[#FAFBFD] border border-[#1E3264]/20 rounded-full focus:outline-2 focus:outline-[#EB539F]"
                      >
                        <option value="Primavera / Verano">Primavera / Verano</option>
                        <option value="Temporada de Halloween (Octubre - Noviembre)">
                          Temporada de Halloween (Octubre - Noviembre)
                        </option>
                        <option value="Temporada de Navidad (Noviembre - Enero)">
                          Temporada de Navidad (Noviembre - Enero)
                        </option>
                        <option value="Invierno / Fechas por definir">
                          Invierno / Fechas aún por definir
                        </option>
                      </select>
                    </div>

                    {/* Selector 3: Family Composition */}
                    <div>
                      <label
                        htmlFor="family-input"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1E3264] mb-1.5"
                      >
                        <Users className="w-3.5 h-3.5 text-[#EB539F]" />
                        <span>Composición familiar y edades de los niños:</span>
                      </label>
                      <input
                        id="family-input"
                        type="text"
                        value={travelersSummary}
                        onChange={(e) => setTravelersSummary(e.target.value)}
                        placeholder="Ej. 2 adultos y 2 niños (5 y 8 años)"
                        className="w-full px-4 py-2.5 text-sm text-[#1E3264] bg-[#FAFBFD] border border-[#1E3264]/20 rounded-full focus:outline-2 focus:outline-[#EB539F]"
                      />
                    </div>

                    {/* Live Preview of Generated Message */}
                    <div className="py-4 border-t border-b border-[#1E3264]/10 space-y-1.5">
                      <p className="text-xs font-semibold text-[#1E3264]">
                        Vista previa de tu mensaje de contacto:
                      </p>
                      <pre className="text-xs text-[#42506B] whitespace-pre-wrap font-sans leading-relaxed">
                        {inquiryMessageText}
                      </pre>
                    </div>

                    {/* Functional Action Buttons with Logo Capsule Shape & Colors */}
                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <a
                        href={mailtoHref}
                        className="flex-1 btn-logo-primary px-6 py-3.5 text-sm font-semibold"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Redactar correo con estos datos</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyInquiry}
                        className="btn-logo-secondary px-6 py-3.5 text-sm font-semibold"
                      >
                        {copiedToClipboard ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-700" />
                            <span>Texto copiado al portapapeles</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#EB539F]" />
                            <span>Copiar resumen para WhatsApp</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          11. QUIET EDITORIAL FOOTER WITH OFFICIAL LOGO
         ===================================================================== */}
      <footer className="bg-white border-t border-[#1E3264]/10 py-14 text-sm text-[#42506B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('#inicio');
                }}
                className="inline-flex items-center"
              >
                <ParisMagicLogo size={54} showWordmark={true} />
              </a>
              <p className="text-sm text-[#42506B] max-w-sm leading-relaxed">
                Planificación personalizada de viajes y experiencias familiares en Disneyland Paris. Diseño de rutas a medida, estrategia gastronómica y acompañamiento experto.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2.5">
              <p className="font-semibold text-[#1E3264] text-xs">Navegación Principal</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#inicio" className="hover:text-[#EB539F] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#ventajas" className="hover:text-[#EB539F] transition-colors">
                    Ventajas
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-[#EB539F] transition-colors">
                    Servicios y Precios
                  </a>
                </li>
                <li>
                  <a href="#pasos" className="hover:text-[#EB539F] transition-colors">
                    Los 4 Pasos
                  </a>
                </li>
                <li>
                  <a href="#opiniones" className="hover:text-[#EB539F] transition-colors">
                    Opiniones de Familias
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#EB539F] transition-colors">
                    Blog y Guías
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#EB539F] transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2.5">
              <p className="font-semibold text-[#1E3264] text-xs">
                Submenú · Planes de Planificación
              </p>
              <ul className="space-y-2 text-xs">
                {SERVICES_SUBMENU.map((sub) => (
                  <li key={sub.id}>
                    <button
                      type="button"
                      onClick={() => {
                        if (sub.filterValue) setServiceView(sub.filterValue);
                        navigateToSection(sub.targetSection);
                      }}
                      className="hover:text-[#EB539F] text-left transition-colors"
                    >
                      {sub.label} — {sub.description}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E3264]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#42506B]">
            <p>
              © {new Date().getFullYear()} Paris Magic Plan. Todos los derechos reservados. Servicio independiente de planificación de viajes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowClientMarkers((prev) => !prev)}
                className="btn-logo-tab px-4 py-1.5 text-xs font-semibold"
              >
                {showClientMarkers
                  ? 'Ocultar marcadores de contenido'
                  : 'Mostrar marcadores de contenido'}
              </button>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('#contacto');
                }}
                className="btn-logo-primary px-4 py-1.5 text-xs font-semibold"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Blog Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectPlanFromArticle={() => navigateToSection('#servicios')}
      />
    </div>
  );
}
