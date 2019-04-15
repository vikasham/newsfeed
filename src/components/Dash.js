import React, { Component } from 'react'
import Dashrow from './Dashrow'

class Dash extends Component
{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div class="bg-light w-100">
        <br/><br/><br/><br/><br/><br/>
        <h1>Todays News: All Categories</h1>
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
