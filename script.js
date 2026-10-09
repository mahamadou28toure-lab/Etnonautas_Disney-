/**
 * Paris Magic Plan — Lógica interactiva en Vanilla JavaScript (HTML + CSS + JS)
 */

const BLOG_ARTICLES_DATA = {
  'blog-1': {
    category: 'Planificación',
    publishDate: 'Guía actualizada · Temporada 2026',
    readTime: '6 min de lectura',
    markerNote: '[Marcador Blog #1: Sustituir o enlazar con artículo real del cliente]',
    title: 'Cómo aprovechar el Extra Magic Time en Disneyland Paris sin agotar a los niños a primera hora',
    excerpt:
      'Entrar una hora antes al parque es una de las mayores ventajas de los Hoteles Disney, pero elegir la atracción equivocada puede hacerte perder esa ventaja. Te contamos qué zonas abren y cómo trazar tus primeros 60 minutos.',
    imagePath: './assets/images/hero_disneyland_family_1791448790088.jpg',
    imageAlt: 'Castillo de Disneyland Paris iluminado por la luz dorada de la mañana',
    keyTakeaways: [
      'Qué atracciones están realmente operativas entre las 8:30 y las 9:30.',
      'Diferencia de estrategia entre familias con niños menores de 6 años y mayores.',
      'Cuándo cruzar de Disneyland Park a Walt Disney Studios.',
    ],
    sections: [
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
  'blog-2': {
    category: 'Gastronomía',
    publishDate: 'Guía gastronómica · Disneyland Paris',
    readTime: '5 min de lectura',
    markerNote: '[Marcador Blog #2: Sustituir o enlazar con artículo real del cliente]',
    title: 'Restaurantes en Disneyland Paris: cuáles merecen reserva anticipada y cuándo compensa el Plan de Comidas',
    excerpt:
      'Desde comer dentro de la película Ratatouille hasta compartir mesa con las Princesas Disney. Analizamos las diferencias entre servicio de mesa, buffet libre y comida rápida para que aciertes con tu presupuesto.',
    imagePath: './assets/images/blog_dining_experiences_1791448836039.jpg',
    imageAlt: 'Interior luminoso y elegante de restaurante familiar en París con detalles dorados y azul pastel',
    keyTakeaways: [
      'Con cuánta antelación se abren las reservas en la App oficial.',
      'Los 5 restaurantes temáticos con mejor relación experiencia-precio.',
      'Trucos con Mobile Order para no esperar cola en restaurantes Quick Service.',
    ],
    sections: [
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
  'blog-3': {
    category: 'Atracciones en Familia',
    publishDate: 'Viajar en familia · Consejos prácticos',
    readTime: '7 min de lectura',
    markerNote: '[Marcador Blog #3: Sustituir o enlazar con artículo real del cliente]',
    title: 'Viajar a Disneyland Paris con niños pequeños: Baby Switch, alturas mínimas y rincones de calma',
    excerpt:
      'Disneyland Paris está lleno de detalles pensados para los más pequeños que pasan desapercibidos en una primera visita. Descubre cómo turnaros los adultos sin repetir cola y dónde descansar del bullicio.',
    imagePath: './assets/images/blog_family_attractions_1791448849975.jpg',
    imageAlt: 'Carrusel clásico de cuento en Disneyland Paris bajo un cielo azul pastel luminoso',
    keyTakeaways: [
      'Cómo funciona exactamente el servicio gratuito Baby Switch (Rider Switch).',
      'Dónde están los Baby Care Centers en ambos parques.',
      'Las mejores atracciones sin altura mínima para disfrutar toda la familia junta.',
    ],
    sections: [
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
};

const PLANNING_STEPS_DATA = [
  {
    phaseLabel: 'Paso 01 · Escucha y Diagnóstico',
    subtitle: 'Todo gran viaje comienza entendiendo quiénes sois y cómo os gusta viajar.',
    deliverable: 'Análisis de viabilidad, mejores fechas y propuesta de estructura de estancia',
  },
  {
    phaseLabel: 'Paso 02 · Base del Viaje y Reservas Clave',
    subtitle: 'Aseguramos los pilares del viaje antes de que se agoten las plazas más demandadas.',
    deliverable: 'Hoja de reservas estratégicas y calendario de hitos previos al viaje',
  },
  {
    phaseLabel: 'Paso 03 · Diseño Artesanal del Itinerario',
    subtitle: 'Un documento visual, claro y elegante que podrás llevar en tu móvil o impreso.',
    deliverable: 'Dossier Paris Magic Plan definitivo (PDF interactivo + mapas de ruta)',
  },
  {
    phaseLabel: 'Paso 04 · Preparativos Finales y Magia en Destino',
    subtitle: 'Llegas al parque sabiendo exactamente qué hacer desde el primer minuto.',
    deliverable: 'Actualización de horarios de última hora y asistencia según tu plan',
  },
];

const PLANS_RECOMMENDATION_DATA = {
  esencial: {
    name: 'Plan Esencial',
    price: '49 €',
    fullLabel: 'Plan Esencial (49 €)',
    summary:
      'La base perfecta para recorrer Disneyland Park y Walt Disney Studios con orden, evitando los cuellos de botella habituales y aprovechando cada franja horaria.',
    recommendedFor:
      'Estancias de 1 a 2 días o viajeros que buscan optimizar sus rutas en los parques',
  },
  completa: {
    name: 'Plan Magia Completa',
    price: '95 €',
    fullLabel: 'Plan Magia Completa (95 €)',
    summary:
      'Abarca desde la elección del mejor alojamiento y entradas hasta el diseño minucioso de cada jornada, estrategia gastronómica y soporte continuo antes de viajar.',
    recommendedFor:
      'Familias en estancias de 3 a 4 días que desean asesoría desde cero y reservas',
  },
  vip: {
    name: 'Plan Étoile VIP',
    price: '165 €',
    fullLabel: 'Plan Étoile VIP (165 €)',
    summary:
      'Para las familias que quieren delegar toda la planificación de principio a fin, incluyendo días de visita a París (Torre Eiffel, Sena, Louvre con niños) y asistencia durante el viaje.',
    recommendedFor:
      'Viajes especiales, estancias de 4+ días, grupos multigeneracionales o combinados con París',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  // Estado global de la interfaz
  let stayDuration = 'medium';
  let familyType = 'kids';
  let needsParisCity = false;
  let activeStepIndex = 0;
  let showClientMarkers = false;
  let currentFaqCategory = 'Todas';

  // 1. Navegación suave a secciones
  function scrollToSection(selector) {
    const id = selector.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  document.querySelectorAll('[data-scroll-to]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-scroll-to');
      if (target) {
        closeMenus();
        scrollToSection(target);
      }
    });
  });

  // 2. Menú Principal, Submenú Desktop y Menú Móvil/Tablet
  const desktopSubmenuWrapper = document.getElementById('desktop-submenu-wrapper');
  const desktopSubmenuBtn = document.getElementById('desktop-submenu-btn');
  const desktopSubmenuPanel = document.getElementById('desktop-submenu-panel');
  const desktopSubmenuChevron = document.getElementById('desktop-submenu-chevron');

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuIconOpen = document.getElementById('mobile-menu-icon-open');
  const mobileMenuIconClose = document.getElementById('mobile-menu-icon-close');
  const mobileSubmenuBtn = document.getElementById('mobile-submenu-btn');
  const mobileSubmenuList = document.getElementById('mobile-submenu-list');
  const mobileSubmenuChevron = document.getElementById('mobile-submenu-chevron');

  function setDesktopSubmenu(open) {
    if (!desktopSubmenuPanel || !desktopSubmenuBtn) return;
    desktopSubmenuBtn.setAttribute('aria-expanded', String(open));
    desktopSubmenuPanel.classList.toggle('hidden', !open);
    if (desktopSubmenuChevron) {
      desktopSubmenuChevron.classList.toggle('rotate-180', open);
      desktopSubmenuChevron.classList.toggle('text-[#EB539F]', open);
    }
  }

  function setMobileMenu(open) {
    if (!mobileMenuDrawer || !mobileMenuBtn) return;
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuDrawer.classList.toggle('hidden', !open);
    if (mobileMenuIconOpen && mobileMenuIconClose) {
      mobileMenuIconOpen.classList.toggle('hidden', open);
      mobileMenuIconClose.classList.toggle('hidden', !open);
    }
  }

  function closeMenus() {
    setDesktopSubmenu(false);
    setMobileMenu(false);
  }

  if (desktopSubmenuWrapper && desktopSubmenuBtn) {
    desktopSubmenuWrapper.addEventListener('mouseenter', () => setDesktopSubmenu(true));
    desktopSubmenuWrapper.addEventListener('mouseleave', () => setDesktopSubmenu(false));
    desktopSubmenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = desktopSubmenuBtn.getAttribute('aria-expanded') === 'true';
      setDesktopSubmenu(!isOpen);
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenu(!isOpen);
    });
  }

  if (mobileSubmenuBtn && mobileSubmenuList) {
    mobileSubmenuBtn.addEventListener('click', () => {
      const isOpen = mobileSubmenuBtn.getAttribute('aria-expanded') === 'true';
      mobileSubmenuBtn.setAttribute('aria-expanded', String(!isOpen));
      mobileSubmenuList.classList.toggle('hidden', isOpen);
      if (mobileSubmenuChevron) {
        mobileSubmenuChevron.classList.toggle('rotate-180', !isOpen);
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (desktopSubmenuWrapper && !desktopSubmenuWrapper.contains(e.target)) {
      setDesktopSubmenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenus();
      closeArticleModal();
    }
  });

  // 3. Filtro del Submenú de Servicios y Precios
  const serviceFilterBtns = document.querySelectorAll('[data-service-filter]');
  const blockPlanes = document.getElementById('service-block-planes');
  const blockExtras = document.getElementById('service-block-extras');
  const blockComparativa = document.getElementById('service-block-comparativa');
  const blockRecomendador = document.getElementById('service-block-recomendador');

  function applyServiceFilter(filterValue) {
    serviceFilterBtns.forEach((btn) => {
      const val = btn.getAttribute('data-service-filter');
      const isTab = btn.hasAttribute('role') && btn.getAttribute('role') === 'tab';
      if (isTab) {
        const active = val === filterValue;
        btn.setAttribute('aria-selected', String(active));
        btn.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-4 py-2 text-xs font-semibold`;
      }
    });

    if (blockPlanes) {
      blockPlanes.classList.toggle(
        'hidden',
        !(filterValue === 'all' || filterValue === 'planes')
      );
    }
    if (blockExtras) {
      blockExtras.classList.toggle(
        'hidden',
        !(filterValue === 'all' || filterValue === 'extras')
      );
    }
    if (blockComparativa) {
      blockComparativa.classList.toggle(
        'hidden',
        !(filterValue === 'all' || filterValue === 'comparativa')
      );
    }
    if (blockRecomendador) {
      blockRecomendador.classList.toggle(
        'hidden',
        !(filterValue === 'all' || filterValue === 'recomendador')
      );
    }
  }

  serviceFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-service-filter') || 'all';
      const shouldScroll = btn.getAttribute('data-submenu-nav') === 'true';
      applyServiceFilter(filterValue);
      if (shouldScroll) {
        closeMenus();
        scrollToSection('#servicios');
      }
    });
  });

  // 4. Selección de Plan -> Preselecciona en el formulario de Contacto
  const planSelectInput = document.getElementById('plan-select');
  const seasonSelectInput = document.getElementById('season-select');
  const familyTextInput = document.getElementById('family-input');
  const inquiryPreviewEl = document.getElementById('inquiry-message-preview');
  const mailtoLinks = document.querySelectorAll('[data-mailto-link]');
  const copyInquiryBtn = document.getElementById('copy-inquiry-btn');
  const copyInquiryLabel = document.getElementById('copy-inquiry-label');

  function updateContactInquiryPreview() {
    const planVal = planSelectInput ? planSelectInput.value : 'Plan Magia Completa (95 €)';
    const seasonVal = seasonSelectInput ? seasonSelectInput.value : 'Primavera / Verano';
    const familyVal = familyTextInput ? familyTextInput.value : '2 adultos y 2 niños';

    const message = `Hola equipo de Paris Magic Plan,\n\nMe gustaría recibir información para planificar nuestro viaje a Disneyland Paris:\n- Modalidad de interés: ${planVal}\n- Época aproximada del viaje: ${seasonVal}\n- Composición familiar: ${familyVal}\n\nQuedo a la espera de los siguientes pasos. ¡Muchas gracias!`;

    if (inquiryPreviewEl) {
      inquiryPreviewEl.textContent = message;
    }

    const subject = encodeURIComponent(
      `Solicitud de planificación: ${planVal} — Paris Magic Plan`
    );
    const body = encodeURIComponent(message);
    const href = `mailto:hola@parismagicplan.com?subject=${subject}&body=${body}`;

    mailtoLinks.forEach((link) => {
      link.setAttribute('href', href);
    });

    return message;
  }

  function selectPlanAndGoToContact(planLabel) {
    if (planSelectInput) {
      planSelectInput.value = planLabel;
      updateContactInquiryPreview();
    }
    scrollToSection('#contacto');
  }

  document.querySelectorAll('[data-select-plan]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const planLabel = btn.getAttribute('data-select-plan');
      if (planLabel) {
        selectPlanAndGoToContact(planLabel);
      }
    });
  });

  if (planSelectInput) planSelectInput.addEventListener('change', updateContactInquiryPreview);
  if (seasonSelectInput) seasonSelectInput.addEventListener('change', updateContactInquiryPreview);
  if (familyTextInput) familyTextInput.addEventListener('input', updateContactInquiryPreview);

  if (copyInquiryBtn) {
    copyInquiryBtn.addEventListener('click', async () => {
      const text = updateContactInquiryPreview();
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      if (copyInquiryLabel) {
        copyInquiryLabel.textContent = 'Texto copiado al portapapeles';
        setTimeout(() => {
          copyInquiryLabel.textContent = 'Copiar resumen para WhatsApp';
        }, 3000);
      }
    });
  }

  // 5. Recomendador Interactivo de Plan Familiar
  const recPriceEl = document.getElementById('rec-plan-price');
  const recNameEl = document.getElementById('rec-plan-name');
  const recSummaryEl = document.getElementById('rec-plan-summary');
  const recReasonEl = document.getElementById('rec-plan-reason');
  const recBtnTextEl = document.getElementById('rec-plan-btn-text');
  const recSelectBtn = document.getElementById('rec-plan-select-btn');

  function updateRecommender() {
    let key = 'completa';
    if (needsParisCity || stayDuration === 'long' || familyType === 'multigen') {
      key = 'vip';
    } else if (stayDuration === 'short' && familyType === 'kids') {
      key = 'esencial';
    }
    const plan = PLANS_RECOMMENDATION_DATA[key];

    if (recPriceEl) recPriceEl.textContent = plan.price;
    if (recNameEl) recNameEl.textContent = plan.name;
    if (recSummaryEl) recSummaryEl.textContent = plan.summary;
    if (recReasonEl) recReasonEl.textContent = plan.recommendedFor;
    if (recBtnTextEl) recBtnTextEl.textContent = `Preseleccionar ${plan.name}`;
    if (recSelectBtn) recSelectBtn.setAttribute('data-select-plan', plan.fullLabel);
  }

  document.querySelectorAll('[data-rec-duration]').forEach((btn) => {
    btn.addEventListener('click', () => {
      stayDuration = btn.getAttribute('data-rec-duration') || 'medium';
      document.querySelectorAll('[data-rec-duration]').forEach((b) => {
        const active = b.getAttribute('data-rec-duration') === stayDuration;
        b.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-4 py-2 text-xs font-semibold`;
      });
      updateRecommender();
    });
  });

  document.querySelectorAll('[data-rec-family]').forEach((btn) => {
    btn.addEventListener('click', () => {
      familyType = btn.getAttribute('data-rec-family') || 'kids';
      document.querySelectorAll('[data-rec-family]').forEach((b) => {
        const active = b.getAttribute('data-rec-family') === familyType;
        b.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-4 py-2 text-xs font-semibold`;
      });
      updateRecommender();
    });
  });

  document.querySelectorAll('[data-rec-paris]').forEach((btn) => {
    btn.addEventListener('click', () => {
      needsParisCity = btn.getAttribute('data-rec-paris') === 'true';
      document.querySelectorAll('[data-rec-paris]').forEach((b) => {
        const active = (b.getAttribute('data-rec-paris') === 'true') === needsParisCity;
        b.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-4 py-2 text-xs font-semibold`;
      });
      updateRecommender();
    });
  });

  // 6. Los 4 Pasos de Planificación (Selector Interactivo)
  const stepCards = document.querySelectorAll('[data-step-index]');
  const stepPhaseEl = document.getElementById('active-step-phase');
  const stepSubtitleEl = document.getElementById('active-step-subtitle');
  const stepDeliverableEl = document.getElementById('active-step-deliverable');
  const nextStepBtn = document.getElementById('next-step-btn');

  function renderActiveStep(index) {
    activeStepIndex = index;
    stepCards.forEach((card) => {
      const idx = Number(card.getAttribute('data-step-index'));
      card.classList.toggle('step-card-active', idx === activeStepIndex);
    });

    const stepData = PLANNING_STEPS_DATA[activeStepIndex];
    if (stepData) {
      if (stepPhaseEl) stepPhaseEl.textContent = `Detalle activo · ${stepData.phaseLabel}`;
      if (stepSubtitleEl) stepSubtitleEl.textContent = stepData.subtitle;
      if (stepDeliverableEl) {
        stepDeliverableEl.textContent = `Entregable garantizado: ${stepData.deliverable}`;
      }
      if (nextStepBtn) {
        const nextNum = ((activeStepIndex + 1) % 4) + 1;
        nextStepBtn.textContent = `Ver siguiente paso (${nextNum}/4)`;
      }
    }
  }

  stepCards.forEach((card) => {
    card.addEventListener('click', () => {
      const idx = Number(card.getAttribute('data-step-index'));
      renderActiveStep(idx);
    });
  });

  if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
      renderActiveStep((activeStepIndex + 1) % 4);
    });
  }

  // 7. Modo de Visualización de Marcadores del Cliente
  const markerToggleBtns = document.querySelectorAll('[data-toggle-markers]');
  const markerElements = document.querySelectorAll('[data-client-marker]');
  const markerModeBtnOpiniones = document.getElementById('marker-mode-btn-opiniones');
  const markerModeBtnFooter = document.getElementById('marker-mode-btn-footer');

  function updateMarkersVisibility() {
    markerElements.forEach((el) => {
      el.classList.toggle('hidden', !showClientMarkers);
    });
    if (markerModeBtnOpiniones) {
      markerModeBtnOpiniones.textContent = showClientMarkers
        ? 'Modo actual: Con marcadores de cliente visibles'
        : 'Modo actual: Vista limpia de presentación';
    }
    if (markerModeBtnFooter) {
      markerModeBtnFooter.textContent = showClientMarkers
        ? 'Ocultar marcadores de contenido'
        : 'Mostrar marcadores de contenido';
    }
  }

  markerToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      showClientMarkers = !showClientMarkers;
      updateMarkersVisibility();
    });
  });

  // 8. Filtro de Artículos del Blog y Modal de Lectura
  const blogFilterBtns = document.querySelectorAll('[data-blog-filter]');
  const blogCards = document.querySelectorAll('[data-blog-category]');
  const articleModal = document.getElementById('article-modal');
  const closeModalBtn = document.getElementById('close-article-modal');
  const modalSelectPlanBtn = document.getElementById('modal-select-plan-btn');

  blogFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-blog-filter') || 'Todos';
      blogFilterBtns.forEach((b) => {
        const active = b.getAttribute('data-blog-filter') === category;
        b.setAttribute('aria-selected', String(active));
        b.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-4 py-2 text-xs font-semibold`;
      });

      blogCards.forEach((card) => {
        const cardCat = card.getAttribute('data-blog-category');
        const visible = category === 'Todos' || cardCat === category;
        card.classList.toggle('hidden', !visible);
      });
    });
  });

  function openArticleModal(articleId) {
    const data = BLOG_ARTICLES_DATA[articleId];
    if (!data || !articleModal) return;

    document.getElementById('modal-article-category').textContent = data.category;
    document.getElementById('modal-article-date').textContent = data.publishDate;
    document.getElementById('modal-article-readtime').textContent = data.readTime;
    document.getElementById('modal-article-marker').textContent = data.markerNote;
    document.getElementById('modal-article-title').textContent = data.title;
    document.getElementById('modal-article-excerpt').textContent = data.excerpt;

    const modalImg = document.getElementById('modal-article-image');
    if (modalImg) {
      modalImg.setAttribute('src', data.imagePath);
      modalImg.setAttribute('alt', data.imageAlt);
    }

    const takeawaysList = document.getElementById('modal-article-takeaways');
    if (takeawaysList) {
      takeawaysList.innerHTML = data.keyTakeaways
        .map(
          (point, i) => `
          <li class="flex items-start gap-3">
            <span class="font-mono text-xs font-semibold text-[#EB539F] mt-0.5 tabular-nums">0${
              i + 1
            }.</span>
            <span>${point}</span>
          </li>`
        )
        .join('');
    }

    const sectionsContainer = document.getElementById('modal-article-sections');
    if (sectionsContainer) {
      sectionsContainer.innerHTML = data.sections
        .map(
          (sec) => `
          <div class="space-y-2 border-b border-[#1E3264]/8 pb-6 last:border-b-0">
            <h3 class="font-serif text-2xl font-semibold text-[#1E3264]">${sec.heading}</h3>
            <p class="text-base text-[#42506B] leading-relaxed">${sec.body}</p>
          </div>`
        )
        .join('');
    }

    articleModal.classList.remove('hidden');
    articleModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    if (!articleModal) return;
    articleModal.classList.add('hidden');
    articleModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-article]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-article');
      if (id) openArticleModal(id);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeArticleModal);
  if (articleModal) {
    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) closeArticleModal();
    });
  }
  if (modalSelectPlanBtn) {
    modalSelectPlanBtn.addEventListener('click', () => {
      closeArticleModal();
      scrollToSection('#servicios');
    });
  }

  // 9. Acordeones Accesibles de Preguntas Frecuentes (FAQ)
  const faqCards = document.querySelectorAll('[data-faq-card]');
  const faqFilterBtns = document.querySelectorAll('[data-faq-filter]');
  const toggleAllFaqsBtn = document.getElementById('toggle-all-faqs-btn');

  function setFaqItemOpen(card, open) {
    const btn = card.querySelector('[data-faq-toggle]');
    const panel = card.querySelector('[data-faq-panel]');
    const icon = card.querySelector('[data-faq-icon]');

    card.classList.toggle('faq-card-open', open);
    if (btn) btn.setAttribute('aria-expanded', String(open));
    if (panel) panel.classList.toggle('hidden', !open);
    if (icon) icon.classList.toggle('faq-icon-open', open);
  }

  function updateFaqToggleAllLabel() {
    if (!toggleAllFaqsBtn) return;
    const visibleCards = Array.from(faqCards).filter(
      (c) => !c.classList.contains('hidden')
    );
    const allOpen = visibleCards.every(
      (c) => c.querySelector('[data-faq-toggle]')?.getAttribute('aria-expanded') === 'true'
    );
    toggleAllFaqsBtn.textContent = allOpen ? 'Contraer todas' : 'Expandir todas';
  }

  faqCards.forEach((card) => {
    const btn = card.querySelector('[data-faq-toggle]');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        setFaqItemOpen(card, !isOpen);
        updateFaqToggleAllLabel();
      });
    }
  });

  faqFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFaqCategory = btn.getAttribute('data-faq-filter') || 'Todas';
      faqFilterBtns.forEach((b) => {
        const active = b.getAttribute('data-faq-filter') === currentFaqCategory;
        b.className = `${
          active ? 'btn-logo-tab-active' : 'btn-logo-tab'
        } px-3.5 py-1.5 text-xs font-semibold`;
      });

      faqCards.forEach((card) => {
        const cat = card.getAttribute('data-faq-category');
        const visible = currentFaqCategory === 'Todas' || cat === currentFaqCategory;
        card.classList.toggle('hidden', !visible);
      });
      updateFaqToggleAllLabel();
    });
  });

  if (toggleAllFaqsBtn) {
    toggleAllFaqsBtn.addEventListener('click', () => {
      const visibleCards = Array.from(faqCards).filter(
        (c) => !c.classList.contains('hidden')
      );
      const allOpen = visibleCards.every(
        (c) => c.querySelector('[data-faq-toggle]')?.getAttribute('aria-expanded') === 'true'
      );
      visibleCards.forEach((c) => setFaqItemOpen(c, !allOpen));
      updateFaqToggleAllLabel();
    });
  }

  // Inicializar vista previa de contacto
  updateContactInquiryPreview();
});
