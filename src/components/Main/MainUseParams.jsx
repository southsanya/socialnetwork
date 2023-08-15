import React from "react";
import { useParams } from "react-router-dom";
import MaincontentContainer from "./MaincontentContainer";

function MainUseParams() {
  let param = useParams();

  return (
    <MaincontentContainer param={param}/>
  )
}

export default MainUseParams;