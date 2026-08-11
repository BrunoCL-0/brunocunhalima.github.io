export const languages = {
  pt: {
    code: "pt",
    locale: "pt-BR",
    label: "Português",
    path: "/pt/"
  },
  en: {
    code: "en",
    locale: "en",
    label: "English",
    path: "/en/"
  }
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";
