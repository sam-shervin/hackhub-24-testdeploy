import '@hackhub/styles/globals.css'
import "@hackhub/styles/shadows.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
