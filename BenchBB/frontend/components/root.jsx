import React from 'react';
import { Provider } from 'react-redux';
import App from './app'
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/api/session" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/api/users" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
      </Route>


    </Router>
  </Provider>
);

const _redirectIfLoggedIn = (nextState, replace) => {
  if(window.store.getState().session.currentUser) {
    return replace('/');
  };
};

export default Root;
