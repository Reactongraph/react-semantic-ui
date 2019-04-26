import React from 'react';
import {
	Container,
	Grid,
	Header,
	List,
	Segment
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Segment inverted vertical style={{ padding: '5em 0em' }}>
				<Container>
					<Grid divided inverted stackable>
						<Grid.Row>
							<Grid.Column width={3}>
								<Header inverted as='h4' content='About' />
								<List link inverted>
									<List.Item as='a'>The Team</List.Item>
									<List.Item as='a'>Contact Us</List.Item>
									<List.Item as='a'>Vision</List.Item>
									<List.Item as='a'>History</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as='h4' content='Services' />
								<List link inverted>
									<List.Item as='a'>Accessories</List.Item>
									<List.Item as='a'>Washing</List.Item>
									<List.Item as='a'>Denting And Painting</List.Item>
									<List.Item as='a'>Rubbing</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={7}>
								<Header as='h4' inverted>
									Speedy Wheels
                </Header>
								<p>
									Copyright © 2019 Top Gear|Privacy Policy|Cancellation & Refund|Terms of use|Site Map
                                </p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		)
	}
}

Footer.propTypes = {
	children: PropTypes.node,
}
