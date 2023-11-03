export interface IColorThemeTypes {
  primaryRedHex: string;
  primaryRedRGBA: string;
  primaryBlackHex: string;
  primaryBlackRGBA: string;
  primaryWhiteHex: string;
  primaryGrayHex: string;
  primaryGrayRGBA: string;
  primaryYellowHex: string;
  primaryYellowRGBA: string;
  secondaryBlackHex: string;
  secondaryBlackRGBA: string;
  secondaryRedHex: string;
  secondaryRedRGBA: string;
  secondaryWhiteHex: string;
}

export const COLORS: IColorThemeTypes = {
  primaryRedHex: "rgb(255, 72, 72)",
  primaryRedRGBA: "rgba(255, 72, 72, 0.25)",
  primaryBlackHex: "rgb(0, 0, 0)",
  primaryBlackRGBA: "rgba(0, 0, 0, 0.25)",
  primaryWhiteHex: "rgb(255, 255, 255)",
  primaryGrayHex: "rgb(68, 68, 68)",
  primaryGrayRGBA: "rgb(68, 68, 68, 0.25)",
  primaryYellowHex: "rgb(247, 255, 0)",
  primaryYellowRGBA: "rgba(247, 255, 0, 0.25)",
  secondaryBlackHex: "rgb(136, 136, 136)",
  secondaryBlackRGBA: "rgb(136, 136, 136, 0.25)",
  secondaryRedHex: "rgb(220, 10, 10)",
  secondaryRedRGBA: "rgba(220, 10, 10, 0.25)",
  secondaryWhiteHex: "rgb(221, 221, 221)",
}

export interface IFontSizeThemeTypes {
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_22: number;
  size_24: number;
  size_28: number;
  size_32: number;
  size_36: number;
}

export const FONTSIZES: IFontSizeThemeTypes = {
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_22: 22,
  size_24: 24,
  size_28: 28,
  size_32: 32,
  size_36: 36,
}

export interface ISpacingThemeTypes {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
  space_38: number;
  space_40: number;
}

export const SPACINGS: ISpacingThemeTypes = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
  space_38: 38,
  space_40: 40,
}

export interface IBorderRadiusThemeTypes {
  radius_5: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: IBorderRadiusThemeTypes = {
  radius_5: 5,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
}

export interface IFontFamilyTypes {
  open_sans_light: string;
  open_sans_regular: string;
  open_sans_medium: string;
  open_sans_semibold: string;
  open_sans_bold: string;
}

export const FONTFAMILY: IFontFamilyTypes = {
  open_sans_light: "Open_Sans_Light",
  open_sans_regular: "Open_Sans_Regular",
  open_sans_medium: "Open_Sans_Medium",
  open_sans_semibold: "Open_Sans_SemiBold",
  open_sans_bold: "Open_Sans_Bold",
}
