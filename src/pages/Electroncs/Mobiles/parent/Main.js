import React from 'react';
import {BrowserRouter as Router  , Route , Switch  } from 'react-router-dom';
import MobileSection from '../child/MobileSection';
import Sub_Mobile_Section from '../child/ProductCard';

function Main(props) {
    const {match} = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`}>
         <MobileSection />
      </Route>
      <Route path={`${match.path}/:slug`} component={Sub_Mobile_Section} />
    </Switch>
  )
}

export default Main;
