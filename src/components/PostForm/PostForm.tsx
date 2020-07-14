import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Form, Input, Label, TextArea, Button } from './StyledForm';
import Header from '../Header';
import { createPost } from '../../redux/post/postOperations';
import { IInputs } from '../../types';


const PostForm = () => {
  const [title, setTitle]: IInputs = useState("");
  const [body, setBody]: IInputs = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeTitle = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setTitle(target.value);
  }
  const handleChangeBody = ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(target.value);
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!title || !body) return;
    dispatch(createPost({ title, body }));
    setTitle('');
    setBody('');
    router.push("/");
  }


  return (
    <div>
      <Header location={router.pathname} />
      <Form onSubmit={handleSubmit}>
        <Label>
          Title
          <Input value={title} type="text" name="title" onChange={handleChangeTitle} />
        </Label>
        <Label>
          Body
          <TextArea value={body} name="body" id="post-body" onChange={handleChangeBody} />
        </Label>
        <Button type="submit">Add a Post</Button>
      </Form>
    </div>
  )
}

export default PostForm;
