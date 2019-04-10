import React from 'react';
import Card from './components/Card';
import CardsList from './components/CardsList';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import styles from './App.module.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <div className={styles.container}>
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={CardsList} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:id/:cardURL/" component={Card} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </>
    </HashRouter>
  </div>
);

export default App;
