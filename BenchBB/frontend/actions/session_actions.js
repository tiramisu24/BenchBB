import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  currentUser: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = (error) => ({
  errors: RECEIVE_ERRORS,
  error
})

export const login = (user) => dispatch => (
  APIUtil.login(user).then(logged_user => dispatch(receiveCurrentUser(logged_user))).fail(errors => dispatch(receiveErrors(errors)))
)

export const signup = (user) => dispatch => (
  APIUtil.singup(user).then(new_user => dispatch(receiveCurrentUser(new_user)))
  .fail(errors => dispatch(receiveErrors(errors)))
)

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
  .fail(errors => dispatch(receiveErrors(errors)))
)
