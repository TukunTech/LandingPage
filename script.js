const state = {
  lang: "es"
};

const translations = {
  nav: {
    goApp: { es: "Ir a la app", en: "Go to app" },
    items: [
      { id: "product", label: { es: "Producto", en: "Product" } },
      { id: "services", label: { es: "Servicios", en: "Services" } },
      { id: "how", label: { es: "Cómo funciona", en: "How it works" } },
      { id: "plans", label: { es: "Planes", en: "Plans" } },
      { id: "team", label: { es: "Equipo", en: "Team" } },
      { id: "contact", label: { es: "Contacto", en: "Contact" } }
    ]
  },

  hero: {
    badge: { es: "Salud preventiva con IoT", en: "Preventive health with IoT" },
    title: { es: "Cuida lo que más te importa", en: "Care for what matters most" },
    subtitle: {
      es: "Monitorea la salud de tus seres queridos en tiempo real con tecnología IoT.",
      en: "Monitor your loved ones' health in real time with IoT technology."
    },
    support: {
      es: "TukunTech conecta un dispositivo portátil con aplicaciones web y móviles para visualizar frecuencia cardíaca, saturación de oxígeno, alertas preventivas e historial de mediciones.",
      en: "TukunTech connects a wearable device with web and mobile apps to view heart rate, oxygen saturation, preventive alerts, and measurement history."
    },
    ctaPrimary: { es: "Conocer el producto", en: "Explore product" },
    ctaSecondary: { es: "Contactar", en: "Contact us" },
    features: [
      { icon: "heart", text: { es: "Monitoreo de signos vitales", en: "Vital signs monitoring" } },
      { icon: "bell", text: { es: "Alertas preventivas", en: "Preventive alerts" } },
      { icon: "chart", text: { es: "Historial de mediciones", en: "Measurement history" } },
      { icon: "shield", text: { es: "Acompañamiento seguro", en: "Safe support" } }
    ],
    mock: {
      title: { es: "Panel del paciente", en: "Patient dashboard" },
      patient: { es: "Carlos M. · 72 años", en: "Carlos M. · 72 years old" },
      live: { es: "En vivo", en: "Live" },
      hr: { es: "Frecuencia cardíaca", en: "Heart rate" },
      spo2: { es: "Saturación O₂", en: "O₂ saturation" },
      status: { es: "Estado", en: "Status" },
      stable: { es: "Estable", en: "Stable" },
      alert: { es: "Alerta enviada al cuidador", en: "Alert sent to caregiver" }
    }
  },

  product: {
    title: {
      es: "Una solución conectada para el cuidado preventivo",
      en: "A connected solution for preventive care"
    },
    text: {
      es: "TukunTech integra un dispositivo IoT, una plataforma web y una aplicación móvil para facilitar el monitoreo preventivo de signos vitales.",
      en: "TukunTech integrates an IoT device, a web platform, and a mobile app to support preventive vital signs monitoring."
    },
    cards: [
      {
        icon: "watch",
        title: { es: "Dispositivo IoT portátil", en: "Wearable IoT device" },
        text: {
          es: "Registra variables como frecuencia cardíaca y saturación de oxígeno desde un dispositivo cómodo y fácil de usar.",
          en: "Records variables such as heart rate and oxygen saturation from a comfortable, easy-to-use device."
        }
      },
      {
        icon: "monitor",
        title: { es: "Dashboard web y móvil", en: "Web and mobile dashboard" },
        text: {
          es: "Visualiza mediciones, historial y estado general desde una interfaz clara para pacientes y cuidadores.",
          en: "View measurements, history, and general status from a clear interface for patients and caregivers."
        }
      },
      {
        icon: "bell",
        title: { es: "Alertas preventivas", en: "Preventive alerts" },
        text: {
          es: "Recibe avisos cuando se detectan valores fuera de rangos esperados o situaciones que requieren atención.",
          en: "Receive notifications when values go outside expected ranges or when situations need attention."
        }
      }
    ]
  },

  services: {
    title: { es: "Servicios principales", en: "Main services" },
    subtitle: {
      es: "Todo lo que necesitas para un monitoreo preventivo confiable.",
      en: "Everything needed for reliable preventive monitoring."
    },
    cards: [
      {
        icon: "activity",
        title: { es: "Monitoreo en tiempo real", en: "Real-time monitoring" },
        text: {
          es: "Consulta mediciones actualizadas de frecuencia cardíaca y saturación de oxígeno desde la plataforma.",
          en: "Check updated heart rate and oxygen saturation measurements from the platform."
        }
      },
      {
        icon: "users",
        title: { es: "Soporte para cuidadores", en: "Caregiver support" },
        text: {
          es: "Permite que familiares o cuidadores acompañen el estado de salud sin estar físicamente presentes todo el tiempo.",
          en: "Allows relatives or caregivers to support health monitoring without being physically present all the time."
        }
      },
      {
        icon: "history",
        title: { es: "Historial y seguimiento", en: "History and tracking" },
        text: {
          es: "Guarda mediciones para revisar tendencias, evolución y eventos importantes durante el tiempo.",
          en: "Stores measurements to review trends, progress, and important events over time."
        }
      }
    ]
  },

  how: {
    title: { es: "¿Cómo funciona TukunTech?", en: "How does TukunTech work?" },
    subtitle: {
      es: "Seis pasos simples para acompañar la salud de tu familia.",
      en: "Six simple steps to support your family's health."
    },
    steps: [
      {
        title: { es: "Paciente usa el dispositivo", en: "Patient wears the device" },
        text: { es: "El usuario lleva un sensor portátil cómodo.", en: "The user wears a comfortable portable sensor." }
      },
      {
        title: { es: "Captura signos vitales", en: "Vital signs are captured" },
        text: { es: "Se registran datos de frecuencia cardíaca y oxígeno.", en: "Heart rate and oxygen data are recorded." }
      },
      {
        title: { es: "Datos conectados", en: "Connected data" },
        text: { es: "La información se envía hacia la plataforma.", en: "The information is sent to the platform." }
      },
      {
        title: { es: "Dashboard actualizado", en: "Updated dashboard" },
        text: { es: "La app muestra métricas claras y visuales.", en: "The app shows clear and visual metrics." }
      },
      {
        title: { es: "Alerta al cuidador", en: "Caregiver alert" },
        text: { es: "Se notifican eventos preventivos importantes.", en: "Important preventive events are notified." }
      },
      {
        title: { es: "Historial médico", en: "Health history" },
        text: { es: "Los datos quedan disponibles para seguimiento.", en: "Data remains available for tracking." }
      }
    ]
  },

  plans: {
    title: { es: "Planes diseñados para cada necesidad", en: "Plans designed for every need" },
    subtitle: {
      es: "Elige el plan que mejor se adapte a ti y a tu familia.",
      en: "Choose the plan that best fits you and your family."
    },
    popular: { es: "Más elegido", en: "Most chosen" },
    items: [
      {
        name: { es: "Plan Individual", en: "Individual Plan" },
        price: "$200",
        note: {
          es: "+ $10 dólares por mes",
          en: "+ $10 dollars per month"
        },
        featured: false,
        features: {
          es: [
            "1 dispositivo",
            "50 GB en nube",
            "Almacenamiento por 30 días",
            "Modelo de monetización: suscripción mensual o anual"
          ],
          en: [
            "1 device",
            "50 GB cloud storage",
            "Storage for 30 days",
            "Monetization model: monthly or yearly subscription"
          ]
        }
      },
      {
        name: { es: "Plan Familiar", en: "Family Plan" },
        price: "Desde $500",
        note: {
          es: "Precio base del plan familiar",
          en: "Base price for the family plan"
        },
        featured: true,
        features: {
          es: [
            "Hasta 4 dispositivos",
            "Almacenamiento ilimitado",
            "Monitoreo para varios familiares",
            "Modelo de monetización: suscripción mensual o anual"
          ],
          en: [
            "Up to 4 devices",
            "Unlimited storage",
            "Monitoring for multiple family members",
            "Monetization model: monthly or yearly subscription"
          ]
        }
      }
    ]
  },

  mv: {
    title: { es: "Misión y Visión", en: "Mission and Vision" },
    items: [
      {
        icon: "target",
        title: { es: "Misión", en: "Mission" },
        text: {
          es: "Desarrollar una solución tecnológica accesible que ayude a las familias a monitorear signos vitales y actuar preventivamente.",
          en: "Develop an accessible technological solution that helps families monitor vital signs and act preventively."
        }
      },
      {
        icon: "eye",
        title: { es: "Visión", en: "Vision" },
        text: {
          es: "Ser una plataforma referente en salud digital preventiva, conectando pacientes, cuidadores y tecnología IoT.",
          en: "Become a leading preventive digital health platform connecting patients, caregivers, and IoT technology."
        }
      }
    ]
  },

  testimonials: {
    title: { es: "Historias de confianza", en: "Stories of trust" },
    subtitle: {
      es: "Lo que dicen pacientes, familiares y cuidadores que usan TukunTech.",
      en: "What patients, relatives, and caregivers say about TukunTech."
    },
    items: [
      {
        image: "assets/img_Maria.png",
        name: { es: "María, familiar cuidadora", en: "Maria, family caregiver" },
        text: {
          es: "TukunTech me ayuda a revisar el estado de salud de mi padre sin estar físicamente con él todo el tiempo.",
          en: "TukunTech helps me check my father's health status without being physically with him all the time."
        }
      },
      {
        image: "assets/img_Luis.png",
        name: { es: "Luis, paciente", en: "Luis, patient" },
        text: {
          es: "La interfaz es simple y me permite entender mis mediciones sin complicaciones.",
          en: "The interface is simple and helps me understand my readings without complications."
        }
      },
      {
        image: "assets/img_Carolina.png",
        name: { es: "Carolina, cuidadora", en: "Carolina, caregiver" },
        text: {
          es: "Las alertas y el historial hacen más fácil acompañar a una persona mayor durante el día.",
          en: "The alerts and history make it easier to support an older adult throughout the day."
        }
      }
    ]
  },

  faq: {
    title: { es: "Preguntas frecuentes", en: "Frequently asked questions" },
    cta: { es: "¿Aún tienes dudas? Contáctanos", en: "Still have questions? Contact us" },
    items: [
      {
        q: { es: "¿TukunTech reemplaza una consulta médica?", en: "Does TukunTech replace a medical consultation?" },
        a: {
          es: "No. TukunTech es una herramienta de monitoreo preventivo y acompañamiento. No reemplaza diagnóstico médico ni atención profesional.",
          en: "No. TukunTech is a preventive monitoring and support tool. It does not replace medical diagnosis or professional care."
        }
      },
      {
        q: { es: "¿Qué signos vitales monitorea?", en: "Which vital signs does it monitor?" },
        a: {
          es: "La solución está orientada al monitoreo de frecuencia cardíaca y saturación de oxígeno, además de alertas e historial.",
          en: "The solution focuses on heart rate and oxygen saturation monitoring, plus alerts and history."
        }
      },
      {
        q: { es: "¿Quién puede recibir las alertas?", en: "Who can receive alerts?" },
        a: {
          es: "Familiares, cuidadores o usuarios autorizados desde la plataforma.",
          en: "Relatives, caregivers, or authorized users from the platform."
        }
      },
      {
        q: { es: "¿Funciona en web y móvil?", en: "Does it work on web and mobile?" },
        a: {
          es: "Sí. TukunTech contempla una plataforma web y una aplicación móvil para facilitar el acceso.",
          en: "Yes. TukunTech includes a web platform and a mobile application to make access easier."
        }
      }
    ]
  },

  team: {
    title: { es: "Nuestro equipo", en: "Our team" },
    intro: {
      es: "Somos un equipo comprometido con el desarrollo de soluciones tecnológicas para el monitoreo preventivo de salud.",
      en: "We are a team committed to developing technological solutions for preventive health monitoring."
    },
    members: [
      {
        name: "Adriana",
        role: { es: "Diseño e investigación", en: "Design and research" },
        image: "assets/img_Adriana.png",
        description: {
          es: "Apoya en la investigación, análisis de usuarios y diseño visual de la propuesta TukunTech.",
          en: "Supports research, user analysis, and visual design for the TukunTech proposal."
        }
      },
      {
        name: "Erick",
        role: { es: "Desarrollo frontend", en: "Frontend development" },
        image: "assets/img_Erick.png",
        description: {
          es: "Encargado de la interfaz web, estructura visual, navegación y experiencia responsive.",
          en: "Responsible for the web interface, visual structure, navigation, and responsive experience."
        }
      },
      {
        name: "Fabio",
        role: { es: "Desarrollo backend", en: "Backend development" },
        image: "assets/img_Fabio.png",
        description: {
          es: "Responsable de la lógica del sistema, manejo de datos y conexión con los servicios de la plataforma.",
          en: "Responsible for system logic, data handling, and connection with platform services."
        }
      },
      {
        name: "Oscar",
        role: { es: "IoT y hardware", en: "IoT and hardware" },
        image: "assets/img_Oscar.png",
        description: {
          es: "Encargado de la integración IoT, sensores, dispositivo de monitoreo y conexión con la plataforma.",
          en: "Responsible for IoT integration, sensors, monitoring device, and platform connection."
        }
      },
      {
        name: "Rafael",
        role: { es: "Gestión del proyecto", en: "Project management" },
        image: "assets/img_Rafael.png",
        description: {
          es: "Apoya en la organización del proyecto, documentación, coordinación del equipo y seguimiento de entregables.",
          en: "Supports project organization, documentation, team coordination, and deliverable tracking."
        }
      }
    ]
  },

  video: {
    title: { es: "Video sobre el equipo", en: "Team video" },
    text: {
      es: "Conoce al equipo detrás de TukunTech y cómo trabajamos para desarrollar una solución de monitoreo de salud basada en tecnología IoT.",
      en: "Meet the team behind TukunTech and how we work to develop an IoT-based health monitoring solution."
    }
  },

  contact: {
    title: { es: "Contáctanos", en: "Contact us" },
    subtitle: {
      es: "Déjanos tus datos y nuestro equipo se comunicará contigo para brindarte más información.",
      en: "Leave your details and our team will contact you to provide more information."
    },
    info: { es: "Información de contacto", en: "Contact information" },
    supportMsg: {
      es: "Estamos disponibles para resolver dudas sobre planes, funcionamiento del dispositivo, acceso a la app y soporte general.",
      en: "We are available to answer questions about plans, device operation, app access, and general support."
    },
    emailLabel: { es: "Correo", en: "Email" },
    phoneLabel: { es: "Teléfono", en: "Phone" },
    hoursLabel: { es: "Horario de atención", en: "Business hours" },
    hours: { es: "Lunes a viernes, 9:00 a.m. - 6:00 p.m.", en: "Monday to Friday, 9:00 a.m. - 6:00 p.m." },
    success: {
      es: "¡Gracias! Hemos recibido tu solicitud y nos comunicaremos contigo pronto.",
      en: "Thank you! We received your request and will contact you soon."
    },
    submit: { es: "Enviar solicitud", en: "Send request" },
    fields: {
      firstName: { es: "Nombre", en: "First name" },
      lastName: { es: "Apellido", en: "Last name" },
      email: { es: "Correo electrónico", en: "Email address" },
      phone: { es: "Celular", en: "Phone" },
      topic: { es: "Tema", en: "Topic" },
      message: { es: "Mensaje", en: "Message" }
    },
    topics: {
      info: { es: "Información", en: "Information" },
      individual: { es: "Plan individual", en: "Individual plan" },
      family: { es: "Plan familiar", en: "Family plan" },
      support: { es: "Soporte", en: "Support" },
      other: { es: "Otros", en: "Other" }
    },
    errors: {
      required: { es: "Este campo es obligatorio.", en: "This field is required." },
      email: { es: "Ingresa un correo válido.", en: "Enter a valid email." },
      phone: { es: "Ingresa un celular válido.", en: "Enter a valid phone number." }
    }
  },

  footer: {
    desc: {
      es: "TukunTech es una solución de monitoreo preventivo de salud basada en IoT.",
      en: "TukunTech is an IoT-based preventive health monitoring solution."
    },
    social: { es: "Redes sociales", en: "Social media" },
    nav: { es: "Navegación", en: "Navigation" },
    contact: { es: "Contacto", en: "Contact" },
    disclaimer: {
      es: "TukunTech es una herramienta de monitoreo preventivo y acompañamiento. No reemplaza el diagnóstico médico, la atención profesional ni los servicios de emergencia.",
      en: "TukunTech is a preventive monitoring and support tool. It does not replace medical diagnosis, professional care, or emergency services."
    },
    rights: { es: "© 2026 TukunTech. Todos los derechos reservados.", en: "© 2026 TukunTech. All rights reserved." }
  }
};

