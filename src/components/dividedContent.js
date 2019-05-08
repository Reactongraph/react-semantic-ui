import React from 'react';
import {
	Container,
	Segment,
	Button, Divider
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ColumnGrid from './columnGrid';

const DividedContent = () => {
	const HEADING1 = `At Top Gear, our notion is to match the individuality of our cars to your 
	personality and we take full stride in doing so.`
	const PARA1 = `Presenting a plethora of exclusivity, sophistication and panache which is bound to get 
	you in a thought provoking state!`
	const HEADING2 = "Top Gear surely is a benchmark in the pre-owned and new exotic car industry."
	const PARA2 = `From the finest German engineering, standout Italian designs, English tradition and 
	American classics we have something for the keen and enthusiastic automobile aficionados.`

	return (
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Container text>
				<ColumnGrid heading={HEADING1} para={PARA1} />
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

				<ColumnGrid heading={HEADING2} para={PARA2} />
				<Button as='a' size='large'>
					I'm Still Quite Interested
        </Button>
			</Container>
		</Segment>
	)
}

DividedContent.propTypes = {
	children: PropTypes.node,
}

export default DividedContent;