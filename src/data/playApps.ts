import type {
  ComplementaryProjectItem,
  PlayAppItem,
  PublicRepoItem,
} from '../types/portfolio';

export const PLAY_APPS: PlayAppItem[] = [
  {
    id: 'safety-officer-3d',
    packageName: 'com.axsan.supervisorhseaxsan',
    name: 'Safety Officer 3D: Hazard Runner',
    subtitle: {
      es: 'Primer videojuego móvil 3D de Seguridad, Salud Ocupacional y Medio Ambiente (ES/EN)',
      en: 'World’s first 3D mobile video game dedicated to Occupational Health, Safety & Environment (ES/EN)',
    },
    tagline: {
      es: 'Entrenamiento preventivo gamificado con herramientas reales de campo, 500 preguntas normativas y salas multijugador.',
      en: 'Gamified preventive training featuring real field tools, 500 regulatory questions, and real-time multiplayer rooms.',
    },
    description: {
      es: 'Creado desde experiencia directa en planta, obra y mina. Permite elegir entre cuatro especialistas SST (Operario, Esmerilador, Rigger y Brigadista SSOMA), dominar herramientas reales como Charla SST, Escáner ATS, Matriz IPERC Continuo y PETAR, superar 5 niveles con 500 preguntas oficiales (Ley 29783, D.S. 024-2016-EM, NTE G.050, NFPA, OSHA y NTP 900.058), entrenar con Sopa de Letras de 1,000 términos, 15 rompecabezas de campo y 8 minijuegos clásicos adaptados a prevención, competir en Salas Multijugador y obtener diplomas PDF.',
      en: 'Built directly from plant, construction, and mining experience. Choose among four HSE roles (Operator, Grinder, Rigger, and SSOMA Brigade), master field instruments like Safety Talks, JSA Scanner, Continuous IPERC, and PETAR, conquer 5 progressive tiers with 500 official questions (Law 29783, D.S. 024-2016-EM, G.050, NFPA, OSHA, NTP 900.058), solve 1,000-term word searches, 15 field puzzles, and 8 safety mini-games, compete in live multiplayer rooms, and earn PDF diplomas.',
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.axsan.supervisorhseaxsan',
    privacyUrl: 'https://axsangerencia-prog.github.io/safety-officer-3d-privacy/',
    iconUrl:
      'https://play-lh.googleusercontent.com/u741UZMD5ZzFzKFHkdpZaJfRO6MyUaUmDRQw41WKhzvzUI28v8_ecTqXZPiLycKprEDbvq3Ari0LtFnE-Q2I=w480-h960',
    screenshots: [
      {
        url: 'https://play-lh.googleusercontent.com/J-MhB4-xAhemuii-IHJY4BPoNSiL3ILhkERGn8gk7CdCDB33lhBOpl55QKGeyq1SG2UY0bGOjCF-_f0xMHV2sj4=w1052-h592',
        caption: { es: 'Experiencia 3D y selección de especialistas SSOMA', en: '3D gameplay and SSOMA specialist selection' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/QaEAj7yd21C3tKBGPWO1bpdQHX_CqxPj47hTy1e83YSZwB3v5uTmL9VZgXRDdJrUjgOxAeZI6qYgPQA28MJekLA=w1052-h592',
        caption: { es: 'Herramientas de campo: IPERC, ATS y PETAR', en: 'Field tools: IPERC, JSA, and PETAR workflows' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/QbxQQKCTE1wefOwcTaOGq0Og_aP7nfi0xkzJxi_PK_97L1zuicQlsJ7CouUZCE5c8QT6fGV2FZbVHUeC13pd=w1052-h592',
        caption: { es: 'Desafíos normativos de 5 niveles (500 preguntas)', en: '5-level regulatory challenge (500 questions)' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/x2axrqjqFHMuvfkQCw5NeNkbCvyyzAavMV-2W6oG68XstEGG-DaLu4uFCOurM9xUGKewt5s3DOzlVIQ4iOr3Rg=w1052-h592',
        caption: { es: 'Ocho minijuegos clásicos adaptados a seguridad', en: 'Eight safety-focused arcade mini-games' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/pwnJE98eaxMIPHnGQP34b72gjlo0pZHa6LkfkkrXkfv2Nt0taUUESEhlIqLwLfD3HuwdRPBhqkzhJt8eYIwooQk=w1052-h592',
        caption: { es: 'Salas multijugador y ranking corporativo mundial', en: 'Multiplayer rooms & global company leaderboard' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/lgIvtxGeww_CPkpp79b_8A0ri1hHL_axmQTeehhQcVrDu8jjWGAqKx0w6Q1tRafIwccm-c5aePaapGoSV4gMsKI=w1052-h592',
        caption: { es: 'Reto relámpago diario Semana Blanca Cero Accidentes', en: 'Daily Zero-Accident Streak Challenge' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/24aBZU4rpWJvvPqP1k7V6UcN5zccKwe2w7RgWETerJJbCDSS19zJh6BxBRkh9tGMxWq9FDffeqPPm-sSod36=w1052-h592',
        caption: { es: 'Sopa de letras técnica y rompecabezas de campo', en: '1,000-term technical puzzle & field challenges' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/lvzBQOpIVjz4409SZxTjemXNNRiTtEGpd7wgM08FWd5e4dYGKFE9BdRGSP3gPCmbJzaTlaQKdpuXyYnk4rThRu0=w1052-h592',
        caption: { es: 'Emisión de diplomas PDF descargables', en: 'Downloadable PDF achievement diplomas' },
      },
    ],
    techStack: ['Android SDK', '3D Engine / WebGL', 'Firebase Realtime', 'Google Play Billing', 'Bilingual ES/EN'],
    features: [
      { es: '4 personajes jugables: Operario, Esmerilador, Rigger y Brigadista SSOMA', en: '4 playable roles: Operator, Grinder, Rigger, and SSOMA Brigade' },
      { es: '500 preguntas oficiales basadas en Ley 29783, D.S. 024-2016-EM, NFPA, OSHA y G.050', en: '500 official questions grounded in Law 29783, D.S. 024-2016-EM, NFPA, OSHA & G.050' },
      { es: '8 minijuegos (LOTO, Extintores, Excavaciones, Altura, Químico SGA) + Salas Multijugador', en: '8 mini-games (LOTO, Extinguishers, Excavations, Height, HazMat) + Multiplayer Rooms' },
    ],
  },
  {
    id: 'axsan-code',
    packageName: 'com.axsan.code',
    name: 'Axsan Code',
    subtitle: {
      es: 'Suite industrial de códigos QR, GS1 Data Matrix y códigos de barras',
      en: 'Industrial QR, GS1 Data Matrix & linear barcode engineering suite',
    },
    tagline: {
      es: 'Generación, personalización HD, procesamiento masivo CSV, escáner óptico en RAM y bóveda biométrica.',
      en: 'HD generation, custom branding, bulk CSV processing, in-RAM optical scanner & biometric vault.',
    },
    description: {
      es: 'Plataforma Android optimizada a 120 Hz para trazabilidad en entornos SSOMA/HSE, auditorías de EPP, extintores, maquinaria pesada e inventarios. Genera QR personalizados con logotipo central, GS1 Data Matrix y códigos lineales (EAN-13, EAN-8, CODE 128, CODE 39, ITF, UPC). Escáner CameraX + ZXing con decodificación multipasada en memoria RAM, procesamiento masivo desde CSV, bloqueo biométrico nativo y sincronización en Google Firebase.',
      en: '120 Hz Android platform engineered for HSE traceability, PPE audits, extinguisher tagging, heavy machinery tracking, and inventory workflows. Builds custom-styled QR codes with embedded logos, GS1 Data Matrix, and linear barcodes (EAN-13, EAN-8, CODE 128, CODE 39, ITF, UPC). Features a RAM-only CameraX + ZXing scanner, bulk CSV generation, native biometric lock, and Firebase cloud sync.',
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.axsan.code',
    iconUrl:
      'https://play-lh.googleusercontent.com/FbQf8K5V5ygYgpd6E40SDL88Z0Nu0OBKJGFCIrqvW64_RfGnUjhDZ7tbgcVgwvvCemfsP15EYFznhnowtPZ9Ew=w480-h960',
    screenshots: [
      {
        url: 'https://play-lh.googleusercontent.com/2UU-2y05Fi806Ok74LKCvX1fdRrxWER-r8yj9xoi6QlRCCJw42Hipr-JV5KcZrHlMIX4tZBF7qPxHVp9_cqUqQ=w1052-h592',
        caption: { es: 'Motor tridimensional QR, GS1 Data Matrix y códigos lineales', en: 'Tri-dimensional QR, GS1 Data Matrix & barcode generator' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/WrwvEP3pGyV7Hrg-3rcc1lQPysIRyAHpuH0t-Ug7MSlrMYlCPX-j-azOw1-khCCFWiLKYUs6U368hcS7m-G8-Q=w1052-h592',
        caption: { es: 'Personalización geométrica, color Hex y logotipo central', en: 'Geometric patterns, Hex styling & center logo embedding' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/Fqi9aJqiw06Ak7toJejed87bjXLpJE-rkHyQGsQdADOmhEbr30EkE9c36VA7gEMfLnQaIJeirhMLuGOHwqEAjg=w1052-h592',
        caption: { es: 'Escáner óptico CameraX + ZXing procesado en RAM', en: 'In-RAM CameraX + ZXing high-speed optical scanner' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/ZuMy2QsmB0sy12CpnjCkraxnsIff4Qo_FsJJ35UJGoHckD8DOGEoB6YrEEw6ELfxrjZmbC33_S4z7LkkJuZq5g=w1052-h592',
        caption: { es: 'Etiquetado de trazabilidad industrial ISO 45001 / 14001', en: 'ISO 45001 / 14001 industrial traceability labeling' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/xol3tNIGoHNmfVriOeWdMGLpMrMyHI6kMYWsCuwd3ySrLpRxJakF5GjhdRgD2zJ36Q8eBJ14M6kUEIb1vWqUhA=w1052-h592',
        caption: { es: 'Procesamiento masivo mediante importación CSV', en: 'Bulk CSV import & corporate template engine' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/VsJN955dltXUILxJ3NRug04wmCP04zHOIlMZCdJ892LOVOilPR_dsrsNva_aWlxVcIvp2mwwno1ndC5QsYBxJA=w1052-h592',
        caption: { es: 'Bóveda de seguridad con autenticación biométrica', en: 'Biometric security vault & encrypted storage' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/2Pcp1uYtM16HkthZxZtZ9qYenC9A8l_ADdI4NTuYArmCL5lgKkZXv1fOU5xI3h2N2FUzn3iDLZNO2aXqhzg3Qw=w1052-h592',
        caption: { es: 'Sincronización en tiempo real en Google Firebase', en: 'Real-time Google Firebase history sync' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/CcPZdBoeUHLbJinepNFWoY2vBVb3PoORQ9OoDkDteF3qx0d_LKjpek6SrqeJklmr4o6bSp23RZx0nvx5lAh9=w1052-h592',
        caption: { es: 'Exportación HD lista para impresión industrial', en: 'Print-ready high-resolution vector & HD export' },
      },
    ],
    techStack: ['Android CameraX', 'ZXing', 'BiometricPrompt', 'Firebase Cloud', 'CSV Batch Engine'],
    features: [
      { es: 'QR, GS1 Data Matrix, EAN-13/8, CODE 128/39, ITF y UPC con logo e impresión HD', en: 'QR, GS1 Data Matrix, EAN-13/8, CODE 128/39, ITF & UPC with logo & HD export' },
      { es: 'Escáner CameraX + ZXing de enfoque central 60% con procesamiento 100% en RAM', en: '60% center-focus CameraX + ZXing scanner with zero-upload RAM-only processing' },
      { es: 'Generación masiva CSV, bóveda biométrica (huella/rostro) y sincronización Firebase', en: 'Bulk CSV batch generation, native biometric lock, and Firebase cloud sync' },
    ],
  },
  {
    id: 'axsan-pro',
    packageName: 'com.axsan.axsanpro',
    name: 'Axsan Pro: Ingeniería y HSE',
    subtitle: {
      es: 'La navaja suiza digital para ingeniería de campo y gestión HSE',
      en: 'The all-in-one digital Swiss Army knife for field engineers & HSE leaders',
    },
    tagline: {
      es: 'Consolida instrumentación física (sonómetro, luxómetro), IA, permisos PETAR/ATS, Walkie-Talkie P2P y tablero Kanban.',
      en: 'Combines field metering (sound/light), AI reporting, PETAR/JSA permits, P2P walkie-talkie, and Kanban task control.',
    },
    description: {
      es: 'Suite integral que reemplaza equipos y apps fragmentadas en terreno. Incluye Cámara Pro con detección IA y geolocalización GPS, Calculadora Científica y Gráfica, Sonómetro y Luxómetro con sensores del dispositivo, Clima y Radiación, Convertidor técnico, Investigador de Accidentes, Guía MATPEL, Reporte Diario asistido por IA, Botón S.O.S., generador de PETAR y ATS, auditorías e inspecciones (HSE Inspector, Escaleras, Ergonomía, EPP), Walkie-Talkie P2P, Kanban, Control de Asistencia, Escáner, Modo Focus y registro de capacitaciones.',
      en: 'Comprehensive field suite replacing fragmented devices and apps. Packs an AI + GPS Pro Camera, Scientific & Graphing Calculator, built-in Sound Meter & Lux Meter, Weather/UV monitor, Unit Converter, Accident Investigator, HazMat (MATPEL) Guide, AI-assisted Daily HSE Report, S.O.S. panic button, PETAR & JSA builders, audit checklists (Inspector, Ladders, Ergonomics, PPE), P2P Walkie-Talkie, Kanban board, Attendance tracking, Document Scanner, Focus Mode, and Training logs.',
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.axsan.axsanpro',
    iconUrl:
      'https://play-lh.googleusercontent.com/jRVXlyzQ-2Fj4Cb2gCXkEEE2EgQSSwWc0pAnoK6UlgAc8OMWgeAgMRaO6egYGcvR8JoHvle6XNu4eY_xXJNH9g=w480-h960',
    screenshots: [
      {
        url: 'https://play-lh.googleusercontent.com/66FBZ924gBEyaI_znmh5NeR4DO_Rt10kk55puyXToF2nnnIK-ACxXGwiDb9aeQfZJNpNih1nVJA5TUbFxVEX=w1052-h592',
        caption: { es: 'Suite modular de Ingeniería, HSE y Productividad', en: 'Unified Engineering, HSE & Field Productivity hub' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/tTfID1E94N_zH_nv0tqSKWK8kO-me4PnhnF7-DmxyoO1pM4idZ8sJJbmJ_oz8x9MqL2ABZ5gcLIFEqX9lbrNS9c=w1052-h592',
        caption: { es: 'Cámara Pro con detección por IA y sellado GPS', en: 'AI-powered Pro Camera with live GPS stamping' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/JJpuf45vMbsKmGn4YmOIvt4vTpGDwDe2hl1KnmQmixs5nqVgf_gWX_TAliT4D19bOuFCLAzUfIsGiUKwpzP0tA=w1052-h592',
        caption: { es: 'Sonómetro, Luxómetro y Calculadora científica/gráfica', en: 'Sound Meter, Lux Meter & Scientific/Graphing Calculator' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/fUkGpnGzY2MVk7RVbPlz-OGCUI0ZgiPYuC0nNPeahJ2nTHeFi_T21mG4dMhG6ebJ1eL1OfsVYIR6lL4lCz0O-g=w1052-h592',
        caption: { es: 'Generación de permisos PETAR, ATS y guía MATPEL', en: 'PETAR & JSA permit generator + HazMat MATPEL guide' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/NvmsTQTk2Lezvmal--4lTQ0-CVSCn7GaecgdD9m94xEJqQ2wCj0YZewJB9S7p4NkDpj-5YA404cdhlqE_GiETQ=w1052-h592',
        caption: { es: 'Investigación de accidentes y reporte diario con IA', en: 'Field accident investigation & AI daily HSE reporting' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/FTMhegz1nuQwqoPYhUG3bT9jpIqHajMs0ATFxn8fUvSnlqNe-MJT1lUlHZPlfHlVSv3xKyjVmnqtbPhauDj1jw=w1052-h592',
        caption: { es: 'Auditorías HSE Inspector, Escaleras, Ergonomía y EPP', en: 'HSE Inspector, Ladder, Ergonomics & PPE audit modules' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/vxsE9LSCK25j6wdzqUwnjLvHYbDJmygP0Og_LSF2Fw2NSLwmEF92ucFeIU2rXaz1fwQ-RqGlSsKTZlcmvMUGTrE=w1052-h592',
        caption: { es: 'Walkie-Talkie P2P y tablero Kanban en tiempo real', en: 'Real-time P2P Walkie-Talkie & Kanban workflow board' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/6IOeNecBMbILAIZ94CsM3pllAs6-FeYwn69tyHb2T6lbocM3Kwc0aXCI-1jce3Lk-5wdrDQ73lcg27r_Qjppd2E=w1052-h592',
        caption: { es: 'Control de asistencia, escáner, clima/UV y Modo Focus', en: 'Attendance control, scanner, UV weather & Focus Mode' },
      },
    ],
    techStack: ['Android Native', 'Device Sensors', 'AI Vision & Reports', 'GPS Telemetry', 'P2P Audio'],
    features: [
      { es: 'Instrumentación en bolsillo: Sonómetro, Luxómetro, Cámara Pro IA+GPS y Calculadora gráfica', en: 'Pocket instrumentation: Sound & Lux meters, AI+GPS Pro Camera & Graphing Calculator' },
      { es: 'Gestión HSE completa: PETAR, ATS, MATPEL, Investigador de Accidentes, Botón S.O.S. y EPP', en: 'Full HSE suite: PETAR, JSA, HazMat, Accident Investigator, S.O.S. alert & PPE control' },
      { es: 'Operaciones: Walkie-Talkie P2P, Kanban, Asistencia, Escáner PDF y Registro de Charlas', en: 'Field Ops: P2P Walkie-Talkie, Kanban, Attendance, Document Scanner & Training Logs' },
    ],
  },
  {
    id: 'axsan-normas',
    packageName: 'com.axsan.normas',
    name: 'Axsan Alerta Legal HSE Perú',
    subtitle: {
      es: 'Monitoreo diario de normas legales nacionales y normativa SSOMA/HSE',
      en: 'Daily monitoring of Peruvian national regulations & HSE statutory updates',
    },
    tagline: {
      es: 'Consulta ágil de publicaciones oficiales del Diario Oficial El Peruano y gob.pe para cumplimiento normativo al día.',
      en: 'Fast, structured access to official Diario Oficial El Peruano and gob.pe statutory publications for real-time compliance.',
    },
    description: {
      es: 'Primera aplicación enfocada en mantener actualizados diariamente a ingenieros, auditores y prevencionistas sobre nuevas normas legales generales y en materia de Seguridad, Salud Ocupacional y Medio Ambiente en el Perú, compilando fuentes públicas oficiales (Diario Oficial El Peruano y Plataforma Digital Única gob.pe) con transparencia e independencia.',
      en: 'First dedicated mobile app alerting HSE engineers, auditors, and compliance leaders daily on newly published Peruvian general and occupational safety/environmental regulations sourced directly from Diario Oficial El Peruano and gob.pe.',
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.axsan.normas',
    iconUrl:
      'https://play-lh.googleusercontent.com/6u9F73KVfqEIp8JWbJJYTrzMVnJ9t3hpahhvoxk_FGTBdY0Z7XcWFMSKjdsNgMSdxyVUfLWzLQgaFgy_BC6F=w480-h960',
    screenshots: [
      {
        url: 'https://play-lh.googleusercontent.com/GSkKDEF2QkjHsoRFYtpzryg4p10j2Zk-J4ms0oRJ5wFPo2IbqkWg7Yo7skSNjTQnrKemaVlT7vlEte2VN8x7Jw=w1052-h592',
        caption: { es: 'Alertas diarias de normativa oficial y HSE', en: 'Daily official & HSE statutory alerts' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/Sd4fDszeT6wjKGDj41hqkQERw42KYY7bQInDkimC_ADR7L5ef0m8C4UTjW0VA2hzpw5i8efsv-hqDKdwZcd0Wg=w1052-h592',
        caption: { es: 'Consulta directa de Diario Oficial El Peruano', en: 'Direct Diario Oficial El Peruano legislative feed' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/xYcLntMGeV87oF3E8nhF-QcPhxIFPxYPSEMOJrNTv7h1XzrswwxGWHgoyzV-ZUEXi4TaZtwNfAjpPXDjV3tgVgc=w1052-h592',
        caption: { es: 'Integración informativa con gob.pe y clasificación legal', en: 'gob.pe source tracking & legal categorization' },
      },
      {
        url: 'https://play-lh.googleusercontent.com/fq1-F34ho1pWW_meameL8wd4XXjeqM4tQSZIz7uIklB1nN3PXB6_sw62ROjLpaAQBF4dQRUU2YJPBmMxy738VQ=w1052-h592',
        caption: { es: 'Acceso rápido desde campo para auditorías vigentes', en: 'Instant field reference for compliance audits' },
      },
    ],
    techStack: ['Android Native', 'Regulatory Feeds', 'Push Alerts', 'Official Source Indexing'],
    features: [
      { es: 'Actualización diaria de normas legales del Diario Oficial El Peruano y gob.pe', en: 'Daily statutory updates indexed from El Peruano Official Gazette & gob.pe' },
      { es: 'Enfoque especializado para matrices de requisitos legales ISO 45001 / 14001', en: 'Built for ISO 45001 / 14001 legal compliance register audits' },
      { es: 'Lectura ágil desde smartphones para comités y supervisores en faena', en: 'Fast mobile lookup for field supervisors and safety committees' },
    ],
  },
];

export const COMPLEMENTARY_PROJECTS: ComplementaryProjectItem[] = [
  {
    id: 'biblioteca-alejandria',
    name: 'Biblioteca HSE Alejandría',
    badge: { es: 'Código propietario · +5,000 archivos', en: 'Proprietary · 5,000+ resources' },
    description: {
      es: 'Biblioteca digital colaborativa HSE con más de 5,000 archivos técnicos, formatos, matrices y guías provistos por la comunidad para descarga especializada.',
      en: 'Collaborative digital HSE knowledge base featuring over 5,000 community-contributed templates, standards, matrices, and technical guides.',
    },
    tech: ['Web Architecture', 'Document Indexing', 'HSE Knowledge Base'],
    statusNote: {
      es: 'Proyecto documentado en CV — código fuente privado bajo arquitectura Axsan Systems.',
      en: 'Documented CV project — proprietary private codebase under Axsan Systems.',
    },
  },
  {
    id: 'safe-fall-calculator',
    name: 'Safe Fall Calculator',
    badge: { es: 'Código propietario · Ingeniería en Altura', en: 'Proprietary · Fall Clearance Engineering' },
    description: {
      es: 'Aplicación especializada para trabajos en altura que calcula con precisión el requerimiento de espacio libre de caída según tipo de dispositivo, anclaje y estatura del trabajador.',
      en: 'Specialized work-at-height engineering calculator computing exact total fall clearance across diverse arrest devices, anchor heights, and worker parameters.',
    },
    tech: ['ANSI Z359 / OSHA 1926', 'Safety Engineering Math', 'Mobile/Web UI'],
    statusNote: {
      es: 'Proyecto documentado en CV — módulo técnico privado de prevención de caídas.',
      en: 'Documented CV project — proprietary fall-protection calculation module.',
    },
  },
  {
    id: 'custom-enterprise-systems',
    name: 'Sistemas Empresariales a Medida (9 líneas de solución)',
    badge: { es: 'Soluciones Corporativas Automatizadas', en: 'Custom Enterprise Automation Suite' },
    description: {
      es: 'Diseño web corporativo, sistemas automatizados de cotizaciones, verificación web de certificados y exámenes médicos ocupacionales (EMO), cálculo automatizado de ventas/compras y renta mensual/anual, apps móviles para mantenimiento preventivo/correctivo, registro/seguimiento SSOMA y generación automatizada de matrices IPERC vigentes.',
      en: 'Corporate web design, automated quoting engines, web verification for certificates & occupational medical exams (EMO), automated sales/purchase & monthly/annual tax ledgers, mobile maintenance tracking apps, SSOMA workforce tracking, and automated legal-compliant IPERC matrix generators.',
    },
    tech: ['Full-Stack Web', 'Mobile Apps', 'QR Verification', 'Tax & Operations Automation'],
    statusNote: {
      es: 'Capacidades comprobadas en producción para empresas de múltiples rubros.',
      en: 'Production-proven capabilities delivered across multiple industry clients.',
    },
  },
];

export const PUBLIC_REPOS: PublicRepoItem[] = [
  {
    name: 'active-pause-desktop',
    url: 'https://github.com/axsangerencia-prog/active-pause-desktop',
    language: 'HTML / Windows App Portal',
    description: {
      es: 'Portal oficial de descarga y distribución de Pausas Activas MyS para Windows 10 & 11 (Mantenimiento y Supervisión S.A.).',
      en: 'Official distribution portal for Active Pauses MyS native software on Windows 10 & 11 (Mantenimiento y Supervisión S.A.).',
    },
  },
  {
    name: 'safety-officer-3d-privacy',
    url: 'https://github.com/axsangerencia-prog/safety-officer-3d-privacy',
    language: 'HTML / Legal & Compliance',
    description: {
      es: 'Portal oficial de privacidad, condiciones de servicio y cumplimiento Google Play / Firebase / Play Billing para Safety Officer 3D.',
      en: 'Official Google Play Store, Firebase & Billing compliance portal for Safety Officer 3D: Hazard Runner.',
    },
  },
  {
    name: 'Supervisor_SSOMA_Mys',
    url: 'https://github.com/axsangerencia-prog/Supervisor_SSOMA_Mys',
    language: 'GitHub Repository',
    description: {
      es: 'Espacio de repositorio vinculado al desarrollo de supervisión digital SSOMA para MYSSA.',
      en: 'Repository workspace linked to digital SSOMA supervision development for MYSSA.',
    },
  },
  {
    name: 'CurriculumDigitalAlejandro',
    url: 'https://github.com/axsangerencia-prog/CurriculumDigitalAlejandro',
    language: 'React · TypeScript · Vite',
    description: {
      es: 'Código fuente de este portafolio ejecutivo bilingüe con despliegue continuo a GitHub Pages.',
      en: 'Source repository for this bilingual executive portfolio with automated GitHub Pages deployment.',
    },
  },
];
