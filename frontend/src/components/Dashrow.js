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
        <Article loggedIn={this.state.loggedIn} article={this.props.first}/>
        <Article loggedIn={this.state.loggedIn} article={this.props.second}/>
        <Article loggedIn={this.state.loggedIn} article={this.props.third}/>
        <br/>
        <br/>
      </div>
    )
  }
}
export default Dashrow
