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
        isAuth: true
      };
    default:
      return state;
  };
}

export let setUserData = (userId, email, login) => {
  return {
    type: _actionCreators.setUserData,
    data: { userId, email, login }
  }
}

export const getAuthThunkCreator = () => {
  return (dispatch) => {
    headerAPI.getAuth()
      .then(Response => {
        if (Response.data.resultCode === 0) {
          let { userId, email, login } = Response.data.data;
          dispatch(setUserData(userId, email, login))
        }
        else if (Response.data.resultCode === 1) {
        }
      })
  }
}

export default authReducer;


