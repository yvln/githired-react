import React, {Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component {

 render() {
    return (
      <div className="header">
        <div className="header-identity">
          <div className="header-left">
            <h1 className="header-title">GitHired</h1>
          </div>
          <div className="header-right">
            <div className="header-username">{this.props.user.first_name} {this.props.user.last_name}</div>
            <div className="header-logout" onClick={this.props.logout}>LOG OUT</div>
          </div>
        </div>
        <div className="header-nav">
          <Link className="navLink" to="/">VIEW SAVED JOBS</Link>
          <Link className="navLink" to="/create">ADD NEW JOB</Link>
        </div>
      </div>
    )
  }

}

export default Header;
