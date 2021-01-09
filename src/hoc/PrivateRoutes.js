
import { Route , Redirect } from 'react-router-dom';

function PrivateRoutes({component: Component , ...rest}) {
   return (
   <Route {...rest} component={(props) => {
     const token = window.localStorage.getItem('token');
     if(token) {
       return <Component {...props} />
     } else {
       return <Redirect to={`/account/Login`} exact/>
     }
   }} />
   )
}

export default PrivateRoutes;