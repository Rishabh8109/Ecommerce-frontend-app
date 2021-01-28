import React , {useEffect, useState} from 'react';
import { Navbar ,Container, Nav, NavBrand, NavItems} from './NavBarElement';
import {NavLink , useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Loginbutton from '../Button/LoginButton';
import Badge from '@material-ui/core/Badge';
import AuthenticationModal from '../../pages/Account/AuthenticationModal';
import Typography from "@material-ui/core/Typography";
import {useSelector} from 'react-redux';

function Navbars() {
  const token = localStorage.getItem('token');
  const [lgShow, setLgShow] = useState(false);
  const history = useHistory();
  const { product } = useSelector((state) => state.cart);

   useEffect(() => {
     let timer;
     if(!token) {
      timer = setInterval(() => {
          setLgShow(true);
          history.push('/account/Login');
        },3000);
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
                    <NavLink to="/view_cart" className="d-flex align-items-center">
                      <Badge badgeContent={product && product.length} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                      <Typography variant="h6" gutterBottom className="ml-2">
                        cart
                      </Typography>
                    </NavLink>
               </NavItems>
          </Nav>
       </Container>
      </Navbar>
    </>
  )
}

export default Navbars;
