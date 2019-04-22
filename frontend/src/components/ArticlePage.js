import React from "react";
import { Component } from 'react'
import stock from '../img/stock.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleNav from './TitleNav'
import LoginPopup from './LoginPopup'
import RegisterPopup from './RegisterPopup'

import CommentsPopup from './CommentsPopup'
import SharePopup from './SharePopup'
import {faCommentAlt, faArrowCircleUp, faArrowCircleDown, faPaperPlane, faUndo, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import '../css/ArticlePage.css'

class ArticlePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      articlescore: 29,
      loggedIn: true,
      isMouseInside1: false,
      isMouseInside2: false,
      scoreIncreased: false,
      scoreDecreased: false,
      color1: false,
      color2: false
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
    this.hoverOn1 = this.hoverOn1.bind(this);
    this.hoverOn2 = this.hoverOn2.bind(this);
    this.hoverOff1 = this.hoverOff1.bind(this);
    this.hoverOff2 = this.hoverOff2.bind(this);

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
    var score = this.state.articlescore;
    return(
      <div id="articlepage">

        <div class="container-fluid fixed-top">
          <TitleNav loggedIn={this.state.loggedIn}/>
        </div>
        <br /><br /><br />
        <div id="returnhome" class="float-left"><a href="/"><FontAwesomeIcon icon={faUndo}/> Return to homepage</a></div>
        <div id="originalarticle" class="float-right"><a href="/"><FontAwesomeIcon icon={faNewspaper}/> View original article</a></div>
        <br />
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">
            </div>
            <div class="col-md">
                <h1 class="text-center" id="articleTitle"><strong>Article Title</strong></h1>

                <br />
                <div class="text-center">
                  <img class="float-center" alt="article thumbnail" src={stock}/>
                </div>
                <br />
                <div class="row text-center" id="comments">
                  <div id="iconcol" class="col-sm-4">
                    &nbsp; <a  id="comments" href="/" data-toggle="modal" data-target="#commentsModal"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp; Comments</a>
                  </div>
                  <div id="iconcol" class="col-sm-4">
                    <span class="incdec" id="comments" style={{color: (this.state.isMouseInside1 || this.state.color1) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn1} onMouseLeave={this.hoverOff1} onClick={this.increaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleUp}/></span>&nbsp; {score} &nbsp;
                    <span class="incdec" id="comments" style={{color: (this.state.isMouseInside2 || this.state.color2) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn2} onMouseLeave={this.hoverOff2} onClick={this.decreaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleDown}/>  </span>
                  </div>
                  <div id="iconcol" class="col-sm-4">
                    <a id="comments" href="/"data-toggle="modal" data-target="#shareModal"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>&nbsp;
                  </div>
                </div>
                <br />
                <hr />
                <div id="articleAuthor"><strong>By Author Name</strong></div>
                <hr />
                <br />
                <p id="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                <br /><br />
            </div>
            <div class="col col-lg-2">
            </div>
          </div>
        </div>
        <LoginPopup />
        <RegisterPopup />
        <CommentsPopup />
        <SharePopup />
      </div>
    )
  }
}

export default ArticlePage
