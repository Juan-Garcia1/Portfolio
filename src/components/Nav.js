import React, { Component } from "react"

import { Container } from "../Styles/Container"
import { NavBar } from "../Styles/Nav"

import { primaryColor } from "../Styles/Global"

const Flex = Container.extend`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    font-family: sans-serif;
  }
`

class Nav extends Component {
  render() {
    return (
      <NavBar>
        <Flex>
          <h1 style={{ color: primaryColor }}>Juan Garcia</h1>
        </Flex>
      </NavBar>
    )
  }
}

export default Nav
