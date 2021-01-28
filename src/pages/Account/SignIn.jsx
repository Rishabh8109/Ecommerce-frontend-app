import React , { useState} from 'react'
import OnDrawImage from '../../assets/Images/undraw_web_shopping_dd4l.png';
import TextField from '@material-ui/core/TextField';
import { Title , SubTitle } from '../../styledComponent/GlobalStyle';
import {Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {SignInRequest , SignInSuccess , SignInError} from '../../stateManager/Authentication/AuthAction';

function SignIn(props) {
  const [Email , setEmail] = useState('');
  const [password , setpassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const {setShow ,setLgShow} = props;

  const handleSignin = (e) => {
      e.preventDefault();
      dispatch(SignInRequest());


      const url = 'http://localhost:5000/api/user/signin';
      axios({
        method : 'POST',
        url : url,
        data :{
            Email : Email,
            password : password
        }
      }).then(res => {
        
         dispatch(SignInSuccess(res.data));
         setShow(true);

         // for modal hide
         setLgShow(false);

         // after authentication push the home directory
         history.push('/');

         // for refreshing the page
         history.go(0);

      }).catch(err => {
          setShow(true);
          dispatch(SignInError(err.response.data.error));
      });
   
      // clear all fields
      setEmail('');
      setpassword('');

  }
  return (
         <div className="row">
              <div className="col-sm-4 mx-auto py-3">
                  <Title>Login</Title>
                  <SubTitle>Get access to your Orders, Wishlist and Recommendations</SubTitle>
                  <img src={OnDrawImage} alt="login_page_image" className="img-responsive " width="100%" />
              </div>
              <div className="col-sm-4 mx-auto">
                 <form onSubmit={handleSignin}>
                   <TextField id="standard-basic" label="Email address" className="w-100" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField id="standard-basic" label="password" className="mt-3 w-100" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <button type="submit" className="btn btn-block btn-primary mt-4">Login</button>
                 </form>
                 <SubTitle className="text-primary text-center mt-5"><Link to="/account/SignUp">New customer? Signup</Link></SubTitle>
              </div>
        </div>
      
  )
}

export default SignIn;
