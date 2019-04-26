import React from 'react';
import {
	Form,
	Container,
	Header,
	Segment
} from 'semantic-ui-react';
import '../App.css';

const handleSubmit = (props) => {
	props.history.push('/')
}

const Login = (props) => (
	<Segment inverted className="Login_height">
		<Container className="margin_top">
			<Header content="Login" as="h1" inverted />
			<Form inverted>
				<Form.Group widths='equal'>
					<Form.Input fluid label='Email' placeholder='xyz@abc.com' />
					<Form.Input fluid label='Password' placeholder='password' type='password' />
				</Form.Group>
				<Form.Checkbox label='I agree to the Terms and Conditions' />
				<Form.Button onClick={(e) => handleSubmit(props)}>Submit</Form.Button>
			</Form>
		</Container>
	</Segment>
)

export default Login