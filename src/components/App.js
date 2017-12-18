import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import '../App.css';
import axios from 'axios';
import Cookies from '../helpers/Cookies';

import UserAuth from './UserAuth';
import Content from './Content';
import Header from './Header';
import ViewOne from './ViewOne';
import CreateJob from './CreateJob';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: false,
      mode: 'loading',
      url: 'https://githiredpotoo.herokuapp.com',
      logout: 'yes'
    }
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  componentDidMount(){
    this.initUser();
  }

  initUser(){
    const token = Cookies.get('token');

    if(token && token !== ''){
      axios.get(`${this.state.url}/users/validate`, {
        params: {auth_token: token}})
        .then(res => {
          this.setState({user: res.data, mode: 'content', logout: 'no'});
        })
        .catch(err => {
          Cookies.set('token', '')
          this.setState({user: false, mode: 'auth'});
        })
    } else {
      this.setState({mode: 'auth'});
    }
  }

  setUser(user){
    Cookies.set('token', user.token);
    this.setState({user: user, mode: 'content', logout: 'no'});
  }

  logout(){
    Cookies.set('token', '');
    this.setState({user: false, mode: 'auth', logout: 'yes'});
  }

  renderView(){
    if (( this.state.mode === 'loading') && (this.state.logout === 'yes')) {
      return(
        <div className="loading">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/8b/a8/ce/8ba8ce24910d7b2f4c147359a82d50ef.gif"
            alt="loading" />
        </div>
      )
    } else if ((this.state.mode === 'auth') && (this.state.logout === 'yes')) {
      return (
        <UserAuth
          setUser={this.setUser.bind(this)}
          url={this.state.url}
        />
      )
    } else if ((this.state.mode === 'content') && (this.state.logout === 'no')) {
      return (
        <Content
          user={this.state.user} />
      )
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            {this.state.logout === 'yes' &&
              <div className="App">
                {window.location.pathname !== "/" &&
                  <Redirect to="/" />
                }
                <Route exact path="/"
                        render= {this.renderView}
                        />
              </div>
            }

            {this.state.logout === 'no' &&
              <div className="App">
                  {this.state.mode === 'content' &&
                     <Header user={this.state.user}
                           logout={this.logout}
                           />
                  }
                  <Route exact path="/"
                          render= {this.renderView}
                          />
                  <Route exact path="/ViewOne/:id"
                         component= {ViewOne}
                         />

                  <Route exact path="/create"
                         render= { () =>
                          <CreateJob user={this.state.user} />
                         }
                        />
                </div>
              }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
