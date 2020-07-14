import types from './postTypes';
import { ICreateNewPostBody, IStartAction, ISuccessGetPostAction, IErrorAction, IPost, IError, ISuccessAllPostsAction, ISuccessCreatePostAction } from '../../types';

// Get all posts

const getPostsStart = (): IStartAction => ({
  type: types.GET_POSTS_START,
});

const getPostsSuccess = (posts: IPost[]): ISuccessAllPostsAction => ({
  type: types.GET_POSTS_SUCCESS,
  payload: { posts },
});

const getPostsError = (error: IError): IErrorAction => ({
  type: types.GET_POSTS_ERROR,
  payload: { error },
});

// Get a post

const getPostStart = (): IStartAction => ({
  type: types.GET_POST_START,
});

const getPostSuccess = (post: IPost): ISuccessGetPostAction => ({
  type: types.GET_POST_SUCCESS,
  payload: { post },
});

const getPostError = (error: IError): IErrorAction => ({
  type: types.GET_POST_ERROR,
  payload: { error },
});

// Create a post

const createPostStart = (): IStartAction => ({
  type: types.CREATE_POST_START,
});

const createPostSuccess = (post: ICreateNewPostBody): ISuccessCreatePostAction => ({
  type: types.CREATE_POST_SUCCESS,
  payload: { post },
});

const createPostError = (error: IError): IErrorAction => ({
  type: types.CREATE_POST_ERROR,
  payload: { error },
});

//Delete post
const deletePostStart = (): IStartAction => ({
  type: types.REMOVE_POST_START,
});

const deletePostSuccess = (id: number) => ({
  type: types.REMOVE_POST_SUCCESS,
  payload: {
    id
  },
});

const deletePostError = (error: IError): IErrorAction => ({
  type: types.REMOVE_POST_ERROR,
  payload: { error },
});

export default {
  getPostsStart,
  getPostsSuccess,
  getPostsError,
  getPostStart,
  getPostSuccess,
  getPostError,
  createPostStart,
  createPostSuccess,
  createPostError,
  deletePostStart,
  deletePostSuccess,
  deletePostError
}
