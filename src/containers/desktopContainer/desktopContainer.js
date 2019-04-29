import React from 'react';
import {
	Button,
	Container,
	Menu,
	Segment,
	Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import HomepageHeading from '../../components/homepageHeading'

const DesktopLayout = (props) => {
	const { fixed } = props;
	return (
		<Visibility
			once={false}
			onBottomPassed={props.showFixedMenu}
			onBottomPassedReverse={props.hideFixedMenu}
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
						{props.list.map((item, i) => <Menu.Item as='a' active={item === "Home"}>{item}</Menu.Item>)}
						<Menu.Item position='right'>
							<Button as='a' inverted={!fixed} content="Log in" onClick={props.handleLogin} />
							<Button as='a' inverted={!fixed} primary={fixed} onClick={props.handleSignup} style={{ marginLeft: '0.5em' }} content="Sign up" />
						</Menu.Item>
					</Container>
				</Menu>
				<HomepageHeading />
			</Segment>
		</Visibility>
	)
}

DesktopLayout.propTypes = {
	children: PropTypes.node,
}

export default DesktopLayout;