import React from 'react';
import classes from './Post1.module.css'
import userPhoto from '../../../../../assets/images/account_circle_FILL0_wght400_GRAD0_opsz48.svg';
import likeButton from '../../../../../assets/images/favorite_FILL0_wght400_GRAD0_opsz48.svg';


function Post1(props) {
  return (
                    <div className={classes.main__pc_read}>
                        <div className={classes.main__pc_post_cont}>
                            <div className={classes.main__pc_post_ava}>
                                <img src={userPhoto} alt='1' className={classes.main__pc_post_avatar}></img>
                            </div>
                            <div className={classes.main__pc_post_text}>
                                {props.text}
                            </div>
                        </div>
                        <div className={classes.main__pc_post_like}>
                            <img src={likeButton}
                             alt='1' className={classes.main__pc_post_avatar}></img>
                        </div>
                    </div>            
  );
}

export default Post1;
