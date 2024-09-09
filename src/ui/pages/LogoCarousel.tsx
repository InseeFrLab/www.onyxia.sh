import { useMemo } from "react";
import logoExpertiseFranceMonochromeDarkPng from "ui/assets/img/Logo_ExpertiseFrance_monochrome_dark.png";
import logoExpertiseFranceMonochromeLightPng from "ui/assets/img/Logo_ExpertiseFrance_monochrome_light.png";
import logoInseeMonochromeLightPng from "ui/assets/img/Logo_Insee_monochrome_light.png";
import logoInseeMonochromeDarkPng from "ui/assets/img/Logo_Insee_monochrome_dark.png";
import logoMercatorMonochromeDarkPng from "ui/assets/img/Logo_Mercator_monochrome_dark.png";
import logoMercatorMonochromeLightPng from "ui/assets/img/Logo_Mercator_monochrome_light.png";
import logoGenesMonochromeDarkPng from "ui/assets/img/Logo_Genes_monochrome_dark.png";
import logoGenesMonochromeLightPng from "ui/assets/img/Logo_Genes_monochrome_light.png";
import logoStatisticNorwayMonochromeDarkPng from "ui/assets/img/Logo_StatisticNorway_monochrome_dark.png";
import logoStatisticNorwayMonochromeLightPng from "ui/assets/img/Logo_StatisticNorway_monochrome_light.png";
import { tss, keyframes, Button } from "ui/theme";
import { breakpointsValues } from "onyxia-ui";

const getLogos = (isDark: boolean) => [
    { src: isDark ? logoExpertiseFranceMonochromeDarkPng : logoExpertiseFranceMonochromeLightPng, alt: "Logo Expertise France" },
    { src: isDark ? logoGenesMonochromeDarkPng : logoGenesMonochromeLightPng, alt: "Logo Genes" },
    { src: isDark ? logoInseeMonochromeDarkPng : logoInseeMonochromeLightPng, alt: "Logo Insee" },
    { src: isDark ? logoMercatorMonochromeDarkPng : logoMercatorMonochromeLightPng, alt: "Logo Mercator" },
    { src: isDark ? logoStatisticNorwayMonochromeDarkPng : logoStatisticNorwayMonochromeLightPng, alt: "Logo Statistic Norway" },
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
                            marginLeft: index === 0 ? theme.spacing(7) : undefined,
                            width: logoBaseWith * (() => {
                                switch (logo.alt) {
                                    case "Logo Insee": return 0.5;
                                    case "Logo Genes": return 0.6;
                                    case "Logo Statistic Norway": return 1.7;
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
            <div className={classes.overlay}>
                <Button>See testimonials</Button>
            </div>
        </div>
    );
}


const useStyles = tss
    .withName({ LogoCarousel })
    .withNestedSelectors<"overlay">()
    .create(({ theme, classes }) => ({
    root: {
        ...theme.spacing.topBottom("padding", 4),
        overflow: "hidden", 
        display: "flex",
        alignItems: "center",
        maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
        position: "relative",
        [`&:hover .${classes.overlay}`]: {
            display: "flex",
        }
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: theme.colors.useCases.surfaces.background, 
        backdropFilter: "blur(10px)", 
    },
    group: {
        justifyContent: "space-around",
        display: "flex",
        gap: theme.spacing(7),
        animation: `${keyframes({
            "from": {
                transform: "translateX(0)",
            },
            "to": {
                transform: "translateX(-100%)",
            },
        })} 30s linear infinite`,
        flexShrink: 0,
        minWidth: "100%",
    },
    logo: {
        height: "auto", 
        objectFit: "contain", 
    },
}));
