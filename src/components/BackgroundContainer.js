import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../constants/themeConstants.js'
import { starsTheme, cuteTheme, skullTheme, coolTheme, pageThemes, pageThemeNames } from '../app/styles/theme'


const BackgroundDiv = styled.div`
  background-size: auto;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  overflow: auto;
    ${props => {
      if (props.theme && props.theme.type == imageType) {
        return `
          background-image: url(${props.theme.url});
          background-color: transparent;
        `;
      } else if (props.theme && props.theme.type == colorType) {
        return `
          background-image: none;
          background-color: ${props.theme.color};
        `;
      } else if (props.theme && props.theme.type == bothType) {
        return `
          background-image: url(${props.theme.url});
          background-color: ${props.theme.color};
        `;
      }
  }}
`

const BackgroundChooseButton = styled.button`
  background-color: black;
  padding: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(1)};
  border-radius: 4px;
  color: white;
  font-weight: bold;
  &:hover {
    color: pink;
  }
`

const StyledHeader = styled.header`
  background-color: white;
  padding: ${props => props.theme.spacing(1)};
`
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const WindowsDiv = styled.div`
  min-height: 500px;
  background-color: white;
  margin-top: 100px;
  
  // window size depending on screen size
  width: 800px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 600px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 300px;
  }
`

export default function BackgroundContainer({ children }) {

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

  console.log(pageTheme)

  return (
    <ThemeProvider theme={pageTheme}>
      <body>
        <BackgroundDiv theme={pageTheme}>
          <StyledHeader>
            <span>Change Theme: </span>
            {_.keys(pageThemes).map(pageThemeName => {
              return (
                <BackgroundChooseButton theme={pageTheme} key={pageThemeName} onClick={() => handleThemeClick(pageThemes[pageThemeName])}>
                  {pageThemes[pageThemeName].label}
                </BackgroundChooseButton>
              )
            })}
          </StyledHeader>
          <BodyContainer theme={pageTheme}>
            <WindowsDiv theme={pageTheme}>
              {children}
            </WindowsDiv>
          </BodyContainer>
        </BackgroundDiv>
      </body>
  </ThemeProvider>
  )
}