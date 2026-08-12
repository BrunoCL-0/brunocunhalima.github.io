import type { Language } from "@i18n/config";

export type Project = {
  slug: string;
  priority: number;
  image?: string;
  imageAlt: Record<Language, string>;
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
    image: "turtlebot2i-retrofit.jpeg",
    imageAlt: {
      pt: "TurtleBot2i com sensores RGB-D e LiDAR usado no projeto de retrofit para ROS 2",
      en: "TurtleBot2i with RGB-D sensors and LiDAR used in the ROS 2 retrofit project"
    },
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
    image: "agv-manipulation-concept.png",
    imageAlt: {
      pt: "Composição conceitual de uma plataforma terrestre, um manipulador colaborativo e um manipulador soft",
      en: "Conceptual composite of a ground platform, a collaborative manipulator, and a soft manipulator"
    },
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
    slug: "rgbd-lidar-slam-analysis",
    priority: 3,
    imageAlt: {
      pt: "Representação visual de análise comparativa entre sensores RGB-D e LiDAR para SLAM 2D",
      en: "Visual representation of a comparative analysis between RGB-D and LiDAR sensors for 2D SLAM"
    },
    title: {
      pt: "Análise RGB-D vs LiDAR em SLAM 2D",
      en: "RGB-D vs LiDAR Analysis for 2D SLAM"
    },
    summary: {
      pt: "Pesquisa experimental com TurtleBot2i em ROS 2 comparando configurações de SLAM baseadas em sensores RGB-D e LiDAR, com foco em continuidade de paredes, representação de obstáculos e coerência global dos mapas.",
      en: "Experimental research with a TurtleBot2i in ROS 2 comparing RGB-D- and LiDAR-based SLAM configurations, focused on wall continuity, obstacle representation, and global map coherence."
    },
    context: {
      pt: "Estudo de mapeamento indoor usando Orbbec Astra, Intel RealSense D435 e Velodyne VLP-16 com Cartographer e SLAM Toolbox. O objetivo foi entender limitações geométricas dos sensores RGB-D quando seus dados de profundidade são usados em pipelines de SLAM 2D.",
      en: "Indoor mapping study using Orbbec Astra, Intel RealSense D435, and Velodyne VLP-16 with Cartographer and SLAM Toolbox. The goal was to understand geometric limitations of RGB-D sensors when depth data is used in 2D SLAM pipelines."
    },
    contribution: {
      pt: [
        "Execução de experimentos de mapeamento com sensores RGB-D e LiDAR na mesma plataforma TurtleBot2i.",
        "Comparação qualitativa de mapas de ocupação considerando descontinuidades, estruturas duplicadas e coerência global.",
        "Análise de possíveis impactos de campo de visão, alcance efetivo, sobreposição de medições e odometria durante rotações."
      ],
      en: [
        "Execution of mapping experiments with RGB-D and LiDAR sensors on the same TurtleBot2i platform.",
        "Qualitative comparison of occupancy grids considering discontinuities, duplicated structures, and global coherence.",
        "Analysis of possible effects from field of view, effective range, measurement overlap, and odometry during rotations."
      ]
    },
    tags: ["ROS 2", "SLAM Toolbox", "Cartographer", "RGB-D", "LiDAR"],
    status: "featured"
  }
];

export const projects = projectItems.sort((a, b) => a.priority - b.priority);
