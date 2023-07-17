import { addPostActionCreator } from '../../../Redux/maincontentReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    maincontent: state.maincontent
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: (newPost) => {
      dispatch( addPostActionCreator(newPost) )
    }
  }
}

const SuperMyPostsContainer = connect ( mapStateToProps , mapDispatchToProps ) (MyPosts) 

export default SuperMyPostsContainer;
