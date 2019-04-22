import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHistory, faListUl } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleNav from './TitleNav'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'
import HistoryPopup from './HistoryPopup'
import TopicsPopup from './TopicsPopup'
import '../css/Profile.css'


class Profile extends Component{
  constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        };
    }

  render(){
    return(
      <div id ="profilepage">
        <div class="container-fluid fixed-top" id="navcontainer">
          <TitleNav loggedIn={this.state.loggedIn}/>
        </div>
        <div class="center-screen">
        <div class="row w-100">
          <div class="col">
          </div>
          <div class="col-xl-auto">
            <div class="card bg-light align-middle" id="profilecard" >
              <div class="card-body" >
                <center>
                  <FontAwesomeIcon icon={faUserCircle} size="8x"/><br />
                  <h1 class="display-3"><strong>Claire Powers</strong></h1>
                  <h5>@username</h5><br /><br />
                  <div class="container">
                    <button type="button" class="btn btn-outline-dark btn-lg" data-toggle="modal" data-target="#topicsmodal"><FontAwesomeIcon icon={faListUl} /> Topics</button>  &nbsp;
                    <button type="button" class="btn btn-outline-dark btn-lg" data-toggle="modal" data-target="#modal2"> <FontAwesomeIcon icon={faHistory} /> History</button>
                  </div>
                </center>

              </div>
            </div>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
        <TopicsPopup />
        <HistoryPopup />
        <LoginPopup />
        <RegisterPopup />
      </div>
    )
  }
}

export default Profile
