// import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setTotalCountAC, setUserAC, setUserTotalCountAC, unfollowAC } from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
    return  {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage

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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        settotalusercount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount))
        }
    }
} 

export default connect(mapStateToProps , mapDispatchToProps) (Users)