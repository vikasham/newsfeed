import React, { Component } from 'react'
import Article from './Article'
import '../css/Dashrow.css'

class Dashrow extends Component
{

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: this.props.loggedIn,
    }
  }

  render(){
    return(
      <div id="dashrow" class="row">
        <div class="col-sm-4">
          <Article loggedIn={this.state.loggedIn} article={this.props.first}/>
        </div>
        <div class="col-sm-4">
          <Article loggedIn={this.state.loggedIn} article={this.props.second}/>
        </div>
        <div class="col-sm-4">
          <Article loggedIn={this.state.loggedIn} article={this.props.third}/>
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}
export default Dashrow
