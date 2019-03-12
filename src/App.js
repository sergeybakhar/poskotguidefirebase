import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Card/>
      <Footer/>
      </>
    );
  }
}

export default App;
