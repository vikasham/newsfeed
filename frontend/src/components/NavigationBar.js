import React from "react";
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'

import TopicNav from './TopicNav'
import TitleNav from './TitleNav'
import Dashrow from './Dashrow'
import Bubbles from './Bubbles'



class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.loadAll = this.loadAll.bind(this)
    this.loadAll()
    // get initial articles
  }
  async loadAll(){
    const response = await fetch(`https://www.polytime.solutions/all`)
    const data = await response.json()
    let rows = []
    if (data !== undefined){
      for (let i = 0 ; i < data.length - 2 ; i += 3){
        rows.push(<Dashrow first={data[i]} second={data[i+1]} third={data[i+2]} />)
      }
      // load all topics of news
      this.setState({
        topic: "all",
        title: "Today's News",
        rows: rows
      })
    }
  }
  // called by child component "TopicNav" upon clicking a topic name
  update(data){
    // update the topic, the articles, and the title
    if (data !== undefined){
      let rows = []
      // render all of the articles of the requested topic for the user
      for (let i = 0 ; i < data.articles.length - 2 ; i += 3){
        rows.push(<Dashrow first={data.articles[i]} second={data.articles[i+1]} third={data.articles[i+2]} />)
      }
      this.setState({
        topic: `${data.topic}`,
        title: `${data.title}`,
        rows: rows
      })
    }
  }
  render(){
    if (this.state == null){
      return(<div></div>)
    }
    else {
      return(
        <div>
          <div class="container-fluid fixed-top">
            <TitleNav loggedIn={this.props.loggedIn}/>
            <TopicNav update={this.update.bind(this)} loggedIn={this.props.loggedIn}/>
          </div>
          <div>
            <Bubbles/>
            < br/>< br/>< br/>< br/>< br/>< br/>
            <h1 class="text-center">Today's News</h1>
            <h2 class="text-center">{this.state.title}</h2>
            {/*
              this state variable below is where
              the articles are currently rendered from
            */}
            {this.state.rows}
          </div>
        </div>
      )
    }
  }
}

export default NavigationBar
