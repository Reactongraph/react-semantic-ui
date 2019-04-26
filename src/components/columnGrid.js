import React from 'react';
import {
	Grid,
	Header
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ColumnGrid = (props) => {
	return (
		<Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
			<Header as='h3' style={{ fontSize: '2em' }} content={props.heading} />
			<p style={{ fontSize: '1.33em' }}>{props.para}</p>
		</Grid.Column>
	)
}

ColumnGrid.propTypes = {
	children: PropTypes.node,
}

export default ColumnGrid;