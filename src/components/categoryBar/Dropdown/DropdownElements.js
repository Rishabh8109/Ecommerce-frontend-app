import styled from 'styled-components';

export const DropdownMenu = styled.div`
  background-color:#FBFBFB;
  width:70%;
  margin:auto;
  max-height:${({open}) => open ? "60vh" : "0"};
  opacity: ${({open}) => open ? 1 : 0};
  display: ${({open}) => open ? 'block' : 'none'};
  transition:max-height 1s linear;
  position:absolute;
  left:15%;
  z-index:10;
  
`
export const ListGroupItem = styled.li`
   list-style-type:none;
   font-family:'Arial' , sans-serif;
   font-size:19px;
   font-weight:500;
   color:black;
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
