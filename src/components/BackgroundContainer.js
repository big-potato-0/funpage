import { ThemeProvider } from '@emotion/react'
import theme from '../app/styles/theme'
import styled from '@emotion/styled'
import { useState } from 'react'
import _ from 'lodash'


const pinkHeartUrl = '/images/pinkHeart.gif'
const purpleHeartUrl = '/images/purpleHeart.gif'
const pinkSparkleUrl = '/images/pinkSparkle.gif'
const pinkSkullUrl = '/images/pinkSkull.gif'
const starsUrl = '/images/stars.gif'
const leavesUrl = '/images/leaves.gif'

const imageType = 'image'
const colorType = 'color'
const bothType = 'both'

const pageThemes = {
  stars: {
    type: imageType,
    url: starsUrl,
    label: 'Space',
  },
  pinkSkull: {
    type: imageType,
    url: pinkSkullUrl,
    label: 'Skulls',
  },
  cute: {
    type: bothType,
    url: leavesUrl,
    color: '#FADADD',
    label: 'Cute',
  },
  solidBlack: {
    type: colorType,
    label: 'Cool',
    color: 'black',
  }
}

const BackgroundDiv = styled.div`
  background-size: auto;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  overflow: auto;
    ${props => {
      if (props.pageTheme && props.pageTheme.type == imageType) {
        return `
          background-image: url(${props.pageTheme.url});
          background-color: transparent;
        `;
      } else if (props.pageTheme && props.pageTheme.type == colorType) {
        return `
          background-image: none;
          background-color: ${props.pageTheme.color};
        `;
      } else if (props.pageTheme && props.pageTheme.type == bothType) {
        return `
          background-image: url(${props.pageTheme.url});
          background-color: ${props.pageTheme.color};
        `;
      }
  }}
`

const BackgroundChooseButton = styled.button`
  background-color: black;
  padding: ${theme.spacing(1)};
  margin-right: ${theme.spacing(1)};
  border-radius: 4px;
  color: white;
  font-weight: bold;
  &:hover {
    color: pink;
  }
`

const StyledHeader = styled.header`
  background-color: white;
  padding: ${theme.spacing(1)};
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

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 600px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 500px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 400px;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    width: 300px;
  }
`

export default function BackgroundContainer({ children }) {
  const [pageTheme, setPageTheme] = useState(pageThemes.cute)

  const handleThemeClick = pageThemeChoice => {
    setPageTheme(pageThemeChoice)
  }


  return (
    <BackgroundDiv pageTheme={pageTheme}>
      <StyledHeader>
          <span>Change Theme: </span>
          {_.keys(pageThemes).map(pageThemeName => {
            return (
              <BackgroundChooseButton key={pageThemeName} onClick={() => handleThemeClick(pageThemes[pageThemeName])}>
                {pageThemes[pageThemeName].label}
              </BackgroundChooseButton>
            )
          })}
      </StyledHeader>
      <BodyContainer>
        <WindowsDiv>
          {children}
        </WindowsDiv>
      </BodyContainer>
    </BackgroundDiv>
  )
}