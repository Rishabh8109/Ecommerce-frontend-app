import React , {useState} from 'react'
import { Col , Row } from 'react-bootstrap';
import { ListGroup } from '../categoryBarElements';
import {
    DropdownMenu, ListGroupItem,ListGroupChildItem
} from './DropdownElements';
import {useSelector } from 'react-redux';
import {NavLink } from 'react-router-dom';


function CategoryDropdown(props ) {
   const categoryState = useSelector(state => state.category);
   const data = categoryState.data;
   const {index , open , setOpen} = props;
 
   
   
  return (
   <DropdownMenu open={open} className="shadow-sm" onMouseLeave={() => setOpen(false)}>
      <ListGroup className="px-4">
        <Row>
          {
             data && data.map(({children ,_id} , parentIndex) => (
                 <React.Fragment key={_id}>
                    {
                        parentIndex === index && children.map(row => (
                            <Col className="py-2 mb-4 h-100">
                               <NavLink to={`/${row.category_name}`} className="link">
                                     <ListGroupItem>{row.category_name}</ListGroupItem>
                               </NavLink>
                                {
                                  row.children.map(({category_name}) => (
                                    <NavLink to={`/${row.category_name}/${category_name}` } className="link">
                                        <ListGroupChildItem className="mt-2">{category_name}</ListGroupChildItem>
                                    </NavLink>
                                  ))
                                }
                            </Col>
                        ))
                    }
                 </React.Fragment>
             ))
          }
        </Row>
      </ListGroup>
   </DropdownMenu>
  )
}

export default CategoryDropdown;
