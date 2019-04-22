import React, { Component } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
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
      <div>
        <div id="dashrow" class="row">
          <div class="col-sm-4">
            <ArticleThumbnail loggedIn={this.state.loggedIn} article={this.props.first}/>
          </div>
          <div class="col-sm-4">
            <ArticleThumbnail loggedIn={this.state.loggedIn} article={this.props.second}/>
          </div>
          <div class="col-sm-4">
            <ArticleThumbnail loggedIn={this.state.loggedIn} article={this.props.third}/>
          </div>
        </div>
      </div>

    )
  }
}
export default Dashrow
