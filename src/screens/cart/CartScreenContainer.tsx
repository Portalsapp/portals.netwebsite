import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CartScreen from './CartScreen';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
