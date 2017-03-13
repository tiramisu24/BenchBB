import React from 'react';
import {Link, hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateUsername = this.updateUsername.bind(this);
      this.updatePassword = this.updatePassword.bind(this);

  }
  updateUsername(e){
    this.setState({username: e.target.value});
  }
  updatePassword(e){
    this.setState({password: e.target.value});
  }
  redirect(path){
    hashHistory.push(path);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect("/"));
  }
  render(){
    let input_form = <div></div>
    let show_errors = <div></div>
    if(this.props.loggedIn) return null;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{JSON.parse(er)}</li>
      ))
    }

    if(this.props.formType === "login"){
    input_form = <div>
        <header>Log In</header>
        <Link to='/api/users'>Sign Up</Link>
      </div>
    }else {
    input_form = <div>
        <header>Sign Up</header>
        <Link to='/api/session'>Log In</Link>
      </div>
    }
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <ul>
          {show_errors}
        </ul>
        {input_form}
        <label>Username
          <input type="text" onChange={this.updateUsername}/>
        </label>
        <label>Password
          <input type="password" onChange={this.updatePassword}/>
        </label>
        <input type="submit" ></input>
      </form >
    )
  }
}

export default SessionForm;
