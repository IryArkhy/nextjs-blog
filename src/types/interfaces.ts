export interface IComment {
  id: number,
  postId: number,
  text: string
}

export interface IPost {
  id: number,
  title: string,
  body: string,
  comments?: IComment[]
}

export interface IError {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
}

export interface ICreateNewPostBody {
  title: string,
  body: string
}

//Actions
export interface IStartAction {
  type: string
}

//A1: get a post
export interface ISuccessGetPostAction {
  type: string,
  payload: {
    post: IPost
  }
}

//A2: create a post
export interface ISuccessCreatePostAction {
  type: string,
  payload: {
    post: ICreateNewPostBody
  }
}

//A3: get all posts
export interface ISuccessAllPostsAction {
  type: string,
  payload: {
    posts: IPost[]
  }
}

export interface IErrorAction {
  type: string,
  payload: {
    error: IError
  }
}

export interface IPathParams {
  params:
  { id: string }
};

export interface IStore {
  posts: IPost[],
  error: IError | null
}

export interface IHeaderProps {
  location?: string
}
