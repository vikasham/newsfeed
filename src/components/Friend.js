import React from "react";
import { Component } from 'react'

class Friend extends Component{
  render(){
    return(
      <li class="media bg-light">
        <div class="media-body">
          <div class="card card-body bg-light">
              <h4 class="media-heading reviews"><a href="/profile">Marco Polo</a></h4>
          </div>
        </div>
      </li>
     )
    }
  }
  export default Friend
