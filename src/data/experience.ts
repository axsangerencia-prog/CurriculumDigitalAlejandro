import type { FormalExperienceItem, FreelanceServiceItem } from '../types/portfolio';

export const FORMAL_EXPERIENCE: FormalExperienceItem[] = [
  {
    id: 'exp-myssa',
    order: 1,
    company: 'Mantenimiento y Supervisión S.A. (MYSSA)',
    role: { es: 'Supervisor SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '14/04/2026 – Actualidad', en: 'Apr 14, 2026 – Present' },
    sector: { es: 'Industria Cementera / Minería No Metálica (UNACEM)', en: 'Cement Industry & Plant Shutdowns (UNACEM)' },
    summary: {
      es: 'Supervisión integral de trabajos refractarios y alto riesgo en paradas de planta de UNACEM sede Atocongo, más liderazgo e implementación pura del Ecosistema SIG/SSOMA (13 plataformas digitales + app Windows) para más de 400 trabajadores.',
      en: 'Field supervision of refractory & high-risk plant shutdown operations at UNACEM Atocongo alongside end-to-end engineering of the MYSSA SIG/SSOMA Digital Ecosystem (13 web platforms + Windows app) serving 400+ workers.',
    },
    responsibilities: [
      {
        es: 'Supervisión de estructura refractaria en paradas de planta cementera: implementación, demolición, retiro de material, encofrado, colado, homogenizado, armado de Arch Ring, desmontaje y montaje por izaje de ductos, soldadura estructural y supervisión de personal mexicano.',
        en: 'Supervision of refractory works in cement plant shutdowns: demolition, material removal, formwork, casting, homogenization, Arch Ring assembly, duct rigging/hoisting, structural welding, and supervision of international Mexican crews.',
      },
      {
        es: 'Supervisión de trabajos en altura, caliente, izaje de cargas y espacios confinados en hornos, molinos, prensas de crudo y carbón durante mantenimientos preventivos, correctivos y paradas de planta en UNACEM Atocongo.',
        en: 'High-risk supervision (height, hot work, rigging, confined spaces) inside kilns, mills, and raw/coal presses during preventive, corrective, and major shutdown operations at UNACEM Atocongo.',
      },
      {
        es: 'Arquitecto e implementador del proyecto Ecosistema SIG/SSOMA a nivel empresa (+400 trabajadores): desarrollo e implementación de más de 13 plataformas digitales mediante programación pura.',
        en: 'Lead architect & developer of the company-wide SIG/SSOMA Digital Ecosystem (+400 workers): engineered and deployed 13+ digital platforms from scratch.',
      },
    ],
    featuredLink: {
      label: { es: 'Ver Ecosistema SIG/SSOMA en vivo', en: 'Open Live SIG/SSOMA Ecosystem' },
      url: 'https://ecosystem-sig.myssa.com.pe/',
    },
  },
  {
    id: 'exp-lumat',
    order: 2,
    company: 'LUMAT Construcciones y Servicios Generales S.A.C.',
    role: { es: 'Supervisor de SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '17/02/2026 – 31/03/2026', en: 'Feb 17, 2026 – Mar 31, 2026' },
    sector: { es: 'Construcción e Infraestructura Educativa (UPC)', en: 'Construction & University Infrastructure (UPC)' },
    summary: {
      es: 'Supervisión de personal en obra, gestión integral de documentación SSOMA y elaboración del Dossier de cierre para la remodelación de Sala PTC a Dictado Virtual – UPC San Isidro.',
      en: 'On-site workforce safety supervision, comprehensive HSE documentation management, and final SSOMA Dossier delivery for the PTC-to-Virtual-Classroom remodeling project at UPC San Isidro.',
    },
    responsibilities: [
      {
        es: 'Supervisión de personal operativo y cumplimiento de estándares SSOMA en obra “Remodelación de Sala PTC a Dictado Virtual – UPC San Isidro”.',
        en: 'Direct supervision of field crews and strict HSE compliance during the UPC San Isidro remodeling project.',
      },
      {
        es: 'Gestión documental completa y elaboración del Dossier SSOMA de entrega final.',
        en: 'End-to-end HSE documentation control and final closeout dossier compilation.',
      },
    ],
  },
  {
    id: 'exp-welding',
    order: 3,
    company: 'Welding Estructuras E.I.R.L.',
    role: {
      es: 'Jefe de Seguridad, Salud Ocupacional y Medio Ambiente',
      en: 'Head of Occupational Health, Safety & Environment',
    },
    period: { es: '07/07/2025 – 30/11/2025', en: 'Jul 07, 2025 – Nov 30, 2025' },
    sector: { es: 'Metalmecánica y Construcción (Colegio Bicentenario)', en: 'Metalworking & Public School Construction' },
    summary: {
      es: 'Jefatura y supervisión SSOMA durante la fabricación e instalación de estructuras metálicas en el Colegio Bicentenario I.E. República del Ecuador – Lima.',
      en: 'HSE leadership and field supervision throughout fabrication and installation of structural steelworks at Colegio Bicentenario I.E. República del Ecuador – Lima.',
    },
    responsibilities: [
      {
        es: 'Dirección SSOMA y elaboración de documentación técnica para fabricación e instalación de estructuras metálicas en Lima.',
        en: 'Led HSE compliance and technical safety documentation for structural steel fabrication and erection.',
      },
    ],
  },
  {
    id: 'exp-hpp-2025',
    order: 4,
    company: 'H.P.P. de Aditivos E.I.R.L.',
    role: {
      es: 'Supervisor de Seguridad y Salud en el Trabajo',
      en: 'Occupational Safety & Health Supervisor',
    },
    period: { es: '04/04/2025 – 05/07/2025', en: 'Apr 04, 2025 – Jul 05, 2025' },
    sector: { es: 'Construcción Especializada (Impermeabilización)', en: 'Specialty Construction (Waterproofing)' },
    summary: {
      es: 'Supervisión en trabajos en altura y elaboración de documentación SSOMA para la impermeabilización de techos en el Colegio Bicentenario I.E. República del Ecuador – Lima.',
      en: 'Safety supervision and regulatory compliance documentation for roof waterproofing works at Colegio Bicentenario I.E. República del Ecuador – Lima.',
    },
    responsibilities: [
      {
        es: 'Control de riesgos críticos en altura, productos químicos y documentación SSOMA de obra.',
        en: 'Managed work-at-height and chemical handling controls plus complete site HSE documentation.',
      },
    ],
  },
  {
    id: 'exp-idelcom',
    order: 5,
    company: 'IDELCOM S.A.C.',
    role: { es: 'Supervisor SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '12/02/2025 – 31/03/2025', en: 'Feb 12, 2025 – Mar 31, 2025' },
    sector: { es: 'Telecomunicaciones', en: 'Telecommunications' },
    summary: {
      es: 'Supervisión en campo, homologación de contratista y elaboración de documentación SSOMA para múltiples proyectos de telecomunicaciones en Lima.',
      en: 'Field supervision, contractor prequalification, and HSE documentation across multiple telecommunications deployments in Lima.',
    },
    responsibilities: [
      {
        es: 'Supervisión de proyectos de telecomunicaciones, procesos de homologación y gestión documental SSOMA.',
        en: 'Supervised telecom field operations, managed contractor prequalification, and authored HSE systems.',
      },
    ],
  },
  {
    id: 'exp-geometrica',
    order: 6,
    company: 'Geométrica Ingeniería S.A.C.',
    role: {
      es: 'Especialista de Seguridad en Obra y Salud en el Trabajo',
      en: 'Site Safety & Occupational Health Specialist',
    },
    period: { es: '06/01/2025 – 28/01/2025', en: 'Jan 06, 2025 – Jan 28, 2025' },
    sector: { es: 'Infraestructura Vial (Cajamarca / Sierra Norte)', en: 'Highway Engineering & Road Maintenance (Cajamarca)' },
    summary: {
      es: 'Supervisión SST durante la recopilación de datos en campo para el Expediente Técnico de Mantenimiento Vial (Ciudad de Dios – Cajamarca – Chiple – Trujillo – Chilete).',
      en: 'Occupational health and safety supervision for field survey crews preparing the Road Maintenance Technical File across the Cajamarca–Trujillo–Chiple highway corridor.',
    },
    responsibilities: [
      {
        es: 'Supervisión de seguridad vial y campo en los subtramos 06, 07, 08, 12, 16 y 17 en Cajamarca.',
        en: 'Field and road-safety supervision across highway sub-sections 06, 07, 08, 12, 16, and 17 in Cajamarca.',
      },
    ],
  },
  {
    id: 'exp-cocharcas',
    order: 7,
    company: 'Consorcio Virgen de Cocharcas',
    role: { es: 'Prevencionista de Riesgos', en: 'Occupational Risk Prevention Officer' },
    period: { es: '22/01/2024 – 15/12/2024', en: 'Jan 22, 2024 – Dec 15, 2024' },
    sector: { es: 'Sector Energía / Infraestructura Pública (OSINERGMIN)', en: 'Energy Regulatory Infrastructure (OSINERGMIN)' },
    summary: {
      es: 'Supervisión y elaboración de documentación SSOMA para los servicios de mantenimiento preventivo y correctivo de infraestructura en todas las sedes Región Lima de OSINERGMIN.',
      en: 'Full-year HSE supervision and compliance management for preventive and corrective facility maintenance across every Lima regional headquarters of OSINERGMIN.',
    },
    responsibilities: [
      {
        es: 'Supervisión operativa multisite y gestión documental SSOMA para todas las sedes de OSINERGMIN en Lima.',
        en: 'Multi-site operational supervision and HSE compliance management across OSINERGMIN Lima facilities.',
      },
    ],
  },
  {
    id: 'exp-hpp-2021',
    order: 8,
    company: 'H.P.P. de Aditivos E.I.R.L.',
    role: { es: 'Supervisor SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '15/04/2021 – 20/01/2024', en: 'Apr 15, 2021 – Jan 20, 2024' },
    sector: { es: 'Construcción e Ingeniería Civil Nacional', en: 'Nationwide Construction & Civil Engineering' },
    summary: {
      es: 'Implementación de Sistemas Integrados, supervisión, homologación empresarial y elaboración de documentación SSOMA para múltiples proyectos y licitaciones de construcción a nivel nacional durante casi 3 años.',
      en: 'Nearly 3 years leading HSE implementation, site supervision, corporate prequalification, and technical tender documentation across nationwide construction projects.',
    },
    responsibilities: [
      {
        es: 'Implementación, supervisión en obra, homologaciones y elaboración de expedientes SSOMA para licitaciones públicas y privadas.',
        en: 'Implemented site HSE systems, supervised civil projects, passed client prequalifications, and prepared bid dossiers.',
      },
    ],
  },
  {
    id: 'exp-construc',
    order: 9,
    company: 'Grupo Construc Perú S.A.C.',
    role: { es: 'Jefe SSOMA', en: 'Chief SSOMA / HSE Lead' },
    period: { es: '01/02/2021 – 03/04/2021', en: 'Feb 01, 2021 – Apr 03, 2021' },
    sector: { es: 'Edificaciones y Demoliciones (La Molina, Lima)', en: 'Building Construction & Demolition (La Molina, Lima)' },
    summary: {
      es: 'Jefatura SSOMA para obra de demolición y construcción de vivienda unifamiliar de tres pisos en el distrito de La Molina.',
      en: 'Chief HSE leadership overseeing structural demolition and three-story residential construction in La Molina, Lima.',
    },
    responsibilities: [
      {
        es: 'Supervisión integral de trabajos de demolición, excavación y obra civil bajo Norma G.050.',
        en: 'Supervised demolition, excavation, and structural works in compliance with G.050 safety code.',
      },
    ],
  },
  {
    id: 'exp-evolution',
    order: 10,
    company: 'Ascensores Evolution S.A.C.',
    role: { es: 'Supervisor SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '18/01/2021 – 28/01/2021', en: 'Jan 18, 2021 – Jan 28, 2021' },
    sector: { es: 'Infraestructura Hospitalaria y Electromecánica (Ayacucho)', en: 'Healthcare Electromechanical Infrastructure (Ayacucho)' },
    summary: {
      es: 'Supervisión y documentación SSOMA para mantenimiento e implementación de ascensores en el Centro de Salud San Juan Bautista – Red de Salud Huamanga, Ayacucho.',
      en: 'HSE supervision and documentation for elevator maintenance and installation at the San Juan Bautista Health Center in Ayacucho.',
    },
    responsibilities: [
      {
        es: 'Control de riesgos en ductos verticales, izaje y maniobras electromecánicas en establecimiento de salud.',
        en: 'Controlled vertical shaft, hoisting, and electromechanical risks inside a public health facility.',
      },
    ],
  },
  {
    id: 'exp-transmasp',
    order: 11,
    company: 'Trans Masp E.I.R.L.',
    role: { es: 'Supervisor SSOMA', en: 'SSOMA / HSE Supervisor' },
    period: { es: '08/11/2019 – 13/01/2021', en: 'Nov 08, 2019 – Jan 13, 2021' },
    sector: { es: 'Logística, Transporte e Industria Alimentaria (AJEPER / GLORIA)', en: 'Logistics, Fleet & Food Manufacturing (AJEPER / GLORIA)' },
    summary: {
      es: 'Supervisión, homologación, implementación y gestión documental SSOMA para operaciones de estiba, envoltura, transporte, maquilado para AJEPER y GLORIA, y fabricación de parihuelas.',
      en: 'HSE supervision, client prequalification, and system implementation for cargo handling, packaging, fleet transport, co-packing operations (AJEPER & GLORIA), and pallet manufacturing.',
    },
    responsibilities: [
      {
        es: 'Gestión SSOMA integral en operaciones logísticas y manufactureras para cuentas corporativas líderes como AJEPER y GLORIA.',
        en: 'Managed plant & fleet safety operations meeting strict compliance audits for AJEPER and GLORIA.',
      },
    ],
  },
  {
    id: 'exp-hima',
    order: 12,
    company: 'HIMA Consultores S.A.C.',
    role: { es: 'Ingeniero de Prevención de Riesgos', en: 'Risk Prevention Engineer' },
    period: { es: '09/01/2018 – 07/11/2019', en: 'Jan 09, 2018 – Nov 07, 2019' },
    sector: { es: 'Consultoría Multidisciplinaria HSE', en: 'Multi-Sector HSE Engineering Consulting' },
    summary: {
      es: 'Casi dos años ejecutando supervisión en campo, homologaciones, implementación SIG, gestión integral y elaboración de documentación SSOMA para proyectos en diversos sectores.',
      en: 'Nearly two years delivering field supervision, vendor prequalifications, IMS deployment, and HSE engineering documentation across diverse industries.',
    },
    responsibilities: [
      {
        es: 'Consultoría e ingeniería de prevención de riesgos, auditorías y homologación para clientes multisectoriales.',
        en: 'Delivered risk prevention engineering, audits, and corporate safety prequalification across multiple sectors.',
      },
    ],
  },
  {
    id: 'exp-outsourcing',
    order: 13,
    company: 'Outsourcing Green S.A.C.',
    role: {
      es: 'Especialista en Monitoreos Ocupacionales y Seguridad',
      en: 'Occupational Monitoring & Safety Specialist',
    },
    period: { es: '25/05/2017 – 05/10/2017', en: 'May 25, 2017 – Oct 05, 2017' },
    sector: { es: 'Higiene Ocupacional y Gestión Ambiental', en: 'Occupational Hygiene & Environmental Services' },
    summary: {
      es: 'Ejecución de monitoreos ocupacionales y ambientales, supervisión de disposición de residuos sólidos, informes técnicos y documentación de seguridad para diversas empresas.',
      en: 'Executed occupational and environmental agent monitoring, supervised solid waste disposal, and authored technical safety reports for multiple corporate clients.',
    },
    responsibilities: [
      {
        es: 'Medición de agentes físicos, químicos y ergonómicos, supervisión ambiental y redacción de informes técnicos.',
        en: 'Conducted physical/chemical/ergonomic field measurements, environmental oversight, and technical reporting.',
      },
    ],
  },
];

export const FREELANCE_SERVICES: FreelanceServiceItem[] = [
  {
    number: 1,
    company: 'AXSAN SAFETY AND LABORAL HEALTH E.I.R.L.',
    sector: 'maritime-fishing',
    service: {
      es: 'Servicio de Coordinador de Proyecto para la supervisión de Seguridad y Salud en el Trabajo en embarcación petrolera Moquegua de la empresa Naviera Petral S.A.',
      en: 'Project Coordinator for Occupational Health and Safety supervision aboard oil tanker vessel Moquegua (Naviera Petral S.A.).',
    },
  },
  {
    number: 2,
    company: 'A&J INSTALACIONES S.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de capacitación de personal operativo para el cumplimiento de requisitos de su cliente UNACEM.',
      en: 'Operational workforce safety training to meet compliance requirements for client UNACEM.',
    },
  },
  {
    number: 3,
    company: 'GEA AIRE PERÚ E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de asesoría para la homologación de documentación SSOMA para la obra Edificio Patio Camelias.',
      en: 'Advisory service for SSOMA documentation prequalification for the Edificio Patio Camelias project.',
    },
  },
  {
    number: 4,
    company: 'MECORP S.A.C.',
    sector: 'mining',
    service: {
      es: 'Servicio de asesoría para la elaboración de documentos de seguridad a presentar a la U.M. Marcobre – Mina Justa.',
      en: 'Safety engineering advisory for preparing compliance documentation submitted to U.M. Marcobre – Mina Justa.',
    },
  },
  {
    number: 5,
    company: 'ASCENSORES S.A.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de capacitación de personal en seguridad para la operación de plataforma móvil de trabajo Genie AWP-30S.',
      en: 'Specialized safety training for personnel operating the Genie AWP-30S aerial mobile work platform.',
    },
  },
  {
    number: 6,
    company: 'SETAM E.I.R.L.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales para la supervisión de trabajos de cambio de luminarias y drywall en Oechsle Primavera.',
      en: 'Occupational risk prevention supervision for lighting replacement and drywall works at Oechsle Primavera.',
    },
  },
  {
    number: 7,
    company: 'JOMA INGENIERÍA S.A.C.',
    sector: 'construction',
    service: {
      es: 'Servicio de prevención de riesgos laborales para la supervisión de izaje de chillers de 1 y 2 TN en San Isidro.',
      en: 'Occupational risk prevention supervision for heavy rigging & hoisting of 1-ton and 2-ton chillers in San Isidro.',
    },
  },
  {
    number: 8,
    company: 'M&S GLOBAL S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales para la supervisión de mantenimiento preventivo/correctivo de sistemas de aire acondicionado tipo Split.',
      en: 'Risk prevention supervision for preventive and corrective maintenance of Split HVAC systems.',
    },
  },
  {
    number: 9,
    company: 'FERROCOR PERÚ S.A.C.',
    sector: 'mining',
    service: {
      es: 'Servicio de levantamiento de observaciones de Matriz IPERC y PETS para Marcobre – Mina Justa.',
      en: 'Resolution of technical audit findings on IPERC risk matrices and Safe Work Procedures (PETS) for Marcobre – Mina Justa.',
    },
  },
  {
    number: 10,
    company: 'SETAM E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Capacitación de personal en trabajos en altura, caliente, izaje de cargas y riesgo eléctrico.',
      en: 'Workforce safety training covering work at height, hot work, rigging/hoisting, and electrical hazards.',
    },
  },
  {
    number: 11,
    company: 'H.P.P. DE ADITIVOS E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Capacitación de personal en “Trabajos en Espacios Confinados”.',
      en: 'Specialized personnel training in Safe Confined Space Entry and Work.',
    },
  },
  {
    number: 12,
    company: 'MULTIMAD CORP S.A.C.',
    sector: 'training-homologation',
    service: {
      es: 'Asesoramiento SSOMA para proceso de homologación con la empresa “El Pedregal” realizado por MEGA.',
      en: 'SSOMA advisory for corporate prequalification with “El Pedregal” audited by MEGA.',
    },
  },
  {
    number: 13,
    company: 'H.P.P. DE ADITIVOS E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Capacitación de personal en “Uso de Herramientas de Poder” y “Trabajos en Altura”.',
      en: 'Personnel training in Safe Power Tool Operation and Work at Height.',
    },
  },
  {
    number: 14,
    company: 'FED-CUT (ESSALUD)',
    sector: 'industry-retail',
    service: {
      es: 'Inspección técnica de seguridad para la adecuada señalización de seguridad en edificios de 4 y 7 pisos en Lima y La Victoria.',
      en: 'Technical safety inspection for compliant emergency and safety signage across 4-story and 7-story ESSALUD buildings in Lima and La Victoria.',
    },
  },
  {
    number: 15,
    company: 'MAJER METAL',
    sector: 'construction',
    service: {
      es: 'Asesoría para cumplimiento de requisitos SSOMA de contratista, informe semanal e informe mensual para el proyecto I.E. República del Ecuador.',
      en: 'Contractor SSOMA compliance advisory, weekly reporting, and monthly reporting for the I.E. República del Ecuador construction project.',
    },
  },
  {
    number: 16,
    company: 'SETAM E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Implementación integral del Sistema de Gestión de Seguridad, Salud Ocupacional y Medio Ambiente.',
      en: 'Full implementation of the Occupational Health, Safety & Environmental Management System.',
    },
  },
  {
    number: 17,
    company: 'MECORP',
    sector: 'mining',
    service: {
      es: 'Implementación del Sistema de Gestión de Seguridad, Salud Ocupacional y Medio Ambiente.',
      en: 'Implementation of the Occupational Health, Safety & Environmental Management System.',
    },
  },
  {
    number: 18,
    company: 'AXSAN SAFETY AND LABORAL HEALTH E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Capacitar ingenieros y prevencionistas, dictar especializaciones de alto nivel, homologar empresas (MEGA, ICONTEC, SGS, Bureau Veritas, Holdepe, otros) y brindar servicios como Evaluador de Competencias Laborales.',
      en: 'Training engineers and safety officers, delivering high-level specializations, leading corporate audits/prequalifications (MEGA, ICONTEC, SGS, Bureau Veritas, Holdepe), and serving as MTPE Labor Competency Evaluator.',
    },
  },
  {
    number: 19,
    company: 'JOMA INGENIERÍA S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevencionista de riesgos laborales en mantenimiento e instalación de sistemas de aire acondicionado en Real Plaza Salaverry y capacitación de trabajos en altura.',
      en: 'Risk prevention supervision for HVAC installation & maintenance at Real Plaza Salaverry mall plus work-at-height training.',
    },
  },
  {
    number: 20,
    company: 'MULTIMAD CORP S.A.C.',
    sector: 'construction',
    service: {
      es: 'Homologación SSOMA para proyecto de construcción Concepto Style.',
      en: 'SSOMA prequalification dossier for the Concepto Style residential construction project.',
    },
  },
  {
    number: 21,
    company: 'JAJU GENERAL CONTRACTORS E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Elaboración del Plan, Programa Anual SST y Matriz IPERC.',
      en: 'Authoring of Annual Occupational Health & Safety Plan, Program, and IPERC Risk Matrix.',
    },
  },
  {
    number: 22,
    company: 'PROYECTOS INMOBILIARIOS S.A.C.',
    sector: 'construction',
    service: {
      es: 'Homologación de documentación SSOMA para el proyecto de construcción Concepto Style.',
      en: 'SSOMA documentation prequalification for the Concepto Style construction project.',
    },
  },
  {
    number: 23,
    company: 'SAMADC S.A.C.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de capacitación en trabajos en altura y caliente para personal operativo.',
      en: 'Practical safety training in work at height and hot work for operational crews.',
    },
  },
  {
    number: 24,
    company: 'REDES ÓPTICAS DEL PERÚ S.A.C.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de capacitación virtual para personal técnico en trabajos en altura y riesgo eléctrico.',
      en: 'Virtual technical safety training on work at height and electrical hazards.',
    },
  },
  {
    number: 25,
    company: 'SGHE E.I.R.L.',
    sector: 'maritime-fishing',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Pesquera Diamante – sede Callao.',
      en: 'Occupational risk prevention supervision at Pesquera Diamante industrial plant – Callao.',
    },
  },
  {
    number: 26,
    company: 'ORCAL INGENIEROS S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Almacenes Huachipa.',
      en: 'Occupational risk prevention supervision at Huachipa industrial warehouses.',
    },
  },
  {
    number: 27,
    company: 'M&S GLOBAL S.A.C.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de elaboración de Procedimiento Escrito de Trabajo Seguro (PETS) para cliente específico.',
      en: 'Tailored engineering authoring of Safe Work Procedures (PETS) for enterprise client operations.',
    },
  },
  {
    number: 28,
    company: 'ING CONTRATA S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Centro Comercial Real Plaza Puruchuco dentro de Cálidda.',
      en: 'Risk prevention supervision at Real Plaza Puruchuco shopping center inside Cálidda gas operations.',
    },
  },
  {
    number: 29,
    company: 'SETAM E.I.R.L.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Centro Comercial Jockey Plaza para supervisar trabajos de instalación de drywall.',
      en: 'Risk prevention supervision at Jockey Plaza shopping center for drywall construction works.',
    },
  },
  {
    number: 30,
    company: 'J&L PLASTIC GENERAL SERVICE S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Almacenes Central Huachipa para supervisar reemplazo de cable de subestación eléctrica.',
      en: 'High-voltage risk prevention supervision at Huachipa Central Warehouses for electrical substation cable replacement.',
    },
  },
  {
    number: 31,
    company: 'L Y G AIR COLD S.A.C.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Centro Comercial Mall Plaza Bellavista para supervisar mantenimiento de equipos de aire acondicionado.',
      en: 'Risk prevention supervision at Mall Plaza Bellavista for commercial HVAC equipment maintenance.',
    },
  },
  {
    number: 32,
    company: 'SG FRIOLEC PERÚ E.I.R.L.',
    sector: 'training-homologation',
    service: {
      es: 'Servicio de asesoría en documentación ambiental para aprobar auditoría anual con UPC.',
      en: 'Environmental compliance documentation advisory to pass annual UPC corporate audit.',
    },
  },
  {
    number: 33,
    company: 'SGHE E.I.R.L.',
    sector: 'maritime-fishing',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Pesquera Diamante para supervisar mantenimiento y cambio de cámaras de seguridad en embarcaciones.',
      en: 'Maritime risk prevention supervision at Pesquera Diamante for CCTV maintenance and replacement aboard fishing vessels.',
    },
  },
  {
    number: 34,
    company: 'SERVITEL SOLUCIONES S.R.L.',
    sector: 'industry-retail',
    service: {
      es: 'Servicio de prevención de riesgos laborales en Open Plaza Angamos, Open Piura, Open Trujillo y Cinemark Asia para mantenimiento de detectores de humo.',
      en: 'Nationwide risk prevention supervision across Open Plaza Angamos, Piura, Trujillo & Cinemark Asia for fire/smoke detector maintenance.',
    },
  },
  {
    number: 35,
    company: 'M&S MEGA SERVICIOS E INVERSIONES S.A.C.',
    sector: 'training-homologation',
    service: {
      es: 'Asesoría en documentación de seguridad para habilitación de trabajos en sedes varias de UPC y asesoría ambiental para aprobar auditoría anual UPC.',
      en: 'Safety clearance & environmental compliance advisory for multi-campus UPC operations and annual UPC corporate audit approval.',
    },
  },
];
