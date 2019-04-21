import React, { Component } from 'react'

class Practice extends Component

{
  constructor (props)
  {
    super(props)
    this.customFunction = this.customFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    cow: '',
    text: ''
  }

  // "e" is "event"
  customFunction = async (e) => {
    e.preventDefault()
    const text = this.state.text
    const response = await fetch(`/api/cow/${text}`)
    const custom = await response.json()
    alert(custom.hello)
    const item = custom.hello
    this.setState({ item, text: '' })
  }
  // overwrite default handleChange
  handleChange(e) {
    // overwrite all name-value pairs stored in the state variable
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="App">
      <h3>Sample text here</h3>
      <code>{this.state.cow}</code>
      <form onSubmit={this.customFunction}>
      <label>Custom Text:</label>
      <input
      type="text"
      name="text"
      value={this.state.text}
      onChange={this.handleChange}
      />
      <button type="submit">Send a get request!</button>
      </form>
      </div>
    )
  }
}
export default Practice
