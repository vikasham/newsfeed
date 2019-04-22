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
      console.log(`navigation bar says new topic is ${data.topic}`)
      let rows = []
      for (let i = 0 ; i < data.articles.length - 2 ; i += 3){
        // validate SSL for first article
        if (data.articles[i].url.substring(0,5) !== "https" || data.articles[i].urlToImage.substring(0,5) !== "https")
        {
          console.log(data.articles[i].url)
          console.log(data.articles[i].urlToImage)
          i-=2
          continue // will advance forward one index
        }
        // validate SSL for second article
        else if (data.articles[i+1].url.substring(0,5) !== "https" || data.articles[i+1].urlToImage.substring(0,5) !== "https")
        {
          console.log(data.articles[i+1].url)
          console.log(data.articles[i+1].urlToImage)
          i-=1
          continue // will advance forward two indeces
        }
        // validate SSL for third article
        else if (data.articles[i+2].url.substring(0,5) !== "https" || data.articles[i+2].urlToImage.substring(0,5) !== "https")
        {
          console.log(data.articles[i+2].url)
          console.log(data.articles[i+2].urlToImage)
          continue // will advance forward three indeces
        }
        else {
          rows.push(<Dashrow first={data.articles[i]} second={data.articles[i+1]} third={data.articles[i+2]} />)
        }
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

            {this.state.rows}
          </div>
        </div>
      )
    }
  }
}

export default NavigationBar
