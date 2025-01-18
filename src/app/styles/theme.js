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
    spacing: (factor) => `${factor * 8}px`, // 8px unit
  };
  
  export default theme;