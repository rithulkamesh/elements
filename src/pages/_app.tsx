import type { AppProps } from 'next/app'
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/mast.css";
import "../styles/band.css";
import { ScrollObserver } from '../util/scroll';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}
 