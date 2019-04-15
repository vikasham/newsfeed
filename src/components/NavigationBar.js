import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faKey, faUserPlus, faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'

class NavigationBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      displayLogin: false,
      loginuser: "",
      registeruser:""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render()
  {
    return(
      <div id ="hello">
        <div class="container-fluid fixed-top">
          <div class="row">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark w-100">
                  <div class="navbar-header">
                    <div class="navbar-brand">Newsfeed &nbsp;
                      <FontAwesomeIcon icon={faDove}/>
                    </div>
                  </div>
                  <ul class="navbar-nav">
                    <li class="nav-item">

                      <div class="nav-link" data-toggle="modal" data-target="#myModal1" onClick={this.toggleBox}>Log In &nbsp;
                        <FontAwesomeIcon icon={faSignInAlt}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link">Log Out &nbsp;
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link" data-toggle="modal" data-target="#myModal2">Register &nbsp;
                        <FontAwesomeIcon icon={faDoorOpen}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link">Profile &nbsp;
                        <FontAwesomeIcon icon={faAddressCard}/>
                      </div>
                    </li>
                  </ul>
                </nav>
          </div>
          <div class="row">
            <nav class="navbar navbar-expand-sm bg-light navbar-light w-100" id="topics" >
                <ul class="navbar-nav nav-fill w-100">
                  <li class="nav-item">
                        <div class="nav-link">Technology
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Business
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Sports
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Politics
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Breaking News
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Science
                        </div>
                      </li>
                      <li class="nav-item">
                        <div class="nav-link">Entertainment
                        </div>
                      </li>
                </ul>
            </nav>
          </div>
        </div>
        <div class="container">
          <div class="modal fade" id="myModal1" role="dialog">
            <div class="modal-dialog modal-dialog-centered">

              <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                  <h4 class="modal-title">Login  <FontAwesomeIcon icon={faKey}/></h4>
                  <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <form method="POST" action="/login">
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faUser }/></label>
                      <div class="col-sm-11">
                        <input type="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faLock}/></label>
                      <div class="col-sm-11">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                  </form>
                </div>
              </div>

          </div>
        </div>

        </div>
        <div class="container">
          <div class="modal fade" id="myModal2" role="dialog">
            <div class="modal-dialog modal-dialog-centered">

              <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                  <h4 class="modal-title">Register  <FontAwesomeIcon icon={faUserPlus}/></h4>
                  <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <form method="POST" action="Register">
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faUser }/></label>
                      <div class="col-sm-11">
                        <input type="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-sm-1 col-form-label text-secondary"><FontAwesomeIcon icon={faLock}/></label>
                      <div class="col-sm-11">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default NavigationBar
