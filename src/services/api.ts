import axios from 'axios';
import { IPost, ICreateNewPostBody } from '../types'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

const getAllPosts = (): Promise<IPost[]> => axios.get('posts');

const getPostById = (postId: number): Promise<IPost | {}> => axios.get(`posts/${postId}?_embed=comments`);
const createPost = (post: ICreateNewPostBody): Promise<IPost> => axios.post('posts', post);
const deletePost = (id: number): Promise<{}> => axios.delete(`posts/${id}`);
const getPostByIdForRender = (postId: number): Promise<IPost | {}> => axios.get(`posts/${postId}?_embed=comments`).then(res => res.data).catch(err => console.log(err));

export default {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  getPostByIdForRender,
}
