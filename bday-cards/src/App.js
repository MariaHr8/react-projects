import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <section className="container">
          <h3> 0 birthdays today </h3>
          <List />
          <button
            onClick={() => console.log('you clicked me')}>Clear All</button>
        </section>
      </div>
    );
  }

}

export default App;
