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
        "Desenvolvimento e integração de software robótico para uma plataforma AGV equipada com manipulador.",
        "Implementação de fluxos com ROS 2, C++, Python, Linux, navegação autônoma, SLAM, motion planning e MoveIt 2.",
        "Contribuição na concepção, experimentação e validação de soluções de manipulação móvel para aplicações reais."
      ],
      en: [
        "Developed and integrated robotic software for an AGV platform equipped with a robotic manipulator.",
        "Implemented workflows with ROS 2, C++, Python, Linux, autonomous navigation, SLAM, motion planning, and MoveIt 2.",
        "Contributed to the design, experimentation, and validation of mobile manipulation solutions for real-world applications."
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
        "Modernização de uma plataforma TurtleBot2i legada com migração do stack de ROS 1 para ROS 2 Humble.",
        "Integração da base Kobuki, LiDAR Velodyne VLP-16, Orbbec Astra e Intel RealSense D435 para experimentos de navegação e percepção.",
        "Configuração de drivers, tópicos, parâmetros, TF, URDF/Xacro, launch files, RViz, Gazebo, SLAM e Nav2, resultando em publicação técnica no SIINTEC."
      ],
      en: [
        "Modernized a legacy TurtleBot2i platform by migrating its software stack from ROS 1 to ROS 2 Humble.",
        "Integrated the Kobuki base, Velodyne VLP-16 LiDAR, Orbbec Astra, and Intel RealSense D435 for navigation and perception experiments.",
        "Configured drivers, topics, parameters, TF, URDF/Xacro, launch files, RViz, Gazebo, SLAM, and Nav2, leading to a technical publication at SIINTEC."
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
        "Condução de monitorias e apoio a estudantes na resolução de problemas de Física III.",
        "Reforço de conceitos de fenômenos ondulatórios, eletromagnetismo e aplicações matemáticas em engenharia."
      ],
      en: [
        "Led tutorial sessions and supported students in Physics III problem-solving activities.",
        "Reinforced concepts in wave phenomena, electromagnetism, and mathematical applications in engineering."
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
        "Apoio ao desenvolvimento de projetos elétricos de baixa tensão em conformidade com a ABNT/NBR 5410.",
        "Elaboração de levantamentos de materiais, estimativas de custo, relatórios técnicos e documentação de acompanhamento de obras."
      ],
      en: [
        "Supported the development of low-voltage electrical projects in compliance with ABNT/NBR 5410.",
        "Prepared material surveys, cost estimates, technical reports, and construction monitoring documentation."
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
        "Pesquisa experimental em localização, mapeamento e percepção para sistemas robóticos móveis com ROS 2.",
        "Comparação de configurações de SLAM RGB-D e LiDAR com Cartographer e SLAM Toolbox, além de experimentos de percepção com YOLO, Gazebo e Nav2."
      ],
      en: [
        "Conducted experimental research in localization, mapping, and perception for mobile robotic systems with ROS 2.",
        "Compared RGB-D and LiDAR SLAM configurations with Cartographer and SLAM Toolbox, alongside perception experiments using YOLO, Gazebo, and Nav2."
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
        "Desenvolvimento de integração elétrica e layouts de PCB em KiCad para o powertrain a hidrogênio.",
        "Apoio ao circuito de pré-carga para controle de corrente de pico e proteção dos capacitores do motor em projeto premiado com 3º lugar geral no SAE BRASIL H2 Challenge 2025."
      ],
      en: [
        "Developed electrical integration and PCB layouts in KiCad for the hydrogen powertrain.",
        "Supported the pre-charge circuit for peak current control and motor capacitor protection in a project awarded 3rd place overall at the 2025 SAE BRASIL H2 Challenge."
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
        "Atuação técnica e organizacional em projetos estudantis de tecnologia, inovação e educação em engenharia.",
        "Coordenação de projeto pedagógico para design e simulação de carregador de bateria eficiente com KiCad e Proteus."
      ],
      en: [
        "Provided technical and organizational leadership in student projects focused on technology, innovation, and engineering education.",
        "Coordinated an educational engineering project for the design and simulation of an efficient battery charger using KiCad and Proteus."
      ]
    }
  }
];
