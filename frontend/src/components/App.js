import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import Dash from './Dash'
import Practice from './Practice'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'

class App extends Component
{
  render() {
    return (
      <div className="App" id="app">

        <NavigationBar/>
        <Dash/>
        <Practice />
        <LoginPopup />
        <RegisterPopup />
      </div>
    )
  }
}

export default App
