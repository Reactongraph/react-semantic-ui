import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HomepageHeading from './homepageHeading'
import {
	Button,
	Container,
	Menu,
	Responsive,
	Segment,
	Visibility,
} from 'semantic-ui-react'

export default class DesktopContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	hideFixedMenu = () => this.setState({ fixed: false })
	showFixedMenu = () => this.setState({ fixed: true })

	handleLogin = () => {
		this.props.history.push('/login')
	}

	handleSignup = () => {
		this.props.history.push('/signup')
	}

	render() {
		const { children } = this.props
		const { fixed } = this.state

		return (
			<Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 700, padding: '1em 0em' }}
						vertical
					>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size='large'
						>
							<Container>
								<Menu.Item as='a' active>Home</Menu.Item>
								<Menu.Item as='a'>Work</Menu.Item>
								<Menu.Item as='a'>Company</Menu.Item>
								<Menu.Item as='a'>Careers</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted={!fixed} content="Log in" onClick={this.handleLogin} />
									<Button as='a' inverted={!fixed} primary={fixed} onClick={this.handleSignup} style={{ marginLeft: '0.5em' }} content="Sign up" />
								</Menu.Item>
							</Container>
						</Menu>
						<HomepageHeading />
					</Segment>
				</Visibility>
				{children}
			</Responsive>
		)
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
}