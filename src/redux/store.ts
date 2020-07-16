import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { IStore } from '../types'

//Enhancer
const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));


// export const makeStore: MakeStore<IStore> = (context: Context): any => {
//   const storage = require("redux-persist/lib/storage").default;
//   const persistConfig = {
//     key: "nextjs",
//     whitelist: ["posts"],
//     storage,
//   }
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const store = createStore(
//     persistedReducer,
//     enhancer
//   );

//   store.__persistor = persistStore(store);
//   return store;
// };

export const makeStore: MakeStore<IStore> = (context: Context): any => createStore(rootReducer, enhancer);
export const wrapper = createWrapper<IStore>(makeStore, { debug: false });



