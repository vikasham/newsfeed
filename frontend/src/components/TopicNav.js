import React from "react";
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'

class TopicNav extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }
  changeTitle= (e) =>{

  }
  render(){
    return(
        <div id="topicnav" class="row">
          <nav class="navbar navbar-expand-sm bg-light navbar-light w-100" id="topics" >
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul class="navbar-nav nav-fill w-100">
                  <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>All Categories
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Entertainment
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Sports
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Politics
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Technology
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Business
                        </div>
                      </li>
                      <li class="nav-item">
                        <div id="topic" class="nav-link" onClick={this.changeTitle}>Science
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
