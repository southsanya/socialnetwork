import React from 'react';
import classes from './Side.module.css';
import { NavLink } from 'react-router-dom';
import { friends } from './Friends';

function Side(props) {
    return (
        <aside className={classes.aside__container}>
            <div className={classes.aside__units}>
                <div className={classes.aside__button}>
                    <NavLink to="/main" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        Profile
                    </NavLink>
                </div>
                <div className={classes.aside__button}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        Messages
                    </NavLink>
                </div>
                <div className={classes.aside__button}>
                    <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        News
                    </NavLink>
                </div>
                <div className={classes.aside__button}>
                    <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        Music
                    </NavLink>
                </div>
                <div className={classes.aside__button}>
                    <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        Settings
                    </NavLink>
                </div>
                <div className={classes.aside__button}>
                    <NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.aside__button}>
                        Find
                    </NavLink>
                </div>

            </div>
            <div className={classes.aside__unit}>
                <div className={classes.title}>My Friends</div>
                <div>
                    <div className={classes.friendsWrapper}>
                        {friends.map( friend => <div key={friend.id} className={classes.friendContainer}>
                            <img src={friend.img} alt='friend' className={classes.friendImg} />
                            <div>{friend.name}</div>
                       </div> )}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Side;
