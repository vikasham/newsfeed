import React from 'react'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faKey, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

class LoginPopup extends Component{
  render(){
    return(
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
    )
  }
}
export default LoginPopup
