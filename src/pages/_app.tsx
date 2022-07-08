import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../data/contexts/ThemeContext'

import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo defaultTitle="E-Commerce" />
      <ChakraProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
