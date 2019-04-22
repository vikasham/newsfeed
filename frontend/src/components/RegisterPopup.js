import React from 'react'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

class RegisterPopup extends Component{

  constructor( props )
  {
    super( props )
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setFirstName = this.setFirstName.bind(this)
    this.setLastName = this.setLastName.bind(this)
  }

  setUsername(event) {
    event.preventDefault()
    this.setState({username: event.target.value})
  }

  setPassword(event) {
    event.preventDefault()
    this.setState({password: event.target.value})
  }

  setFirstName(event) {
    event.preventDefault()
    this.setState({firstname: event.target.value})
  }

  setLastName(event) {
    event.preventDefault()
    this.setState({lastname: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

    let data = {
      username: `${this.state.username}`,
      password: `${this.state.password}`,
      firstname: `${this.state.firstname}`,
      lastname: `${this.state.lastname}`
    }

    let request = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch("/register", request)
    .then( (response) => {
      if (response.error) {
        alert(response.error)
      }
      window.location.reload()
    })
    .catch( (error) => {
      alert(error.message)
    })
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
      <div class="col-sm-1">
      </div>
      <div class="col-sm-6">
      <input type="user" onChange = {this.setFirstName} class="form-control" placeholder="First Name"/>
      </div>
      <div class="col-sm-5" >
      <input type="user" onChange = {this.setLastName} class="form-control" placeholder="Last Name"/>
      </div>
      </div>
      <div class="form-group row">
      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faUser }/></label>
      <div class="col-sm-11">
      <input type="user" class="form-control" onChange = {this.setUsername} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
      </div>
      </div>
      <div class="form-group row">
      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faLock}/></label>
      <div class="col-sm-11">
      <input type="password" class="form-control" onChange = {this.setPassword} id="exampleInputPassword1" placeholder="Password"/>
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
