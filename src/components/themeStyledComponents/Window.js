import styled from '@emotion/styled'
import { ThemeProvider, useTheme } from '@emotion/react'
import { useState } from 'react'
import _ from 'lodash'
import { colors } from '../../app/styles/theme.js'
import { DefaultButton } from './common.js'

const WindowsDiv = styled.div`
  min-height: 600px;
  background-color: ${props => props.theme.colors.background};
  margin-top: 100px;
  margin-bottom: ${props => props.theme.spacing(10)};
  
  width: ${props => props.windowWidths.xlContainerWidth}px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.windowWidths.lgContainerWidth}px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: ${props => props.windowWidths.mdContainerWidth}px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: ${props => props.windowWidths.smContainerWidth}px;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.windowWidths.xsContainerWidth}px;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 2px solid ${colors.black};
  box-shadow: 2px 2px 0 #fff, 4px 4px 0 #fff inset;
  padding: 10px;
  font-family: 'MS Sans Serif', Arial, sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TitleBar = styled.div`
  background: ${[props => props.theme.barColor]}
  color: ${props => props.theme.colors.background};
  padding: 4px 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colors.darkGrey};
  height: 20px;
`

const Content = styled.div`
  background: #fff;
  border: 2px solid #fff;
  border-top-color: ${colors.darkGrey};
  border-left-color: ${colors.darkGrey};
  padding: 10px;
  flex-grow: 1;
  overflow: auto;
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`
const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: absolute;
  margin-top: 400px;
`
const Gif = styled.img`
  height: 230px;
  width: ${props => props.windowWidths.xlContainerWidth / 2.0}px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: ${props => props.windowWidths.lgContainerWidth / 2.0}px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: ${props => props.windowWidths.mdContainerWidth / 2.0}px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: ${props => props.windowWidths.smContainerWidth / 2.0}px;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.windowWidths.xsContainerWidth / 2.0}px;
  }
`

export default function Window({ children, isMinimized, minimizeWindow, theme, windowWidths }) {
  return (
    <WindowsDiv theme={theme} windowWidths={windowWidths}>
      <Container theme={theme}>
        <TitleBar theme={theme}>
          My Window
          <ButtonGroup>
            <DefaultButton onClick={() => minimizeWindow()}>_</DefaultButton>
            <DefaultButton>🗖</DefaultButton>
            <DefaultButton>X</DefaultButton>
          </ButtonGroup>
        </TitleBar>
        <Content>
          {children}

        </Content>
        {theme.name == 'coolTheme' && (
          <GifContainer>
            <Gif windowWidths={windowWidths} theme={theme} src="/images/flame.gif" alt="FLAMES" />
            <Gif windowWidths={windowWidths} theme={theme} src="/images/flame.gif" alt="FLAMES" />
          </GifContainer>
        )}
      </Container>
    </WindowsDiv>
  )
} 

