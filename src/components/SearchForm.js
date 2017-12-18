import React, {Component} from 'react';
// import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'; -- react warnings
import axios from 'axios';

class SearchForm extends Component {

	constructor(props) {
		super(props);

    this.state = {
      jobDescription: '',
      full_time: 'true',
      jobLocation: ''
      }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	}

  onChange(e) {
		this.setState({
      [e.target.name]: e.target.value
		})
	}

	onSubmit(event) {
		event.preventDefault();
		axios.post('https://githiredpotoo.herokuapp.com/gitHired/search', {
			jobDescription: this.state.jobDescription,
      full_time: this.state.full_time,
      jobLocation: this.state.jobLocation,
      country: this.state.country
		}).then(response => {
			this.props.results(response);
		});
	}

	render() {
		return (

			<div className ='searchView'>

			<div className='searchForm'>

					<form className='searchInputs' onSubmit={this.onSubmit}>

							<div className="searchTitle">Search:</div>

							<div className='divSearchBar'>
							<div><label htmlFor='titlesearch'>Job Title:</label></div>
						<div><input placeholder="Title" className='searchBar' type='text' name='jobDescription' value={this.state.jobDescription} onChange={this.onChange}/></div>
							</div>

							<div className='divSearchBar'>
							<div><label htmlFor='locationsearch'>City:</label></div>
						<div><input placeholder="Location" className='searchBar' id='locationsearch' type='text' name='jobLocation' value={this.state.jobLocation} onChange={this.onChange}/></div>
							</div>

							<div className='divSearchBar'>
							<div><label htmlFor='typesearch'>Type:</label></div>
							<select className='select-values' name='full_time' value={this.state.full_time} onChange={this.onChange}>
								<option defaultValue='true'>Full Time</option>
								<option value='false'>Full Time and Part Time</option>
							</select>
							</div>

							{/*<div>
							<label htmlFor='countrysearch'>Country:</label>
							<select className='select-values' id='countrysearch' name='country' value={this.state.country} onChange={this.onChange}>
								<option defaultValue='us'>United States</option>
								<option value='gb'>United Kingdom</option>
								<option value='au'>Australia</option>
								<option value='at'>Austria</option>
								<option value='br'>Brazil</option>
								<option value='ca'>Canada</option>
								<option value='de'>Germany</option>
								<option value='fr'>France</option>
								<option value='in'>India</option>
								<option value='it'>Italy</option>
								<option value='nl'>Netherlands</option>
								<option value='nz'>New Zealand</option>
								<option value='pl'>Poland</option>
								<option value='ru'>Russia</option>
								<option value='sg'>Singapore</option>
								<option value='za'>South Africa</option>
							</select>
							</div>*/}
							<div className='divSearchBar'>
								<div><input className="submitButton" type='submit' value='Submit' /></div>
							</div>

					</form>

			</div>

			</div>

			)
		}
	}

export default SearchForm;
