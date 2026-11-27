import type {
  AudiovisualGearItem,
  CompetencyItem,
  HobbyItem,
  LocalizedText,
  ProfileMetric,
  SoftwareSkillItem,
} from '../types/portfolio';

export const PROFILE = {
  fullName: 'Julio Alejandro Carrasco Contreras',
  shortName: 'Alejandro Carrasco',
  cip: { es: 'CIP N.º 264611', en: 'CIP No. 264611' } satisfies LocalizedText,
  cipChapterCode: '008267-20-H',
  rnpStatus: { es: 'RNP Vigente', en: 'Active RNP Registry' } satisfies LocalizedText,
  headlineRole: {
    es: 'Ingeniero Ambiental Titulado, Colegiado y Habilitado · Supervisor SSOMA / Especialista Senior HSE & Arquitecto Full-Stack / IA',
    en: 'Chartered Environmental Engineer · SSOMA Supervisor / Senior HSE Specialist & Full-Stack / AI Solutions Architect',
  } satisfies LocalizedText,
  titlesLine: {
    es: 'Especialista HSE Senior | Auditor HSE | Evaluador MTPE | Full-Stack & Mobile Builder',
    en: 'Senior HSE Specialist | HSE Auditor | MTPE Evaluator | Full-Stack & Mobile Builder',
  } satisfies LocalizedText,
  aboutSummary: {
    es: 'Ingeniero Especialista acreditado por el MTPE como Evaluador de Competencias Laborales y Profesional Competente en Prevención de Riesgos Laborales al nivel Jefe y/o Supervisor, con más de 8 años de experiencia profesional acreditada en Minería, Construcción, Industria, Metalmecánica, Telecomunicaciones y Servicios Generales a nivel nacional. Perfil estratégico orientado a resultados, especializado en arquitectura y optimización de Sistemas Integrados de Gestión (HSE/SIG) y en el desarrollo completo de aplicaciones móviles en Google Play y plataformas web empresariales con analítica e inteligencia artificial.',
    en: 'Chartered Environmental Engineer accredited by Peru’s Ministry of Labor (MTPE) as a Labor Competency Evaluator and Competent Professional in Occupational Risk Prevention at Chief/Supervisor level, with over 8 years of verified experience across Mining, Construction, Manufacturing, Metalworking, Telecommunications, and General Services nationwide. Results-driven strategist specialized in Integrated Management Systems (HSE/IMS) and full-cycle software engineering—shipping 4 Google Play mobile apps and 13 enterprise platforms powered by data analytics and AI.',
  } satisfies LocalizedText,
  workStyle: {
    es: 'Estilo de trabajo (INTJ-Te): Perfil analítico-estratégico con alta capacidad de razonamiento lógico y abstracción compleja, orientado a la eficiencia operativa, arquitectura de sistemas y toma de decisiones objetivas basadas en KPIs.',
    en: 'Work style (INTJ-Te): Analytical-strategic profile with deep logical reasoning and complex systems abstraction, focused on operational efficiency, clean architecture, and objective KPI-driven decision-making.',
  } satisfies LocalizedText,
  email: 'ing.alejandro.carrasco@gmail.com',
  phoneDisplay: '+51 950 069 153',
  whatsappUrl:
    'https://wa.me/51950069153?text=Hola%20Ing.%20Julio%20Alejandro%2C%20vi%20tu%20Curr%C3%ADculum%20Digital%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.',
  dossierRequestWhatsappUrl:
    'https://wa.me/51950069153?text=Hola%20Ing.%20Julio%20Alejandro%2C%20solicito%20el%20CV%20Documentado%20v35%20(252%20p%C3%A1ginas)%20para%20proceso%20de%20selecci%C3%B3n.',
  dossierRequestMailto:
    'mailto:ing.alejandro.carrasco@gmail.com?subject=Solicitud%20de%20CV%20Documentado%20v35%20(252%20p%C3%A1ginas)&body=Hola%20Ing.%20Alejandro%2C%20me%20gustar%C3%ADa%20recibir%20el%20CV%20Documentado%20v35%20para%20evaluaci%C3%B3n.',
  location: { es: 'Lima, Perú', en: 'Lima, Peru' } satisfies LocalizedText,
  linkedinUrl: 'https://www.linkedin.com/in/alejandroexpert/',
  githubUrl: 'https://github.com/axsangerencia-prog',
  ecosystemUrl: 'https://ecosystem-sig.myssa.com.pe/',
  sanitizedCvPath: 'docs/CV-Ejecutivo-Alejandro-Carrasco.pdf',
  portraitPath: 'images/alejandro-portrait.jpg',
};

