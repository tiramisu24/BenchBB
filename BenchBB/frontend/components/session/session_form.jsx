import React from 'react';
import {Link} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit.bind(this);
  }
  updateUsername(e){
    return () => {this.setState({username: e.target.value})}
  }
  updatePassword(e){
    return () => {this.setState({password: e.target.value})}
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }
  render(){
    let input_form = <div></div>
    let show_errors = <div></div>
    // debugger;
    if(this.props.loggedIn) return null;
    if(!!this.props.errors){
      show_errors = this.props.errors.map((er,idx) => (
        <li key={idx}>{JSON.parse(er)}</li>
      ))
    }

    if(this.formType === "login"){
      <div>
        <header>Log In</header>
        <Link to='/api/users'>Sign Up</Link>
      </div>
    }else {
      <div>
        <header>Sign Up</header>
        <Link to='/api/session'>Log In</Link>
      </div>
    }

    return (
      <form className="session-form" onSubmit={this.handleSubmit()}>
        <ul>
          {show_errors}
        </ul>
        {input_form}
        <label>Username
          <input type="text" onChange={this.updateUsername(e)}/>
        </label>
        <label>Password
          <input type="password" onChange={this.updatePassword(e)}/>
        </label>
      </form >
    )
  }
}

export default SessionForm;
