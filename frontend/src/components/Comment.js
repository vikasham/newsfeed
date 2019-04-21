import React from "react";
import { Component } from 'react'
import '../css/Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleUp, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'

class Comment extends Component{
  constructor(props) {
    super(props);

    this.state = {
      articlescore: 29,
      loggedIn: this.props.loggedIn,
      isMouseInside1: false,
      isMouseInside2: false,
      scoreIncreased: false,
      scoreDecreased: false,
      color1: false,
      color2: false
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);

  }
  increaseScore = (e) => {
    if(this.state.loggedIn && !this.state.scoreDecreased && !this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore + 1, scoreIncreased: true, color1:true });
    }
    else if(this.state.loggedIn && this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore - 1, scoreIncreased: false, color1: false });
    }
      //increment article score member variable
  };
  decreaseScore = (e) => {
    if(this.state.loggedIn && !this.state.scoreDecreased && !this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore - 1, scoreDecreased:true, color2:true });
    }
    else if(this.state.loggedIn && this.state.scoreDecreased){
      this.setState({ articlescore: this.state.articlescore + 1, scoreDecreased: false, color2: false });
    }
      //decrement article score member variable
  };
  hoverOn1 = (e) =>{
    if(this.state.loggedIn){
      this.setState({ isMouseInside1: true });
    }
  };
  hoverOff1 = (e)=>{
    this.setState({ isMouseInside1: false});
  }
  hoverOn2 = (e) =>{
    if(this.state.loggedIn){
      this.setState({ isMouseInside2: true });
    }
  };
  hoverOff2 = (e)=>{
    this.setState({ isMouseInside2: false});
  }
  render(){
    return(
      <div class="row" id="comment">
        <div id="iconcol" class="col-sm-1 vcenter">
          <center>
            <span class="incdec" id="uparrow" style={{color: (this.state.isMouseInside1 || this.state.color1) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn1} onMouseLeave={this.hoverOff1} onClick={this.increaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleUp}/></span><br/>
            {this.state.articlescore}<br/>
            <span class="incdec" id="downarrow" style={{color: (this.state.isMouseInside2 || this.state.color2) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn2} onMouseLeave={this.hoverOff2} onClick={this.decreaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleDown}/>  </span>
          </center>
        </div>
        <div class="col-sm-11">
          <li class="media bg-light">
            <div class="media-body">
              <div class="card card-body bg-light">
                  <h4 class="media-heading text-uppercase reviews">Marco </h4>
                  <div class="media-date text-uppercase reviews list-inline">
                    <small>April 17, 2019 7:55pm</small>
                  </div>
                  <p class="media-comment">
                    Great snippet! Thanks for sharing.
                  </p>
              </div>
            </div>
          </li>
          <br />
        </div>
      </div>

    )
  }
}
export default Comment
