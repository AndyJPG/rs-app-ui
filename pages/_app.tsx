import type { AppProps } from 'next/app'
import { SidePanel } from '../components/globalComponents/SidePanel'
import { NextPageWithLayout } from '../model/nextTypes'
import { ThemeContextProvider } from '../state/context/ThemeContextProvider'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ThemeContextProvider>
      <SidePanel />
      {getLayout(<Component {...pageProps} />)}
    </ThemeContextProvider>
  )
}

export default MyApp
