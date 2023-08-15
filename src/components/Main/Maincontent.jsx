import React from 'react';
import classes from './Maincontent.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Maincontent(props) {
  return (
    <div className={classes.profileWrapper}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  );
}
export default Maincontent;
