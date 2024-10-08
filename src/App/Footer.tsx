import { GITHUB_REPO_URL, DOCUMENTATION_URL } from "constants";
import { GlFooter } from "gitlanding/GlFooter";
import { declareComponentKeys, useTranslation } from "i18n";

export function Footer() {
  const { t } = useTranslation({ Footer });

  return (
    <GlFooter
      bottomDivContent={`[GitHub](${GITHUB_REPO_URL}) - [Documentation](${DOCUMENTATION_URL}) - [${t(
        "edit this website"
      )}](${GITHUB_REPO_URL})`}
    />
  );
}

const { i18n } = declareComponentKeys<"edit this website">()({ Footer });

export type I18n = typeof i18n;
