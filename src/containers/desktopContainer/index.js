import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
	Responsive,
} from 'semantic-ui-react';
import DesktopLayout from './desktopContainer'

export default class Index extends Component {
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
		const LIST = ["Home", "Work", "Company", "Careers"]

		return (
			<Responsive getWidth={this.props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<DesktopLayout list={LIST}
					hideFixedMenu={this.hideFixedMenu}
					showFixedMenu={this.showFixedMenu}
					handleLogin={this.handleLogin}
					handleSignup={this.handleSignup}
				/>
				{children}
			</Responsive>
		)
	}
}

Index.propTypes = {
	children: PropTypes.node,
}