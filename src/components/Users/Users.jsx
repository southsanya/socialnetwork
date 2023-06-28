import React from "react";
import classes from './Users.module.css';
import axios, * as others from 'axios';
import userPhoto from '../../assets/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'

class Users extends React.Component {

constructor (props) {
    super (props);

    alert ('NEW')

    // if (this.props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( Response => {
            this.props.setusers(Response.data.items);
        } )
        
    // }
}

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then( Response => {
    //             this.props.setusers(Response.data.items);
    //         } )
            
    //     }
    //    }

    render() {
        return (
        
            <div>
                {/* <button onClick={() => this.getUsers()}>Get Users</button> */}
            {this.props.users.map( u =>
                 <div className={classes.userscontainer} key={u.id}>
                    <div className={classes.lefthandler}>
                        <div className={classes.avimagecontainer}>
                            <img className={classes.avimage} src={ u.photos.small != null ? u.photos.small : userPhoto  } alt='#'/>
                        </div>
                        <div className={classes.followbtncontainer}>
                            {u.follow
                            ?<button className={classes.followbtn} onClick={() => this.props.unfollow(u.id)} >Unfollow</button>
                            :<button className={classes.followbtn} onClick={() => this.props.follow(u.id)}>Follow</button>
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
                 </div> )}
            </div>
    
        )
    }
}

export default Users;