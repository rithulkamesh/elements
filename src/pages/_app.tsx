import type { AppProps } from 'next/app'
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/mast.css";
import "../styles/band.css";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
