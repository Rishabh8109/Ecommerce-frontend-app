import styled , {keyframes} from 'styled-components';


export const Title = styled.h2`
  font-family:"Karla",sans-serif;
  font-weight:bold;
`
const zoomIn = keyframes`
  from {
     width:0;
  }
  to {
   width:100%;
   
  }
`

export const SubTitle = styled.p`
    font-family:"Karla",sans-serif;
    font-weight:bold;
    opacity: .8;
    padding:.5rem 0;

    a {
        color:black;
        font-family:"Poppins", sans-serif;
        margin : .5rem;
         position:relative;

        &.active:after {
           content:'';
           width:100%;
           position:absolute;
           bottom:-40.5px;
           left:0;
           background:blueviolet;
           height:4px;
           animation : ${zoomIn} .3s ease-in-out;
        }

        &:hover {
            text-decoration:none;
            color:blue;
        }
    }
`

