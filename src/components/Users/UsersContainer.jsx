import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUser, setUserTotalCount, toggleIsFething, unfollow, toggleFollowingProgress, getUsersThunkCreator, getFollowThunkCreator, FollowThunkCreator, UnfollowThunkCreator } from "../../Redux/usersReducer";
import Users from "./Users";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { usersSelectors } from "../../Redux/selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);

    }

    onFollowChanged = () => {

        this.props.getFollowThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onFollow = (id) => {
        this.props.FollowThunkCreator(id);
    }

    onUnfollow = (id) => {
        this.props.UnfollowThunkCreator(id);
    }

    render() {

        return <>
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
        users: usersSelectors.getUsers(state),
        pageSize: usersSelectors.getPageSize(state),
        totalUsersCount: usersSelectors.getTotalUsersCount(state),
        currentPage: usersSelectors.getCurrentPage(state),
        isFetching: usersSelectors.getIsFetching(state),
        followingInProgress: usersSelectors.getFollowingInProgress(state),
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


export default compose(
    connect(mapStateToProps, { follow, unfollow, setUser, setCurrentPage, setUserTotalCount, toggleIsFething, toggleFollowingProgress, getUsersThunkCreator, getFollowThunkCreator, FollowThunkCreator, UnfollowThunkCreator }),
    withAuthRedirect
)(UsersAPIComponent);