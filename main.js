// AImpact - Landing Page - Interatividade e traduções

const translations = {
  it: {
    nav_services: 'Servizi',
    nav_how: 'Come lavoriamo',
    nav_who: 'Chi siamo',
    nav_contact: 'Contatto',
    nav_cta: 'Consulenza Gratuita',
    hero_tags: 'Automazione Intelligente • Knowledge Brain • Strategia Predittiva • Data Engineering',
    hero_title: 'Ci concentriamo sulla costruzione e scalatura di ',
    hero_title_highlight: 'automazione con IA',
    hero_title_end: ' per ottimizzare il modo in cui lavori.',
    hero_desc: 'Implementiamo sistemi intelligenti che eliminano compiti ripetitivi e portano risultati misurabili alla tua azienda.',
    hero_cta1: 'Parliamone',
    hero_cta2: 'Scopri come',
    hero_founder_label: 'Founder',
    hero_founder_name: 'AImpact',
    hero_founder_link: 'Parliamone →',
    stat1_label: 'Produttività media aumentata',
    stat1_sublabel: 'nei progetti implementati',
    stat2_label: 'Anni di esperienza combinata',
    stat2_sublabel: 'team tecnico e business',
    stat3_label: 'Dati protetti',
    stat3_sublabel: 'on-premise o infrastruttura dedicata',
    rec_tag: 'Perché sceglierci',
    rec_title: 'Riconoscimento globale, con focus su innovazione e performance.',
    rec_desc: 'La tua trasformazione con l\'IA inizia con una conversazione. Parliamone oggi.',
    rec_cta: 'Parliamone →',
    rec_card1: 'Clienti in più di 10 paesi. Supportiamo le imprese in tutto il mondo con sede in Argentina e operazioni negli USA.',
    rec_card2: 'Niente fronzoli, solo risultati. Agenti IA e strumenti di automazione che ottimizzano le tue operazioni.',
    services_tag: 'Cosa facciamo',
    services_title: 'Servizi.',
    services_start: 'Inizia →',
    s1_subtitle: 'Costruiamo fondamenta solide',
    s1_desc: 'Se la tua azienda ha dati sparsi ovunque, nessuna IA potrà aiutarti. Sistemiamo le fondamenta della tua struttura digitale per far lavorare l\'intelligenza su informazioni vere e sicure.',
    s1_tagline: 'Addio caos nei dati',
    cats_label: 'Categorie',
    s1_cat1: 'Data Engineering',
    s1_cat2: 'Strutturazione',
    s1_cat3: 'Governance',
    s2_subtitle: 'Automatizziamo la routine',
    s2_desc: 'Inserire fatture, riconciliare pagamenti o rispondere a richieste ripetitive è una tortura. Lasciamo fare questo lavoro operativo all\'IA.',
    s2_tagline: 'Produttività +30% in media',
    s2_cat1: 'Automazione',
    s2_cat2: 'IA',
    s2_cat3: 'Ottimizzazione',
    s3_subtitle: 'Il "Cervello" della tua azienda',
    s3_desc: 'Creiamo una chat intelligente che conosce ogni manuale, contratto o procedura interna. Basta chiedere per avere la risposta giusta, subito.',
    s3_tagline: 'Conoscenza a portata di click',
    s3_cat1: 'IA',
    s3_cat2: 'Conoscenza',
    s3_cat3: 'RAG',
    s4_subtitle: 'Prevedi il futuro, non subirlo',
    s4_desc: 'Usiamo i tuoi dati per capire cosa servirà domani: scorte, flussi di cassa, opportunità di mercato.',
    s4_tagline: 'Zero decisioni a naso',
    s4_cat1: 'Analytics',
    s4_cat2: 'Previsione',
    s4_cat3: 'IA',
    process_tag: 'Chi siamo',
    process_title: 'Come costruiamo soluzioni con IA.',
    process_desc: 'Vedi come il nostro team combina IA, tecnologia e strategia per fornire sistemi su misura.',
    p1_title: 'Analisi Strategica',
    p1_desc: 'Identifichiamo opportunità di automazione con IA e misure di sicurezza dei dati.',
    p2_title: 'Sviluppi Personalizzati',
    p2_desc: 'Soluzioni che si integrano al tuo ecosistema tecnologico esistente.',
    p3_title: 'Infrastruttura',
    p3_desc: 'Deploy sui nostri server con modello in abbonamento, o sulla tua infrastruttura.',
    p4_title: 'Test e Ottimizzazione',
    p4_desc: 'Test e ottimizzazione con risultati misurabili.',
    test_tag: 'Testimonianze',
    test_title: 'Esperienze.',
    test_quote1: '"L\'agente di supporto IA di AImpact ha trasformato le nostre operazioni, gestendo automaticamente il 65% delle richieste di routine, riducendo il tempo di risposta da 6 ore a 15 minuti."',
    test_quote2: '"Il team AImpact ha garantito la sicurezza necessaria nella configurazione degli agenti IA, dandoci piena fiducia nella protezione delle nostre informazioni."',
    test_quote3: '"Lavorare con AImpact è stata un\'ottima esperienza. Evidenzio professionalità, follow-up attento e chiara proattività."',
    test_stat1: 'Workflow automatizzati',
    test_stat2: 'Portafoglio con focus su impatto sociale',
    test_stat3: 'Prodotti IA sviluppati',
    faq_title: 'Domande? Abbiamo risposte.',
    faq_q1: 'Costruite agenti IA e automazione su misura?',
    faq_a1: 'Sì, siamo specializzati in agenti IA e soluzioni di automazione personalizzate. Offriamo anche i nostri agenti proprietari con costi di setup e abbonamento più bassi.',
    faq_q2: 'Implementate sui nostri server?',
    faq_a2: 'Siamo flessibili. Per clienti senza infrastruttura dedicata, offriamo hosting sui nostri server. Per chi preferisce on-premise, implementiamo sulla vostra infrastruttura.',
    faq_q3: 'Offrite manutenzione?',
    faq_a3: 'Sì. Dopo la consegna del progetto, potete acquistare pacchetti di manutenzione continua per prestazioni ottimali e supporto.',
    faq_q4: 'Qual è la struttura dei prezzi?',
    faq_a4: 'Creiamo preventivi personalizzati per ogni cliente in base alla complessità dell\'automazione. Dopo il primo incontro, forniamo piano e preventivo.',
    faq_q5: 'Dove siete ubicati?',
    faq_a5: 'Siamo con sede in Argentina e negli USA, offrendo i nostri servizi a livello globale.',
    contact_title: 'Parliamone.',
    contact_desc: 'Raccontaci del tuo progetto — sia una chiamata di scoperta, sviluppo personalizzato, consulenza strategica o interesse nei nostri prodotti IA.',
    contact_li1: 'Risposta rapida.',
    contact_li2: 'Dopo il primo incontro, riceverai un piano dettagliato, preventivo e cronogramma.',
    form_name: 'Il tuo nome *',
    form_name_ph: 'Nome completo',
    form_email: 'E-mail *',
    form_email_ph: 'tuo@email.com',
    form_message: 'Messaggio *',
    form_message_ph: 'Raccontaci del tuo progetto...',
    form_submit: 'Invia messaggio',
    form_sending: 'Invio in corso...',
    form_sent: 'Messaggio inviato!',
    form_disclaimer: 'Inviando, accetti i nostri Termini e la Privacy Policy.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Termini di Servizio',
    footer_copy: '© 2026 AImpact. Tutti i diritti riservati.',
    page_title: 'AImpact | Intelligenza Artificiale per le Aziende',
    page_desc: 'AImpact – Intelligenza Artificiale per le PMI. Automatizziamo processi, creiamo Knowledge Brain e strategie predittive.',
  },
  en: {
    nav_services: 'Services',
    nav_how: 'How we work',
    nav_who: 'Who we are',
    nav_contact: 'Contact',
    nav_cta: 'Free Consultation',
    hero_tags: 'Intelligent Automation • Knowledge Brain • Predictive Strategy • Data Engineering',
    hero_title: 'We focus on building and scaling ',
    hero_title_highlight: 'AI automation',
    hero_title_end: ' to streamline how you work.',
    hero_desc: 'We implement intelligent systems that eliminate repetitive tasks and deliver measurable results for your business.',
    hero_cta1: "Let's talk",
    hero_cta2: 'Discover how',
    hero_founder_label: 'Founder',
    hero_founder_name: 'AImpact',
    hero_founder_link: "Let's talk →",
    stat1_label: 'Average productivity increase',
    stat1_sublabel: 'in implemented projects',
    stat2_label: 'Years of combined experience',
    stat2_sublabel: 'technical and business team',
    stat3_label: 'Data protected',
    stat3_sublabel: 'on-premise or dedicated infrastructure',
    rec_tag: 'Why choose us',
    rec_title: 'Global recognition, with a focus on innovation and performance.',
    rec_desc: 'Your AI transformation starts with a conversation. Let\'s talk today.',
    rec_cta: "Let's talk →",
    rec_card1: 'Clients in more than 10 countries. We support businesses worldwide with our headquarters in Argentina and U.S. operations.',
    rec_card2: 'No fluff, just results. AI agents and automation tools that streamline your operations.',
    services_tag: 'What we do',
    services_title: 'Services.',
    services_start: 'Get started →',
    s1_subtitle: 'We build solid foundations',
    s1_desc: 'If your company has data scattered everywhere, no AI can help. We fix the foundations of your digital structure so intelligence works on real, secure information.',
    s1_tagline: 'Goodbye data chaos',
    cats_label: 'Categories',
    s1_cat1: 'Data Engineering',
    s1_cat2: 'Structure',
    s1_cat3: 'Governance',
    s2_subtitle: 'We automate the routine',
    s2_desc: 'Entering invoices, reconciling payments or responding to repetitive requests is torture. We let AI do this operational work.',
    s2_tagline: 'Productivity +30% on average',
    s2_cat1: 'Automation',
    s2_cat2: 'AI',
    s2_cat3: 'Optimization',
    s3_subtitle: 'The "Brain" of your company',
    s3_desc: 'We create an intelligent chat that knows every manual, contract or internal procedure. Just ask to get the right answer, right away.',
    s3_tagline: 'Knowledge at your fingertips',
    s3_cat1: 'AI',
    s3_cat2: 'Knowledge',
    s3_cat3: 'RAG',
    s4_subtitle: 'Predict the future, don\'t just react',
    s4_desc: 'We use your data to understand what you\'ll need tomorrow: inventory, cash flow, market opportunities.',
    s4_tagline: 'Zero gut decisions',
    s4_cat1: 'Analytics',
    s4_cat2: 'Forecasting',
    s4_cat3: 'AI',
    process_tag: 'About us',
    process_title: 'How we build AI solutions.',
    process_desc: 'See how our team combines AI, technology and strategy to deliver tailor-made systems.',
    p1_title: 'Strategic Analysis',
    p1_desc: 'We identify AI automation opportunities and data security measures.',
    p2_title: 'Custom Development',
    p2_desc: 'Solutions built to integrate with your existing tech ecosystem.',
    p3_title: 'Infrastructure',
    p3_desc: 'Deploy on our servers with subscription pricing, or on your own infrastructure.',
    p4_title: 'Testing & Optimization',
    p4_desc: 'Testing and optimization with measurable results.',
    test_tag: 'Testimonials',
    test_title: 'Experiences.',
    test_quote1: '"AImpact\'s AI support agent transformed our operations, handling 65% of routine requests automatically, reducing our response time from 6 hours to 15 minutes."',
    test_quote2: '"The AImpact team guaranteed the necessary security when setting up the AI agents, giving us full confidence in the protection of our information."',
    test_quote3: '"Working with AImpact was a great experience. I highlight their professionalism, close follow-up and clear proactivity."',
    test_stat1: 'Automated workflows',
    test_stat2: 'Portfolio focused on social impact',
    test_stat3: 'AI products developed',
    faq_title: 'Got questions? We\'ve got answers.',
    faq_q1: 'Do you build custom AI agents and automation?',
    faq_a1: 'Yes, we specialize in custom AI agents and automation solutions. We also offer our proprietary agents with lower setup and subscription costs.',
    faq_q2: 'Do you deploy on our servers?',
    faq_a2: 'We\'re flexible. For clients without dedicated infrastructure, we offer hosting on our servers. For those who prefer on-premise, we deploy on your infrastructure.',
    faq_q3: 'Do you offer maintenance?',
    faq_a3: 'Yes. After project delivery, you can purchase ongoing maintenance packages for optimal performance and support.',
    faq_q4: 'What is your pricing structure?',
    faq_a4: 'We create custom quotes for each client based on automation complexity. After the initial meeting, we provide a plan and quote.',
    faq_q5: 'Where are you located?',
    faq_a5: 'We are headquartered in Argentina and the U.S., offering our services globally.',
    contact_title: "Let's talk.",
    contact_desc: 'Tell us about your project — whether it\'s a discovery call, custom development, strategic consultancy, or interest in our AI products.',
    contact_li1: 'Quick response.',
    contact_li2: 'After the initial meeting, you\'ll receive a detailed plan, budget and timeline.',
    form_name: 'Your name *',
    form_name_ph: 'Full name',
    form_email: 'E-mail *',
    form_email_ph: 'you@email.com',
    form_message: 'Message *',
    form_message_ph: 'Tell us about your project...',
    form_submit: 'Send message',
    form_sending: 'Sending...',
    form_sent: 'Message sent!',
    form_disclaimer: 'By submitting, you agree to our Terms and Privacy Policy.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_copy: '© 2026 AImpact. All rights reserved.',
    page_title: 'AImpact | Artificial Intelligence for Businesses',
    page_desc: 'AImpact – Artificial Intelligence for SMEs. We automate processes, create Knowledge Brains and predictive strategies.',
  },
};

