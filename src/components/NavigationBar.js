import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends Component
{
  render()
  {
    return(
      <div class="container-fluid">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div class="navbar-header">
            <div class="navbar-brand">Newsfeed
              <FontAwesomeIcon icon={faDove}/>
            </div>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="nav-link">Log In
                <FontAwesomeIcon icon={faSignInAlt}/>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">Log Out
                <FontAwesomeIcon icon={faSignOutAlt}/>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">Register
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
    )
  }
}

export default NavigationBar
