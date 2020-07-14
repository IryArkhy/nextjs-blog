import { Dispatch } from 'redux';
import actions from './postActions';
import api from '../../services/api';
import { IError, ICreateNewPostBody } from '../../types';

export const getPosts = () => (dispatch: Dispatch) => {
  dispatch(actions.getPostsStart());
  api.getAllPosts()
    .then((res: any) => dispatch(actions.getPostSuccess(res.data)))
    .catch((error: IError) => dispatch(actions.getPostsError(error)));
};

export const getPostById = (postId: number) => (dispatch: Dispatch): any => {
  dispatch(actions.getPostStart());
  api.getPostById(postId)
    .then((res: any) => dispatch(actions.getPostSuccess(res.data)))
    .catch((error: IError) => dispatch(actions.getPostError(error)))
};

export const createPost = (post: ICreateNewPostBody) => (dispatch: Dispatch): void => {
  dispatch(actions.createPostStart());
  api.createPost(post)
    .then((res: any) => dispatch(actions.createPostSuccess(res.data)))
    .catch((error: IError) => dispatch(actions.createPostError(error)))
};

export const deletePost = (id: number) => (dispatch: Dispatch) => {
  dispatch(actions.deletePostStart());
  api.deletePost(id)
    .then((res: any) => dispatch(actions.deletePostSuccess(id)))
    .catch((error: IError) => dispatch(actions.deletePostError(error)));
};
