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
      pt: "XI SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY",
      en: "XI SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY"
    },
    href: "https://doity.com.br/anais/senaicimatec/trabalho/472028"
  },
  {
    title: {
      pt: "Sistema de Medição Elétrica Residencial com IoT e Automação",
      en: "Residential Electrical Measurement System with IoT and Automation"
    },
    venue: {
      pt: "XI SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY",
      en: "XI SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY"
    },
    href: "https://doity.com.br/anais/senaicimatec/trabalho/473210"
  },
  {
    title: {
      pt: "Development and Experimental Evaluation of a Tendon-Driven external Pipe-crawling Robot",
      en: "Development and Experimental Evaluation of a Tendon-Driven external Pipe-crawling Robot"
    },
    venue: {
      pt: "Congresso Brasileiro de Automática 2026 - CBA 2026",
      en: "Brazilian Congress of Automatica - CBA 2026"
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
      en: "Brazilian Congress of Automatica - CBA 2026"
    },
    status: {
      pt: "Aceito para apresentação; publicação nos anais do evento ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  },
  {
    title: {
      pt: "Experimental Evaluation of RGB-D- and LiDAR-Based SLAM Configurations Using a TurtleBot2i Platform",
      en: "Experimental Evaluation of RGB-D- and LiDAR-Based SLAM Configurations Using a TurtleBot2i Platform"
    },
    venue: {
      pt: "XII SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY",
      en: "XII SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY"
    },
    status: {
      pt: "Aceito para apresentação; publicação nos anais do evento ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  },
  {
    title: {
      pt: "Technological Retrofit of a Legacy Robotic Manipulator for the ROS2 Ecosystem: A Case Study with the PhantomX Reactor Arm",
      en: "Technological Retrofit of a Legacy Robotic Manipulator for the ROS2 Ecosystem: A Case Study with the PhantomX Reactor Arm"
    },
    venue: {
      pt: "XII SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY",
      en: "XII SIINTEC\nINTERNATIONAL SYMPOSIUM ON\nINNOVATION AND TECHNOLOGY"
    },
    status: {
      pt: "Aceito para apresentação; publicação nos anais do evento ainda pendente.",
      en: "Accepted for presentation; proceedings publication still pending."
    }
  }
];
