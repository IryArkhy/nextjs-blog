import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head'
import { useRouter } from 'next/router'
import api from '../../src/services/api'
import Header from '../../src/components/Header/Header';
import { IPost } from '../../src/types';
import PostInfo from '../../src/components/PostInfoPage'

const PostPage = ({ postData }: { postData: IPost }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <Header />
      <PostInfo id={postData.id} title={postData.title} body={postData.body} comments={postData.comments} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await api.getIDs();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await api.getPostByIdForRender(Number(params.id));
  return {
    props: {
      postData
    }
  }
}


export default PostPage;
