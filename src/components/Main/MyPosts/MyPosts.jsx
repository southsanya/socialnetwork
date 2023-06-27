import React from 'react';
import classes from './MyPosts.module.css'
import Post1 from './Posts/Post1/Post1';

function MyPosts(props) {

let postsData = props.maincontent.postinfo.map ( data => <Post1 id={data.id} key={data.id} text={data.text} /> )
let newPostElement = React.createRef()

let addPost = () => {
  debugger;
  props.addPost();
}
let onPostChange = () => {
  let text = newPostElement.current.value;
  debugger;
  props.onPostChange(text);
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
