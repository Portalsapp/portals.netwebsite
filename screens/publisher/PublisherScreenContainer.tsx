import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import PublisherScreen from './PublisherScreen';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublisherScreen);
