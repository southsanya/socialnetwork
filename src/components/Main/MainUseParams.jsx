import React from "react";
// import Maincontent from "./Maincontent";
// import axios from 'axios';
// import { connect } from "react-redux";
// import { setUserProfile } from "../../Redux/maincontentReducer";
import { useParams } from "react-router-dom";
import MaincontentContainer from "./MaincontentContainer";

function MainUseParams() {
  let param = useParams();

  return (
    <MaincontentContainer param={param}/>
  )
}

export default MainUseParams;