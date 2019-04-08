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
            <a class="navbar-brand" href="#">Newsfeed
              <FontAwesomeIcon icon={faDove}/>
            </a>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Log In
                <FontAwesomeIcon icon={faSignInAlt}/>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Log Out
                <FontAwesomeIcon icon={faSignOutAlt}/>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register
                <FontAwesomeIcon icon={faDoorOpen}/>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile
                <FontAwesomeIcon icon={faAddressCard}/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavigationBar
