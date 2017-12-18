import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

 render() {
    return (
      <div className='header'>
      <div className='logo'>
        <h1 className='appName'>GitHired</h1>
        <div className='username'><em>{this.props.user.first_name} {this.props.user.last_name}</em></div>
        </div>
        <div className='links'>
          <Link className='navLink' to='/'>View Saved Jobs</Link>
          <Link className='navLink' to='/create'>Add New Job</Link>
          <span className='navLink' onClick={this.props.logout}>Log Out</span>
        </div>
      </div>
    )
  }

}

export default Header;
