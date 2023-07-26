import { usersAPI } from "../api/api"
import { updateObjestInArray } from "../utils/helpers/helpers"

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
                users: updateObjestInArray(state.users, action.userId, 'id', {follow: true})
            }
        }
        case _actionCreators.unfollow: {
            return {
                ...state,
                users: updateObjestInArray(state.users, action.userId, 'id', {follow: false})

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
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFething(true));
    let Response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFething(false));
    dispatch(setUser(Response.data.items));
    dispatch(setUserTotalCount(Response.data.totalCount));
    dispatch(setCurrentPage(currentPage));
}
export const getFollowThunkCreator = (currentPage, pageSize) => async (dispatch, userId) => {
    let Response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUser(Response.data.items));
    dispatch(setUserTotalCount(Response.data.totalCount));
}
export const followUnfollowThunkCreator = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true));
    let Response = await apiMethod(id);
    if (Response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false));
}
export const FollowThunkCreator = (id) => async (dispatch) => {
    followUnfollowThunkCreator(dispatch, id, usersAPI.getFollow.bind(usersAPI), follow);
}
export const UnfollowThunkCreator = (id) => async (dispatch) => {
    followUnfollowThunkCreator(dispatch, id, usersAPI.getUnfollow.bind(usersAPI), unfollow);
}
export default userReducer;

