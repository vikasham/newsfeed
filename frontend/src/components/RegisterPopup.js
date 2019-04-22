import React from 'react'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

class RegisterPopup extends Component{

  constructor( props )
  {
    super( props )
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleChange1(event) {
    this.setState({password: event.target.value});
  }

  customFunction = async (e) => {
    e.preventDefault()
    const text = this.state.username
    const response = await fetch(`/api/cow/${text}`)
    const custom = await response.json()
    alert(custom.hello)
    const item = custom.hello
    this.setState({ item, text: '' })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Something")

    console.log(this.state.username)
    console.log(this.state.password)

    const username1 = this.state.username
    const password1 = this.state.password
    var data = {
      username: username1,
      password: password1
    }

    var response = fetch("/register", {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if (response.error) {
      alert(response.error)
    } else {
      alert("Success")
    }
  }

  render(){
    return(
      <div class="container" id="registerpopup">
        <div class="modal fade" id="myModal2" role="dialog">
          <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">
              <div class="modal-header bg-primary text-white">
                <h4 class="modal-title">Register  <FontAwesomeIcon icon={faUserPlus}/></h4>
                <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <form onSubmit = {this.handleSubmit}>
                  <div class="form-group row">
                    <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faUser }/></label>
                    <div class="col-sm-11">
                      <input type="user" class="form-control" onChange = {this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faLock}/></label>
                    <div class="col-sm-11">
                      <input type="password" class="form-control" onChange = {this.handleChange1} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Register</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default RegisterPopup
