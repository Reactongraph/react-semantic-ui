import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
	Responsive,
} from 'semantic-ui-react';
import DesktopLayout from './desktopContainer'

const DesktopIndex =(props)=> {
	const [state, setState] =useState({fixed:false})
	const Navigate =useNavigate()
	const hideFixedMenu = () => setState({ ...state,fixed: false })
	const showFixedMenu = () => setState({ ...state,fixed: true })

	const handleLogin = () => {
		Navigate('/login')
	}

	const handleSignup = () => {
		Navigate('/signup')
	}


		const { children } = props
		const { fixed } = state
		const LIST = ["Home", "Work", "Company", "Careers"]

		return (
			<Responsive getWidth={props.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<DesktopLayout list={LIST}
					hideFixedMenu={hideFixedMenu}
					showFixedMenu={showFixedMenu}
					handleLogin={handleLogin}
					handleSignup={handleSignup}
				/>
				{children}
			</Responsive>
		)
	
}

DesktopIndex.propTypes = {
	children: PropTypes.node,
}
export default DesktopIndex