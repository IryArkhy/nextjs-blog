import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../src/redux/store';
import { useStore } from 'react-redux'
import '../src/styles/global.css';
import { IStore } from '../src/types/interfaces'


const WrappedApp = ({ Component, pageProps }: any) => {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
