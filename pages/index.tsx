import { NextPage } from 'next';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Header from '../src/components/Header';
import Post from '../src/components/Post';
import Dashboard from '../src/components/Dashboard/Dashboard';
import { StyledDiv, StyledLink } from '../src/components/Post/StyledPost'
import { getAllPosts } from '../src/redux/post/postSelectors';
import { IStore } from '../src/types'

const index: NextPage = () => {
  const posts = useSelector((state: IStore) => getAllPosts(state));

  return (
    <div>
      <Header />
      <Dashboard>
        {posts.map(post => {
          return (
            <StyledDiv key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <StyledLink>
                  Post Info
                </StyledLink>
              </Link>
              <Post id={post.id} title={post.title} body={post.body} />
            </StyledDiv>
          )
        })}
      </Dashboard>
    </div>
  );
};

export default index;
