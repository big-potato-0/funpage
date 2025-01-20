import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'
import { starsTheme, cuteTheme, skullTheme, coolTheme, pageThemes, pageThemeNames } from '../../app/styles/theme.js'
import StyledContainer from './StyledContainer.js'



export default function ThemeHandlerContainer({ children }) {

    // const getInitialTheme = () => {
    //     if (typeof window !== 'undefined') {
    //         const savedTheme = localStorage.getItem('theme');
    
    //         if (savedTheme) {
    //           return savedTheme;
    //         }
        
    //   };

  const [pageTheme, setPageTheme] = useState(cuteTheme)

  const handleThemeClick = pageThemeChoice => {
    setPageTheme(pageThemeChoice)
    //    localStorage.setItem('theme', theme.label)
  }

  return (
    <ThemeProvider theme={pageTheme}>
      <body>
        <StyledContainer  handleThemeClick={handleThemeClick}>{children}</StyledContainer>
      </body>
  </ThemeProvider>
  )
}