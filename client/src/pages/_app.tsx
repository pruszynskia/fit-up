import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import store from "../redux/store";
import '../styles/globals.css'
import PageLayout from '../components/PageLayout';

// store.subscribe(() => console.log(store.getState()));
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  )
}
export default MyApp
