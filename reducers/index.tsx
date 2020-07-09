import { combineReducers } from 'redux';
import appStateReducer from './appStateReducer';
import userStateReducer from './userStateReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
  userState: userStateReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
