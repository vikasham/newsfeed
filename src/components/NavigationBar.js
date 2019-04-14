import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faKey, faCircle, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/LoginPage.css'

class NavigationBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      displayLogin: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }
  toggleBox() {
    this.setState(oldState => ({ displayLogin: !oldState.displayLogin }));
  }

  render()
  {
    const { displayLogin } = this.state;
    const { title, children } = this.props;
    return(
      <div id ="hello">
        <div class="container-fluid fixed-top">
          <div class="row">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark w-100">
                  <div class="navbar-header">
                    <div class="navbar-brand">Newsfeed
                      <FontAwesomeIcon icon={faDove}/>
                    </div>
                  </div>
                  <ul class="navbar-nav">
                    <li class="nav-item">

                      <div class="nav-link" data-toggle="modal" data-target="#myModal1" onClick={this.toggleBox}>Log In
                        <FontAwesomeIcon icon={faSignInAlt}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link">Log Out
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link" data-toggle="modal" data-target="#myModal2">Register
                        <FontAwesomeIcon icon={faDoorOpen}/>
                      </div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link">Profile
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
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Login  <FontAwesomeIcon icon={faKey}/></h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <form method="POST" action="Login">
                      <div id="userlabel">
                        Username <br />
                      </div>
                      <input type="text" name="user" id="user" value=""/><br />
                      <div id="pwlabel">
                        Password <br />
                      </div>
                      <input type="text" name="pw" id="pw"/><br /><br />
                      <input type="submit" name="submit" value="Login" id="login" />
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="container">
          <div class="modal fade" id="myModal2" role="dialog">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Register  <FontAwesomeIcon icon={faUserPlus}/></h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <form method="POST" action="Login">
                      <div id="userlabel">
                        Username <br />
                      </div>
                      <input type="text" name="user" id="user" value=""/><br />
                      <div id="pwlabel">
                        Password <br />
                      </div>
                      <input type="text" name="pw" id="pw"/><br /><br />
                      <input type="submit" name="submit" value="Login" id="login" />
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
