import { useEffect, useMemo, useState, memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { Home, githubRepoUrl, docsUrl } from "./pages/Home";
import { GlHeader } from "gitlanding/GlHeader";
import { useTranslation } from "ui/i18n";
import { makeStyles, Text } from "ui/theme";
import { ReactComponent as OnyxiaLogoSvg } from "ui/assets/svg/OnyxiaLogo.svg";
import { useConstCallback } from "powerhooks/useConstCallback";
import { routes } from "ui/router";
import { LanguageSelect } from "ui/theme";
import { useLang } from "ui/i18n";
import { Dialog } from "onyxia-ui/Dialog";
import { Button } from "ui/theme";
import type { NonPostableEvt } from "evt";
import { useEvt } from "evt/hooks/useEvt";
import { useConst } from "powerhooks/useConst";
import { Evt } from "evt";
import { breakpointsValues } from "onyxia-ui";
import { declareComponentKeys } from "i18nifty";
import { GlFooter } from "gitlanding/GlFooter";

/* spell-checker: disable */
export const App = memo(() => {
    const route = useRoute();

    const { lang, setLang } = useLang();

    {
        const { hideRootSplashScreen } = useSplashScreen();

        useEffect(() => {
            hideRootSplashScreen();
        }, []);
    }

    const { t } = useTranslation({ App });

    const pageNode = useMemo(() => {
        {
            const Page = Home;

            if (Page.routeGroup.has(route)) {
                return <Page />;
            }
        }

        return <FourOhFour />;
    }, [route]);

    const { classes } = useStyles();

    const onLogoClick = useConstCallback(() => routes.home().push());

    const evtOpenPricingDialog = useConst(() => Evt.create());

    return (
        <>
            <GlTemplate
                header={
                    <GlHeader
                        title={
                            <div
                                className={classes.headerTitleWrapper}
                                onClick={onLogoClick}
                            >
                                <OnyxiaLogoSvg className={classes.logo} />
                                <div
                                    onClick={onLogoClick}
                                    className={classes.headerMainTextContainer}
                                >
                                    <Text
                                        typo="section heading"
                                        className={classes.headerOnyxiaText}
                                    >
                                        Onyxia
                                    </Text>
                                    <Text
                                        typo="section heading"
                                        className={classes.headerDatalabText}
                                    >
                                        Datalab
                                    </Text>
                                </div>
                            </div>
                        }
                        links={[
                            {
                                "label": "GitHub",
                                "href": githubRepoUrl,
                            },
                            {
                                "label": t("install"),
                                "href": docsUrl,
                            },
                            {
                                "label": t("pricing"),
                                "onClick": () => evtOpenPricingDialog.post(),
                                "href": "#",
                            },
                            {
                                "label": t("try it"),
                                "href": "https://datalab.sspcloud.fr/catalog",
                            },
                        ]}
                        enableDarkModeSwitch={true}
                        githubRepoUrl={githubRepoUrl}
                        githubButtonSize="large"
                        showGithubStarCount={true}
                        customItemEnd={
                            <LanguageSelect
                                className={classes.languageSelect}
                                language={lang}
                                onLanguageChange={setLang}
                                variant="big"
                            />
                        }
                    />
                }
                headerOptions={{
                    "position": "sticky",
                    "isRetracted": "smart",
                }}
                footer={
                    <GlFooter
                        bottomDivContent={`[GitHub](${githubRepoUrl}) - [Documentation](${docsUrl}) - [${t(
                            "edit this website",
                        )}](https://github.com/InseeFrLab/www.onyxia.sh/blob/main/src/ui/i18n.tsx)`}
                        links={[
                            {
                                "href": `${githubRepoUrl}/blob/main/LICENSE`,
                                "label": (
                                    <img
                                        src="https://img.shields.io/npm/l/i18nifty"
                                        alt=""
                                    />
                                ),
                            },
                        ]}
                    />
                }
            >
                {pageNode}
            </GlTemplate>
            <PricingDialog evtOpen={evtOpenPricingDialog} />
        </>
    );
});

export const { i18n } = declareComponentKeys<
    | "install"
    | "pricing"
    | { K: "it is free software"; P: { licenseUrl: string, inseeUrl: string; etalabUrl: string; }; R: JSX.Element }
    | "try it"
    | "it is libre software"
    | "ok"
    | "edit this website"
>()({ App });

const useStyles = makeStyles({ "name": { App } })(theme => ({
    "headerTitleWrapper": {
        "display": "flex",
        "cursor": "pointer",
        "alignItems": "center",
    },
    "logo": {
        "fill": theme.colors.useCases.typography.textFocus,
        "width": 33,
        "height": "100%",
    },
    "headerMainTextContainer": {
        "cursor": "pointer",
        "& > *": {
            "display": "inline",
        },
    },
    "headerOnyxiaText": {
        ...theme.spacing.rightLeft("margin", 2),
    },
    "headerDatalabText": {
        //...theme.spacing.rightLeft("margin", 2),
        "fontWeight": 600,
        "color": theme.colors.useCases.typography.textFocus,
    },
    "languageSelect": {
        "marginLeft": theme.spacing(3),
        "display": (() => {
            if (theme.windowInnerWidth >= breakpointsValues.lg) {
                return undefined;
            }

            return "none";
        })(),
    },
}));

const { PricingDialog } = (() => {
    type Props = {
        evtOpen: NonPostableEvt<void>;
    };

    const PricingDialog = memo((props: Props) => {
        const { evtOpen } = props;

        const { t } = useTranslation({ App });

        const [isOpen, setIsOpen] = useState(false);

        const onClose = useConstCallback(() => setIsOpen(false));

        useEvt(ctx => evtOpen.attach(ctx, () => setIsOpen(true)), [evtOpen]);

        const { lang } = useLang();

        return (
            <Dialog
                isOpen={isOpen}
                title={t("it is libre software")}
                body={t("it is free software", {
                    "licenseUrl":
                        "https://github.com/InseeFrLab/onyxia-web/blob/main/LICENSE",
                    "inseeUrl": `https://www.insee.fr/${lang}`,
                    "etalabUrl": "https://www.etalab.gouv.fr/"
                })}
                buttons={<Button onClick={onClose}>{t("ok")}</Button>}
                onClose={onClose}
            />
        );
    });

    return { PricingDialog };
})();
