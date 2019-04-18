import React from "react";
import { Component } from 'react'
import stock from '../img/stock.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleNav from './TitleNav'
import CommentsList from './CommentsList'
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

        <div class="modal fade" id="commentsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><FontAwesomeIcon icon={faCommentAlt}/></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" >
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Comments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add a Comment</a>
                  </li>
                </ul>
                <br/><br/>
                <div class="tab-content">
                  <div id="home" class="tab-pane active">
                    <CommentsList />
                  </div>
                  <div id="menu1" class="tab-pane fade">
                    <form action="#" method="post" class="form-horizontal" id="commentForm" role="form">
                        <div class="form-group">
                            <label for="email" class="col-sm-2 control-label">Comment</label>
                            <div class="col-sm-10">
                              <textarea class="form-control" name="addComment" id="addComment" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button class="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span class="glyphicon glyphicon-send"></span> Submit comment</button>
                            </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticlePage
