import React from 'react';
import classes from './Post3.module.css'

function Post3() {
  return (
                    <div className={classes.main__pc_read}>
                        <div className={classes.main__pc_post_cont}>
                            <div className={classes.main__pc_post_ava}>
                                <img src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png" className={classes.main__pc_post_avatar}></img>
                            </div>
                            <div className={classes.main__pc_post_text}>
                                Nice!
                            </div>
                        </div>
                        <div className={classes.main__pc_post_like}>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/157/364/non_2x/heart-icon-sign-symbol-design-free-png.png" className={classes.main__pc_post_avatar}></img>
                        </div>
                    </div>            
  );
}

export default Post3;
