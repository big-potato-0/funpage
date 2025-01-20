'use client';

import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import _ from 'lodash'

import BackgroundContainer from '../components/BackgroundContainer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            * {
                margin: 0;
                padding: 0;
            }
          `}
        </style>
      </head>
      <BackgroundContainer />
    </html>
  )
}
