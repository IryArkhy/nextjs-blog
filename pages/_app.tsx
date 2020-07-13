
import { Provider } from 'react-redux';

import { wrapper } from '../redux/store'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
