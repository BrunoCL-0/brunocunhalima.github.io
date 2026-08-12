import type { Language } from "@i18n/config";

export type Project = {
  slug: string;
  priority: number;
  image?: string;
  video?: string;
  extraVideos?: {
    video: string;
    videoLabel: Record<Language, string>;
  }[];
  videoLabel: Record<Language, string>;
  imageAlt: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  context: Record<Language, string>;
  contribution: Record<Language, string[]>;
  tags: string[];
};

const projectItems: Project[] = [
  {
    slug: "turtlebot2i-ros2-retrofit",
    priority: 1,
    image: "turtlebot2i-retrofit.jpeg",
    video: "nav2-physical-demo.mp4",
    videoLabel: {
      pt: "Teste de navegação autônoma com Nav2 no robô físico",
      en: "Autonomous navigation test with Nav2 on the physical robot"
    },
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
    tags: ["ROS 2", "SLAM", "Nav2", "Gazebo", "RViz"]
  },
  {
    slug: "agv-mobile-manipulation",
    priority: 2,
    image: "agv-manipulation-concept.png",
    videoLabel: {
      pt: "Mídia pública pendente de autorização",
      en: "Public media pending authorization"
    },
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
    tags: ["ROS 2", "C++", "MoveIt 2", "Navigation"]
  },
  {
    slug: "rgbd-lidar-slam-analysis",
    priority: 3,
    image: "gazebo-turtlebot-sensors.png",
    video: "nav2-navigation-demo.mp4",
    videoLabel: {
      pt: "Teste de navegação autônoma com Nav2 em ambiente simulado",
      en: "Autonomous navigation test with Nav2 in a simulated environment"
    },
    extraVideos: [
      {
        video: "yolo-detection-demo.webm",
        videoLabel: {
          pt: "Teste de detecção de objetos e pessoas com YOLO em simulação",
          en: "YOLO object and person detection test in simulation"
        }
      }
    ],
    imageAlt: {
      pt: "TurtleBot2i em simulação no Gazebo com sensores RGB-D e LiDAR",
      en: "TurtleBot2i in Gazebo simulation with RGB-D and LiDAR sensors"
    },
    title: {
      pt: "Análise RGB-D vs LiDAR em SLAM 2D",
      en: "RGB-D vs LiDAR Analysis for 2D SLAM"
    },
    summary: {
      pt: "Pesquisa experimental com TurtleBot2i em ROS 2 comparando configurações de SLAM baseadas em sensores RGB-D e LiDAR, incluindo testes de percepção com YOLO para detecção de objetos e pessoas.",
      en: "Experimental research with a TurtleBot2i in ROS 2 comparing RGB-D- and LiDAR-based SLAM configurations, including perception tests with YOLO for object and person detection."
    },
    context: {
      pt: "Estudo de mapeamento indoor usando Orbbec Astra, Intel RealSense D435 e Velodyne VLP-16 com Cartographer e SLAM Toolbox. O objetivo foi entender limitações geométricas dos sensores RGB-D quando seus dados de profundidade são usados em pipelines de SLAM 2D, além de testar percepção com YOLO em ambiente simulado.",
      en: "Indoor mapping study using Orbbec Astra, Intel RealSense D435, and Velodyne VLP-16 with Cartographer and SLAM Toolbox. The goal was to understand geometric limitations of RGB-D sensors when depth data is used in 2D SLAM pipelines, alongside YOLO perception tests in simulation."
    },
    contribution: {
      pt: [
        "Execução de experimentos de mapeamento com sensores RGB-D e LiDAR na mesma plataforma TurtleBot2i.",
        "Comparação qualitativa de mapas de ocupação considerando descontinuidades, estruturas duplicadas e coerência global.",
        "Análise de possíveis impactos de campo de visão, alcance efetivo, sobreposição de medições e odometria durante rotações.",
        "Testes de detecção com YOLO para objetos e pessoas em cenário simulado."
      ],
      en: [
        "Execution of mapping experiments with RGB-D and LiDAR sensors on the same TurtleBot2i platform.",
        "Qualitative comparison of occupancy grids considering discontinuities, duplicated structures, and global coherence.",
        "Analysis of possible effects from field of view, effective range, measurement overlap, and odometry during rotations.",
        "YOLO detection tests for objects and people in a simulated scenario."
      ]
    },
    tags: ["ROS 2", "SLAM Toolbox", "Cartographer", "RGB-D", "LiDAR"]
  }
];

export const projects = projectItems.sort((a, b) => a.priority - b.priority);
