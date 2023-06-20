import React, { useContext } from 'react';
import classes from './Maincontent.module.css'
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StoreContext from '../../StoreContext';

function Maincontent(props) {

    let context = useContext(StoreContext);

  return (
    <div className={classes.main__container}>
        <div className={classes.main__info}>
            <div className={classes.main__bc_image}>
                <img src={context.getState().maincontent.maininfo.bcimage} className={classes.main__bc_img}></img>
                <img className={classes.main__bc_img}></img>
            </div>
            <div className={classes.main__profilecard}>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    </div>
  );
}

export default Maincontent;
