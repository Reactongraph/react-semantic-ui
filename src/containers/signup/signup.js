import React from "react";
import {
	Button,
	Header,
	Grid,
	Input
} from 'semantic-ui-react'
import ErrorMessage from '../../components/errorMessage'

const Signup = (props) => (
	<Grid>
		<Grid.Row columns={2}>
			<Grid.Column>
				<Header content="First Name" as='h5' className="signup_label" />
				<Input placeholder='Enter First Name' size='large' name="firstName" onChange={(e) => props._handleChange(e)} />
			</Grid.Column>
			<Grid.Column>
				<Header content="Last Name" as='h5' className="signup_label" />
				<Input placeholder='Enter Last Name' size='large' name="lastName" onChange={(e) => props._handleChange(e)} />
			</Grid.Column>
		</Grid.Row>
		<Grid.Row columns={2}>
			<Grid.Column>
				<Header content="Email" as='h5' className="signup_label" />
				<Input placeholder='Enter Email' size='large' name="email" onChange={(e) => props._handleChange(e)} />
				{props.showEmailError && <ErrorMessage message={props.showEmailError} />}
			</Grid.Column>
			<Grid.Column>
				<Header as='h5' className="signup_label">Password <a href="#" data-toggle="tooltip" data-placement="bottom" title="Atleast 8 characters. One capital letter, one number and one special character"><i className="fas fa-info-circle"></i></a></Header>
				<Input type="password" placeholder='Enter Password' size='large' name="password" onChange={(e) => props._handleChange(e)} />
				{props.showPasswordError && <ErrorMessage message={props.showPasswordError} />}
			</Grid.Column>
		</Grid.Row>
		<Grid.Row columns={2}>
			<Grid.Column>
				<Header content="Confirm Password" as='h5' className="signup_label" />
				<Input disabled={props._checkDisable(props.confirmPassword)} className={props.confirmPassword ? '' : "disable"} type="password" placeholder='Confirm password' size='large' name="confirmPassword" onChange={(e) => props._handleChange(e)} />
				{props.showConfirmError !== "" && <ErrorMessage message={props.showConfirmError} />}
			</Grid.Column>
			<Grid.Column>
				<Header content="Contact" as='h5' className="signup_label" />
				<Input placeholder='Mobile Number' size='large' name="contact" onChange={(e) => props._handleChange(e)} />
			</Grid.Column>
		</Grid.Row>
		<Grid.Row columns={2}>
			<Grid.Column>
				<Button content="Sign up" size="large" primary className="submit_btn" onClick={props._handleSubmit} />
			</Grid.Column>
			<Grid.Column>
				{props.errorMessage !== "" && <ErrorMessage message={props.errorMessage} />}
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export default Signup;