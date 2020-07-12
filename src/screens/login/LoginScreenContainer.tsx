import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import LoginScreen from './LoginScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { setUserData } from '../../actions/userStateActions';
import { UserData } from '../../reducers/types';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
});

/*@ts-ignore*/
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) => dispatch(setLoginStatus(loginStatus)),
    setUserData: (userData: UserData) => dispatch(setUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