const iconMap = {
  heart: `<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  chart: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/></svg>`,
  watch: `<svg viewBox="0 0 24 24"><rect x="7" y="6" width="10" height="12" rx="2"/><path d="M9 2h6M9 22h6"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>`,
  activity: `<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 8L9 4l-3 8H2"/></svg>`,
  users: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  history: `<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>`,
  target: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  eye: `<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`
};

function text(value) {
  return typeof value === "string" ? value : value[state.lang];
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = key.split(".").reduce((acc, part) => acc?.[part], translations);

    if (value) {
      element.textContent = text(value);
    }
  });

  document.querySelectorAll("[data-label-es]").forEach((element) => {
    element.textContent = lang === "es" ? element.dataset.labelEs : element.dataset.labelEn;
  });

  document.querySelectorAll(".lang-option, .mobile-lang").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  const medicalTitle = document.getElementById("medicalTitle");
  if (medicalTitle) {
    medicalTitle.textContent = lang === "es" ? "⚕ Aviso médico:" : "⚕ Medical notice:";
  }

  renderAll();
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  closeMobileMenu();
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.getElementById("menuButton");

  if (mobileMenu) mobileMenu.classList.remove("open");
  if (menuButton) menuButton.classList.remove("active");
}

function renderNav() {
  const desktopNav = document.getElementById("desktopNav");
  const mobileNav = document.getElementById("mobileNav");
  const footerNav = document.getElementById("footerNav");

  const navButtons = translations.nav.items
    .map(item => `<button class="nav-link" data-scroll="${item.id}">${text(item.label)}</button>`)
    .join("");

  if (desktopNav) desktopNav.innerHTML = navButtons;
  if (mobileNav) mobileNav.innerHTML = navButtons;

  if (footerNav) {
    footerNav.innerHTML = translations.nav.items
      .map(item => `<li><button data-scroll="${item.id}">${text(item.label)}</button></li>`)
      .join("");
  }
}

