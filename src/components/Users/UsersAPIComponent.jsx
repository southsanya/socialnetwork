// import React from "react";
// import classes from './Users.module.css';
// import axios, * as others from 'axios';
// import userPhoto from '../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
// import Users from "./Users";

// // class UsersAPIComponent extends React.Component {

// //     constructor (props) {
// //         super (props);
// //     }

// //     componentDidMount() {
// //         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( Response => {
// //             this.props.setusers(Response.data.items);
// //             this.props.settotalusercount(Response.data.totalCount);

// //         } )
// //     }

// //     onPageChanged = (pageNumber) => {
// //         this.props.setCurrentPage(pageNumber);
// //         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then( Response => {
// //             this.props.setusers(Response.data.items);        } )
// //     }

// //     render() {
// //         // console.log(this.props.totalUsersCount, this.props.pageSize)
// //         // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
// //         // let pages = [];
// //         // for(let i=1; i<=pagesCount; i++) {
// //         //     pages.push(i)
// //         // }
// //         // console.dir(pages)

// //     return (
// //         <Users 
// //         totalUsersCount = {this.props.totalUsersCount}
// //         pageSize = {this.props.pageSize}
// //         currentPage = {this.props.currentPage}
// //         onPageChanged = {this.onPageChanged}
// //         setCurrentPage = {this.props.setCurrentPage}
// //         setusers = {this.props.setusers}
// //         users = {this.props.users}
// //         follow = {this.props.follow}
// //         unfollow = {this.props.unfollow}
// //         />
// //     )

// //     // return (
// //     //     <div className={classes.wrapper}>
// //     //         <div>
// //     //             <div>
// //     //                 <button onClick={() => {this.onPageChanged(this.props.currentPage-1)}}>Prew</button>
// //     //                 <button onClick={() => {this.onPageChanged(this.props.currentPage+1)}}>Next</button>
// //     //             </div>
// //     //             {/* {pages.map(p => { return <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p && classes.selectedPage}>{p}</span>})} */}
// //     //         </div>
// //     //     <div className={classes.userswrapper}> 
// //     //     {this.props.users.map( u =>
// //     //         <div className={classes.userscontainer} key={u.id}>
// //     //             <div className={classes.lefthandler}>
// //     //                 <div className={classes.avimagecontainer}>
// //     //                     <img className={classes.avimage} src={ u.photos.small != null ? u.photos.small : userPhoto  } alt='#'/>
// //     //                 </div>
// //     //                 <div className={classes.followbtncontainer}>
// //     //                     {u.follow
// //     //                     ?<button className={classes.followbtn} onClick={() => this.props.unfollow(u.id)} >Unfollow</button>
// //     //                     :<button className={classes.followbtn} onClick={() => this.props.follow(u.id)}>Follow</button>
// //     //                     }
// //     //                 </div>
// //     //             </div>
// //     //             <div className={classes.righthandler}>
// //     //                 <div className={classes.blockleft}>
// //     //                     <div className={classes.fullname}>{u.name}</div>
// //     //                     <div className={classes.status}>{u.status}</div>
// //     //                 </div>
// //     //                 <div className={classes.blockright}>
// //     //                     <div className={classes.city}>Kyiv</div>
// //     //                     <div className={classes.country}>Ua</div>
// //     //                 </div>
// //     //             </div>
// //     //         </div>
// //     //     )
// //     // }
// //     //     </div>
// //     // </div>
// //     //     )
// //     }
// // }

// export default UsersAPIComponent;