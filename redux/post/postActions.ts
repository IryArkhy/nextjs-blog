import types from './postTypes';
import { CreateNewPostBody, StartAction, SuccessGetPostAction, ErrorAction, Post, Error, SuccessAllPostsAction, SuccessCreatePostAction } from './postInterfaces';

// Get all posts

const getPostsStart = (): StartAction => ({
  type: types.GET_POSTS_START,
});

const getPostsSuccess = (posts: Post[]): SuccessAllPostsAction => ({
  type: types.GET_POSTS_SUCCESS,
  payload: { posts },
});

const getPostsError = (error: Error): ErrorAction => ({
  type: types.GET_POSTS_ERROR,
  payload: { error },
});

// Get a post

const getPostStart = (): StartAction => ({
  type: types.GET_POST_START,
});

const getPostSuccess = (post: Post): SuccessGetPostAction => ({
  type: types.GET_POST_SUCCESS,
  payload: { post },
});

const getPostError = (error: Error): ErrorAction => ({
  type: types.GET_POST_ERROR,
  payload: { error },
});

// Create a post

const createPostStart = (): StartAction => ({
  type: types.CREATE_POST_START,
});

const createPostSuccess = (post: CreateNewPostBody): SuccessCreatePostAction => ({
  type: types.CREATE_POST_SUCCESS,
  payload: { post },
});

const createPostError = (error: Error): ErrorAction => ({
  type: types.CREATE_POST_ERROR,
  payload: { error },
});

//Delete post
const deletePostStart = (): StartAction => ({
  type: types.REMOVE_POST_START,
});

const deletePostSuccess = (post: CreateNewPostBody): SuccessCreatePostAction => ({
  type: types.REMOVE_POST_SUCCESS,
  payload: { post },
});

const deletePostError = (error: Error): ErrorAction => ({
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
