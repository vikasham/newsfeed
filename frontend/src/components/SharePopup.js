import React from "react";
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'




class SharePopup extends Component{
  constructor(params){
    super(params){
      this.copyToClipboard = this.copyToClipboard.bind(this)
    }
  }

  copyToClipboard(e){
      this.textArea.select();
      document.execCommand('copy')
      // This is just personal preference.
      // I prefer to not show the the whole text area selected.
      e.target.focus();
    }

    sendMessage(e){
      let sid = process.env.TWILIO_SID
      let token = process.env.TWILIO_TOKEN
      let process = process.env.TWILIO_NUMBER
    }

  render(){
    return(
      <div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><FontAwesomeIcon icon={faPaperPlane}/></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="copylink">Copy Link to Article</label>
                  <div class="input-group mb-3">
                    <input ref={(textarea) => this.textArea = textarea}
                      id="copylink" type="text" class="form-control" value="google.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    {
                     document.queryCommandSupported('copy') &&
                      <div class="input-group-append">
                        <button class="btn btn-outline-primary" onClick={this.copyToClipboard}>Copy</button>
                      </div>
                    }
                  </div>
                </div>
              </form>
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
export default SharePopup
