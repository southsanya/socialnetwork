import React from "react";
import Maincontent from "./Maincontent";
import { connect } from "react-redux";
import { GetMainThunkCreator, GetStatusThunkCreator, UpdateStatusThunkCreator } from "../../Redux/maincontentReducer";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";

class MaincontentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.param['*'] ? this.props.param['*'] : '29458';

    this.props.GetMainThunkCreator(userId);
    setTimeout(() => {
      this.props.GetStatusThunkCreator(userId);
    }, 1000)


    debugger;


  }

  render() {

    return <Maincontent {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.UpdateStatusThunkCreator} />

  }

}

// let authRedirectComponent = withAuthRedirect(MaincontentContainer);



let mapStateToProps = (state) => ({
  profile: state.maincontent.profile,
  status: state.maincontent.status
})
// export default connect(mapStateToProps, { GetMainThunkCreator })(authRedirectComponent);

export default compose(
  connect(mapStateToProps, { GetMainThunkCreator, GetStatusThunkCreator, UpdateStatusThunkCreator }),
  withAuthRedirect
)(MaincontentContainer);