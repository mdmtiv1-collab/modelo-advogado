export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  topics: string[];
  iconName: string; // Lucide icon name references
}

export interface PositionCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ConscientizationItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface LawyerInfo {
  name: string;
  title: string;
  oab: string;
  city: string;
  state: string;
  whatsapp: string;
  instagram: string;
  email: string;
  officeAddress: string;
  addressDetails: string;
  phone: string;
}
