import { stopSubmit } from "redux-form";
import { headerAPI, secureAPI } from "../api/api";

let _actionCreators = {
  setUserData: 'auth/SET-USER-DATA',
  getCaptchaUrlSuccess: "auth/GET-CAPTCHA-URL"

}

export type initialStateType = {
  userId: null | number,
  email: null | string,
  login: null | string,
  isFetching ?: boolean,
  isAuth: boolean,
  captchaUrl ?: null | string
}
export let initialState: initialStateType = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
}

// export let initialStateType = typeof initialState;
// console.log(initialStateType)

const authReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case _actionCreators.setUserData:
      return {
        ...state,
        ...action.data,
      };
    case _actionCreators.getCaptchaUrlSuccess:
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  };
}

export let setUserData = (userId: any, email: any, login: any, isAuth: any) => {
  return {
    type: _actionCreators.setUserData,
    data: { userId, email, login, isAuth }
  }
}
export let getCaptchaUrlSuccess = (captchaUrl: any) => {
  return {
    type: _actionCreators.getCaptchaUrlSuccess,
    data: { captchaUrl }
  }
}
export const getAuthThunkCreator = () => async (dispatch: any) => {
  let Response = await headerAPI.getAuth();
  if (Response.data.resultCode === 0) {
    let { userId, email, login } = Response.data.data;
    dispatch(setUserData(userId, email, login, true))
  }
}
export const loginThunkCreator = (email: any, password: any, rememberMe: any, captchaUrl: any) => async (dispatch: any) => {
  let Response = await headerAPI.getLogIn(email, password, rememberMe);
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
export const logoutThunkCreator = () => async (dispatch: any) => {
  let Response = await headerAPI.getLogOut()
  if (Response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const getCaptchaThunkCreator = () => async (dispatch: any) => {
  let Response = await secureAPI.getCaptcha()
  const captchaUrl = Response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;


