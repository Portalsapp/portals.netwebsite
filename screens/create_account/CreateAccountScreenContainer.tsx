import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CreateAccount from './CreateAccountScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { setUserData } from '../../actions/userStateActions';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
});

/*@ts-ignore*/
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
    setUserData: (userData: { displayName: string }) =>
      dispatch(setUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
