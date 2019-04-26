import React from 'react'
import {
	Image,
	Grid,
	Header
} from 'semantic-ui-react'

const RowGrid = (props) => (
	<Grid.Row>
		<Grid.Column width={8}>
			<Header as='h3' style={{ fontSize: '2em' }} content={props.heading} />
			<p style={{ fontSize: '1.33em' }}>
				{props.para}
			</p>
		</Grid.Column>
		{props.imgSrc && <Grid.Column floated='right' width={8}>
			<Image bordered rounded size='huge' src={props.imgSrc} />
		</Grid.Column>}
	</Grid.Row>
)

export default RowGrid;