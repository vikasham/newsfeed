import React, { Component } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
import '../css/Dashrow.css'

class Dashrow extends Component
{
  render(){
    return(
      <div class="bg-light">
        <div id="dashrow" class="row">
          <div class="col-sm-4">
            <ArticleThumbnail/>
          </div>
          <div class="col-sm-4">
            <ArticleThumbnail/>
          </div>
          <div class="col-sm-4">
            <ArticleThumbnail/>
          </div>
        </div>
      </div>

    )
  }
}
export default Dashrow
