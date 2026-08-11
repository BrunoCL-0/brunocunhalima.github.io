import type { Language } from "@i18n/config";

export type SkillGroup = {
  title: Record<Language, string>;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      pt: "Robótica e ROS",
      en: "Robotics and ROS"
    },
    items: ["ROS 2", "Gazebo", "RViz", "MoveIt 2", "Nav2", "SLAM", "TF", "URDF", "Xacro"]
  },
  {
    title: {
      pt: "Programação",
      en: "Programming"
    },
    items: ["C++", "Python", "Linux", "Ubuntu", "Bash", "Git"]
  },
  {
    title: {
      pt: "Sensores e percepção",
      en: "Sensors and perception"
    },
    items: ["Velodyne VLP-16", "Orbbec Astra", "Intel RealSense D435", "RGB-D", "LiDAR", "YOLO"]
  },
  {
    title: {
      pt: "Engenharia elétrica",
      en: "Electrical engineering"
    },
    items: ["ABNT/NBR 5410", "Projetos de baixa tensão", "PCB design", "KiCad", "Proteus", "Pré-carga"]
  }
];
