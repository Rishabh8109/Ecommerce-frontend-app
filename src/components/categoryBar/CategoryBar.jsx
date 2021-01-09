import React , {useEffect} from 'react'
import { Container } from '../Navbar/NavBarElement';
import  {Categorybar , ListGroup, ListGroupItem } from './categoryBarElements';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {useSelector , useDispatch} from 'react-redux';
import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailed
} from '../../stateManager/category/categoryAction';

import axios from 'axios';

function CategoryBar() {
 
   const categoryState = useSelector(state => state.category);
   const dispatch = useDispatch();
   const token = localStorage.getItem('token');
   const headers = {
    Authorization: `Bearer ${token}`,
  };
 
 const categories = categoryState.data;

  //category coming from the server
  useEffect(() => {
    dispatch(getCategoryRequest());
    axios({
      method: "GET",
      url: "http://localhost:5000/api/category",
      headers: headers,
    }).then((res) => {
        dispatch(getCategorySuccess(res.data.category));
      })
      .catch((err) => {
         console.log(err.response);
      });
  },[])

  return (
         <Categorybar className="shadow-sm">
            <Container>
                <ListGroup>
                  {
                    categories && categories.map(({category_name , _id}) => (
                         <React.Fragment key={_id}>
                             <ListGroupItem >{category_name} <ExpandMoreOutlinedIcon /></ListGroupItem>
                        </React.Fragment>
                    ))
                  }
                </ListGroup>
            </Container>
        </Categorybar>
  );
}

export default CategoryBar
