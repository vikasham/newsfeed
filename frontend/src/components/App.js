import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'
import Profile from './Profile'

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
        <LoginPopup />
        <RegisterPopup />
        <Profile />
      </div>
    )
  }
}

export default App
