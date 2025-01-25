import styled from '@emotion/styled'
import { useState } from 'react'
import _ from 'lodash'
import Window from './Window.js'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'
import { starsTheme, cuteTheme, skullTheme, coolTheme, pageThemes, pageThemeNames, colors } from '../../app/styles/theme.js'

const xlContainerWidth = 800
const lgContainerWidth = 600
const mdContainerWidth = 500
const smContainerWidth = 400
const xsContainerWidth = 300

const windowWidths = {
  xlContainerWidth: 800,
  lgContainerWidth: 600,
  mdContainerWidth: 500,
  smContainerWidth: 400,
  xsContainerWidth: 300,
}

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
const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.headerColor};
  padding: ${props => props.theme.spacing(1)};
`
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Footer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.headerColor};
  color: black;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: ${props => props.theme.spacing(2)};
  z-index: 10;
`

const Button = styled.button`
  background: ${colors.grey};
  border: 2px outset ${colors.white};
  padding: 2px 6px;
  font-size: 12px;
  cursor: pointer;
  &:active {
    border: 2px inset ${colors.white};
  }
`

const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 50%; /* Sidebar height is now 50% */
  background: ${colors.grey};
  box-shadow: 2px 2px 5px ${colors.blackTransparent80};
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')});
  z-index: 5;
  margin-left: 10px;
`

const SidebarContent = styled.div`
  color: ${colors.black};
  font-size: 14px;
`

export default function StyledContainer() {
    const [pageTheme, setPageTheme] = useState(cuteTheme)

    const handleThemeClick = pageThemeChoice => {
      setPageTheme(pageThemeChoice)
    }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const minimizeWindow = () => {
    setIsMinimized(!isMinimized)
  } 


  return (
    <BackgroundDiv theme={pageTheme}>
      <StyledHeader theme={pageTheme}>
        <span>Change Theme: </span>
        {_.keys(pageThemes).map(pageThemeName => {
          return (
            <Button theme={pageTheme} key={pageThemeName} onClick={() => handleThemeClick(pageThemes[pageThemeName])}>
              {pageThemes[pageThemeName].label}
            </Button>
          )
        })}
      </StyledHeader>
      <BodyContainer theme={pageTheme}>
        {!isMinimized && (
          <Window theme={pageTheme} isMinimized={isMinimized} minimizeWindow={minimizeWindow} windowWidths={windowWidths}> 
            hello world
          </Window>
        )}
        <Sidebar isOpen={isSidebarOpen}>
        <SidebarContent>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
          <p>Menu Item 4</p>
        </SidebarContent>
      </Sidebar>
        <Footer theme={pageTheme}>
        <Button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </Button>
        </Footer>
      </BodyContainer>
    </BackgroundDiv>
  )
}