import '../src/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import store from "../src/redux/store";

store.subscribe(() => console.log(store.getState()));
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
