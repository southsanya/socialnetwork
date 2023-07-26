import React from "react";
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
let userPhoto = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg';


let User = ({ user, currentPage, onFollowChanged, onFollow, onUnfollow, followingInProgress }) => {
    return (
        <div className={classes.userscontainer} key={user.id}>
            <div className={classes.lefthandler}>
                <div className={classes.avimagecontainer}>

                    <NavLink to={'/main/' + user.id}>
                        <img className={classes.avimage} src={user.photos.small != null ? user.photos.small : userPhoto} alt='#' />
                    </NavLink>

                </div>
                <div className={classes.followbtncontainer}>
                    {!user.followed

                        ? <button disabled={followingInProgress} className={classes.followbtn} onClick={() => {
                            onFollowChanged(currentPage)
                            onFollow(user.id);
                            onFollowChanged(currentPage)
                        }
                        } >Follow</button>

                        : <button disabled={followingInProgress} className={classes.followbtn} onClick={() => {
                            onFollowChanged(currentPage)
                            onUnfollow(user.id);
                            onFollowChanged(currentPage)
                        }
                        }>Unfollow</button>

                    }
                </div>
            </div>
            <div className={classes.righthandler}>
                <div className={classes.blockleft}>
                    <div className={classes.fullname}>{user.name}</div>
                    <div className={classes.status}>{user.status}</div>
                </div>
                <div className={classes.blockright}>
                    <div className={classes.city}>Kyiv</div>
                    <div className={classes.country}>Ua</div>
                </div>
            </div>
        </div>
    )
}
export default User;