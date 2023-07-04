

let _actionCreators = {
    addpost : 'ADD-POST' ,
    updatepost : 'UPDATE-NEW-POST-TEXT' ,
    addmessage : 'ADD-MESSAGE',
    updatemessage : 'UPDATE-NEW-MESSAGE-TEXT',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setuser: 'SET-USER',
    setcurrentpage: 'SET-CURRENT-PAGE',
    settotalcount: 'SET-TOTAL-USERS-COUNT',
    toggleisfetching: 'TOGGLE-IS-FETCHING'
  }

let initialState = {
        users : [],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
    }
  


    
const userReducer = ( state = initialState , action ) => {
    

    switch(action.type) {
        case _actionCreators.follow : {
            return { 
                ...state,
                users: state.users.map ( u => {
                    debugger;
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                } )
             }
        }
        case _actionCreators.unfollow : {
            return { 
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                } )
             }
        }
        case _actionCreators.setuser : {
            return {
                ...state,
                users:  action.users 
            }
        }
        case _actionCreators.setcurrentpage : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case _actionCreators.settotalcount : {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case _actionCreators.toggleisfetching : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default : {
            return state;
        }
    } }

    export let follow = (userId) => {
        return {
          type : _actionCreators.follow,
          userId
        }
      }
    export let unfollow = (userId) => {
        return {
          type : _actionCreators.unfollow,
          userId
        }
      }
      export let setUser = (users) => {
        return {
          type : _actionCreators.setuser,
          users
        }
      }
      export let setCurrentPage = (currentPage) => {
        return {
            type : _actionCreators.setcurrentpage,
            currentPage
        }
      }
      export let setUserTotalCount = (totalUsersCount) => {
        return {
            type : _actionCreators.settotalcount,
            count: totalUsersCount
        }
      }
      export let toggleIsFething = (isFetching) => {
        return {
            type : _actionCreators.toggleisfetching,
            isFetching
        }
      }

export default userReducer;

