import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import SadList from './SadList';

class App extends Component {
  constructor(props) {
    super(props);
    // state is initialized in JSON notation
    this.state = {
      name: "User",
      age: 21,
      sadplaces: [
        'SAL',
        'VKC',
        'KAP',
        'Blackboard',
        'Austin\'s gradebook...',
        'Chase\'s gradebook...'
      ],
      status: ""
    };

    // you must add this line!
    this.handleChange = this.handleChange.bind(this);
    // global methods for a component are not bound to the current instance
    // automatically this is just how javascript works

  }

  // a pre-existing lifecycle method that we are overriding
  // this will run right after the component is created in the DOM
  // if you add and remove components, it will run every single time
  // the particualr compnent was added
  componentDidMount() {
    const user_name = prompt("What is your name?");
    // prompt() allows you to prompt a user for an input

    // this.state can only be accessed as a public member variable in the constructor
    // it becomes private with get & set methods in other functions
    // setState() takes in 1 argument, the object, representing the new state items
    this.setState({
      name: user_name
    });
  }

  // event handlers are passed in an event variable, we'll call ours "e"
  handleChange(e) {
    this.setState({
      // for target <tag> of this element's event "e", select its "value" attribute
      // assign the "status" state to this value
      status: e.target.value
    });
  }

  render() {
    const { name, age, sadplaces, status} = this.state; // save all the state variables
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type="text" name="Status" placeholder="Feeling good." value={status} onChange={this.handleChange}></input>

          {/* This is a JSX Style Comment */}
          {/* The line below calls the render() method of SadList */}
          <SadList myname={name} myage={age} sadplaces={sadplaces} mystatus={status}/>
          {/* ^ this SadList will inherit the formatting */}
          <br></br>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
