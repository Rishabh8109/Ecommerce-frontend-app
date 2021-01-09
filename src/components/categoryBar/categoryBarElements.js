import styled from 'styled-components';

export const Categorybar = styled.div`
    background-color:white;
    width:100%;
    height:65px;
`

export const ListGroup = styled.ul`
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding-top:1rem;
  width:90%;
  margin:auto;
`;


export const ListGroupItem = styled.li`
   list-style-type:none;
   font-family:'Karla' , sans-serif;
   font-size:18px;
   cursor:pointer;
   &:hover {
       color:blue;
   }
`

