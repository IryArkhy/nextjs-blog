import axios from 'axios';
import { IPost, ICreateNewPostBody, IError } from '../types'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

const getAllPosts = (): Promise<IPost[]> => axios.get('posts');

const getPostById = (postId: number): Promise<IPost | {}> => axios.get(`posts/${postId}?_embed=comments`);
const createPost = (post: ICreateNewPostBody): Promise<IPost> => axios.post('posts', post);
const deletePost = (id: number): Promise<{}> => axios.delete(`posts/${id}`);
const getIDs = (): any => axios.get('posts')
  .then((res: any) => res.data.reduce((acc: any, post: { id: number }): {}[] => {
    const paramObj = {
      params: {
        id: post.id.toString()
      }
    };
    acc.push(paramObj);
    return acc;
  }, []))
  .catch((error: Error) => console.log(error));

const getPostByIdForRender = (postId: number): Promise<IPost | {}> => axios.get(`posts/${postId}?_embed=comments`).then(res => res.data).catch(err => console.log(err));

export default {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  getIDs,
  getPostByIdForRender,
}
