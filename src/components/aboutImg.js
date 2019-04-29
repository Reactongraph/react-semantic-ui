import React from 'react';
import {
	Grid,
	Button,
	Segment,
	Icon
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import RowGrid from './rowGrid';

const AboutImg = () => {
	const heading1 = "WE BELIEVE IN NOTHING BUT EXTRAORDINARY";
	const heading2 = "Experience the UnReal";
	const para1 = "On a usual weekday you'd find us running around and catching our breath in our three storied and 35000 sq ft Showroom."
	const para2 = "That’s the big time Top Gear effect doing motion runs at the back of your mind."
	const imgSrc = "https://www.bmw-birdautomotive.in/sites/default/files/styles/nostyle/public/slider_banner_image/2018-02/M5Limousine-header_Banner_17.jpg?itok=kvGkwR-N"
	return (
		<Segment style={{ padding: '4em 0em' }} vertical>
			<Grid container stackable verticalAlign='middle'>
				<RowGrid heading={heading1} para={para1} imgSrc={imgSrc} />
				<RowGrid heading={heading2} para={para2} />
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Button animated size="huge">
							<Button.Content visible size='huge'>Check Them Out</Button.Content>
							<Button.Content hidden>
								<Icon name='arrow right' />
							</Button.Content>
						</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

AboutImg.propTypes = {
	children: PropTypes.node,
}

export default AboutImg;