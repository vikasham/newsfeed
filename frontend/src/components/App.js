import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import Dash from './Dash'
import Practice from './Practice'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'

class App extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true,
    }
  }

  render() {
    return (
      <div className="App" id="app">

        <NavigationBar loggedIn={this.state.loggedIn}/>
        <Dash loggedIn={this.state.loggedIn}/>
        <Practice />
        <LoginPopup />
        <RegisterPopup />
      </div>
    )
  }
}

export default App
