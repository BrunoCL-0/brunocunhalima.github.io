import type { Language } from "@i18n/config";

type LocalizedText = Record<Language, string>;

export const profile = {
  name: "Bruno Cunha Lima",
  education: {
    pt: "Bacharelado em Engenharia Elétrica - SENAI CIMATEC",
    en: "B.Sc. in Electrical Engineering - SENAI CIMATEC"
  } satisfies LocalizedText,
  focusAreas: [
    "Robotics",
    "ROS 2",
    "Autonomous Mobile Robots",
    "SLAM",
    "Navigation",
    "Perception",
    "Electrical Engineering"
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
