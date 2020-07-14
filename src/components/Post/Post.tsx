import React from 'react';
import { PostWrapper, Title, Body } from './StyledPost';
import { IPost } from '../../types'


const Post = ({ id, title, body }: IPost): JSX.Element => {
  return (
    <PostWrapper >
      <Title>{title}</Title>
      <Body>{body}</Body>
    </PostWrapper>
  );
};

export default Post;
