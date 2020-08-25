import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import Navbar from './Navbar'
import PanoCover from './PanoCover'
import PanoNum from './PanoNum'
import PanoArt from './PanoArt'
import PanoLit from './PanoLit'

class MainContainer extends Component {
    render() {
        return (
            <Router>
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: '100vh', padding: '1em 0em' }}
                    vertical
                >
                    <Navbar />
                    <Switch>
                        <Route exact path='/cover'>
                            <PanoCover />
                        </Route>
                        <Route exact path='/num'>
                            <PanoNum />
                        </Route>
                        <Route exact path='/art'>
                            <PanoArt />
                        </Route>
                        <Route exact path='/lit'>
                            <PanoLit />
                        </Route>
                    </Switch>
                </Segment>
            </Router>
        )
    }
}

export default MainContainer