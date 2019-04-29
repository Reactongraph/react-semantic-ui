import React from 'react';
import {
	Button,
	Container,
	Icon,
	Menu,
	Responsive,
	Segment,
	Sidebar,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import HomepageHeading from "../components/homepageHeading";

export default class MobileLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	// For mobile menu bar
	handleSidebarHide = () => this.setState({ sidebarOpened: false })

	handleToggle = () => this.setState({ sidebarOpened: true })

	handleLogin = () => {
		this.props.history.push('/login')
	}

	handleSignup = () => {
		this.props.history.push('/signup')
	}

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state
		const LIST = ["Home", "Work", "Company", "Careers"]
		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={this.props.getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation='push'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					{LIST.map((item, i) => <Menu.Item as='a' active={item === "Home"}>{item}</Menu.Item>)}
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 350, padding: '1em 0em' }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size='large'>
								<Menu.Item onClick={this.handleToggle}>
									<Icon name='sidebar' />
								</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted onClick={this.handleLogin} content="Log in" />
									<Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={this.handleSignup} content="Sign up" />
								</Menu.Item>
							</Menu>
						</Container>
						<HomepageHeading mobile />
					</Segment>
					{children}
				</Sidebar.Pusher>
			</Responsive>
		)
	}
}

MobileLayout.propTypes = {
	children: PropTypes.node,
}