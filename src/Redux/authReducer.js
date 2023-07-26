import { stopSubmit } from "redux-form";
import { headerAPI } from "../api/api";

let _actionCreators = {
  setUserData: 'auth/SET-USER-DATA'

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
export const getAuthThunkCreator = () => async (dispatch) => {
  let Response = await headerAPI.getAuth();
  if (Response.data.resultCode === 0) {
    let { userId, email, login } = Response.data.data;
    dispatch(setUserData(userId, email, login, true))
  }
}
export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  let Response = await headerAPI.getLogIn(email, password, rememberMe);
  if (Response.data.resultCode === 0) {
    dispatch(getAuthThunkCreator())
  } else {
    let action = stopSubmit('login', { email: Response });
    dispatch(action)
  }
}
export const logoutThunkCreator = () => async (dispatch) => {
  let Response = await headerAPI.getLogOut()
  if (Response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authReducer;


