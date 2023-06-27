

let _actionCreators = {
    addpost : 'ADD-POST' ,
    updatepost : 'UPDATE-NEW-POST-TEXT' ,
    addmessage : 'ADD-MESSAGE',
    updatemessage : 'UPDATE-NEW-MESSAGE-TEXT',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setuser: 'SET-USER'
  }

let initialState = {
        users : [
            
            // { id: 0, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
            // { id: 1, follow: true, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
            // { id: 2, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } },
            // { id: 3, follow: false, fullname: 'Alex G', avimage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', status: 'I`m a boss', location: { city: 'Kyiv' , country: 'Ukraine' } }

            
    
        ]
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
                users: [ ...state.users , ...action.users ]
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

export default userReducer;

