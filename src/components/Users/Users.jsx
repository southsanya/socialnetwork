import React from "react";
import classes from './Users.module.css';
import Preloader from "../common/preloader/preloader";
import User from "./User";


let Users = ({ isFetching, onPageChanged, currentPage, users, onFollowChanged, onFollow, onUnfollow, followingInProgress }) => {

    return (
        <div className={classes.wrapper}>
            <div>{isFetching ? <Preloader className={classes.preloader} /> : null}</div>
            <div>
                <div className={classes.buttons}>
                    <button className={classes.prewBtn} onClick={() => { onPageChanged(currentPage - 1) }}>Prew</button>
                    <button className={classes.prewBtn} onClick={() => { onPageChanged(currentPage + 1) }}>Next</button>
                </div>
            </div>
            <div className={classes.userswrapper}>
                {users.map(u => <User user={u} currentPage={currentPage} onFollowChanged={onFollowChanged} onFollow={onFollow} onUnfollow={onUnfollow} followingInProgress={followingInProgress} />)
                }
            </div>
        </div>
    )
}
export default Users;