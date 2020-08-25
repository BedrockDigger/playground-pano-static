import React, { Component } from 'react'
import { Segment, Icon, Card, Progress, Header, Grid, Image, Button } from 'semantic-ui-react'
import Clock from 'react-live-clock'
import { withRouter } from 'react-router-dom'

class Cover extends Component {

    getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone

    render() {
        const timezone = this.getTimezone()
        return (
            <Segment inverted style={{ padding: '8em 0em' }} vertical>
                <Grid
                    textAlign='center'
                    verticalAlign='middle'
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    inverted
                >
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: "30vw" }}>
                            <Header size='huge' inverted style={{ marginTop: "20px", marginBottom: "10px" }}>
                                The date is&nbsp;
                                <Clock
                                    format="MMM D"
                                    timezone={timezone}
                                    ticking
                                />
                                .
                            </Header>
                            <Header size='huge' inverted style={{ marginTop: "20px", marginBottom: "20px" }}>
                                The time is&nbsp;
                                <Clock
                                    format="HH:mm:ss"
                                    timezone={timezone}
                                    ticking
                                />
                                .
                            </Header>
                            <Header size='huge' inverted style={{ marginTop: "20px", marginBottom: "10px" }}>
                                The focus is Africa.
                            </Header>
                            <Button inverted animated='fade' color='grey' style={{ marginTop: 50 }}
                                // onClick={}
                            >
                                <Button.Content visible>
                                    Dive in
                                </Button.Content>
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
}

export default withRouter(Cover)