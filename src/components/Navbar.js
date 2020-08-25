import React, { Component } from 'react'
import { Menu, Container, Progress, Label } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.startTime = new Date()
        this.history = createBrowserHistory()
        this.state = {
            activeItem: 'cover',
            activeItemColor: 'black',
            timePercent: 0
        }
        this.timer = this.timer.bind(this)
        this.changeTab = this.changeTab.bind(this)
    }

    componentDidMount() {
        var t = setInterval(this.timer, 1000)
        var u = setInterval(this.changeTab, 500)
    }

    handleItemClick = (e, { name, color }) => {
        this.setState({ activeItem: name, activeItemColor: color })
    }

    timer() {
        var currentTime = new Date()
        var timeDiff = Math.ceil((currentTime - this.startTime) / 1000)
        var percent = timeDiff / 60 * 100
        this.setState({ timePercent: percent })
    }

    changeTab() {
        if (this.state.timePercent === 20) {
            this.history.push("/num")
        }
    }

    render() {
        const { activeItem, activeItemColor } = this.state
        return (
            <div>
                <Menu
                    inverted
                    size='large'
                    fluid
                    widths={4}
                >
                    <Container>
                        <Menu.Item
                            name='cover'
                            active={activeItem === 'cover'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/cover'
                            color='black'
                            header
                        >
                            PANO
                            <Label color='grey'>v0.0.1</Label>
                        </Menu.Item>
                        <Menu.Item
                            name='num'
                            active={activeItem === 'num'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/num'
                            color='orange'
                        >
                            NUMBERS
                        </Menu.Item>
                        <Menu.Item
                            name='art'
                            active={activeItem === 'art'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/art'
                            color='teal'
                        >
                            ARTWORKS
                        </Menu.Item>
                        <Menu.Item
                            name='lit'
                            active={activeItem === 'lit'}
                            onClick={this.handleItemClick}
                            as={NavLink}
                            to='/lit'
                            color='pink'
                        >
                            LITERATURE
                        </Menu.Item>
                    </Container>
                </Menu>
                <Progress inverted percent={this.state.timePercent} attached='bottom' color={activeItemColor} />
            </div>
        )
    }
}

export default withRouter(Navbar)