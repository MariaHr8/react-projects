import React, { useState } from 'react';
import './App.css';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="App" >
      <section className="container">
        <h3> {people.length} birthdays today </h3>
        <List people={people}/>
        <button
          onClick={() => console.log('you clicked me')}>Clear All</button>
      </section>
    </div>
  );
}


export default App;
