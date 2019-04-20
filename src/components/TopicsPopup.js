import React from 'react'
import { Component } from 'react'


class TopicsPopup extends Component{
  render(){
    return(
      <div class="modal fade" id="topicsmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">My Topics</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            <div class="funkyradio">
              <div class="funkyradio-other">
                  <input type="checkbox" name="radio" id="radio1" />
                  <label for="radio1">Entertainment</label>
              </div>
              <div class="funkyradio-primary">
                  <input type="checkbox" name="radio" id="radio2"/>
                  <label for="radio2">Sports</label>
              </div>
              <div class="funkyradio-success">
                  <input type="checkbox" name="radio" id="radio3" />
                  <label for="radio3">Politics</label>
              </div>
              <div class="funkyradio-danger">
                  <input type="checkbox" name="radio" id="radio4" />
                  <label for="radio4">Technology</label>
              </div>
              <div class="funkyradio-warning">
                  <input type="checkbox" name="radio" id="radio5" />
                  <label for="radio5">Business</label>
              </div>
              <div class="funkyradio-info">
                  <input type="checkbox" name="radio" id="radio6" />
                  <label for="radio6">Science</label>
              </div>
          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TopicsPopup
