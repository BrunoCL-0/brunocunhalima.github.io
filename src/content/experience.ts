import type { Language } from "@i18n/config";

export type Experience = {
  period: Record<Language, string>;
  role: Record<Language, string>;
  organization: string;
  location: Record<Language, string>;
  kind: Record<Language, string>;
  highlights: Record<Language, string[]>;
};

export const experiences: Experience[] = [
  {
    period: {
      pt: "Fev 2026 - atual",
      en: "Feb 2026 - present"
    },
    role: {
      pt: "Estagiário em Engenharia Robótica",
      en: "Robotics Engineering Intern"
    },
    organization: "SENAI CIMATEC",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "P&D em robótica",
      en: "Robotics R&D"
    },
    highlights: {
      pt: [
        "Desenvolvimento técnico e integração de sistemas robóticos em uma plataforma AGV com manipulador.",
        "Trabalho com ROS 2, C++, Python, Linux, navegação autônoma, SLAM, motion planning e MoveIt 2.",
        "Apoio a concepção, experimentação e validação de sistemas de manipulação móvel."
      ],
      en: [
        "Technical development and integration of robotic systems on an AGV platform with a robotic manipulator.",
        "Work with ROS 2, C++, Python, Linux, autonomous navigation, SLAM, motion planning, and MoveIt 2.",
        "Support for concept development, experimentation, and validation of mobile manipulation systems."
      ]
    }
  },
  {
    period: {
      pt: "Jan 2025 - Dez 2025",
      en: "Jan 2025 - Dec 2025"
    },
    role: {
      pt: "Pesquisador em Robótica",
      en: "Robotics Researcher"
    },
    organization: "SENAI CIMATEC",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Retrofit TurtleBot2i",
      en: "TurtleBot2i retrofit"
    },
    highlights: {
      pt: [
        "Modernização de uma plataforma TurtleBot2i legada por meio da migração de ROS 1 para ROS 2 Humble.",
        "Integração da base Kobuki, LiDAR Velodyne VLP-16, Orbbec Astra e Intel RealSense D435.",
        "Configuração de drivers, tópicos, parâmetros, TF, URDF/Xacro, launch files, RViz, Gazebo, SLAM e Nav2."
      ],
      en: [
        "Modernization of a legacy TurtleBot2i platform through migration from ROS 1 to ROS 2 Humble.",
        "Integration of the Kobuki base, Velodyne VLP-16 LiDAR, Orbbec Astra, and Intel RealSense D435.",
        "Configuration of drivers, topics, parameters, TF, URDF/Xacro, launch files, RViz, Gazebo, SLAM, and Nav2."
      ]
    }
  },
  {
    period: {
      pt: "Mar 2026 - atual",
      en: "Mar 2026 - present"
    },
    role: {
      pt: "Monitor de Física III",
      en: "Teaching Assistant - Physics III"
    },
    organization: "University SENAI CIMATEC",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Ensino e fundamentos",
      en: "Teaching and fundamentals"
    },
    highlights: {
      pt: [
        "Apoio em monitorias, resolução de problemas e dúvidas de estudantes.",
        "Atuação em tópicos de fenômenos ondulatórios, eletromagnetismo e aplicações matemáticas em engenharia."
      ],
      en: [
        "Support in tutorial sessions, problem solving, and student questions.",
        "Work with wave phenomena, electromagnetism, and mathematical applications in engineering."
      ]
    }
  },
  {
    period: {
      pt: "Fev 2024 - Out 2024",
      en: "Feb 2024 - Oct 2024"
    },
    role: {
      pt: "Estagiário Assistente de Projetos Elétricos",
      en: "Electrical Projects Assistant Intern"
    },
    organization: "Nova Energia",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Projetos elétricos",
      en: "Electrical projects"
    },
    highlights: {
      pt: [
        "Apoio a projetos elétricos de baixa tensão em conformidade com a ABNT/NBR 5410.",
        "Levantamento de materiais, estimativas de custo, relatórios técnicos e suporte ao planejamento de obras."
      ],
      en: [
        "Support for low-voltage electrical projects following ABNT/NBR 5410.",
        "Material surveys, cost estimates, technical reports, and support for construction planning."
      ]
    }
  }
];

export const extracurriculars: Experience[] = [
  {
    period: {
      pt: "Abr 2026 - atual",
      en: "Apr 2026 - present"
    },
    role: {
      pt: "Pesquisador Voluntário em Robótica",
      en: "Volunteer Robotics Researcher"
    },
    organization: "SENAI CIMATEC",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Mapeamento e percepção",
      en: "Mapping and perception"
    },
    highlights: {
      pt: [
        "Pesquisa em localização, mapeamento e percepção para sistemas robóticos móveis com ROS 2.",
        "Avaliação de SLAM RGB-D e LiDAR com Cartographer e SLAM Toolbox, YOLO, Gazebo e Nav2."
      ],
      en: [
        "Research in localization, mapping, and perception for mobile robotic systems with ROS 2.",
        "Evaluation of RGB-D and LiDAR SLAM with Cartographer and SLAM Toolbox, YOLO, Gazebo, and Nav2."
      ]
    }
  },
  {
    period: {
      pt: "Jan 2025 - Jan 2026",
      en: "Jan 2025 - Jan 2026"
    },
    role: {
      pt: "Electrical Designer - TEC H2-Racing FSAE",
      en: "Electrical Designer - TEC H2-Racing FSAE"
    },
    organization: "Powertrain Division",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Equipe estudantil",
      en: "Student team"
    },
    highlights: {
      pt: [
        "Integração elétrica, PCB design em KiCad e apoio ao circuito de pré-carga do powertrain a hidrogênio.",
        "Participação no projeto que alcançou 3º lugar geral no SAE BRASIL H2 Challenge 2025."
      ],
      en: [
        "Electrical integration, PCB design in KiCad, and support for the hydrogen powertrain pre-charge circuit.",
        "Contribution to the project that achieved 3rd place overall at the 2025 SAE BRASIL H2 Challenge."
      ]
    }
  },
  {
    period: {
      pt: "Set 2022 - Mai 2023",
      en: "Sep 2022 - May 2023"
    },
    role: {
      pt: "Membro e Project Manager - IEEE CIMATEC",
      en: "Member and Project Manager - IEEE CIMATEC"
    },
    organization: "IEEE Power & Energy Society CIMATEC Student Chapter",
    location: {
      pt: "Salvador, Brasil",
      en: "Salvador, Brazil"
    },
    kind: {
      pt: "Capítulo estudantil",
      en: "Student chapter"
    },
    highlights: {
      pt: [
        "Apoio técnico e organizacional em projetos de tecnologia e inovação.",
        "Projeto pedagógico envolvendo carregador de bateria eficiente com KiCad e Proteus."
      ],
      en: [
        "Technical and organizational support in technology and innovation projects.",
        "Educational engineering project involving an efficient battery charger using KiCad and Proteus."
      ]
    }
  }
];
