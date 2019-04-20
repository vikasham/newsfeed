import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import Dash from './Dash'
import Practice from './Practice'

class App extends Component
{
  render() {
    return (
      <div className="App">
      <NavigationBar/>
      <Dash/>
      <Practice />
      </div>
    )
  }
}

export default App
