import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ColumnGrid from './columnGrid'

const AboutUs = () => {
	const heading1 = "Some Exotic Cars";
	const heading2 = "About us";
	const para1 = "Top Gear is the luxury marketplace for pre owned luxury, exotic and imported cars for sale in India. With a collection of over 100 rare exotic supercars; searching for your dream luxury car has never been easier. Have a luxury car in-mind or simply browsing through our vast inventory of used exotic cars online. Your much awaited pre owned exotic car is simply a click away."
	const para2 = "Irrespective of which luxury car brand you choose, every pre owned exotic car in our inventory goes through our highest level of scrutiny, assuring you the utmost in quality standards. So what are you waiting for, join the exclusive group of exotic car owners in Delhi and all over India, by driving away with one of your own."
	return (
		<Segment style={{ padding: '0em' }} vertical>
			<Grid celled='internally' columns='equal' stackable>
				<Grid.Row textAlign='center'>
					<ColumnGrid heading={heading1} para={para1} paraClass="para_paddng" />
					<ColumnGrid heading={heading2} para={para2} paraClass="para_paddng" />
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

AboutUs.propTypes = {
	children: PropTypes.node,
}

export default AboutUs;