export const METRICS: ProfileMetric[] = [
  {
    value: '8.22+',
    label: { es: 'Años acreditados', en: 'Verified years' },
    detail: { es: '13 periodos · 35 consultorías', en: '13 periods · 35 consulting projects' },
  },
  {
    value: '17',
    label: { es: 'Sistemas en vivo', en: 'Live products' },
    detail: { es: '4 Apps Google Play + 13 MYSSA', en: '4 Play Store Apps + 13 MYSSA' },
  },
  {
    value: '2,511+',
    label: { es: 'Horas certificadas', en: 'Certified hours' },
    detail: { es: '120+ cursos · Google AI · Power BI', en: '120+ courses · Google AI · Power BI' },
  },
  {
    value: '+400',
    label: { es: 'Usuarios en campo', en: 'Field workforce' },
    detail: { es: 'Digitalización SIG/SSOMA real', en: 'Enterprise HSE digitization' },
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'comp-1',
    title: {
      es: 'Estructuración de procesos integrados y flujos escalables',
      en: 'Structured integrated processes and scalable workflows',
    },
    detail: {
      es: 'Arquitectura documental y digital para homologar operaciones críticas sin cuellos de botella.',
      en: 'End-to-end operational and digital workflows designed to scale across multi-site teams.',
    },
  },
  {
    id: 'comp-2',
    title: {
      es: 'Anticipación de escenarios y alineación táctica corporativa',
      en: 'Scenario anticipation and corporate goal alignment',
    },
    detail: {
      es: 'Planificación preventiva orientada a continuidad operativa, licitaciones y metas de negocio.',
      en: 'Proactive risk planning aligned with uptime, contract bidding, and executive KPIs.',
    },
  },
  {
    id: 'comp-3',
    title: {
      es: 'Análisis exhaustivo, investigación técnica y prevención',
      en: 'Rigorous root-cause analysis and prevention modeling',
    },
    detail: {
      es: 'Metodologías ICAM, SCAT, BowTie, Árbol de Causas, Ishikawa y 5 Porqués.',
      en: 'Field investigations powered by ICAM, SCAT, BowTie, Cause Tree, Ishikawa, and 5 Whys.',
    },
  },
  {
    id: 'comp-4',
    title: {
      es: 'Control mediante indicadores (KPIs) y analítica de desempeño',
      en: 'KPI governance and performance analytics',
    },
    detail: {
      es: 'Tableros ejecutivos en Power BI y plataformas propias para toma de decisiones en tiempo real.',
      en: 'Executive dashboards in Power BI and custom web suites for real-time tracking.',
    },
  },
  {
    id: 'comp-5',
    title: {
      es: 'Eliminación de redundancias, control de calidad y mejora continua',
      en: 'Elimination of redundancies, QA & continuous improvement',
    },
    detail: {
      es: 'Automatización cero-papel de IPERC, inspecciones, entregas de EPP y verificaciones QR.',
      en: 'Paperless automation of risk matrices, inspections, PPE logs, and QR validation.',
    },
  },
  {
    id: 'comp-6',
    title: {
      es: 'Criterio riguroso en auditorías y normativas técnicas',
      en: 'Strict audit judgment across national & global standards',
    },
    detail: {
      es: 'Dominio de Ley 29783, D.S. 024-2016-EM, NTE G.050, ISO 9001/14001/45001/19011, OSHA y NFPA.',
      en: 'Full command of Law 29783, D.S. 024-2016-EM, ISO 9001/14001/45001/19011, OSHA & NFPA.',
    },
  },
  {
    id: 'comp-7',
    title: {
      es: 'Dirección por objetivos, rendición de cuentas y resolución estructurada',
      en: 'Objective-driven leadership, accountability & structured execution',
    },
    detail: {
      es: 'Conducción de brigadas, contratistas internacionales y equipos multidisciplinarios en obra y planta.',
      en: 'Hands-on leadership of field crews, contractors, and cross-functional engineering teams.',
    },
  },
];

