import React, { Component } from 'react';
import axios from 'axios';

// login component
// this will render when the user auth mode is set to login
class Login extends Component {
  constructor(){
    super();
    // set default state
    this.state = {
      // we have 2 inputs that we will be changing
      inputs: {
        email: '',
        password: ''
      }
    }
  }

  // method to log in
  login(e){
    e.preventDefault(); // prevent default form action
    // send request to make sure the email and password are correct
    axios.post(`${this.props.url}/login`, this.state.inputs)
      .then(res => { // set the user based off of the response
        this.props.setUser(res.data);
      })
  }

  // method to change an input
  changeInput(e, input){
    const val = e.target.value;
    this.setState(prev => { // sets the state for that input to the value
      prev.inputs[input] = val;
      return prev;
    });
  }

  render(){
    return(
      <div>
      <div className='loginBackground'>
      </div>
      <section>
      <div className="auth-form">
        <div className='loginHead'><h1>GitHired</h1></div>
        
        <form className='loginForm' onSubmit={this.login.bind(this)}>
          <label htmlFor='email'>Email:</label>
          <input className='searchBar' value={this.state.inputs.email}
            id='email' name='email' type='email'
            onChange={e => this.changeInput(e, 'email')}
          />

          <label htmlFor='password'>Password:</label>
          <input className='searchBar' value={this.state.inputs.password}
            id='password' name='password' type='password'
            onChange={e => this.changeInput(e, 'password')}
          />

          <div className="form-buttons">
            <button type="submit" className="login-form-button">Log In</button>
            <button onClick={this.props.toggleMode} className="login-form-button">Sign Up</button>
          </div>
        </form>
      </div>
      </section>
      </div>
    )
  }
}
export default Login;
