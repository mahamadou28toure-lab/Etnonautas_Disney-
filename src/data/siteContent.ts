export interface SubmenuItem {
  id: string;
  label: string;
  description: string;
  targetSection: string;
  filterValue?: 'all' | 'planes' | 'extras' | 'comparativa' | 'recomendador';
}

export interface AdvantageItem {
  number: string;
  kicker: string;
  title: string;
  description: string;
  highlight: string;
  surface: 'white' | 'pastel-blue' | 'lavender';
  colSpan: 'wide' | 'narrow';
}

export interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceUnit: string;
  markerLabel: string;
  recommendedFor: string;
  featured?: boolean;
  surface: 'white' | 'pastel-blue' | 'lavender';
  summary: string;
  features: string[];
  deliverables: string;
  ctaLabel: string;
}

export interface ExtraServiceItem {
  id: string;
  number: string;
  title: string;
  price: string;
  markerLabel: string;
  durationOrScope: string;
  description: string;
  includedItems: string[];
}

export interface PlanningStepItem {
  stepNumber: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  description: string;
  clientAction: string;
  ourDeliverable: string;
  surface: 'white' | 'pastel-blue' | 'lavender';
}

export interface TestimonialItem {
  id: string;
  slotIndex: string;
  markerCode: string;
  markerInstructions: string;
  familyName: string;
  locationAndDate: string;
  familyProfile: string;
  planUsed: string;
  ratingText: string;
  headline: string;
  quoteBeforeAfter: string;
  surface: 'white' | 'pastel-blue' | 'lavender';
}

