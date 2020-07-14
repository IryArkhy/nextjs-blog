import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper'
import postReducer from './post/postReducers';
import { IStore } from '../types'

const rootReducer = (state: IStore, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.posts) nextState.posts = state.posts;
    return nextState
  } else {
    return postReducer(state, action)
  }
}

export default rootReducer;

