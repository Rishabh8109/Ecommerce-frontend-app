import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color:rgb(22, 126, 245);
    width:100%;
    height:65px;
   
`
export const Container = styled.div`
   width:80%;
   margin:auto;
   display:block;
`
export const NavBrand = styled.span`
   font-family:'Poppins' ,sans-serif;
   text-decoration:none;
   color:whitesmoke;
   font-size:1.5rem;
   font-weight:bold;
   letter-spacing:1px;

   a {
       color:white;
       &:hover {
       text-decoration:none;
       color:white;
       cursor:pointer;
     }
   }
`

export const Nav = styled.div`
   width:100%;
   padding:.8rem 0;
   
`
export const NavItems = styled.div`
   width:300px;
   position:relative;
   a {
       color:white;
       text-decoration:none;
       font-family:'Roboto' , sans-serif;
       font-weight:500;
       font-size:20px;
       &:hover {
        text-decoration:none;
         color:white;
          cursor:pointer;
       }
   }
  
  

`;


export const LoginButton = styled.button`
   width:150px;
   background:white;
   border:none;
   outline:none;
   padding:.3rem .5rem;
   text-transform:uppercase;
   font-family:'Karla' , sans-serif;
   font-weight:600;
   color:rgb(22, 126, 245);
   position : relative;
   font-size:18px;

`

export const Dropdown = styled.div`
    position:absolute;
    top:180%;
    left:-5%;
    z-index:1;
    opacity:${({show}) => show ? 1 : 0};
    display:${({show}) => show ? 'block' : 'none'};
    transition : opacity  .1s ease-out;
`

export const Triangle = styled.div`
   background:white;
   width:50px;
   height:50px;
   position:absolute;
   top:-6%;
   left:40%;
   z-index:-1;
   transform:rotate(135deg);

`