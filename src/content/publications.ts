import type { Language } from "@i18n/config";

export type Publication = {
  title: string;
  venue: string;
  status?: Record<Language, string>;
  href?: string;
};

export const publications: Publication[] = [
  {
    title: "Mobile Robot Retrofit for the ROS2 Framework",
    venue: "SIINTEC 2025 - SENAI CIMATEC Conference",
    href: "https://doity.com.br/anais/senaicimatec/trabalho/472028"
  },
  {
    title: "Residential Electrical Measurement System with IoT and Automation",
    venue: "SIINTEC 2025 - SENAI CIMATEC Conference",
    href: "https://doity.com.br/anais/senaicimatec/trabalho/473210"
  },
  {
    title: "Development and Experimental Evaluation of a Tendon-Driven Hybrid Climbing Robot",
    venue: "2026 Brazilian Congress of Automatica - CBA 2026",
    status: {
      pt: "Aceito para apresentação; publicação nos proceedings ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  },
  {
    title: "Hydrodynamic Modeling of Open-Frame Structure ROVs Using Boundary Element Method and Simulation Validation",
    venue: "2026 Brazilian Congress of Automatica - CBA 2026",
    status: {
      pt: "Aceito para apresentação; publicação nos proceedings ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  }
];
