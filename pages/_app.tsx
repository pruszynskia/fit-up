import '../src/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import store from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {

  store.subscribe(() => console.log(store.getState()))
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
