import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import HomeScreen from './HomeScreen';
import { RootState } from '../../reducers/index';
import { BankHistory } from '../../reducers/types';
import { setUserBankHistory } from '../../actions/userStateActions';

const mapStateToProps = (state: RootState) => ({
  userData: state.userState.userData,
  bankHistory: state.userState.bankHistory,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserBankHistory: (tradeHistory: BankHistory[]) =>
      dispatch(setUserBankHistory(tradeHistory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
