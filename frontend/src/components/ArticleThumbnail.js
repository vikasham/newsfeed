import React, { Component } from 'react'
import stock from '../img/stock.jpg'
import '../css/ArticleThumbnail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt, faArrowCircleUp, faArrowCircleDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import CommentsPopup from './CommentsPopup'
import SharePopup from './SharePopup'

class Dash extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      articlescore: 29,
      loggedIn: false,
      isMouseInside1: false,
      isMouseInside2: false,
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);

  }
  increaseScore = (e) => {
    if(this.state.loggedIn){
      this.setState({ articlescore: this.state.articlescore + 1 });
    }
      //increment article score member variable
  };
  decreaseScore = (e) => {
    if(this.state.loggedIn){
      this.setState({ articlescore: this.state.articlescore - 1 });
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
      <div class="card">
        <a href="/articlepage">
          <img class="card-img-top" alt="article thumbnail" src={stock}/>
        </a>
        <div class="card-body">
          <a href="/articlepage">
            <h5 class="text-center card-title">Article Title</h5>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
        </div>

        <div class="card-body row text-center" id="comments">
          <div id="iconcoltn" class="col-sm-4">
            &nbsp; <a  id="commentstn" href="/" data-toggle="modal" data-target="#commentsModal"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp; Comments</a>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <span class="incdec" id="comments" style={{color: this.state.isMouseInside1 ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn1} onMouseLeave={this.hoverOff1} onClick={this.increaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleUp}/></span>&nbsp; {this.state.articlescore} &nbsp;
            <span class="incdec" id="comments" style={{color: this.state.isMouseInside2 ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn2} onMouseLeave={this.hoverOff2} onClick={this.decreaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleDown}/>  </span>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <a id="commentstn" href="/"data-toggle="modal" data-target="#shareModal"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>&nbsp;
          </div>
        </div>

        <CommentsPopup />

        <SharePopup/>
      </div>

    )
  }
}
export default Dash
