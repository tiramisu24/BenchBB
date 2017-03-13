import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: SessionReducer
});
// const rootReducer = () => {}
export default rootReducer;
