import React from 'react';
import {BrowserRouter as Router  , Route , Switch  } from 'react-router-dom';
import MobileSection from './MobileSection';
import Sub_Mobile_Section from './Sub_Mobile_Section';

function Main(props) {
    const {match } = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={MobileSection}/>
      <Route path={`${match.path}/:slug`} component={Sub_Mobile_Section} />
    </Switch>
  )
}

export default Main;
