import React , {useState} from 'react'

import OnDrawImage from '../../assets/Images/undraw_web_shopping_dd4l.png';
import TextField from '@material-ui/core/TextField';
import { Title , SubTitle } from '../../styledComponent/GlobalStyle';
import {Link} from 'react-router-dom';

function SignUp() {
     const [Email , setEmail] = useState('');
     const [username , setusername] = useState('');
     const [mobileNumber , setmobileNumber] = useState('');
     const [password , setpassword] = useState('');
  

     const handleSubmit = () => {

     }

  return (
         <div className="row">
              <div className="col-sm-4 mx-auto py-3">
                  <Title>Look's like you are new here</Title>
                  <SubTitle>SignUp with your mobile number or Email address</SubTitle>
                  <img src={OnDrawImage} alt="login_page_image" className="img-responsive " width="100%" />
              </div>
              <div className="col-sm-4 mx-auto">
                 <form onSubmit={handleSubmit}>
                      <TextField  label="Username" className="w-100" value={username} onChange={(e) => setusername(e.target.value)}/>
                      <TextField  label="Email address" className=" mt-3 w-100" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                      <TextField  label="Mobile number" className=" mt-3 w-100" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)}/>
                      <TextField label="password" className="mt-3 w-100" value={password} onChange={(e) => setpassword(e.target.value)}/>
                      <button type="submit" className="btn btn-block btn-primary mt-4">Login</button>
                 </form>
                 <SubTitle className="text-primary text-center mt-5"><Link to="/account/Login">New customer? SignIn</Link></SubTitle>
              </div>
        </div>
      
  )
}

export default SignUp;
