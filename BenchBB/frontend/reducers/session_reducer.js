import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions'
import merge from 'lodash/merge'

const initalState = {
    currentUser: null,
    errors: ["Invalid credentials"]

}

const SessionReducer = (state = initalState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser
      newState.errors = []
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, action.errors);
    default:
      return newState;
  }
}

export default SessionReducer;
