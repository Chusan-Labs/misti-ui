import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import commonTheme from './common';
import lightTheme from "./lightTheme";

const stitches = createStitches({
  ...commonTheme,
  theme: {
    // ...commonTheme.theme,
    // shadows: {
    //   ...lightTheme.shadows,
    // },
    // dropShadows: {
    //   ...lightTheme.dropShadows,
    // },
    colors: {
      ...commonTheme.theme.colors,
      ...lightTheme.colors,
    },
  }
});

export const createThemeBase = stitches.createTheme;
export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const config = stitches.config;

export type StitchesConfig = typeof config;
export type CSS = Stitches.CSS<StitchesConfig>;

export const createTheme = ({type, theme, className}:any) => {
  if (!type) {
    throw new Error("Theme type is required");
  }

  return createThemeBase(
    className || `${type}-theme`,
    // deepMerge(type === "dark" ? darkTheme : lightTheme, theme),
  );
};
