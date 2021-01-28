import React from 'react';
import { Alert } from 'react-bootstrap';
import { SubTitle } from '../../styledComponent/GlobalStyle';
import { useSelector} from 'react-redux';

const AlertExample = (props) => {
    const {show , setShow} = props
    const {message , isError , errorMessage} = useSelector(state => state.signin);
   
  return (
        <>
          <Alert show={show} variant={isError ? 'danger' : 'success'} onClose={() => setShow(false)} dismissible className="w-50 mx-auto alert">
            <SubTitle className="text-center">
                 {isError ? errorMessage : message}
            </SubTitle>
          </Alert>
      </>
      ) 
  
}

export default AlertExample;