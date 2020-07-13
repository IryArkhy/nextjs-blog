import { combineReducers } from 'redux';
import types from './postTypes';
import {
  Post, PostsReducer, SuccessGetPostAction,
  SuccessAllPostsAction,
  SuccessCreatePostAction, Error
} from './postInterfaces'

//??


const postsReducer = (state = [], action: any): Post[] | Post => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return action.payload.posts;

    case types.GET_POST_SUCCESS:
      return action.payload.post;

    case types.CREATE_POST_SUCCESS:
      return [action.payload.post, ...state];

    case types.REMOVE_POST_SUCCESS:
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
};


const errorReducer = (state = null, action: any): Error => {
  switch (action.type) {
    case types.GET_POSTS_START:
    case types.CREATE_POST_START:
    case types.GET_POST_START:
    case types.REMOVE_POST_START:
      return null;

    case types.GET_POSTS_ERROR:
    case types.CREATE_POST_ERROR:
    case types.GET_POST_ERROR:
    case types.REMOVE_POST_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

const reducer = combineReducers({ posts: postsReducer, error: errorReducer });

export default reducer;
