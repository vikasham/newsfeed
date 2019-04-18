import React from "react";
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/NavigationBar.css'

class TitleNav extends Component{
  render(){
    return(
      <div class="row">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark w-100">
              <div class="navbar-header">
                <div class="navbar-brand">Newsfeed &nbsp;
                  <FontAwesomeIcon icon={faDove}/>
                </div>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item">

                  <div class="nav-link" data-toggle="modal" data-target="#myModal1">Log In &nbsp;
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
                    <div class="nav-link" >
                    Profile &nbsp;<FontAwesomeIcon icon={faAddressCard}/>

                    </div>
                </li>
              </ul>
            </nav>
      </div>
    )
  }
}
export default TitleNav
