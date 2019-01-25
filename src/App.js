import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BlockContainer from './components/BlockContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <BlockContainer />
      </div>
    );
  }
}

export default App;
