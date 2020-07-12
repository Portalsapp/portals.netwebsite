import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SettingsScreen from './SettingsScreen';
import { setLoginStatus } from '../../actions/appStateActions';
import { setUserData } from '../../actions/userStateActions';
import { UserData } from '../../reducers/types';
import { RootState } from '../../reducers/index';

const mapStateToProps = (state: RootState) => ({
  userData: state.userState.userData,
});

/*@ts-ignore*/
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserData: (userData: UserData) => dispatch(setUserData(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
