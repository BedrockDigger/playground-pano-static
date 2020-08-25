import React, { Component } from 'react'
import { Segment, Menu, Container, Progress } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Num extends Component {

    render() {
        return (
            <Segment inverted style={{ padding: '8em 0em' }} vertical>
                Numbers goes here.
            </Segment>
        )
    }
}

export default withRouter(Num)