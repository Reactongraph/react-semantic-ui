import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Footer = () => {
  const LIST1 = ["The Team", "Contact Us", "Vision", "History"]
  const LIST2 = ["Accessories", "Washing", "Denting And Painting", "Rubbing"]

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                {LIST1.map((item, i) => <List.Item as='a'>{item}</List.Item>)}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                {LIST2.map((item, i) => <List.Item as='a'>{item}</List.Item>)}
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted content="Speedy Wheels" />
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

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer;