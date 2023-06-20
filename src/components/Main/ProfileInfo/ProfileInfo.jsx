import React, { useContext } from 'react';
import classes from './ProfileInfo.module.css'
import StoreContext from '../../../StoreContext';

function ProfileInfo() {

    let context = useContext(StoreContext);

  return (
                <div className={classes.main__pc_block}>
                    <div>
                        <img src={context.getState().maincontent.maininfo.avimage}></img>
                    </div>
                   <div className={classes.main__pc_content}>
                   <div className={classes.main__pc_title}>
                        <div>{context.getState().maincontent.maininfo.name}</div>
                    </div>
                    <div className={classes.main__pc_subtitle}>
                        <div className={classes.main__pc_date}>{context.getState().maincontent.maininfo.date}</div>
                        <div className={classes.main__pc_city}>{context.getState().maincontent.maininfo.city}</div>
                        <div className={classes.main__pc_edu}>{context.getState().maincontent.maininfo.edu}</div>
                        <div className={classes.main__pc_site}>{context.getState().maincontent.maininfo.site}</div>
                    </div>
                   </div>
                </div>
  );
}

export default ProfileInfo;
