// import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../src/redux/store';
import { useStore } from 'react-redux'
import '../src/styles/global.css';


const WrappedApp = ({ Component, pageProps }: any) => {
  // const store = useStore((state: any) => state);
  return (
    // <PersistGate persistor={store.__persistor}>
    <Component {...pageProps} />
    // </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
