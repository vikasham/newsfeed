import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHistory, faUserFriends} from '@fortawesome/free-solid-svg-icons'
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
                    <a href="/" id="friends">
                      <FontAwesomeIcon icon={faUserFriends}/>
                      <h5> Friends </h5>
                    </a>
                  </div>
                  <div class="col-1">
                    <a href="/" id="friends">
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

      </div>
    )
  }
}

export default Profile
