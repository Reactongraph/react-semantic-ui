import React from 'react';
import {
	Container,
	Header,
	Segment,
} from 'semantic-ui-react';
import '../../App.css';
import * as CommonHelper from "../../utils";
import Login from './login';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: ''
		}
	}
	_handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	_handleSubmit = () => {
		let validateLogin = CommonHelper.isValidLogin(this.state);
		if (validateLogin.status === false) {
			this.setState({ errorMessage: validateLogin.message })
		}
		else { this.setState({ errorMessage: '' }) }
	}

	render() {
		return (
			<Segment inverted className="Login_page_height">
				<Container className="margin_top">
					<Header content="Login" as="h1" inverted />
					<Login {...this.state}
						_handleChange={this._handleChange}
						_handleSubmit={this._handleSubmit}
					/>
				</Container>
			</Segment>
		)
	}
}

export default Index