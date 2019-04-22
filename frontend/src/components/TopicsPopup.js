import React from 'react'
import { Component } from 'react'


class TopicsPopup extends Component{
  constructor(props){
    super(props)
    this.state={
      loggedIn: this.props.loggedIn,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
    }
    this.saveTopics = this.saveTopics.bind(this);
  }
  toggleCheck1 = (e) => {
    if(this.state.checked1){
      this.setState({checked1: false})
    }else{
      this.setState({checked1: true})
    }
  };
  toggleCheck2 = (e) => {
    if(this.state.checked2){
      this.setState({checked2: false})
    }else{
      this.setState({checked2: true})
    }
  };
  toggleCheck3 = (e) => {
    if(this.state.checked3){
      this.setState({checked3: false})
    }else{
      this.setState({checked3: true})
    }
  };
  toggleCheck4 = (e) => {
    if(this.state.checked4){
      this.setState({checked4: false})
    }else{
      this.setState({checked4: true})
    }
  };
  toggleCheck5 = (e) => {
    if(this.state.checked5){
      this.setState({checked5: false})
    }else{
      this.setState({checked5: true})
    }
  };
  toggleCheck6 = (e) => {
    if(this.state.checked6){
      this.setState({checked6: false})
    }else{
      this.setState({checked6: true})
    }
  };
  saveTopics = (e) => {
    //onclick for save changes button
    alert('saving topics')
  };
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
                  <input type="checkbox" name="radio" id="radio1" onClick={this.toggleCheck1} checked={this.state.checked1} />
                  <label for="radio1">Entertainment</label>
              </div>
              <div class="funkyradio-primary">
                  <input type="checkbox" name="radio" id="radio2" onClick={this.toggleCheck2} checked={this.state.checked2}/>
                  <label for="radio2">Sports</label>
              </div>
              <div class="funkyradio-success">
                  <input type="checkbox" name="radio" id="radio3" onClick={this.toggleCheck3} checked={this.state.checked3}/>
                  <label for="radio3">Politics</label>
              </div>
              <div class="funkyradio-danger">
                  <input type="checkbox" name="radio" id="radio4" onClick={this.toggleCheck4} checked={this.state.checked4}/>
                  <label for="radio4">Technology</label>
              </div>
              <div class="funkyradio-warning">
                  <input type="checkbox" name="radio" id="radio5" onClick={this.toggleCheck5} checked={this.state.checked5}/>
                  <label for="radio5">Business</label>
              </div>
              <div class="funkyradio-info">
                  <input type="checkbox" name="radio" id="radio6" onClick={this.toggleCheck6} checked={this.state.checked6}/>
                  <label for="radio6">Science</label>
              </div>
          </div>
            </div>
            <div class="modal-footer">
              <button onClick={this.saveTopics} type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TopicsPopup
