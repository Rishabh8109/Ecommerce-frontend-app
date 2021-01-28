import styled from 'styled-components';

export const DropdownMenu = styled.div`
  background-color:white;
  width:75%;
  margin:auto;
  height:${({open}) => open ? "inital" : "0"};
  transition: height 1s ease;
  opacity: ${({open}) => open ? 1 : 0};
  display: ${({open}) => open ? 'block' : 'none'};
  position:absolute;
  left:13%;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  z-index:10
  
`
export const ListGroupItem = styled.li`
   list-style-type:none;
   font-family:'Arial' , sans-serif;
   font-size:19px;
   font-weight:500;
   color:blueviolet;
   cursor:pointer;
   &:hover {
       color:blueviolet;
       text-decoration:none;
   }
`
export const ListGroupChildItem = styled.li`
   list-style-type:none;
   font-family:'Arial' , sans-serif;
   font-size:17px;
   font-weight:500;
   cursor:pointer;
   opacity:.7;
   &:hover {
      opacity:1;
      text-decoration:none;
   }
`
