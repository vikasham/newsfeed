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
      <div id="dash">

        <br/><br/><br/><br/><br/><br/>
        <h1 class="text-center">{"Today's News"}</h1>
        <h2 class="text-center">{this.state.loggedIn ? "My Topics" : "All Topics"}</h2>
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
