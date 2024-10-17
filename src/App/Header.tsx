import { GITHUB_REPO_URL, DOCUMENTATION_URL } from "constants";
import { GlHeader } from "gitlanding/GlHeader";
import onyxiaLogoSvgUrl from "assets/svg/OnyxiaLogo.svg";
import { ThemedSvg } from "onyxia-ui/ThemedSvg";
import { breakpointsValues } from "onyxia-ui";
import { tss } from "tss";
import { Text } from "onyxia-ui/Text";
import { useTranslation, declareComponentKeys, useLang } from "i18n";
import { LanguageSelect } from "onyxia-ui/LanguageSelect";

export function Header() {
  const { classes } = useStyles();

  const { t } = useTranslation({ Header });

  const { lang, setLang } = useLang();

  return (
    <GlHeader
      title={
        <div className={classes.headerTitleWrapper}>
          <ThemedSvg className={classes.logo} svgUrl={onyxiaLogoSvgUrl}/>
          <div className={classes.headerMainTextContainer}>
            <Text typo="section heading" className={classes.headerOnyxiaText}>
              Onyxia
            </Text>
            <Text typo="section heading" className={classes.headerDatalabText}>
              Datalab
            </Text>
          </div>
        </div>
      }
      links={[
        {
          label: "GitHub",
          href: GITHUB_REPO_URL
        },
        {
          label: t("documentation"),
          href: DOCUMENTATION_URL
        },
        {
          label: t("contact"),
          href: "https://join.slack.com/t/3innovation/shared_invite/zt-2skhjkavr-xO~uTRLgoNOCm6ubLpKG7Q",
        },
        {
          label: t("our instance"),
          href: "https://datalab.sspcloud.fr/catalog",
        },
      ]}
      enableDarkModeSwitch={true}
      githubRepoUrl={GITHUB_REPO_URL}
      githubButtonSize="large"
      showGithubStarCount={true}
      customItemEnd={{
        item: (
          <LanguageSelect
            className={classes.languageSelect}
            languagesPrettyPrint={{
              en: "English",
              fr: "Français",
            }}
            language={lang}
            onLanguageChange={setLang}
            variant="big"
          />
        ),
        behaviorOnSmallDevice: "hide",
      }}
    />
  );
}

const useStyles = tss.withName({ Header }).create(({ theme }) => ({
  headerTitleWrapper: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  logo: {
    width: 33,
    height: "100%",
  },
  headerMainTextContainer: {
    cursor: "pointer",
    "& > *": {
      display: "inline",
    },
  },
  headerOnyxiaText: {
    ...theme.spacing.rightLeft("margin", 2),
  },
  headerDatalabText: {
    //...theme.spacing.rightLeft("margin", 2),
    fontWeight: 600,
    color: theme.colors.useCases.typography.textFocus,
  },
  languageSelect: {
    marginLeft: theme.spacing(3),
    display: (() => {
      if (theme.windowInnerWidth >= breakpointsValues.lg) {
        return undefined;
      }

      return "none";
    })(),
  },
}));

const { i18n } = declareComponentKeys<
  "documentation" | "contact" | "our instance"
>()({ Header });

export type I18n = typeof i18n;
