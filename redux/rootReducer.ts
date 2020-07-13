import { combineReducers } from 'redux';
import postReducer from './post/postReducers';

export default combineReducers({ posts: postReducer });
