import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom';
import Navbars from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import MyCart from './pages/cart/MyCart';
import './App.css';
import CategoryBar from './components/categoryBar/CategoryBar';
import PrivateRoutes from './hoc/PrivateRoutes';


function App() {
  return (
  <Router>
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
                    </Switch>
              </div>
          </div>
        </div>
  </Router>
  );
}

export default App;
