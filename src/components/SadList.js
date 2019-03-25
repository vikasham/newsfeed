import React, { Component } from 'react';

class SadList extends Component
{
  createSadPlacesList()
  {
    const { sadplaces } = this.props;

    // return a list of JSX items
    // map() a function available on an array
    // lets you iterate over each element of an array
    // give it a callback function, runs the function on each element
    // the information passed into your allback is the item itself and its key
    // you write a function, and what's returned from that function, is placed
    // in its respective spot in a new location in its array
    return sadplaces.map((item, key) => {
      return <li key={key}>{item}</li>;
    });
  }

  render()
  { // generates a list of schools
    const { myname, myage, mystatus} = this.props;
    return (
      <div>
        <h1>What's up, {myname}!</h1>
        <h2>You are {myage} years old!</h2>
        <h3>{myname}'s Status: {mystatus}</h3>
        <ul>
          {this.createSadPlacesList()}
        </ul>
      </div>
    );
  }
}

export default SadList;
