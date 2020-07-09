import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import index from './index';
import { setLoginStatus, setModalVisbility } from '../actions/appStateActions';
import { RootState } from '../reducers/index';

const mapStateToProps = (state: RootState) => ({
  signedIn: state.appState.signedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoginStatus: (loginStatus: boolean) =>
      dispatch(setLoginStatus(loginStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
