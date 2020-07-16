import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { IStore } from '../types'

const middleware = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));
export const makeStore: MakeStore<IStore> = (context: Context): any => createStore(rootReducer, enhancer);
export const wrapper = createWrapper<IStore>(makeStore, { debug: false });