let currentLang = localStorage.getItem('aimpact-lang') || 'it';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQ();
  initContactForm();
  initLangSwitcher();
  initScrollAnimations();
  applyTranslations(currentLang);
});

// Animações no scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.stat, .recognition-card, .service-item, .process-step, .testimonial-card, ' +
    '.recognition .section-tag, .recognition .section-title, .recognition-desc, .recognition .link-cta, ' +
    '.services .section-header, .services-footer, .process .section-tag, .process .section-title, .process-desc, ' +
    '.testimonials .section-tag, .testimonials .section-title, .testimonials-stats > div, ' +
    '.faq .section-tag, .faq .section-title, .faq-list, .contact-info, .contact-form'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach((el, i) => {
    el.classList.add('animate-on-scroll');
    if (i % 4 === 1) el.classList.add('delay-1');
    else if (i % 4 === 2) el.classList.add('delay-2');
    else if (i % 4 === 3) el.classList.add('delay-3');
    observer.observe(el);
  });
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.it;
  const doc = document;

  const updates = [
    ['[data-i18n="nav_services"]', t.nav_services],
    ['[data-i18n="nav_how"]', t.nav_how],
    ['[data-i18n="nav_who"]', t.nav_who],
    ['[data-i18n="nav_contact"]', t.nav_contact],
    ['[data-i18n="nav_cta"]', t.nav_cta],
    ['[data-i18n="hero_tags"]', t.hero_tags],
    ['[data-i18n="hero_title"]', t.hero_title],
    ['[data-i18n="hero_title_highlight"]', t.hero_title_highlight],
    ['[data-i18n="hero_title_end"]', t.hero_title_end],
    ['[data-i18n="hero_desc"]', t.hero_desc],
    ['[data-i18n="hero_cta1"]', t.hero_cta1],
    ['[data-i18n="hero_cta2"]', t.hero_cta2],
    ['[data-i18n="hero_founder_label"]', t.hero_founder_label],
    ['[data-i18n="hero_founder_link"]', t.hero_founder_link],
    ['[data-i18n="stat1_label"]', t.stat1_label],
    ['[data-i18n="stat1_sublabel"]', t.stat1_sublabel],
    ['[data-i18n="stat2_label"]', t.stat2_label],
    ['[data-i18n="stat2_sublabel"]', t.stat2_sublabel],
    ['[data-i18n="stat3_label"]', t.stat3_label],
    ['[data-i18n="stat3_sublabel"]', t.stat3_sublabel],
    ['[data-i18n="rec_tag"]', t.rec_tag],
    ['[data-i18n="rec_title"]', t.rec_title],
    ['[data-i18n="rec_desc"]', t.rec_desc],
    ['[data-i18n="rec_cta"]', t.rec_cta],
    ['[data-i18n="rec_card1"]', t.rec_card1],
    ['[data-i18n="rec_card2"]', t.rec_card2],
    ['[data-i18n="services_tag"]', t.services_tag],
    ['[data-i18n="services_title"]', t.services_title],
    ['[data-i18n="services_start"]', t.services_start],
    ['[data-i18n="s1_subtitle"]', t.s1_subtitle],
    ['[data-i18n="s1_desc"]', t.s1_desc],
    ['[data-i18n="s1_tagline"]', t.s1_tagline],
    ['[data-i18n="cats_label"]', t.cats_label],
    ['[data-i18n="s1_cat1"]', t.s1_cat1],
    ['[data-i18n="s1_cat2"]', t.s1_cat2],
    ['[data-i18n="s1_cat3"]', t.s1_cat3],
    ['[data-i18n="s2_subtitle"]', t.s2_subtitle],
    ['[data-i18n="s2_desc"]', t.s2_desc],
    ['[data-i18n="s2_tagline"]', t.s2_tagline],
    ['[data-i18n="s2_cat1"]', t.s2_cat1],
    ['[data-i18n="s2_cat2"]', t.s2_cat2],
    ['[data-i18n="s2_cat3"]', t.s2_cat3],
    ['[data-i18n="s3_subtitle"]', t.s3_subtitle],
    ['[data-i18n="s3_desc"]', t.s3_desc],
    ['[data-i18n="s3_tagline"]', t.s3_tagline],
    ['[data-i18n="s3_cat1"]', t.s3_cat1],
    ['[data-i18n="s3_cat2"]', t.s3_cat2],
    ['[data-i18n="s3_cat3"]', t.s3_cat3],
    ['[data-i18n="s4_subtitle"]', t.s4_subtitle],
    ['[data-i18n="s4_desc"]', t.s4_desc],
    ['[data-i18n="s4_tagline"]', t.s4_tagline],
    ['[data-i18n="s4_cat1"]', t.s4_cat1],
    ['[data-i18n="s4_cat2"]', t.s4_cat2],
    ['[data-i18n="s4_cat3"]', t.s4_cat3],
    ['[data-i18n="process_tag"]', t.process_tag],
    ['[data-i18n="process_title"]', t.process_title],
    ['[data-i18n="process_desc"]', t.process_desc],
    ['[data-i18n="p1_title"]', t.p1_title],
    ['[data-i18n="p1_desc"]', t.p1_desc],
    ['[data-i18n="p2_title"]', t.p2_title],
    ['[data-i18n="p2_desc"]', t.p2_desc],
    ['[data-i18n="p3_title"]', t.p3_title],
    ['[data-i18n="p3_desc"]', t.p3_desc],
    ['[data-i18n="p4_title"]', t.p4_title],
    ['[data-i18n="p4_desc"]', t.p4_desc],
    ['[data-i18n="test_tag"]', t.test_tag],
    ['[data-i18n="test_title"]', t.test_title],
    ['[data-i18n="test_quote1"]', t.test_quote1],
    ['[data-i18n="test_quote2"]', t.test_quote2],
    ['[data-i18n="test_quote3"]', t.test_quote3],
    ['[data-i18n="test_stat1"]', t.test_stat1],
    ['[data-i18n="test_stat2"]', t.test_stat2],
    ['[data-i18n="test_stat3"]', t.test_stat3],
    ['[data-i18n="faq_title"]', t.faq_title],
    ['[data-i18n="faq_q1"]', t.faq_q1],
    ['[data-i18n="faq_a1"]', t.faq_a1],
    ['[data-i18n="faq_q2"]', t.faq_q2],
    ['[data-i18n="faq_a2"]', t.faq_a2],
    ['[data-i18n="faq_q3"]', t.faq_q3],
    ['[data-i18n="faq_a3"]', t.faq_a3],
    ['[data-i18n="faq_q4"]', t.faq_q4],
    ['[data-i18n="faq_a4"]', t.faq_a4],
    ['[data-i18n="faq_q5"]', t.faq_q5],
    ['[data-i18n="faq_a5"]', t.faq_a5],
    ['[data-i18n="contact_title"]', t.contact_title],
    ['[data-i18n="contact_desc"]', t.contact_desc],
    ['[data-i18n="contact_li1"]', t.contact_li1],
    ['[data-i18n="contact_li2"]', t.contact_li2],
    ['[data-i18n="form_name"]', t.form_name],
    ['[data-i18n="form_email"]', t.form_email],
    ['[data-i18n="form_message"]', t.form_message],
    ['[data-i18n="form_submit"]', t.form_submit],
    ['[data-i18n="form_disclaimer"]', t.form_disclaimer],
    ['[data-i18n="footer_privacy"]', t.footer_privacy],
    ['[data-i18n="footer_terms"]', t.footer_terms],
    ['[data-i18n="footer_copy"]', t.footer_copy],
  ];

  updates.forEach(([selector, text]) => {
    doc.querySelectorAll(selector).forEach((el) => {
      el.textContent = text;
    });
  });

  doc.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  doc.documentElement.lang = lang === 'it' ? 'it' : 'en';

  const titleEl = doc.getElementById('pageTitle');
  const metaDesc = doc.querySelector('meta[name="description"]');
  if (titleEl && t.page_title) titleEl.textContent = t.page_title;
  if (metaDesc && t.page_desc) metaDesc.setAttribute('content', t.page_desc);

  const submitBtn = doc.querySelector('#contactForm button[type="submit"]');
  if (submitBtn) submitBtn.setAttribute('data-i18n-submit', t.form_submit);
}

function setLang(lang) {
  if (!lang || !translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('aimpact-lang', lang);
  applyTranslations(lang);
  document.querySelectorAll('.lang-switcher button').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-switcher button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLang(lang);
    });
  });

  document.querySelectorAll('.lang-switcher').forEach((sw) => {
    sw.querySelector(`[data-lang="${currentLang}"]`)?.classList.add('active');
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach((i) => {
        i.classList.remove('active');
        i.querySelector('.faq-answer')?.classList.remove('open');
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const t = translations[currentLang];
    const sentText = t ? t.form_sent : 'Messaggio inviato!';
    const submitText = t ? t.form_submit : 'Invia messaggio';
    const sendingText = t ? t.form_sending : 'Invio in corso...';

    submitBtn.textContent = sendingText;
    submitBtn.disabled = true;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitBtn.textContent = sentText;
    form.reset();

    setTimeout(() => {
      submitBtn.textContent = submitText;
      submitBtn.disabled = false;
    }, 3000);
  });
}
