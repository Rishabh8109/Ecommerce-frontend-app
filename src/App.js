import React, { useState } from 'react'
import { LastLocationProvider } from 'react-router-last-location';
import {BrowserRouter as Router  , Route , Switch  } from 'react-router-dom';
import Navbars from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import MyCart from './pages/cart/MyCart';
import './App.css';
import CategoryBar from './components/categoryBar/CategoryBar';
import PrivateRoutes from './hoc/PrivateRoutes';
import {route} from './Routes/routes';


function App() {

  return (
  <Router>
    <LastLocationProvider>
        <div className="App">
          <div className="row">
              <div className="col-sm-12">
                  <Navbars />
              </div>
              <div className="col-sm-12">
                  <CategoryBar />
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                     <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoutes  path="/cart" component={MyCart} />
                        {
                           route &&  route.map(({component , path}) => (
                               <PrivateRoutes  path={path} component={component} />
                            ))
                        }
                     </Switch>
              </div>
          </div>
        </div>
    </LastLocationProvider>
  </Router>
  );
}

export default App;
