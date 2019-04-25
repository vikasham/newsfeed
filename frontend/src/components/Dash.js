import React, { Component } from 'react'
import Dashrow from './Dashrow'

class Dash extends Component
{
  constructor(props) {
    super(props)

    this.state={
      business: [],
      entertainment: [],
      science: [],
      all: [],
      technology: [],
      politics: [],
      sports: [],
      array: [],
      arrayUsed: [],
      rows: [],
      loaded: 0,
      shown: "all"
    }
    this.getSports()
    this.getBusiness()
    this.getTechnology()
    this.getBusiness()
    this.getScience()
    this.getPolitics()
    this.getEntertainment()
    this.getAll()
    this.getAll=this.getAll.bind(this)
    this.getSports=this.getSports.bind(this)
    this.getTechnology=this.getTechnology.bind(this)
    this.getPolitics=this.getPolitics.bind(this)
    this.getEntertainment=this.getEntertainment.bind(this)
    this.getScience=this.getScience.bind(this)
    this.setSports=this.setSports.bind(this)
    this.getBusiness=this.getBusiness.bind(this)
    this.setBusiness=this.setBusiness.bind(this)
    this.setAll=this.setAll.bind(this)
    this.setScience=this.setScience.bind(this)
    this.setEntertainment=this.setEntertainment.bind(this)
    this.setTechnology=this.setTechnology.bind(this)
    this.setPolitics=this.setPolitics.bind(this)
    this.initializeNews=this.initializeNews.bind(this)
  }
  getSports(){
    fetch('https://www.polytime.solutions/sports')
    .then(results => {
      return results.json()
    }).then(data => {
      var sports1=[]
      sports1=data
      this.setState({sports: sports1})
      })
  }

  getBusiness(){
    fetch('https://www.polytime.solutions/business')
    .then(results => {
      return results.json()
    }).then(data => {
      var business1=[]
      business1=data
      this.setState({business: business1})
      if(this.props.topic=="business"){
        this.setBusiness()
      }

      })
  }

  getScience(){
    fetch('https://www.polytime.solutions/science')
    .then(results => {
      return results.json()
    }).then(data => {
      var science1=[]
      science1=data
      this.setState({science: science1})

      })
  }

  getAll(){
    fetch('https://www.polytime.solutions/all')
    .then(results => {
      return results.json()
    }).then(data => {
      var all1=[]
      all1=data
      this.setState({all: all1})
      if(this.props.topic=="all"){
        this.setAll()
      }
      })
  }

  getEntertainment(){
    fetch('https://www.polytime.solutions/entertainment')
    .then(results => {
      return results.json()
    }).then(data => {
      var entertainment1=[]
      entertainment1=data
      this.setState({entertainment: entertainment1})
      })
  }

  getTechnology(){
    fetch('https://www.polytime.solutions/all')
    .then(results => {
      return results.json()
    }).then(data => {
      var technology1=[]
      technology1=data
      this.setState({technology: technology1})
      })
  }

  getPolitics(){
    fetch('https://www.polytime.solutions/politics')
    .then(results => {
      return results.json()
    }).then(data => {
      var politics1=[]
      politics1=data
      this.setState({politics: politics1})
      })
  }

  setSports(){
    if(this.props.topic=="sports"){
      var sports1=this.state.sports
      this.setState({array: sports1}, () =>
      this.initializeNews()
      )
    }
  }
  setBusiness(){
    if(this.props.topic=="business"){
      var business1=this.state.business
      this.setState({array: business1}, () =>
      this.initializeNews()
      )
    }
  }

  setScience(){
    if(this.props.topic=="science"){
      var science1=this.state.science
      this.setState({array: science1}, () =>
      this.initializeNews()
      )

    }
  }

  setAll(){
    if(this.props.topic=="all"){
      var all1=this.state.all
      this.setState({array: all1}, () =>
      this.initializeNews()
      )
    }
  }

  setEntertainment(){
    if(this.props.topic=="entertainment"){
      var entertainment1=this.state.entertainment
      this.setState({array: entertainment1}, () =>
      this.initializeNews()
      )

    }
  }

