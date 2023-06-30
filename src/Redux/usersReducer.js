

let _actionCreators = {
    addpost : 'ADD-POST' ,
    updatepost : 'UPDATE-NEW-POST-TEXT' ,
    addmessage : 'ADD-MESSAGE',
    updatemessage : 'UPDATE-NEW-MESSAGE-TEXT',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setuser: 'SET-USER',
    setcurrentpage: 'SET-CURRENT-PAGE',
    settotalcount: 'SET-TOTAL-USERS-COUNT'
  }

let initialState = {
        users : [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1
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
        default : {
            return state;
        }
    } }

    export let followAC = (userId) => {
        return {
          type : _actionCreators.follow,
          userId
        }
      }
    export let unfollowAC = (userId) => {
        return {
          type : _actionCreators.unfollow,
          userId
        }
      }
      export let setUserAC = (users) => {
        return {
          type : _actionCreators.setuser,
          users
        }
      }
      export let setCurrentPageAC = (currentPage) => {
        return {
            type : _actionCreators.setcurrentpage,
            currentPage
        }
      }
      export let setUserTotalCountAC = (totalUsersCount) => {
        return {
            type : _actionCreators.settotalcount,
            count: totalUsersCount
        }
      }

export default userReducer;

