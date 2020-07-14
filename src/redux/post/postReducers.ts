import { combineReducers, AnyAction } from 'redux';
import types from './postTypes';
import {
  IPost, IError
} from '../../types'

const postsReducer = (state: IPost[] = [], { type, payload }: AnyAction): IPost[] | IPost => {
  switch (type) {
    case types.GET_POSTS_SUCCESS:
      return payload.posts;

    case types.GET_POST_SUCCESS:
      return payload.post;

    case types.CREATE_POST_SUCCESS:
      return [payload.post, ...state];

    case types.REMOVE_POST_SUCCESS:
      return state.filter(post => post.id !== payload.id);


    default:
      return state;
  }
};


const errorReducer = (state: IError = null, { type, payload }: AnyAction): IError => {
  switch (type) {
    case types.GET_POSTS_START:
    case types.CREATE_POST_START:
    case types.GET_POST_START:
    case types.REMOVE_POST_START:
      return null;

    case types.GET_POSTS_ERROR:
    case types.CREATE_POST_ERROR:
    case types.GET_POST_ERROR:
    case types.REMOVE_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const reducer = combineReducers({ posts: postsReducer, error: errorReducer });

export default reducer;
