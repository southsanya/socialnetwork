import React from "react";
import Maincontent from "./Maincontent";
// import axios from 'axios';
import { connect } from "react-redux";
import { GetMainThunkCreator } from "../../Redux/maincontentReducer";
import { Navigate } from "react-router-dom";
// import { mainAPI } from "../../api/api";
// import { useParams } from "react-router-dom";

class MaincontentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.param['*']? this.props.param['*'] : '2';

    // debugger;

    this.props.GetMainThunkCreator(userId);

    // mainAPI.getMain(userId)
    // .then( Response => {
    // this.props.setUserProfile(Response.data); 

    // } )
}


  render() {
    if(this.props.isAuth === false) return <Navigate to={'/login'}/>
    return (
      <Maincontent { ...this.props } profile={this.props.profile} />
    )
  }

}

let mapStateToProps = (state) => ({
  profile : state.maincontent.profile,
  isAuth : state.auth.isAuth
})



export default connect (  mapStateToProps , {GetMainThunkCreator} ) (MaincontentContainer);