export const SOFTWARE_SKILLS: SoftwareSkillItem[] = [
  { order: 1, name: 'Microsoft Word', level: { es: 'Avanzado', en: 'Advanced' }, category: 'office-bi' },
  { order: 2, name: 'Microsoft Excel', level: { es: 'Avanzado', en: 'Advanced' }, category: 'office-bi' },
  { order: 3, name: 'Microsoft PowerPoint', level: { es: 'Avanzado', en: 'Advanced' }, category: 'office-bi' },
  { order: 4, name: 'Microsoft Power BI', level: { es: 'Avanzado', en: 'Advanced' }, category: 'office-bi' },
  { order: 5, name: 'AutoCAD', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'engineering-design' },
  { order: 6, name: 'Adobe Illustrator', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'engineering-design' },
  { order: 7, name: 'Adobe Photoshop', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'engineering-design' },
  { order: 8, name: 'Adobe Premiere Pro', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'engineering-design' },
  { order: 9, name: 'Android Studio', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'dev-3d' },
  { order: 10, name: 'Visual Studio Code', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'dev-3d' },
  { order: 11, name: 'GitHub', level: { es: 'Intermedio', en: 'Intermediate' }, category: 'dev-3d' },
  { order: 12, name: 'Blender', level: { es: 'Básico', en: 'Basic' }, category: 'dev-3d' },
];

export const PRODUCTION_TECH_TAGS = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vite PWA',
  'Kotlin / Java (Android)',
  'CameraX & ZXing',
  'Google Firebase',
  'Google Play Billing',
  'ArcGIS (I–III)',
  'Windows Desktop Apps',
  'Prompt Engineering / Google AI',
];

export const AUDIOVISUAL_GEAR: AudiovisualGearItem[] = [
  {
    id: 'suite-adobe',
    name: 'Adobe Illustrator · Photoshop · Premiere Pro',
    role: {
      es: 'Edición audiovisual y diseño de identidad visual',
      en: 'Video editing, thumbnails & visual brand identity',
    },
    details: {
      es: 'Edición integral de videos técnicos, miniaturas de alto impacto, piezas gráficas corporativas y material de capacitación para marca personal y plataformas digitales.',
      en: 'End-to-end production of technical videos, high-impact thumbnails, corporate assets, and training media for personal brand and digital channels.',
    },
  },
  {
    id: 'drone-gopro',
    name: 'DJI Mini 2 · GoPro Hero 9 & Hero 11',
    role: {
      es: 'Cinematografía aérea con dron y registro de acción en campo',
      en: 'Aerial drone cinematography & field action capture',
    },
    details: {
      es: 'Grabación con dron DJI Mini 2 y cámaras GoPro Hero 9 y Hero 11 para cobertura de escenas, eventos operativos, viajes y creación de contenido para YouTube.',
      en: 'Aerial drone filming (DJI Mini 2) and GoPro Hero 9 & 11 footage for events, technical documentation, international travel, and YouTube storytelling.',
    },
  },
];

export const HOBBIES: HobbyItem[] = [
  {
    order: 1,
    text: {
      es: 'Lectura continua sobre desarrollo personal, estrategia empresarial, liderazgo y espiritualidad.',
      en: 'Continuous reading on personal growth, business strategy, leadership, and spirituality.',
    },
  },
  {
    order: 2,
    text: {
      es: 'Viajar al extranjero para expandir la perspectiva de vida y producir contenido audiovisual para YouTube.',
      en: 'Traveling abroad to broaden life perspective and produce travel & engineering videos for YouTube.',
    },
  },
  {
    order: 3,
    text: {
      es: 'Curar y organizar una biblioteca personal de más de 150 libros en español e inglés.',
      en: 'Curating a personal library of 150+ books across Spanish and English.',
    },
  },
  {
    order: 4,
    text: {
      es: 'Administrar comunidades nacionales e internacionales de supervisores SSOMA/HSE y desarrollo personal en español e inglés.',
      en: 'Managing national and international SSOMA/HSE supervisor and personal development communities in both Spanish and English.',
    },
  },
];
