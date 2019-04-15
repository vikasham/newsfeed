import React, { Component } from 'react'
import stock from '../img/stock.jpg'
import '../css/ArticleThumbnail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt, faArrowUp, faArrowDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

class Dash extends Component
{
  render(){
    return(
      <div class="card">
        <a href="/">
          <img class="card-img-top" alt="article thumbnail" src={stock}/>
        </a>
        <div class="card-body">
          <a href="/">
            <h5 class="card-title">Article Title</h5>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
        </div>
        <div class="card-body row" id="comments">
          <div class="col-sm-4">
            <a  id="comments" href="/"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp; Comments</a>
          </div>
          <div class="col-sm-4">
            <a id="comments" href="/"><FontAwesomeIcon icon={faArrowUp}/>  </a> &nbsp; 26k &nbsp;

            <a  id="comments" href="/"><FontAwesomeIcon icon={faArrowDown}/>  </a>
          </div>
          <div class="col-sm-4">
            <a id="comments" href="/"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>
          </div>
        </div>

      </div>

    )
  }
}
export default Dash
