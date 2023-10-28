import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ScrollButton from '@/Common/Elements/ScrollToTop'
import AppLayout from '@/Common/Applayout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    /* box-sizing: border-box; */
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
        <Analytics />
        <ScrollButton />
      </AppLayout>
    </>
  )
}