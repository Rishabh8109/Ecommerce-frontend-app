import React , {useEffect, useState} from 'react';
import { Navbar ,Container, Nav, NavBrand, NavItems} from './NavBarElement';
import {NavLink , useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Loginbutton from '../Button/LoginButton';
import AuthenticationModal from '../../pages/Account/AuthenticationModal';

function Navbars() {
  const token = localStorage.getItem('token');
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();
 

   useEffect(() => {
     let timer;
     if(!token) {
      timer = setInterval(() => {
          setLgShow(true);
          history.push('/account/Login');
        },5000);
     }
       
      return () =>  clearInterval(timer);

    },[])
  
  return (
    <>
    <AuthenticationModal 
      lgShow={lgShow}
      setLgShow={setLgShow}
    />
     <Navbar className="shadow-sm">
       <Container>
          <Nav className="d-flex justify-content-between align-items-center">
                         <NavBrand>
                           <NavLink to="/">
                               Wallmart
                           </NavLink>
                        </NavBrand>
               <NavItems className="d-flex justify-content-around align-items-center navItems">
                    <Loginbutton setLgShow={setLgShow}/>
                    <NavLink to="/cart">
                       <ShoppingCartIcon />
                        cart
                    </NavLink>
               </NavItems>
          </Nav>
       </Container>
      </Navbar>
    </>
  )
}

export default Navbars;
