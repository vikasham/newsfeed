import React from "react";
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUserPlus, faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'
import TitleNav from './TitleNav'
import TopicNav from './TopicNav'


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
      <div id ="navbar">
        <div class="container-fluid fixed-top">
          <TitleNav />
          <TopicNav />
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
