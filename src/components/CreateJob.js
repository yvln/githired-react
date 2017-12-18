import React, {Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

// BrowserRouter, Route, Link, Switch

class CreateJob extends Component {

	constructor(props) {
		super(props);

		this.state = {
				searched_on: '',
				job_id: '',
				created_at: '',
				title: '',
				location: '',
				type: 'Full Time',
				description: '',
				how_to_apply: '',
				company: '',
				company_url: '',
				company_logo: '',
				url: '',
				contacted: 'No',
				contacted_on: '',
				contact_name: '',
				contact_email: '',
				contact_role: '',
				contact_number: '',
				applied: 'No',
				applied_on: '',
				notes: '',
				date_of_last_edit: '',

				isSubmitted: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit= this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(event) {
		event.preventDefault();

		axios.post("https://githiredpotoo.herokuapp.com/gitHired/create", {
				user_id: this.props.user.id,
				searched_on: this.state.searched_on,
				job_id: this.state.job_id,
				created_at: this.state.created_at,
				title: this.state.title,
				location: this.state.location,
				type: this.state.type,
				description: this.state.description,
				how_to_apply: this.state.how_to_apply,
				company: this.state.company,
				company_url: this.state.company_url,
				company_logo: this.state.company_logo,
				url: this.state.url,
				contacted: this.state.contacted,
				contacted_on: this.state.contacted_on,
				contact_name: this.state.contact_name,
				contact_email: this.state.contact_email,
				contact_role: this.state.contact_role,
				contact_number: this.state.contact_number,
				applied: this.state.applied,
				applied_on: this.state.applied_on,
				notes: this.state.notes,
				date_of_last_edit: new Date()
		}).then(response => {
			this.setState({
				isSubmitted: true
			})
		}).catch(err => {console.log('err', err)});
	}

	render() {
		return (
			<div className="makejob">

				{this.state.isSubmitted === true &&
					<Redirect to="/" />
				}

				{this.state.isSubmitted === false &&

					<form className="createForm" onSubmit={this.onSubmit}>

					<div className="jobInformation">
						<h3>Job Information</h3>

						<div className="jobinfo">
							<label htmlFor="companynew">Company:</label>
							<input className="createInput" id="companynew" type="text" name="company" value={this.state.company} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="titlenew">Job Title:</label>
							<input className="createInput" id="titlenew" type="text" name="title" value={this.state.title} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="titleidnew">Job ID:</label>
							<input className="createInput" id="titleidnew" type="text" name="job_id" value={this.state.job_id} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="locationnew">Location:</label>
							<input className="createInput" id="locationnew" type="text" name="location" value={this.state.location} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="typenew">Type of contract:</label>
								<select className="createSelect" id='typenew' name='type' value={this.state.type} onChange={this.onChange}>
									<option defaultValue='Full Time'>Full Time</option>
									<option value='Full Time and Part Time'>Full Time and Part Time</option>
								</select>
						</div>

						<div>
							<label htmlFor="descriptionnew">Description:</label>
							<input className="createInput" id="descriptionnew" type="text" name="description" value={this.state.description} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="linkjobnew">Link to Jobs Posting:</label>
							<input className="createInput" id="linkjobnew" type="text" name="url" value={this.state.url} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="datepostnew">Date of job posting:</label>
							<input className="createInput" id="datepostnew" type="date" name="created_at" value={this.state.created_at} onChange={this.onChange}/>
						</div>
						</div>

						<div className="jobsContinued">
						<div >
							<label htmlFor="howtoapplynew">Link to Application:</label>
							<input className="createInput" id="howtoapplynew" type="text" name="how_to_apply" value={this.state.how_to_apply} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="companyurlnew">Company URL:</label>
							<input className="createInput" id="companyurlnew" type="text" name="company_url" value={this.state.company_url} onChange={this.onChange}/>
						</div>

						<div>


							<label htmlFor="companylogonew">Company Logo:</label>
							<input className="createInput" id="companylogonew" type="text" name="company_logo" value={this.state.company_logo} onChange={this.onChange}/>

						</div>

						<div>
							<label htmlFor="searchedonnew">Searched On:</label>
							<input className="createInput" id="searchedonnew" type="date" name="searched_on" value={this.state.searched_on} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="appliednew">Applied: </label>
							<select id='appliednew' name='applied' value={this.state.applied} onChange={this.onChange}>
								<option defaultValue='No'>No</option>
								<option value='Yes'>Yes</option>
							</select>
						</div>

						<div>
							<label htmlFor="appliedonnew">Applied On:</label>
							<input className="createInput" id="appliedonnew" type="date" name="applied_on" value={this.state.applied_on} onChange={this.onChange}/>
						</div>

					</div>


						<div className="contactInformation">
							<h3>Contact Information</h3>

						<div className = "contact">
							<label htmlFor="namenew">Contact Name:</label>
							<input className="createInput" id="namenew" type="text" name="contact_name" value={this.state.contact_name} onChange={this.onChange}/>
						</div>

						<div>

							<label htmlFor="phonenumbernew">Contact Phone Number:</label>
							<input className="createInput" id="phonenumbernew" type="text" name="contact_number" value={this.state.contact_number} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="emailnew">Contact Email:</label>
							<input className="createInput" id="emailnew" type="text" name="contact_email" value={this.state.contact_email} onChange={this.onChange}/>

						</div>

						<div>
							<label htmlFor="rolecontactnew">Contact Role:</label>
							<input className="createInput" id="rolecontactnew" type="text" name="contact_role" value={this.state.contact_role} onChange={this.onChange}/>
						</div>

						<div>
							<label htmlFor="contactednew">Contacted: </label>
								<select id='contactednew' name='contacted' value={this.state.contacted} onChange={this.onChange}>
									<option defaultValue='No'>No</option>
									<option value='Yes'>Yes</option>
								</select>
						</div>

						<div>
							<label htmlFor="contactedonnew">Contacted On:</label>
							<input className="createInput" id="contactedonnew" type="date" name="contacted_on" value={this.state.contacted_on} onChange={this.onChange}/>
						</div>

						<div className="notesCreate">
							<label htmlFor="notesnew">Notes:</label>
							<textarea id="notesnew" type="text" name="notes" value={this.state.notes} onChange={this.onChange} cols="40" rows="8" />
						</div>

						<div className="divSubmitButton">
							<input className="submitButtonCreate" type="submit" value="Submit"/>
						</div>

						</div>
					</form>
				}

			</div>

			)
	}

}

export default CreateJob;
