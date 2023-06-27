import React from "react";
import classes from './Users.module.css';


let Users = ({ users , unfollow , follow , setusers }) => {
    debugger;

    if (users.length === 0) {
        setusers(
            [
                { id: 0, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
                { id: 1, follow: true, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
                { id: 2, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
                { id: 3, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } }

            ]
        )
    }

    return (
        users.map( u =>
             <div className={classes.userscontainer} key={u.id}>
                <div className={classes.lefthandler}>
                    <div className={classes.avimagecontainer}>
                        <img className={classes.avimage} src={u.avimage}/>
                    </div>
                    <div className={classes.followbtncontainer}>
                        {u.follow
                        ?<button className={classes.followbtn} onClick={() => unfollow(u.id)} >Unfollow</button>
                        :<button className={classes.followbtn} onClick={() => follow(u.id)}>Follow</button>
                         }
                    </div>
                </div>
                <div className={classes.righthandler}>
                    <div className={classes.blockleft}>
                        <div className={classes.fullname}>{u.fullname}</div>
                        <div className={classes.status}>{u.status}</div>
                    </div>
                    <div className={classes.blockright}>
                        <div className={classes.city}>{u.location.city}</div>
                        <div className={classes.country}>{u.location.country}</div>
                    </div>
                </div>
             </div> )
    )
}

export default Users;