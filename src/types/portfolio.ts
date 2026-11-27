export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProfileMetric {
  value: string;
  label: LocalizedText;
  detail: LocalizedText;
}

export interface CompetencyItem {
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
}

export interface SoftwareSkillItem {
  order: number;
  name: string;
  level: LocalizedText;
  category: 'office-bi' | 'engineering-design' | 'dev-3d';
}

export interface AudiovisualGearItem {
  id: string;
  name: string;
  role: LocalizedText;
  details: LocalizedText;
}

export interface HobbyItem {
  order: number;
  text: LocalizedText;
}

export interface PlayAppItem {
  id: string;
  packageName: string;
  name: string;
  subtitle: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  playStoreUrl: string;
  privacyUrl?: string;
  iconUrl: string;
  screenshots: {
    url: string;
    caption: LocalizedText;
  }[];
  techStack: string[];
  features: LocalizedText[];
}

export interface ComplementaryProjectItem {
  id: string;
  name: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
  tech: string[];
  statusNote: LocalizedText;
}

export interface PublicRepoItem {
  name: string;
  url: string;
  language: string;
  description: LocalizedText;
}

export type PlatformCategoryId =
  | 'all'
  | 'operations-risk'
  | 'control-reports'
  | 'training-culture'
  | 'health-ppe'
  | 'management-accreditation';

export interface EcosystemPlatform {
  id: string;
  order: number;
  title: LocalizedText;
  shortTitle: LocalizedText;
  url: string;
  domain: string;
  categoryGroup: Exclude<PlatformCategoryId, 'all'>;
  categoryLabel: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  operationalBenefit: LocalizedText;
  imageUrl: string;
  includesDesktopApp?: boolean;
  desktopRepoUrl?: string;
}

export interface FormalExperienceItem {
  id: string;
  order: number;
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  sector: LocalizedText;
  summary: LocalizedText;
  responsibilities: LocalizedText[];
  featuredLink?: {
    label: LocalizedText;
    url: string;
  };
}

export type FreelanceSector =
  | 'all'
  | 'mining'
  | 'construction'
  | 'industry-retail'
  | 'training-homologation'
  | 'maritime-fishing';

export interface FreelanceServiceItem {
  number: number;
  company: string;
  sector: Exclude<FreelanceSector, 'all'>;
  service: LocalizedText;
}

export interface EducationRecord {
  university: string;
  degree: LocalizedText;
  bachelor: LocalizedText;
  period: LocalizedText;
  credits: string;
  highlights: LocalizedText[];
  codes: LocalizedText[];
}

export interface OfficialAccreditation {
  id: string;
  authority: LocalizedText;
  code: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  verificationUrl?: string;
  verificationNote: LocalizedText;
}

export interface LanguageCertificate {
  id: string;
  institution: string;
  title: LocalizedText;
  scoreOrResult: LocalizedText;
  period: LocalizedText;
  details: LocalizedText;
}

export interface CredlyCredential {
  id: string;
  issuer: string;
  title: LocalizedText;
  issuedDate: LocalizedText;
  credlyUrl?: string;
  courseraUrl: string;
  isMainBundle?: boolean;
  coursesCount?: number;
}

export type CertificateCategoryId =
  | 'all'
  | 'ai-data'
  | 'diplomas-iso'
  | 'high-risk-field'
  | 'regulatory-health'
  | 'office-gis-env';

export interface CertificateItem {
  id: string;
  cvIndex?: number;
  title: LocalizedText;
  hours: LocalizedText;
  institution: LocalizedText;
  category: Exclude<CertificateCategoryId, 'all'>;
  categoryLabel: LocalizedText;
  source: 'cv-table' | 'v35-annex';
  verificationCode?: LocalizedText;
  verificationUrl?: string;
  yearOrNote?: LocalizedText;
}
