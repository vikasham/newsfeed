import React from "react";
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'
import TopicNav from './TopicNav'
import TitleNav from './TitleNav'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'


class NavigationBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      displayLogin: true,
      loginuser: "",
      registeruser:""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render()
  {
    return(
      <div id ="navbar">
        <div class="container-fluid fixed-top">
          <TitleNav />
          <TopicNav />
        </div>
        <LoginPopup />
        <RegisterPopup />
      </div>
    )
  }
}

export default NavigationBar
