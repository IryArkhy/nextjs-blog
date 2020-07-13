import { Post, Error } from './post/postInterfaces'

export interface Store {
  posts: Post[],
  error: Error | null
}
