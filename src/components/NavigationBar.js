import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faSignInAlt, faSignOutAlt, faDoorOpen, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faKey} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
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
		              <div class="nav-link" onClick={this.toggleBox}>Log In
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
      {displayLogin && (
        <div className="boxContent" >
          <form method="POST" action="Login" id="loginform">
              <FontAwesomeIcon icon={faKey}/> <br />
              <div class="form-group">
                <label for="email">Username:</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      )}

      </div>
    )
  }
}

export default NavigationBar
