import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUser, setUserTotalCount, toggleIsFething, unfollow, toggleFollowingProgress, getUsersThunkCreator, getFollowThunkCreator, FollowThunkCreator, UnfollowThunkCreator } from "../../Redux/usersReducer";
import Users from "./Users";
import { Navigate } from "react-router-dom";
// import axios from 'axios';
// import Preloader from "../common/preloader/preloader";
// import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {



    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFething(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(Response => {
        //     this.props.toggleIsFething(false)
        //     this.props.setUser(Response.data.items);
        //     this.props.setUserTotalCount(Response.data.totalCount);
        // })

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

        // this.props.toggleIsFething(true)
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(Response => {
        //     this.props.toggleIsFething(false)
        //     this.props.setUser(Response.data.items);
        // })

    }

    onFollowChanged = () => {

        this.props.getFollowThunkCreator(this.props.currentPage, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(Response => {
        //     this.props.setUser(Response.data.items);
        // })

    }

    onFollow = (id) => {
        this.props.FollowThunkCreator(id);
    }

    onUnfollow = (id) => {
        this.props.UnfollowThunkCreator(id);
    }

    render() {
        if(this.props.isAuth === false) return <Navigate to={'/login'}/>
        return <>
            {/* {this.props.isFetching ? <Preloader /> : null} */}
            <Users
                isFetching={this.props.isFetching}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}

                onPageChanged={this.onPageChanged}
                onFollowChanged={this.onFollowChanged}
                onFollow={this.onFollow}
                onUnfollow={this.onUnfollow}

                users={this.props.users} 
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUser: (users) => {
            dispatch(setUser(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setUserTotalCount: (totalCount) => {
            dispatch(setUserTotalCount(totalCount))
        },
        toggleIsFething: (isFetching) => {
            dispatch(toggleIsFething(isFetching))
        },
        toggleIsFollowingProgress: (isFetching) => {
            dispatch(toggleFollowingProgress(isFetching))
        }
    }
}

console.log(mapDispatchToProps)

export default connect(mapStateToProps, { follow, unfollow, setUser, setCurrentPage, setUserTotalCount, toggleIsFething, toggleFollowingProgress, getUsersThunkCreator, getFollowThunkCreator, FollowThunkCreator, UnfollowThunkCreator })(UsersAPIComponent)