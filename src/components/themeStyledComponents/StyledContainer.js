import styled from '@emotion/styled'
import { ThemeProvider, useTheme } from '@emotion/react'
import { useState } from 'react'
import _ from 'lodash'
import { imageType, starsUrl, pinkSkullUrl, bothType, leavesUrl, colorType } from '../../constants/themeConstants.js'
import { starsTheme, cuteTheme, skullTheme, coolTheme, pageThemes, pageThemeNames } from '../../app/styles/theme.js'

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
  min-height: 600px;
  background-color: white;
  margin-top: 100px;
  margin-bottom: ${props => props.theme.spacing(10)};
  
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
const Footer = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  min-height: ${props => props.theme.spacing(2)};
  z-index: 10;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #c0c0c0;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #808080, 4px 4px 0 #fff inset;
  padding: 10px;
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TitleBar = styled.div`
  background: ${[props => props.theme.barColor]}
  color: white;
  padding: 4px 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #808080;
  height: 20px;
`

const Content = styled.div`
  background: #fff;
  border: 2px solid #fff;
  border-top-color: #808080;
  border-left-color: #808080;
  padding: 10px;
  flex-grow: 1; /* Allows the content area to grow and fill available space */
  overflow: auto; /* Adds scroll if content exceeds available height */
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto; /* Align buttons to the right */
`

const Button = styled.button`
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 2px 6px;
  font-size: 12px;
  cursor: pointer;
  &:active {
    border: 2px inset #fff;
  }
`


const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 50%; /* Sidebar height is now 50% */
  background: #c0c0c0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')}); /* Slides up from the bottom */
  z-index: 5; /* Sidebar stays below the footer */
`;

const SidebarContent = styled.div`
  color: black;
  font-size: 14px;
`;


export default function StyledContainer({children,  handleThemeClick}) {
  const theme = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return (
    <BackgroundDiv theme={theme}>
      <StyledHeader>
        <span>Change Theme: </span>
        {_.keys(pageThemes).map(pageThemeName => {
          return (
            <Button theme={theme} key={pageThemeName} onClick={() => handleThemeClick(pageThemes[pageThemeName])}>
              {pageThemes[pageThemeName].label}
            </Button>
          )
        })}
      </StyledHeader>
      <BodyContainer theme={theme}>
        <WindowsDiv theme={theme}>
          <Container>
            <TitleBar theme={theme}>
              My Window
              <ButtonGroup>
                <Button>_</Button>
                <Button>🗖</Button>
                <Button>X</Button>
              </ButtonGroup>
            </TitleBar>
            <Content>
              {children}
            </Content>
          </Container>
        </WindowsDiv>
        <Sidebar isOpen={isSidebarOpen}>
        <SidebarContent>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
          <p>Menu Item 4</p>
        </SidebarContent>
      </Sidebar>
        <Footer>
        <Button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </Button>
        </Footer>
      </BodyContainer>
    </BackgroundDiv>
  )
}