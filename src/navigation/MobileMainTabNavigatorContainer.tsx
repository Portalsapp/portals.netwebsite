import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MobileMainTabNavigator from './MobileMainTabNavigator';
import { setLoginStatus } from '../actions/appStateActions';
import { setUserData } from '../actions/userStateActions';
import { setPortals } from '../actions/portalStateActions';
import { RootState } from '../reducers/index';
import { UserData, Portal } from '../reducers/types';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
  userData: state.userState.userData,
  portals: state.portalState.portals,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    setUserData: (userData: UserData) => dispatch(setUserData(userData)),
    setPortals: (portals: Portal[]) => dispatch(setPortals(portals)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMainTabNavigator);
