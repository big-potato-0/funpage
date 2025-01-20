import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'



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
  type: imageType,
  url: starsUrl,
  label: 'Space',
}

export const skullTheme = {
  ...themeDefaults,
  type: imageType,
  url: pinkSkullUrl,
  label: 'Skulls',
}

export const cuteTheme = {
  ...themeDefaults,
  type: bothType,
  url: leavesUrl,
  color: '#FADADD',
  label: 'Cute',
}

export const coolTheme = {
  ...themeDefaults,
  type: colorType,
  color: 'black',
  label: 'Cool'
}

export const pageThemes = {
  starsTheme: starsTheme,
  skullTheme: skullTheme,
  cuteTheme: cuteTheme,
  coolTheme: coolTheme,
}

export const pageThemeNames = _.keys(pageThemes)
