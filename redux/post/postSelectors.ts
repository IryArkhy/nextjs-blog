import { Post } from './postInterfaces';
import { Store } from '../interfaces';

export const getPosts = (store: Store): Array<Post> => store.posts;
export const getPost = (store: Store, id: number): Post | undefined => {
  return store.posts.find(post => id === post.id)
};
