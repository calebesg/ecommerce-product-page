import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { CartProvider, ThemeProvider } from '../data/contexts'

import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo defaultTitle="E-Commerce" />
      <ChakraProvider>
        <ThemeProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
