import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TradeHistoryScreen from './TradeHistoryScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { RootState } from '../../reducers/index';
import { BankHistory } from '../../reducers/types';
import { setUserTradeHistory } from '../../actions/userStateActions';

const mapStateToProps = (state: RootState) => ({
  // App State
  signedIn: state.appState.signedIn,
  // User State
  userData: state.userState.userData,
  bankHistory: state.userState.bankHistory,
  tradeHistory: state.userState.tradeHistory,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    setUserTradeHistory: (tradeHistory: BankHistory[]) =>
      dispatch(setUserTradeHistory(tradeHistory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistoryScreen);
