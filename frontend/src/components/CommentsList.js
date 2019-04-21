import React from "react";
import { Component } from 'react'
import Comment from './Comment'



class CommentsList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: this.props.loggedIn,
    }
  }
  render(){
    return(
      <div class="tab-pane active" id="commentslist">
          <ul class="list-unstyled">
            <Comment loggedIn={this.state.loggedIn}/>
            <Comment loggedIn={this.state.loggedIn}/>
            <Comment loggedIn={this.state.loggedIn}/>
          </ul>
      </div>
    )
  }
}
export default CommentsList
