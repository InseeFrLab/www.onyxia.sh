import { GlHero } from "gitlanding/GlHero";
import { GlHeroText } from "gitlanding/GlHero/GlHeroText";
import { breakpointsValues } from "onyxia-ui";
import { GlArticle } from "gitlanding/GlArticle";
import onyxiaUXDarkENUrl from "assets/img/OnyxiaUXDarkEN.png";
import onyxiaUXDarkFRUrl from "assets/img/OnyxiaUXDarkFR.png";
import onyxiaUXLightENUrl from "assets/img/OnyxiaUXLightEN.png";
import onyxiaUXLightFRUrl from "assets/img/OnyxiaUXLightFR.png";
import logoInseePngUrl from "assets/img/Logo_Insee.png";
import logoMercatorJpgUrl from "assets/img/Logo_Mercator.jpg";
import logoStatisticNorwayPngUrl from "assets/img/Logo_StatisticNorway.png";
import logoExpertiseFranceJpgUrl from "assets/img/Logo_ExpertiseFrance.jpg";
import logoGenesPngUrl from "assets/img/Logo_Genes.png";
import catalogMp4Url from "assets/video/catalog.mp4";
import catalogWebmUrl from "assets/video/catalog.webm";
import launcherMp4Url from "assets/video/launcher.mp4";
import launcherWebmUrl from "assets/video/launcher.webm";
import dragoonSvgUrl from "assets/svg/Dragoon.svg";
import { GlCheckList } from "gitlanding/GlCheckList";
import tileSvgUrl from "assets/svg/tile.svg";
import keycloakifyDemoMp4Url from "assets/video/Keycloakify_demo.mp4";
import keycloakifyDemoWebmUrl from "assets/video/Keycloakify_demo.webm";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";
import { GlSlider } from "gitlanding/GlSlider";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";
import { LogoCarousel } from "./LogoCarousel";
import { DOCUMENTATION_URL } from "constants";
import { useId } from "react";
import { tss } from "tss";
import { useLang, useTranslation, declareComponentKeys } from "i18n";
import { Text } from "onyxia-ui/Text";

