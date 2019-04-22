import React from "react";
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'
import Dash from './Dash'
import TopicNav from './TopicNav'
import TitleNav from './TitleNav'


class NavigationBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn : this.props.loggedIn,
      topic: "business"
    }
    this.handleChange = this.handleChange.bind(this);
    this.childHandler=this.childHandler.bind(this);
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  childHandler(dataFromChild){
    this.setState({
      topic: dataFromChild
    })
  }


  render()
  {
    return(
      <div>
        <div class="container-fluid fixed-top">
          <TitleNav loggedIn={this.state.loggedIn}/>
          <TopicNav action={this.childHandler} loggedIn={this.state.loggedIn}/>
        </div>
          <Dash topic={this.state.topic} loggedIn={this.state.loggedIn}/>
      </div>
    )
  }
}

export default NavigationBar
