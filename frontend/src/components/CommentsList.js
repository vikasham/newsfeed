import React from "react";
import { Component } from 'react'
import Comment from './Comment'



class CommentsList extends Component{
  render(){
    return(
      <div class="tab-pane active" id="commentslist">
          <ul class="list-unstyled">
            <Comment />
            <Comment />
            <Comment />
          </ul>
      </div>
    )
  }
}
export default CommentsList