export function Body() {
  const { t } = useTranslation({ Body });
  const { classes, theme, css } = useStyles();
  const { lang } = useLang();

  const testimonialsSectionId = `testimonials-${useId()}`;

  return (
    <>
      <GlHero
        title={
          <>
            <GlHeroText>Onyxia Datalab</GlHeroText>
            <Text typo="display heading" className={classes.title2}>
              {t("orange title")}
            </Text>
          </>
        }
        subTitle={t("subTitle")}
        illustration={{
          type: "image",
          src: dragoonSvgUrl,
          hasShadow: false,
        }}
        classes={{
          subtitle: classes.subtitle,
          illustrationWrapper: classes.heroIllustrationWrapper,
          textWrapper: classes.textWrapper,
          textAndImageWrapper: classes.heroTextImageWrapper,
        }}
        className={classes.firstHero}
      />
      <LogoCarousel
        testimonialSectionId={testimonialsSectionId}
        className={css({
          maxWidth: "min(1250px, 90%)",
          overflow: "visible",
          margin: "auto",
        })}
      />
      <GlYoutubeVideoSection
        className={css({
          marginTop: theme.spacing(7),
        })}
        title={t("Onyxia in action")}
        src="https://www.youtube.com/embed/FvpNfVrxBFM"
        hasAnimation={true}
      />
      <GlArticle
        title={t("what is onyxia title")}
        body={t("what is onyxia body")}
        buttonLabel={t("install now")}
        buttonLink={{ href: DOCUMENTATION_URL }}
        illustration={{
          type: "image",
          src: (() => {
            switch (lang) {
              case "en":
                return theme.isDarkModeEnabled
                  ? onyxiaUXDarkENUrl
                  : onyxiaUXLightENUrl;
              case "fr":
                return theme.isDarkModeEnabled
                  ? onyxiaUXDarkFRUrl
                  : onyxiaUXLightFRUrl;
            }
          })(),
          hasShadow: false,
        }}
        classes={{ image: classes.articleImage }}
        hasAnimation={true}
        illustrationPosition="right"
      />
      <GlArticle
        title={t("article 1 title")}
        body={t("article 1 body")}
        illustration={{
          type: "video",
          sources: [
            {
              src: catalogMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: catalogWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: false,
        }}
        hasAnimation={false}
        illustrationPosition="left"
      />
      <GlArticle
        title={t("article 2 title")}
        body={t("article 2 body")}
        illustration={{
          type: "video",
          sources: [
            {
              src: launcherMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: launcherWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: false,
        }}
        hasAnimation={false}
        illustrationPosition="right"
      />
      <GlArticle
        title={t("article 3 title")}
        body={t("article 3 body")}
        buttonLink={{ href: DOCUMENTATION_URL }}
        illustration={{
          type: "video",
          sources: [
            {
              src: keycloakifyDemoMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: keycloakifyDemoWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: false,
        }}
        classes={{
          video: classes.articleVideo,
        }}
        hasAnimation={true}
        illustrationPosition="left"
      />
      <GlSectionDivider />
      <GlSlider
        id={testimonialsSectionId}
        title={t("They have their own Onyxia Datalab")}
        autoPlayTimeInterval={4}
        classes={{
          container: classes.glSliderContainer,
        }}
        slides={[
          <GlReviewSlide
            logoUrl={logoInseePngUrl}
            classes={{
              logo: css({
                minWidth: 100,
              }),
            }}
            descriptionMd={t("Review slide insee description")}
            signature={t("Review slide insee signature")}
          />,
          <GlReviewSlide
            logoUrl={logoStatisticNorwayPngUrl}
            classes={{
              logo: css({
                minWidth: 300,
              }),
            }}
            descriptionMd={t("Review slide Statistic Norway description")}
            signature={t("Review slide Statistic Norway signature")}
          />,
          <GlReviewSlide
            logoUrl={logoMercatorJpgUrl}
            classes={{
              logo: css({
                minWidth: 150,
              }),
            }}
            descriptionMd={t("Review slide Mercator description")}
            signature={t("Review slide Mercator signature")}
          />,
          <GlReviewSlide
            logoUrl={logoGenesPngUrl}
            classes={{
              logo: css({
                minWidth: 150,
                backgroundColor: "white",
              }),
            }}
            descriptionMd={t("Review slide Genes description")}
            signature={t("Review slide Genes signature")}
          />,
          <GlReviewSlide
            logoUrl={logoExpertiseFranceJpgUrl}
            classes={{
              logo: css({
                minWidth: 150,
              }),
            }}
            descriptionMd={t("Review slide ExpertiseFrance description")}
            signature={t("Review slide ExpertiseFrance signature")}
          />,
        ]}
      />
      <GlSectionDivider />
      <GlCheckList
        hasAnimation={true}
        icon={tileSvgUrl}
        classes={{
          root: classes.checkListRoot,
          checkIcon: classes.checkIcon,
        }}
        elements={[
          {
            title: t("bp title 1"),
            description: t("bp description 1"),
          },
          {
            title: t("bp title 2"),
            description: t("bp description 2"),
          },
          {
            title: t("bp title 3"),
            description: t("bp description 3"),
          },
          {
            title: t("bp title 4"),
            description: t("bp description 4"),
          },
          {
            title: t("bp title 5"),
            description: t("bp description 5"),
          },
          {
            title: t("bp title 6"),
            description: t("bp description 6"),
          },
        ]}
      />
    </>
  );
}

const useStyles = tss.withName({ Body }).create(({ theme }) => ({
  firstHero: { paddingBottom: 0 },
  title2: {
    color: theme.colors.useCases.typography.textFocus,
    fontStyle: "italic",
  },
  subtitle: {
    color: theme.colors.useCases.typography.textPrimary,
  },
  heroTextImageWrapper: { marginBottom: 0 },
  heroIllustrationWrapper: {
    ...(() => {
      if (theme.windowInnerWidth >= breakpointsValues.lg) {
        return {
          paddingRight: 30,
          paddingLeft: 30,
        };
      }

      return {};
    })(),
    marginBottom: theme.spacing(5),
    maxWidth: 700,
  },
  articleImage: {
    width: (() => {
      if (theme.windowInnerWidth > 650) {
        return 700;
      }

      return undefined;
    })(),
  },
  articleVideo: {
    width: (() => {
      if (theme.windowInnerWidth > 650) {
        return 700;
      }

      return undefined;
    })(),
    borderRadius: 10,
  },

  textWrapper: {
    ...(() => {
      if (theme.windowInnerWidth >= breakpointsValues.lg) {
        return {
          marginLeft: 70,
        };
      }

      return {};
    })(),
  },
  checkListRoot: {
    //...theme.spacing.topBottom("margin", 16),
  },
  checkIcon: {
    "& g": {
      fill: theme.colors.palette.focus.main,
    },
  },
  glSliderContainer: {
    maxWidth: 950,
  },
}));

const { i18n } = declareComponentKeys<
  | "orange title"
  | "Onyxia in action"
  | "subTitle"
  | "what is onyxia title"
  | "what is onyxia body"
  | "install now"
  | "article 1 title"
  | "article 1 body"
  | "article 2 title"
  | "article 2 body"
  | "article 3 title"
  | "article 3 body"
  | "bp title 1"
  | "bp description 1"
  | "bp title 2"
  | "bp description 2"
  | "bp title 3"
  | "bp description 3"
  | "bp title 4"
  | "bp description 4"
  | "bp title 5"
  | "bp description 5"
  | "bp title 6"
  | "bp description 6"
  | "They have their own Onyxia Datalab"
  | "Review slide insee description"
  | "Review slide insee signature"
  | "Review slide Mercator description"
  | "Review slide Mercator signature"
  | "Review slide Statistic Norway description"
  | "Review slide Statistic Norway signature"
  | "Review slide ExpertiseFrance description"
  | "Review slide ExpertiseFrance signature"
  | "Review slide Genes description"
  | "Review slide Genes signature"
>()({ Body });

export type I18n = typeof i18n;
