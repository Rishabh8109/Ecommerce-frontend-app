import React , {useState} from 'react'
import  {
   Modal,
   ModalBody,
} from 'react-bootstrap';
import OnDrawImage from '../../assets/Images/undraw_web_shopping_dd4l.png';
import TextField from '@material-ui/core/TextField';
import { Title , SubTitle } from '../../styledComponent/GlobalStyle';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Route , Switch , NavLink} from 'react-router-dom';
import Alert from '../../components/alert/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useDispatch, useSelector} from 'react-redux';

function AuthenticationModal(props) {
 
 const {lgShow ,setLgShow} = props;
 const [show, setShow] = useState(false);
 const signinState = useSelector(state => state.signin);
 
  return (
       <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal"
      >
        {
          signinState.loading &&  <LinearProgress />
        }
        <Modal.Header closeButton>
        
            <SubTitle>
                <NavLink to="/account/Login">SignIn</NavLink>
            </SubTitle>
            <SubTitle>
                  <NavLink to="/account/SignUp">SignUp</NavLink>
            </SubTitle>
            <Alert setShow={setShow} show={show}/>
        </Modal.Header>
         <ModalBody>
         
           <Switch>
            <Route exact path="/account/Login">
                 <SignIn
                  setShow={setShow}
                  setLgShow={setLgShow}
                  />
            </Route>
            <Route exact path="/account/SignUp" component={SignUp}></Route>
          </Switch>
        </ModalBody>
      </Modal>
  )
}

export default AuthenticationModal;
