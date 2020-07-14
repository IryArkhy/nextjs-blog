import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { StledTitle, InfoWrapper, StledBody, DeletButton } from './StyledComponents'
import { deletePost } from '../../redux/post/postOperations';
import { IPost } from '../../types'
const PostInfo = ({ id, title, body, comments }: IPost) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = (e: any): void => {
    dispatch(deletePost(id));
    router.push("/");
  }

  return (
    <InfoWrapper>
      <StledTitle>{title}</StledTitle>
      <StledBody>{body}</StledBody>
      <DeletButton onClick={handleDelete}>Delete</DeletButton>
    </InfoWrapper>
  )
}
export default PostInfo;

