import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../state/context/ThemeContextProvider'
import '../styles/globals.css'
import { NextPageWithLayout } from '../model/nextTypes'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContextProvider>
  )
}

export default MyApp
