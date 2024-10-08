

import type { GenericTranslations } from "i18nifty";

//List the languages you wish to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type ComponentKey =
    | import("App/Header").I18n
    | import("App/Footer").I18n
    | import("App/Body/Body").I18n
    | import("App/Body/LogoCarousel").I18n
    ;

export type Translations<L extends Language> = GenericTranslations<ComponentKey, Language, typeof fallbackLanguage, L>;
