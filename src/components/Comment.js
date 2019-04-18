import React from "react";
import { Component } from 'react'


class Comment extends Component{
  render(){
    return(
      <div>
      <li class="media bg-light">
        <div class="media-body">
          <div class="card card-body bg-light">
              <h4 class="media-heading text-uppercase reviews">Marco </h4>
              <div class="media-date text-uppercase reviews list-inline">
                <small>April 17, 2019 7:55pm</small>
              </div>
              <p class="media-comment">
                Great snippet! Thanks for sharing.
              </p>
          </div>
        </div>
      </li>
      <br />
      </div>
    )
  }
}
export default Comment
