// theme.js
const theme = {
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
  
  export default theme;