import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import DiscoverScreen from './DiscoverScreen';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  userData: state.userState.userData,
  portals: state.portalState.portals,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen);
