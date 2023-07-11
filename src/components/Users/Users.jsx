import React from "react";
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/preloader";
let userPhoto = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.wrapper}>
            <div>{props.isFetching ? <Preloader className={classes.preloader} /> : null}</div>
            <div>
                <div>
                    <button className={classes.prewBtn} onClick={() => { props.onPageChanged(props.currentPage - 1) }}>Prew</button>
                    <button className={classes.prewBtn} onClick={() => { props.onPageChanged(props.currentPage + 1) }}>Next</button>
                </div>
            </div>
            <div className={classes.userswrapper}>
                {props.users.map(u =>
                    <div className={classes.userscontainer} key={u.id}>
                        <div className={classes.lefthandler}>
                            <div className={classes.avimagecontainer}>

                                <NavLink to={'/main/' + u.id}>
                                    <img className={classes.avimage} src={u.photos.small != null ? u.photos.small : userPhoto} alt='#' />
                                </NavLink>

                            </div>
                            <div className={classes.followbtncontainer}>
                                {!u.followed

                                    ? <button disabled={props.followingInProgress} className={classes.followbtn} onClick={() => {
                                        props.onFollowChanged(props.currentPage)
                                        props.onFollow(u.id);
                                        props.onFollowChanged(props.currentPage)
                                    }
                                    } >Follow</button>

                                    : <button disabled={props.followingInProgress} className={classes.followbtn} onClick={() => {
                                        props.onFollowChanged(props.currentPage)
                                        props.onUnfollow(u.id);
                                        props.onFollowChanged(props.currentPage)
                                    }
                                    }>Unfollow</button>

                                }
                            </div>
                        </div>
                        <div className={classes.righthandler}>
                            <div className={classes.blockleft}>
                                <div className={classes.fullname}>{u.name}</div>
                                <div className={classes.status}>{u.status}</div>
                            </div>
                            <div className={classes.blockright}>
                                <div className={classes.city}>Kyiv</div>
                                <div className={classes.country}>Ua</div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default Users;