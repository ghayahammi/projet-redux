import React, { Component } from 'react';
import './App.css';
import ListTask from './ListTask';
import AddTask from './AddTask';



class App extends Component {
  render() {
    return (
      <div className="App">
    <ListTask/>
    <AddTask/>
  
      </div>
    );
  }
}

export default App;
