'use client';

import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
