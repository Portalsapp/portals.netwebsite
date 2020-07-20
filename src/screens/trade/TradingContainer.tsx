import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TradingScreen from './TradingScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { setUserData } from '../../actions/userStateActions';
import { UserData } from '../../reducers/types';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({});

/*@ts-ignore*/
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TradingScreen);
