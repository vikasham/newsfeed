import React, { Component} from "react"
import {throttle} from 'lodash'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../css/NavigationBar.css'

class Topic extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickThrottled = throttle(this.handleClick, 1000)
  }
  componentWillUnmount(){
    this.handleClickThrottled.cancel()
  }
  async handleClick(){
    let response = await fetch(`https://www.polytime.solutions/${this.props.link}`)
    let data = await response.json()
    console.log(`new topic should be ${this.props.link}`)
    this.props.update({
      articles: data,
      topic: `${this.props.link}`,
      title: `${this.props.title}`
    })
  }
  render() {
    return (
      <li class="nav-item nav-link" id="topic" onClick={this.handleClick}>
        {this.props.title}
      </li>
    )
  }
}

export default Topic
