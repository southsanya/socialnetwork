import React from 'react';
import classes from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
                <div className={classes.main__pc_block}>
                    <div>
                        <img src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"></img>
                    </div>
                   <div className={classes.main__pc_content}>
                   <div className={classes.main__pc_title}>
                        <div>Alex Shestakov</div>
                    </div>
                    <div className={classes.main__pc_subtitle}>
                        <div className={classes.main__pc_date}>8 march</div>
                        <div className={classes.main__pc_city}>Kyiv</div>
                        <div className={classes.main__pc_edu}>KSAEU '24</div>
                        <div className={classes.main__pc_site}>southsanya.com</div>
                    </div>
                   </div>
                </div>
  );
}

export default ProfileInfo;
