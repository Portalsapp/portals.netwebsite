import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import HomeScreen from './HomeScreen';
import { RootState } from '../../reducers/index';
import { BankHistory } from '../../reducers/types';
import { setUserBankHistory, setGlobalTransactionHistory } from '../../actions/userStateActions';

const mapStateToProps = (state: RootState) => ({
  homeFeedState: state.appState.homeFeedState,
  userData: state.userState.userData,
  bankHistory: state.userState.bankHistory,
  globalTransactionFeed: state.userState.globalTransactionFeed,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserBankHistory: (tradeHistory: BankHistory[]) =>
      dispatch(setUserBankHistory(tradeHistory)),
    setGlobalTransactionHistory: (transactionFeed: BankHistory[]) =>
      dispatch(setGlobalTransactionHistory(transactionFeed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
