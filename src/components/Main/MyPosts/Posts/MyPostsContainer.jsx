import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../Redux/maincontentReducer';
import MyPosts from '../MyPosts';
// import Post1 from './Posts/Post1/Post1';
// import Post3 from './Posts/Post3/Post3';
// import Post2 from './Posts/Post2/Post2';

function MyPostsContainer(props) {

  let addPost = () => {
    props.dispatch( addPostActionCreator() )
  }
  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text)
    props.dispatch(action);
  }

  return (
    <MyPosts 
    postinfo={props.store.maincontent.postinfo} 
    updateNewPostText={onPostChange} 
    addPost={addPost}
    newPostText={props.store.maincontent.newPostText}
    />             
  );
}

export default MyPostsContainer;
