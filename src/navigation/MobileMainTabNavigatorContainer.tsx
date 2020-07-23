import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MobileMainTabNavigator from './MobileMainTabNavigator';
import { setLoginStatus } from '../actions/appStateActions';
import { setUserData, setUserItems, setUserBankHistory } from '../actions/userStateActions';
import { setPortals } from '../actions/portalStateActions';
import { RootState } from '../reducers/index';
import { UserData, Portal, VirtualItem, BankHistory } from '../reducers/types';

const mapStateToProps = (state: RootState) => ({
  // App State
  signedIn: state.appState.signedIn,
  // User State
  userData: state.userState.userData,
  items: state.userState.items,
  bankHistory: state.userState.bankHistory,
  // Portal State
  portals: state.portalState.portals,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // App State
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    // User State
    setUserData: (userData: UserData) => dispatch(setUserData(userData)),
    setUserItems: (items: VirtualItem[]) => dispatch(setUserItems(items)),
    setUserBankHistory: (bankHistory: BankHistory[]) => dispatch(setUserBankHistory(bankHistory)),
    // Portal State
    setPortals: (portals: Portal[]) => dispatch(setPortals(portals)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMainTabNavigator);
