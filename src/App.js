import React from 'react';
import Card from './components/Card';
import CardsList from './components/CardsList';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Intro from './components/Intro';
import Map from './components/Map';
import styles from './App.module.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TopCards from './components/TopCards';

const App = () => (
  <div className={styles.container}>
    <HashRouter>
      <>
        <Header />
        <Intro />
        <Switch>
          <Route exact path="/" component={CardsList} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/:id/:cardURL/" component={Card} />
          <Route exact path="/404.html" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        <TopCards />
        <Footer />
      </>
    </HashRouter>
  </div>
);

export default App;
