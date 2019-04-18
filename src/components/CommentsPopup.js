import React from "react";
import { Component } from 'react'
import CommentsList from './CommentsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons'

class CommentsPopup extends Component{
  render(){
    return(
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
    )
  }
}

export default CommentsPopup
