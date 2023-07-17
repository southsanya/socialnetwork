import { addMessageActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        messageSender: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);