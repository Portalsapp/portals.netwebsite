import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from './Header';
import { setLoginStatus } from '../../actions/appStateActions';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
  userData: state.userState.userData,
});

/*@ts-ignore*/
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
