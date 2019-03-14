import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
