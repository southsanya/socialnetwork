import { stopSubmit } from "redux-form"
import { mainAPI } from "../api/api"

let _actionCreators = {
  addpost: 'main/ADD-POST',
  updatepost: 'main/UPDATE-NEW-POST-TEXT',
  addmessage: 'main/ADD-MESSAGE',
  updatemessage: 'main/UPDATE-NEW-MESSAGE-TEXT',
  setuserprofile: 'main/SET-USER-PROFILE',
  setstatus: 'main/SET-STATUS',
  deletepost: 'main/DELETE-POST',
  savephoto: 'main/SAVE-PHOTO',
  saveinfo: 'main/SAVE-INFO'

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
    case _actionCreators.savephoto: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photo
        }
      }
    }
    case _actionCreators.saveinfo: {
      return {
        ...state,
        profile: {
          AboutMe: action.AboutMe,
          contacts: {...action.contacts},
          fullName: action.fullName,
          lookingForAJob: action.lookingForAJob,
          lookingForAJobDescription: action.lookingForAJobDescription,
        }

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
export let deletePost = (status) => {
  return {
    type: _actionCreators.deletepost,
    status
  }
}
export let savePhotoSuccess = (photo) => {
  return {
    type: _actionCreators.savephoto,
    photo
  }
}
export let saveInfoSuccess = (file) => {
  return {
    type: _actionCreators.saveinfo,
    file
  }
}
export const GetMainThunkCreator = (userId) => async (dispatch) => {
  let Response = await mainAPI.getMain(userId)
  dispatch(setUserProfile(Response.data));
}
export const GetStatusThunkCreator = (userId) => async (dispatch) => {
  let Response = await mainAPI.getStatus(userId);
  dispatch(setStatus(Response.data));
}
export const UpdateStatusThunkCreator = (status) => async (dispatch) => {
  let Response = await mainAPI.updateStatus(status);
  if (Response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const SavePhotoThunkCreator = (file) => async (dispatch) => {
  //console.log('savePhoto thunk on')
  let Response = await mainAPI.savePhoto(file);
  //console.log(Response.data.resultCode)
  if (Response.data.resultCode === 0) {
    //console.log(Response.data.photos)
    dispatch(savePhotoSuccess(file))
  }
}

export const SaveProfileInfoThunkCreator = (file) => async (dispatch, getState) => {
  let Response = await mainAPI.saveInfo(file);
  if (Response.data.resultCode === 0) {
    // dispatch(saveInfoSuccess(file))
    dispatch(GetMainThunkCreator(getState().auth.userId))
  }
  else {
    dispatch(stopSubmit('profile', {_error: Response.data.messages[0]}))
  }
}

export default maincontentReducer;

