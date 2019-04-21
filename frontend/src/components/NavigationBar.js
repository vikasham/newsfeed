import React from "react";
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'
import TopicNav from './TopicNav'
import TitleNav from './TitleNav'


class NavigationBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render()
  {
    return(
        <div class="container-fluid fixed-top">
          <TitleNav />
          <TopicNav />
        </div>
    )
  }
}

export default NavigationBar
