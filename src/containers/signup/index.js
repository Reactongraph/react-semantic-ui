import React from 'react';
import {
	Button,
	Container,
	Header,
	Segment,
	Grid,
	Input
} from 'semantic-ui-react'
import '../../App.css';
import * as CommonHelper from "../../utils";
import ErrorMessage from '../../components/errorMessage';
import Signup from './signup'

class Index extends React.Component {
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
			else { this.setState({ showEmailError: '' }) }
		}
		if (e.target.name === 'password') {
			let validPassword = CommonHelper.isValidPassword(e.target.value);
			if (validPassword === false) {
				this.setState({ showPasswordError: 'Wrong password', confirmPassword: false })
			}
			else { this.setState({ showPasswordError: '', confirmPassword: true }) }
		}
		if (e.target.name === 'confirmPassword') {
			let samePassword = CommonHelper.isSamePassword(this.state.password, e.target.value);
			if (samePassword.status === false) {
				this.setState({ showConfirmError: samePassword.message })
			}
			else {
				this.setState({ showConfirmError: '' })
			}
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
					<Signup {...this.state}
						_handleChange={this._handleChange}
						_handleSubmit={this._handleSubmit}
						_checkDisable={this._checkDisable}
					/>
				</Container>
			</Segment>
		)
	}
}

export default Index;