function renderHeroFeatures() {
  const heroFeatures = document.getElementById("heroFeatures");
  if (!heroFeatures) return;

  heroFeatures.innerHTML = translations.hero.features
    .map(item => `
      <div class="hero-feature">
        <span>${iconMap[item.icon]}</span>
        <p>${text(item.text)}</p>
      </div>
    `)
    .join("");
}

function renderProductCards() {
  const productCards = document.getElementById("productCards");
  if (!productCards) return;

  productCards.innerHTML = translations.product.cards
    .map(item => `
      <article class="info-card">
        <div class="icon-box">${iconMap[item.icon]}</div>
        <h3>${text(item.title)}</h3>
        <p>${text(item.text)}</p>
      </article>
    `)
    .join("");
}

function renderServiceCards() {
  const serviceCards = document.getElementById("serviceCards");
  if (!serviceCards) return;

  serviceCards.innerHTML = translations.services.cards
    .map(item => `
      <article class="service-card">
        <div class="icon-box">${iconMap[item.icon]}</div>
        <h3>${text(item.title)}</h3>
        <p>${text(item.text)}</p>
      </article>
    `)
    .join("");
}

function renderSteps() {
  const stepsGrid = document.getElementById("stepsGrid");
  if (!stepsGrid) return;

  stepsGrid.innerHTML = translations.how.steps
    .map((item, index) => `
      <li class="step-card">
        <div class="step-number">${index + 1}</div>
        <h3>${text(item.title)}</h3>
        <p>${text(item.text)}</p>
      </li>
    `)
    .join("");
}

