import React, { Component } from 'react'
import stock from '../img/stock.jpg'
import '../css/ArticleThumbnail.css'

class Dash extends Component
{
  render(){
    return(
      <div id="thumbnail">
        <a href="/">
          <img class="img-responsive" alt="article thumbnail" src={stock}/>
          <br/>
          Article Title
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
      </div>

    )
  }
}
export default Dash
