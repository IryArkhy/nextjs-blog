import { IPost, IStore } from '../../types';

export const getAllPosts = (store: IStore): IPost[] => store.posts;

export const getPost = (store: IStore, id: number): IPost | undefined => store.posts.find(post => id === post.id)

