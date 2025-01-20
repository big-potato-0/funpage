import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'

const colors = {
  cutePinkDark: ' #f178a1',
  cutePinkLight: '#FFC0CB',
  spacePurpleDark: '#150c25',
  spacePurpleLight: '#673ab7',
  skullPinkDark: '#FC0FC0',
  coolRed: '#D0001B',
  coolOrange: '#FD5800',
}

export const themeDefaults = {
  colors: {
    primary: '#6200ea',
    secondary: '#03dac6',
    background: '#f0f0f0',
    text: '#333',
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
  barColor: `linear-gradient(to right, ${colors.spacePurpleDark} , ${colors.spacePurpleLight})`,
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
}

export const pageThemes = {
  starsTheme: starsTheme,
  skullTheme: skullTheme,
  cuteTheme: cuteTheme,
  coolTheme: coolTheme,
}

export const pageThemeNames = _.keys(pageThemes)
