import type { Language } from "@i18n/config";

export type Project = {
  slug: string;
  priority: number;
  title: Record<Language, string>;
  summary: Record<Language, string>;
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
    tags: ["KiCad", "PCB", "Powertrain", "Electrical Systems"],
    status: "featured"
  }
];

export const projects = projectItems.sort((a, b) => a.priority - b.priority);
