// import React from "react";


// let Users = (users) => {


    
//     return (
//     <div>
//         <button onClick={() => getUsers()}>Get Users</button>
//         {props.users.map( u =>
//             <div className={classes.userscontainer} key={u.id}>
//                 <div className={classes.lefthandler}>
//                     <div className={classes.avimagecontainer}>
//                         <img className={classes.avimage} src={ u.photos.small != null ? u.photos.small : userPhoto  } alt='#'/>
//                     </div>
//                     <div className={classes.followbtncontainer}>
//                         {u.follow
//                         ?<button className={classes.followbtn} onClick={() => props.unfollow(u.id)} >Unfollow</button>
//                         :<button className={classes.followbtn} onClick={() => props.follow(u.id)}>Follow</button>
//                         }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//     </div>
//     ) }

// export default Users;


import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'



let Users = (props) => {

    // console.log(props.totalUsersCount, props.pageSize)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    // console.dir(pages)

    return (
        <div className={classes.wrapper}>
            <div>
                <div>
                    <button onClick={() => {props.onPageChanged(props.currentPage-1)}}>Prew</button>
                    <button onClick={() => {props.onPageChanged(props.currentPage+1)}}>Next</button>
                </div>
                {/* {pages.map(p => { return <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p && classes.selectedPage}>{p}</span>})} */}
            </div>
        <div className={classes.userswrapper}> 
        {props.users.map( u =>
            <div className={classes.userscontainer} key={u.id}>
                <div className={classes.lefthandler}>
                    <div className={classes.avimagecontainer}>
                        <img className={classes.avimage} src={ u.photos.small != null ? u.photos.small : userPhoto  } alt='#'/>
                    </div>
                    <div className={classes.followbtncontainer}>
                        {u.follow
                        ?<button className={classes.followbtn} onClick={() => props.unfollow(u.id)} >Unfollow</button>
                        :<button className={classes.followbtn} onClick={() => props.follow(u.id)}>Follow</button>
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