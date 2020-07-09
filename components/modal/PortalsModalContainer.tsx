import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PortalsModal from './PortalsModal';
import { setLoginStatus, setModalVisbility } from '../../actions/appStateActions';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  // modalVisible: state.appState.modalVisible,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // setLoginStatus: (loginStatus: boolean) =>
    //   dispatch(setLoginStatus(loginStatus)),
    // setModalVisbility: (modalVisbility: boolean) =>
    //   dispatch(setModalVisbility(modalVisbility)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalsModal);
