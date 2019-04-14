import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'

class LoginPage extends Component
{
  render()
  {
    return(
        <form method="POST" action="Login">
            <FontAwesomeIcon  icon={faKey}/> <br />
            <div id="userlabel">
              Username <br />
            </div>
            <input type="text" name="user" id="user" value=""/><br />
            <div id="pwlabel">
              Password <br />
            </div>
            <input type="text" name="pw" id="pw"/><br />
            <input type="submit" name="submit" value="Login" id="login" >
        </form>
    )
  }
}

export default LoginPage
