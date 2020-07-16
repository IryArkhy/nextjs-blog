import { wrapper } from '../src/redux/store';
import '../src/styles/global.css';

const WrappedApp = ({ Component, pageProps }: any) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(WrappedApp)
