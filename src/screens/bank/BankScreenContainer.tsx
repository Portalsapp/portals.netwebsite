import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import BankScreen from './BankScreen';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  // User State
  userData: state.userState.userData,
  items: state.userState.items,
  // Portal State
  portals: state.portalState.portals,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BankScreen);
