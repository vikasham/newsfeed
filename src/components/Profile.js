import React from 'react'
import { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHistory, faUserFriends } from '@fortawesome/free-solid-svg-icons'
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
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            condition: true,
        };
    }

  toggleClass() {
    this.setState({
      condition: !this.state.condition
    });
   };
  render(){
    return(
      <div id ="profilepage">
        <div class="container-fluid fixed-top" id="navcontainer">
          <TitleNav />
        </div>
        <div id="info">
          <center>
            <br /><br /><br /><br /><br />
            <FontAwesomeIcon icon={faUserCircle} size="8x"/><br />
            <h1 class="display-3"><strong>Claire Powers</strong></h1>
            <h5>@username</h5><br /><br />
            <div class="container">
              <div class="row justify-content-md-center">

                <div class="col-1">
                  <a href="/" id="friends" data-toggle="modal" data-target="#topicsmodal">
                    <FontAwesomeIcon icon={faUserFriends}/>
                    <h5> Topics </h5>
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

          </center>
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
