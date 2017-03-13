import {connect} from 'react-redux';
import {signup, login, logout} from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser,
  errors: ownProps.errors,
  formType: (ownProps.location.pathname.includes('session') ? "login" : "signup")
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (currentUser) => dispatch(ownProps.formType.includes('login') ?
                              login(currentUser) : signup(currentUser)),
  logout: () => dispatch(logout())
})

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SessionFormContainer;
