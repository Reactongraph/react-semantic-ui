import React from 'react';
import {
	Container,
	Header,
	Segment,
	Button, Divider
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class DividedContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Segment style={{ padding: '8em 0em' }} vertical>
				<Container text>
					<Header as='h3' style={{ fontSize: '2em' }}>
						At Top Gear, our notion is to match the individuality of our cars to your personality and we take full stride in doing so
                    </Header>
					<p style={{ fontSize: '1.33em' }}>
						Presenting a plethora of exclusivity, sophistication and panache which is bound to get you in a thought provoking state!
                    </p>
					<Button as='a' size='large'>
						Read More
                    </Button>

					<Divider
						as='h4'
						className='header'
						horizontal
						style={{ margin: '3em 0em', textTransform: 'uppercase' }}
					>
						<a href='#'>Case Studies</a>
					</Divider>

					<Header as='h3' style={{ fontSize: '2em' }}>
						Top Gear surely is a benchmark in the pre-owned and new exotic car industry.
                    </Header>
					<p style={{ fontSize: '1.33em' }}>
						From the finest German engineering, standout Italian designs, English tradition and American classics we have something for the keen and enthusiastic automobile aficionados.
                    </p>
					<Button as='a' size='large'>
						I'm Still Quite Interested
                    </Button>
				</Container>
			</Segment>
		)
	}
}

DividedContent.propTypes = {
	children: PropTypes.node,
}