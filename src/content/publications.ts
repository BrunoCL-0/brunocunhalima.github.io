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
      pt: "Journal of Bioengineering, Technologies and Health (JBTH)\n2026;9(8):817-823",
      en: "Journal of Bioengineering, Technologies and Health (JBTH)\n2026;9(8):817-823"
    },
    href: "https://jbth.com.br/index.php/JBTH/article/view/699"
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
      pt: "Development and Experimental Evaluation of a Tendon-Driven External Pipe-Crawling Robot",
      en: "Development and Experimental Evaluation of a Tendon-Driven External Pipe-Crawling Robot"
    },
    venue: {
      pt: "Congresso Brasileiro de Automática 2026 - CBA 2026",
      en: "Brazilian Congress of Automatica - CBA 2026"
    },
    href: "https://ojs.sba.org.br/index.php/cba/article/view/5946"
  },
  {
    title: {
      pt: "Hydrodynamic Modeling of open-frame structure ROVs Using Boundary Element Method and Simulation Validation",
      en: "Hydrodynamic Modeling of open-frame structure ROVs Using Boundary Element Method and Simulation Validation"
    },
    venue: {
      pt: "Congresso Brasileiro de Automática 2026 - CBA 2026",
      en: "Brazilian Congress of Automatica - CBA 2026"
    },
    href: "https://ojs.sba.org.br/index.php/cba/article/view/5802"
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
    href: "https://doity.com.br/anais/jbth/trabalho/552112"
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
    href: "https://doity.com.br/anais/jbth/trabalho/552184"
  }
];
