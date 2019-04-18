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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
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
            </div>
        </nav>
      </div>
    )
  }
}
export default TopicNav
