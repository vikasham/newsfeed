import React, { Component } from 'react'
import stock from '../img/stock.jpg'
import '../css/ArticleThumbnail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt, faArrowCircleUp, faArrowCircleDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import CommentsPopup from './CommentsPopup'

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
            <h5 class="text-center card-title">Article Title</h5>
          </a>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
        </div>

        <div class="card-body row text-center" id="comments">
          <div id="iconcoltn" class="col-sm-4">
            &nbsp; <a  id="commentstn" href="/" data-toggle="modal" data-target="#commentsModal"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp; Comments</a>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <a id="commentstn" href="/"><FontAwesomeIcon icon={faArrowCircleUp}/></a>&nbsp; 26k &nbsp;
            <a  id="commentstn" href="/"><FontAwesomeIcon icon={faArrowCircleDown}/>  </a>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <a id="commentstn" href="/"data-toggle="modal" data-target="#shareModal"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>&nbsp;
          </div>
        </div>

        <CommentsPopup />

        <div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Share</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Dash
