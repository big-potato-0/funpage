import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'

export const colors = {
  cutePinkDark: ' #f178a1',
  cutePinkLight: '#FFC0CB',
  spacePurpleDark: '#150c25',
  spacePurpleLight: '#673ab7',
  skullPinkDark: '#FC0FC0',
  coolRed: '#D0001B',
  coolOrange: '#FD5800',
  black: '#000000',
  white: '#FFFFFF',
  grey: '#c0c0c0',
  lightGrey: '#f0f0f0',
  darkGrey: '#808080',
  pink: '#FFC0CB',
  transparent: 'transparent',
  blackTransparent80: '#00000080',
}

export const themeDefaults = {
  colors: {
    primary: '#6200ea',
    secondary: '#03dac6',
    background: colors.white,
    text: '#333',
    headerColor: colors.white,
    backgroundSecondary: colors.grey,
    boxShadow: colors.blackTransparent80,

  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '16px',
  },
  spacing: (factor) => `${factor * 8}px`,
  breakpoints: {
    xs: '600px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
};

export const starsTheme = {
  ...themeDefaults,
  name: 'starsTheme',
  type: imageType,
  url: starsUrl,
  label: 'Space',
  color: colors.white,
  barColor: `linear-gradient(to right, ${colors.spacePurpleDark} , ${colors.spacePurpleLight})`,
  boxShadow: colors.white,
}

export const skullTheme = {
  ...themeDefaults,
  name: 'skullTheme',
  type: imageType,
  url: pinkSkullUrl,
  label: 'Skulls',
  barColor: `linear-gradient(to right, black , ${colors.skullPinkDark})`,
}

export const cuteTheme = {
  ...themeDefaults,
  type: bothType,
  name: 'cuteTheme',
  url: leavesUrl,
  color: '#FADADD',
  label: 'Cute',
  barColor: `linear-gradient(to right, ${colors.cutePinkDark} , ${colors.cutePinkLight})`,
}

export const coolTheme = {
  ...themeDefaults,
  name: 'coolTheme',
  type: colorType,
  color: 'black',
  label: 'Cool',
  barColor: `linear-gradient(to right, ${colors.coolRed} , ${colors.coolOrange})`,
  boxShadow: colors.white,
}

export const pageThemes = {
  starsTheme: starsTheme,
  skullTheme: skullTheme,
  cuteTheme: cuteTheme,
  coolTheme: coolTheme,
}

export const pageThemeNames = _.keys(pageThemes)
