import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import Dash from './Dash'
import Practice from './Practice'
import Bubbles from './Bubbles'

class App extends Component
{
  render() {
    return (
      <div className="App" id="app">
        <NavigationBar/>
          <Bubbles/>
          <Dash/>
          <Practice />
      </div>
    )
  }
}

export default App
