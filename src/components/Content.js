import React, { Component } from 'react';
import { Link } from "react-router-dom";
// remved BrowserRouter, Route, -- react warning no unused vars

import SearchForm from './SearchForm';
import ViewSavedData from './ViewSavedData';
import ViewResults from './ViewResults';

class Content extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 'savedData',
      submitResults: {}
    }

    this.getResults = this.getResults.bind(this);
    this.goBackToSavedData = this.goBackToSavedData.bind(this);
  }

  getResults(results){
    this.setState({
      submitResults: results,
      mode: 'viewResults'
    })
  }

  goBackToSavedData() {
    this.setState({
      mode: 'savedData'
    })
  }

  render() {
    return(
        <div className="content" key={Math.random()*5}>

          <SearchForm
            results={this.getResults} />

          {this.state.mode === 'savedData' &&
              <ViewSavedData
                user={this.props.user} />
          }

          {this.state.mode === 'viewResults' &&
              <ViewResults
                user={this.props.user}
                submitResults={this.state.submitResults}
                goBack={this.goBackToSavedData} />
          }
          
      </div>
    )
  }
}

export default Content;
