import React, { useContext } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../Redux/maincontentReducer';
import MyPosts from '../MyPosts';
import StoreContext from '../../../../StoreContext';

function MyPostsContainer(props) {

  let context = useContext(StoreContext);

  let addPost = () => {
    context.dispatch( addPostActionCreator() )
  }
  let onPostChange = (text) => {
    let action = updateNewPostActionCreator(text)
    context.dispatch(action);
  }

  return (
    <MyPosts 
    postinfo={context.getState().maincontent.postinfo} 
    updateNewPostText={onPostChange} 
    addPost={addPost}
    newPostText={context.getState().maincontent.newPostText}
    />             
  );
}

export default MyPostsContainer;
