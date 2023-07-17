import React from 'react';
import classes from './Maincontent.module.css'
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import { Navigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import StoreContext from '../../StoreContext';

function Maincontent(props) {



  return (



    <div className={classes.main__container}>
        <div className={classes.main__info}>
            <div className={classes.main__bc_image}>
                <img src='https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*' alt="a" className={classes.main__bc_img}></img>
                <img className={classes.main__bc_img} alt=''></img>
            </div>
            <div className={classes.main__profilecard}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer />
            </div>
        </div>
    </div>
  );
}

export default Maincontent;
