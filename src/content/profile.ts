import type { Language } from "@i18n/config";

export const profile = {
  name: "Bruno Cunha Lima",
  education: {
    period: "2022 - PRESENT",
    degree: {
      pt: "Bacharelado em Engenharia Elétrica",
      en: "BSc in Electrical Engineering"
    },
    institution: "University SENAI CIMATEC"
  },
  focusAreas: [
    {
      pt: "Robótica",
      en: "Robotics"
    },
    {
      pt: "ROS 2",
      en: "ROS 2"
    },
    {
      pt: "Robôs móveis autônomos",
      en: "Autonomous Mobile Robots"
    },
    {
      pt: "SLAM",
      en: "SLAM"
    },
    {
      pt: "Navegação",
      en: "Navigation"
    },
    {
      pt: "Percepção",
      en: "Perception"
    },
    {
      pt: "Engenharia Elétrica",
      en: "Electrical Engineering"
    }
  ],
  hero: {
    pt: {
      eyebrow: "Engenharia Elétrica + Robótica + Software",
      title: "Bruno Cunha Lima",
      summary:
        "Estudante de Engenharia Elétrica construindo experiência prática em robótica, ROS 2, navegação autônoma, percepção e integração de sensores."
    },
    en: {
      eyebrow: "Electrical Engineering + Robotics + Software",
      title: "Bruno Cunha Lima",
      summary:
        "Electrical Engineering student building hands-on experience with robotics, ROS 2, autonomous navigation, perception, and sensor integration."
    }
  } satisfies Record<
    Language,
    {
      eyebrow: string;
      title: string;
      summary: string;
    }
  >
};
