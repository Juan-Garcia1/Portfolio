import React, { Component } from 'react'
import styled from 'styled-components'

import { Container } from '../Styles/Container'
import { NavBar
    // , HamburgerIcon, SideNav, SideNavItem
 } from '../Styles/Nav'

import { primaryColor } from '../Styles/Global'

const Flex = Container.extend`
    display: flex;
    justify-content: space-between;
    // align-items: center;
    align-items: flex-end;
    h1 {
        margin: 0;
        font-size: 18px;
        font-weight: 300;
        font-family: sans-serif;
    }
`

class Nav extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     isOpen: false
        // }
        // this.handleToggle = this.handleToggle.bind(this)
    }

    // handleToggle() {
    //     const { isOpen } = this.state
    //     this.setState({
    //         isOpen: !isOpen
    //     })
    // }
    render() {
        // const { isOpen } = this.state
        // const toggleSideNav = isOpen ? 'open-sidenav' : ''
        // const activeHamburgerIcon = isOpen ? 'active' : ''
        return(
            <NavBar>
                <Flex>
                    <h1 style={{ color: primaryColor }}>Juan Garcia</h1>
                    {/* <HamburgerIcon
                        onClick={this.handleToggle}
                        className={activeHamburgerIcon}>
                        <i className="fa fa-bars"></i>
                    </HamburgerIcon>
                    <SideNav className={toggleSideNav}>
                        <SideNavItem>Home</SideNavItem>
                        <SideNavItem>About</SideNavItem>
                        <SideNavItem>Skills</SideNavItem>
                        <SideNavItem>Projects</SideNavItem>
                        <SideNavItem>Badges</SideNavItem>
                    </SideNav> */}
                </Flex>
            </NavBar>
        )
    }
}

export default Nav;