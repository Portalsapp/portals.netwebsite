import { combineReducers } from 'redux';
import appStateReducer from './appStateReducer';
import userStateReducer from './userStateReducer';
import portalStateReducer from './portalStateReducer';
import publisherStateReducer from './publisherStateReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
  userState: userStateReducer,
  portalState: portalStateReducer,
  publisherState: publisherStateReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
