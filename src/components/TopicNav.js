import React from "react";
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'

class TopicNav extends Component{
  render(){
    return(
      <div class="row">
        <nav class="navbar navbar-expand-sm bg-light navbar-light w-100" id="topics" >
            <ul class="navbar-nav nav-fill w-100">
              <li class="nav-item">
                    <div id="topic" class="nav-link">Technology
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Business
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Sports
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Politics
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Breaking News
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Science
                    </div>
                  </li>
                  <li class="nav-item">
                    <div id="topic" class="nav-link">Entertainment
                    </div>
                  </li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default TopicNav
