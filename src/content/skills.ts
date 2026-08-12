import type { Language } from "@i18n/config";

export type SkillGroup = {
  title: Record<Language, string>;
  items: (string | Record<Language, string>)[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      pt: "Robótica e ROS",
      en: "Robotics and ROS"
    },
    items: ["ROS 2", "Gazebo", "MoveIt 2", "Nav2", "SLAM"]
  },
  {
    title: {
      pt: "Programação",
      en: "Programming"
    },
    items: ["C++", "Python", "Linux", "Ubuntu", "Git"]
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
    items: [
      "ABNT/NBR 5410",
      {
        pt: "Projetos de baixa tensão",
        en: "Low-voltage electrical design"
      },
      "PCB design",
      "KiCad",
      "Proteus",
      "MATLAB"
    ]
  }
];
