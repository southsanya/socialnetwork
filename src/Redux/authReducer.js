import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

let _actionCreators = {
  setUserData: 'SET-USER-DATA',

}

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case _actionCreators.setUserData:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  };
}

export let setUserData = (userId, email, login, isAuth) => {
  return {
    type: _actionCreators.setUserData,
    data: { userId, email, login, isAuth }
  }
}

export const getAuthThunkCreator = () => {
  return (dispatch) => {
    headerAPI.getAuth()
      .then(Response => {
        if (Response.data.resultCode === 0) {
          let { userId, email, login } = Response.data.data;
          dispatch(setUserData(userId, email, login, true))
        }
        else if (Response.data.resultCode === 1) {
        }
      })
  }
}

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {


    // let messages = Response.data.messages.length > 0 ? Response.data.messages[0] : 'Some error'
    debugger;
    dispatch(stopSubmit('login', { error: 'Common error' }));

    headerAPI.getLogIn(email, password, rememberMe)
      .then(Response => {
        if (Response.data.resultCode === 0) {
          dispatch(getAuthThunkCreator())
        }
        else {
          let action = stopSubmit('login', {email: Response});
          dispatch(action)
        }
      })
  }
}

export const logoutThunkCreator = () => {
  return (dispatch) => {
    headerAPI.getLogOut()
      .then(Response => {
        if (Response.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      })
  }
}

export default authReducer;


