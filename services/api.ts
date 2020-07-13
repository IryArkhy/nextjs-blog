import axios from 'axios';
import { Post, CreateNewPostBody, Error } from '../redux/post/postInterfaces'

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

const getAllPosts = (): Promise<Post[]> => axios.get('posts');
const getPostById = (postId: number): Promise<Post | {}> => axios.get(`posts/${postId}?_embed=comments`);
const createPost = (post: CreateNewPostBody): Promise<Post> => axios.post('posts', post);
const deletePost = (id: number): Promise<{}> => axios.delete(`posts/${id}`);

export default {
  getAllPosts,
  getPostById,
  createPost,
  deletePost
}
