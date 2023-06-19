import React from 'react';
import classes from './MyPosts.module.css'
import Post1 from './Posts/Post1/Post1';
import Post3 from './Posts/Post3/Post3';
import Post2 from './Posts/Post2/Post2';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/maincontentReducer';

function MyPosts(props) {

let postsData = props.postinfo.map ( data => <Post1 text={data.text} /> )
let newPostElement = React.createRef()

let addPost = () => {
  props.dispatch( addPostActionCreator() )
}
let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostActionCreator(text));
}

  return (

      <div className={classes.main__pc_send}>
          <div className={classes.main__pc_title}>My posts</div>
          <div className={classes.main__pc_input}>
            <input className={classes.main__pc_inp} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
        <button onClick={ addPost } className={classes.main__pc_but}>Send</button>
        {postsData}
      </div>  
                     
  );
}

export default MyPosts;
