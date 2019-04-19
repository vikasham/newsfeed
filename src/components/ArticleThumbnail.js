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

    this.state = { articlescore: 29}
    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
  }
  increaseScore = (e) => {
      this.setState({ articlescore: this.state.articlescore + 1 });
      //increment article score member variable
  };
  decreaseScore = (e) => {
      this.setState({ articlescore: this.state.articlescore - 1 });
      //decrement article score member variable
  };
  render(){
    var score = this.state.articlescore;
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
            <a id="commentstn" onClick={this.increaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleUp}/></a>&nbsp; {score} &nbsp;
            <a id="commentstn" onClick={this.decreaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleDown}/>  </a>
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
