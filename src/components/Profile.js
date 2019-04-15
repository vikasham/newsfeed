import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHistory, faUserFriends, faKey, faUserPlus, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleNav from './TitleNav'
import '../css/Profile.css'


class Profile extends Component{
  render(){
    return(
      <div id ="profilepage">
        <div class="container-fluid fixed-top">
          <TitleNav />
        </div>
        <div class="jumbotron vertical-center" id ="profilepage">
          <div id="info">
            <center>
              <br />
              <FontAwesomeIcon icon={faUserCircle} size="8x"/>
              <br />
              <h1 class="display-3"><strong>Claire Powers</strong></h1>
              <button type="button" class="btn btn-success btn-lg">Add Friend</button>
              <br /><br />
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-1">
                    <a href="/" id="friends" data-toggle="modal" data-target="#modal1">
                      <FontAwesomeIcon icon={faUserFriends}/>
                      <h5> Friends </h5>
                    </a>
                  </div>
                  <div class="col-1">
                    <a href="/" id="friends"data-toggle="modal" data-target="#modal2">
                      <FontAwesomeIcon icon={faHistory} />
                      <h5>History </h5>
                    </a>
                  </div>
                </div>
              </div>
              <br />
                <h3>My Topics:</h3>
                <span> &nbsp; </span>
                <div class="funkyradio">
                  <div class="funkyradio-default">
                      <input type="checkbox" name="checkbox" id="checkbox1" />
                      <label for="checkbox1">Technology</label>
                  </div>
                  <div class="funkyradio-primary">
                      <input type="checkbox" name="checkbox" id="checkbox2" />
                      <label for="checkbox2">Business</label>
                  </div>
                  <div class="funkyradio-info">
                      <input type="checkbox" name="checkbox" id="checkbox3" />
                      <label for="checkbox3">Sports</label>
                  </div>
                  <div class="funkyradio-danger">
                      <input type="checkbox" name="checkbox" id="checkbox4" />
                      <label for="checkbox4">Politics</label>
                  </div>
                  <div class="funkyradio-warning">
                      <input type="checkbox" name="checkbox" id="checkbox5" />
                      <label for="checkbox5">Breaking News</label>
                  </div>
                  <div class="funkyradio-success">
                      <input type="checkbox" name="checkbox" id="checkbox6" />
                      <label for="checkbox6">Science</label>
                  </div>
                  <div class="funkyradio-other">
                      <input type="checkbox" name="checkbox" id="checkbox7" />
                      <label for="checkbox7">Entertainment</label>
                  </div>
              </div>


              <br />
            </center>
          </div>
        </div>
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Friends <FontAwesomeIcon icon={faUserFriends}/></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">History <FontAwesomeIcon icon={faHistory}/></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
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

export default Profile
