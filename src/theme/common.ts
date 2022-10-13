export const defaultColors = {
  // generic colors
  white: "#ffffff",
  black: "#000000",

  // brand colors
  primaryLight: "$blue200",
  primaryLightHover: "$blue300",
  primaryLightActive: "$blue400",
  primaryLightContrast: "$blue600",
  primary: "$blue600",
  primaryBorder: "$blue500",
  primaryBorderHover: "$blue600",
  primarySolidHover: "$blue700",
  primarySolidContrast: "$white",
  primaryShadow: "$blue500",
}

export default {
  prefix: "misti-ui",
  theme: {
    // ...defaultTokens,
    colors: defaultColors,
    shadows: {},
    dropShadows: {},
  },
  // media: defaultMedia,
  // utils: defaultUtils,
  // themeMap: defaultThemeMap,
};