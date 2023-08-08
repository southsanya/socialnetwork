import React from 'react';
import classes from './MyPosts.module.css'
import Post1 from './Posts/Post1/Post1';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControls/formsControls';

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  return <form onSubmit={props.handleSubmit} className={classes.inputContainer}>
    <div className={classes.main__pc_input}>
      <Field component={Textarea} className={classes.main__pc_inp} name={'newPost'} placeholder='post' validate={[required , maxLength10]} />
    </div>
    <button className={classes.main__pc_but}>Send</button>
  </form>
}

const MyPostsReduxForm = reduxForm({
  form: 'newPost'
})(MyPostsForm)



function MyPosts(props) {

  let postsData = props.maincontent.postinfo.map(data => <Post1 id={data.id} key={data.id} text={data.text} />)

  let addPost = (formData) => {
    props.addPost(formData);
  }

  const onSubmit = (formData) => {
    console.log(formData)
    addPost(formData.newPost)
  }

  return (

    <div className={classes.main__pc_send}>
      <div className={classes.main__pc_title}>My posts</div>
      <MyPostsReduxForm onSubmit={onSubmit} />
      {postsData}
    </div>

  );
}

export default MyPosts;
