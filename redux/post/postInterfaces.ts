import types from './postTypes'

export interface Comment {
  id: number,
  postId: number,
  text: string
}


export interface Post {
  id: number,
  title: string,
  body: string,
  comments?: Comment[]
}

export interface Error {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
}

export interface CreateNewPostBody {
  title: string,
  body: string
}


//Actions
export interface StartAction {
  type: string
}

//A1: get a post
export interface SuccessGetPostAction {
  type: string,
  payload: {
    post: Post
  }
}

//A2: create a post
export interface SuccessCreatePostAction {
  type: string,
  payload: {
    post: CreateNewPostBody
  }
}

//A3: get all posts
export interface SuccessAllPostsAction {
  type: string,
  payload: {
    posts: Post[]
  }
}


export interface ErrorAction {
  type: string,
  payload: {
    error: Error
  }
}

//Action types
export type GetPostActions = StartAction | SuccessGetPostAction | ErrorAction;
export type GetAllPostsActions = StartAction | SuccessAllPostsAction | ErrorAction;
export type CreatePostActions = StartAction | SuccessCreatePostAction | ErrorAction;

//Reducer
export type PostsReducer = GetPostActions | GetAllPostsActions | CreatePostActions;


