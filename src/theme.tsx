import {
  createOnyxiaUi,
  defaultPalette,
  defaultGetTypographyDesc,
} from "onyxia-ui";

const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
  getTypographyDesc: (params) => {
    const typographyDesc = defaultGetTypographyDesc(params);

    return {
      ...typographyDesc,
      fontFamily: '"Work Sans", sans-serif',
    };
  },
  palette: defaultPalette,
});

type Theme = typeof ofTypeTheme;

export { OnyxiaUi, type Theme };
