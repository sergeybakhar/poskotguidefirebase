import React, { Component } from 'react';
import Card from './components/Card';
import CardsList from './components/CardsList';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HashRouter>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={CardsList} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/:id/:cardURL/" component={Card} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </>
        </HashRouter>
      </div>
    );
  }
}

function NoMatch() {
  return <h1>Not Found</h1>
}

export default App;
