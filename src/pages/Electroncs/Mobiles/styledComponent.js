import styled  from 'styled-components';

export const Header = styled.div`
  max-height:25vh auto;
  background:white;
  width:100%;
  border-radius:6px;
`

export const Section = styled.section`
   height:100%;
   width:100%;
`
export const ProductCard = styled.div`
   background-color:white;
   height:auto;
   width:100%;
   border-radius:6px;

   &:hover {
      cursor:pointer;
   }
`

export const MainImage = styled.img`
   max-width:140px;
   margin: 2rem 10rem;
   display:block;
`

export const ChildImage = styled.div`
 
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:300px;

  img {
     width:10%;
     margin-top:.6rem;

     &:hover {
         cursor:pointer;
     }
  }
`
export const Image = styled.img`
   transform : scale(.8);
   max-width:80%;
   border:1px solid transparent;
   transition:.4s;
   padding:3px;

   &:hover {
      border:1px solid blueviolet;
   }
  
`;

export const Images = styled.img`
     width:35px;
     margin-top:2rem;
     transform:translateY(20%);
     padding:.3rem;
     transition:.7s;
     border:${({active}) => active ? "1px solid blueviolet" : "none"};
    
`

export const Sub_Title = styled.h5`
    font-family: 'Roboto' ,'sans-serif';
    color:black;
    font-size:20px;   
`;
export const Sub_Title2 = styled.h6`
    font-family: 'Roboto' ,'sans-serif';
    color:blue;
    font-size:18px;
    

    &:hover {
       color:blue;
      
    }
`;

export const Para = styled.p`
     font-family: 'Roboto' ,'sans-serif';
     font-size:16px;
     color:black; 
     width:90%;
     opacity:.7;
`
export const CartButton = styled.button`
     width:197px;
     height:45px;
     background-color:${({loading}) => loading ? 'grey' : '#FA8700'};
     outline:none;
     border:none;
     font-family : 'Roboto' ,sans-serif;
     font-weight:500;
     text-transform:uppercase; 
     color:white;
     border-radius:2px;
     margin-right:10px;
     box-shadow: 1px 1px 4px 0px #42413fcc;
    
     
`

export const WishlistButton = styled(CartButton)`
   background-color:#FF3D00;
`