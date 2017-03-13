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
        <Route path="/api/session" component={ SessionFormContainer } />
        <Route path="/api/users" component={ SessionFormContainer } />
      </Route>


    </Router>
  </Provider>
);

export default Root;
