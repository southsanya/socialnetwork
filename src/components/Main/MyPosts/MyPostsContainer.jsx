// import React, { useContext } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/maincontentReducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    maincontent: state.maincontent
  }
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    onPostChange: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
      addPost: () => {
      dispatch( addPostActionCreator() )
    }
  }
}

const SuperMyPostsContainer = connect ( mapStateToProps , mapDispatchToProps ) (MyPosts) 

export default SuperMyPostsContainer;
