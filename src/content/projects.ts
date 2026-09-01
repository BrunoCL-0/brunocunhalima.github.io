import type { Language } from "@i18n/config";

export type Project = {
  slug: string;
  priority: number;
  image?: string;
  imageLabel: Record<Language, string>;
  extraImages?: {
    image: string;
    imageLabel: Record<Language, string>;
    imageAlt: Record<Language, string>;
  }[];
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
  detailSections?: {
    title: Record<Language, string>;
    body: Record<Language, string[]>;
  }[];
  tags: string[];
};

const projectItems: Project[] = [
  {
    slug: "turtlebot2i-ros2-retrofit",
    priority: 1,
    image: "turtlebot2i-retrofit.jpeg",
    imageLabel: {
      pt: "TurtleBot2i físico com sensores RGB-D e LiDAR",
      en: "Physical TurtleBot2i with RGB-D sensors and LiDAR"
    },
    video: "nav2-physical-demo.mp4",
    videoLabel: {
      pt: "Teste de navegação autônoma com Nav2 no robô físico",
      en: "Autonomous navigation test with Nav2 on the physical robot"
    },
    extraVideos: [
      {
        video: "nav2-navigation-demo.mp4",
        videoLabel: {
          pt: "Teste de navegação autônoma com Nav2 em ambiente simulado",
          en: "Autonomous navigation test with Nav2 in a simulated environment"
        }
      }
    ],
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
    tags: ["ROS 2", "SLAM", "Nav2", "Gazebo"]
  },
  {
    slug: "agv-mobile-manipulation",
    priority: 2,
    image: "agv-manipulation-concept.png",
    imageLabel: {
      pt: "Scout, UR7 e manipulador soft no conceito de manipulação móvel",
      en: "Scout, UR7, and soft manipulator in the mobile manipulation concept"
    },
    videoLabel: {
      pt: "Conceito de manipulação móvel com AGV",
      en: "Mobile manipulation concept with AGV"
    },
    imageAlt: {
      pt: "Composição com robô terrestre Scout, braço UR7 e manipulador soft usado no projeto de manipulação móvel",
      en: "Composite with a Scout ground robot, UR7 arm, and soft manipulator used in the mobile manipulation project"
    },
    title: {
      pt: "AGV com manipuladores robóticos",
      en: "AGV with robotic manipulators"
    },
    summary: {
      pt: "Projeto de P&D em manipulação móvel envolvendo integração de software robótico, navegação autônoma, planejamento de movimento e controle com ROS 2.",
      en: "Mobile manipulation R&D project involving robotic software integration, autonomous navigation, motion planning, and control with ROS 2."
    },
    context: {
      pt: "Experiência em desenvolvimento e integração de sistemas robóticos para aplicações reais usando uma plataforma AGV equipada com dois manipuladores.",
      en: "Experience in robotic system development and integration for real-world applications using an AGV platform equipped with two manipulators."
    },
    contribution: {
      pt: [
        "Desenvolvimento e integração de componentes em C++ e ROS 2.",
        "Experimentação com navegação autônoma, SLAM, motion planning e MoveIt 2.",
        "Validação de fluxos de manipulação móvel em ambiente de P&D aplicado."
      ],
      en: [
        "Development and integration of components in C++ and ROS 2.",
        "Experimentation with autonomous navigation, SLAM, motion planning, and MoveIt 2.",
        "Validation of mobile manipulation workflows in an applied R&D environment."
      ]
    },
    tags: ["ROS 2", "C++", "MoveIt 2", "Nav2", "SLAM", "Soft Robotics"]
  },
  {
    slug: "rgbd-lidar-slam-analysis",
    priority: 4,
    image: "gazebo-turtlebot-sensors.png",
    imageLabel: {
      pt: "TurtleBot2i simulado no Gazebo com sensores RGB-D e LiDAR",
      en: "Simulated TurtleBot2i in Gazebo with RGB-D sensors and LiDAR"
    },
    videoLabel: {
      pt: "Mídia do projeto de análise RGB-D vs LiDAR",
      en: "RGB-D vs LiDAR analysis project media"
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
      pt: "Pesquisa experimental com TurtleBot2i em ROS 2 comparando configurações de SLAM baseadas em sensores RGB-D e LiDAR. Em uma frente separada, também foram realizados testes de percepção com YOLO para detecção de objetos e pessoas.",
      en: "Experimental research with a TurtleBot2i in ROS 2 comparing RGB-D- and LiDAR-based SLAM configurations. In a separate workstream, YOLO was also tested for object and person detection."
    },
    context: {
      pt: "Estudo de mapeamento indoor usando Orbbec Astra, Intel RealSense D435 e Velodyne VLP-16 com Cartographer e SLAM Toolbox. O objetivo principal foi entender limitações geométricas dos sensores RGB-D quando seus dados de profundidade são usados em pipelines de SLAM 2D. Os testes com YOLO foram conduzidos separadamente em ambiente simulado.",
      en: "Indoor mapping study using Orbbec Astra, Intel RealSense D435, and Velodyne VLP-16 with Cartographer and SLAM Toolbox. The main goal was to understand geometric limitations of RGB-D sensors when depth data is used in 2D SLAM pipelines. The YOLO tests were conducted separately in simulation."
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
  },
  {
    slug: "soft-climber-pipe-robot",
    priority: 3,
    image: "soft-climber-cycle-step6.png",
    imageLabel: {
      pt: "Robô escalador de dutos com manipuladores flexíveis",
      en: "Pipe-climbing robot with flexible manipulators"
    },
    extraImages: [
      {
        image: "soft-climber-locomotion-cycle.png",
        imageLabel: {
          pt: "Comportamento do robô durante um ciclo completo de locomoção",
          en: "Robot behavior during a complete locomotion cycle"
        },
        imageAlt: {
          pt: "Sequência em seis etapas mostrando o robô soft climber se movimentando em um duto horizontal",
          en: "Six-step sequence showing the soft climber robot moving along a horizontal pipe"
        }
      },
      {
        image: "soft-climber-arm-actuation.png",
        imageLabel: {
          pt: "Comportamento real do braço durante a atuação",
          en: "Actual behavior of the arm during actuation"
        },
        imageAlt: {
          pt: "Três imagens mostrando o manipulador flexível abraçando o duto durante a atuação por tendões",
          en: "Three images showing the flexible manipulator wrapping around the pipe during tendon actuation"
        }
      }
    ],
    videoLabel: {
      pt: "Mídia do projeto Soft Climber",
      en: "Soft Climber project media"
    },
    imageAlt: {
      pt: "Recorte do sexto passo da locomoção do robô escalador de dutos, com manipulador flexível acionado por tendão envolvendo o tubo",
      en: "Crop of the sixth locomotion step of the pipe-climbing robot, with a tendon-driven flexible manipulator around the tube"
    },
    title: {
      pt: "Robô escalador de dutos acionado por tendões",
      en: "Tendon-driven pipe-climbing robot"
    },
    summary: {
      pt: "Prova de conceito de um robô escalador de dutos com manipuladores flexíveis acionados por tendões, combinando estrutura rígida, interfaces flexíveis e validação experimental em duto horizontal.",
      en: "Proof of concept for a pipe-climbing robot with tendon-driven flexible manipulators, combining rigid structure, compliant interfaces, and experimental validation in a horizontal pipe."
    },
    context: {
      pt: "Projeto ligado ao TCC, voltado à prova de conceito de um robô escalador de dutos com manipuladores flexíveis acionados por tendão. Parte desse desenvolvimento foi publicada no Congresso Brasileiro de Automática (CBA).",
      en: "Project connected to my undergraduate thesis, focused on a proof of concept for a pipe-climbing robot with tendon-driven flexible manipulators. Part of this development was published at the Brazilian Congress of Automatica (CBA)."
    },
    contribution: {
      pt: [
        "Desenvolvimento de algoritmos para operação e movimentação do robô.",
        "Desenvolvimento da cinemática do manipulador flexível acionado por tendão.",
        "Validação experimental do ciclo de locomoção em um duto horizontal, analisando contato, aderência e deslocamento."
      ],
      en: [
        "Development of algorithms for robot operation and motion.",
        "Development of the kinematics of the tendon-driven flexible manipulator.",
        "Experimental validation of the locomotion cycle in a horizontal pipe, analyzing contact, adhesion, and displacement."
      ]
    },
    detailSections: [
      {
        title: {
          pt: "Problema",
          en: "Problem"
        },
        body: {
          pt: [
            "A inspeção e locomoção em dutos exige um robô capaz de se adaptar à curvatura da tubulação e manter contato suficiente para gerar aderência. Em estruturas confinadas, a solução mecânica precisa equilibrar flexibilidade, força de contato e baixo peso embarcado."
          ],
          en: [
            "Pipe inspection and locomotion require a robot capable of adapting to pipe curvature while maintaining enough contact to generate adhesion. In confined structures, the mechanical solution must balance flexibility, contact force, and low onboard mass."
          ]
        }
      },
      {
        title: {
          pt: "Validação experimental",
          en: "Experimental validation"
        },
        body: {
          pt: [
            "Os testes foram conduzidos em um duto horizontal, com atuação em tempo real via joystick. O ciclo de locomoção foi analisado em etapas de ancoragem, translação e liberação/reconfiguração, observando como o contato com o tubo influencia o movimento."
          ],
          en: [
            "Tests were conducted in a horizontal pipe with real-time joystick actuation. The locomotion cycle was analyzed through anchoring, translation, and release/reconfiguration stages, observing how pipe contact influences motion."
          ]
        }
      },
      {
        title: {
          pt: "Resultados e aprendizados",
          en: "Results and lessons learned"
        },
        body: {
          pt: [
            "Os experimentos demonstraram locomoção contínua, com avanço médio de aproximadamente 20 cm por ciclo de 100 s. A análise indicou uma dinâmica sequencial marcada por atrito e comportamento stick-slip.",
            "A principal lição foi que o modelo geométrico ajuda no projeto inicial, mas o desempenho real depende fortemente das condições de contato e de estratégias futuras de controle em malha fechada."
          ],
          en: [
            "The experiments demonstrated continuous locomotion, with an average displacement of approximately 20 cm per 100 s cycle. The analysis indicated a sequential gait shaped by friction and stick-slip behavior.",
            "The main lesson was that geometric modeling is useful for early design, but real performance depends strongly on contact conditions and future closed-loop control strategies."
          ]
        }
      }
    ],
    tags: ["Soft Robotics", "Kinematics", "Prototyping"]
  }
];

export const projects = projectItems.sort((a, b) => a.priority - b.priority);
