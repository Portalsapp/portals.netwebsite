import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MobileMainTabNavigator from './MobileMainTabNavigator';
import { setLoginStatus } from '../actions/appStateActions';
import { setUserData, setUserItems } from '../actions/userStateActions';
import { setPortals } from '../actions/portalStateActions';
import { RootState } from '../reducers/index';
import { UserData, Portal, VirtualItem } from '../reducers/types';

const mapStateToProps = (state: RootState) => ({
  // App State
  signedIn: state.appState.signedIn,
  // User State
  userData: state.userState.userData,
  items: state.userState.items,
  // Portal State
  portals: state.portalState.portals,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    setUserData: (userData: UserData) => dispatch(setUserData(userData)),
    setPortals: (portals: Portal[]) => dispatch(setPortals(portals)),
    setUserItems: (items: VirtualItem[]) => dispatch(setUserItems(items)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMainTabNavigator);
