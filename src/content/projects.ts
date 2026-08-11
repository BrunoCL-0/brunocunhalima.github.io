import type { Language } from "@i18n/config";

export type Project = {
  slug: string;
  priority: number;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  context: Record<Language, string>;
  contribution: Record<Language, string[]>;
  tags: string[];
  status: "featured" | "draft";
};

const projectItems: Project[] = [
  {
    slug: "turtlebot2i-ros2-retrofit",
    priority: 1,
    title: {
      pt: "Retrofit do TurtleBot2i para ROS 2",
      en: "TurtleBot2i Retrofit for ROS 2"
    },
    summary: {
      pt: "Migração e modernização de uma plataforma TurtleBot2i de ROS 1 para ROS 2 Humble, incluindo sensores, TF, URDF/Xacro, RViz, Gazebo, SLAM e Nav2.",
      en: "Migration and modernization of a TurtleBot2i platform from ROS 1 to ROS 2 Humble, including sensors, TF, URDF/Xacro, RViz, Gazebo, SLAM, and Nav2."
    },
    context: {
      pt: "Projeto de pesquisa voltado à recuperação de uma plataforma móvel legada para uso em experimentos modernos de navegação, mapeamento e percepção.",
      en: "Research project focused on recovering a legacy mobile platform for modern navigation, mapping, and perception experiments."
    },
    contribution: {
      pt: [
        "Migração do stack para ROS 2 Humble em Ubuntu 22.04.",
        "Integração de base móvel, LiDAR e câmeras RGB-D.",
        "Validação de teleoperação, simulação, SLAM e navegação com Nav2."
      ],
      en: [
        "Migration of the stack to ROS 2 Humble on Ubuntu 22.04.",
        "Integration of mobile base, LiDAR, and RGB-D cameras.",
        "Validation of teleoperation, simulation, SLAM, and navigation with Nav2."
      ]
    },
    tags: ["ROS 2", "SLAM", "Nav2", "Gazebo", "RViz"],
    status: "featured"
  },
  {
    slug: "agv-mobile-manipulation",
    priority: 2,
    title: {
      pt: "AGV com manipulador robótico",
      en: "AGV with robotic manipulator"
    },
    summary: {
      pt: "Projeto de P&D em manipulação móvel. Conteúdo público ainda depende de autorização e revisão de confidencialidade.",
      en: "R&D project in mobile manipulation. Public content still depends on authorization and confidentiality review."
    },
    context: {
      pt: "Experiência atual em desenvolvimento e integração de sistemas robóticos para aplicações reais usando uma plataforma AGV equipada com manipulador.",
      en: "Current experience in robotic system development and integration for real-world applications using an AGV platform equipped with a manipulator."
    },
    contribution: {
      pt: [
        "Apoio ao desenvolvimento em C++ e ROS 2.",
        "Experimentação com navegação, SLAM, motion planning e MoveIt 2.",
        "Conteúdo técnico detalhado pendente de autorização."
      ],
      en: [
        "Support for development in C++ and ROS 2.",
        "Experimentation with navigation, SLAM, motion planning, and MoveIt 2.",
        "Detailed technical content pending authorization."
      ]
    },
    tags: ["ROS 2", "C++", "MoveIt 2", "Navigation"],
    status: "draft"
  },
  {
    slug: "h2-racing-powertrain",
    priority: 3,
    title: {
      pt: "TEC H2-Racing - Powertrain",
      en: "TEC H2-Racing - Powertrain"
    },
    summary: {
      pt: "Integração elétrica, PCB design, circuito de pré-carga e testes em um sistema de propulsão a hidrogênio para competição estudantil.",
      en: "Electrical integration, PCB design, pre-charge circuit work, and testing in a hydrogen powertrain system for a student competition team."
    },
    context: {
      pt: "Projeto extracurricular em equipe multidisciplinar para desenvolvimento e validação de um powertrain a hidrogênio.",
      en: "Extracurricular multidisciplinary team project for the development and validation of a hydrogen powertrain."
    },
    contribution: {
      pt: [
        "Desenvolvimento de layouts de PCB com KiCad.",
        "Apoio ao circuito de pré-carga para controle de corrente de pico e proteção de capacitores.",
        "Participação em testes e validação do sistema elétrico."
      ],
      en: [
        "PCB layout development with KiCad.",
        "Support for the pre-charge circuit for peak current control and capacitor protection.",
        "Participation in testing and validation of the electrical system."
      ]
    },
    tags: ["KiCad", "PCB", "Powertrain", "Electrical Systems"],
    status: "featured"
  }
];

export const projects = projectItems.sort((a, b) => a.priority - b.priority);
