import React from 'react';
import classes from './Maincontent.module.css'
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/Posts/MyPostsContainer';

function Maincontent(props) {
  return (
    <div className={classes.main__container}>
        <div className={classes.main__info}>
            <div className={classes.main__bc_image}>
                <img src={props.maininfo.bcimage} className={classes.main__bc_img}></img>
            </div>
            <div className={classes.main__profilecard}>
                <div className={classes.main__pc_block}>
                    <div>
                        <img src={props.maininfo.avimage}></img>
                    </div>
                   <div className={classes.main__pc_content}>
                   <div className={classes.main__pc_title}>
                        <div>{props.maininfo.name}</div>
                    </div>
                    <div className={classes.main__pc_subtitle}>
                        <div className={classes.main__pc_date}>{props.maininfo.date}</div>
                        <div className={classes.main__pc_city}>{props.maininfo.city}</div>
                        <div className={classes.main__pc_edu}>{props.maininfo.edu}</div>
                        <div className={classes.main__pc_site}>{props.maininfo.site}</div>
                    </div>
                   </div>
                </div>
                <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
            </div>
        </div>
    </div>
  );
}

export default Maincontent;
