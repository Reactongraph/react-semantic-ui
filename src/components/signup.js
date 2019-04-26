import React from 'react';
import {
	Button,
	Container,
	Header,
	Segment,
	Grid,
	Input
} from 'semantic-ui-react'
import '../App.css';
import * as CommonHelper from "../utils";
import ErrorMessage from './errorMessage'

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			email: '',
			password: '',
			errorMessage: '',
			showEmailError: '',
			showPasswordError: '',
			confirmPassword: false,
			showConfirmError: ''
		};
	}

	_handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
		if (e.target.name === 'email') {
			let validEmail = CommonHelper.isValidEmail(e.target.value);
			if (validEmail === false) {
				this.setState({ showEmailError: 'Email is wrong' })
			}
			else { this.setState({ showEmailError: '' })}
		}
		if (e.target.name === 'password') {
			let validPassword = CommonHelper.isValidPassword(e.target.value);
			if (validPassword === false) {
				this.setState({ showPasswordError: 'Wrong password', confirmPassword: false })
			}
			else { this.setState({ showPasswordError: '', confirmPassword: true })}
		}
		if (e.target.name === 'confirmPassword') {
			let samePassword = CommonHelper.isSamePassword(this.state.password, e.target.value);
			if (samePassword.status === false) {
				this.setState({ showConfirmError: samePassword.message })
			}
			else { 
				this.setState({ showConfirmError: '' })}
		}
	}

	_handleSubmit = () => {
		let validateSignup = CommonHelper.isValidSignup(this.state);
		if (validateSignup.status === false) {
			this.setState({ errorMessage: validateSignup.message })
		}
		else { this.setState({ errorMessage: '' }) }
	}

	_checkDisable = (confirmPassword) => {
		if (confirmPassword === false) {
			return true
		}
		else {
			return false
		};
	}

	render() {
		return (
			<Segment inverted className="Login_height">
				<Container className="margin_top">
					<Header content="Signup" as="h1" inverted />
					<Grid>
						<Grid.Row columns={2}>
							<Grid.Column>
								<Header content="First Name" as='h5' className="signup_label" />
								<Input placeholder='Enter First Name' size='large' name="firstName" onChange={(e) => this._handleChange(e)} />
							</Grid.Column>
							<Grid.Column>
								<Header content="Last Name" as='h5' className="signup_label" />
								<Input placeholder='Enter Last Name' size='large' name="lastName" onChange={(e) => this._handleChange(e)} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={2}>
							<Grid.Column>
								<Header content="Email" as='h5' className="signup_label" />
								<Input placeholder='Enter Email' size='large' name="email" onChange={(e) => this._handleChange(e)} />
								{this.state.showEmailError && <ErrorMessage message={this.state.showEmailError} />}
							</Grid.Column>
							<Grid.Column>
								<Header as='h5' className="signup_label">Password <a href="#" data-toggle="tooltip" data-placement="bottom" title="Atleast 8 characters. One capital letter, one number and one special character"><i className="fas fa-info-circle"></i></a></Header>
								<Input type="password" placeholder='Enter Password' size='large' name="password" onChange={(e) => this._handleChange(e)} />
								{this.state.showPasswordError && <ErrorMessage message={this.state.showPasswordError} />}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={2}>
							<Grid.Column>
								<Header content="Confirm Password" as='h5' className="signup_label" />
								<Input disabled={this._checkDisable(this.state.confirmPassword)} className={this.state.confirmPassword ? '' : "disable"} type="password" placeholder='Confirm password' size='large' name="confirmPassword" onChange={(e) => this._handleChange(e)} />
								{this.state.showConfirmError !== "" && <ErrorMessage message={this.state.showConfirmError} />}
							</Grid.Column>
							<Grid.Column>
								<Header content="Contact" as='h5' className="signup_label" />
								<Input placeholder='Mobile Number' size='large' name="contact" onChange={(e) => this._handleChange(e)} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={2}>
							<Grid.Column>
								<Button content="Sign up" size="large" primary className="submit_btn" onClick={this._handleSubmit} />
							</Grid.Column>
							<Grid.Column>
								{this.state.errorMessage !== "" && <ErrorMessage message={this.state.errorMessage} />}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		)
	}
}

export default Signup;