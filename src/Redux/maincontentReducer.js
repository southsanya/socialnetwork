import { mainAPI } from "../api/api"

let _actionCreators = {
  addpost: 'ADD-POST',
  updatepost: 'UPDATE-NEW-POST-TEXT',
  addmessage: 'ADD-MESSAGE',
  updatemessage: 'UPDATE-NEW-MESSAGE-TEXT',
  setuserprofile: 'SET-USER-PROFILE',
  setstatus: 'SET-STATUS'

}

let initialState = {
  newPostText: 'southsanya.com',
  postinfo: [{ id: '00001', text: 'You`re so awfull!' }, { id: '00002', text: 'Hi everyone!' }],
  maininfo: {
    name: 'Alex Shestakov',
    date: '8 march',
    city: 'Kyiv',
    edu: 'KSAEU `24',
    site: 'southsanya.com',
    bcimage: 'https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*',
    avimage: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png'
  },
  profile: null,
  status: ''
}




const maincontentReducer = (state = initialState, action) => {



  switch (action.type) {
    case _actionCreators.addpost: {
      let newPost = {
        id: '00005',
        text: action.newPost
      }
      let stateCopy = { ...state };
      stateCopy.postinfo = [...state.postinfo];
      stateCopy.postinfo.push(newPost);
      return stateCopy;
    }
    case _actionCreators.updatepost: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case _actionCreators.setuserprofile: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case _actionCreators.setstatus: {
      return {
        ...state,
        status: action.status
      }
    }
    default: {

      let stateCopy = { ...state };
      return stateCopy;
    }
  }
}

export let addPostActionCreator = (newPost) => {
  return {
    type: _actionCreators.addpost,
    newPost
  }
}
export let updateNewPostActionCreator = (text) => {
  return {
    type: _actionCreators.updatepost,
    newText: text
  }
}
export let setUserProfile = (profile) => {
  return {
    type: _actionCreators.setuserprofile,
    profile
  }
}
export let setStatus = (status) => {
  return {
    type: _actionCreators.setstatus,
    status
  }
}
export const GetMainThunkCreator = (userId) => {
  return (dispatch) => {
    mainAPI.getMain(userId)
      .then(Response => {
        dispatch(setUserProfile(Response.data));
      })
  }
}
export const GetStatusThunkCreator = (userId) => {
  return (dispatch) => {
    mainAPI.getStatus(userId)
      .then(Response => {
        dispatch(setStatus(Response.data));
      })
  }
}
export const UpdateStatusThunkCreator = (status) => {
  return (dispatch) => {
    mainAPI.updateStatus(status)
      .then(Response => {
        if(Response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
}

export default maincontentReducer;