function renderPlans() {
  const plansGrid = document.getElementById("plansGrid");
  if (!plansGrid) return;

  plansGrid.innerHTML = translations.plans.items
    .map(item => `
      <article class="plan-card ${item.featured ? "featured" : ""}">
        ${item.featured ? `<span class="plan-badge">${text(translations.plans.popular)}</span>` : ""}

        <h3>${text(item.name)}</h3>

        <div class="plan-price">
          ${item.price}
        </div>

        <p class="plan-note">${text(item.note)}</p>

        <ul>
          ${item.features[state.lang].map(feature => `<li>${feature}</li>`).join("")}
        </ul>
      </article>
    `)
    .join("");
}

function renderMission() {
  const missionGrid = document.getElementById("missionGrid");
  if (!missionGrid) return;

  missionGrid.innerHTML = translations.mv.items
    .map(item => `
      <article class="mission-card">
        <div class="icon-box">${iconMap[item.icon]}</div>
        <h3>${text(item.title)}</h3>
        <p>${text(item.text)}</p>
      </article>
    `)
    .join("");
}

function renderTestimonials() {
  const testimonialCards = document.getElementById("testimonialCards");
  if (!testimonialCards) return;

  testimonialCards.innerHTML = translations.testimonials.items
    .map(item => `
      <article class="testimonial-card">
        <div class="quote-icon">“</div>
        <p>"${text(item.text)}"</p>

        <div class="testimonial-author">
          <div class="testimonial-avatar">
            <img src="${item.image}" alt="${text(item.name)}" loading="lazy" />
          </div>
          <b>${text(item.name)}</b>
        </div>
      </article>
    `)
    .join("");
}

