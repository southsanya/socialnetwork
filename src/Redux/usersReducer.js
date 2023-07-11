import { usersAPI } from "../api/api"
// import axios from "axios"

let _actionCreators = {
    addpost: 'ADD-POST',
    updatepost: 'UPDATE-NEW-POST-TEXT',
    addmessage: 'ADD-MESSAGE',
    updatemessage: 'UPDATE-NEW-MESSAGE-TEXT',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setuser: 'SET-USER',
    setcurrentpage: 'SET-CURRENT-PAGE',
    settotalcount: 'SET-TOTAL-USERS-COUNT',
    toggleisfetching: 'TOGGLE-IS-FETCHING',
    toggleisfollowingprogress: 'TOGGLE-IS-FOLLOWING-PROGRESS'
}

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case _actionCreators.follow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        }
        case _actionCreators.unfollow: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }
        }
        case _actionCreators.setuser: {
            return {
                ...state,
                users: action.users
            }
        }
        case _actionCreators.setcurrentpage: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case _actionCreators.settotalcount: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case _actionCreators.toggleisfetching: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case _actionCreators.toggleisfollowingprogress: {
            return {
                ...state,
                followingInProgress: action.isFetching
            }
        }
        default: {
            return state;
        }
    }
}

export let follow = (userId) => {
    return {
        type: _actionCreators.follow,
        userId
    }
}
export let unfollow = (userId) => {
    return {
        type: _actionCreators.unfollow,
        userId
    }
}
export let setUser = (users) => {
    return {
        type: _actionCreators.setuser,
        users
    }
}
export let setCurrentPage = (currentPage) => {
    return {
        type: _actionCreators.setcurrentpage,
        currentPage
    }
}
export let setUserTotalCount = (totalUsersCount) => {
    return {
        type: _actionCreators.settotalcount,
        count: totalUsersCount
    }
}
export let toggleIsFething = (isFetching) => {
    return {
        type: _actionCreators.toggleisfetching,
        isFetching
    }
}
export let toggleFollowingProgress = (isFetching) => {
    return {
        type: _actionCreators.toggleisfollowingprogress,
        isFetching
    }
}


// THUNK
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFething(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(Response => {
                dispatch(toggleIsFething(false));
                dispatch(setUser(Response.data.items));
                dispatch(setUserTotalCount(Response.data.totalCount));
                dispatch(setCurrentPage(currentPage));
            })
    }
}

export const getFollowThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize)
            .then(Response => {
                dispatch(setUser(Response.data.items));
                dispatch(setUserTotalCount(Response.data.totalCount))
            })
    }
}

export const FollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true));
        usersAPI.getFollow(id)
            .then(Response => {
                if (Response.data.resultCode === 0) {
                    dispatch(follow(id))
                }
            })
        dispatch(toggleFollowingProgress(false))
        debugger;
    }
}
export const UnfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true));
        usersAPI.getUnfollow(id)
            .then(Response => {
                if (Response.data.resultCode === 0) {
                    dispatch(follow(id))
                }
            })
        dispatch(toggleFollowingProgress(false))
    }

}




export default userReducer;

