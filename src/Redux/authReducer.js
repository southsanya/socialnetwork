import { stopSubmit } from "redux-form";
import { headerAPI, secureAPI } from "../api/api";

let _actionCreators = {
  setUserData: 'auth/SET-USER-DATA',
  getCaptchaUlrSuccess: "auth/GET-CAPTCHA-URL"

}
export let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
}
const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case _actionCreators.setUserData:
      return {
        ...state,
        ...action.data,
      };
    case _actionCreators.getCaptcha:
      return {
        ...state,
        ...action.data
      }
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
export let getCaptchaUrlSuccess = (captchaUrl) => {
  return {
    type: _actionCreators.getCaptchaUrl,
    data: { captchaUrl }
  }
}
export const getAuthThunkCreator = () => async (dispatch) => {
  let Response = await headerAPI.getAuth();
  if (Response.data.resultCode === 0) {
    let { userId, email, login } = Response.data.data;
    dispatch(setUserData(userId, email, login, true))
  }
}
export const loginThunkCreator = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
  let Response = await headerAPI.getLogIn(email, password, rememberMe, captchaUrl);
  if (Response.data.resultCode === 0) {
    console.log('auth')
    dispatch(getAuthThunkCreator());
  } else {
    if (Response.data.resultCode === 10) {
      dispatch(getCaptchaThunkCreator())
    }
    else {
      let action = stopSubmit('login', { email: Response });
      dispatch(action)
    }
  }
}
export const logoutThunkCreator = () => async (dispatch) => {
  let Response = await headerAPI.getLogOut()
  if (Response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const getCaptchaThunkCreator = () => async (dispatch) => {
  let Response = await secureAPI.getCaptcha()
  const captchaUrl = Response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;


