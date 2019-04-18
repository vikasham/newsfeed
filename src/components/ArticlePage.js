import React from "react";
import { Component } from 'react'
import stock from '../img/stock.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleNav from './TitleNav'

import CommentsPopup from './CommentsPopup'
import SharePopup from './SharePopup'
import {faCommentAlt, faArrowCircleUp, faArrowCircleDown, faPaperPlane, faUndo, faNewspaper} from '@fortawesome/free-solid-svg-icons'
import '../css/ArticlePage.css'

class ArticlePage extends Component{
  render(){
    return(
      <div>

        <div class="container-fluid fixed-top">
          <TitleNav />
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
                    <a id="comments" href="/"><FontAwesomeIcon icon={faArrowCircleUp}/></a>&nbsp; 26k &nbsp;
                    <a  id="comments" href="/"><FontAwesomeIcon icon={faArrowCircleDown}/>  </a>
                  </div>
                  <div id="iconcol" class="col-sm-4">
                    <a id="comments" href="/"data-toggle="modal" data-target="#shareModal"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>&nbsp;
                  </div>
                </div>
                <br />
                <hr />
                <div id="articleAuthor"><strong>By Author Name</strong></div>
                <div id="articleDate"><small>April 17, 2019</small></div>
                <hr />
                <br />
                <p id="articleContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                <br /><br />
            </div>
            <div class="col col-lg-2">
            </div>
          </div>
        </div>

        <CommentsPopup />
        <SharePopup />
      </div>
    )
  }
}

export default ArticlePage
