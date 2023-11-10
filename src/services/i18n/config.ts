export const fallbackLanguage = "en" as const;
export const languages = [fallbackLanguage] as const;
export const defaultNamespace = "common";
export const cookieName = "i18next";

export function getOptions(
  language: string = fallbackLanguage,
  namespace = defaultNamespace
) {
  return {
    debug: process.env.DEBUG_I18N === "true",
    supportedLngs: languages,
    fallbackLng: fallbackLanguage,
    lng: language,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns: namespace,
  };
}
