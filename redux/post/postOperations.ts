import actions from './postActions';
import api from '../../services/api';
import { Post, Error } from './postInterfaces';

export const getPosts = () => (dispatch: Function): any => {
  dispatch(actions.getPostsStart());
  api.getAllPosts()
    .then((res: any) => dispatch(actions.getPostSuccess(res.data)))
    .catch((error: Error) => dispatch(actions.getPostsError(error)));
};

export const getPostById = (postId: number) => (dispatch: Function): any => {
  dispatch(actions.getPostStart());
  api.getPostById(postId)
    .then((res: any) => dispatch(actions.getPostSuccess(res.data)))
    .catch((error: Error) => dispatch(actions.getPostError(error)))
};

export const createPost = (post: Post) => (dispatch): void => {
  dispatch(actions.createPostStart());
  api.createPost(post)
    .then((res: any) => dispatch(actions.createPostSuccess(res.data)))
    .catch((error: Error) => dispatch(actions.createPostError(error)))
};

export const deletePost = (id: number) => (dispatch): void => {
  dispatch(actions.deletePostStart());
  api.deletePost(id)
    .then((res: any) => dispatch(actions.deletePostSuccess(res.data)))
    .catch((error: Error) => dispatch(actions.deletePostError(error)));
};
