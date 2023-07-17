export const usersSelectors = {
    getUsers : (state) => {
        return state.users.users
    },
    getPageSize : (state) => {
        return state.users.pageSize
    },
    getTotalUsersCount : (state) => {
        return state.users.totalUsersCount
    },
    getCurrentPage : (state) => {
        return state.users.currentPage
    },
    getIsFetching : (state) => {
        return state.users.isFetching
    },
    getFollowingInProgress : (state) => {
        return state.users.followingInProgress
    }
}
export const headerSelectors = {
    getIsAuth: (state) => {
        return state.auth.isAuth
    },
    getLogin: (state) => {
        return state.auth.login
    }
}
