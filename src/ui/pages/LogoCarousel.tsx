import { useMemo } from "react";
import logoMercatorJpgUrl from "ui/assets/img/Logo_Mercator.jpg";
import logoStatisticNorwayPngUrl from "ui/assets/img/Logo_StatisticNorway.png";
import logoExpertiseFranceMonochromeDarkPng from "ui/assets/img/Logo_ExpertiseFrance_monochrome_dark.png";
import logoExpertiseFranceMonochromeLightPng from "ui/assets/img/Logo_ExpertiseFrance_monochrome_light.png";
import logoInseeMonochromeLightPng from "ui/assets/img/Logo_Insee_monochrome_light.png";
import logoInseeMonochromeDarkPng from "ui/assets/img/Logo_Insee_monochrome_dark.png";
import logoGenesPngUrl from "ui/assets/img/Logo_Genes.png";
import { tss, keyframes } from "ui/theme";
import { breakpointsValues } from "onyxia-ui";

const getLogos = (isDark: boolean) => [
    { src: isDark ? logoInseeMonochromeDarkPng : logoInseeMonochromeLightPng, alt: "Logo Insee" },
    { src: isDark ? logoExpertiseFranceMonochromeDarkPng : logoExpertiseFranceMonochromeLightPng, alt: "Logo Expertise France" },
    { src: logoGenesPngUrl, alt: "Logo Genes" },
    { src: logoMercatorJpgUrl, alt: "Logo Mercator" },
    { src: logoStatisticNorwayPngUrl, alt: "Logo Statistic Norway" },
] as const;

type Props= {
    className?: string;
};

export function LogoCarousel(
    props: Props
) {

    const { className } = props;

    const { classes, theme, cx, css } = useStyles();

    const logos = useMemo(() => getLogos(theme.isDarkModeEnabled), [theme.isDarkModeEnabled]);

    const logoBaseWith = useMemo(() => {

        if (theme.windowInnerWidth >= breakpointsValues.lg) {
            return 200;
        }

        if (theme.windowInnerWidth >= breakpointsValues.md) {
            return 150;
        }

        if (theme.windowInnerWidth >= breakpointsValues.sm) {
            return 120;
        }

        return 100;

    }, [theme.windowInnerWidth]);


    const renderGroup = (isForSmoothScrolling: boolean) => (
        <div className={classes.group}>
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    aria-hidden={isForSmoothScrolling ? "true" : undefined}
                    className={cx(
                        classes.logo,
                        css({
                            width: logoBaseWith * (() => {
                                switch (logo.alt) {
                                    case "Logo Insee": return 0.6;
                                    case "Logo Genes": return 0.8;
                                    case "Logo Statistic Norway": return 1.6;
                                    default: return 1;
                                }
                            })()
                        })
                    )}
                />
            ))}
        </div>
    );

    return (
        <div className={cx(classes.root, className)}>
            {renderGroup(false)}
            {renderGroup(true)}
        </div>
    );
}


const useStyles = tss.withName({ LogoCarousel }).create(({ theme }) => ({
    root: {
        "paddingBottom": theme.spacing(7),
        overflow: "hidden", // Hide overflow for scrolling effect
        display: "flex",
        alignItems: "center",
        maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)", // Apply mask
    },
    group: {
        justifyContent: "space-around",
        display: "flex",
        gap: theme.spacing(2),
        animation: `${keyframes({
            "from": {
                transform: "translateX(0)",
            },
            "to": {
                transform: "translateX(-100%)",
            },
        })} 60s linear infinite`,
        flexShrink: 0,
        minWidth: "100%",
    },
    logo: {
        height: "auto", // Maintain aspect ratio
        objectFit: "contain", // Ensure the image fits properly
    },
}));
