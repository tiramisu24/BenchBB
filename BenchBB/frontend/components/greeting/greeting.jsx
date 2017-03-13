import React from 'react';
import {Link} from 'react-router';
class Greeting extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let currUser = this.props.currentUser
    let greeting = <div></div>
    if(!!currUser){
      greeting = <div>
        <h2>
          Welcome {currUser.username}
        </h2>
        <Button title="Log Out" onPress={this.props.logout()}/>
      </div>
    }else {
      greeting = <div>
        <Link to="/api/session">Log In</Link>
        <Link to="/api/users">Sign Up</Link>

      </div>
    }

    return greeting;

  }
}
export default Greeting;
