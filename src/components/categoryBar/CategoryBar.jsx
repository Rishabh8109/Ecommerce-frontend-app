import React , {useEffect , useState} from 'react'
import { Container } from '../Navbar/NavBarElement';
import  {Categorybar , ListGroup, ListGroupItem } from './categoryBarElements';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import {useSelector , useDispatch} from 'react-redux';
import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailed
} from '../../stateManager/category/categoryAction';

import axios from 'axios';
import CategoryDropdown from './Dropdown/CategoryDropdown';


function CategoryBar() {
  const [Index, setindex] = useState('');
  const [open, setOpen] = useState(false);
   const categoryState = useSelector(state => state.category);
   const dispatch = useDispatch();
  
  
  
 const categories = categoryState.data;
 

  //category coming from the server
  useEffect(() => {
    dispatch(getCategoryRequest());
    axios({
      method: "GET",
      url: "http://localhost:5000/api/category",
     
    }).then((res) => {
        dispatch(getCategorySuccess(res.data.category));
      })
      .catch((err) => {
         console.log(err.response);
      });
  },[])
  
  // index wise categoryShow
  const openDropdown = (index) => {
    setindex(index);
    setOpen(true)
  };

  // check index for icon 
  const openIcon = (index) => {
    if(open && index === Index) {
      return <ExpandLessOutlinedIcon />
    } else {
      return <ExpandMoreOutlinedIcon />
    }
  }

  
  return (
    <>
      <Categorybar className="shadow-sm ">
        <Container>
          <ListGroup className="d-flex justify-content-around align-items-center">
            {categories &&
              categories.map(({ category_name, _id }, index) => (
                <React.Fragment key={_id}>
                  <ListGroupItem
                    onMouseEnter={() => openDropdown(index)}
                    onClick={() => setOpen(!open)}
                  >
                    {category_name}{" "}
                    {openIcon(index)}
                  </ListGroupItem>
                </React.Fragment>
              ))}
          </ListGroup>
        </Container>
      </Categorybar>
      <CategoryDropdown
        index={Index}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default CategoryBar;
