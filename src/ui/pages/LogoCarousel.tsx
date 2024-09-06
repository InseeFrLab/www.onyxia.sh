import { Box } from "@mui/material";
import logoInseePngUrl from "ui/assets/img/Logo_Insee.png";
import logoMercatorJpgUrl from "ui/assets/img/Logo_Mercator.jpg";
import logoStatisticNorwayPngUrl from "ui/assets/img/Logo_StatisticNorway.png";
import logoExpertiseFranceJpgUrl from "ui/assets/img/Logo_ExpertiseFrance.jpg";
import logoGenesPngUrl from "ui/assets/img/Logo_Genes.png";
import { tss } from "ui/theme";
import { keyframes } from "tss-react";
import { breakpointsValues } from "onyxia-ui";

const logos = [
    { src: logoInseePngUrl, alt: "Logo Insee" },
    { src: logoExpertiseFranceJpgUrl, alt: "Logo Expertise France" },
    { src: logoGenesPngUrl, alt: "Logo Genes" },
    { src: logoMercatorJpgUrl, alt: "Logo Mercator" },
    { src: logoStatisticNorwayPngUrl, alt: "Logo Statistic Norway" },
];

export function LogoCarousel() {
    const { classes } = useStyles();
    return (
        <Box className={classes.container}>
            <div className={classes.group}>
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={logo.src}
                        alt={logo.alt}
                        className={classes.logo}
                    />
                ))}
            </div>
            <div className={classes.group}>
                {/* Duplicated set of logos for smooth scrolling */}
                {logos.map((logo, index) => (
                    <Box
                        key={index + logos.length}
                        component="img"
                        src={logo.src}
                        alt={logo.alt}
                        className={classes.logo}
                        aria-hidden="true"
                    />
                ))}
            </div>
        </Box>
    );
}

// Define the keyframes using tss-react's keyframes utility
const scrollAnimation = keyframes({
    "from": {
        transform: "translateX(0)",
    },
    "to": {
        transform: "translateX(-100%)",
    },
});

const useStyles = tss.withName({ LogoCarousel }).create(({ theme }) => ({
    container: {
        "paddingBottom": theme.spacing(7),
        overflow: "hidden", // Hide overflow for scrolling effect
        display: "flex",
        alignItems: "center",
        width: "100%", // Ensure the container takes full width
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
        })} 20s linear infinite`,
        flexShrink: 0,
        minWidth: "100%",
    },
    logo: {
        width: (() => {
            switch (true) {
                case theme.windowInnerWidth >= breakpointsValues.lg:
                    return "200px"; // Larger logo size on large screens
                case theme.windowInnerWidth >= breakpointsValues.md:
                    return "150px"; // Medium logo size
                case theme.windowInnerWidth >= breakpointsValues.sm:
                    return "120px"; // Small logo size
                default:
                    return "100px"; // Default for extra small screens
            }
        })(),
        height: "auto", // Maintain aspect ratio
        objectFit: "contain", // Ensure the image fits properly
    },
}));