export interface BlogArticleItem {
  id: string;
  category: 'Planificación' | 'Gastronomía' | 'Atracciones en Familia';
  publishDate: string;
  readTime: string;
  markerNote: string;
  title: string;
  excerpt: string;
  imagePath: string;
  imageAlt: string;
  keyTakeaways: string[];
  fullContentSections: {
    heading: string;
    body: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: 'Servicio' | 'Reservas' | 'En el Parque';
  question: string;
  answer: string;
  detailNote: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_disneyland_family_1791448790088.jpg';
export const PANORAMA_MAIN_STREET = '/src/assets/images/panorama_main_street_magic_1791448804179.jpg';
export const PANORAMA_TWILIGHT = '/src/assets/images/panorama_twilight_illuminations_1791448815716.jpg';
export const BLOG_DINING_IMAGE = '/src/assets/images/blog_dining_experiences_1791448836039.jpg';
export const BLOG_ATTRACTIONS_IMAGE = '/src/assets/images/blog_family_attractions_1791448849975.jpg';

export const MAIN_MENU = [
  { label: 'Servicios', href: '#servicios', hasSubmenu: true },
  { label: 'Ventajas', href: '#ventajas', hasSubmenu: false },
  { label: 'Pasos', href: '#pasos', hasSubmenu: false },
  { label: 'Opiniones', href: '#opiniones', hasSubmenu: false },
  { label: 'Blog', href: '#blog', hasSubmenu: false },
  { label: 'FAQ', href: '#faq', hasSubmenu: false, hideBelowXl: true },
];

export const SERVICES_SUBMENU: SubmenuItem[] = [
  {
    id: 'sub-todos',
    label: 'Visión General',
    description: 'Todos los planes y servicios de organización a medida',
    targetSection: '#servicios',
    filterValue: 'all',
  },
  {
    id: 'sub-planes',
    label: 'Planes de Viaje',
    description: 'Esencial, Magia Completa y Concierge VIP para familias',
    targetSection: '#servicios',
    filterValue: 'planes',
  },
  {
    id: 'sub-extras',
    label: 'Servicios a la Carta',
    description: 'Asesoría express, reservas gastronómicas y extensión a París',
    targetSection: '#servicios',
    filterValue: 'extras',
  },
  {
    id: 'sub-comparativa',
    label: 'Tabla Comparativa',
    description: 'Detalle punto por punto de qué incluye cada modalidad',
    targetSection: '#servicios',
    filterValue: 'comparativa',
  },
  {
    id: 'sub-recomendador',
    label: 'Asistente de Elección',
    description: 'Descubre qué plan se adapta mejor a tu familia y estancia',
    targetSection: '#servicios',
    filterValue: 'recomendador',
  },
];

export const HERO_CONTENT = {
  kicker: 'Planificación especializada en Disneyland Paris · Experiencias familiares a medida',
  title: 'La magia de Disneyland Paris, diseñada paso a paso para tu familia',
  subtitle:
    'Transformamos la complejidad de organizar un viaje a Disneyland Paris en una experiencia serena, luminosa y sin colas innecesarias. Diseñamos itinerarios personalizados, estrategia de reservas y rutas pensadas para el ritmo real de los tuyos.',
  primaryCta: 'Explorar planes y precios',
  secondaryCta: 'Descubrir los 4 pasos',
  editorialCaption:
    'Propuesta visual luminosa · Identidad en blanco alabastro, azul pastel, lavanda suave y detalles dorados',
  metrics: [
    {
      value: '100%',
      label: 'Itinerarios a medida según edades y preferencias',
    },
    {
      value: '4 Pasos',
      label: 'Metodología clara desde la idea hasta el parque',
    },
    {
      value: '-45%',
      label: 'Reducción estimada en tiempos de espera en colas',
    },
    {
      value: '+500',
      label: 'Familias acompañadas en su viaje a Disneyland Paris',
    },
  ],
};

export const ADVANTAGES_CONTENT: AdvantageItem[] = [
  {
    number: '01.',
    kicker: 'Tranquilidad desde el primer día · Ahorro de tiempo',
    title: 'Olvídate de pasar semanas comparando foros, mapas y horarios cambiantes',
    description:
      'Organizar Disneyland Paris por libre requiere decenas de horas de investigación sobre temporadas, pases, alturas mínimas y cierres programados. Sintetizamos toda esa información en una hoja de ruta clara, cálida y lista para disfrutar.',
    highlight: 'Más de 25 horas de búsqueda ahorradas por familia',
    surface: 'white',
    colSpan: 'wide',
  },
  {
    number: '02.',
    kicker: 'Estrategia en ambos parques · Cero estrés',
    title: 'Optimización real de colas, Extra Magic Time y Disney Premier Access',
    description:
      'Te indicamos exactamente en qué orden recorrer Disneyland Park y Walt Disney Studios (Disney Adventure World), cuándo aprovechar la hora mágica extra y en qué atracciones concretas compensa o no invertir en pases rápidos.',
    highlight: 'Rutas horarias probadas en temporada alta y baja',
    surface: 'pastel-blue',
    colSpan: 'narrow',
  },
  {
    number: '03.',
    kicker: 'Gastronomía y magia · Mesas aseguradas',
    title: 'Selección y estrategia para restaurantes temáticos y comidas con personajes',
    description:
      'Las mesas en restaurantes icónicos como Bistrot Chez Rémy, Auberge de Cendrillon o Royal Banquet se agotan meses antes. Definimos tu estrategia gastronómica según vuestro régimen de pensión y gustos.',
    highlight: 'Guía de reserva anticipada y alternativas sin reserva',
    surface: 'lavender',
    colSpan: 'narrow',
  },
  {
    number: '04.',
    kicker: 'Diseño empático · Viajes con niños y multigeneracionales',
    title: 'Un ritmo pensado para la energía real de tu familia, sin agotamiento',
    description:
      'No viaja igual una familia con un bebé de 2 años que una con niños de 9 o abuelos. Incluimos pausas estratégicas, zonas de descanso, uso de Baby Switch, alquiler de carritos y ubicación de los mejores lugares para ver las cabalgatas y el espectáculo nocturno.',
    highlight: 'Adaptado a edades, alturas e ilusiones de cada miembro',
    surface: 'white',
    colSpan: 'wide',
  },
  {
    number: '05.',
    kicker: 'Inversión inteligente · Presupuesto transparente',
    title: 'Elección honesta de hotel, entradas y planes de comidas sin sobrecostes',
    description:
      'Analizamos si a vuestra familia le conviene más alojarse en un Hotel Disney oficial, en un hotel asociado o cerca de Val d’Europe, y calculamos si el plan de comidas os supone un ahorro real o un gasto innecesario.',
    highlight: 'Independencia total centrada en vuestro presupuesto',
    surface: 'pastel-blue',
    colSpan: 'wide',
  },
  {
    number: '06.',
    kicker: 'Cercanía humana · Antes y durante tu estancia',
    title: 'Acompañamiento experto para resolver cada duda hasta tu regreso',
    description:
      'No recibes un documento frío y genérico. Tienes a un especialista en Disneyland Paris a tu lado para ajustar el plan si cambian los horarios de los espectáculos o si surge cualquier imprevisto antes de viajar.',
    highlight: 'Atención cercana y personalizada en español',
    surface: 'lavender',
    colSpan: 'narrow',
  },
];

export const PANORAMA_SECTIONS = {
  first: {
    kicker: 'La experiencia de caminar hacia el Castillo sin prisas ni incertidumbre',
    title: 'Cada minuto en el parque cuenta cuando viajas con las personas que más quieres',
    description:
      'Nuestra misión en Paris Magic Plan es que tu única preocupación al cruzar Main Street, U.S.A. sea mirar la cara de ilusión de tus hijos. Nosotros nos ocupamos de la logística, los tiempos y los secretos detrás de cada rincón.',
    ctaLabel: 'Ver modalidades de planificación',
    ctaHref: '#servicios',
    caption: 'Fotografía panorámica · Ambiente matinal en Disneyland Paris',
  },
  second: {
    kicker: 'Cuando cae la tarde y el cielo se tiñe de lavanda y oro',
    title: 'Recuerdos familiares que permanecen mucho después de que se apaguen las luces del Castillo',
    description:
      'Sabemos dónde situarte para contemplar los drones y fuegos artificiales sin agobios, a qué hora cenar para no perderte el espectáculo nocturno y cómo cerrar cada jornada con una sonrisa.',
    ctaLabel: 'Leer opiniones de familias',
    ctaHref: '#opiniones',
    caption: 'Fotografía panorámica · Iluminaciones nocturnas en familia',
  },
};

export const PLANS_CONTENT: PlanItem[] = [
  {
    id: 'plan-esencial',
    name: 'Plan Esencial',
    subtitle: 'Hoja de ruta estratégica para familias que ya tienen su reserva de hotel y entradas',
    price: '49 €',
    priceUnit: 'por viaje / familia',
    markerLabel: 'Marcador de precio: Confirmar tarifa oficial Plan Esencial con el cliente',
    recommendedFor: 'Estancias de 1 a 2 días o viajeros que buscan optimizar sus rutas en los parques',
    featured: false,
    surface: 'white',
    summary:
      'La base perfecta para recorrer Disneyland Park y Walt Disney Studios con orden, evitando los cuellos de botella habituales y aprovechando cada franja horaria.',
    features: [
      'Cuestionario inicial de perfil familiar, edades, alturas y preferencias',
      'Itinerario personalizado día por día para hasta 3 días de parques',
      'Orden óptimo de atracciones por mañana, tarde y noche',
      'Guía práctica de uso de la App oficial de Disneyland Paris y Single Rider',
      'Recomendación de restaurantes de comida rápida (Quick Service) por zona',
      'Consejos de ubicación para cabalgatas y espectáculo nocturno',
    ],
    deliverables: 'Dossier digital en PDF interactivo + 1 revisión de ajustes',
    ctaLabel: 'Solicitar Plan Esencial',
  },
  {
    id: 'plan-magia-completa',
    name: 'Plan Magia Completa',
    subtitle: 'Nuestra planificación integral más solicitada para vivir un viaje redondo y sin estrés',
    price: '95 €',
    priceUnit: 'por viaje / familia',
    markerLabel: 'Marcador de precio: Confirmar tarifa oficial Plan Magia Completa con el cliente',
    recommendedFor: 'Familias en estancias de 3 a 4 días que desean asesoría desde cero y reservas',
    featured: true,
    surface: 'pastel-blue',
    summary:
      'Abarca desde la elección del mejor alojamiento y entradas hasta el diseño minucioso de cada jornada, estrategia gastronómica y soporte continuo antes de viajar.',
    features: [
      'Todo lo incluido en el Plan Esencial, ampliado hasta 5 días de estancia',
      'Estudio comparativo de Hotel Disney vs. Hotel Asociado y planes de comidas',
      'Sesión de asesoría personalizada por videollamada (45 minutos)',
      'Estrategia completa de reservas de restaurantes de mesa y comidas con personajes',
      'Planificación de encuentros con personajes, espectáculos teatrales y horarios',
      'Guía de traslados desde los aeropuertos de París (CDG, Orly o Beauvais)',
      'Soporte directo por WhatsApp / Email durante los 15 días previos al viaje',
    ],
    deliverables: 'Dossier Paris Magic Plan a medida + Videollamada + Soporte previo',
    ctaLabel: 'Elegir Plan Magia Completa',
  },
  {
    id: 'plan-vip-medida',
    name: 'Plan Étoile VIP',
    subtitle: 'Acompañamiento exclusivo y diseño de viaje combinado Disneyland Paris + París ciudad',
    price: '165 €',
    priceUnit: 'por viaje / familia',
    markerLabel: 'Marcador de precio: Confirmar tarifa oficial Plan VIP con el cliente',
    recommendedFor: 'Viajes especiales, estancias de 4+ días, grupos multigeneracionales o combinados con París',
    featured: false,
    surface: 'lavender',
    summary:
      'Para las familias que quieren delegar toda la planificación de principio a fin, incluyendo días de visita a París (Torre Eiffel, Sena, Louvre con niños) y asistencia durante el viaje.',
    features: [
      'Todo lo incluido en el Plan Magia Completa sin límite de días',
      '2 sesiones privadas de planificación y revisión por videollamada',
      'Itinerario combinado a medida: Disneyland Paris + visita familiar a París ciudad',
      'Seguimiento activo de apertura de agenda para reservas difíciles y alertas',
      'Plan B detallado en caso de lluvia, frío intenso o cierres imprevistos',
      'Asistencia prioritaria por WhatsApp en tiempo real durante los días del viaje',
    ],
    deliverables: 'Concierge completo + Dossier Maestro + Asistencia en destino',
    ctaLabel: 'Solicitar Plan Étoile VIP',
  },
];

export const EXTRA_SERVICES: ExtraServiceItem[] = [
  {
    id: 'extra-asesoria',
    number: 'S01',
    title: 'Sesión de Asesoría Express 1 a 1',
    price: '39 €',
    markerLabel: 'Marcador: Confirmar tarifa sesión suelta',
    durationOrScope: '60 minutos por videollamada + resumen escrito',
    description:
      '¿Ya tienes tu viaje organizado pero necesitas que un experto revise tu plan, resuelva tus dudas sobre entradas, Premier Access o comidas y te dé trucos clave?',
    includedItems: [
      'Auditoría en directo de tus reservas actuales',
      'Resolución de dudas específicas de tu familia',
      'Envío posterior de resumen con recomendaciones accionables',
    ],
  },
  {
    id: 'extra-gastronomia',
    number: 'S02',
    title: 'Estrategia y Guía de Reservas Gastronómicas',
    price: '29 €',
    markerLabel: 'Marcador: Confirmar tarifa módulo gastronómico',
    durationOrScope: 'Plan de comidas + selección de restaurantes',
    description:
      'Selección personalizada de restaurantes de mesa, buffet y comida rápida según alergias, presupuesto y personajes favoritos, con instrucciones exactas de reserva.',
    includedItems: [
      'Cálculo de rentabilidad de Media Pensión / Pensión Completa',
      'Hoja de ruta de restaurantes por parque y hotel',
      'Opciones para intolerancias alimentarias y menús infantiles',
    ],
  },
  {
    id: 'extra-paris',
    number: 'S03',
    title: 'Módulo Extensión: París en Familia (1 a 3 días)',
    price: '45 €',
    markerLabel: 'Marcador: Confirmar tarifa extensión París',
    durationOrScope: 'Suplemento para añadir días en la ciudad de París',
    description:
      'Combina la magia del parque con los imprescindibles de París adaptados a niños: crucero por el Sena, Torre Eiffel sin colas, Montmartre y transporte sencillo en RER/Metro.',
    includedItems: [
      'Rutas familiares por París conectadas con Marne-la-Vallée',
      'Guía de billetes de transporte y entradas a monumentos',
      'Recomendación de cafeterías y brasseries cómodas para ir con niños',
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    feature: 'Cuestionario inicial y estudio del perfil familiar',
    esencial: 'Incluido',
    completa: 'Incluido',
    vip: 'Incluido',
  },
  {
    feature: 'Itinerario personalizado día a día en los parques',
    esencial: 'Hasta 3 días',
    completa: 'Hasta 5 días',
    vip: 'Días ilimitados',
  },
  {
    feature: 'Asesoría de elección de Hotel y Planes de Comidas',
    esencial: 'Guía base',
    completa: 'Estudio a medida',
    vip: 'Estudio completo + París',
  },
  {
    feature: 'Estrategia de restaurantes y comidas con personajes',
    esencial: 'Quick Service',
    completa: 'Completa (Mesa y Buffet)',
    vip: 'Prioritaria con seguimiento',
  },
  {
    feature: 'Sesiones por videollamada incluidas',
    esencial: '—',
    completa: '1 sesión (45 min)',
    vip: '2 sesiones privadas',
  },
  {
    feature: 'Planificación de visita a la ciudad de París',
    esencial: 'Opcional',
    completa: 'Opcional',
    vip: 'Incluido a medida',
  },
  {
    feature: 'Soporte directo por WhatsApp para dudas',
    esencial: 'Entrega y 1 revisión',
    completa: '15 días antes del viaje',
    vip: 'Antes y durante el viaje',
  },
];

export const PLANNING_STEPS: PlanningStepItem[] = [
  {
    stepNumber: '01',
    phaseLabel: 'Paso 01 · Escucha y Diagnóstico',
    title: 'Conocemos a tu familia, vuestras fechas y vuestra mayor ilusión',
    subtitle: 'Todo gran viaje comienza entendiendo quiénes sois y cómo os gusta viajar.',
    description:
      'Completáis nuestro cuestionario mágico detallado (o nos vemos en la primera sesión) para conocer las edades de los niños, sus personajes favoritos, si buscáis adrenalina o magia tranquila, y vuestro presupuesto objetivo.',
    clientAction: 'Completas el perfil de tu familia en 5 minutos',
    ourDeliverable: 'Análisis de viabilidad, mejores fechas y propuesta de estructura de estancia',
    surface: 'white',
  },
  {
    stepNumber: '02',
    phaseLabel: 'Paso 02 · Base del Viaje y Reservas Clave',
    title: 'Definimos alojamiento, entradas, traslados y mesas de restaurantes',
    subtitle: 'Aseguramos los pilares del viaje antes de que se agoten las plazas más demandadas.',
    description:
      'Te guiamos paso a paso para elegir la combinación óptima de hotel y entradas, y trazamos el calendario de bloqueo de restaurantes temáticos, experiencias con princesas o personajes y transporte desde el aeropuerto.',
    clientAction: 'Confirmas las opciones recomendadas con total seguridad',
    ourDeliverable: 'Hoja de reservas estratégicas y calendario de hitos previos al viaje',
    surface: 'pastel-blue',
  },
  {
    stepNumber: '03',
    phaseLabel: 'Paso 03 · Diseño Artesanal del Itinerario',
    title: 'Creamos tu Paris Magic Plan día por día, hora a hora y sin agobios',
    subtitle: 'Un documento visual, claro y elegante que podrás llevar en tu móvil o impreso.',
    description:
      'Diseñamos el recorrido diario por Disneyland Park y Walt Disney Studios optimizando distancias, tiempos de espera, horarios de cabalgatas, pausas de descanso y trucos exclusivos para disfrutar el doble caminando la mitad.',
    clientAction: 'Revisas tu dossier personalizado y ajustamos cualquier detalle',
    ourDeliverable: 'Dossier Paris Magic Plan definitivo (PDF interactivo + mapas de ruta)',
    surface: 'lavender',
  },
  {
    stepNumber: '04',
    phaseLabel: 'Paso 04 · Preparativos Finales y Magia en Destino',
    title: 'Repaso final antes de volar y acompañamiento para que solo disfrutéis',
    subtitle: 'Llegas al parque sabiendo exactamente qué hacer desde el primer minuto.',
    description:
      'Días antes de vuestra salida revisamos los horarios oficiales definitivos publicados por Disneyland Paris, comprobamos la previsión meteorológica, repasamos el equipaje recomendado y quedamos a vuestra disposición.',
    clientAction: 'Haces las maletas con tranquilidad e ilusión',
    ourDeliverable: 'Actualización de horarios de última hora y asistencia según tu plan',
    surface: 'white',
  },
];

export const TESTIMONIALS_CONTENT: TestimonialItem[] = [
  {
    id: 'testimonio-1',
    slotIndex: 'Testimonio Real 01 / 04',
    markerCode: '[Marcador: Testimonio Real #1 — Sustituir por nombre, foto/datos y reseña real del cliente]',
    markerInstructions:
      'Espacio reservado para el primer testimonio verificado del cliente. Incluye nombre de la familia, ciudad de origen, fechas del viaje, modalidad contratada y cita textual.',
    familyName: 'Familia García-Mendoza',
    locationAndDate: 'Madrid · Viaje de 4 días en Primavera',
    familyProfile: '2 adultos y 2 niños (4 y 7 años)',
    planUsed: 'Plan Magia Completa',
    ratingText: '5.0 / 5 · Valoración familiar',
    headline: '«Pasamos de estar abrumados con tanta información a disfrutar cada minuto sin hacer una sola cola de más de 20 minutos»',
    quoteBeforeAfter:
      'Antes de contactar con Paris Magic Plan teníamos mil pestañas abiertas y miedo de no llegar a todo con dos niños pequeños. Gracias al itinerario día a día pudimos desayunar con personajes, subir a todas nuestras atracciones favoritas y descansar justo cuando los peques lo necesitaban.',
    surface: 'white',
  },
  {
    id: 'testimonio-2',
    slotIndex: 'Testimonio Real 02 / 04',
    markerCode: '[Marcador: Testimonio Real #2 — Sustituir por nombre, foto/datos y reseña real del cliente]',
    markerInstructions:
      'Espacio reservado para el segundo testimonio verificado del cliente. Estructura preparada para destacar el ahorro de tiempo y éxito en reservas gastronómicas.',
    familyName: 'Laura, Carlos y pequeña Sofía',
    locationAndDate: 'Valencia · Primer viaje a Disneyland Paris',
    familyProfile: '2 adultos y 1 niña (5 años)',
    planUsed: 'Plan Magia Completa',
    ratingText: '5.0 / 5 · Valoración familiar',
    headline: '«La recomendación sobre el hotel y la estrategia para ver el espectáculo nocturno valieron cada euro del plan»',
    quoteBeforeAfter:
      'No sabíamos si coger pensión completa ni cómo conseguir mesa en Chez Rémy. Nos guiaron con una cercanía increíble, ahorramos casi 300 € en la elección del hotel respecto a lo que íbamos a reservar por nuestra cuenta y el dossier en el móvil fue nuestra brújula todo el viaje.',
    surface: 'pastel-blue',
  },
  {
    id: 'testimonio-3',
    slotIndex: 'Testimonio Real 03 / 04',
    markerCode: '[Marcador: Testimonio Real #3 — Sustituir por nombre, foto/datos y reseña real del cliente]',
    markerInstructions:
      'Espacio reservado para el tercer testimonio verificado del cliente. Ideal para reflejar un viaje multigeneracional o combinado con la ciudad de París.',
    familyName: 'Familia Etxebarria (Abuelos, padres y nietos)',
    locationAndDate: 'Bilbao · Viaje familiar de 5 días',
    familyProfile: '6 personas (3 generaciones)',
    planUsed: 'Plan Étoile VIP',
    ratingText: '5.0 / 5 · Valoración familiar',
    headline: '«Coordinar a seis personas de distintas edades parecía imposible hasta que vimos nuestro plan personalizado»',
    quoteBeforeAfter:
      'Queríamos combinar tres días en Disney con dos días visitando París con los abuelos y los niños. El ritmo que nos diseñaron fue tan equilibrado que nadie acabó agotado, los traslados fueron comodísimos y todos tuvimos nuestros momentos mágicos.',
    surface: 'lavender',
  },
  {
    id: 'testimonio-4',
    slotIndex: 'Testimonio Real 04 / 04',
    markerCode: '[Marcador: Testimonio Real #4 — Sustituir por nombre, foto/datos y reseña real del cliente]',
    markerInstructions:
      'Espacio reservado para el cuarto testimonio verificado del cliente. Preparado para destacar la optimización de días intensos en temporada alta o Navidad/Halloween.',
    familyName: 'Marta y Javier con Lucas y Mateo',
    locationAndDate: 'Sevilla · Escapada en temporada de Navidad',
    familyProfile: '2 adultos y 2 niños (8 y 11 años)',
    planUsed: 'Plan Esencial',
    ratingText: '5.0 / 5 · Valoración familiar',
    headline: '«Incluso viajando en pleno diciembre con el parque lleno, supimos exactamente dónde ir en cada franja horaria»',
    quoteBeforeAfter:
      'Ya teníamos el hotel reservado y contratamos el Plan Esencial para organizar las rutas. Fue la mejor decisión: mientras la mayoría de la gente esperaba 75 minutos en las atracciones principales, nosotros seguimos el orden del dossier y aprovechamos el Extra Magic Time al máximo.',
    surface: 'white',
  },
];

export const BLOG_ARTICLES: BlogArticleItem[] = [
  {
    id: 'blog-1',
    category: 'Planificación',
    publishDate: 'Guía actualizada · Temporada 2026',
    readTime: '6 min de lectura',
    markerNote: '[Marcador Blog #1: Sustituir o enlazar con artículo real del cliente]',
    title: 'Cómo aprovechar el Extra Magic Time en Disneyland Paris sin agotar a los niños a primera hora',
    excerpt:
      'Entrar una hora antes al parque es una de las mayores ventajas de los Hoteles Disney, pero elegir la atracción equivocada puede hacerte perder esa ventaja. Te contamos qué zonas abren y cómo trazar tus primeros 60 minutos.',
    imagePath: HERO_IMAGE,
    imageAlt: 'Castillo de Disneyland Paris iluminado por la luz dorada de la mañana',
    keyTakeaways: [
      'Qué atracciones están realmente operativas entre las 8:30 y las 9:30.',
      'Diferencia de estrategia entre familias con niños menores de 6 años y mayores.',
      'Cuándo cruzar de Disneyland Park a Walt Disney Studios.',
    ],
    fullContentSections: [
      {
        heading: '1. El error más común durante la Hora Mágica Extra',
        body: 'Muchas familias madrugan para entrar a las 8:30 h pero se detienen demasiado tiempo en la entrada o se dirigen a atracciones que no abren hasta las 9:30 h. Conocer de antemano el listado exacto de atracciones operativas en Fantasyland y Discoveryland permite encadenar hasta 3 atracciones clave antes de que entre el público general.',
      },
      {
        heading: '2. Ruta recomendada con niños pequeños vs. amantes de la adrenalina',
        body: 'Si viajas con peques, Peter Pan’s Flight y Dumbo the Flying Elephant deben ser tu primera parada en los primeros 15 minutos. Si tu familia busca emociones fuertes, Crush’s Coaster en Studios o Big Thunder Mountain a primera hora marcan la diferencia en todo el resto del día.',
      },
      {
        heading: '3. Cuándo hacer la primera pausa para desayunar',
        body: 'En Paris Magic Plan recomendamos tomar un tentempié ligero al despertar y realizar la pausa de desayuno completo alrededor de las 10:15 h, justo cuando las colas empiezan a subir tras la apertura general.',
      },
    ],
  },
  {
    id: 'blog-2',
    category: 'Gastronomía',
    publishDate: 'Guía gastronómica · Disneyland Paris',
    readTime: '5 min de lectura',
    markerNote: '[Marcador Blog #2: Sustituir o enlazar con artículo real del cliente]',
    title: 'Restaurantes en Disneyland Paris: cuáles merecen reserva anticipada y cuándo compensa el Plan de Comidas',
    excerpt:
      'Desde comer dentro de la película Ratatouille hasta compartir mesa con las Princesas Disney. Analizamos las diferencias entre servicio de mesa, buffet libre y comida rápida para que aciertes con tu presupuesto.',
    imagePath: BLOG_DINING_IMAGE,
    imageAlt: 'Interior luminoso y elegante de restaurante familiar en París con detalles dorados y azul pastel',
    keyTakeaways: [
      'Con cuánta antelación se abren las reservas en la App oficial.',
      'Los 5 restaurantes temáticos con mejor relación experiencia-precio.',
      'Trucos con Mobile Order para no esperar cola en restaurantes Quick Service.',
    ],
    fullContentSections: [
      {
        heading: '1. La regla de oro de las reservas gastronómicas',
        body: 'En Disneyland Paris, los restaurantes de servicio de mesa y buffet más populares agotan su disponibilidad semanas o meses antes, especialmente en horas punta (13:00 a 14:30 h). Quienes se alojan en hoteles oficiales disponen de una ventana de reserva anticipada clave que aprovechamos en cada planificación.',
      },
      {
        heading: '2. ¿Compensa contratar Media Pensión o Pensión Completa?',
        body: 'No siempre. Depende del tipo de restaurantes a los que queráis acudir. Si vuestra prioridad es aprovechar el tiempo en atracciones y comer en locales rápidos de calidad como Hakuna Matata o Stark Factory, pagar directamente allí suele ser más flexible y económico.',
      },
      {
        heading: '3. Comidas con personajes: cómo elegir la ideal',
        body: 'Para amantes de las princesas, Auberge de Cendrillon es inigualable; para ver a Mickey y amigos en un entorno majestuoso, Royal Banquet en el Disneyland Hotel o Plaza Gardens son apuestas seguras.',
      },
    ],
  },
  {
    id: 'blog-3',
    category: 'Atracciones en Familia',
    publishDate: 'Viajar en familia · Consejos prácticos',
    readTime: '7 min de lectura',
    markerNote: '[Marcador Blog #3: Sustituir o enlazar con artículo real del cliente]',
    title: 'Viajar a Disneyland Paris con niños pequeños: Baby Switch, alturas mínimas y rincones de calma',
    excerpt:
      'Disneyland Paris está lleno de detalles pensados para los más pequeños que pasan desapercibidos en una primera visita. Descubre cómo turnaros los adultos sin repetir cola y dónde descansar del bullicio.',
    imagePath: BLOG_ATTRACTIONS_IMAGE,
    imageAlt: 'Carrusel clásico de cuento en Disneyland Paris bajo un cielo azul pastel luminoso',
    keyTakeaways: [
      'Cómo funciona exactamente el servicio gratuito Baby Switch (Rider Switch).',
      'Dónde están los Baby Care Centers en ambos parques.',
      'Las mejores atracciones sin altura mínima para disfrutar toda la familia junta.',
    ],
    fullContentSections: [
      {
        heading: '1. Qué es el servicio Baby Switch y cómo pedirlo',
        body: 'Si los adultos queréis subir a una atracción con restricción de altura (como Star Wars Hyperspace Mountain o Indiana Jones) y viajáis con un bebé o niño pequeño, no tenéis que hacer la cola dos veces. El primer adulto hace la fila normal mientras el segundo cuida al peque, y al salir solicita un ticket Baby Switch al Cast Member para que el segundo adulto acceda por la entrada rápida.',
      },
      {
        heading: '2. Espacios tranquilos para bajar revoluciones',
        body: 'A mitad del día, la estimulación visual y sonora puede cansar a los niños. Lugares como el laberinto de Alicia, los pasajes cubiertos de Discovery Arcade y Liberty Arcade o un paseo en el barco Molly Brown ofrecen momentos de calma mágica sin salir del parque.',
      },
      {
        heading: '3. Preparación previa para que los niños vivan la magia con confianza',
        body: 'En nuestros planes incluimos recomendaciones sobre qué atracciones a oscuras (como Blancanieves o Pinocho) pueden impresionar a niños muy sensibles y cuáles son luminosas y suaves desde el primer segundo.',
      },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Servicio',
    question: '¿Qué incluye exactamente Paris Magic Plan y en qué se diferencia de una agencia tradicional?',
    answer:
      'A diferencia de una agencia tradicional que únicamente emite un bono de hotel y avión, en Paris Magic Plan diseñamos la experiencia real dentro del destino. Analizamos el perfil de tu familia y creamos un itinerario personalizado día por día, hora a hora, con rutas optimizadas para evitar colas, estrategia de reservas de restaurantes, horarios de espectáculos y asesoramiento experto e independiente.',
    detailNote: 'Puedes contratar nuestra planificación tanto si aún no has reservado nada como si ya tienes tus entradas y hotel.',
  },
  {
    id: 'faq-2',
    category: 'Servicio',
    question: '¿Con cuánta antelación es recomendable contratar la planificación del viaje?',
    answer:
      'Lo ideal es comenzar entre 2 y 6 meses antes de la fecha del viaje, ya que eso nos permite elegir los mejores alojamientos al mejor precio y asegurar mesa en los restaurantes más solicitados en cuanto abren su agenda. Sin embargo, si tu viaje es dentro de pocas semanas, también podemos diseñar tu ruta optimizada en los parques con nuestros planes de entrega ágil.',
    detailNote: 'Consulta disponibilidad para viajes con menos de 15 días de antelación.',
  },
  {
    id: 'faq-3',
    category: 'Reservas',
    question: '¿Vosotros realizáis las reservas de hotel y entradas o las hacemos nosotros?',
    answer:
      'Nosotros estudiamos todas las opciones disponibles, comparamos precios reales y te entregamos la propuesta exacta más ventajosa con enlaces e instrucciones paso a paso para que realices el pago directamente en los canales oficiales a tu nombre, sin recargos ocultos ni intermediarios. En cuanto a restaurantes y reservas del parque, te guiamos y acompañamos según la modalidad de plan elegida.',
    detailNote: '[Marcador: Ajustar matiz si el cliente gestiona reservas directas como agencia o actúa 100% como travel planner asesor].',
  },
  {
    id: 'faq-4',
    category: 'En el Parque',
    question: '¿Realmente se nota el ahorro de tiempo en las colas siguiendo el itinerario?',
    answer:
      'Sí, de forma drástica. En Disneyland Paris los flujos de visitantes siguen patrones muy marcados por franjas horarias y zonas. Al saber qué atracciones visitar en los primeros 45 minutos, cuándo cambiar de parque, cuándo utilizar Single Rider o en qué momento puntual compensa un Disney Premier Access individual, una familia ahorra fácilmente entre 2 y 4 horas de espera al día.',
    detailNote: 'Nuestras rutas nunca te obligan a correr: están pensadas para caminar menos y disfrutar más.',
  },
  {
    id: 'faq-5',
    category: 'En el Parque',
    question: 'Viajamos con bebés o niños muy pequeños, ¿el plan se adapta a su ritmo?',
    answer:
      'Absolutamente. Es una de nuestras grandes especialidades. Adaptamos el itinerario incluyendo pausas para siestas o descanso, ubicación de salas de lactancia y cambiadores (Baby Care Centers), atracciones sin restricción de altura, uso del sistema Baby Switch para los padres y restaurantes con opciones cómodas para los más pequeños.',
    detailNote: 'Cada plan se construye desde cero según las edades exactas de vuestros hijos.',
  },
  {
    id: 'faq-6',
    category: 'Reservas',
    question: '¿Qué ocurre si Disneyland Paris cambia horarios o cierra alguna atracción antes de nuestro viaje?',
    answer:
      'Disneyland Paris publica el calendario oficial definitivo de espectáculos y cierres por mantenimiento de forma progresiva. Por eso, en nuestros planes revisamos tu itinerario antes de tu salida para reajustar cualquier horario de cabalgata, show o atracción y asegurarnos de que lleves la versión 100% actualizada.',
    detailNote: 'Además, incluimos siempre alternativas (Plan B) por si llueve o cambia el tiempo en París.',
  },
];

export const CONTACT_CONFIG = {
  emailPlaceholder: 'hola@parismagicplan.com',
  phonePlaceholder: '+34 600 000 000',
  scheduleText: 'Lunes a Viernes de 9:30 a 19:00 h (Hora peninsular)',
  markerNotice:
    '[Marcador de datos de contacto: Sustituir correo, teléfono/WhatsApp y enlaces de redes sociales por las credenciales definitivas del cliente]',
};