  setTechnology(){
    if(this.props.topic=="technology"){
      var technology1=this.state.technology
      this.setState({array: technology1}, () =>
      this.initializeNews()
      )
    }
  }

  setPolitics(){
    if(this.props.topic=="politics"){
      var politics1=this.state.politics
      this.setState({array: politics1}, () =>
      this.initializeNews()
      )
    }
  }

  componentDidUpdate(){
    if(this.state.business.length!=0 && this.state.entertainment.length!=0
      && this.state.technology.length!=0 && this.state.politics.length!=0 &&
      this.state.all.length!=0 && this.state.science.length!=0 &&
      this.state.sports.length!=0
    ){
      if(this.props.topic=="business" && this.state.shown!="business"){
        this.setBusiness()
        this.setState({shown: "business"})
      }
      if(this.props.topic=="entertainment" && this.state.shown!="entertainment"){
        this.setEntertainment()
        this.setState({shown: "entertainment"})
      }
      if(this.props.topic=="politics" && this.state.shown!="politics"){
        this.setPolitics()
        this.setState({shown: "politics"})
      }
      if(this.props.topic=="sports" && this.state.shown!="sports"){
        this.setSports()
        this.setState({shown: "sports"})
      }
      if(this.props.topic=="technology" && this.state.shown!="technology"){
        this.setTechnology()
        this.setState({shown: "technology"})
      }
      if(this.props.topic=="all" && this.state.shown!="all"){
        this.setAll()
        this.setState({shown: "all"})
      }
      if(this.props.topic=="science" && this.state.shown!="science"){
        this.setScience()
        this.setState({shown: "science"})
      }
    }

  }
  loadOnScroll=(e) => {
    if(this.state.currentCount==this.state.total) return;
    var el=document.getElementById('content-end')
    var rect=el.getBoundingClientRect()
    var isAtEnd=(
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    if(isAtEnd){
      var x=this.state.currentCount
      var limit=this.state.total
      var arr=this.state.array
      var arrayU=this.state.arrayUsed
      if((limit-x)<12){
        this.setState({arrayUsed: arr})
      }
      else{
        for(let i=x-1; x<12; i++){
          arrayU.push(arr[i])
        }
        this.setState({arrayUsed: arrayU})
        this.setState({currentCount: arrayU.length})
      }
      let row=[]
      var array=this.state.arrayUsed
      var first;
      var second;
      var third;
      for (var i = 0; i < array.length; i++) {
          if(i%3==0){
            first=array[i];
          }
          if(i%3==1){
            second=array[i];
          }
          if(i%3==2){
            third=array[i];
            row.push(<Dashrow first={first} second={second} third={third} topic={this.state.topic} rownum={i}/>)
            row.push(<br/>)
            row.push(<br/>)
          }
      }
      this.setState({rows: row})
    }
  }


  initializeNews(){
    var arrayU=[]
    if(12>this.state.array.length){
      var array=this.state.array
      arrayU=array
      this.setState({arrayUsed: this.state.array})
      this.setState({currentCount: array.length})
      this.setState({total: array.length})
    }
    else{
      var array=this.state.array
      for(var i=0; i<12; i++){
        arrayU.push(array[i])
      }
      this.setState({total: array.length})
      this.setState({currentCount: arrayU.length})
      this.setState({arrayUsed: arrayU})
    }
    let row=[]
    var array=arrayU
    var first;
    var second;
    var third;
    for (var i = 0; i < array.length; i++) {
        if(i%3==0){
          first=array[i];
        }
        if(i%3==1){
          second=array[i];
        }
        if(i%3==2){
          third=array[i];
          row.push(<Dashrow first={first} second={second} third={third} rownum={i}/>)
          row.push(<br/>)
          row.push(<br/>)
        }
    }
    this.setState({rows: row})
  }

  componentDidMount(){
    window.addEventListener('scroll', this.loadOnScroll);
  }

  render(){
      return(
        <div class="bg-light w-100">
          <br/><br/><br/>
          <h1>Todays News: {this.props.topic}</h1>
          {this.state.rows}
          {
            (this.state.currentCount !== this.state.total) ?
            <div id="content-end">
            Please wait. Loading...
            </div>: null
          }
        </div>
      )
    }

  }

export default Dash
