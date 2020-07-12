import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CreatePortalScreen from './CreatePortalScreen';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePortalScreen);
