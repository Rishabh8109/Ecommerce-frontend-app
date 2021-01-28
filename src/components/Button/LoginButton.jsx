import React , {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Dropdown , Triangle} from '../Navbar/NavBarElement';
import {LoginButton} from '../Navbar/NavBarElement';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {Link , useHistory} from 'react-router-dom';

function Loginbutton(props) {
 const {setLgShow} = props;
  const [show , setShow] = useState(false);
  const history = useHistory();

  const logout = () => {
     console.log('loggout')
    localStorage.removeItem('token');
    history.go(0);
    
  }
  
  return (
    <>
        <Link to="/account/Login">
           <LoginButton onMouseEnter={() => setShow(!show)} onClick={() => setLgShow(true)}>Login</LoginButton>
        </Link>
         <Dropdown show={show} onMouseLeave={() => setShow(false)} className="shadow">
            <Paper style={{width : '250px'  }}>
             <MenuList>
              <MenuItem className="d-flex justify-content-around align-items-center shadow-sm mb-3"><span>New Coustmor</span><span className="text-primary">Sign Up</span></MenuItem>
              <MenuItem className="d-flex justify-content-start align-items-center"><AccountCircleOutlinedIcon className="mr-3 text-primary"/>Profile</MenuItem>
              <MenuItem className="d-flex justify-content-start align-items-center"><FavoriteBorderOutlinedIcon  className="mr-3 text-primary" />Wishlist</MenuItem>
              <MenuItem className="d-flex justify-content-start align-items-center"  onClick={logout}><ExitToAppOutlinedIcon  className="mr-3 text-primary"/>Logout</MenuItem>
             </MenuList>
            </Paper>
          <Triangle />
       </Dropdown>
    </>
  )
}

export default Loginbutton;
