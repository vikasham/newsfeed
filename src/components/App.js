import React, { Component } from 'react'

import '../css/App.css'
import NavigationBar from './NavigationBar'
import Dash from './Dash'



class App extends Component {
  constructor(props) {
    super(props)
    // state is initialized in JSON notation
    this.state = {
    }

    // you must add this line!
    this.handleChange = this.handleChange.bind(this)
    // global methods for a component are not bound to the current instance
    // automatically this is just how javascript works

  }

  // a pre-existing lifecycle method that we are overriding
  // this will run right after the component is created in the DOM
  // if you add and remove components, it will run every single time
  // the particular compnent was added
  componentDidMount() {
    // const user_name = prompt("What is your name?")
    // prompt() allows you to prompt a user for an input

    // this.state can only be accessed as a public member variable in the constructor
    // it becomes private with get & set methods in other functions
    // setState() takes in 1 argument, the object, representing the new state items
    this.setState({
      status: "Current status"
    })
  }

  // event handlers are passed in an event variable, we'll call ours "e"
  handleChange(e) {
    this.setState({
      // for target <tag> of this element's event "e", select its "value" attribute
      // assign the "status" state to this value
      status: e.target.value
    })
  }

  handleClick(e) {
    fetch('/api/login', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        username: "tommy",
        password: "trojan"
      }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(messages => {alert(messages)})
  }



  render() {
    return (
      <div className="App">
      <NavigationBar/>
      <Dash/>
      </div>
    )
  }

}

export default App
