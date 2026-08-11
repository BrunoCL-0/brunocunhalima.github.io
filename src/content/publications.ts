import type { Language } from "@i18n/config";

export type Publication = {
  title: Record<Language, string>;
  venue: Record<Language, string>;
  status?: Record<Language, string>;
  href?: string;
};

export const publications: Publication[] = [
  {
    title: {
      pt: "Mobile Robot Retrofit for the ROS2 Framework",
      en: "Mobile Robot Retrofit for the ROS2 Framework"
    },
    venue: {
      pt: "SIINTEC 2025 - Conferência SENAI CIMATEC",
      en: "SIINTEC 2025 - SENAI CIMATEC Conference"
    },
    href: "https://doity.com.br/anais/senaicimatec/trabalho/472028"
  },
  {
    title: {
      pt: "Sistema de Medição Elétrica Residencial com IoT e Automação",
      en: "Residential Electrical Measurement System with IoT and Automation"
    },
    venue: {
      pt: "SIINTEC 2025 - Conferência SENAI CIMATEC",
      en: "SIINTEC 2025 - SENAI CIMATEC Conference"
    },
    href: "https://doity.com.br/anais/senaicimatec/trabalho/473210"
  },
  {
    title: {
      pt: "Development and Experimental Evaluation of a Tendon-Driven Hybrid Climbing Robot",
      en: "Development and Experimental Evaluation of a Tendon-Driven Hybrid Climbing Robot"
    },
    venue: {
      pt: "Congresso Brasileiro de Automática 2026 - CBA 2026",
      en: "2026 Brazilian Congress of Automatica - CBA 2026"
    },
    status: {
      pt: "Aceito para apresentação; publicação nos anais do evento ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  },
  {
    title: {
      pt: "Hydrodynamic Modeling of Open-Frame Structure ROVs Using Boundary Element Method and Simulation Validation",
      en: "Hydrodynamic Modeling of Open-Frame Structure ROVs Using Boundary Element Method and Simulation Validation"
    },
    venue: {
      pt: "Congresso Brasileiro de Automática 2026 - CBA 2026",
      en: "2026 Brazilian Congress of Automatica - CBA 2026"
    },
    status: {
      pt: "Aceito para apresentação; publicação nos anais do evento ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  }
];
