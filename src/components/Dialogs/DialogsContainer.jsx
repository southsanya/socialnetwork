import { addMessageActionCreator, updateNewMessageTextContainer } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        messageSender: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (newMessage) => {
            dispatch(updateNewMessageTextContainer(newMessage))
        }
    }
}

const SuperDialogsContainer = connect( mapStateToProps , mapDispatchToProps ) (Dialogs);

export default SuperDialogsContainer;