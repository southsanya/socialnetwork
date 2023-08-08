import React from "react";
import Maincontent from "./Maincontent";
import { connect } from "react-redux";
import { GetMainThunkCreator, GetStatusThunkCreator, UpdateStatusThunkCreator, SavePhotoThunkCreator, SaveProfileInfoThunkCreator } from "../../Redux/maincontentReducer";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";




class MaincontentContainer extends React.Component {

  refresherProfile() {
    let userId = this.props.param['*'] ? this.props.param['*'] : '29458';

    this.props.GetMainThunkCreator(userId);
    setTimeout(() => {
      this.props.GetStatusThunkCreator(userId);
    }, 1000)
  }
  catchAllUnhandledError = (promiseRejectionEvent) => {

  }
  componentDidMount() {
    this.refresherProfile();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledError() )
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledError() )

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.param['*'] != prevProps.param['*']) {
      this.refresherProfile();
    }
  }

  render() {

    return <Maincontent
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.UpdateStatusThunkCreator}
      savePhoto={this.props.SavePhotoThunkCreator}
      saveProfile={this.props.SaveProfileInfoThunkCreator}
      isOwner={this.props.param['*']}
    />

  }

}

// let authRedirectComponent = withAuthRedirect(MaincontentContainer);



let mapStateToProps = (state) => ({
  profile: state.maincontent.profile,
  status: state.maincontent.status,
})
// export default connect(mapStateToProps, { GetMainThunkCreator })(authRedirectComponent);

export default compose(
  connect(mapStateToProps, { GetMainThunkCreator, GetStatusThunkCreator, UpdateStatusThunkCreator, SavePhotoThunkCreator, SaveProfileInfoThunkCreator }),
  withAuthRedirect
)(MaincontentContainer);