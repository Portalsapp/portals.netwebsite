import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MainStack from './MainStack';
import { setLoginStatus } from '../actions/appStateActions';
import { setUserData } from '../actions/userStateActions';
import { RootState } from '../reducers/index';
import { UserData } from '../reducers/types';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
  userData: state.userState.userData,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    setUserData: (userData: UserData) =>
      dispatch(setUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainStack);
