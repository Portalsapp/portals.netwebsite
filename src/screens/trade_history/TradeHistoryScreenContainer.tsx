import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TradeHistoryScreen from './TradeHistoryScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  // App State
  signedIn: state.appState.signedIn,
  // User State
  bankHistory: state.userState.bankHistory,
  userData: state.userState.userData,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistoryScreen);
