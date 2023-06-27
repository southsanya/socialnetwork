import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUserAC, unfollowAC } from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
    return  {
        users: state.users.users
    }
}
let mapDispatchToProps =  (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (users) => {
            dispatch(setUserAC(users))
        }
    }
} 

export default connect(mapStateToProps , mapDispatchToProps) (Users)