import { GetStaticProps, GetServerSideProps} from 'next';
import Head from 'next/head'
import api from '../../src/services/api'
import Header from '../../src/components/Header/Header';
import { IPost } from '../../src/types';
import PostInfo from '../../src/components/PostInfoPage'

const PostPage = ({ postData }: { postData: IPost }) => {
  const {id, title, body, comments } = postData;
  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <Header />
      <PostInfo id={id} title={title} body={body} comments={comments} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const postData = await api.getPostByIdForRender(Number(context.query.id));
  return {
    props: {
      postData
    }
  }
}

export default PostPage;
