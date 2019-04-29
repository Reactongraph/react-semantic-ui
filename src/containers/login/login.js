import React from "react";
import {
	Button,
	Header,
	Grid,
	Input
} from 'semantic-ui-react'
import ErrorMessage from '../../components/errorMessage'

const Login = (props) => (
	<Grid>
		<Grid.Row columns={2}>
			<Grid.Column className="login_field">
				<Header content="Email" as='h5' className="login_label" />
				<Input placeholder='Enter email' name="email" className="login_input" onChange={(e) => props._handleChange(e)} />
			</Grid.Column>
			<Grid.Column className="login_field">
				<Header content="password" as='h5' className="login_label" />
				<Input placeholder='Enter your password' type="password" name="password" className="login_input" onChange={(e) => props._handleChange(e)} />
			</Grid.Column>
		</Grid.Row>
		<Grid.Row columns={2}>
			<Grid.Column>
				<Button content="Log in" size="large" primary className="submit_btn" onClick={props._handleSubmit} />
			</Grid.Column>
			<Grid.Column>
				{props.errorMessage !== "" && <ErrorMessage message={props.errorMessage} />}
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export default Login;