function renderFaq() {
  const faqList = document.getElementById("faqList");
  if (!faqList) return;

  faqList.innerHTML = translations.faq.items
    .map((item, index) => `
      <article class="faq-item ${index === 0 ? "open" : ""}">
        <button class="faq-question" type="button">
          <span>${text(item.q)}</span>
          <span class="faq-plus">+</span>
        </button>
        <div class="faq-answer">${text(item.a)}</div>
      </article>
    `)
    .join("");
}

function renderTeam() {
  const teamGrid = document.getElementById("teamGrid");
  if (!teamGrid) return;

  teamGrid.innerHTML = translations.team.members
    .map(member => `
      <article class="team-card">
        <div class="team-card-inner">
          <div class="team-face team-front">
            <img src="${member.image}" alt="${member.name}" class="team-photo" loading="lazy" />

            <div class="team-info">
              <h3>${member.name}</h3>
              <p>${text(member.role)}</p>
              <span class="team-flip-hint">
                ${state.lang === "es" ? "Ver descripción" : "View description"}
              </span>
            </div>
          </div>

          <div class="team-face team-back">
            <div class="team-back-content">
              <h3>${member.name}</h3>
              <p class="team-back-role">${text(member.role)}</p>
              <p class="team-back-description">${text(member.description)}</p>
              <span class="team-flip-hint">
                ${state.lang === "es" ? "Volver" : "Back"}
              </span>
            </div>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function renderAll() {
  renderNav();
  renderHeroFeatures();
  renderProductCards();
  renderServiceCards();
  renderSteps();
  renderPlans();
  renderMission();
  renderTestimonials();
  renderFaq();
  renderTeam();
  bindDynamicEvents();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-scroll]").forEach((element) => {
    element.onclick = () => scrollToSection(element.dataset.scroll);
  });

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.onclick = () => {
      const item = button.closest(".faq-item");
      if (item) item.classList.toggle("open");
    };
  });

  document.querySelectorAll(".team-card-inner").forEach((card) => {
    card.onclick = () => {
      card.classList.toggle("flipped");
    };
  });
}

function validateForm(event) {
  event.preventDefault();

  const fields = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    topic: document.getElementById("topic"),
    message: document.getElementById("message")
  };

  let isValid = true;

  Object.values(fields).forEach((field) => {
    if (!field) return;

    const label = field.closest("label");
    const error = label?.querySelector(".error-message");

    if (!label || !error) return;

    label.classList.remove("invalid");
    error.textContent = "";

    if (!field.value.trim()) {
      label.classList.add("invalid");
      error.textContent = text(translations.contact.errors.required);
      isValid = false;
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (fields.email?.value.trim() && !emailRegex.test(fields.email.value.trim())) {
    const label = fields.email.closest("label");
    label.classList.add("invalid");
    label.querySelector(".error-message").textContent = text(translations.contact.errors.email);
    isValid = false;
  }

  const phoneRegex = /^[0-9+\s-]{7,16}$/;
  if (fields.phone?.value.trim() && !phoneRegex.test(fields.phone.value.trim())) {
    const label = fields.phone.closest("label");
    label.classList.add("invalid");
    label.querySelector(".error-message").textContent = text(translations.contact.errors.phone);
    isValid = false;
  }

  if (!isValid) return;

  const successBox = document.getElementById("successBox");
  const contactForm = document.getElementById("contactForm");

  if (successBox) successBox.classList.add("show");
  if (contactForm) contactForm.reset();

  setTimeout(() => {
    if (successBox) successBox.classList.remove("show");
  }, 4500);
}

function updateVitals() {
  const heartRate = document.getElementById("heartRate");
  const spo2 = document.getElementById("spo2");
  const stabilityText = document.getElementById("stabilityText");

  if (!heartRate || !spo2 || !stabilityText) return;

  const hr = 74 + Math.floor(Math.random() * 9);
  const oxygen = 96 + Math.floor(Math.random() * 3);
  const stability = 10 + Math.floor(Math.random() * 6);

  heartRate.textContent = hr;
  spo2.textContent = oxygen;
  stabilityText.textContent = state.lang === "es"
    ? `+${stability}% estabilidad`
    : `+${stability}% stability`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const contactForm = document.getElementById("contactForm");
  const siteHeader = document.getElementById("siteHeader");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  document.querySelectorAll(".lang-option, .mobile-lang").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
  }

  if (siteHeader) {
    window.addEventListener("scroll", () => {
      siteHeader.classList.toggle("scrolled", window.scrollY > 10);
    });
  }

  setInterval(updateVitals, 2200);
  updateVitals();
});