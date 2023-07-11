import React from 'react';
// import classes from './Header.module.css'
// import { NavLink } from 'react-router-dom';
import Header from './Header';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAuthThunkCreator } from '../../Redux/authReducer';
// import { headerAPI } from '../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount() {
  //   headerAPI.getAuth()
  //   .then( Response => {
  //       if (Response.data.resultCode === 0) {
  //         let {userId, email, login} = Response.data.data;
  //         this.props.setUserData(userId, email, login)
  //       }
  //       else if (Response.data.resultCode === 1) {
  //       }
  // } )

  this.props.getAuthThunkCreator();

}

  render () {
    return <Header {...this.props}/>
  }

}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
export default connect (mapStateToProps, {getAuthThunkCreator}) (HeaderContainer);
