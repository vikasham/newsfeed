import React, { Component } from 'react'
import Dashrow from './Dashrow'

class Dash extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }

  render(){
    return(
      <div class="bg-light w-100">
        <br/><br/><br/><br/><br/><br/>
        <h1 class="text-center">{this.state.loggedIn ? "Today's News: My Topics" : "Today's News: All Topics" }</h1>
        <br/><br/><br/>
        <Dashrow/>
        <br/><br/>
        <Dashrow/>
        <br/><br/>
        <Dashrow/>
        <br/><br/>
      </div>

    )
  }
}
export default Dash
