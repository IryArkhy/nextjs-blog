import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { Store } from './interfaces'

//Enhancer
const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));


export const makeStore: MakeStore<Store> = (context: Context): any => createStore(rootReducer, enhancer);
export const wrapper = createWrapper<Store>(makeStore, { debug: true });
// export const persistor = persistStore(makeStore());
