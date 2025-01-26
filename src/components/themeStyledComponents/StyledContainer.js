import styled from '@emotion/styled'
import { useState } from 'react'
import _ from 'lodash'
import Window from './Window.js'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'
import { starsTheme, cuteTheme, skullTheme, coolTheme, pageThemes, pageThemeNames, colors } from '../../app/styles/theme.js'
import { css } from '@emotion/react'


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
  // padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: ${props => props.theme.spacing(6)};
  z-index: 10;
  display: flex;
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
const menuWidth = '200px'
const MenuButtonContainer = styled.div`
  //background: ${colors.lightGrey};
  width: ${menuWidth};
  padding-left: ${props => props.theme.spacing(1)};
  display: flex;
  align-items: center;
  padding-right: ${props => props.theme.spacing(2)};
`

const MinimizedWindowsContainer = styled.div`
  padding-left: ${props => props.theme.spacing(1)};
  display: flex;
  align-items: center;
`

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${menuWidth};
  height: 50%; 
  background: ${colors.grey};
  box-shadow: 2px 2px 5px ${colors.blackTransparent80};
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')});
  z-index: 5;
  margin-left: 10px;
  overflow: auto;
`

const MenuContent = styled.div`
  color: ${colors.black};
  font-size: 14px;
`

const MinimizableButton = styled.button`
  background-color: ${colors.grey};
  border: none;
  font-size: 14px;
  color: black;
  padding: 4px 8px;
  box-shadow: inset -1px -1px 1px ${colors.darkGrey}, inset 1px 1px 1px ${colors.white};
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease-in-out;

  ${(props) =>
    props.isMinimized &&
    css`
      border: 2px solid ${colors.darkGrey};
      border-left-color: ${colors.darkGrey};
      border-top-color: ${colors.darkGrey};
      border-right-color: ${colors.darkGrey};
      border-bottom-color: ${colors.darkGrey};
      box-shadow: inset -1px -1px 1px ${colors.white}, inset 1px 1px 1px ${colors.darkGrey};
    `}

  &:hover {
    background-color: #d4d0c8;
  }
`;

export default function StyledContainer() {
  const [pageTheme, setPageTheme] = useState(cuteTheme)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  
  const handleThemeClick = pageThemeChoice => {
    setPageTheme(pageThemeChoice)
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const minimizeWindow = () => {
    setIsMinimized(!isMinimized)
  } 
  const unMinimizeWindow = () => {
    setIsMinimized(false)
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
        <Menu isOpen={isMenuOpen} theme={pageTheme}>
        <MenuContent>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
          <p>Menu Item 4</p>
        </MenuContent>
      </Menu>
        <Footer theme={pageTheme}>
          <MenuButtonContainer theme={pageTheme}>
            <MinimizableButton onClick={toggleMenu} theme={pageTheme} isMinimized={isMenuOpen}>
              {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </MinimizableButton>
          </MenuButtonContainer>
          <MinimizedWindowsContainer theme={pageTheme}>
            <MinimizableButton onClick={minimizeWindow} theme={pageTheme} isMinimized={!isMinimized}>
              test
            </MinimizableButton>
          </MinimizedWindowsContainer>
        </Footer>
      </BodyContainer>
    </BackgroundDiv>
  )
}